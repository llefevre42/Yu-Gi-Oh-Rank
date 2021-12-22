import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import BackGround from '../../components/BackGround';
import styles from '../../Styles/globalStyle'
import HeadTab from './../../components/HeadTab'
import CellTab from './../../components/CellTab'

export default function Team() {
    const router = useRouter()
    const [team, getOneTeams] = useState([]);
    const [players, getAllPlayerTeams] = useState([]);
    useEffect(() => {
        if (!router.isReady) return;
        getOneTeam(router.query.id_team);
        getAllPlayerTeam(router.query.id_team);
    }, []);
    function getOneTeam(id) {
        fetch('http://localhost:3001/getoneteam/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getOneTeams(data);
            });
    }
    function getAllPlayerTeam(id) {
        fetch('http://localhost:3001/getallplayerteam/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getAllPlayerTeams(data);
            });
    }


    return (
        <BackGround>
            <div style={{ ...styles.bordure_g, borderRadius: "30px", display: "flex", flexDirection: "column", marginTop: 10, marginLeft: 10, marginRight: 30, marginBottom: 20 }}>
                <div style={{ display: "flex", flexDirection: "row", marginRight: 30, marginLeft: 30, marginTop: 30 }}>
                    <img src={team.logo_team} style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g, }} />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginRight: 30, marginLeft: 30, marginTop: 30, width: "100%" }}>
                        <div style={{ fontSize: 23, textAlign: "center", marginTop: 0, marginBottom: 0, color: "#efefef" }}>
                            {team.nom_team}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: 'space-around' }}>
                            <div>

                                <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                    Date de création : {team.crea_team}
                                </div>
                                <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                    Rank global : {team.performance}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                    Score total : {team.performance}
                                </div>
                                <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                    Nombre de membre : {players.length}
                                </div>
                                <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                    derniere mise a jour des information : {team.crea_team}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20,
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
                    <HeadTab text={"Photo :"} size={"10%"}></HeadTab>
                    <HeadTab text={"Joueur :"} size={"30%"}></HeadTab>
                    <HeadTab text={"Point Global :"} size={"15%"}></HeadTab>
                    <HeadTab text={"Point Saison :"} size={"15%"}></HeadTab>
                </div>
                <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20, overflow: "hidden", marginTop: 20, marginLeft: 20, marginBottom: 20 }}>
                    {players.map((player, index) => (
                        <Link href={{
                            pathname: "/Player/Player",
                            query: { id_cossy: player.id_cossy }
                        }} >
                            <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                <div style={{ ...styles.tab_medium_element, backgroundColor: team.couleur_team }}>
                                    {player.photo_joueur != null ? <img src={results.photo_joueur}
                                        style={{ width: 100, height: 150, marginTop: 10, ...styles.bordure_g }} />
                                        : <img src={"./../Vagabond.jpeg"}
                                            style={{ width: 100, height: 150, marginTop: 10, ...styles.bordure_g }} />}

                                    <CellTab text={player.prenom_joueur + ' ' + player.nom_joueur} size={"30%"}></CellTab>
                                    <CellTab text={player.point_joueur} size={"15%"}></CellTab>
                                    <CellTab text={"36"} size={"15%"}></CellTab>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </BackGround>
    )
}