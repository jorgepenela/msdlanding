const rutaImg = './assets/'

const Foto = (props)=>{

  const Ruta = ()=>{
    if (props.video) {
      return(rutaImg+props.video)
    } else {
      return(rutaImg+props.ruta)
    }
  }
  
  return(
    <>
      <a
        href={Ruta()}
        data-fancybox="gallery"     
        className="fotoLink"   
      >
        <img src={rutaImg+props.ruta} alt="Club Ganadero" style={ {'width':'100%'}}></img>              
        { props.video && <img src="./assets/play.png" className="playIcon"></img>}      
      </a>
      
    </>
  );
}
export default Foto;

