
import Link from 'next/link'
import Image from "next/image"
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Arbo from './../components/Arbo'
import Header from './../components/Header'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

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

  lastEvent.map((Events, index) => {
    const date = new Date(Events.date_event)
    lastEvent[index].date_event = (date.getDate() + ' / ' + (date.getMonth() + 1))
  })

  nextEvent.map((Events, index) => {
    const date = new Date(Events.date_event)
    nextEvent[index].date_event = (date.getDate() + ' / ' + (date.getMonth() + 1))
  })
  const options = { delay: 4000 }
  const autoplay = Autoplay(options)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay])


  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])
  return (

    <div style={{
      minHeight: "100vh", overflowX: "hidden", backgroundColor: "#22171c", backgroundImage: "url(" + "/pattern.png" + ")", width: "100%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "30%",
      backgroundPosition: "right top",
    }}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <Arbo />
        <div style={{ width: "100%", marginLeft: 30, marginRight: 30 }}>
          <Header />

          <div style={{ border: "3px solid", borderColor: '#0d8d40', borderRadius: "30px", overflow: 'hidden', marginTop: 10, marginLeft: 10 }}>
            <div style={{ overflow: "hidden", width: "100%", }} ref={emblaRef}>
              <div style={{ display: "flex" }}>
                <img style={{
                  display: "block",
                  top: "50%",
                  left: "50%",
                  width: "auto",
                  minHeight: "100%",
                  minWidth: "100%",
                  maxWidth: "100%"
                }} src={"https://www.passiondujeu.fr/wp-content/uploads/2014/02/yugi-banniere.png"}></img>
                <img style={{
                  display: "block",
                  top: "50%",
                  left: "50%",
                  width: "auto",
                  minHeight: "100%",
                  minWidth: "100%",
                  maxWidth: "100%"
                }}
                  src={"data:image/jpeg;base64,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"}></img>
            
              </div>
            </div>
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
            <div style={{ minWidth: "38vw", marginRight: "auto", marginLeft:'auto'}}>
              <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Phosphate", color: "#27f32c", marginTop : 20 }}>
                Dernier Evenement en France :
                 </div>

              <div style={{ border: "3px solid", borderColor: '#0d8d40', width: "100%", borderRadius: "30px" }}>
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
                        backgroundColor: (index % 2 ? "black" : null)
                      }}>

                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10, fontFamily: "Metropolis" }}>
                          {Event.date_event}
                        </div>
                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%", marginTop: 10, marginBottom: 10, fontFamily: "Metropolis" }}>
                          {Event.lieu_event.substr(0, 15)}
                        </div>
                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%", marginTop: 10, marginBottom: 10, fontFamily: "Metropolis" }}>

                          {Event.nom_event.substr(0, 15)}

                        </div>
                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "5%", marginTop: 10, marginBottom: 10, fontFamily: "Metropolis" }}>
                          {Event.rating_event}
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div style={{minWidth: "38vw", marginRight: "auto", marginLeft:'auto' }}>
              <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Phosphate", color: "#27f32c", marginTop : 20 }}>
                Prochain Evenement en France :
                </div>
              <div style={{ border: "3px solid", borderColor: '#0d8d40', width: "100%", borderRadius: "30px" }}>
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
                        backgroundColor: (index % 2 ? "black" : null)
                      }}>

                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "15%", fontFamily: "Metropolis" }}>
                          {Event.date_event}
                        </div>
                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "25%", fontFamily: "Metropolis" }}>
                          {Event.lieu_event}
                        </div>
                        <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "25%", fontFamily: "Metropolis" }} >
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
    </div>
  );
}
//<div style={{display: "flex", flexDirection: "row",  border: "1px solid black", borderColor: 'black' }}>
//{Event.date_event}
