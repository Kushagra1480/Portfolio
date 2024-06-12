import React, { useState, useEffect } from 'react';
import './App.css';
import asuLogo from './assets/ASU-logo.webp';
import one from './assets/time/1.png';

const App = () => {
  const [currentTime, setCurrentTime] = useState(null)
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  useEffect(() => {
    const updateClock = () => {
      const today = new Date();
      const hours = today.getHours();
      const minutes = today.getMinutes().toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const dayOfWeek = days[today.getDay()]
      let formattedHours;
      let isPM = false;

      if (hours >= 12) {
        formattedHours = (hours - 12) % 12;
        isPM = true;
      } else {
        formattedHours = hours % 12;
      }

      const formattedTime = `${formattedHours}:${minutes}`;
      const formattedDate = `${dayOfWeek} ${day}/${month}`;

      setCurrentTime({ formattedTime, isPM, formattedDate });
    };

    // Initial update
    updateClock()

    // Update time and date every second
    const intervalId = setInterval(updateClock, 1000) // Update every 1 second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, []);
  const numberSprites = {
    1: './assets/time/1.png',
    2: './assets/time/2.png',
    3: './assets/time/3.png',
    4: './assets/time/4.png',
    5: './assets/time/5.png',
    6: './assets/time/6.png',
    7: './assets/time/7.png',
    8: './assets/time/8.png',
    9: './assets/time/9.png',
    0: './assets/time/0.png',
    am: './assets/time/am.png',
    pm: './assets/time/pm.png',
  }
  const renderDigit = (digit) => {
    const spritePath = numberSprites[digit];
    console.log(spritePath)
    if (spritePath) {
      return <img src={spritePath} alt={digit} key={digit} />; // Add key prop for performance
    }
    return null;
  }
  return (
    <body>
        <main>
            <ul class="navigation">
                <li>
                    <a href="#container-1">
                        <img src="https://64.media.tumblr.com/57cf461a1819e5f240894118d1d0c568/d662040e3a2b8722-26/s400x600/c04c16872971599bb3c749bfa29c7d561c736247.pnj" alt="empty CD wii menu placeholder" />
                    </a>
                </li>
                <li>
                    <a href="#container-2">
                        <img src="https://64.media.tumblr.com/077b3fa310d0f638c9cc671af80131dc/d662040e3a2b8722-93/s400x600/20eca28477dbe64b8dfc42898ffc8b7e9d7098b2.pnj" alt="mii background image" />
                    </a>
                </li>
                <li>
                    <a href="#container-3"><img src="https://64.media.tumblr.com/4acf7d6703348eb3de2d6f422eac02b8/d28e227eb623ad41-cc/s1280x1920/89820b9bf56d7d7e0448b940fa4727a5a32129dc.jpg" alt="wii shop channel" /></a>
                </li> 

                <li>
                    <a href="https://eggdesign.tumblr.com"><img src="https://64.media.tumblr.com/28ae4ac4079501d6efa5fc5518588e69/d28e227eb623ad41-a4/s1280x1920/3d4522bda6043bf90af3a0114e79038863c79b85.pnj" alt="check mii out channel" /></a>
                </li>
               
                <li>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div id="container-1" class="content full">
                <div class="container">
                    <header></header>
                    <div class="wii">
                        Wii menu content
                    </div>
                    <div class="bottom">
                        <a href="#" class="button">
                            <span class="corner"></span>
                            <span class="text">Back</span>
                        </a>
                        <a href="" class="button">
                            <span class="corner"></span>
                            <span class="text">???</span>
                        </a>
                    </div>
                </div>
            </div>

            <div id="container-2" class="content full">
                <div class="container">
                    <header></header>
                    <div class="wii">
                        Wii menu content
                    </div>
                    <div class="bottom">
                        <a href="#" class="button">
                            <span class="corner"></span>
                            <span class="text">Back</span>
                        </a>
                        <a href="" class="button">
                            <span class="corner"></span>
                            <span class="text">???</span>
                        </a>
                    </div>
                </div>
            </div>

            <div id="container-3" class="content">
                <div class="container">
                    <p>Popup content</p>
                    <a href="#" class="cancel">Cancel</a>
                </div>
            </div>
            
        </main>
        
        <div class="bottom-text">
            <h1 className='time'>
                {currentTime?.formattedTime} <span>{currentTime?.isPM ? 'PM' : 'AM'}</span>
            </h1>
            <h1>{currentTime?.formattedDate}</h1>
        </div>
        <footer>
            <div class="button-cont">
                <a class="button" href="/">
                    <span class="corner"></span>
                    <span class="text">Home</span>
                </a>
            </div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="m"></div>
            <div class="button-cont right-side">
                <a class="button" href="/ask">
                    <span class="corner"></span>
                    <span class="text">Ask</span>
                </a>
            </div>
        </footer>
    </body>
  );
};

export default App;
