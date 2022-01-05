import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from '../../Styles/globalStyle'
import CellTab from './../../components/CellTab'


export default function AllTeam() {
    const [teams, getAllTeams] = useState([]);
    const [players, getAllPlayers] = useState([]);
    useEffect(() => {
        getAllTeam();
        getAllPlayerInTeam();

    }, []);
    function getAllTeam() {
        fetch('http://localhost:3001/getallteam')
            .then(response => response.json())
            .then(data => {
                getAllTeams(data);
            });
    }
    function getAllPlayerInTeam() {
        fetch('http://localhost:3001/getallplayerinteam')
            .then(response => response.json())
            .then(data => {
                getAllPlayers(data);
            });
    }
    console.log(teams)
    teams.map((team, index) => {
        players.map((player, index2) => {
            console.log(team.nom_team, player.prenom_joueur,)
            if (player.id_team == team.id_team) {
                teams[index].total_point_team += player.point_joueur
            }
        })
    })
    return (
        <div>
            <div style={{ fontSize: 30, textAlign: "center", ...styles.titre_pro, marginTop: 30, marginBottom: 30 }}>
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
            <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20, marginBottom: 10, overflow: "hidden" }}>
                {teams.sort(function (a, b) {
                    return b.total_point_team - a.total_point_team;
                }).map((team, index) => (
                    <Link key={index} href={{
                        pathname: "/Team/Team",
                        query: { id_team: team.id_team }
                    }} >
                        <a style={{ color: "inherit", textDecoration: "inherit" }}>
                            <div style={{ ...styles.tab_medium_element, backgroundColor: team.couleur_team }}>
                                <CellTab size={"10%"}>{index + 1}</CellTab>
                                <CellTab size={"30%"}>{team.nom_team}</CellTab>
                                <CellTab size={"15%"}>{team.total_point_team}</CellTab>
                                {team.logo_team != null && team.logo_team != "" && team.logo_team != 'undefined' ?
                                    <img src={team.logo_team} style={{ width: 100, height: 130, marginTop: 10, marginBottom: 10 }} />
                                    : <img src={"./../Vagabond.jpeg"}
                                        style={{ width: 100, height: 130, marginTop: 10, marginBottom: 10 }} />}
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}