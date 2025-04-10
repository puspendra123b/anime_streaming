import { useState, useEffect } from 'react';

export default function Loader({ size = "medium", fullScreen = false }) {
  // Determine the size class
  const sizeClass = {
    small: "w-6 h-6 border-2",
    medium: "w-10 h-10 border-3",
    large: "w-16 h-16 border-4",
  }[size] || "w-10 h-10 border-3";

  // White color for the spinner
  const colorClass = "border-white";

  // Combine styles
  const spinnerClass = `${sizeClass} ${colorClass} border-t-transparent rounded-full animate-spin`;
  
  // Container styles based on fullScreen prop
  const containerClass = fullScreen 
    ? "fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50" 
    : "flex items-center justify-center";

  return (
    <div className={containerClass} role="status" aria-label="Loading">
      <div className={spinnerClass}></div>
    </div>
  );
}