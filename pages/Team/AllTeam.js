import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from '../../Styles/globalStyle'
import CellTab from './../../components/CellTab'

export default function AllTeam() {
    const [teams, getAllTeams] = useState([]);
    useEffect(() => {
        getAllTeam();
    }, []);
    function getAllTeam() {
        fetch('http://localhost:3001/getallteam')
            .then(response => response.json())
            .then(data => {
                getAllTeams(data);
            });
    }
    return (
        <div>
            <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Ariq", color: "#0d8d40", marginTop: 30, marginBottom: 30 }}>
                Liste des Equipe en France :
                </div>
            <div style={{
            ...styles.tab_medium_element,
                marginTop: 10,
                marginRight: 20,
                marginBottom: 20,
            }}>
                <CellTab head size={"10%"}>Rank :</CellTab>
                <CellTab head size={"30%"}>Team :</CellTab>
                <CellTab head size={"15%"}>Point :</CellTab>
                <CellTab head size={"8%"}>Logo :</CellTab>
            </div>
            <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20, overflow: "hidden" }}>
                {teams.map((team, index) => (
                    <Link key={index} href={{
                        pathname: "/Team/Team",
                        query: { id_team: team.id_team }
                    }} >
                        <a style={{ color: "inherit", textDecoration: "inherit" }}>
                            <div style={{...styles.tab_medium_element, backgroundColor: team.couleur_team}}>
                                <CellTab size={"10%"}>{index + 1}</CellTab>
                                <CellTab size={"30%"}>{team.nom_team}</CellTab>
                                <CellTab size={"15%"}>{team.total_point_team}</CellTab>
                                <img src={team.logo_team} style={{ width: 100, height: 100 }}></img>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}