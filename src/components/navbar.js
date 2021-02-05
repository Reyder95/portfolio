import React, { useEffect } from 'react';

import * as Scroll from 'react-scroll';
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function Navbar() {

    useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', arguments);
        })

        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', arguments)
        })

        scrollSpy.update();

        return function cleanup() {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    })

    return (
        <div className="navcomponent">
            <nav className="main-nav">
                <div className="nav-element">
                    <Link to="about" spy={true} smooth={true} offset={-300} duration={500}>
                        <a href="#">
                            <strong>About Me</strong>
                        </a>
                    </Link>
                    
                </div>

                <div className="nav-element">
                    <Link to="projects" spy={true} smooth={true} offset={-300} duration={500}>
                        <a href="#">
                            <strong>Projects</strong>
                        </a>
                    </Link>
                    
                </div>

                <div className="nav-element">
                    <Link to="tech" spy={true} smooth={true} offset={-300} duration={500}>
                        <a href="#">
                            <strong>Technologies</strong>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;