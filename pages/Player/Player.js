import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../Styles/globalStyle'
import CellTab from '../../components/StyledComponent/CellTab'
import PlayerStyle from '../../components/StyledComponent/PlayerStyle'
import urlSite from "./../../configServ"
import RankJoueur from '../../reserveFonction/RankJoueur';


export default function Player() {
    const router = useRouter()
    const [joueur, getOneJoueurs] = useState([]);
    const [results, getJoueurResults] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        getOnePlayer(router.query.id_cossy)
        getJoueurResult(router.query.id_cossy)
    }, [router.isReady]);

    function getOnePlayer(id) {
        fetch(urlSite + 'getonejoueur/' + id, {
        })
            .then(response => response.json())
            .then(data => {
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
        <PlayerStyle style={{
            ...styles.bordure_g,
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10
        }}>
            <div className="MobileContainer">
                {(joueur.photo_joueur != null && joueur.photo_joueur != '' && joueur.photo_joueur != 'undefined') ?
                    <img src={joueur.photo_joueur} className="Photo" />
                    : <img src={"./../Vagabond.jpeg"} className="Photo" />}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: 'space-around' }}>
                    <div>
                        <div style={{ ...styles.titre_metro, fontSize: 23, textAlign: "center" }}>
                            {joueur.prenom_joueur + " " + joueur.nom_joueur}
                        </div>
                        <div style={{ ...styles.titre_metro, fontSize: 23,  textAlign: "center" }}>
                            {joueur.id_cossy}
                        </div>
                    </div>
                    <div style={{ ...styles.titre_metro, fontSize: 23,textAlign: "center" }}>
                        Point saison : {joueur.point_joueur}
                    </div>
                    <div style={{ ...styles.titre_metro, fontSize: 23,textAlign: "center" }}>
                        Rank saison : {RankJoueur(router.query.id_cossy)}
                    </div>
                    <div style={{ ...styles.titre_metro, fontSize: 23, textAlign: "center" }}>
                        Point global : {joueur.point_joueur}
                    </div>
                    <div style={{ ...styles.titre_metro, fontSize: 23,textAlign: "center" }}>
                        Rank global : {RankJoueur(router.query.id_cossy)}
                    </div>
                    <div>

                    </div>
                </div>

                {results.logo_team != null ?
                    <Link href={{
                        pathname: "/Team/Team",
                        query: { id_team: results.id_team },
                    }}>
                        <img src={joueur.logo_team} className="Photo"/>
                    </Link>
                    : <img src={"./../Vagabond.jpeg"}className="Photo"/>}

            </div>
            <div style={{
                ...styles.tab_medium_element,
                marginLeft: 10,
                marginRight: 10,
            }}>
                <CellTab head size={"15%"}>Date :</CellTab>
                <CellTab head size={"10%"}>Place :</CellTab>
                <CellTab head size={"25%"}>Event :</CellTab>
                <CellTab head size={"25%"}>Deck :</CellTab>
                <CellTab head size={"10%"}>Rank :</CellTab>
                <CellTab head size={"15%"}>Point :</CellTab>

            </div>
            <div style={{
                border: "2px solid",
                borderColor: '#0d8d40',
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: "30px",
                marginBottom: 10,
                overflow: 'hidden'
            }}>
                {results.map((result, index) => (
                    <Link key={index} href={{
                        pathname: "/Event/Events",
                        query: { event_id: result.id_event },
                    }}>
                        <a>
                            <div style={{
                                ...styles.tab_medium_element,
                                backgroundColor: (index % 2 ? "black" : null)
                            }}>
                                <CellTab size={"15%"}>{(new Date(result.date_event)).getDate() + '/' + ((new Date(result.date_event)).getMonth() + 1)}</CellTab>
                                <CellTab size={"10%"}>{result.place}</CellTab>
                                <CellTab size={"25%"}>{result.nom_event}</CellTab>
                                <CellTab size={"25%"}>{result.deck_joueur}</CellTab>
                                <CellTab size={"10%"}>{result.rating_event}</CellTab>
                                <CellTab size={"15%"}>{result.point_resultat}</CellTab>
                            </div>
                        </a>
                    </Link>

                ))}
            </div>
        </PlayerStyle>
    )
}