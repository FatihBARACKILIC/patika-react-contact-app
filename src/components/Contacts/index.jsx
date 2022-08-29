import { useEffect, useState } from "react"
import List from "./List"
import Form from "./Form"
import "./styles.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullName: "Ali", phoneNumber: 123123 },
    { fullName: "Veli", phoneNumber: 456456 },
    { fullName: "Cuma", phoneNumber: 789789 },
    { fullName: "Fatih", phoneNumber: 123456 },
  ])

  useEffect(() => {
    // console.log(contacts)
  }, [contacts])

  return (
    <div id="container">
      <h1>Contact List</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} setContacts={setContacts} />
    </div>
  )
}

export default Contacts
