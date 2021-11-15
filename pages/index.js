
import Link from 'next/link'
import Image from "next/image"
import React, { useState, useEffect } from 'react';
import Arbo from './../components/Arbo'
import Header from './../components/Header'

export default function Home() {
  const [events, getAllEvents] = useState([]);
  const [lastEvent, getLastEvents] = useState([]);
  const [nextEvent, getNextEvents] = useState([]);
  useEffect(() => {
    getAllEvent();
    getLastEvent();
    getNextEvent();
  }, []);
  function getAllEvent() {
    fetch('http://localhost:3001/getallevent')
      .then(response => response.json())
      .then(data => {
        getAllEvents(data);
      });
  }
  function getLastEvent() {
    fetch('http://localhost:3001/getlastevent')
      .then(response => response.json())
      .then(data => {
        getLastEvents(data);
      });
  }
  function getNextEvent() {
    fetch('http://localhost:3001/getnextevent')
      .then(response => response.json())
      .then(data => {
        getNextEvents(data);
      });
  }

  const lastEvents = [
    { date: '12/10', nom: 'LCS XVI', region: 'online', grade: 'B-' },
    { date: '2/09', nom: 'GOAT', region: 'montpelier', grade: 'B' },
    { date: '2/09', nom: 'WCQ louvier', region: 'chezpas', grade: 'B+' },
    { date: '2/09', nom: 'WCQ Paris', region: 'ile de france', grade: 'B+' },
    { date: '2/09', nom: 'CDF', region: 'ile de france', grade: 'A+' },
    { date: '2/09', nom: 'LCS XV', region: 'online', grade: 'B+' }
  ];

  const nextEvents = [
    { date: '12/11', nom: 'WCQ Kief', region: 'Croatie' },
    { date: '2/01', nom: 'WCQ Paris', region: 'ile de france' },
    { date: '2/02', nom: 'CDF', region: 'ile de france' },
    { date: '2/03', nom: 'LCS XX', region: 'online' }
  ];

  lastEvent.map((Events, index) => {
    const date = new Date(Events.date_event)
    lastEvent[index].date_event = (date.getDate() + ' / ' + (date.getMonth() + 1))
  })

  nextEvent.map((Events, index) => {
    const date = new Date(Events.date_event)
    nextEvent[index].date_event = (date.getDate() + ' / ' + (date.getMonth() + 1))
  })

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
      @font-face {
        font-family: "Phosphate";
        font-style: italic;
        font-weight: 400;
        src: url("/fonts/Phosphate2.otf");
        font-display: swap;
      }
      @font-face {
        font-family: "Ariq";
        font-style: italic;
        font-weight: normal;
        src: url("/fonts/Ariq.otf");

      }
    `}</style>
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <Arbo />
        <div style={{ width: "100%", marginLeft: 30 }}>
          <Header />
          <div style={{ marginTop: 30 }}>
            <div style={{ border: "3px solid", borderColor: '#0d8d40', tableLayout: "fixed", width: "100%", borderRadius: "30px", overflow: 'hidden' }}>
              <img src={'https://www.passiondujeu.fr/wp-content/uploads/2014/02/yugi-banniere.png'} style={{ width: "100%", height: "100%" }}></img>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",

            }}>
              <div style={{ width: "40vw" }}>
                <h1 style={{ fontSize: 30, textAlign: "center", fontFamily: "Ariq", color: "#0d8d40" }}>
                  Dernier Evenement en France :
                 </h1>

                <div style={{ border: "3px solid", borderColor: '#0d8d40', width: "100%", borderRadius: "30px" }}>
                  {lastEvent.slice(0, 5).map((Event, index) => (
                    <Link href={{
                      pathname: "/Event/Events",
                      query: { name: Event.id_event },
                    }}>
                      <a style={{ color: "inherit", textDecoration: "inherit" }}>
                        <div style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                          backgroundColor: (index % 2 ? "black" : null)
                        }}>

                          <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10 }}>
                            {Event.date_event}
                          </div>
                          <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%", marginTop: 10, marginBottom: 10 }}>
                            {Event.lieu_event.substr(0, 15)}
                          </div>
                          <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%", marginTop: 10, marginBottom: 10 }}>

                            {Event.nom_event.substr(0, 15)}

                          </div>
                          <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "5%", marginTop: 10, marginBottom: 10 }}>
                            {Event.rating_event}
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div style={{ width: "40vw", marginRight: 20 }}>
                <h1 style={{ fontSize: 30, textAlign: "center", fontFamily: "Ariq", color: "#0d8d40" }}>
                  Prochain Evenement en France :
                </h1>
                <div style={{ border: "3px solid", borderColor: '#0d8d40', width: "100%", borderRadius: "30px" }}>
                  {nextEvent.slice(0, 5).map((Event, index) => (
                    <Link href={{
                      pathname: "/Event/Events",
                      query: { event_id: Event.id_event }
                    }} >
                      <a style={{ color: "inherit", textDecoration: "inherit" }}>
                        <div style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                          alignItems: "center",
                          backgroundColor: (index % 2 ? "black" : null)
                        }}>

                          <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "15%" }}>
                            {Event.date_event}
                          </div>
                          <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "25%" }}>
                            {Event.lieu_event}
                          </div>
                          <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "25%" }} >
                            {Event.nom_event}
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}
//<div style={{display: "flex", flexDirection: "row",  border: "1px solid black", borderColor: 'black' }}>
//{Event.date_event}
