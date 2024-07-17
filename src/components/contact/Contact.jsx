import { ContactHero, ContactContainer, FormContainer, Form, ContactDataContainer, StyledFontAwesomeIcon } from "./ContactStyles";
import heroContactImg from "../../assets/img/contactHero.png"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { AddBtn } from "../cards/ProductCardStyles";


function Contact() {
    
    return (
        <>
            <ContactHero src={heroContactImg} />
            <h2>Contactanos</h2>
            <ContactContainer>
                <FormContainer>
                    <Form>
                        <h4>Dejanos tu mensaje</h4>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="nombre" id="name" placeholder="Ingresá tu nombre" />

                        <label htmlFor="lastname">Apellido:</label>
                        <input type="text" name="apellido" id="lastname" placeholder="Ingresá tu apellido" />

                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="e-mail" id="email" placeholder="Ingresá tu E-mail" />

                        <label htmlFor="telephone">Teléfono</label>
                        <input type="numbre" name="Teléfono" id="telephone" placeholder="Ingresá tu teléfono" />

                        <label htmlFor="message">Dejanos tu mensaje</label>
                        <textarea name="mensaje" id="message" placeholder="Ingresá aquí tu mensaje o consulta"></textarea>

                        <AddBtn type="submit">Enviar</AddBtn>
                    </Form>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3203371673717!2d-58.39186892347696!3d-34.59606035709515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabeb6312849%3A0x31299bcc5d40407b!2sAv.%20Sta.%20Fe%201560%2C%20C1060ABO%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1720586941963!5m2!1ses-419!2sar"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </FormContainer>

                <ContactDataContainer>
                    
                    <span><StyledFontAwesomeIcon icon={faWhatsapp} />11-1111-1111</span>
                    <span><StyledFontAwesomeIcon icon={faEnvelope} />contacto@fusionurbana.com</span>
                    <span><StyledFontAwesomeIcon icon={faLocationDot} />Av. Santa Fe 1560 - CABA</span>
                </ContactDataContainer>

            </ContactContainer>

        </>
    )

};

export default Contact;