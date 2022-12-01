import React from 'react';
import './index.css'
import Navbar from '../components/Navbar';

const Home = () => {
    return(
        <div className='Home'>
            <div className='portada'>
                <Navbar/>
                <div className='titles'>
                    <div className='titulo' style={{
                        fontSize: '6vw',
                        color: 'white',
                        alignContent: 'center'
                    }}>
                        Bienvenido a <br/>
                        Chacao pizza!
                    </div>

                    <div className='subtitulo' style={{
                        color: 'white',
                        fontSize: '2.7vw'
                    }}>
                        tenemos los mejores ingredientes para usted
                    </div>
                </div>

                <div className='pedir-llevar'>
                    <div>
                        Comienza tu pedido
                    </div>
                    
                    <div>
                        <div>
                            A domicilio
                        </div>

                        <div>
                            Retiro en tienda
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default Home;