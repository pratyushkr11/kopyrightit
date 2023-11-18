import './Slider.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import cardImage from '../../assets/main-img.png';
import { Link } from 'react-router-dom';

const ReactSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  return (
    <div id="main-slider-container">
      <ArrowLeftIcon sx={{ fontSize: 40 }} className="slider-icon left" onClick={slideRight} />
      <div id="slider">
        {
          props.slides.map((slide, index) => {
            return (
              <div className="slider-card" key={index}>
                <img className="slider-card-image" style={{ marginTop: '30px' }} src={cardImage} alt='card-img' />
                <p className="slider-card-title">{slide.title}</p>
                <Link to={`/form/${slide.value}`}>
                  <button className="btn btn-card">{slide.description}</button>
                </Link>
              </div>
            )
          })
        }
      </div>
      <ArrowRightIcon sx={{ fontSize: 40 }} className="slider-icon right" onClick={slideLeft} />
    </div>
  )
}

export default ReactSlider;
