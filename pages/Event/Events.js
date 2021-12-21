
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import BackGround from '../../components/BackGround';
import styles from '../../Styles/globalStyle'
import HeadTab from './../../components/HeadTab'
import CellTab from './../../components/CellTab'

export default function Events() {
    const router = useRouter()
    const [events, getOneEvents] = useState([]);
    const [results, getEventResultats] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        getOneEvent(router.query.event_id);
        getEventResultat(router.query.event_id);
    }, [router.isReady])

    function getOneEvent(id) {
        fetch('http://localhost:3001/getoneevent/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getOneEvents(data);
            });
    }

    function getEventResultat(id) {
        fetch('http://localhost:3001/geteventresultat/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getEventResultats(data);
            });
    }


    const date = new Date(events.date_event)
    const jour = date.getDate()
    const mois = (date.getMonth() + 1)
    return (
        <BackGround>
            <div style={{ fontSize: 40, textAlign: "center", color: "#efefef", ...styles.titre_metro }}>
                {events.nom_event} -  {events.rating_event}
            </div>
            <div style={{ fontSize: 25, textAlign: "center", color: "#efefef", ...styles.titre_metro }}>
                {jour}/{mois} - {events.nbr_player_event} Joueur
                    </div>
            {events.top_event > 0 ? <div style={{ fontSize: 25, textAlign: "center", color: "#efefef", ...styles.titre_metro }}>
                Top Cut : {events.top_event}
            </div> : null}

            {events.texte_event ? <div style={{ fontSize: 25, textAlign: "center", color: "#efefef", ...styles.titre_metro, marginTop: 20 }}>
                {events.texte_event}
            </div> : null}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                {events.repart_event ? <img src={events.repart_event} style={{ width: '45%', marginTop: 10, ...styles.bordure_g }} /> : null}
                <div style={{ marginRight: 5, marginLeft: 5 }}></div>
                {events.repart_top_event ? <img src={events.repart_top_event} style={{ width: '45%', marginTop: 10, ...styles.bordure_g }} /> : null}
            </div>
            {results && events.top_event > 0 ?
                <div>
                    <div style={{ fontSize: 40, textAlign: "center", color: "#efefef", ...styles.titre_metro, marginTop: 20 }}>
                        Top Cut :
                               </div>
                    <HeadTab text={"Place :"} size={"10%"}></HeadTab>
                    <HeadTab text={"Joueur :"} size={"30%"}></HeadTab>
                    <HeadTab text={"Deck :"} size={"30%"}></HeadTab>
                    <HeadTab text={"Point :"} size={"15%"}></HeadTab>
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
                        {results.sort(function (a, b) {
                            return a.toped - b.toped;
                        }).map((result, index) => (
                            <Link key={index} href={{
                                pathname: "/Event/EventPlayer",
                                query: { event_id: result.id_event, cossy_id: result.id_cossy },
                            }}>
                                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                    <div style={{
                                        display: "flex", flexDirection: "row",
                                        justifyContent: "space-around",
                                        backgroundColor: (index % 2 ? "black" : null),
                                        alignItems: "center",
                                    }}>
                                        <CellTab text={result.toped} size={"10%"}></CellTab>
                                        <CellTab text={result.nom_joueur + ' ' + result.prenom_joueur} size={"30%"}></CellTab>
                                        <CellTab text={result.deck_joueur} size={"30%"}></CellTab>

                                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10, ...styles.titre_metro, color: ((Math.trunc(events.nbr_player_event / 8) - (result.place - 1)) * 1 + ((events.top_event / 2) - (result.toped - 1)) * 1 > 0 ? 'green' : 'white') }}>
                                            {(Math.trunc(events.nbr_player_event / 8) - (result.place - 1)) * 1 + ((events.top_event / 2) - (result.toped - 1)) * 1 > 0 ? '+' : null}{(Math.trunc(events.nbr_player_event / 8) - (result.place - 1)) * 1 + ((events.top_event / 2) - (result.toped - 1)) * 1}
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div> : null}
            {results ? <div>
                <div style={{ fontSize: 40, textAlign: "center", color: "#efefef", ...styles.titre_metro, marginTop: 20 }}>
                    Round :
                    </div>
                <Titre></Titre>
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
                    {results.sort(function (a, b) {
                        return a.place - b.place;
                    }).map((result, index) => (
                        <Link key={index} href={{
                            pathname: "/Event/EventPlayer",
                            query: { event_id: result.id_event, cossy_id: result.id_cossy },
                        }}>
                            <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                <div style={{
                                    display: "flex", flexDirection: "row",
                                    justifyContent: "space-around",
                                    backgroundColor: (index % 2 ? "black" : null),
                                    alignItems: "center",
                                }}>
                                    <CellTab text={result.toped} size={"10%"}></CellTab>
                                    <CellTab text={result.nom_joueur + ' ' + result.prenom_joueur} size={"30%"}></CellTab>
                                    <CellTab text={result.deck_joueur} size={"30%"}></CellTab>
                                    <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10, ...styles.titre_metro, color: ((Math.trunc(events.nbr_player_event / 8) - (result.place - 1)) * 1 + ((events.top_event / 2) - (result.toped - 1)) * 1 > 0 ? 'green' : 'white') }}>
                                        {(Math.trunc(events.nbr_player_event / 8) - (result.place - 1)) * 1 + ((events.top_event / 2) - (result.toped - 1)) * 1 > 0 ? '+' : null}{(Math.trunc(events.nbr_player_event / 8) - (result.place - 1)) * 1 + ((events.top_event / 2) - (result.toped - 1)) * 1}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div> : null}
        </BackGround>
    )
}