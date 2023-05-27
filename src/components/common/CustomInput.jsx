const CustomInput = ({ label }) => {
  return (
    <div>
      <input
        type="text"
        id={label}
        className="bg-gray-100 border-b focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full p-4 rounded-full"
        autoComplete="off"
      />
      <label
        htmlFor={label}
        className="font-bold absolute left-4 top-4 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
