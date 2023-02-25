import "./styles.scss";
import "./About.scss"


import ScreenShotTwo from './images/bitmoji.png'
import HtmlImg from './images/html-5-96.svg'
import CssImg from './images/css3-96.svg'
import JavascriptImg from './images/javascript-96.svg'
import ReactImg from './images/react-96.svg'
import NextJsImg from './images/nextjs.svg'
import TailwindImg from './images/tailwind-96.svg'
import TypescriptImg from './images/typescript-96.svg'




export default function About() {

  return (
    <>
      <section className="about__img">
        {/* <img alt="About me" src={ScreenShotTwo}/> */}
      </section>

      <div className="container about">

        <section className="grid billboard billboard__about">
            <div className="content">
                <h1>
                    JEREMIAH UDISIFAN<br/> ADAMU
                </h1>

                <h2>
                    I LOVE PRETTY THINGS; OUTFITS, PEOPLE, LIFESTYLE, AND DIGITAL PRODUCTS. I WORK EVERY DAY TO PERFECT MY CRAFT IN  WEB DEVELOPMENT AND LIVE THE GOOD LIFE THE BEST WAY I CAN.
                </h2>

                <p>
                    I am really passionate about solving complex problems and love to be part of a team that recognises the significance of critical thinking in the analysis of variants to provide solutions. I ensure projects I work on are scalable and the performance is thoroughly optimised. With an excellent eye for design and meticulous analysis, I provide pixel-perfect implementations and seamless user interfaces for the optimal experience. I also greatly utilise my critical thinking skills and knowledge of data structures and algorithms to ensure optimal solutions. I am also a great communicator and a tremendous team player. I have experience with JavaScript, specializing in ReactJS, NextJS, and TypeScript. I also have experience working with Tailwind CSS, SASS for designing. I strongly believe that the mind is our greatest tool and with the right mindset, anything is achievable so I am not shy of taking on a new challenge or adopting new technology.
                </p>
            </div>
        </section>

        <section className="grid">
          <div className="content billboard__resume">
            <a href="https://drive.google.com/file/d/1-aBlgStGRW9GsVWTb3hLGYN5NWj9M4Z6/view?usp=sharing" rel="noreferrer" target="_blank">View Resume</a>
          </div>
        </section>

        <section className="grid tools">
          <div className="content tools__images">
            <img alt="HTML logo" src={HtmlImg}/>
            <img alt="CSS logo" src={CssImg}/>
            <img alt="JavaScript logo" src={JavascriptImg}/>
            <img alt="ReactJS logo" src={ReactImg}/>
            <img alt="NextJS logo" src={NextJsImg}/>
            <img alt="Tailwind CSS logo" src={TailwindImg}/>
            <img alt="Typescript logo" src={TypescriptImg}/>
          </div>
        </section>

        <section className="grid billboard billboard__quote">
          <div className="content">
            <h1>
                    <span>"Love </span>the life you <span>live. Live</span> the life you <span>love."</span>
                </h1>
          </div>
        </section>

      </div>
    </>
    
  );
}

