import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "../Styles/FooterStyles";
import packageJson from '/package.json';

function Footer() {
    return (
        <div style={{
            backgroundColor: "#22171c",
            bottom: 0,
            width: '100%',
        }}>
            <div style={{ borderBottom: "3px solid", borderBottomColor: "#0d8d40", width: "90%", margin: 'auto' }}></div>
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around", }}>
                <FooterLink href="#">Mention legal</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
                <FooterLink href="#">{packageJson.version}</FooterLink>
            </div>
        </div>

    );
};
export default Footer;