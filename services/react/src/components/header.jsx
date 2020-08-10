import React from 'react'
// import { Redirect } from 'react-router-dom'

const Header = () => {

    return(
        <React.Fragment>

            <header class="masthead mb-auto">
                <div class="inner">
                    <h3 class="masthead-brand">Duane Scarlett</h3>
                    {/* <code class="leftJustifyDiv">Fullstack Javascript Blockchain Developer</code> */}
                    <nav class="nav nav-masthead justify-content-center">
                        <a class="nav-link active" href="#">Home</a>
                        <a class="nav-link" href="#">Projects</a>
                        <a class="nav-link" href="#">Contact</a>
                    </nav>
                </div>
                
            </header>

        </React.Fragment>
    )
    
}

export default Header