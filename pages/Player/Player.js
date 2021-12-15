import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'
import styles from '../../Styles/globalStyle'

export default function Player() {
    const router = useRouter()
    console.log(router.query.id_cossy)
    const [joueur, getOneJoueurs] = useState([]);
    const [results, getJoueurResults] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        console.log('DATA')
        getOnePlayer(router.query.id_cossy)
        getJoueurResult(router.query.id_cossy)
    }, [router.isReady])

    function getOnePlayer(id) {
        console.log("id : ", id)
        fetch('http://localhost:3001/getonejoueur/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                console.log("data1 : ", data)
                getOneJoueurs(data);
            });
    }

    function getJoueurResult(id) {
        console.log("id : ", id)
        fetch('http://localhost:3001/getjoueurresultat/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                console.log("data1 : ", data)
                getJoueurResults(data);
            });
    }

    return (
        <div style={{
            minHeight: "100vh", overflow: "hidden", backgroundColor: "#22171c", backgroundImage: "url(" + "/pattern.png" + ")", width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "30%",
            backgroundPosition: "right top",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Arbo />
                <div style={{ width: "100%", marginLeft: 30 }}>
                    <Header />
                    <div style={{ ...styles.bordure_g, borderRadius: "30px", display: "flex", flexDirection: "column", marginTop: 10, marginLeft: 10, marginRight: 30 }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: 30, marginLeft: 30, marginTop: 30 }}>
                            {results.photo_joueur != null ? <img src={joueur.photo_joueur}
                                style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />
                                : <img src={"./../Vagabond.jpeg"}
                                    style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />}
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'space-around' }}>
                                <div>
                                    <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, marginBottom: 0, color: "#efefef" }}>
                                        {joueur.prenom_joueur + " " + joueur.nom_joueur}
                                    </div>
                                    <div style={{ ...styles.titre_metro,fontSize: 23, textAlign: "left", marginTop: 0, marginBottom: 0, color: "#efefef" }}>
                                        {joueur.id_cossy}
                                    </div>
                                </div>
                                <div>
                                    {joueur.performance != 1 ?
                                        <div style={{ ...styles.titre_metro,fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Performance saison actuel : {joueur.performance}eme
                                        </div> :
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Performance saison actuel : {joueur.performance}er
                                        </div>
                                    }

                                    {joueur.regulariter != 1 ?
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Regulariter saison actuel : {joueur.regulariter}eme
                                        </div> :
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Regulariter saison actuel : {joueur.regulariter}er
                                        </div>
                                    }
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'space-around' }}>
                                <div>
                                    {joueur.performance != 1 ?
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Performance global : {joueur.performance}eme
                                        </div> :
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Performance global : {joueur.performance}er
                                        </div>
                                    }
                                    {joueur.regulariter != 1 ?
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Regulariter global : {joueur.regulariter}eme
                                        </div> :
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Regulariter global : {joueur.regulariter}er
                                        </div>
                                    }
                                </div>
                                <div>
                                    {joueur.performance != 1 ?
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Performance saison precedante : {joueur.performance}eme
                                        </div> :
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Performance saison precedante : {joueur.performance}er
                                        </div>
                                    }
                                    {joueur.regulariter != 1 ?
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Regulariter saison precedante : {joueur.regulariter}eme
                                        </div> :
                                        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Regulariter saison precedante : {joueur.regulariter}er
                                        </div>
                                    }
                                    <div style={{...styles.titre_metro, fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                        {joueur.rank}
                                    </div>
                                </div>
                            </div>
                            {results.logo_team != null ? <img src={joueur.logo_team}
                                style={{ width: 150, height: 200, marginTop: 10,...styles.bordure_g }} />
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
                            <div style={{...styles.titre_metro, fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%",  }}>
                                Date event :
                        </div>

                            <div style={{...styles.titre_metro, fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "10%", }}>
                                Place :
                        </div>
                            <div style={{...styles.titre_metro, fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "25%",  }}>
                                Event :
                        </div>
                            <div style={{...styles.titre_metro, fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%",}}>
                                Deck :
                        </div>
                            <div style={{...styles.titre_metro, fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "10%", }}>
                                Rank event :
                        </div>
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
                            paddingBottom: "1em"
                        }}>
                            {results.map((result, index) => (
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                    marginTop: 15
                                }}>
                                    <div style={{...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "15%" }}>
                                        {(new Date(result.date_event)).getDate()} /  {(new Date(result.date_event)).getMonth() + 1}
                                    </div>
                                    <div style={{...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea",  fontSize: 25, width: "10%" }}>
                                        {result.place}
                                    </div>
                                    <div style={{ ...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%" }}>
                                        <Link key={index} href={{
                                            pathname: "/Event/Events",
                                            query: { event_id: result.id_event },
                                        }}>
                                            <a>
                                                {result.id_event}
                                            </a>
                                        </Link>
                                    </div>
                                    <div style={{...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea",  fontSize: 25, width: "15%" }}>
                                        {result.deck_joueur}
                                    </div>
                                    <div style={{...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea",  fontSize: 25, width: "10%" }}>
                                        {result.rating_event}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}