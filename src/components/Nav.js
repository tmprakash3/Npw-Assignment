import { BrowserRouter, Link } from "react-router-dom";
import hamburger from './square.svg';
import { useState, useEffect } from 'react';

const Nav = () => {
    const [showdisplayMenu, setDisplayMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 620;

    useEffect(() => {
        console.log("width", width);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width > breakPoint) setDisplayMenu(true);
        else setDisplayMenu(false);

    }, [width])

    const handleNavigation = () => {
        setDisplayMenu(!showdisplayMenu);
        console.log(showdisplayMenu, "skjagbkldga")
    }
    return (
        <nav className="global-nav">
            <button className="hamburger-icon" onClick={handleNavigation}>
                <img src={hamburger} width="36" height="36" />
            </button>
            {showdisplayMenu ?
                <>  <div className="left-nav " >
                    <ul>
                        <li>
                            <a href="/products/">Products</a>
                        </li>
                        <li>
                            <a href="/brands/">Brands</a>
                        </li>
                        <li>
                            <a href="/deals/">Deals</a>
                        </li>
                        <li>
                            <a href="/services/">Services</a>
                        </li>
                    </ul>
                </div>
                    <div className="right-nav">
                        <ul>
                            <li>
                                <a href="/account/">Account</a>
                            </li>
                            <li>
                                <a href="/recently-viewed/">Recently Viewed</a>
                            </li>
                            <li>
                                <div className="order-status">
                                    <Link to="/order">Order Status</Link>
                                    {/* <div className="order-overlay">
                                <div className="overlay-container">
                                    <ul>
                                        <li>
                                            <a href="">Order Summary</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                                </div>
                            </li>
                            <li>
                                <a href="/favorites/">Saved Items</a>
                            </li>
                        </ul>
                    </div> </>
                : null}
        </nav>

    );
}

export default Nav;