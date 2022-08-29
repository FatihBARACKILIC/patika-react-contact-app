import { useEffect, useState } from "react"
import Form from "./Form"
import List from "./List"

function Contacts() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <>
      Contact List
      <List />
      <Form setContacts={setContacts} contacts={contacts} />
    </>
  )
}

export default Contacts
