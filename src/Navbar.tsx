import React from 'react';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { Squeeze as Hamburger } from 'hamburger-react'

import './styles.scss'

export default function Navbar(props) {
    


    return (
        <nav className="grid nav">    
            <div className="content nav__box">
                <motion.div 
                    className="nav__items"
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 3
                        }
                    }}
                >
                    <Link to="/">
                        <h3>Jeremiah A.</h3>
                    </Link>
                    <div className="nav__items-links">
                        <HashLink to="/#projects">
                            <h3>Stuff I've done</h3>
                        </HashLink>
                        <Link to="/about">
                            <h3>A bit about me</h3>
                        </Link>
                        <HashLink to="/#contact">
                            <h3>Reach out</h3>
                        </HashLink>
                    </div>
                    <div className="nav__items-hamburger">
                        <Hamburger
                            toggled={props.isOpen} 
                            toggle={props.setOpen} 
                            size={20} 
                            duration={0.2} 
                            distance="sm" 
                            color="#c2f8cb"
                            easing="ease-in"
                        />
                    </div>
                </motion.div>
            </div>

            {props.isOpen && <motion.div 
                        className="hamburger__nav"
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                <div className="hamburger__nav-links">
                <HashLink to="/#projects">
                    <h3 onClick={props.flipNav}>Stuff I've done</h3>
                </HashLink>
                <Link to="/about">
                    <h3 onClick={props.flipNav}>A bit about me</h3>
                </Link>
                <HashLink to="/#contact">
                    <h3 onClick={props.flipNav}>Reach out</h3>
                </HashLink>
                </div>
            </motion.div>}
        </nav>
    );
}