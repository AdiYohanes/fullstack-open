import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Handle input changes for both name and number
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setNewName(value);
    } else if (name === "number") {
      setNewNumber(value);
    } else if (name === "filter") {
      setFilter(value);
    }
  };

  const handleAddPerson = (event) => {
    event.preventDefault();

    if (!newName.trim() || !newNumber.trim()) {
      alert("Both name and number must be provided.");
      return;
    }

    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length > 0 ? persons[persons.length - 1].id + 1 : 1,
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;
  //  TERNARY VERSION

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleInputChange={handleInputChange} />
      <h2>Add a new</h2>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleInputChange={handleInputChange}
        handleAddPerson={handleAddPerson}
      />

      <Persons personsToShow={personsToShow} />

      {/* Debugging output */}
      <div>
        Debug:{" "}
        {newName || newNumber
          ? `${newName} - ${newNumber}${filter ? ` = ${filter}` : ""}`
          : filter
          ? `Filter: ${filter}`
          : "No input provided"}
      </div>
    </div>
  );
};

export default App;
