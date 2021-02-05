function Technologies() {
    return(
        <div className="text-center technologies">
            <h1><strong>Technologies</strong></h1>

            <p>
                Throughout the years of building my own projects, I have worked with a variety of technologies. <br /> Here are the ones I am most comfortable with!
            </p>

            <div className="tech">
                <img src="http://localhost:3000/images/html.png" width="100px"/>
                <img src="http://localhost:3000/images/css.png" width="100px"/>
                <img src="http://localhost:3000/images/javascript.png" width="100px"/>
                <img src="http://localhost:3000/images/react.png" width="150px"/>
                <br />
                <img style={{marginLeft: '20px', marginRight: '20px'}} src="http://localhost:3000/images/node.png" width="150px"/>
                <img src="http://localhost:3000/images/express.png" width="100px"/>
                <img src="http://localhost:3000/images/postgresql.png" width="100px"/>
                <img src="http://localhost:3000/images/python.png" width="200px"/>
            </div>
        </div>
    )
}

export default Technologies;