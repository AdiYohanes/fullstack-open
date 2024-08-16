/* eslint-disable react/prop-types */
const PersonForm = ({
  newName,
  newNumber,
  handleInputChange,
  handleAddPerson,
}) => {
  return (
    <form onSubmit={handleAddPerson}>
      <div>
        Name: <input name="name" value={newName} onChange={handleInputChange} />
      </div>
      <div>
        Number:{" "}
        <input name="number" value={newNumber} onChange={handleInputChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
