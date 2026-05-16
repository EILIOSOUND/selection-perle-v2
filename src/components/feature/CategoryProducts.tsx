import { useState, useEffect } from 'react';
interface Product {
  id: string;
  title: string;
  img: string;
  link: string;
  category: string;
  subCategory: string;
  audience: string;
}
interface Props {
  category: string;
  subCategory?: string;
  audience?: string;
}
// Google Sheet "AliExpress Automation Data" — read access publié (Anyone with link → Viewer)
// Lecture directe via gviz JSON, sans backend Replit.
const SHEET_ID = '1DwBT1Obnn8PiiDMLRRQIxE6k9YJEMe98_AkERDB9Uu4';
const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
const SHOE_GROUP = [
  'Sneakers',
  'Bottes',
  'Sandales',
  'Chaussons',
  'Chaussures de ville',
  'Chaussures',
];
// gviz response is wrapped in a JS callback:
//   /*O_o*/\ngoogle.visualization.Query.setResponse({...});
// Strip the wrapper to get the inner JSON.
interface GvizCell { v?: string | number | null }
interface GvizRow { c: (GvizCell | null)[] }
interface GvizCol { label?: string; id?: string }
interface GvizTable { cols: GvizCol[]; rows: GvizRow[] }
interface GvizResponse { table: GvizTable }
function parseGviz(text: string): GvizResponse {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('Réponse gviz invalide');
  return JSON.parse(text.substring(start, end + 1)) as GvizResponse;
}
// Build a header → column index map from the FIRST data row (rows[0]).
// gviz `cols[].label` is empty when the spreadsheet has no explicit column labels,
// so the actual header strings live in rows[0].c[].v.
function buildColMapFromHeaderRow(headerRow: GvizRow): Record<string, number> {
  const map: Record<string, number> = {};
  headerRow.c.forEach((cell, i) => {
    if (!cell || cell.v === null || cell.v === undefined) return;
    const key = String(cell.v).trim();
    if (key) map[key] = i;
  });
  return map;
}
function cellString(row: GvizRow, idx: number | undefined): string {
  if (idx === undefined) return '';
  const cell = row.c[idx];
  if (!cell || cell.v === null || cell.v === undefined) return '';
  return String(cell.v);
}
export default function CategoryProducts({ category, subCategory, audience }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch(GVIZ_URL)
      .then(res => {
        if (!res.ok) throw new Error('Erreur de chargement');
        return res.text();
      })
      .then((text) => {
        const data = parseGviz(text);
        const allRows = data.table.rows;
        if (allRows.length === 0) {
          setProducts([]);
          setLoading(false);
          return;
        }
        // rows[0] = header row, rows[1+] = products
        const colMap = buildColMapFromHeaderRow(allRows[0]);
        const dataRows = allRows.slice(1);
        // Support both English and legacy French headers
        const idIdx       = colMap['product_id'];
        const titleIdx    = colMap['title'];
        const imgIdx      = colMap['main_image'];
        const linkIdx     = colMap['affiliate_link'] ?? colMap['lien_affilié'];
        const categoryIdx = colMap['category'];
        const subIdx      = colMap['sub_category'] ?? colMap['subCategory'];
        const audienceIdx = colMap['audience'];
        const statusIdx   = colMap['status'];
        const PUBLISHED = new Set(['ACTIVE', 'published']);
        const all: Product[] = dataRows
          .map((row, index): (Product & { status: string }) | null => {
            const title = cellString(row, titleIdx);
            const img = cellString(row, imgIdx);
            const link = cellString(row, linkIdx);
            const status = cellString(row, statusIdx).trim();
            // Skip incomplete rows
            if (!title || !img || !link) return null;
            const id = cellString(row, idIdx) || `${title}-${index}`;
            return {
              id,
              title,
              img,
              link,
              category: cellString(row, categoryIdx),
              subCategory: cellString(row, subIdx),
              audience: cellString(row, audienceIdx) || 'unisexe',
              status,
            };
          })
          .filter((p): p is Product & { status: string } => p !== null && PUBLISHED.has(p.status))
          .map(({ status: _status, ...p }) => p);
        const filtered = all.filter(p => {
          const matchCat = p.category === category;
          let matchSub = true;
          if (subCategory) {
            if (subCategory === 'Chaussures') {
              matchSub = SHOE_GROUP.includes(p.subCategory);
            } else {
              matchSub = p.subCategory === subCategory;
            }
          }
          const matchAudience = audience ? p.audience === audience : true;
          return matchCat && matchSub && matchAudience;
        });
        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [category, subCategory, audience]);
  if (loading) return null;
  if (error) return null;
  if (products.length === 0) return null;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="product-card bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-64 overflow-hidden bg-gray-50">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-4 line-clamp-2">
                  {product.title}
                </h3>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-pink-500 text-white text-center py-3 rounded-xl font-medium hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
                >
                  Voir l’offre
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}