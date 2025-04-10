const Template = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-[30px] md:min-w-[750px] mt-[30px] rounded-lg border border-gray-200 shadow-lg shadow-white">
      {children}
    </div>
  );
};

export default Template;
