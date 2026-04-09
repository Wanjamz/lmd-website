import React from 'react';
import * as LucideIcons from 'lucide-react';

/**
 * ServiceIcon Component
 * 
 * Maps a string name (e.g., "Target") to a Lucide icon component.
 * Used for dynamic icon rendering from siteData.
 */
const ServiceIcon = ({ name, className = '', size = 24, strokeWidth = 1.5 }) => {
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    // Fallback if the icon name is not found
    return <LucideIcons.HelpCircle size={size} className={className} strokeWidth={strokeWidth} />;
  }

  return <IconComponent size={size} className={className} strokeWidth={strokeWidth} />;
};

export default ServiceIcon;
