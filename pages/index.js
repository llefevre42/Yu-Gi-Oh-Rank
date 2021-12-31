
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import SliderHomePage from './../components/SliderHomePage'

import styles from '../Styles/globalStyle'

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

  return (
    <div>
      <SliderHomePage />
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
      }}>
        <div style={{ minWidth: "38vw", marginRight: "auto", marginLeft: 'auto' }}>
          <div style={{ fontSize: 30, textAlign: "center", ...styles.titre_pro, marginTop: 20, marginBottom: 10 }}>
            Dernier Evenement en France :
                 </div>
          <div style={{ ...styles.bordure_g, width: "100%", borderRadius: "30px" }}>
            {lastEvent.slice(0, 5).map((Event, index) => (
              <Link key={index} href={{
                pathname: "/Event/Events",
                query: { event_id: Event.id_event },
              }}>
                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    backgroundColor: (index % 2 ? "black" : null),
                    minHeight: 50,
                    alignItems: "center"
                  }}>
                    <div style={{ textAlign: "center", fontSize: 25, width: "20%", ...styles.titre_metro }}>
                      {(new Date(Event.date_event)).getDate()} /  {(new Date(Event.date_event)).getMonth() + 1}
                    </div>
                    <div style={{ textAlign: "center", fontSize: 25, width: "35%", ...styles.titre_metro }}>
                      {Event.lieu_event.substr(0, 15)}
                    </div>
                    <div style={{ textAlign: "center", fontSize: 25, width: "35%", ...styles.titre_metro }}>

                      {Event.nom_event.substr(0, 15)}

                    </div>
                    <div style={{ textAlign: "center", fontSize: 25, width: "5%", ...styles.titre_metro }}>
                      {Event.rating_event}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div style={{ minWidth: "38vw", marginRight: "auto", marginLeft: 'auto' }}>
          <div style={{ fontSize: 30, textAlign: "center", ...styles.titre_pro, marginTop: 20, marginBottom: 10 }}>
            Prochain Evenement en France :
                </div>
          <div style={{ ...styles.bordure_g, width: "100%", borderRadius: "30px" }}>
            {nextEvent.slice(0, 5).map((Event, index) => (
              <Link key={index} href={{
                pathname: "/Event/Events",
                query: { event_id: Event.id_event }
              }} >
                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: (index % 2 ? "black" : null),
                    minHeight: 50,
                    alignItems: "center"
                  }}>
                    <div style={{ textAlign: "center", fontSize: 25, width: "20%", ...styles.titre_metro }}>
                      {(new Date(Event.date_event)).getDate()} /  {(new Date(Event.date_event)).getMonth() + 1}
                    </div>
                    <div style={{ textAlign: "center", fontSize: 25, width: "40%", ...styles.titre_metro }}>
                      {Event.lieu_event}
                    </div>
                    <div style={{ textAlign: "center", fontSize: 25, width: "40%", ...styles.titre_metro }} >
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
  );
}

