import React from 'react';
import { Card, Button } from 'react-bootstrap';
import DibujarCard from './DibujarCard';

const Citas = ({listaCitas, borrarCita}) => {
    return (
        <div className='d-flex gap-2'>
            {

            listaCitas?.map((cita, posicionCita)=><DibujarCard key={posicionCita} listaCitas={cita} borrarCita={borrarCita}></DibujarCard>)
            }

        </div>
        
    );
};

export default Citas;