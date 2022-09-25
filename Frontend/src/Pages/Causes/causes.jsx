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
        causes.map((cause, index) => {
          const {address, image, name} = cause;
          const description = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec vulputate quis lorem sed tristique. Vestibulum hendrerit vitae mi et tristique. Aliquam erat volutpat. 
                                Nunc sollicitudin tincidunt ante in tincidunt. Vivamus eget ligula pellentesque lacus tristique sollicitudin. 
                                In aliquam risus ac justo porta, at luctus mauris vestibulum. Duis condimentum mi vitae neque cursus placerat. 
                                Nam nibh magna, tristique at est ac, lacinia volutpat dui. In sed enim eu nibh porttitor tincidunt vel ut libero. 
                                Donec quis felis eu enim pellentesque gravida in et ligula. Morbi porta, velit eu ultrices porta, lacus augue fringilla 
                                felis, id gravida risus leo vel urna. Proin dictum, augue quis laoreet mollis, elit mi viverra purus, 
                                ac volutpat leo nisi ut mauris. Pellentesque finibus turpis non odio tincidunt, vel interdum eros posuere. 
                                Fusce facilisis auctor ipsum, vel mattis nunc pulvinar eget. Morbi odio diam, vehicula vitae nisl eget, fermentum blandit leo. Phasellus pharetra libero a laoreet volutpat.`
          const {container, titleAndImage, imageStyle, descriptionStyle, info} = s;
          return (
            <div key={address} className={container}>
              <div className={titleAndImage}>
                <p className="title">{name}</p>
                <img className={imageStyle} src={`../../../causa${index + 1}.png`} alt={name}/>
              </div>
              <div className={descriptionStyle}>
                <p >{description.slice(0,300) + '...'}</p>
                <NavLink className={info} to={`${CAUSES}/${address}`}>More Info</NavLink>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}