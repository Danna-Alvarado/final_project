import React from "react";
import danna from './danna.jpeg';
import './App.css';

function App() {

  function handleCredentialResponse(response) {
    console.log("Token JWT:", response.credential);
    alert("Inicio de sesión con Google exitoso ");
  }

  React.useEffect(() => {
    if (window.google) {
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
    }
  }, []);

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
