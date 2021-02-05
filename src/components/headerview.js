import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Headerview() {
    return (
        <div>
            <div className="jumbotron">
                <div className="innerjumbotron">
                    <h1 className="display-4"><strong>Konstantinos Houtas</strong></h1>

                    <p>
                        Full Stack Engineer with passion!
                    </p>


                    <div className="row mt-4">
                        <div className="col">
                            <div className="header-icon">
                                <a href="https://www.linkedin.com/in/khoutas">
                                    <FontAwesomeIcon icon={faLinkedin} size="4x" />
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="header-icon">
                                <a href="https://www.github.com/Reyder95">
                                    <FontAwesomeIcon icon={faGithub} size="4x" />
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="header-icon">
                                <a href="http://www.localhost:3000/resume.pdf">
                                    <FontAwesomeIcon icon={faFileAlt} size="4x" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Headerview;