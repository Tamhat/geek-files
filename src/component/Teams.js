import React from 'react'
import "../styles/teams.css"
// images
import blue from "../assets/blue.jpeg";
import pink from "../assets/pink.jpeg";
import big from "../assets/big.png";
import yellow from "../assets/yellow.jpeg";
import army from "../assets/army.jpeg";
import chain from "../assets/chain.jpg";

const Teams = () => {
    return (
        <>
            <div className="team">
                <h1>Team</h1>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md">
                            <img src={blue} alt="blue" srcset="" className='team-pics' />
                             <p className="name">
                             Creative director<br/>
                             <span className='spans'>NASEM</span>
                             </p>
                        </div>
                        <div className="col-md">
                            <img src={yellow} alt="blue" srcset="" className='team-pics' />
                            <p className="name">
                            Product Designer<br/>
                            <span className='spans'>ASIMJAFRI</span>
                             </p>
                        </div>
                        <div className="col-md">
                            <img src={pink} alt="blue" srcset="" className='team-pics' />
                            <p className="name">
                            S.Front-end Developer<br/>
                             <span className='spans'>RAHMAT ULLAH</span>
                             </p>
                        </div>
                        <div className="col-md">
                            <img src={big} alt="blue" srcset="" className='team-pics' />
                            <p className="name">
                            S.Back end developer<br/>
                            <span className='spans'>Blockchainguy.net</span>
                             </p>
                        </div>
                        <div className="col-md">
                            <img src={army} alt="blue" srcset="" className='team-pics' />
                            <p className="name">
                            Discord developer<br/>
                            <span className='spans'>Qasir</span>
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams