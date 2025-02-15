function Button({ name, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full p-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
