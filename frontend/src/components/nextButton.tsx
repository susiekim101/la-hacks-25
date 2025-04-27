// src/components/NextButton.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/NextButton.module.css'; // We'll create this CSS module next

// Define the props the component accepts
interface NextButtonProps {
  targetPath: string;            // REQUIRED: The route to navigate to
  buttonText?: string;         // Optional: Text to display (defaults to "Next")
  disabled?: boolean;          // Optional: Whether the button is disabled
  className?: string;          // Optional: Allows adding extra CSS classes
}

const NextButton: React.FC<NextButtonProps> = ({
  targetPath,
  buttonText = "Next", // Default text is "Next"
  disabled = false,
  className = '',
}) => {
  const navigate = useNavigate();

  // Handler to perform navigation
  const handleClick = () => {
    if (!disabled) {
      console.log(`Navigating to ${targetPath}...`);
      navigate(targetPath);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      // Combine the default styles with any custom classes passed in
      className={`${styles.nextButton} ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default NextButton;