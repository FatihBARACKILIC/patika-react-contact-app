import { useState } from "react"

function List({ contacts }) {
  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })

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
      <ul className="list">
        {filtered.map((contact, key) => (
          <li key={key}>
            <div>
              <small>Name</small>
              {contact.fullName}
            </div>
            <div>
              <small>Phone Number</small>
              {contact.phoneNumber}
            </div>
          </li>
        ))}{" "}
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List
