function Button({ text }) {
  return (
    <button className="bg-white hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 text-gray-600  rounded text-base">
      {text}
    </button>
  );
}

export default Button;
