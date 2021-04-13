import React from 'react'
import Nav from './navbarBeforeLogin'
//import navbarBeforeLogin from './navbarBeforeLogin';
import '../App.css';

function Home() {
    return (
        <div>
        
            <Nav></Nav>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="bankintro">
                    <br></br>
                    <h1>BANKING APPLICATION!!</h1>
                    <br></br>
                    <p>
                        A bank is a financial institution that accepts deposits from the public and creates a demand deposit
                        while simultaneously making loans.Lending activities can be directly performed by the bank or indirectly
                        through capital markets.Because banks play an important role in financial stability and the economy
                        a country, most jurisdictions exercise a high degree of regulation over banks. Most countries have
                        institutionalized a system known as fractional reserve banking, under which banks hold liquid assets
                        equal to only a portion of their current liabilities. In addition to other regulations intended to
                        ensure liquidity, banks are generally subject to minimum capital requirements based on an international 
                        set of capital standards, the Basel Accords 

                        
                    </p>

                </div>

                {/* </div> */}
            </div>


        
    )
}

export default Home;
