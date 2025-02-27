import React from 'react';
import Image from 'next/image';

interface TeamLogoProps {
  teamName: string;
  size?: number;
  className?: string;
}

export default function TeamLogo({ teamName, size = 32, className = '' }: TeamLogoProps) {
  const [imageError, setImageError] = React.useState(false);
  const teamNameFormatted = teamName.toLowerCase().replace(/\s+/g, '-');
  const logoPath = `/team-logos/${teamNameFormatted}.png`;
  
  // Generate initials for fallback
  const getInitials = (name: string): string => {
    return name
      .split(/\s+/)
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  const initials = getInitials(teamName);
  
  // Get a deterministic color based on team name
  const getColor = (name: string): string => {
    // Simple hash function
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Convert hash to color - using Tanzania's flag colors as base
    const colors = ['#008848', '#fcd116', '#000000', '#0000a7'];
    return colors[Math.abs(hash) % colors.length];
  };
  
  const bgColor = getColor(teamName);
  
  if (imageError) {
    return (
      <div 
        className={`flex items-center justify-center font-bold text-white rounded-full overflow-hidden ${className}`}
        style={{ 
          width: size, 
          height: size, 
          backgroundColor: bgColor,
          fontSize: `${Math.max(size / 3, 10)}px`
        }}
      >
        {initials}
      </div>
    );
  }
  
  return (
    <div className={`relative rounded-full overflow-hidden ${className}`} style={{ width: size, height: size }}>
      <Image 
        src={logoPath}
        alt={`${teamName} logo`}
        width={size}
        height={size}
        className="object-contain"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
