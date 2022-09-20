//React
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//Style
import s from './causes.module.css';

//constants
import { CAUSES } from '../../Utils/Constants/Routes';

// Redux actions
import { getAllCauses } from '../../redux/actions';

export default function Causas() {
    //Dispatch
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(getAllCauses());
    }, [ dispatch ]);
    const causes = useSelector(state => state.allCauses);

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