
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'
import styles from '../../Styles/globalStyle'


export default function EventPlayer() {
    const router = useRouter()
    const [results, getOneJoueurResultats] = useState([]);
    const [events, getOneEvents] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        getOneEvent(router.query.event_id);
        getOneJoueurResultat(router.query.event_id, router.query.cossy_id);
    }, [router.isReady])


    function getOneEvent(id) {
        fetch('http://localhost:3001/getoneevent/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getOneEvents(data);
            });
    }

    function getOneJoueurResultat(event, cossy) {
        fetch('http://localhost:3001/getonejoueurresultat/' + event + '/' + cossy, {
        })
            .then(response => response.json())
            .then(data => {
                getOneJoueurResultats(data);
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
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}>
                            <div>
                                <div style={{ display: "flex", flexDirection: "row" }}>

                                    {results.photo_joueur != null ? <img src={results.photo_joueur}
                                        style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />
                                        : <img src={"./../Vagabond.jpeg"}
                                            style={{ width: 150, height: 200, marginTop: 10,...styles.bordure_g }} />}

                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", marginTop: 10, marginLeft: 15 }}>
                                        <div>
                                            <div style={{ ...styles.titre_metro,fontSize: 23, textAlign: "left", color: "#efefef" }}>
                                                <Link href={{
                                                    pathname: "/Player/Player",
                                                    query: { id_cossy: results.id_cossy },
                                                }}>
                                                    <a>{results.prenom_joueur} {results.nom_joueur}</a>
                                                </Link>
                                            </div>
                                            <div style={{...styles.titre_metro, fontSize: 20, textAlign: "left", color: "#efefef" }}>
                                                {results.id_cossy}
                                            </div>
                                            <div style={{...styles.titre_metro, fontSize: 20, textAlign: "left", color: "#efefef" }}>
                                                Deck : {results.deck_joueur}
                                            </div>
                                        </div>
                                        {results.toped > 0 ? 
                                            (results.toped == 1 ?
                                                <div style={{...styles.titre_metro, fontSize: 40, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                    {results.toped}er
                                                </div> :
                                                <div style={{...styles.titre_metro, fontSize: 40, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                    {results.toped}eme
                                                </div>
                                                )
                                        :
                                            (results.place == 1 ?
                                                    <div style={{...styles.titre_metro, fontSize: 40, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                        {results.place}er
                                                    </div> :
                                                    <div style={{...styles.titre_metro, fontSize: 40, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                        {results.place}eme
                                                    </div>
                                            )
                                        }

                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", }}>
                                        <div style={{ ...styles.bordure_g, borderRadius: "30px", marginTop: "auto", marginBottom: "auto", padding: 20 }}>
                                            <Link href={{
                                                pathname: "/Event/Events",
                                                query: { event_id: results.id_event },
                                            }}>
                                                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                                    <div style={{...styles.titre_metro, fontSize: 20, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                        <div>
                                                            {events.nom_event}
                                                        </div>
                                                    </div>
                                                    <div style={{...styles.titre_metro, fontSize: 20, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                        {(new Date(events.date_event)).getDate()} /  {(new Date(events.date_event)).getMonth() + 1}
                                                    </div>
                                                    <div style={{...styles.titre_metro, fontSize: 20, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                        {events.lieu_event}
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <iframe style={{ width: "100%", height: "60%", border: "2px solid", borderColor: '#0d8d40', marginTop: 10 }}
                                    src={results.youtube_link}
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                />
                            </div>
                            <img style={{ width: "50%", height: "60vh", border: "2px solid", borderColor: '#0d8d40', marginTop: 10, marginBottom: 10 }}
                                src={results.img_decklist}
                                alt="new"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}