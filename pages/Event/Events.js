
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../Styles/globalStyle'
import CellTab from '../../components/StyledComponent/CellTab'
import TitlePro from '../../components/StyledComponent/TitlePro'
import AlgoPoint from '../../reserveFonction/AlgoPoint'
import urlSite from "./../../configServ"
import EventStyle from '../../components/StyledComponent/EventStyle';



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
        fetch(urlSite + 'getoneevent/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getOneEvents(data);
            });
    }

    function getEventResultat(id) {
        fetch(urlSite + 'geteventresultat/' + id, {
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
        <EventStyle>
            <div className="Text" style={{ fontSize: 40,  }}>
                {events.nom_event} -  {events.rating_event}
            </div>
            <div  className="Text" style={{ fontSize: 25, marginTop: 10}}>
                {jour}/{mois} - {events.nbr_player_event} Joueurs
                    </div>
            {events.top_event > 0 ? <div  className="Text" style={{ fontSize: 25}}>
                Top Cut : {events.top_event}
            </div> : null}

            {
                events.texte_event ? <div  className="Text" style={{ fontSize: 25, marginTop: 20 }}>
                    {events.texte_event}
                </div> : null
            }
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                {
                    events.repart_event ?
                        <Link href={events.repart_event} passHref={true} >
                            <img src={events.repart_event} style={{ width: '47%', marginTop: 10, ...styles.bordure_g }} />
                        </Link>
                        : null}
                <div style={{ marginRight: 5, marginLeft: 5 }}></div>
                {
                    events.repart_top_event ?
                        <Link href={events.repart_top_event} passHref={true}>
                            <img src={events.repart_top_event} style={{ width: '47%', marginTop: 10, ...styles.bordure_g }} />
                        </Link>
                        : null
                }
            </div>
            {results && events.top_event > 0 ?
                <div>
                    <TitlePro>
                        Top :
                       </TitlePro>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        <CellTab head size={"15%"}>Place :</CellTab>
                        <CellTab head size={"35%"}>Joueur :</CellTab>
                        <CellTab head size={"35%"}>Deck :</CellTab>
                        <CellTab head size={"15%"}>Point :</CellTab>
                    </div>
                    <div style={{
                        ...styles.bordure_g,
                        borderRadius: "30px",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        overflow: 'hidden',
                    }}>
                        {results.filter(function (data) { return data.toped > 0 }).sort(function (a, b) {
                            return a.toped - b.toped;
                        }).map((result, index) => (
                            <Link key={index} href={{
                                pathname: "/Event/EventPlayer",
                                query: { event_id: result.id_event, cossy_id: result.id_cossy },
                            }}>
                                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                    <div style={{
                                        ...styles.tab_medium_element,
                                        backgroundColor: (index % 2 ? "black" : null),

                                    }}>
                                        <CellTab size={"15%"}>{result.toped} </CellTab>
                                        <CellTab size={"35%"}>{result.nom_joueur + ' ' + result.prenom_joueur}</CellTab>
                                        <CellTab size={"35%"}>{result.deck_joueur}</CellTab>

                                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10, ...styles.titre_metro, color: (AlgoPoint(events.nbr_player_event, result.place, result.toped, events.top_event) ? 'green' : 'white') }}>
                                            {AlgoPoint(events.nbr_player_event, result.place, result.toped, events.top_event) > 0 ? '+' : null}{AlgoPoint(events.nbr_player_event, result.place, result.toped, events.top_event)}
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div> : null}
            {results ? <div>
                <TitlePro>
                    Round :
                    </TitlePro>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
                    <CellTab head size={"10%"}>Place :</CellTab>
                    <CellTab head size={"30%"}>Joueur :</CellTab>
                    <CellTab head size={"30%"}>Deck :</CellTab>
                    <CellTab head size={"15%"}>Point :</CellTab>
                </div>
                <div style={{
                    ...styles.bordure_g,
                    borderRadius: "30px",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10,
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
                                <div style={{ ...styles.tab_medium_element, backgroundColor: (index % 2 ? "black" : null) }}>
                                    <CellTab size={"10%"}>{result.place}</CellTab>
                                    <CellTab size={"30%"}>{result.nom_joueur + ' ' + result.prenom_joueur} </CellTab>
                                    <CellTab size={"30%"}>{result.deck_joueur}</CellTab>
                                    <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10, ...styles.titre_metro, color: (AlgoPoint(events.nbr_player_event, result.place, result.toped, events.top_event) * 1 > 0 ? 'green' : 'white') }}>
                                        {AlgoPoint(events.nbr_player_event, result.place, result.toped, events.top_event) * 1 > 0 ? '+' : null}{AlgoPoint(events.nbr_player_event, result.place, result.toped, events.top_event)}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div> : null}
        </EventStyle>
    )
}