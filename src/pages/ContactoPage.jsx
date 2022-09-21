import { MyContact } from "../components/MyContact";
import { contacto } from "../database/contacto";

export const ContactoPage = () => {
  return (
    <>
      {contacto.map((contacto) => (
        <MyContact
          key={contacto.id}
          whatsAppContacto={contacto.whatsAppContacto}
          correoContacto={contacto.correoContacto}
        />
      ))}
    </>
  )
}
