import React, { useState, useEffect } from 'react';
import './App.css';


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
                    <a href="https://github.com/Kushagra1480">
                        <img src="https://raw.githubusercontent.com/gist/theAdityaNVS/f5b585d1082da2dffffea32434f37956/raw/7f9552d0a179b4f84059259fa878199e369b069c/GitHub-logo.gif" alt="github" style={{backgroundColor:"white"}}/></a>
                </li> 

                <li>
                    <a href="https://eggdesign.tumblr.com">
                    <img src="https://media.licdn.com/dms/image/C4D22AQHl3qJ1B9tfrg/feedshare-shrink_2048_1536/0/1676985042381?e=2147483647&v=beta&t=wDFyLeR5up3VcGfOpD_e8hKBbqSdbnp9l0c1RMqdiy4" alt="leetcode" style={{backgroundColor:"white"}}/></a>
                </li>
               
                <li>
                    <a href="https://www.linkedin.com/in/kushagra-kartik/"> 
                        <img src ="https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/latest-linked-logo.gif" />
                    </a>
                </li>
                <li>
                    <img src='https://media.tenor.com/irSeFQ2poOYAAAAi/wii-channel-static-empty-wii-channel.gif' style={{width:"360px", height:"215px", marginTop:"-42px"}}/>
                </li>
                <li>
                <img src='https://media.tenor.com/irSeFQ2poOYAAAAi/wii-channel-static-empty-wii-channel.gif' style={{width:"360px", height:"215px", marginTop:"-42px"}}/>
                </li>
                <li>
                <img src='https://media.tenor.com/irSeFQ2poOYAAAAi/wii-channel-static-empty-wii-channel.gif' style={{width:"360px", height:"215px", marginTop:"-42px"}}/>
                </li>
                <li>
                <img src='https://media.tenor.com/irSeFQ2poOYAAAAi/wii-channel-static-empty-wii-channel.gif' style={{width:"360px", height:"215px", marginTop:"-42px"}}/>
                </li>
                <li>
                <img src='https://media.tenor.com/irSeFQ2poOYAAAAi/wii-channel-static-empty-wii-channel.gif' style={{width:"360px", height:"215px", marginTop:"-42px"}}/>
                </li>
                <li>
                <img src='https://media.tenor.com/irSeFQ2poOYAAAAi/wii-channel-static-empty-wii-channel.gif' style={{width:"360px", height:"215px", marginTop:"-42px"}}/>
                </li>
                <li>
                <img src='https://media.tenor.com/irSeFQ2poOYAAAAi/wii-channel-static-empty-wii-channel.gif' style={{width:"360px", height:"215px", marginTop:"-42px"}}/>
                </li>
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
            <h1 className='time' >
                {currentTime?.formattedTime} <span>{currentTime?.isPM ? 'PM' : 'AM'}</span>
            </h1>
            <h1>{currentTime?.formattedDate}</h1>
        </div>
        <footer>
            <div class="button-cont">
                <a class="button" href="/">
                    <span class="corner"></span>
                    <span class="text">About</span>
                </a>
            </div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="m"></div>
            <div class="button-cont right-side">
                <a class="button" href="/ask">
                    <span class="corner"></span>
                    <span class="text">
                        <a href='mailto:kushagrakartik1480@gmail.com'><img src='https://cdn3d.iconscout.com/3d/premium/thumb/gmail-11382933-9148198.png?f=webp' style={{width:"85px", height:"85px"}}/></a>
                        </span>
                </a>
            </div>
        </footer>
    </body>
  );
};

export default App;
