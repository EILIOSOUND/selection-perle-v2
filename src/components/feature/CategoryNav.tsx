import { Link } from 'react-router-dom';

export default function CategoryNav() {
  const categories = [
    {
      slug: 'shopping',
      name: 'Shopping',
      subtitle: 'Mode & Accessoires',
      icon: 'ri-shopping-bag-3-line',
      gradient: 'from-pink-400 to-pink-500'
    },
    {
      slug: 'bien-etre',
      name: 'Bien-être',
      subtitle: 'Beauté & Santé',
      icon: 'ri-heart-pulse-line',
      gradient: 'from-purple-400 to-purple-500'
    },
    {
      slug: 'tech',
      name: 'Tech',
      subtitle: 'Gadgets & Électronique',
      icon: 'ri-smartphone-line',
      gradient: 'from-cyan-400 to-cyan-500'
    },
    {
      slug: 'loisirs',
      name: 'Loisirs',
      subtitle: 'Jeux & Détente',
      icon: 'ri-gamepad-line',
      gradient: 'from-orange-400 to-orange-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          key={category.slug}
          to={`/category/${category.slug}`}
          className={`relative flex flex-col items-center justify-center gap-3 py-8 rounded-2xl bg-gradient-to-br ${category.gradient} text-white transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-xl`}
        >
          {/* Cercle décoratif en bas à droite */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full"></div>
          
          {/* Icon */}
          <div className="relative z-10 w-12 h-12 flex items-center justify-center">
            <i className={`${category.icon} text-3xl text-white`}></i>
          </div>
          
          {/* Category Name */}
          <div className="relative z-10 text-center">
            <span className="text-base font-semibold block text-white">
              {category.name}
            </span>
            <span className="text-xs block mt-1 text-white/80">
              {category.subtitle}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
