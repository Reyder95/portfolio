import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHammer, faDatabase, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

function Aboutme() {
    return (
        <div className="text-center about-me">
            <h1 className="text-center"><strong>About Me</strong></h1>

            <div className="row">
                <div className="col-sm mt-3">
                    <FontAwesomeIcon icon={faGraduationCap} size="4x"/> <br />
                    <p className="mt-3">
                        Graduated College of Staten Island with a Bachelor's in Computer Science.
                    </p>
                    
                </div>

                <div className="col-sm mt-3">
                    <FontAwesomeIcon icon={faHammer} size="4x"/> <br />
                    <p className="mt-3">
                        Built some awesome full stack applications using a variety of in-demand technologies.
                    </p>

                </div>

                <div className="col-sm mt-3">
                    <FontAwesomeIcon icon={faDatabase} size="4x"/> <br />
                    <p className="mt-3">
                        Loves relational database design! Seeing all the tables interconnect is incredible!
                    </p>
                </div>

                <div className="col-sm mt-3">
                    <FontAwesomeIcon icon={faPizzaSlice} size="4x"/> <br />
                    <p className="mt-3">
                        Pizza is the greatest food.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Aboutme;