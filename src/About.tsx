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
                Creating software is a beautiful process, especially when it involves writing clean and reusable code, designing sleek user interfaces, and ensuring accessibility.
                </h2>

                <p>
                    I really love solving complex problems and I love the process of building software from grassroot stages to seeing entire products formed. I aim to make sure that the projects I am involved in are scalable and that their performance is highly optimized. 
                    <br/><br/>
                    I possess an excellent eye for design, and I implement those designs with precision to create user interfaces that are seamless and provide the best possible experience for the user. 
                    <br/><br/>
                    I communicate greatly and enjoy collaborating with teams that value the importance of using critical thinking to develop solutions. 
                    <br/><br/>
                    My technical skills include experience working with HTML, CSS, JavaScript ES6, React.js and Next.js, TypeScript, SASS and Tailwind CSS.
                    <br/><br/> 
                    I strongly belief in continuous personal and professional development, and I am enthusiastic about incorporating this philosophy into my work. I have a passion for acquiring knowledge and integrating new and emerging technologies and concepts within the industry.
                    <br/><br/>
                    Aside from work, I play football (real-life and fifa) and I watch Formula 1.
                </p>
            </div>
        </section>

        <section className="grid">
          <div className="content billboard__resume">
            <a href="https://drive.google.com/file/d/1_KvfgmUp3v3vB3IpL0PS3EEJSTaBkyR7/view?usp=sharing" rel="noreferrer" target="_blank">View Resume</a>
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

