function Textfield({ text }) {
  return (
    <div className="mb-4">
      <input
        className="w-full p-3 rounded-md border-2 border-green-300 text-xl text-center focus:outline-none focus:ring-2 focus:ring-green-300"
        placeholder={text}
        disabled={true}
      />
    </div>
  );
}

export default Textfield;
