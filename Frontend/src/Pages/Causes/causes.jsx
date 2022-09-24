//React
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//Style
import s from './causes.module.css';

//constants
import { CAUSES } from '../../Utils/Constants/Routes';

// Redux actions
import { getAllVisibleCauses } from '../../redux/actions';

export default function Causas() {
    //Dispatch
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(getAllVisibleCauses());
    }, [ dispatch ]);
    const causes = useSelector(state => state.allVisibleCauses);

  return (
    <div>
      {
        causes.map(cause => {
          const {address, image, name, description} = cause;
          const {container, titleAndImage, imageStyle, descriptionStyle, info} = s;
          return (
            <div key={address} className={container}>
              <div className={titleAndImage}>
                <p className="title">{name}</p>
                {/* <img className={imageStyle} src={image} alt={name}/> */}
              </div>
              <div className={descriptionStyle}>
                {/* <p >{description.slice(0,300) + '...'}</p> */}
                <NavLink className={info} to={`${CAUSES}/${address}`}>More Info</NavLink>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}