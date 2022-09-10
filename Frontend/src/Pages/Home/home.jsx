import About from '../../Components/About/about';
import CausesHome from '../../Components/Causes-Home/causes-home';
import s from './home.module.css';

export default function Home() {
  return(   
    <div>
      <About/>
      <CausesHome />
    </div>
  )
}