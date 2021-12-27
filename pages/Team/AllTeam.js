import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from '../../Styles/globalStyle'
import HeadTab from './../../components/HeadTab'
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
    /* lastEvent.map((Events, index) => {
         const date = new Date(Events.date_event)
         lastEvent[index].date_event = (date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear())
     })*/
    return (
        <div>
            <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Ariq", color: "#0d8d40", marginTop: 30, marginBottom: 30 }}>
                Liste des Equipe en France :
                </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                marginLeft: 10,
                marginRight: 20,
                marginBottom: 20,
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <HeadTab text={"Rank :"} size={"10%"}></HeadTab>
                <HeadTab text={"Team :"} size={"30%"}></HeadTab>
                <HeadTab text={"Point :"} size={"15%"}></HeadTab>
                <HeadTab text={"Logo :"} size={"8%"}></HeadTab>

            </div>
            <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20, overflow: "hidden" }}>
                {teams.map((team, index) => (
                    <Link key={index} href={{
                        pathname: "/Team/Team",
                        query: { id_team: team.id_team }
                    }} >
                        <a style={{ color: "inherit", textDecoration: "inherit" }}>
                            <div style={{...styles.tab_medium_element, backgroundColor: team.couleur_team}}>
                                <CellTab text={index + 1} size={"10%"}></CellTab>
                                <CellTab text={team.nom_team} size={"30%"}></CellTab>
                                <CellTab text={team.total_point_team} size={"15%"}></CellTab>

                                <img src={team.logo_team} style={{ width: 100, height: 100 }}></img>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}