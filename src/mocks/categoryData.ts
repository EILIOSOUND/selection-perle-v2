export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
  category: string;
  subCategory: string;
  link: string;
}

export interface CategoryData {
  filters: string[];
  products: Product[];
}

export const categoryData: Record<string, CategoryData> = {
  shopping: {
    filters: ['Tout', 'Vêtements', 'Accessoires', 'Bijoux', 'Chaussures', 'Montres'],
    products: [
      {
        id: 1,
        name: "Robe d'été fleurie rouge",
        price: 45.99,
        originalPrice: 72.99,
        discount: '-37%',
        image: 'https://readdy.ai/api/search-image?query=elegant%20red%20floral%20summer%20dress%20on%20beige%20background%2C%20fashion%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20warm%20minimalist%20backdrop&width=400&height=500&seq=shop1&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Vêtements',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 2,
        name: 'Pantalon cargo streetwear',
        price: 59.99,
        originalPrice: 89.99,
        discount: '-34%',
        image: 'https://readdy.ai/api/search-image?query=urban%20cargo%20pants%20streetwear%20on%20neutral%20background%2C%20fashion%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20backdrop&width=400&height=500&seq=shop2&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Vêtements',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 3,
        name: 'T-shirt vintage original',
        price: 29.99,
        originalPrice: 47.99,
        discount: '-38%',
        image: 'https://readdy.ai/api/search-image?query=vintage%20original%20tshirt%20on%20white%20background%2C%20fashion%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=shop3&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Vêtements',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 4,
        name: "Boucles d'oreilles élégantes dorées",
        price: 34.99,
        originalPrice: 61.99,
        discount: '-44%',
        image: 'https://readdy.ai/api/search-image?query=elegant%20gold%20earrings%20on%20dark%20background%2C%20jewelry%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20natural%20minimalist%20backdrop&width=400&height=500&seq=shop4&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Bijoux',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 5,
        name: 'Montre minimaliste cuir marron',
        price: 129.99,
        originalPrice: 199.99,
        discount: '-35%',
        image: 'https://readdy.ai/api/search-image?query=minimalist%20brown%20leather%20strap%20watch%20on%20white%20background%2C%20luxury%20timepiece%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=shop5&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Montres',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 6,
        name: 'Sac à main cuir caramel',
        price: 89.99,
        originalPrice: 149.99,
        discount: '-40%',
        image: 'https://readdy.ai/api/search-image?query=caramel%20leather%20handbag%20on%20white%20background%2C%20luxury%20fashion%20accessory%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=shop6&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Accessoires',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 7,
        name: 'Lunettes de soleil cat-eye',
        price: 39.99,
        originalPrice: 69.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=cat-eye%20sunglasses%20on%20beige%20background%2C%20fashion%20accessory%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=shop7&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Accessoires',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 8,
        name: 'Écharpe en soie premium',
        price: 34.99,
        originalPrice: 59.99,
        discount: '-42%',
        image: 'https://readdy.ai/api/search-image?query=premium%20silk%20scarf%20colorful%20on%20white%20background%2C%20luxury%20fashion%20accessory%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=shop8&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Accessoires',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 9,
        name: 'Sneakers blanches tendance',
        price: 69.99,
        originalPrice: 109.99,
        discount: '-36%',
        image: 'https://readdy.ai/api/search-image?query=trendy%20white%20sneakers%20on%20clean%20white%20background%2C%20fashion%20footwear%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=shop9&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Chaussures',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 10,
        name: 'Collier perles naturelles',
        price: 24.99,
        originalPrice: 44.99,
        discount: '-45%',
        image: 'https://readdy.ai/api/search-image?query=natural%20pearl%20necklace%20on%20cream%20background%2C%20luxury%20jewelry%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=shop10&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Bijoux',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 11,
        name: 'Sandales compensées bohème',
        price: 44.99,
        originalPrice: 79.99,
        discount: '-44%',
        image: 'https://readdy.ai/api/search-image?query=bohemian%20wedge%20sandals%20on%20beige%20background%2C%20fashion%20footwear%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=shop11&orientation=portrait',
        category: 'Shopping',
        subCategory: 'Chaussures',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      }
    ]
  },

  'bien-etre': {
    filters: ['Tout', 'Soins visage', 'Beauté', 'Fitness', 'Aromathérapie', 'Nutrition'],
    products: [
      {
        id: 1,
        name: 'Sérum visage vitamine C',
        price: 19.99,
        originalPrice: 34.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=vitamin%20C%20face%20serum%20glass%20bottle%20on%20white%20marble%20background%2C%20skincare%20beauty%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien1&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Soins visage',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 2,
        name: 'Masque hydratant nuit',
        price: 14.99,
        originalPrice: 27.99,
        discount: '-46%',
        image: 'https://readdy.ai/api/search-image?query=night%20hydrating%20face%20mask%20jar%20on%20pink%20background%2C%20skincare%20beauty%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien2&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Soins visage',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 3,
        name: 'Tapis de yoga antidérapant',
        price: 29.99,
        originalPrice: 49.99,
        discount: '-40%',
        image: 'https://readdy.ai/api/search-image?query=non-slip%20yoga%20mat%20rolled%20on%20wooden%20floor%2C%20fitness%20wellness%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien3&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Fitness',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 4,
        name: 'Diffuseur huiles essentielles',
        price: 39.99,
        originalPrice: 64.99,
        discount: '-38%',
        image: 'https://readdy.ai/api/search-image?query=elegant%20essential%20oil%20diffuser%20with%20mist%20on%20white%20background%2C%20wellness%20aromatherapy%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien4&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Aromathérapie',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 5,
        name: 'Roller jade visage',
        price: 12.99,
        originalPrice: 22.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=green%20jade%20face%20roller%20on%20white%20marble%20background%2C%20beauty%20skincare%20tool%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien5&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Soins visage',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 6,
        name: 'Ensemble bandes résistance',
        price: 18.99,
        originalPrice: 32.99,
        discount: '-42%',
        image: 'https://readdy.ai/api/search-image?query=set%20of%20colorful%20resistance%20bands%20on%20white%20background%2C%20fitness%20sport%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien6&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Fitness',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 7,
        name: 'Huile essentielle lavande',
        price: 9.99,
        originalPrice: 17.99,
        discount: '-44%',
        image: 'https://readdy.ai/api/search-image?query=lavender%20essential%20oil%20small%20dark%20bottle%20on%20white%20background%20with%20dried%20lavender%2C%20aromatherapy%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien7&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Aromathérapie',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 8,
        name: 'Crème corps karité pur',
        price: 16.99,
        originalPrice: 29.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=pure%20shea%20butter%20body%20cream%20jar%20on%20beige%20background%2C%20beauty%20skincare%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien8&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Beauté',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 9,
        name: 'Supplément collagène marin',
        price: 34.99,
        originalPrice: 59.99,
        discount: '-42%',
        image: 'https://readdy.ai/api/search-image?query=marine%20collagen%20supplement%20bottle%20on%20white%20background%2C%20nutrition%20health%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien9&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Nutrition',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 10,
        name: 'Palette maquillage 12 teintes',
        price: 22.99,
        originalPrice: 39.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=12%20color%20makeup%20eyeshadow%20palette%20on%20white%20background%2C%20beauty%20cosmetics%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien10&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Beauté',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 11,
        name: 'Appareil massage Gua Sha',
        price: 27.99,
        originalPrice: 47.99,
        discount: '-42%',
        image: 'https://readdy.ai/api/search-image?query=gua%20sha%20face%20massage%20tool%20pink%20on%20white%20marble%20background%2C%20beauty%20skincare%20tool%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=bien11&orientation=portrait',
        category: 'Bien-être',
        subCategory: 'Soins visage',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      }
    ]
  },

  tech: {
    filters: ['Tout', 'Audio', 'Smartphones', 'Maison connectée', 'Gaming', 'Gadgets'],
    products: [
      {
        id: 1,
        name: 'Écouteurs sans fil ANC Pro',
        price: 49.99,
        originalPrice: 89.99,
        discount: '-44%',
        image: 'https://readdy.ai/api/search-image?query=premium%20wireless%20earbuds%20with%20case%20on%20white%20background%2C%20technology%20audio%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech1&orientation=portrait',
        category: 'Tech',
        subCategory: 'Audio',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 2,
        name: 'Mini caméra WiFi 1080p',
        price: 34.99,
        originalPrice: 59.99,
        discount: '-42%',
        image: 'https://readdy.ai/api/search-image?query=mini%20wifi%20security%20camera%201080p%20on%20white%20background%2C%20technology%20smart%20home%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech2&orientation=portrait',
        category: 'Tech',
        subCategory: 'Maison connectée',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 3,
        name: 'Manette gaming sans fil',
        price: 44.99,
        originalPrice: 74.99,
        discount: '-40%',
        image: 'https://readdy.ai/api/search-image?query=wireless%20gaming%20controller%20on%20black%20background%2C%20gaming%20technology%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech3&orientation=portrait',
        category: 'Tech',
        subCategory: 'Gaming',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 4,
        name: 'Chargeur sans fil 15W rapide',
        price: 24.99,
        originalPrice: 43.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=15W%20fast%20wireless%20charger%20pad%20on%20white%20background%2C%20technology%20gadget%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech4&orientation=portrait',
        category: 'Tech',
        subCategory: 'Gadgets',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 5,
        name: 'Enceinte Bluetooth portable',
        price: 39.99,
        originalPrice: 69.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=portable%20bluetooth%20speaker%20on%20white%20background%2C%20audio%20technology%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech5&orientation=portrait',
        category: 'Tech',
        subCategory: 'Audio',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 6,
        name: 'Lampe LED connectée RGB',
        price: 29.99,
        originalPrice: 54.99,
        discount: '-45%',
        image: 'https://readdy.ai/api/search-image?query=smart%20LED%20RGB%20lamp%20bulb%20on%20white%20background%2C%20smart%20home%20connected%20technology%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech6&orientation=portrait',
        category: 'Tech',
        subCategory: 'Maison connectée',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 7,
        name: 'Casque gaming RGB filaire',
        price: 55.99,
        originalPrice: 94.99,
        discount: '-41%',
        image: 'https://readdy.ai/api/search-image?query=RGB%20gaming%20headset%20on%20dark%20background%2C%20gaming%20technology%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech7&orientation=portrait',
        category: 'Tech',
        subCategory: 'Gaming',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 8,
        name: 'Stylet universel tablette',
        price: 19.99,
        originalPrice: 35.99,
        discount: '-44%',
        image: 'https://readdy.ai/api/search-image?query=universal%20stylus%20pen%20for%20tablet%20on%20white%20background%2C%20technology%20gadget%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech8&orientation=portrait',
        category: 'Tech',
        subCategory: 'Smartphones',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 9,
        name: 'Montre connectée sport GPS',
        price: 79.99,
        originalPrice: 139.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=GPS%20sport%20smartwatch%20on%20white%20background%2C%20technology%20wearable%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech9&orientation=portrait',
        category: 'Tech',
        subCategory: 'Gadgets',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 10,
        name: 'Hub USB-C 7 en 1',
        price: 34.99,
        originalPrice: 59.99,
        discount: '-42%',
        image: 'https://readdy.ai/api/search-image?query=USB-C%207%20in%201%20hub%20adapter%20on%20white%20background%2C%20technology%20accessory%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech10&orientation=portrait',
        category: 'Tech',
        subCategory: 'Gadgets',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 11,
        name: 'Coque téléphone magnétique',
        price: 14.99,
        originalPrice: 26.99,
        discount: '-44%',
        image: 'https://readdy.ai/api/search-image?query=magnetic%20phone%20case%20on%20white%20background%2C%20smartphone%20accessory%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=tech11&orientation=portrait',
        category: 'Tech',
        subCategory: 'Smartphones',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      }
    ]
  },

  loisirs: {
    filters: ['Tout', 'Jeux', 'Voyage', 'Lecture', 'Sport', 'Créativité'],
    products: [
      {
        id: 1,
        name: 'Puzzle 1000 pièces paysage',
        price: 16.99,
        originalPrice: 28.99,
        discount: '-41%',
        image: 'https://readdy.ai/api/search-image?query=1000%20pieces%20landscape%20jigsaw%20puzzle%20box%20on%20wooden%20table%2C%20hobby%20leisure%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois1&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Jeux',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 2,
        name: 'Sac à dos voyage 40L',
        price: 49.99,
        originalPrice: 84.99,
        discount: '-41%',
        image: 'https://readdy.ai/api/search-image?query=40L%20travel%20backpack%20on%20white%20background%2C%20travel%20leisure%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois2&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Voyage',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 3,
        name: 'Kit aquarelle professionnel',
        price: 27.99,
        originalPrice: 47.99,
        discount: '-42%',
        image: 'https://readdy.ai/api/search-image?query=professional%20watercolor%20paint%20kit%20on%20white%20background%2C%20art%20creativity%20hobby%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois3&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Créativité',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 4,
        name: 'Jeu de société stratégie',
        price: 34.99,
        originalPrice: 59.99,
        discount: '-42%',
        image: 'https://readdy.ai/api/search-image?query=strategy%20board%20game%20box%20on%20white%20background%2C%20leisure%20games%20hobby%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois4&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Jeux',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 5,
        name: 'Organisateur de voyage TSA',
        price: 22.99,
        originalPrice: 39.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=TSA%20travel%20organizer%20bag%20on%20white%20background%2C%20travel%20accessories%20leisure%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois5&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Voyage',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 6,
        name: 'Raquette de badminton duo',
        price: 29.99,
        originalPrice: 52.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=two%20badminton%20rackets%20and%20shuttlecock%20on%20white%20background%2C%20sport%20leisure%20hobby%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois6&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Sport',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 7,
        name: 'Stylo plume calligraphie',
        price: 18.99,
        originalPrice: 32.99,
        discount: '-42%',
        image: 'https://readdy.ai/api/search-image?query=calligraphy%20fountain%20pen%20on%20white%20background%2C%20art%20writing%20hobby%20creativity%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois7&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Créativité',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 8,
        name: 'Liseuse eBook 6 pouces',
        price: 64.99,
        originalPrice: 109.99,
        discount: '-41%',
        image: 'https://readdy.ai/api/search-image?query=6%20inch%20eBook%20reader%20device%20on%20white%20background%2C%20reading%20leisure%20technology%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois8&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Lecture',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      },
      {
        id: 9,
        name: 'Carnet dot grid premium',
        price: 12.99,
        originalPrice: 22.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=premium%20dot%20grid%20notebook%20on%20white%20background%2C%20reading%20writing%20creativity%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois9&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Lecture',
        link: 'https://s.click.aliexpress.com/e/_c4PB3T8J'
      },
      {
        id: 10,
        name: 'Ballon de foot taille 5',
        price: 24.99,
        originalPrice: 44.99,
        discount: '-44%',
        image: 'https://readdy.ai/api/search-image?query=size%205%20football%20soccer%20ball%20on%20white%20background%2C%20sport%20leisure%20outdoor%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois10&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Sport',
        link: 'https://s.click.aliexpress.com/e/_c4kq8ZcX'
      },
      {
        id: 11,
        name: 'Carte du monde à gratter',
        price: 19.99,
        originalPrice: 34.99,
        discount: '-43%',
        image: 'https://readdy.ai/api/search-image?query=scratch%20map%20of%20the%20world%20rolled%20on%20white%20background%2C%20travel%20decor%20hobby%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=lois11&orientation=portrait',
        category: 'Loisirs',
        subCategory: 'Voyage',
        link: 'https://s.click.aliexpress.com/e/_c3uxJKAP'
      }
    ]
  }
};
