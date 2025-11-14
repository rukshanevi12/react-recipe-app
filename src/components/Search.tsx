import type { searchProps } from "../Types/types";

const Search = ({ text, onChange }: searchProps) => {
  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        value={text}
        onChange={onChange}
        className="form-control form-control-lg shadow-sm border-primary"
        placeholder="Search for a recipe..."
      />
    </form>
  );
};

export default Search;
