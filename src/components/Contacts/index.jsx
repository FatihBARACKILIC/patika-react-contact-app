import { useEffect, useState } from "react"
import List from "./List"
import Form from "./Form"

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
    <>
      Contact List
      <List contacts={contacts} />
      <Form contacts={contacts} setContacts={setContacts} />
    </>
  )
}

export default Contacts
