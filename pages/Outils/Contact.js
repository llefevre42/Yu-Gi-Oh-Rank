
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../Styles/globalStyle'
import urlSite from "./../../configServ"


export default function Contact(){

    return(
        <div>
             <div style={{ fontSize: 40, textAlign: "center", color: "#efefef", ...styles.titre_metro }}>
                Contact
            </div>
        </div>
    )
}