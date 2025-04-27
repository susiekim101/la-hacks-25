// src/components/StyledTextInput.tsx

import React, { ChangeEvent, InputHTMLAttributes } from 'react'; // Import InputHTMLAttributes
import styles from '../css/StyledTextInput.module.css';

// Define the props by extending standard input attributes
// Use Omit to remove standard attributes we handle explicitly IF their types conflict
// (Often not needed for 'value' and 'onChange' if signatures match)
interface StyledTextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  // Props specific to this component or required
  value: string;                  // REQUIRED: Current value of the input
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; // REQUIRED: Function to call on change

  // className is part of InputHTMLAttributes, but we handle merging it, so keep it optional
  className?: string;

  // No need to explicitly list: type, placeholder, name, id, required, maxLength, etc.
  // They are inherited via InputHTMLAttributes<HTMLInputElement> and passed via ...rest
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({
  // Destructure props you need explicitly for logic/styling
  value,
  onChange,
  className = '',
  // 'rest' will capture all other standard input props (like type, placeholder, required)
  ...rest
}) => {
  return (
    <input
      // Use the required controlled props explicitly
      value={value}
      onChange={onChange}
      // Combine class names
      className={`${styles.styledInput} ${className}`}
      // Spread the rest of the standard HTML input attributes
      {...rest} // This passes down type, placeholder, required, name, id, etc.
    />
  );
};

export default StyledTextInput;