import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../Styles/globalStyle'
import CellTab from '../../components/StyledComponent/CellTab'
import urlSite from "./../../configServ"
import returnDate from "./../../reserveFonction/returnDate"
import PointTeam from '../../reserveFonction/PointTeam';
import RankTeam from '../../reserveFonction/RankTeam';


export default function Team() {
    const router = useRouter()
    const [players, getAllPlayerTeams] = useState([]);
    const [team, getOneTeams] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        getAllPlayerTeam(router.query.id_team);
        getOneTeam(router.query.id_team);
    }, [router.isReady]);

    function getOneTeam(id) {
        fetch(urlSite + 'getoneteam/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getOneTeams(data);
            });
    }
    function getAllPlayerTeam(id) {
        fetch(urlSite + 'getallplayerteam/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getAllPlayerTeams(data);
            });
    }

    return (
        <div style={{ ...styles.bordure_g, borderRadius: "30px", display: "flex", flexDirection: "column", marginTop: 10, marginLeft: 10, marginRight: 30, marginBottom: 20 }}>
            <div style={{ display: "flex", flexDirection: "row", marginRight: 30, marginLeft: 30, marginTop: 30 }}>
                <img src={team.logo_team} style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g, }} />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginRight: 30, marginLeft: 30, marginTop: 30, width: "100%" }}>
                    <div style={{ fontSize: 23, textAlign: "center", marginTop: 0, marginBottom: 0, color: "#efefef" }}>
                        {team.nom_team}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: 'space-around' }}>
                        <div>

                            <div style={{ fontSize: 23, textAlign: "left", color: "#efefef" }}>
                                Date de création : {returnDate(team.crea_team)}
                            </div>
                            <div style={{ fontSize: 23, textAlign: "left", color: "#efefef" }}>
                                Rank global : {RankTeam(router.query.id_team)}
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize: 23, textAlign: "left", color: "#efefef" }}>
                                Score total : {PointTeam(router.query.id_team)}
                            </div>
                            <div style={{ fontSize: 23, textAlign: "left", color: "#efefef" }}>
                                Nombre de membre : {players.length}
                            </div>
                            <div style={{ fontSize: 23, textAlign: "left", color: "#efefef" }}>
                                derniere mise a jour des information : {returnDate(team.last_update_team)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                ...styles.tab_medium_element,
                marginTop: 20,
                marginRight: 20,
            }}>
                <CellTab head size={"10%"}>Photo :</CellTab>
                <CellTab head size={"30%"}>Joueur :</CellTab>
                <CellTab head size={"15%"}>Point Global :</CellTab>
                <CellTab head size={"15%"}>Point Saison :</CellTab>
            </div>
            <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20, overflow: "hidden", marginTop: 20, marginLeft: 20, marginBottom: 20 }}>
                {players.map((player, index) => (
                    <Link key={index} href={{
                        pathname: "/Player/Player",
                        query: { id_cossy: player.id_cossy }
                    }} >
                        <a style={{ color: "inherit", textDecoration: "inherit" }}>
                            <div style={{ ...styles.tab_medium_element, backgroundColor: team.couleur_team }}>
                                {player.photo_joueur != null ? <img src={player.photo_joueur}
                                    style={{ width: 100, height: 150, marginTop: 10, ...styles.bordure_g }} />
                                    : <img src={"./../Vagabond.jpeg"}
                                        style={{ width: 100, height: 150, marginTop: 10, ...styles.bordure_g }} />}

                                <CellTab size={"30%"}>{player.prenom_joueur + ' ' + player.nom_joueur}</CellTab>
                                <CellTab size={"15%"}>{player.point_joueur}</CellTab>
                                <CellTab size={"15%"}>{player.point_joueur}</CellTab>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}