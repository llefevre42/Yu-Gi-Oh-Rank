import React from 'react';
import Link from 'next/link'
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'


export default function EventPlayer() {
    const results =
    {
        name: "Ludovic Lefevre", id_cossy: "0303645252", rank: "1", deck: 'Data',id_event: 2, tournoi_lieu: "montpelier", tournoi_date: "20/23", youtube: "https://www.youtube.com/embed/QFEWM4v6VcU", imgDeck: 'https://yugioh-france.fr/wp-content/uploads/2021/06/Tribri.jpg', tournoi: "GCG cup"
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
                <Arbo />
                <div style={{ width: "100%", marginLeft: 30 }}>
                    <Header />
                    <div style={{ border: "3px solid", borderColor: '#0d8d40', borderRadius: "30px", display: "flex", flexDirection: "column", marginTop: 10, marginLeft: 10, marginRight: 30 }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}>
                            <div>
                                <div style={{ display: "flex", flexDirection: "row" }}>

                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCXkzWUlkGNPg3kHNl1hIeihamQQLMQfcegMprnpstdjN59n3bg3S5TZ2r1gcpdMhGJc&usqp=CAU"}
                                        style={{ width: 150, height: 200, marginTop: 10, border: "3px solid", borderColor: '#0d8d40' }} />

                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", marginTop: 10, marginLeft: 15 }}>
                                        <div>
                                            <div style={{ fontSize: 23, textAlign: "left", color: "#efefef" }}>
                                                <Link href={{
                                                    pathname: "/Player/Player",
                                                    query: { id_cossy: results.id_cossy },
                                                }}>
                                                    <a>{results.name}</a>
                                                </Link>
                                            </div>
                                            <div style={{ fontSize: 20, textAlign: "left", color: "#efefef" }}>
                                                {results.cossy}
                                            </div>
                                            <div style={{ fontSize: 20, textAlign: "left", color: "#efefef" }}>
                                                Deck : {results.deck}
                                            </div>
                                        </div>
                                        <div style={{ fontSize: 40, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                            {results.rank}er
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", }}>
                                        <div style={{ border: "3px solid", borderColor: '#0d8d40', borderRadius: "30px", marginTop: "auto", marginBottom: "auto", padding: 20 }}>
                                            <Link href={{
                                                pathname: "/Event/Events",
                                                query: { event_id: results.id_event },
                                            }}>
                                                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                                    <div style={{ fontSize: 20, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                        <div>
                                                            {results.tournoi}
                                                        </div>
                                                    </div>
                                                    <div style={{ fontSize: 20, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                        {results.tournoi_date}
                                                    </div>
                                                    <div style={{ fontSize: 20, textAlign: "left", color: "#efefef", textAlign: "center" }}>
                                                        {results.tournoi_lieu}
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <iframe style={{ width: "100%", height: "60%", border: "2px solid", borderColor: '#0d8d40', marginTop: 10 }}
                                    src={results.youtube}
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                />
                            </div>
                            <img style={{ width: "50%", height: "60vh", border: "2px solid", borderColor: '#0d8d40', marginTop: 10, marginBottom: 10 }}
                                src={results.imgDeck}
                                alt="new"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}