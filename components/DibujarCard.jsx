import React from 'react';
import { Card,Button } from 'react-bootstrap';

const DibujarCard = ({listaCitas, borrarCita}) => {
    return (
     
        
        <Card style={{ width: '18rem' }} className='my-5'>
      
      <Card.Body>
        <Card.Title>
            <div>
            Mascota: {listaCitas.nombreMascota.toUpperCase()}

            </div>
            <div>
            Dueño: {listaCitas.nombreDueño.toUpperCase()} 
            </div>
            </Card.Title>
        <Card.Text>
            <span>
          Fecha: {listaCitas.fecha}
            </span>
            <span>
          Hora: {listaCitas.hora}
            </span>
            <span>
          Sintomas: {listaCitas.sintomas}
            </span>
        </Card.Text>
        <Button variant="danger" onClick={()=>borrarCita(listaCitas.sintomas)}>Borrar</Button>
      </Card.Body>
    </Card>
  
    );
};

export default DibujarCard;