import React from "react";
import Me from './me.png';
import Warbler from './warbler.PNG'
import Weatherly from './weatherlyright.PNG'
import Cards from "./Cards"
//Home page, shows main content
const Home = () => (
    <div class="home">
        <section>
            <h1 id="greeting" class="">Hi, my name is</h1>
            <h1 id="name" class=''>Carter Brown.</h1>
            <h1 id="whatido">I build things for the web.</h1>
            <div class="amcon">
                <p id="intro" class="ptext">I'm a certified full stack Software Engineer with 2+ years of experience creating exceptional web applications. I love learning new things and programming allows me to learn something new each and every day!</p>
            </div>
        </section>
        <h1 class="aboutme" id="aboutme">About Me</h1>
        <hr></hr>
        <section id="amsec">
            <div id="sec1am">
                <p class="ptext">Hi, my name is Carter. My programming story begins when I was no older than 10 coding scripts in Lua on Roblox. Turns out this came in handy down the road because I feel many programming concepts have come very naturally to me because of my young age when I was when exposed to these concepts.</p>
                <p class="ptext">Fast-forward to today and I have 2 certifications, one in Software Engineering/Web Development and another in Responsive Web Design. I know many languages, frameworks and libraries and have also created numerous full-stack applications with this knowledge. Whether its a one-page design built with React (this website) or a traditional multi-page app built with Python/Flask (<a target="_blank" href="http://carter-weatherly.herokuapp.com/">Weatherly</a>), my focus has always been quality over quantity and trying my best to do something right the first time instead of having to do it all over again.</p>
                <p class="ptext">Here are some of the technologies I am working with today:</p>
                <div id="licon">
                <ul id="listul" class="ptext">
                    <li>JavaScript(ES6+)</li>
                    <li>Python/Flask</li>
                    <li>React.js</li>
                </ul>
                <ul id="listul" class="ptext">
                    <li>Node.js/Express.js</li>
                    <li>PostgresQL/SQL</li>
                    <li>Learning Java</li>
                </ul>
                </div>
                
            </div>
            <div id="sec2am">
                <img id="pictureofme" src={Me}></img>
            </div>
        </section>
        <h1 class="aboutme" id="projects">Projects</h1>
        <hr></hr>
        <section>
            <h4 class="projecttitle">Portfolio</h4>
            <p class="text-muted">Deployed</p>
            <div class="projectexp">
                <p class="ptext pexp">This website was built with React.js and a tiny bit of bootstrap, my goal was to make a one-page application that makes it very easy for anyone to see my background and what I can do. I also wanted to do this with minimal rambling, so those of you who have tight schedules can take a quick peek and get the gist. Thanks for checking it out!</p>
            </div>
            <a href="http://carter-warbler.herokuapp.com/"><h4 class="projecttitle">Warbler</h4></a>
            <p class="text-muted">Deployed</p>
            <div class="projectexp">
                <img src={Warbler} class="pimg"></img>
                <p class="ptext pexp">Warbler is essentially a Twitter clone built with Python/Flask. It has login/logout features to allow you to tweet, you can search other users and follow them to see their posts in your feed. You can also edit your own profile and delete it if you'd like to. Building this project taught me a lot about interactions between users on a web page and how social media websites actually work at their core.</p>
            </div>
            <a href="http://carter-weatherly.herokuapp.com/"><h4 class="projecttitle">Weatherly</h4></a>
            <p class="text-muted">Deployed</p>
            <div class="projectexp">
                <img src={Weatherly} class="pimg"></img>
                <p class="ptext pexp">Weatherly is another application I built with Python/Flask. It uses the <a target="_blank" href="http://openweathermap.org/">OpenWeatherMap API</a> to get weather information for any US zip code. The information is retrieved from the API and then stored in a PostgresQL database to avoid using a request every time a zip code is searched, improving performance and scalability. There's also a popular areas section on the home page that shows the most searched areas and a login/logout function to store your home zip code and save it as the default, which is then displayed on the home page each time you visit.</p>
            </div>
        </section>
    </div>
)

export default Home;