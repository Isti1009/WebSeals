"use client";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all 
                bg-[#4A4337] hover:bg-opacity-90 border-2 border-[#323237] 
                ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
