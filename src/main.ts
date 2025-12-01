import { App } from "./app/";
import "./styles/global.scss";
import { InputSystem } from "./shared/Engine/InputSystem";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="container">
      <div class="intro">
        <h1 class="text">
          Welcome to my portfolio page.
        </h1>
        <h5 class="text">
          In the bottom-left corner, you can find audio playback.
          <br />
          You can control the character, approach the citizens of this small town, and read information about me.
        </h5>
      </div>
      <canvas id="game"></canvas>
      <div id="notification">
        <h2>
          Press E
        </h2>    
      </div>
      <div class="intro">
        <h4 class="text">
          Use the arrow keys on your keyboard for navigation.
        </h4>
        <p class="text">
          The entire portfolio is written in pure JavaScript and Canvas, without using any external libraries.
        </p>
      </div>
      </div>
    <div id="modals_container" class="modals">
  <div class="modal" id="22">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title dark-grey ">Professional experience</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position dark-grey">React Developer(Strong Middle) | 2022-2024</h5>
        <p class="company dark-grey max-w-4 pb-16 l-s-l">Gremcy</p>
        <ul class="experience-list">
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            Developed web applications using React, Redux Toolkit, React Router,
            Typescript and modern frontend tools.
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            Implemented Feature-Slides Design (FSD) architecture for better
            scalability and maintainability.
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            Optimized application perfomance and enhanced user experience.
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">Conducted code reviews.</li>
        </ul>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position dark-grey">React Developer(Junior) | 2021-2022</h5>
        <p class="company dark-grey max-w-4 pb-16 l-s-l">Filancy</p>
        <ul class="experience-list max-w-4 pb-16 l-s-l">
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            Built and maintained SPA applications with React.
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">Configured project builds using Webpack.</li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            Developed a React Native mobile app with API intergation and push
            notifications.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="23">
    <div class="overlay"></div>
    <div class="content">
     <div>
        <h3 class="title dark-grey">Hobbies & Interests</h3>
      </div>
      <div class="wokr_experience_container">
        <ul class="experience-list">
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            sports
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            reading
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            gaming
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            traveling (visited more than 15 countries)
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            singing
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            game development as a creative hobby
          </li>
        </ul>
      </div>
       <div>
        <h3 class="title dark-grey">Technical Skills</h3>
      </div>
      <div class="wokr_experience_container">
       <h5 class="position dark-grey">Languages & Technologies:</h5>
        <ul class="experience-list">
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            HTML, CSS, JavaScript, TypeScript, React, WebGL, C#, .NET
          </li>
        </ul>

       <h5 class="position dark-grey">Tools & Platforms:</h5>
        <ul class="experience-list">
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            Git, Figma, Unity
          </li>
        </ul>

       <h5 class="position dark-grey">Strengths:</h5>
        <ul class="experience-list">
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            clean code, application architecture, design patterns, problem-solving
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="25">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title dark-grey">Education</h3>
      </div>
      <div class="wokr_experience_container">
        <ul class="experience-list">
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            Maritime College named after O.I.Marinesko of National University "Odessa Maritime Academy" | Marine engineer
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            Web Development Courses at Odesa Polytechnic University
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            JAMK University of Applied Sciences, ICT Program — currently studying
          </li>
        </ul>
      </div>
       <div>
        <h3 class="title dark-grey">My Approach & Values</h3>
      </div>
      <div class="wokr_experience_container">
       <h5 class="position dark-grey">I believe great development combines logic and creativity.</h5>
       <h5 class="position dark-grey">My core principles are:</h5>
        <ul class="experience-list">
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            clean and maintainable code
          </li>
           <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            structured thinking
          </li>
           <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            continuous learning
          </li>
           <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            responsibility
          </li>
           <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            speed and efficiency
          </li>
           <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            strong communication and problem-solving
          </li>
          
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="24">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title dark-grey">About me</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position max-w-4 pb-16 l-s-l dark-grey">
          Hi! My name is Serhii Ryzhkov,I'm a Front-end Developer from Odesa, Ukraine, with over 4 years of experience creating modern, fast, and visually engaging web applications. 
          I worked as a strong Middle/Senior skill level and continuously expand my knowledge in both front-end and back-end development.
        </h5>
          <h5 class="position max-w-4 pb-16 l-s-l dark-grey">
            I specialize in building interactive and high-performance web applications, focusing on clean architecture, design patterns, scalability, and code quality.
          </h5>
      </div>

      <div class="wokr_experience_container">
       <h5 class="position dark-grey">I’m currently focused on:</h5>
        <ul class="experience-list">
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            finding new professional opportunities
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            expanding my portfolio project
          </li>
          <li class="skill dark-grey max-w-4 pb-16 l-s-l">
            deepening my knowledge in both front-end and back-end development
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="26">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title">Skills</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Strong Middle) | 2022-2024</h5>
        <p class="company">Gremcy</p>
        <ul class="experience-list">
          <li class="skill">
            Developed web applications using React, Redux Toolkit, React Router,
            Typescript and modern frontend tools.
          </li>
          <li class="skill">
            Implemented Feature-Slides Design (FSD) architecture for better
            scalability and maintainability.
          </li>
          <li class="skill">
            Optimized application perfomance and enhanced user experience.
          </li>
          <li class="skill">Conducted code reviews.</li>
        </ul>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Junior) | 2021-2022</h5>
        <p class="company">Filancy</p>
        <ul class="experience-list">
          <li class="skill">
            Built and maintained SPA applications with React.
          </li>
          <li class="skill">Configured project builds using Webpack.</li>
          <li class="skill">
            Developed a React Native mobile app with API intergation and push
            notifications.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="27">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title">Hobbies</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Strong Middle) | 2022-2024</h5>
        <p class="company">Gremcy</p>
        <ul class="experience-list">
          <li class="skill">
            Developed web applications using React, Redux Toolkit, React Router,
            Typescript and modern frontend tools.
          </li>
          <li class="skill">
            Implemented Feature-Slides Design (FSD) architecture for better
            scalability and maintainability.
          </li>
          <li class="skill">
            Optimized application perfomance and enhanced user experience.
          </li>
          <li class="skill">Conducted code reviews.</li>
        </ul>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Junior) | 2021-2022</h5>
        <p class="company">Filancy</p>
        <ul class="experience-list">
          <li class="skill">
            Built and maintained SPA applications with React.
          </li>
          <li class="skill">Configured project builds using Webpack.</li>
          <li class="skill">
            Developed a React Native mobile app with API intergation and push
            notifications.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

`;

InputSystem.init();
const main = new App();
main.run();
