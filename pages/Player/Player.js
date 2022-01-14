import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../Styles/globalStyle'
import CellTab from './../../components/StyledComponent/CellTab'
import urlSite from "./../../configServ"


export default function Player() {
    const router = useRouter()
    const [joueur, getOneJoueurs] = useState([]);
    const [results, getJoueurResults] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        getOnePlayer(router.query.id_cossy)
        getJoueurResult(router.query.id_cossy)
    }, [router.isReady])

    function getOnePlayer(id) {
        fetch(urlSite + 'getonejoueur/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                getOneJoueurs(data);
            });
    }

    function getJoueurResult(id) {
        fetch(urlSite + 'getjoueurresultat/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getJoueurResults(data);
            });
    }
   
    return (
        <div style={{
            ...styles.bordure_g,
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            marginLeft: 10,
            marginRight: 30
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 30,
                marginLeft: 30,
                marginTop: 30
            }}>
                {(joueur.photo_joueur != null && joueur.photo_joueur != '' && joueur.photo_joueur != 'undefined') ?
                    <img src={joueur.photo_joueur} style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />
                    : <img src={"./../Vagabond.jpeg"} style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: 'space-around' }}>
                    <div>
                        <div style={{ ...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, marginBottom: 0, color: "#efefef", textAlign: "center" }}>
                            {joueur.prenom_joueur + " " + joueur.nom_joueur}
                        </div>
                        <div style={{ ...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, marginBottom: 0, color: "#efefef", textAlign: "center" }}>
                            {joueur.id_cossy}
                        </div>
                    </div>
                    <div style={{ ...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, marginBottom: 0, color: "#efefef", textAlign: "center" }}>
                        Point saison : {joueur.point_joueur}
                    </div>
                    <div style={{ ...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, marginBottom: 0, color: "#efefef", textAlign: "center" }}>
                        Point global : {joueur.point_joueur}
                    </div>
                    <div>

                    </div>
                </div>

                {results.logo_team != null ?
                    <Link href={{
                        pathname: "/Team/Team",
                        query: { id_team: results.id_team },
                    }}>
                        <img src={joueur.logo_team} style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />
                    </Link>
                    : <img src={"./../Vagabond.jpeg"}
                        style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />}

            </div>
            <div style={{
                ...styles.tab_medium_element,
                marginTop: 20,
                marginLeft: 10,
                marginRight: 10,
            }}>
                <CellTab head size={"15%"}>Date :</CellTab>
                <CellTab head size={"10%"}>Place :</CellTab>
                <CellTab head size={"25%"}>Event :</CellTab>
                <CellTab head size={"15%"}>Deck :</CellTab>
                <CellTab head size={"10%"}>Rank :</CellTab>
                <CellTab head size={"15%"}>Point :</CellTab>

            </div>
            <div style={{
                border: "2px solid",
                borderColor: '#0d8d40',
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
                borderRadius: "30px",
                marginBottom: 10,
                overflow: 'hidden'
            }}>
                {results.map((result, index) => (
                    <div key={index} style={{
                        ...styles.tab_medium_element,
                        backgroundColor: (index % 2 ? "black" : null)
                    }}>
                        <CellTab size={"15%"}>{(new Date(result.date_event)).getDate() + '/' + ((new Date(result.date_event)).getMonth() + 1)}</CellTab>
                        <CellTab size={"10%"}>{result.place}</CellTab>
                        <div style={{ ...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%" }}>
                            <Link key={index} href={{
                                pathname: "/Event/Events",
                                query: { event_id: result.id_event },
                            }}>
                                <a>
                                    {result.nom_event}
                                </a>
                            </Link>
                        </div>
                        <CellTab size={"15%"}>{result.deck_joueur}</CellTab>
                        <CellTab size={"10%"}>{result.rating_event}</CellTab>
                        <CellTab size={"15%"}>{result.point_resultat}</CellTab>
                    </div>

                ))}
            </div>
        </div>
    )
}