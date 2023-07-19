type Props = {
  search: string;
  // submitHandler: React.FormEventHandler<HTMLFormElement> | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

function SearchForm({ search, onChange }: Props) {
  return (
    <form className="flex gap-4 sm:p-2 ">
      <input
        className="flex-1 border border-slate-200 rounded-full py-2 px-4"
        onChange={onChange}
        placeholder="Search a post here..."
        type="text"
        name="search"
        value={search}
      />
      {/* <button className="text-white">Go</button> */}
    </form>
  );
}

export default SearchForm;
