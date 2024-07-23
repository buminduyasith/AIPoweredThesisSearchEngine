"use client";
import React from "react";
import { RotatingLines } from "react-loader-spinner";

interface LoadingSpinnerProps {
  status?: string; // Optional status message
  isVisible: boolean; // Required prop to control visibility
}

const LoadingSpinner = ({ status, isVisible }: LoadingSpinnerProps) => {
  if (!isVisible) return null; // Render nothing if not visible

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"
        role="status"
      >
        {/* <img src='./spinner1.svg'  /> */}
        <RotatingLines
          strokeColor="grey"
          strokeWidth="3"
          animationDuration="0.75"
          width="50"
          visible={true}
        />
      </div>
      {status && (
        <div className="mt-4">
          <span className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full">
            {status}
          </span>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
