
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../Styles/globalStyle'
import urlSite from "./../../configServ"
import EventPlayerStyle from "./../../Components/StyledComponent/EventPlayerStyle"


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
        fetch(urlSite + 'getoneevent/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getOneEvents(data);
            });
    }

    function getOneJoueurResultat(event, cossy) {
        fetch(urlSite + 'getonejoueurresultat/' + event + '/' + cossy, {
        })
            .then(response => response.json())
            .then(data => {
                getOneJoueurResultats(data);
            });
    }

    return (
        <EventPlayerStyle>
            <div className="Container">
                <div>
                    <div className="ContainerHead">
                        <Link href={{
                            pathname: "/Player/Player",
                            query: { id_cossy: results.id_cossy },
                        }}>
                            {results.photo_joueur != null && results.photo_joueur != '' && results.photo_joueur != 'undefined' ? <img src={results.photo_joueur}
                                style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />
                                : <img src={"./../Vagabond.jpeg"}
                                    style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g }} />}
                        </Link>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", margin: 10}}>
                            <div>
                                <div style={{ ...styles.titre_metro, fontSize: 23, textAlign: "left"}}>
                                    <Link href={{
                                        pathname: "/Player/Player",
                                        query: { id_cossy: results.id_cossy },
                                    }}>
                                        <a>
                                            {results.prenom_joueur} {results.nom_joueur}
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ ...styles.titre_metro, fontSize: 20, textAlign: "left" }}>
                                    {results.id_cossy}
                                </div>
                                <div style={{ ...styles.titre_metro, fontSize: 20, textAlign: "left" }}>
                                    Deck : {results.deck_joueur != '' && results.deck_joueur != 'undefined' ? results.deck_joueur : "inconnu"}
                                </div>
                            </div>
                            {results.toped > 0 ?

                                <div style={{ ...styles.titre_metro, fontSize: 40, textAlign: "left",  textAlign: "center" }}>
                                    {results.toped == 1 ? results.toped + 'er' : results.toped + 'eme'}
                                </div>
                                :
                                <div style={{ ...styles.titre_metro, fontSize: 40, textAlign: "left", textAlign: "center" }}>
                                    {results.place == 1 ? results.place + 'er' : results.place + 'eme'}
                                </div>
                            }

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", }}>
                            <div style={{ ...styles.bordure_g, borderRadius: "30px", marginTop: "auto", marginBottom: "auto", padding: 20 }}>
                                <Link href={{
                                    pathname: "/Event/Events",
                                    query: { event_id: results.id_event },
                                }}>
                                    <a>
                                        <div style={{ ...styles.titre_metro, fontSize: 20, textAlign: "center" }}>
                                            <div>
                                                {events.nom_event}
                                            </div>
                                        </div>
                                        <div style={{ ...styles.titre_metro, fontSize: 20, textAlign: "center" }}>
                                            {(new Date(events.date_event)).getDate()} /  {(new Date(events.date_event)).getMonth() + 1}
                                        </div>
                                        <div style={{ ...styles.titre_metro, fontSize: 20,textAlign: "center" }}>
                                            {events.lieu_event}
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {results.youtube_link && results.youtube_link != '' && results.youtube_link != 'undefined' ?
                        <iframe style={{ width: "100%", height: "60%", border: "2px solid", borderColor: '#0d8d40', marginTop :10, marginLeft: 10, minHeight: 400 }}
                            id="player"
                            src={results.youtube_link}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        /> : null}
                </div>
                {results.img_decklist && results.img_decklist != '' && results.img_decklist != 'undefined' ?
                    <Link href={results.img_decklist} passHref={true} >
                        <img  className="DeckList"
                            src={results.img_decklist}
                            alt="new"
                        />
                    </Link>
                    : null}
            </div>
        </EventPlayerStyle>
    )
}