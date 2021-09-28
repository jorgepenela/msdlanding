import {Suspense, lazy} from 'react'
import Cta from '../Cta/Cta'
import './Lista.scss';

const Foto = lazy( ()=>import('../Foto/Foto'))
//import Foto from '../Foto/Foto'




const Lista = ()=>{
  return(
    <div id="lista">
      
      <img src="./assets/logo_clubganadero.png" alt="Club Ganadero" id="logo"></img>
      
      {/*<h1>Conocé nuestros productos para ganadería y lechería</h1>*/}
      <h1>Descubrí consejos de producción y salud animal. </h1>
      <h3>Somos tu aliado en la salud <br className="xs-hidden"></br> de tu ganado y en tu negocio</h3>
      <Cta />
      <div id="feed">

        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/doracur2809.jpg' video="doracur2809.mp4"></Foto>
        </Suspense>

        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/44.jpg' video="doracur-septiembre.mp4"></Foto>
        </Suspense>

        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_doracur1-poster.jpg' video="doracur1.mp4"></Foto>
        </Suspense>
        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_doracur2-poster.jpg' video="doracur2.mp4"></Foto>
        </Suspense>
        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_doracur3-poster.jpg' video="doracur3.mp4"></Foto>
        </Suspense>

        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_avotan-poster.jpg' video="avotan.mp4"></Foto>
        </Suspense>
        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_marcheto-poster.jpg' video="marchetto.mp4"></Foto>
        </Suspense>
        <Suspense fallback={<h4>Cargando...</h4>} >
          <Foto ruta='feed/feed_resflor-poster.jpg' video="resflor-cobactlan.mp4"></Foto>
        </Suspense>     

        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_halocur-poster.jpg' video="halocur.mp4"></Foto>
        </Suspense>          
        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_aliado.jpg' ></Foto>
        </Suspense>
        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_benamine.jpg'></Foto>
        </Suspense>

        <Suspense fallback={<h4>Cargando...</h4>} >
          <Foto ruta='feed/feed_garrapatas.jpg' video="garrapatas.mp4"></Foto>
        </Suspense>          
        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_dr.jpg'></Foto>
        </Suspense>          
        <Suspense fallback={<h4>Cargando...</h4>}>
          <Foto ruta='feed/feed_promo.jpg' video="promo.mp4"></Foto>
        </Suspense>                                                   
      </div>  

      <section id="contacto">      
        <h3>Consultanos por nuestros productos de Ganadería y Lechería MSD</h3>
        <form action="procesar.php" method="POST">
          <input type="text" name="Nombre" placeholder="Nombre*" required></input>
          <input type="email" name="Email" placeholder="Email*" required></input>
          <select name="sector" required>
            <option disabled selected>¿En qué sector se desempeña?*</option>
            <option value="Ganadero">Ganadero</option>
            <option value="Tambero">Tambero</option>
            <option value="Otro">Otro</option>
          </select>
          <textarea name="Consulta" placeholder="Consulta*" required></textarea>
          <input type="submit" className="boton"></input>
        </form>
      </section>          
    </div>
  );
}

export default Lista