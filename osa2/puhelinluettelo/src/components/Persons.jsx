import Entry from "./Entry"

const Persons = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <Entry key={person.name} person={person} />
      ))}
    </>
  )
}

export default Persons
