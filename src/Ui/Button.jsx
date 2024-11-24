import React from "react";

export default function Button({
  children: name,
  className,
  onClick,
  ...props
}) {
  return (
    <button
      className={`px-12 py-3 rounded-md   ${className}`}
      onClick={onClick}
      {...props}
    >
      {name}
    </button>
  );
}
