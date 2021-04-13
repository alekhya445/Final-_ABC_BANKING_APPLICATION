import React from 'react';


function navbarBeforeLogin() {


    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            
        

                <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="my-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"><span className="sr-only">(current)</span></a>
                        </li>
                      
                        <li className="nav-item">
                            <a className="nav-link " href="/login" >Login</a>
                        </li>
                        
                        {/* <li className="nav-item">
                            <a className="nav-link " href="/logout" >Logout</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link " href="/signup" >Signup</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbarBeforeLogin;