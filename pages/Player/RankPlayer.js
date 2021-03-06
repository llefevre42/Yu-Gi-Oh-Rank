import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../Styles/globalStyle'
import CellTab from '../../components/StyledComponent/CellTab'
import urlSite from "./../../configServ"
import TitlePro from '../../components/StyledComponent/TitlePro'

export default function RankPlayer() {
    const router = useRouter()
    const [players, getAllPlayer] = useState([]);
    const [teams, getAllTeam] = useState([]);
    useEffect(() => {
        getAllPlayers();
        getAllTeams()
    }, []);
    function getAllPlayers() {
        fetch(urlSite + 'getallplayer')
            .then(response => response.json())
            .then(data => {
                getAllPlayer(data.sort(function (a, b) {return b.point_joueur - a.point_joueur}))
            });
    }

    function getAllTeams() {
        fetch(urlSite + 'getallteam')
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
            <TitlePro>
                Rank pour la saison actuel
                    </TitlePro>
            <div style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                marginLeft: 10,
                marginRight: 30,
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                   <CellTab head size={"15%"}>Rank :</CellTab>
                   <CellTab head size={"30%"}>Joueur :</CellTab>
                   <CellTab head size={"30%"}>Team :</CellTab>
                   <CellTab head size={"15%"}>Point :</CellTab>
               
            </div>
            <div style={{
                ...styles.bordure_g,
                borderRadius: "30px",
                display: "flex",
                flexDirection: "column",
                marginTop: 10,
                marginLeft: 10,
                marginRight: 30,
                marginBottom: 20,
                overflow: 'hidden',
            }}>
                {players.map((player, index) => (
                    <Link key={index}  href={{
                        pathname: "/Player/Player",
                        query: { id_cossy: player.id_cossy },
                    }}>
                        <div style={{ ...styles.tab_medium_element, backgroundColor: (index % 2 ? "black" : null) }}>
                            <CellTab size={"15%"}>{index + 1} </CellTab>
                            <CellTab size={"30%"}>{player.nom_joueur + ' ' + player.prenom_joueur}</CellTab>
                            <CellTab size={"30%"}>{teamName(player.id_team )}</CellTab>
                            <CellTab size={"15%"}>{player.point_joueur}</CellTab>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}