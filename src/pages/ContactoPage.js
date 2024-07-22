import React from 'react';
import '../styles/contacto.css'
import { useState } from 'react';
import axios from 'axios';



const ContactoPage = (props) => {


    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`,
            formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <div className="contacto">

            <div className="formulario">

                <h1>Formulario de contacto</h1>

                <form action="/contacto" method="post" onSubmit={handleSubmit}>


                    <p>
                        <label htmlFor="nombre">Nombre<span> *</span></label>
                        <input type="text" name="nombre" required="obligatorio" placeholder="Escribe tu nombre"
                            value={formData.nombre} onChange={handleChange} />
                    </p>

                    <p>
                        <label htmlFor="email">Email<span> *</span></label>
                        <input type="email" name="email" required="obligatorio" placeholder="Escribe tu Email"
                            value={formData.email} onChange={handleChange} />
                    </p>

                    <p>
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" name="telefono" placeholder="Escribe tu teléfono"
                            value={formData.telefono} onChange={handleChange} />
                    </p>

                    <p>
                        <label htmlFor="mensaje">Mensaje<span> *</span></label>
                        <textarea name="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."
                            value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>

                    <button type="submit" value="Enviar"><p>Enviar</p></button>

                    <p className="aviso">
                        <span> * </span>los campos son obligatorios.
                    </p>

                </form>
                {sending ? <h2>Enviando...</h2>: null}
                {msg ? <h2>{msg}</h2>: null}

            </div>
        </div>
    )
}

export default ContactoPage;