
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'


export default function Events() {
    const router = useRouter()
    console.log(router.query.event_id)
    const [events, getOneEvents] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        console.log('DATA')
        getOneEvent(router.query.event_id);
    }, [router.isReady])

    function getOneEvent(id) {
        console.log("id : ", id)
        fetch('http://localhost:3001/getoneevent/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                console.log("data1 : ", data)
                getOneEvents(data);
            });
    }


    const results =
    {
        player: "125", date: "26/08/2021", rank: "B+", resu: [
            { place: '1', nom: 'samir bachar', deck: 'data' },
            { place: '2', nom: 'gab soucis', deck: 'SS' },
            { place: '3-4', nom: 'rayan jabri', deck: 'tri-bri' },
            { place: '3-4', nom: 'pierre burgal', deck: 'data' },
            { place: '5-8', nom: 'ludovic lefevre', deck: 'data' },
            { place: '5-8', nom: 'sebastien Ma', deck: 'SS' },
            { place: '5-8', nom: 'lancelot lucas', deck: 'Tri-bri' },
            { place: '5-8', nom: 'florian fagardo', deck: 'zoodiac' },
        ]
    };


    const date = new Date(events.date_event)
    events.date_event = (date.getDate() + ' / ' + (date.getMonth() + 1))
    return (
        <div style={{
            minHeight: "100vh", overflowX: "hidden", backgroundColor: "#22171c", backgroundImage: "url(" + "/pattern.png" + ")", width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "30%",
            backgroundPosition: "right top",
        }}>
            <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Arbo />
                <div style={{ width: "100%", marginLeft: 30 }}>
                    <Header />

                    <div style={{ fontSize: 40, textAlign: "center", color: "#efefef" }}>
                        {events.nom_event} -  {events.rating_event}
                    </div>
                    <div style={{ fontSize: 25, textAlign: "center", color: "#efefef" }}>
                        {events.date_event} - {events.nbr_player_event} Joueur
                    </div>
                    <div style={{ fontSize: 25, textAlign: "center", color: "#efefef" }}>
                        Top Cut :
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 20,
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "10%", marginTop: 10, marginBottom: 10 }}>
                            Place :
                        </div>

                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                            Joueur :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                            Deck :
                        </div>

                    </div>
                    <div style={{
                        border: "3px solid",
                        borderColor: '#0d8d40',
                        borderRadius: "30px",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 30,
                        overflow: 'hidden',
                    }}>
                        {results.resu.map((result, index) => (
                            <Link key={index} href="/Event/EventPlayer">
                                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                    <div style={{
                                        display: "flex", flexDirection: "row",
                                        justifyContent: "space-around",
                                        backgroundColor: (index % 2 ? "black" : null),
                                        alignItems: "center",
                                    }}>

                                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "10%", marginTop: 10, marginBottom: 10 }}>
                                            {result.place}
                                        </div>

                                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                                            {result.nom}
                                        </div>


                                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                                            {result.deck}

                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}