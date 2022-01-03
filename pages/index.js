
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import SliderHomePage from './../components/SliderHomePage'
import CellTab from './../components/CellTab'
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
                <a>
                  <div style={{
                    ...styles.tab_medium_element,
                    backgroundColor: (index % 2 ? "black" : null),
                  }}>
                    <CellTab size={"20%"}>{(new Date(Event.date_event)).getDate()} /  {(new Date(Event.date_event)).getMonth() + 1}</CellTab>
                    <CellTab size={"35%"}>{Event.lieu_event.substr(0, 15)}</CellTab>
                    <CellTab size={"35%"}>{Event.nom_event.substr(0, 15)}</CellTab>
                    <CellTab size={"5%"}>{Event.rating_event}</CellTab>
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
                <a>
                  <div style={{
                    ...styles.tab_medium_element,
                    backgroundColor: (index % 2 ? "black" : null),

                  }}>
                    <CellTab size={"20%"}>{(new Date(Event.date_event)).getDate()} /  {(new Date(Event.date_event)).getMonth() + 1}</CellTab>
                    <CellTab size={"40%"}>{Event.lieu_event}</CellTab>
                    <CellTab size={"40%"}>{Event.nom_event}</CellTab>
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

