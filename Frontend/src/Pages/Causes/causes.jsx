import { NavLink } from 'react-router-dom';
import { CAUSES_INFO } from '../../Utils/Constants/causes';
import { CAUSES } from '../../Utils/Constants/Routes';
import s from './causes.module.css';

export default function Causas() {
  const causes = CAUSES_INFO;
  return(   
    <div>
      {
        causes.map(cause => {
          return (
            <div className={s.container}>
              <div className={s.titleAndImg}>
                <p className="title">{cause.title}</p>
                <img className={s.img} src={cause.image} alt={cause.title}/>
              </div>
              <div className={s.description}>
                <p >{cause.description.slice(0,300) + '...'}</p>
                <NavLink className={s.info} to={`${CAUSES}/${cause.id}`}>More Info</NavLink>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}