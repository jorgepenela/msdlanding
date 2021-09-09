
import { Fragment} from 'react';
// mis componentes
import Lista from './components/Lista/Lista'
import Cta from './components/Cta/Cta'
import Header from './components/Header/Header'
import Doracur from './components/Doracur/Doracur'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";


function App() {

  let j = 0;
  const floating = ()=>{
    document.getElementById('header').classList.add('floating')
    document.getElementById('cta').classList.add('floating')    
  }
  const unFloating = ()=>{
    document.getElementById('header').classList.remove('floating')
    document.getElementById('cta').classList.remove('floating')    
  }

  window.addEventListener('scroll',function(){  
    if(window.pageYOffset > 350){      
      floating()      
    }else{
      unFloating()
    }
  }, false)  

  
  return (
    <Fragment>
      <Header />
      <Lista></Lista>      
      <Doracur />      
    </Fragment>
  );
}

export default App;
