import "./styles.scss";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect, useEffect} from "react";
import {Link} from 'react-router-dom'
import { motion, useTransform, useScroll, useSpring, useMotionValue, useVelocity, useAnimationFrame, useTime } from "framer-motion";
import { degreesToRadians, progress, mix, easeInOut } from "popmotion";
import { wrap } from "@motionone/utils";
import HeroImg from './images/bitmoji.png'
import RocketImg from './images/rocket.png'
import CoinfundrScreenshot from './images/coinfundr-.png'
import EshopaScreenshot from './images/eshopa-.png'
import WerbScreenshot from './images/werb-.png'
import QuizzicalScreenshot from './images/quizzical-.png'
import { useFollowPointer } from './use-follow-pointer.ts'


const color = '#444';


const Star = ({ p }: { p: number }) => {
  const ref = useRef<THREE.Object3D>(null);

  useLayoutEffect(() => {
    const distance = mix(.5, 18.5, Math.random());
    const yAngle = mix(
      degreesToRadians(90),
      degreesToRadians(120),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[.1, .5, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({ numStars = 120 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(140)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.00006
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(1.5));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }

  return (
    <>
      {stars}
    </>
  );
}

const svgVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
}

const imgVariants = {
  hidden: {
    filter: 'saturate(0%)',
    opacity: 0,
    y: 100 
  },
  visible: {
    filter: 'saturate(100%)',
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  }
}

const hVariants = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2
    }
  }
}

const crownVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: [0.2, 1.2, 1],
    transition: {
      duration: 2
    },
    type: "spring"
  }
}




interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const prevT = useRef<number>(0);
  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;

    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}


