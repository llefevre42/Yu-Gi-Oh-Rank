import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'

export default function RankPlayer() {
    const router = useRouter()

    const results =
    {
        player: "125", date: "26/08/2021", rank: "B+", resu: [
            { place: '1', nom: 'samir bachar', team: 'bcp', point: '100' },
            { place: '2', nom: 'gab soucis', team: 'royality', point: '90' },
            { place: '3', nom: 'rayan jabri', team: 'bcp', point: '87' },
            { place: '4', nom: 'pierre burgal', team: 'goat', point: '78' },
            { place: '5', nom: 'ludovic lefevre', team: 'sgc', point: '67' },
            { place: '6', nom: 'sebastien Ma', team: 'none', point: '55' },
            { place: '7', nom: 'lancelot lucas', team: 'bcp', point: '34' },
            { place: '8', nom: 'florian fagardo', team: 'goat', point: '27' },
        ]
    };

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
                        Rank pour la saison actuel
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 30,
                    }}>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "10%", marginTop: 10, marginBottom: 10 }}>
                            Rank :
                        </div>

                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                            Joueur :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                            Team :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                            Point :
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
                                        {result.team}
                                    </div>
                                    <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                                        {result.point}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}