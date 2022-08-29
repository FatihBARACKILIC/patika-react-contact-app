import { useEffect, useState } from "react"
import List from "./List"
import Form from "./Form"

function Contacts() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <>
      Contact List
      <List contacts={contacts} />
      <Form contacts={contacts} setContacts={setContacts} />
    </>
  )
}

export default Contacts
