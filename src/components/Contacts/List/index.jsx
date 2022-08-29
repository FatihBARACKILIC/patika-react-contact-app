import { useState } from "react"

function List({ contacts }) {
  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })
  console.log("filtered", filtered)

  return (
    <div>
      <input
        type="text"
        name="filter"
        id="filter"
        placeholder="search in contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filtered.map((contact, key) => (
          <li key={key}>{contact.fullName}</li>
        ))}{" "}
      </ul>
    </div>
  )
}

export default List
