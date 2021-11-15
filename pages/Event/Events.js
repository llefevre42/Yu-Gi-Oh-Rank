
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Title } from '../Styles'
import { useRouter } from 'next/router'
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'


export default function Events() {
    const router = useRouter()

    const [events, getOneEvents] = useState([]);
    useEffect(() => {
        getOneEvent(router.query.event_id);
    }, []);
    function getOneEvent(id) {
        fetch('http://localhost:3001/getoneevent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then(response => response.json())
            .then(data => {
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
    console.log(events)
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
             <Arbo/>
                <div style={{ width: "100%", marginLeft: 30 }}>
                <Header/>

                    <div style={{ fontSize: 40, textAlign: "center", color: "#efefef" }}>
                        {router.query.nom_event} -  {router.query.rank_event}
                    </div>
                    <div style={{ fontSize: 25, textAlign: "center", color: "#efefef" }}>
                        {router.query.date_event} - {router.query.nbr_player_event} Joueur
                    </div>
                    <div style={{ fontSize: 25, textAlign: "center", color: "#efefef" }}>
                        Top Cut :
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
                            <Link href="/Event/EventPlayer">
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


                                    <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10 }}>
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