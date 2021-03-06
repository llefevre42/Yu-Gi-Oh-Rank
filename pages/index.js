
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import SliderHomePage from '../components/SliderHomePage'
import CellTab from '../components/StyledComponent/CellTab'
import TitlePro from '../components/StyledComponent/TitlePro'
import { Container, TabMenu, TabMenuLeft } from '../components/StyledComponent/HomeTab'
import styles from '../Styles/globalStyle'
import urlSite from "./../configServ"
import ReturnDate from "./../reserveFonction/returnDate"
import Events from './Event/Events';


export default function Home() {
  const [lastEvent, getLastEvents] = useState([]);
  const [nextEvent, getNextEvents] = useState([]);
  useEffect(() => {
    getLastEvent();
    getNextEvent();
  }, []);
  function getLastEvent() {
    fetch(urlSite + 'getlastevent')
      .then(response => response.json())
      .then(data => {
        getLastEvents(data);
      });
  }
  function getNextEvent() {
    fetch(urlSite + 'getnextevent')
      .then(response => response.json())
      .then(data => {
        getNextEvents(data);
      });
  }

  return (
    <div>
      <SliderHomePage />
      <Container>
        <TabMenuLeft>
          <TitlePro>
            Dernier Evenement en France :
          </TitlePro>
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
                    <CellTab size={"20%"}>{ReturnDate(Event.date_event, false)}</CellTab>
                    <CellTab size={"35%"}>{Event.lieu_event.substr(0, 15)}</CellTab>
                    <CellTab size={"35%"}>{Event.nom_event.substr(0, 15)}</CellTab>
                    <CellTab size={"5%"}>{Event.rating_event}</CellTab>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </TabMenuLeft>
        <TabMenu>
          <TitlePro>
            Prochain Evenement en France :
            </TitlePro>
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
                    <CellTab size={"20%"}>{ReturnDate(Event.date_event, false)}</CellTab>
                    <CellTab size={"40%"}>{Event.lieu_event}</CellTab>
                    <CellTab size={"40%"}>{Event.nom_event}</CellTab>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </TabMenu>
      </Container>
    </div>
  );
}

