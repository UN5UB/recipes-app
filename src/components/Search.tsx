const Search = ({ onChangeSearchInput }: SearchProps) => {
  return (
    <div className="flex justify-center mb-5">
      <input
        onChange={onChangeSearchInput}
        className="h-9 pl-3 border-[1px] rounded-lg"
        type="text"
        placeholder="Search recipes..."
      />
    </div>
  );
};

export default Search;
