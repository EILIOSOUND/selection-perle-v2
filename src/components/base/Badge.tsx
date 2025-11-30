interface BadgeProps {
  children: React.ReactNode;
  variant?: 'pink' | 'green' | 'blue' | 'purple' | 'gray';
  size?: 'sm' | 'md' | 'lg';
}

export default function Badge({ children, variant = 'pink', size = 'md' }: BadgeProps) {
  const variantClasses = {
    pink: 'bg-pink-50 text-pink-500',
    green: 'bg-green-50 text-green-500',
    blue: 'bg-blue-50 text-blue-500',
    purple: 'bg-purple-50 text-purple-500',
    gray: 'bg-gray-100 text-gray-600'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-2 text-sm'
  };

  return (
    <span className={`inline-block font-medium rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </span>
  );
}