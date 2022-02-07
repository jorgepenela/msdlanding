import './Cta.scss'

const Cta = ()=>{
  return(
    <>
      <section id="ctaWrapper">
        <div id="cta">
        <div className="storie">
            <a data-fancybox="gallery" href="./assets/doracur-septiembre.mp4" className="gotImg" id="botonDoracur">
              <img src="./assets/doracur-ico.png" alt="doracur"></img>            
            </a>
            <br></br>
            <h4>Doracur</h4>
          </div>
          <div className="storie">
            <a data-fancybox="gallery" href="./assets/resflor-cobactlan.mp4" className="gotImg" id="botonGanaderia">
              <img src="./assets/ganaderia.png" alt="productos de ganaderia"></img>            
            </a>
            <br></br>
            <h4>Productos de Ganadería</h4>
          </div>
          <div className="storie">
            <a data-fancybox="gallery" href="./assets/halocur.mp4"  className="gotImg" id="botonLecheria">
              <img src="./assets/lecheria.png" alt="productos de lecheria"></img>            
            </a>
            <br></br>
            <h4>Productos de Lechería</h4>
          </div>                    
          <div className="storie">
            <a href="https://www.facebook.com/clubganaderoregionsur/" className="gotImg" id="botonClubGanadero" target="_blank">
              <img src="./assets/logo_facebook.png" alt="Club Ganadero"></img>            
            </a>
            <br></br>
            <h4>Club Ganadero</h4>
          </div>
          <div className="storie">
            <a href="https://www.msd-salud-animal.com.ar/productos-ganaderia-todos/" className="gotImg" id="botonMSD" target="_blank">
              <img src="./assets/logo_msd.png" alt="MSD"></img>            
            </a>
            <br></br>
            <h4>MSD Salud Animal</h4>
          </div>
          <div className="storie">
            <a href="#contacto" className="gotImg" id="botonContacto">
              <img src="./assets/contacto.png" alt="contacto"></img>            
            </a>
            <br></br>
            <h4>Contacto</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta