function CustomInput({ label }) {
  return (
    <>
      <input
        type="text"
        id={label}
        className="bg-gray-100 border-b focus:outline-none focus:border-orange-500 focus:border-b-2 transition-colors peer w-full p-4 rounded-full"
        autoComplete="off"
      />
      <label
        htmlFor={label}
        className="text-gray-400 font-bold absolute left-4 top-3 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-500 transition-all"
      >
        {label}
      </label>
    </>
  );
}

export default CustomInput;
