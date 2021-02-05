import { Element } from 'react-scroll';

function Technologies() {
    return(
        <div id="tech" className="text-center technologies">
            <Element name="tech" className="element">
                <h1><strong>Technologies</strong></h1>

                <p>
                    Throughout the years of building my own projects, I have worked with a variety of technologies. <br /> Here are the ones I am most comfortable with!
                </p>

                <div className="tech">
                    <img src="/images/html.png" width="100px"/>
                    <img src="/images/css.png" width="100px"/>
                    <img src="/images/javascript.png" width="100px"/>
                    <img src="/images/react.png" width="150px"/>
                    <br />
                    <img style={{marginLeft: '20px', marginRight: '20px'}} src="/images/node.png" width="150px"/>
                    <img src="/images/express.png" width="100px"/>
                    <img src="/images/postgresql.png" width="100px"/>
                    <img src="/images/python.png" width="200px"/>
                </div>
            </Element>
            
        </div>
    )
}

export default Technologies;