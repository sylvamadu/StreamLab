import React from 'react'
const links = ['home','movies','tv shows','video','pages']
function Header() {
    return (
        <header>
            <div className="logo-section">
                <h2><i className="fa fa-play"></i>&nbsp;streamlab</h2>
            </div>
            <div className="right-section">
                <nav>
                    <ul>
                        {
                            links.map((item,index)=>(
                                <li key={index}><a href="#">{item}&nbsp;<i className="fa fa-angle-down"></i></a></li>
                            ))
                        }
                    </ul>
                </nav>
                <i className="fa fa-search"></i>
                <i className="fa fa-user"></i>
                <button className="btn-sub">subscribe</button>
            </div>
    </header>
    )
}

export default Header
