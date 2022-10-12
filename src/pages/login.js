import React, {useRef, useState} from "react";
import axios from "axios";
import "./login.css"
function Login() {
  const [loader, setLoader] = useState(false);
  const email = useRef();
  const password = useRef();
  const login=async()=>{
    setLoader(true)
    const url=  process.env.REACT_APP_BACKEND_URL+"hire/login"
    const response = await axios.post(url, {
      email : email.current.value,
      password : password.current.value,
    })
    console.log(response.data.employee)
    localStorage.setItem("employee", JSON.stringify(response.data.employee));
    console.log('localstorage : ' + JSON.parse(localStorage.getItem("employee"))._id)
    window.location.reload();
  }
  return (
    <div className="loginForm">
      <div className="accueil">Bienvenue à <b>Maker Skills Up</b> Back Office </div>
      <div className="loginSpace">

        <div className="loginData">
        <div className="connect">Se Connecter</div>
          <input ref={email} type="email" className="logininput" placeholder="Email" />
          <input
          ref={password}
            type="password"
            className="logininput"
            placeholder="Mot de passe"
          />
         {loader ? <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>  :  <div className="connectButton" onClick={login}>Se Connecter</div>}
          <div className="forget">Mot De Passe Oublié ?</div>
        </div>
        <img className="logoBackoffice" alt="" src="images/logoBeMaker.png" />
      </div>
    </div>
  );
}

export default Login;
