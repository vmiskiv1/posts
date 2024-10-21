export const InputText = ({ title = "", placeholder = "", className = "" }) => {
  return (
    <div>
      <label>
        <p className="font-semibold pt-2 pb-1">{title}</p>
        <input
          type="text"
          placeholder={placeholder}
          className={`border-2 w-[100%] rounded-md py-2 px-4 outline-none ${className}`}
        />
      </label>
    </div>
  );
};