export default function Home(props) {


  const buttonRef = useRef(null);
  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const textRef3 = useRef(null)
  const textRef4 = useRef(null)
  const arrowRef1 = useRef(null)
  const arrowRef2 = useRef(null)
  const arrowRef3 = useRef(null)
  const arrowRef4 = useRef(null)
  const screenshotRef1 = useRef(null)
  const screenshotRef2 = useRef(null)
  const screenshotRef3 = useRef(null)
  const screenshotRef4 = useRef(null)
  const { x, y } = useFollowPointer(buttonRef);

  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  function mouseEnter(num) {
    if (num === 1) {
      textRef1.current.style.transition = 'all .3s'
      textRef1.current.style.transform = 'translateX(-10px)'
      arrowRef1.current.style.transition = 'all .3s'
      arrowRef1.current.style.transform = 'translateX(10px)'
      screenshotRef1.current.style.transition = 'all .3s'
      screenshotRef1.current.style.visibility = 'visible'
      screenshotRef1.current.style.opacity = '1'
    } else if (num === 2) {
      textRef2.current.style.transition = 'all .3s'
      textRef2.current.style.transform = 'translateX(-10px)'
      arrowRef2.current.style.transition = 'all .3s'
      arrowRef2.current.style.transform = 'translateX(10px)'
      screenshotRef2.current.style.transition = 'all .3s'
      screenshotRef2.current.style.visibility = 'visible'
      screenshotRef2.current.style.opacity = '1'
    }
    else if (num === 3) {
      textRef3.current.style.transition = 'all .3s'
      textRef3.current.style.transform = 'translateX(-10px)'
      arrowRef3.current.style.transition = 'all .3s'
      arrowRef3.current.style.transform = 'translateX(10px)'
      screenshotRef3.current.style.transition = 'all .3s'
      screenshotRef3.current.style.visibility = 'visible'
      screenshotRef3.current.style.opacity = '1'
    }
    else if (num === 4) {
      textRef4.current.style.transition = 'all .3s'
      textRef4.current.style.transform = 'translateX(-10px)'
      arrowRef4.current.style.transition = 'all .3s'
      arrowRef4.current.style.transform = 'translateX(10px)'
      screenshotRef4.current.style.transition = 'all .3s'
      screenshotRef4.current.style.visibility = 'visible'
      screenshotRef4.current.style.opacity = '1'
    }
  }

  function mouseLeave(num) {
    if (num === 1) {
      textRef1.current.style.transform = 'translateX(10px)'
      arrowRef1.current.style.transform = 'translateX(-10px)'
      screenshotRef1.current.style.visibility = 'hidden'
      screenshotRef1.current.style.opacity = '0'
    } else if (num === 2) {
      textRef2.current.style.transform = 'translateX(10px)'
      arrowRef2.current.style.transform = 'translateX(-10px)'
      screenshotRef2.current.style.visibility = 'hidden'
      screenshotRef2.current.style.opacity = '0'
    } else if (num === 3) {
      textRef3.current.style.transform = 'translateX(10px)'
      arrowRef3.current.style.transform = 'translateX(-10px)'
      screenshotRef3.current.style.visibility = 'hidden'
      screenshotRef3.current.style.opacity = '0'
    } else if (num === 4) {
      textRef4.current.style.transform = 'translateX(10px)'
      arrowRef4.current.style.transform = 'translateX(-10px)'
      screenshotRef4.current.style.visibility = 'hidden'
      screenshotRef4.current.style.opacity = '0'
    }
    
  } 

//   const executeScroll = () => {projectsRef.current.scrollIntoView(); setOpen(false)}
//   const executeScroll2 = () => {contactRef.current.scrollIntoView(); setOpen(false)}

useEffect(() => {
    props.updateProjectRef(projectsRef)
    props.updateContactRef(contactRef)
}, [])

  return (
    <>
      <div className="container">
        <section className="grid hero">
            
                <div className="hero__text">
                    <motion.h1
                        variants={hVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        I am <span>Jeremiah.</span><br/><span className="span-2">Software Developer.</span>
                    </motion.h1>
                    <motion.h2
                        initial={{
                        y: -30,
                        opacity: 0
                        }}
                        animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 3
                        }
                        }}
                    >
                        I build highly <span>functional, accessible </span> web solutions. 
                    </motion.h2>
                </div>


                <div className="hero__img">
                        <motion.svg 
                        width="auto" 
                        className="hero__zigzag"
                        height="auto" 
                        viewBox="0 0 581 546" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"

                        variants={svgVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        <motion.path 
                            d="M248.125 17L39.4483 44.8677L303.511 131.203L7 154.699L556.384 384.197L419.877 424.633L581 477.636L419.877 529" 
                            stroke="#9900ff" 
                            strokeWidth="34"

                            variants={pathVariants}
                        />

                        </motion.svg>
                        <motion.img
                            className="hero__heroimg" 
                            src={HeroImg}
                            alt="Myself"
                            variants={imgVariants}
                            initial="hidden" 
                            animate="visible"
                        />
                        <motion.svg 
                            className="hero__crown" 
                            width="63" height="40" 
                            viewBox="0 0 63 40" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"

                            variants={crownVariants}
                            initial="hidden"
                            animate="visible"
                            drag={true}
                            

                        >
                            <motion.path d="M4.87118 39.1498L0.3471 9.29086C0.215757 8.424 1.18416 7.8198 1.90502 8.31886L18.6287 19.8968C19.1015 20.2241 19.7523 20.0862 20.0517 19.5952L31.1462 1.40023C31.536 0.761036 32.464 0.761033 32.8538 1.40022L43.9269 19.5601C44.2341 20.0639 44.9086 20.1936 45.3807 19.8395L60.5859 8.43558C61.2962 7.90288 62.2967 8.491 62.1767 9.37069L58.1179 39.1351C58.0504 39.6306 57.6272 40 57.1271 40H5.8599C5.36546 40 4.94525 39.6387 4.87118 39.1498Z" fill="#FB5827"/>
                        </motion.svg>
                        <motion.img 
                            className="hero__rocket" 
                            src={RocketImg}
                            alt="Rocket as Design"
                            variants={crownVariants}
                            initial="hidden"
                            animate="visible"
                            drag={true}
                        />
                </div>
            
        </section>


        <section className="grid billboard">
            <div className="content">
                <motion.h1
                    initial={{
                    y: -30,
                    opacity: 0
                    }}
                    whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 1.5
                    }
                    }}
                    viewport={{ amount: 'some' }}
                >
                    I am skilled at <span>designing</span> and <span>implementing</span> web applications. I strive every day to perfect my craft.
                </motion.h1>
            </div>
        </section>

        <section className="grid intro">
            <div className="intro__text">
        
                    <motion.h1
                    className="intro__text-primary"
                    initial={{
                        y: -30,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                        duration: 1.5
                        }
                    }}
                    viewport={{ amount: 'some' }}
                    >
                    My goal is to use my creativity to develop web applications that offer meaningful and user-friendly experiences. I have a strong passion for accessibility & testing hence, I aim to create software that effectively meets every user's needs regardless of who uses it.
                    </motion.h1>
                    
                    <Link to="/about">
                      <motion.button
                          ref={buttonRef}
                          className="box"
                          animate={{ x, y }}
                          transition={{
                              type: "spring",
                              damping: 3,
                              stiffness: 10,
                              restDelta: 0.001
                          }}
                          >
                          More about me  <span>🕴️</span>
                      </motion.button>
                    </Link>
            
            </div>
            {/* <motion.div 
                className="grid into-bg"
                whileInView={  {backgroundColor: [ 'rgba(183, 156, 237, 0.72)', 'rgba(239, 216, 205, 0.742)', 'rgba(244, 239, 236, 0.704)', 'rgba(244, 239, 236, 0.304)',  'rgba(255, 255, 255, 0)'], transition: {duration: 4, times: [0, 0.2, 0.4, 1]}}  }
                viewport={{ once: true }}
            >
            </motion.div> */}
        </section>

        <section className="grid projects" id="projects" ref={projectsRef}>
            <div className="projects__box">
                <h1>Projects</h1>

                <Link to="/projects/coinfundr">
                  <div onMouseEnter={() => mouseEnter(1)} onMouseLeave={() => mouseLeave(1)} className="projects__chrome-extension projects__box-item">
                      <h2 ref={textRef1} className="projects__text">Coinfundr - Polygon Africa Hackathon 2022</h2>
                      <h2 ref={arrowRef1} className="projects__text">&rarr;</h2>
                      <img alt="Coinfunder Logo" ref={screenshotRef1} src={CoinfundrScreenshot}/> 
                  </div>
                </Link>

                <Link to="/projects/eshopa">
                  <div onMouseEnter={() => mouseEnter(2)} onMouseLeave={() => mouseLeave(2)} className="projects__eshopa projects__box-item">
                      <h2 ref={textRef2} className="projects__text">eShopa - Buy Now Pay Later</h2>
                      <h2 ref={arrowRef2} className="projects__text">&rarr;</h2>
                      <img alt="Eshopa Logo" ref={screenshotRef2} src={EshopaScreenshot}/>
                  </div>
                </Link>

                <Link to="/projects/werb">
                  <div onMouseEnter={() => mouseEnter(3)} onMouseLeave={() => mouseLeave(3)} className="projects__quizzical projects__box-item">
                      <h2 ref={textRef3} className="projects__text">Werb - Web3 Dashboard & Chrome Extension</h2>
                      <h2 ref={arrowRef3} className="projects__text">&rarr;</h2>
                      <img alt="Werb Logo" ref={screenshotRef3} src={WerbScreenshot}/> 
                  </div>
                </Link>

                <Link to="/projects/quizzical">
                  <div onMouseEnter={() => mouseEnter(4)} onMouseLeave={() => mouseLeave(4)} className="projects__quizzical projects__box-item">
                      <h2 ref={textRef4} className="projects__text">Quizziapp - Quiz App</h2>
                      <h2 ref={arrowRef4} className="projects__text">&rarr;</h2>
                      <img alt="Quizzical app screenshot" ref={screenshotRef4} src={QuizzicalScreenshot}/> 
                  </div>
                </Link>
            </div>
        </section>

        <section className="contact">
            <ParallaxText baseVelocity={-2}>Reach Out! Let's create Value ✉️</ParallaxText>
            <ParallaxText baseVelocity={2}>Send a message 👇🏿</ParallaxText>       
        </section>

        <section className="grid contact__prompt" id="contact" ref={contactRef}>
            <div className="contact__prompt-box">
                <div><a className="contact__prompt-email" href="mailto:jeremiadamss@gmail.com">Drop me a message!</a></div>
                <div className="contact__prompt-socials">
                    <div><a href="https://www.twitter.com/paramountjeremi" target="_blank">Twitter</a></div>
                    <div><a href="https://www.instagram.com/jeremiadams" target="_blank">Instagram</a></div>
                    <div><a href="https://www.linkedin.com/in/jeremiadams" target="_blank">LinkedIn</a></div>
                </div>
            </div>
        </section>


        {/* <Canvas className="canvas" gl={{ antialias: false }}>
          <Scene />
        </Canvas> */}
      </div>
    </>
    
  );
}

