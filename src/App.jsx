import './App.css'
import React,{ useState, useEffect } from 'react'
import poly from './assets/poly.jpg'
import seid from './assets/seid_2.jpg'
import tempe from './assets/tempe.jpg'
import kush from './assets/kush_2.JPG'




function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageFadingIn, setIsImageFadingIn] = useState(false)
  const [isImageVisible, setIsImageVisible] = useState(false);
  const images = [
    poly,
    seid,
    tempe,
  ]
  const handleImageClick = (index) => {
    setCurrentImageIndex(index)
    setIsImageFadingIn(true)
    setIsImageVisible(true)
    setTimeout(() => {
      setIsImageFadingIn(false)
    }, 500)
  }
  useEffect(() => {
    setIsImageVisible(false);
    setTimeout(() => {
      setIsImageVisible(true);
    }, 100);
  }, [currentImageIndex]);

  return (
    <div className="App">
      <nav className='navbar'>
        <ul>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          <li><a href="https://example.com/projects">Projects</a></li>
          <li><a href="https://github.com">Github</a></li>
          <li><a href="https://example.com/experience">Experience</a></li>
        </ul>
      </nav>
      <nav className='breadcrumb'>
        <ul>
          <li><a href="#">All Applicants</a></li>
          <li><a href="#">Engineering</a></li>
          <li><a href="#">New Grads</a></li>
          <li><a href="#">Kushagra Kartik</a></li>
        </ul>
        <h2>Kushagra Kartik</h2>
      </nav>
      <div className='main'> 
        <div className='main-content'>
          <div className='image-carousel'>

            <img
              src={images[currentImageIndex]}
              alt="Game Image"
              className={isImageFadingIn ? 'fading-in slideshow-image' : 'slideshow-image'}
        />
          </div>
          <div className="image-preview">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Game Image"
                onClick={() => handleImageClick(index)}
                className={index === currentImageIndex ? 'active' : ''}
              />
            ))}
          </div>
        </div>
        <div className="about-section">
            <img src = {kush} className='kush-image'/>
            <p>Greetings! I am Kushagra Kartik, a 
              dedicated computer science enthusiast currently 
              pursuing my Master's degree in Software Engineering at 
              Arizona State University. </p>
        </div>
      </div>

    </div>
  );
}

export default App;
