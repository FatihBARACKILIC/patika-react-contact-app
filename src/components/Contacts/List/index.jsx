function List({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((contact, key) => (
          <li key={key}>{contact.fullName}</li>
        ))}{" "}
      </ul>
    </div>
  )
}

export default List
