
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from '../Styles/globalStyle'
import Arbo from './Arbo';
import Footer from './Footer';
import LogoStyle from './StyledComponent/LogoStyle'
import MenuStyle from './StyledComponent/MenuStyle'
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const isMobile = true

export default function Logo(props) {
    const [visible, setVisible] = useState(false);
    return (
        <div  onClick={() => { visible == true ? setVisible(false) : null}}
         style={{
            minHeight: "100vh",
            overflow: "hidden",
            backgroundColor: "#22171c",
            backgroundImage: "url(" + "/pattern.png" + ")",
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "30%",
            backgroundPosition: "right top",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <div>
                    <MenuStyle src={'/menu-white.png'}
                        onClick={() => setVisible(!visible)} />
                    {visible ?
                        <Arbo></Arbo>
                        : null}
                </div>
                <div style={{ width: '100%', marginLeft: 20 , marginRight : 20}}>
                    <Link href="/">
                        <a>
                            <LogoStyle src={'/Yu-gi-rank-logo.png'}/>
                        </a>
                    </Link>
                    {props.children}
                </div>

            </div>


        </div>
    )
}