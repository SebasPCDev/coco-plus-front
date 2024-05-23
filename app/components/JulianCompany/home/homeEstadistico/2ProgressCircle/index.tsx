import React from 'react';

interface ProgressCircleProps {
    value: number;
    color: string;
    size?: 'sm' | 'md' | 'lg';
  }
  

  const ProgressCircle: React.FC<ProgressCircleProps> = ({ value, color, size = 'md' }) => {
    const sizeClasses = {
      sm: 'w-12 h-12',
      md: 'w-20 h-20',
      lg: 'w-28 h-28',
    };
  
    const circumference = 2 * Math.PI * (size === 'sm' ? 24 : size === 'md' ? 32 : 40);
    const strokeDashOffset = circumference - (value / 100) * circumference;
  
    return (
      <div className={`relative ${sizeClasses[size]} rounded-full`}>
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset: strokeDashOffset }}
            transform="rotate(-90) translate(-100)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          {value}%
        </div>
      </div>
    );
  };
  
  export default ProgressCircle;