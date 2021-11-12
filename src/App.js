import logo from './logo.svg';
import './App.css';
var contenido   = document.querySelector('#MostarC');

const form = document.forms['agregarUsuario'];



form.onsubmit = (event) => {
    event.preventDefault();
    console.log(personasJson());
};

function personasJson()
{
    const personas = {}

    Array.from(form.elements).forEach(Element => {
        if(Element.name) personas[Element.name] =  Element.value
    })

    fetch('http://www.raydelto.org/agenda.php',{
    method: 'POST',
    body: JSON.stringify(personas) 

    })
    .then( res => res.json())
    .then(data => {
        console.log(data)
    })
    
    window.location.reload();
    return personas;
    
}
function Mostrar(){
  fetch('http://www.raydelto.org/agenda.php')


  .then( res => res.json())
  .then(datos => {
      tabla(datos)
  } )


  function tabla(datos){
      console.log(datos)
      contenido.innerHTML = ' '
      for(let valor of datos){
          contenido.innerHTML += `
             
       
          <td>${valor.nombre}</td>
          <td>${valor.apellido}</td>
          <td>${valor.telefono}</td>
         



          `
      }
  }
}



function App() {
  return (
    <div>
        <div id="AgendaId" className="container">
          <h3 className="container colorc">Agregar Usuario</h3>
          <form className="container" id="FormId" name="agregarUsuario">
            <label className="colorc" htmlFor="nombrel">Nombre:</label>
            <input type="text" id="nombreId" name="nombre" defaultValue />
            <label className="colorc" htmlFor="apellidol">Apellido:</label>
            <input type="text" id="apellidoId" name="apellido" defaultValue />
            <label className="colorc" htmlFor="numerol">Numero:</label>
            <input type="text" id="telefonoId" name="telefono" defaultValue />
            <input id="botonId" type="submit" defaultValue="agregar" />
          </form>
        </div>
        <div className="div1 container">
          <h2 className="tituloc">Contactos agendados</h2> 
        </div>
        <div>
          <table className="table">
            <thead>
              <tr><th className="tablac" scope="col">Nombre</th>
                <th className="tablac" scope="col">Apellido</th>
                <th className="tablac" scope="col">Numero</th>
              </tr></thead>
            <tbody id="MostarC" />
          </table>
        </div>
      </div>
    
  );
}

export default App;
