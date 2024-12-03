import React from "react";

// interface MyComponentProps {
//     children: React.ReactNode;
//   }
const Button: React.FC<{ children: string }> = ({ children }) => {
  return (
    <button className="text-white text-[13px] w-32 bg-[#4745D0] p-2 rounded-lg m-1">
      {children}
    </button>
  );
};

export default Button;
