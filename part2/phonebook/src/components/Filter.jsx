/* eslint-disable react/prop-types */
const Filter = ({ filter, handleInputChange }) => {
  return (
    <div>
      Filter By Name:{" "}
      <input
        name="filter"
        value={filter}
        onChange={handleInputChange}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Filter;
