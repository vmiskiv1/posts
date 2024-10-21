export const Button = ({
  type = "button",
  color = "primary",
  handleClick,
  children,
  className,
}: any) => {
  return (
    <button
      type={type}
      className={`bg-primary px-4 py-2 flex justify-center items-center rounded-md outline-none ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
