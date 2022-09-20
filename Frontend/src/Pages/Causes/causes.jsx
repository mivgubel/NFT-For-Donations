//React
import { NavLink } from 'react-router-dom';

//Style
import s from './causes.module.css';

//constants
import { CAUSES_INFO } from '../../Utils/Constants/causes';
import { CAUSES } from '../../Utils/Constants/Routes';

export default function Causas() {
  const causes = CAUSES_INFO;
  return (
    <div>
      {
        causes.map(cause => {
          const {id, image, title, description} = cause;
          const {container, titleAndImage, imageStyle, descriptionStyle, info} = s;
          return (
            <div key={id} className={container}>
              <div className={titleAndImage}>
                <p className="title">{title}</p>
                <img className={imageStyle} src={image} alt={title}/>
              </div>
              <div className={descriptionStyle}>
                <p >{description.slice(0,300) + '...'}</p>
                <NavLink className={info} to={`${CAUSES}/${id}`}>More Info</NavLink>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}