
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from '../Styles/globalStyle'
import Arbo from './Arbo';


export default function Logo(props) {
    const [visible, setVisible] = useState(false);
    return (
        <div style={{
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
                    <img src={'/menu.png'} style={{ position:'absolute', width: 50, height: 50, marginTop: 10, marginLeft: 10 , ...styles.bordure_g, borderRadius: "20px" }} onClick={() => setVisible(!visible)} />
                    {visible ?
                        <Arbo></Arbo>
                        : null}
                </div>
                <div style={{width: '100%',  marginLeft: 20}}>
                <Link href="/">
                    <a>
                        <img src={'/logo.png'} style={{ marginLeft: "30vw", width: 240, height: 180, marginTop: 10, marginBottom: 20 }} />
                    </a>
                </Link>
                {props.children}
                </div>

            </div>

                    
        </div>
    )
}