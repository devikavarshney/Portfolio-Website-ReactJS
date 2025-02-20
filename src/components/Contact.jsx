import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="tracking-tighter text-center">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:devikavarshney0602@gmail.com" className="my-4 border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
