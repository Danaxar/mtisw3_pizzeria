import React, { useState } from 'react';
import './Domicilio.css';
import {useNavigate} from 'react-router-dom';


const Domicilio = () => {
    const [region, setRegion] = useState("")
    const [comuna, setComuna] = useState("")
    const [calle, setCalle] = useState("")
    const [numero, setNumero] = useState("")
    const [numeroDpto, setNumeroDpto] = useState("")

    const navigate = useNavigate();

    const enviarForm = () => {
        // Enviar los datos
        // Redirigir a la página siguiente
        let form_data = new FormData();
        form_data.append("region", region);
        form_data.append("comuna", comuna);
        form_data.append("calle", calle);
        form_data.append("numero", numero);
        form_data.append("numeroDpto", numeroDpto);
        console.log(form_data);
        navigate("/comprar");
        
    }

    const redirect = () => {
        window.location.href = 'http://localhost:3000/comprar';
    }

    return (
        <div>
            <div >
                <form onSubmit={enviarForm}>
                    <div>
                        <label for="region">Region</label>
                        <input type={"text"} name="Region" onChange={(e) => setRegion(e.target.value)}></input><br/>
                    </div>
                    <div>
                        <label for="region">Comuna</label>
                        <input type={"text"} name="Comuna" onChange={(e) => setComuna(e.target.value)}></input><br/>
                    </div>    
                    <div>
                        <label for="region">Calle</label>
                        <input type={"text"} name="Calle" onChange={(e) => setCalle(e.target.value)}></input><br/>
                    </div>    
                    <div>
                        <label for="region">Numero</label>
                        <input type={"text"} name="Numero" onChange={(e) => setNumero(e.target.value)}></input><br/>
                    </div>
                    <div>
                        <label for="region">NumeroDpto</label>
                        <input type={"text"} name="NumeroDpto" onChange={(e) => setNumeroDpto(e.target.value)}></input><br/>
                    </div>
                        <input type={"submit"} name="enviar" style={{color: ''}}></input><br/>
                </form>
                <div>
                    <button onClick={redirect} style={{backgroundColor: 'rgb(0,150,0,0.403)'}}>
                        continuar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Domicilio;