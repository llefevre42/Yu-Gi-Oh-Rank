import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../Styles/globalStyle'
import HeadTab from './../../components/HeadTab'
import CellTab from './../../components/CellTab'



export default function RankPlayer() {
    const router = useRouter()
    const [players, getAllPlayer] = useState([]);
    const [teams, getAllTeam] = useState([]);
    useEffect(() => {
        getAllPlayers();
        getAllTeams()
    }, []);
    function getAllPlayers() {
        fetch('http://localhost:3001/getallplayer')
            .then(response => response.json())
            .then(data => {
                getAllPlayer(data.sort(function (a, b) {return b.point_joueur - a.point_joueur}))
            });
    }

    function getAllTeams() {
        fetch('http://localhost:3001/getallteam')
            .then(response => response.json())
            .then(data => {
                getAllTeam(data);
            });
    }

   function teamName(team){
    let tmp = teams.filter(function(data){ return data.id_team == team})
    if(tmp[0])
        return(tmp[0].nom_team)
    return('')
}
    return (
        <div>
            <div style={{ fontSize: 40, textAlign: "center", color: "#efefef" }}>
                Rank pour la saison actuel
                    </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                marginLeft: 10,
                marginRight: 30,
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <HeadTab text={"Rank :"} size={"15%"}></HeadTab>
                <HeadTab text={"Joueur :"} size={"30%"}></HeadTab>
                <HeadTab text={"Team :"} size={"30%"}></HeadTab>
                <HeadTab text={"Point :"} size={"15%"}></HeadTab>
            </div>
            <div style={{
                ...styles.bordure_g,
                borderRadius: "30px",
                display: "flex",
                flexDirection: "column",
                marginTop: 10,
                marginLeft: 10,
                marginRight: 30,
                overflow: 'hidden',
            }}>
                {players.map((player, index) => (
                    <Link key={index} href="/Event/EventPlayer">
                        <div style={{ ...styles.tab_medium_element, backgroundColor: (index % 2 ? "black" : null) }}>
                            <CellTab text={index + 1} size={"15%"}></CellTab>
                            <CellTab text={player.nom_joueur + ' ' + player.prenom_joueur} size={"30%"}></CellTab>
                            <CellTab text={teamName(player.id_team )} size={"30%"}></CellTab>
                            <CellTab text={player.point_joueur} size={"15%"}></CellTab>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}