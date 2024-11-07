import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  className?: string; // Optional className for additional styling
}

const Select: React.FC<SelectProps> = ({ id, value, onChange, options, placeholder, className }) => (
  <select
    id={id}
    value={value}
    onChange={onChange}
    className={`border border-gray-300 rounded-md p-2 text-sm ${className} focus:outline-none focus:ring-2 focus:ring-blue-500`}
  >
    {placeholder && (
      <option value="" disabled>
        {placeholder}
      </option>
    )}
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
