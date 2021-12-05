import Link from 'next/link'
import Image from "next/image"
import React, { useState, useEffect } from 'react';
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'

export default function AllTeam() {
    const [teams, getAllTeams] = useState([]);
    useEffect(() => {
        getAllTeam();
    }, []);
    function getAllTeam() {
        fetch('http://localhost:3001/getallteam')
            .then(response => response.json())
            .then(data => {
                getAllTeams(data);
            });
    }
    /* lastEvent.map((Events, index) => {
         const date = new Date(Events.date_event)
         lastEvent[index].date_event = (date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear())
     })*/
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
                    <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Ariq", color: "#0d8d40", marginTop: 30, marginBottom: 30 }}>
                        Liste des Equipe en France :
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
                            Rank :
                        </div>

                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                            Team :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10 }}>
                            Point :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "8%", marginTop: 10, marginBottom: 10 }}>
                            Logo :
                        </div>
                    </div>
                    <div style={{ border: "3px solid", borderColor: '#0d8d40', borderRadius: "30px", marginRight: 20, overflow: "hidden" }}>
                        {teams.map((team, index) => (
                            <Link key={index} href={{
                                pathname: "/Team/Team",
                                query: { id_team: team.id_team }
                            }} >
                                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        backgroundColor: team.couleur_team//(index % 2 ? "black" : null)
                                    }}>
                                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "10%" }}>
                                            {1}
                                        </div>

                                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "30%" }}>
                                            {team.nom_team}
                                        </div>

                                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "15%" }}>
                                            {36}
                                        </div>
                                        <img src={team.logo_team} style={{ width: 100, height: 100 }}></img>
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