import { useState, useEffect } from 'react';
interface Product {
  title: string;
  img: string;
  link: string;
  date_generated?: string;
}
// Google Sheet "AliExpress Automation Data" — read access publié (Anyone with link → Viewer)
// Lecture directe via gviz JSON, sans backend Replit.
const SHEET_ID = '1DwBT1Obnn8PiiDMLRRQIxE6k9YJEMe98_AkERDB9Uu4';
const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
// Handle ISO 8601 ("2026-03-29T00:39:33.761Z") and DD/MM/YYYY ("29/03/2026" or "29/03/2026 12:34:56")
function parseDateMs(raw: string | undefined): number {
  if (!raw) return 0;
  const fr = /^(\d{2})\/(\d{2})\/(\d{4})(?:[,\s]+(\d{2}):(\d{2}):(\d{2}))?/.exec(raw);
  if (fr) {
    const [, dd, mm, yyyy, hh = '00', min = '00', ss = '00'] = fr;
    return Date.UTC(+yyyy, +mm - 1, +dd, +hh, +min, +ss);
  }
  const t = new Date(raw).getTime();
  return isNaN(t) ? 0 : t;
}
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
export default function DynamicProducts() {
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
        const titleIdx        = colMap['title'];
        const imgIdx          = colMap['main_image'];
        const linkIdx         = colMap['affiliate_link'] ?? colMap['lien_affilié'];
        const dateIdx         = colMap['date_generated'] ?? colMap['date_génération'];
        const statusIdx       = colMap['status'];
        const PUBLISHED = new Set(['ACTIVE', 'published']);
        const mapped: Product[] = dataRows
          .map((row): (Product & { status: string }) | null => {
            const title = cellString(row, titleIdx);
            const img = cellString(row, imgIdx);
            const link = cellString(row, linkIdx);
            const date_generated = cellString(row, dateIdx);
            const status = cellString(row, statusIdx).trim();
            // Skip incomplete rows
            if (!title || !img || !link) return null;
            return { title, img, link, date_generated, status };
          })
          .filter((p): p is Product & { status: string } => p !== null && PUBLISHED.has(p.status))
          .map(({ status: _status, ...p }) => p);
        // Sort by date descending, keep only the 4 most recent
        const latest = [...mapped]
          .sort((a, b) => parseDateMs(b.date_generated) - parseDateMs(a.date_generated))
          .slice(0, 4);
        setProducts(latest);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Produits dynamiques
            </h2>
            <p className="text-gray-600 text-base">
              Chargement en cours...
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="text-red-500">Erreur : {error}</p>
          </div>
        </div>
      </section>
    );
  }
  if (products.length === 0) {
    return null;
  }
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Dernières pépites
          </h2>
          <p className="text-gray-600 text-base">
            Mes nouvelles trouvailles à ne pas manquer
          </p>
        </div>
        <div id="product-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="product-card bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-64 overflow-hidden bg-gray-50">
                <img 
                  src={product.img} 
                  alt={product.title}
                  title={product.title}
                  className="product-image w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4">
                <h3 className="product-title text-base font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[3rem]">
                  {product.title}
                </h3>
                
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="product-button w-full bg-pink-500 text-white text-center py-3 rounded-xl font-medium hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  Voir l&apos;offre
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}