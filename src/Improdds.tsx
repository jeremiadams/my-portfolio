import React, {useState} from 'react'

import './Projects.scss'
import ImprCandidate from './images/improdds-candidate.png'
import ImprRecruiter from './images/improdds-recruiter.png'
import ImprChromeOne from './images/improdds-chrome-1.png'
import ImprChromeTwo from './images/improdds-chrome-2.png'
import ImprChromeThree from './images/improdds-chrome-3.png'
import ImprChromeFour from './images/improdds-chrome-4.png'


export default function Improdds() {

    const [webHover, setWebHover] = useState(false)
    const [extensionHover, setExtensionHover] = useState(false)
    const [figmaHover, setFigmaHover] = useState(false)

    const figmaImg = !figmaHover ?

                    <svg viewBox="0 0 72 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.125 0C8.58942 0 0 8.77217 0 19.5319C0 27.1156 4.38734 33.5325 10.5952 36.766C4.38734 39.9994 0 46.4163 0 54C0 61.5836 4.38734 68.0006 10.5952 71.234C4.38734 74.4675 0 80.8844 0 88.4681C0 99.2278 8.58942 108 19.125 108C29.6606 108 38.25 99.2278 38.25 88.4681V71.234V63.5505C41.2681 69.3997 47.0971 73.5319 54 73.5319C63.9145 73.5319 72 65.2744 72 55.1489C72 46.8266 66.4339 40.0489 58.9834 37.7982C66.4955 35.1614 72 28.0805 72 19.5319C72 8.77217 63.4106 0 52.875 0H36H19.125ZM19.125 4.59574H33.75V34.4681H19.125C11.0216 34.4681 4.5 27.8077 4.5 19.5319C4.5 11.2561 11.0216 4.59574 19.125 4.59574ZM38.25 4.59574H52.875C60.9784 4.59574 67.5 11.2561 67.5 19.5319C67.5 27.8077 60.9784 34.4681 52.875 34.4681H38.25V4.59574ZM19.125 39.0638H33.75V68.9362H19.125C11.0216 68.9362 4.5 62.2758 4.5 54C4.5 45.7242 11.0216 39.0638 19.125 39.0638ZM38.25 39.0638H45.7734C42.5449 40.8014 39.9513 43.4501 38.25 46.7473V39.0638ZM54 41.3617C61.4825 41.3617 67.5 47.5072 67.5 55.1489C67.5 62.7906 61.4825 68.9362 54 68.9362C46.5175 68.9362 40.5 62.7906 40.5 55.1489C40.5 47.5072 46.5175 41.3617 54 41.3617ZM19.125 73.5319H33.75V88.4681C33.75 96.7439 27.2284 103.404 19.125 103.404C11.0216 103.404 4.5 96.7439 4.5 88.4681C4.5 80.1923 11.0216 73.5319 19.125 73.5319Z" fill="rgb(244, 239, 236)"/>
                    </svg> :

                    <svg viewBox="0 0 72 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.5714 36H18C8.05886 36 0 27.9411 0 18C0 8.05886 8.05886 0 18 0H38.5714V36Z" fill="#E64A19"/>
                        <path d="M36 72H18C8.05886 72 0 63.9411 0 54C0 44.0589 8.05886 36 18 36H36V72Z" fill="#7C4DFF"/>
                        <path d="M18 108C8.05886 108 0 99.9411 0 90C0 80.0589 8.05886 72 18 72H36V90C36 99.9411 27.9411 108 18 108Z" fill="#66BB6A"/>
                        <path d="M54 36H36V0H54C63.9411 0 72 8.05886 72 18C72 27.9411 63.9411 36 54 36Z" fill="#FF7043"/>
                        <path d="M54 72C63.9411 72 72 63.9411 72 54C72 44.0589 63.9411 36 54 36C44.0589 36 36 44.0589 36 54C36 63.9411 44.0589 72 54 72Z" fill="#29B6F6"/>
                    </svg>

    const   webImg = !webHover ?

                    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36 72C51.5257 72 64.768 62.1508 69.816 48.3665C69.8235 48.3464 69.8311 48.3262 69.8381 48.3056C71.2366 44.4656 72 40.3209 72 35.9998C72 16.1306 55.8693 0 36 0C16.1307 0 0 16.1306 0 35.9998C0 39.9757 0.646029 43.8015 1.83831 47.3788C1.83579 47.4246 1.83428 47.4715 1.83428 47.5179C1.83428 48.1498 2.08019 48.7253 2.48232 49.1526C7.74081 62.5251 20.7726 71.9992 36.0003 71.9992L36 72ZM45.4052 49.9055C44.5279 54.7231 43.2031 58.8808 41.5542 62.0107C40.6396 63.7462 39.6403 65.1431 38.5427 66.0894C37.7349 66.7859 36.8974 67.2248 35.9994 67.2248C35.1019 67.2248 34.2639 66.7864 33.456 66.0894C32.3585 65.1431 31.3592 63.7462 30.4446 62.0107C28.7958 58.8808 27.4709 54.7236 26.5935 49.9055H45.4052ZM21.76 49.9055H8.03906C11.883 57.6145 18.8236 63.5141 27.2285 65.9742C26.8808 65.4305 26.5442 64.851 26.2206 64.2367C24.2946 60.5812 22.7375 55.6418 21.7599 49.9057L21.76 49.9055ZM63.9599 49.9055H50.239C49.2614 55.6412 47.7043 60.5806 45.7783 64.2366C45.4543 64.8513 45.1177 65.4309 44.7705 65.9741C53.1754 63.515 60.1155 57.6145 63.9599 49.9054L63.9599 49.9055ZM20.9073 28.9579H5.5725C5.04992 31.2216 4.77378 33.5788 4.77378 36.0002C4.77378 39.1764 5.24898 42.2423 6.13232 45.1307H21.102C20.7921 42.2196 20.6263 39.1588 20.6263 36.0002C20.6263 33.588 20.7231 31.2332 20.907 28.9579H20.9073ZM46.3057 28.9579C46.4967 31.2261 46.5969 33.5825 46.5969 36.0002C46.5969 39.1704 46.4246 42.2347 46.1011 45.1307H25.8977C25.5742 42.2347 25.4018 39.1699 25.4018 36.0002C25.4018 33.5825 25.5021 31.2261 25.6931 28.9579H46.3057ZM66.4252 28.9579H51.0904C51.2739 31.2326 51.3711 33.588 51.3711 36.0002C51.3711 39.1588 51.2053 42.2196 50.8954 45.1307H65.8651C66.7485 42.2422 67.2237 39.1759 67.2237 36.0002C67.2237 33.5788 66.9475 31.2216 66.425 28.9579H66.4252ZM27.2285 6.02623C18.0808 8.70306 10.6669 15.4567 7.09217 24.1835H21.4349C22.3707 17.557 24.0649 11.856 26.2207 7.76391C26.5447 7.14913 26.8813 6.56962 27.2285 6.02636L27.2285 6.02623ZM35.9992 4.7755C36.8967 4.7755 37.7347 5.21391 38.5426 5.91084C39.6401 6.8572 40.6394 8.25406 41.554 9.98955C43.4367 13.5623 44.8971 18.4755 45.7512 24.1825H26.2483C27.1025 18.4752 28.5628 13.5619 30.4455 9.98955C31.3601 8.25406 32.3594 6.85721 33.4569 5.91084C34.2647 5.21443 35.1023 4.7755 36.0003 4.7755H35.9992ZM44.77 6.02623C45.1177 6.56996 45.4543 7.14947 45.7779 7.76378C47.9336 11.8557 49.6273 17.5565 50.5637 24.1834H64.9064C61.3315 15.4569 53.9183 8.70293 44.7701 6.0261L44.77 6.02623Z" fill="rgb(244, 239, 236)"/>
                    </svg> :

                    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36 72C51.5257 72 64.768 62.1508 69.816 48.3665C69.8235 48.3464 69.8311 48.3262 69.8381 48.3056C71.2366 44.4656 72 40.3209 72 35.9998C72 16.1306 55.8693 0 36 0C16.1307 0 0 16.1306 0 35.9998C0 39.9757 0.646029 43.8015 1.83831 47.3788C1.83579 47.4246 1.83428 47.4715 1.83428 47.5179C1.83428 48.1498 2.08019 48.7253 2.48232 49.1526C7.74081 62.5251 20.7726 71.9992 36.0003 71.9992L36 72ZM45.4052 49.9055C44.5279 54.7231 43.2031 58.8808 41.5542 62.0107C40.6396 63.7462 39.6403 65.1431 38.5427 66.0894C37.7349 66.7859 36.8974 67.2248 35.9994 67.2248C35.1019 67.2248 34.2639 66.7864 33.456 66.0894C32.3585 65.1431 31.3592 63.7462 30.4446 62.0107C28.7958 58.8808 27.4709 54.7236 26.5935 49.9055H45.4052ZM21.76 49.9055H8.03906C11.883 57.6145 18.8236 63.5141 27.2285 65.9742C26.8808 65.4305 26.5442 64.851 26.2206 64.2367C24.2946 60.5812 22.7375 55.6418 21.7599 49.9057L21.76 49.9055ZM63.9599 49.9055H50.239C49.2614 55.6412 47.7043 60.5806 45.7783 64.2366C45.4543 64.8513 45.1177 65.4309 44.7705 65.9741C53.1754 63.515 60.1155 57.6145 63.9599 49.9054L63.9599 49.9055ZM20.9073 28.9579H5.5725C5.04992 31.2216 4.77378 33.5788 4.77378 36.0002C4.77378 39.1764 5.24898 42.2423 6.13232 45.1307H21.102C20.7921 42.2196 20.6263 39.1588 20.6263 36.0002C20.6263 33.588 20.7231 31.2332 20.907 28.9579H20.9073ZM46.3057 28.9579C46.4967 31.2261 46.5969 33.5825 46.5969 36.0002C46.5969 39.1704 46.4246 42.2347 46.1011 45.1307H25.8977C25.5742 42.2347 25.4018 39.1699 25.4018 36.0002C25.4018 33.5825 25.5021 31.2261 25.6931 28.9579H46.3057ZM66.4252 28.9579H51.0904C51.2739 31.2326 51.3711 33.588 51.3711 36.0002C51.3711 39.1588 51.2053 42.2196 50.8954 45.1307H65.8651C66.7485 42.2422 67.2237 39.1759 67.2237 36.0002C67.2237 33.5788 66.9475 31.2216 66.425 28.9579H66.4252ZM27.2285 6.02623C18.0808 8.70306 10.6669 15.4567 7.09217 24.1835H21.4349C22.3707 17.557 24.0649 11.856 26.2207 7.76391C26.5447 7.14913 26.8813 6.56962 27.2285 6.02636L27.2285 6.02623ZM35.9992 4.7755C36.8967 4.7755 37.7347 5.21391 38.5426 5.91084C39.6401 6.8572 40.6394 8.25406 41.554 9.98955C43.4367 13.5623 44.8971 18.4755 45.7512 24.1825H26.2483C27.1025 18.4752 28.5628 13.5619 30.4455 9.98955C31.3601 8.25406 32.3594 6.85721 33.4569 5.91084C34.2647 5.21443 35.1023 4.7755 36.0003 4.7755H35.9992ZM44.77 6.02623C45.1177 6.56996 45.4543 7.14947 45.7779 7.76378C47.9336 11.8557 49.6273 17.5565 50.5637 24.1834H64.9064C61.3315 15.4569 53.9183 8.70293 44.7701 6.0261L44.77 6.02623Z" fill="#29B6F6"/>
                    </svg>



        const   extensionImg = !extensionHover ?

                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5714 15.7143H22.5714V13.7143V8.57143C22.5714 4.94114 25.5126 2 29.1429 2C32.7731 2 35.7143 4.94114 35.7143 8.57143V13.7143V15.7143H37.7143H51.4286C54.1126 15.7143 56.2857 17.8874 56.2857 20.5714V34.2857V36.2857H58.2857H63.4286C67.0589 36.2857 70 39.2269 70 42.8571C70 46.4874 67.0589 49.4286 63.4286 49.4286H58.2857H56.2857V51.4286V65.1429C56.2857 67.8269 54.1126 70 51.4286 70H41.1429C40.3549 70 39.7143 69.3594 39.7143 68.5714V66.8571C39.7143 60.6586 34.3807 55.7092 28.0595 56.3426L28.0586 56.3427C22.4352 56.9089 18.5714 61.9826 18.5714 67.346V68.5714C18.5714 69.3594 17.9309 70 17.1429 70H6.85714C4.17314 70 2 67.8269 2 65.1429V54.8571C2 54.0691 2.64057 53.4286 3.42857 53.4286H5.14286C11.3414 53.4286 16.2908 48.095 15.6574 41.7738L15.6573 41.7728C15.0911 36.1495 10.0174 32.2857 4.65402 32.2857H3.42857C2.64057 32.2857 2 31.6451 2 30.8571V20.5714C2 17.8874 4.17314 15.7143 6.85714 15.7143H20.5714Z" stroke="rgb(244, 239, 236)" strokeWidth="4"/>
                    </svg> :

                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.1429 0C24.408 0 20.5714 3.83657 20.5714 8.57143V13.7143H6.85714C3.06857 13.7143 0 16.7829 0 20.5714V30.8571C0 32.7497 1.536 34.2857 3.42857 34.2857H4.65402C9.13859 34.2857 13.2183 37.5126 13.6674 41.9732C14.1817 47.1058 10.1691 51.4286 5.14286 51.4286H3.42857C1.536 51.4286 0 52.9646 0 54.8571V65.1429C0 68.9314 3.06857 72 6.85714 72H17.1429C19.0354 72 20.5714 70.464 20.5714 68.5714V67.346C20.5714 62.8614 23.7984 58.7817 28.2589 58.3326C33.3915 57.8183 37.7143 61.8309 37.7143 66.8571V68.5714C37.7143 70.464 39.2503 72 41.1429 72H51.4286C55.2171 72 58.2857 68.9314 58.2857 65.1429V51.4286H63.4286C68.1634 51.4286 72 47.592 72 42.8571C72 38.1223 68.1634 34.2857 63.4286 34.2857H58.2857V20.5714C58.2857 16.7829 55.2171 13.7143 51.4286 13.7143H37.7143V8.57143C37.7143 3.83657 33.8777 0 29.1429 0Z" fill="#E64A19"/>
                    </svg>



        function mouseEnter(id) {
            if (id === 1) {
                setWebHover(true)
            } else if (id === 2) {
                setExtensionHover(true)
            } else if (id === 3) {
                setFigmaHover(true)
            }
        }

        function mouseLeave(id) {
            if (id === 1) {
                setWebHover(false)
            } else if (id === 2) {
                setExtensionHover(false)
            } else if (id === 3) {
                setFigmaHover(false)
            }
        }

    return (
        <>
            <section className="grid project__page-title">
                <div className="content">
                    <h2>Improdds - Bridging the Gap Between Job Seekers and Recruiters</h2>
                </div>
            </section>

            <div className="grid project__page">

                <section className="content project__page-desc">
                    <div className="project__page-text">
                        <div className="project__page-tools">
                            <p>TECHNOLOGIES: <span>TYPESCRIPT</span> <span>NEXT JS</span> <span>TAILWIND CSS</span> <span>MATERIAL UI</span></p>
                        </div>

                        <h4 className='project__page-heading-primary'>Overview:</h4>
                        <p>Improdds, <span className='project__page-text-italic'>(gotten from the phrase "improve your odds")</span> is an innovative platform designed to streamline the job-seeking process by connecting candidates with experienced mentors, known as recruiters, who provide a range of services to enhance candidates' job search experience.</p> 
                        
                        
                        <h4 className='project__page-heading'>Key Features:</h4>
                        <ul>
                            <li>
                                <span className="project__page-text-bold">Personalized Services: </span>
                                <span>Job seekers, referred to as candidates on the app, can access a variety of services such as resume optimization, cover letter crafting, and negotiation advice.</span>
                            </li>
                            <li>
                                <span className="project__page-text-bold">Easy Booking System: </span>
                                <span>Candidates can effortlessly find and connect with recruiters on the Improdds web app, booking personalized sessions to receive tailored guidance.</span>
                            </li>
                            <li>
                                <span className="project__page-text-bold">Efficient Meeting Setup: </span>
                                <span>Recruiters receive meeting requests, and through the platform, a Google Meet link is generated and sent directly to their email for seamless communication.</span>
                            </li>
                            <li>
                                <span className="project__page-text-bold">Chrome Extension: </span>
                                <span>Extension to empower candidates with additional functionalities, including the ability to save job listings directly from external job sites and also a job ranking functionality. Candidates can bookmark interesting positions on the extension, and these saved jobs are accessible on their profile in the candidate dashboard.</span>
                            </li>
                        </ul>

                        
                        <h4 className='project__page-heading'>Job Ranking Functionality:</h4>
                        <ul>
                            <li>
                                <span className="project__page-text-bold">Skill Proficiency Matching: </span>
                                <span>During onboarding, candidates provide a list of skills, including programming languages, design skills, soft skills, or custom skills, along with proficiency levels and years of experience. This information is used to calculate a match score against job listings.</span>
                            </li>
                            <li>
                                <span className="project__page-text-bold">Enhanced Job Discovery: </span>
                                <span>Candidates can check the rank score of a job directly on the extension. The score is generated by comparing the skills they've saved with the skills required for a particular job, providing a personalized and data-driven approach to job matching.</span>
                            </li>
                            <li>
                                <span className="project__page-text-bold">Future Development: </span>
                                <span>As part of the continuous improvement plan, future iterations will allow candidates to upload their CVs, enhancing the accuracy and relevance of the job rank score.</span>
                            </li>
                        </ul>
                        


                        <h4 className='project__page-heading'>My Contribution:</h4>
                        <p>As the sole front-end web developer for Improdds, I played a pivotal role in bringing the project to life. I translated the design provided by the product designer into a fully functional web application using NextJS, Typescript, and Tailwind CSS. Some UI components where crafted using Material UI and Shadcn libraries. In addition, I also created a Chrome extension to empower candidates with seamless job-saving capabilities and personalized job ranking functionality.</p>
                        
                        
                        <h4 className='project__page-heading'>Achievements:</h4>
                        <ul>
                            <li>
                                <span>Successful implementation of a user-friendly and intuitive interface for both candidate and recruiter dashboards.</span>
                            </li>
                            <li>
                                <span>Seamless integration of backend APIs to ensure smooth communication and data exchange.</span>
                            </li>
                            <li>
                                <span>Overcoming challenges in creating a dynamic calendar component to enhance scheduling efficiency on the dashboards.</span>
                            </li>
                            <li>
                                <span>Development of a Chrome extension with innovative features to enhance the overall job-seeking experience.</span>
                            </li>
                        </ul>

                        <p>
                            <br />
                            Working on Improdds provided me with invaluable experience in application development, API integration, and debugging. It showcases my ability to take a project from concept to completion and underscores my dedication to delivering a high-quality user experience.
                        </p>


                        {/* <h4 className='project__page-heading'>Screenshots:</h4> */}

                        <div className='improdds__screenshot-top'>
                            <div className='improdds__screenshot-top-image'>
                                <img src={ImprCandidate} alt='Improdds Candidate Dashboard'/>
                            </div>
                            <div className='improdds__screenshot-top-image'>
                                <img src={ImprRecruiter} alt='Improdds Recruiter Dashboard'/>
                            </div>
                            <div className='improdds__screenshot-label'>
                                <p>-- Screenshot of the homepage of candidate dashboard (top)</p>
                                <p>-- Screenshot of the homepage of recruiter dashboard (bottom)</p>
                            </div>
                        </div>

                        <div className='improdds__screenshot-bottom'>
                            <div className='improdds__screenshot-bottom-box'>
                                <div className='improdds__screenshot-bottom-image'>
                                    <img src={ImprChromeOne} alt='Improdds Chrome Extension'/>
                                </div>
                                <div className='improdds__screenshot-bottom-image'>
                                    <img src={ImprChromeTwo} alt='Improdds Chrome Extension'/>
                                </div>
                                <div className='improdds__screenshot-bottom-image'>
                                    <img src={ImprChromeThree} alt='Improdds Chrome Extension'/>
                                </div>
                            </div>
                            <div className='improdds__screenshot-bottom-image-box'>
                                <img src={ImprChromeFour} alt='Improdds Chrome Extension'/>
                            </div>
                            <div className='improdds__screenshot-label'>
                                <p>-- Screenshots of the chrome extension </p>
                            </div>
                        </div>

                        <h4 className='project__page-heading'>View on Improdds:</h4>
                        <p className='project-page-sub-paragraph'>You can use the following details to view the candidate dashboard</p>
                        <ul>
                            <li>
                                <span>Username: cuydehegno@gufum.com</span>
                            </li>
                            <li>
                                <span>Password: #Contract1</span>
                            </li>
                        </ul>

                        <p className='project-page-sub-paragraph'>You can use the following details to view the recruiter dashboard</p>
                        <ul>
                            <li>
                                <span>Username: improdds@gmail.com</span>
                            </li>
                            <li>
                                <span>Password: #Contract1</span>
                            </li>
                        </ul>
                        
                        
                        <div className="project__page-btns">
                            <a href="https://improdds.com" target="_blank" rel="noreferrer" onMouseEnter={() => mouseEnter(1)} onMouseLeave={() => mouseLeave(1)}><p>Visit<br />Improdds </p>
                                <span>
                                    {webImg}
                                </span>
                            </a>

                            <a href="https://chromewebstore.google.com/detail/improdds-job-analytics/honfdjghfeeidccdlmoiackmakamdeie" target="_blank" rel="noreferrer" onMouseEnter={() => mouseEnter(2)} onMouseLeave={() => mouseLeave(2)}><p>View <br /> Extension </p>
                                <span>
                                    {extensionImg}
                                </span>
                            </a>

                            {/* <a href="https://www.figma.com/file/LYaZCZ0FVIb5iPLTgAbLy7/Web3-Chrome-Extension?node-id=0%3A1&t=8UqWNRZQqyZgnuZ4-1" target="_blank" rel="noreferrer" onMouseEnter={() => mouseEnter(3)} onMouseLeave={() => mouseLeave(3)}><p>View Design </p> 
                                <span>
                                    {figmaImg}
                                </span>
                            </a> */}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )   
}