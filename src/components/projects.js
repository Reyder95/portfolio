function Projects() {
    return (
        <div className="my-projects">
            <h1 className="text-center"><strong>Projects</strong></h1>

            <div className="row main-row">
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={`/images/sepia.png`}/>

                        <div className="card-body">
                            <h5 className="card-title"><strong>Sepia</strong></h5>
                            <p className="card-text">A project built from the ground up designed for players of the game Sound Voltex to keep track and save their scores for the various levels within the game.</p>
                            
                            <div className="row">
                                <div className="col-3">
                                    <span className="badge bg-primary">ReactJS</span>
                                </div>
                                <div className="col-3">
                                    <span className="badge bg-primary">NodeJS</span>
                                </div>

                                <div className="col-3">
                                    <span className="badge bg-primary">PostgreSQL</span>
                                </div>
                            </div>
                        
                            <div className="row">

                            </div>

                        </div>
                
                    </div>
                </div>

                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="/images/uniproject.PNG"/>

                        <div className="card-body">
                            <h5 className="card-title"><strong>Uni-Assistant</strong></h5>
                            <p className="card-text">A project built in a team of four for CUNY Tech Prep's capstone project. Proof-of-concept application designed for technical CUNY students who are in need of additional support.</p>

                            <div className="row">
                                <div className="col-3">
                                    <span className="badge bg-primary">ReactJS</span>
                                </div>
                                <div className="col-3">
                                    <span className="badge bg-primary">NodeJS</span>
                                </div>

                                <div className="col-3">
                                    <span className="badge bg-primary">PostgreSQL</span>
                                </div>
                            </div>
                            
                        
                        </div>
                
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects;