export default function Skeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-80 bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-5">
        {/* Category Badge */}
        <div className="w-20 h-6 bg-gray-200 rounded-full mb-3"></div>
        
        {/* Title */}
        <div className="space-y-2 mb-4">
          <div className="h-5 bg-gray-200 rounded w-full"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        </div>
        
        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-200 rounded w-24"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}