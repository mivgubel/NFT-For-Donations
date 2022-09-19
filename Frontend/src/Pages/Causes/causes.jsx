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
          const {id, image, title, description} = cause;
          return (
            <div key={id} className={s.container}>
              <div className={s.titleAndImg}>
                <p className="title">{title}</p>
                <img className={s.img} src={image} alt={title}/>
              </div>
              <div className={s.description}>
                <p >{description.slice(0,300) + '...'}</p>
                <NavLink className={s.info} to={`${CAUSES}/${id}`}>More Info</NavLink>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}