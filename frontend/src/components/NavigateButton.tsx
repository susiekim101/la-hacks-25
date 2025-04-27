// Example: src/components/NavigateButton.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook

// Define props
interface NavigateButtonProps {
  targetPath: string;    // The route to navigate to (e.g., "/about", "/profile")
  buttonText: string;    // Text displayed on the button
  className?: string;    // Optional CSS class for styling
  disabled?: boolean;   // Optional disabled state
}

const NavigateButton: React.FC<NavigateButtonProps> = ({
  targetPath,
  buttonText,
  className = '', // Default to empty string if no class is provided
  disabled = false,
}) => {
  const navigate = useNavigate(); // Get the navigation function

  // Handler function to call when the button is clicked
  const handleNavigateClick = () => {
    console.log(`Navigating to ${targetPath}`);
    navigate(targetPath); // Perform the navigation
  };

  return (
    <button
      type="button"
      onClick={handleNavigateClick} // Attach the handler
      className={className}        // Apply any custom styles
      disabled={disabled}          // Apply disabled state
    >
      {buttonText}
    </button>
  );
};

export default NavigateButton;