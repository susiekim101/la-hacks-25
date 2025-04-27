// src/components/HStack.tsx
import React from 'react';

interface HStackProps {
  children: React.ReactNode;
  spacing?: string; // e.g., '1rem', '20px'
  alignItems?: React.CSSProperties['alignItems']; // e.g., 'center', 'flex-start'
  justifyContent?: React.CSSProperties['justifyContent']; // e.g., 'space-between', 'center'
  className?: string; // Allow passing additional classes
}

const HStack: React.FC<HStackProps> = ({
  children,
  spacing = '1rem', // Default spacing
  alignItems = 'center', // Default vertical alignment
  justifyContent, // No default horizontal justification
  className = '',
}) => {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row', // Explicitly set to row
    gap: spacing, // Use gap for spacing between items
    alignItems: alignItems,
    justifyContent: justifyContent,
  };

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default HStack;