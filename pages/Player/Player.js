import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../Styles/globalStyle'
import HeadTab from './../../components/HeadTab'
import CellTab from './../../components/CellTab'

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
        fetch('http://localhost:3001/getonejoueur/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                getOneJoueurs(data);
            });
    }

    function getJoueurResult(id) {
        fetch('http://localhost:3001/getjoueurresultat/' + id, {
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
                {results.photo_joueur != null && results.photo_joueur != '' && results.photo_joueur != 'undefined'   ? <img src={joueur.photo_joueur}
                    style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />
                    : <img src={"./../Vagabond.jpeg"}
                        style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />}
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
                display: "flex",
                flexDirection: "row",
                marginTop: 20,
                marginLeft: 10,
                marginRight: 10,
                justifyContent: "space-around",
                alignItems: "center",
                minHeight: 50,
                alignItems: "center"
            }}>
                <HeadTab text={"Date :"} size={"15%"}></HeadTab>
                <HeadTab text={"Place :"} size={"10%"}></HeadTab>
                <HeadTab text={"Event :"} size={"25%"}></HeadTab>
                <HeadTab text={"Deck :"} size={"15%"}></HeadTab>
                <HeadTab text={"Rank :"} size={"10%"}></HeadTab>
                <HeadTab text={"Point :"} size={"15%"}></HeadTab>

            </div>
            <div style={{
                border: "2px solid",
                borderColor: '#0d8d40',
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
                borderRadius: "30px",
                marginTop: 20,
                marginBottom: 10,
                overflow: 'hidden'
            }}>
                {results.map((result, index) => (
                    <div key={index} style={{
                        ...styles.tab_medium_element,
                        backgroundColor: (index % 2 ? "black" : null)
                    }}>
                        <CellTab text={(new Date(result.date_event)).getDate() + '/' + ((new Date(result.date_event)).getMonth() + 1)} size={"15%"}></CellTab>
                        <CellTab text={result.place} size={"10%"}></CellTab>
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
                        <CellTab text={result.deck_joueur} size={"15%"}></CellTab>
                        <CellTab text={result.rating_event} size={"10%"}></CellTab>
                        <CellTab text={result.point_resultat} size={"15%"}></CellTab>
                    </div>

                ))}
            </div>
        </div>
    )
}