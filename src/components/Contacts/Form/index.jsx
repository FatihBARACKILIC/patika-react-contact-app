import { useEffect, useState } from "react"

const initialFormValues = { fullName: "", phoneNumber: "" }

function Form({ setContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues)

  useEffect(() => {
    setForm(initialFormValues)
  }, [contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!form.fullName || !form.phoneNumber) return false

    setContacts([...contacts, form])
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="fullName"
            id="full-name"
            placeholder="Full Name..."
            value={form.fullName}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            type="text"
            name="phoneNumber"
            id="phone-number"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={onChangeInput}
          />
        </div>
        <button>Add</button>
      </form>
    </>
  )
}

export default Form
