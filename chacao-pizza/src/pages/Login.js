import React from "react";

const Login = () => {
    return (
        <div className="login">
            <div className="loginForm">
                <h2>Iniciar sesión</h2>
                <form>
                    <label for="correo">Correo electronico</label>
                    <input type={"text"} style={{color: 'black'}} name="correo"/><br/>
                    <label for="pass">Contraseña</label>
                    <input type={"text"} style={{color: 'black'}} name="pass"/>

                    <input type={"submit"} name="entry" style={{backgroundColor: '#11760f'}}/>
                    <div>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;