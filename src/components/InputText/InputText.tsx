export const InputText = ({
  title = '',
  placeholder = '',
  className = '',
  value = '',
  name = '',
  id = '',
  onChange,
  onBlur,
  error,
}: any) => {
  return (
    <div>
      <label htmlFor={id || name}>
        <p className="font-semibold pt-2 pb-1">{title}</p>
        <input
          type="text"
          name={name}
          id={id || name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className={`border-2 w-[100%] rounded-md py-2 px-4 outline-none ${className}`}
        />
        {error && <p className="text-red-500 mt-1 text-xs">{error}</p>}
      </label>
    </div>
  );
};
