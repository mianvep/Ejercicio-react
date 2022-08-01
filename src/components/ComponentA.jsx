import React from 'react';
import { Contact } from '../models/contact.class';
import ComponentB from './ComponentB';


const ComponentA = () => {

    const defaulContact = new Contact('Example Nombre', 'Example', 'Example@example.com', false);

    return (
        <div>
            <div>
                The contact
            </div>
            <ComponentB 
                contacto = {defaulContact}
            />
        </div>
    );
};

export default ComponentA;
