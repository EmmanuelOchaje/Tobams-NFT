const ButtonTansparent: React.FC<{ children: string }> = ({ children }) => {
  return (
    <button className="text-[#7780A1] text-[13px] w-32 p-2 rounded-xl border border-[#262840] m-1">
      {children}
    </button>
  );
};

export default ButtonTansparent;
