import React, { useState, useEffect } from "react";
import danna from './danna.jpeg';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null);

  function handleCredentialResponse(response) {
    console.log("Token JWT:", response.credential);

    setUsuario("Danna Alvarado");
  }

 useEffect(() => {
  const intervalo = setInterval(() => {
    if (window.google && !usuario) {
      window.google.accounts.id.initialize({
        client_id: "275077458710-tjaj8gg3oscia4tq1meoqvs3loc0773q.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        {
          theme: "outline",
          size: "large",
          text: "continue_with",
          shape: "rectangular",
        }
      );

      clearInterval(intervalo);
    }
  }, 500);

  return () => clearInterval(intervalo);
}, [usuario]);

  function cerrarSesion() {
    setUsuario(null);
  }

  // Pantalla después de iniciar sesión
if (usuario) {
  return (
    <div className="App">
      <header className="App-header">

        {/* Aquí agregamos la misma imagen */}
        <img src={danna} className="App-danna" alt="danna" />

        <h1>Bienvenido(a), {usuario}</h1>

        <p>EVALUACIÓN PARCIAL 3</p>

        <a
          className="App-link"
          href={process.env.PUBLIC_URL + "/ERS.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          DESCARGAR DOCUMENTO ERS DEL PROYECTO
        </a>

        <a
          className="App-link"
          href="https://alvaradoperezdannagabriela.atlassian.net/jira/software/projects/MUEB/boards/34"
          target="_blank"
          rel="noopener noreferrer"
        >
          TABLERO JIRA PROYECTO SIBA
        </a>

        <button
          onClick={cerrarSesion}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          CERRAR SESIÓN PARCIAL 3
        </button>

      </header>
    </div>
  );
}
  // Pantalla inicial con login
  return (
    <div className="App">
      <header className="App-header">
        <img src={danna} className="App-danna" alt="danna" />

        <p>
          EVALUACION PARCIAL 1 <br />
          Danna Gabriela Alvarado Pérez
        </p>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/danna-gabriela-alvarado-p%C3%A9rez-5902413a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN DE MI PERFIL
        </a>

        <a
          className="App-link"
          href={process.env.PUBLIC_URL + "/in.html"}
        >
          DOCUMENTACION PARCIAL 1
        </a>

        <a
          className="App-link"
          href={process.env.PUBLIC_URL + "/indexse.html"}
        >
          DOCUMENTACION PARCIAL 2
        </a>

        {/* Botón de Google */}
        <div style={{ marginTop: "30px" }}>
          <div id="googleSignInDiv"></div>
        </div>
      </header>
    </div>
  );
}

export default App;