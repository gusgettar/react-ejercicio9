import React, { useEffect,useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Citas from './Citas';


const Formulario = () => {
   
    const citasLocalStorage = JSON.parse(localStorage.getItem('citas')) || [] 
    const [listaCitas, setlistaCitas] = useState(citasLocalStorage)
    const [nombreMascota, setnombreMascota] = useState("")
    const [nombreDueño, setnombreDueño] = useState("")
    const [fecha, setfecha] = useState("")
    const [hora, sethora] = useState("")
    const [sintomas, setsintomas] = useState("")

    
    


    useEffect(() => {
            localStorage.setItem('citas', JSON.stringify(listaCitas));
    
      });

const guardarCita = (e)=>{
e.preventDefault()
const nuevaCita = {nombreMascota,nombreDueño,fecha,hora,sintomas}

setlistaCitas([...listaCitas, nuevaCita])

}

const borrarCita = (sintoma)=>{
    const citasFiltradas = listaCitas.filter((item)=>item.sintomas !==sintoma)
    setlistaCitas(citasFiltradas)
}
    return (
        <>
        <h1 className='text-center my-2'>Administrador pacientes de veterinaria</h1>
<hr />
<Form className='container' onSubmit={guardarCita}>
    <div className='d-flex flex-column w-25'>
      <Form.Group className="mb-3" controlId="mascota">
        <Form.Label>Nombre de la mascota</Form.Label>
        <Form.Control type="text" placeholder="nombre de mascota"  onChange={(e)=> setnombreMascota(e.target.value)} />
        <Form.Text className="text-muted">
         </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="dueño">
        <Form.Label>Nombre del dueño</Form.Label>
        <Form.Control type="text" placeholder="nombre del dueño"   onChange={(e)=> setnombreDueño(e.target.value)} />
        <Form.Text className="text-muted">
         </Form.Text>
      </Form.Group>
        <div className='d-flex'>
      <Form.Group className="mb-3" controlId="fecha">
        
        <div className='d-flex flex-row align-items-center gap-1'>
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" placeholder="dd/mm/yyyy" className='w-75'onChange={(e)=> setfecha(e.target.value)} />
        </div>

        <Form.Text className="text-muted">
         </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="hora">

        <div className='d-flex flex-row align-items-center gap-1'>
        <Form.Label>Hora</Form.Label>
        <Form.Control type="datetime" placeholder="hh:mm"  onChange={(e)=> sethora(e.target.value)} />
        </div>

        <Form.Text className="text-muted">
         </Form.Text>
      </Form.Group>
      </div>
      <Form.Group className="mb-3" controlId="sintomas">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control type="text" placeholder="sintomas" onChange={(e)=> setsintomas(e.target.value)}/>
        <Form.Text className="text-muted">
         </Form.Text>
      </Form.Group>
      </div>
      <Button variant="primary" type="submit">
        Agregar nueva cita
      </Button>
      
    </Form>
    <hr className='' />
    <Citas listaCitas={listaCitas} borrarCita={borrarCita}></Citas>
    </>
    );
};

export default Formulario;