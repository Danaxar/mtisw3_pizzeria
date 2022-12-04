import React from 'react';
import "./style-pages.css";

const Home = () => {
    return(
        <div className='Home'>
            <div className='portada'>
                {/* <Navbar/> */}
                <div className='titles'>
                    <div className='titulo' style={{
                        fontSize: '6vw',
                        color: 'white',
                        alignContent: 'center'
                    }}>
                        ¡Bienvenido a <br/>
                        Chacao pizza!
                    </div>

                    <div className='subtitulo' style={{
                        color: 'white',
                        fontSize: '2.7vw'
                    }}>
                        Tenemos los mejores ingredientes para usted.
                    </div>
                </div>

                <div className='pedir-llevar-padre'>
                    <div className='pedir-llevar-hijo pedir-llevar-padre'>
                        <div style={{fontSize: '20px', margin: '5%'}}>
                            Comienza tu pedido
                        </div>
                        
                        <div className='pedir-llevar-hijo'>
                            <div className='opcion'>
                                <a href='/domicilio'> A domicilio </a>
                            </div>
                            <div className='opcion'>
                                <a href='/retiro-tienda'> Retiro en tienda </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;