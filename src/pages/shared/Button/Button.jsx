const CommonButton = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn bg-green-600 hover:bg-green-700 text-white rounded-full  ${className}`}
    >
      {children}
    </button>
  );
};

export default CommonButton;
