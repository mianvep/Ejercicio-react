import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ComponentB = ({contacto}) => {
    return (
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h3>Apellido: {contacto.apellido}</h3>
            <h4>Email: {contacto.email}</h4>
            <h5>El Contacto esta: {contacto.conectado ? 'Contacto En Linea': 'Contacto No Disponible'}</h5>
        </div>
    );
};


ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contact)
};


export default ComponentB;
