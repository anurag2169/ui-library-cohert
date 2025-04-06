import React from "react";

// Variants of input fields (default, outline, filled)
const variantClasses = {
  default: "bg-gray-100 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-300",
  outline: "bg-transparent text-gray-800 border border-gray-400 focus:ring-2 focus:ring-blue-500 hover:border-blue-300",
  filled: "bg-gray-200 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-500 hover:bg-gray-300",
};

// Sizes of input fields
const sizeClasses = {
  sm: "text-xs px-3 py-1",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-3",
};

const dashedClasses = "border-dashed border-2";

// Input component with a new `dashed` prop for dashed borders
export const Input = ({
  type = "text",
  variant = "default",
  size = "md",
  className = "",
  placeholder = "",
  icon = null,
  error = "",
  dashed = false, // new dashed prop
  width = "auto", // width control prop
  ...rest
}) => {
  const base = `${dashed ? dashedClasses : ""} rounded-md ${variantClasses[variant]} ${sizeClasses[size]} focus:outline-none ${className}`;

  return (
    <div className="relative" style={{ maxWidth: width }}>
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {icon}
        </span>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`pl-10 ${base}`} // Adds padding to left if there's an icon
        {...rest}
      />

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};
