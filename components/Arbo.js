
import Link from 'next/link'
export default function Arbo() {
    return (
        <div style={{ border: "3px solid", borderColor: '#0d8d40', borderRadius: "30px", width: "15vw", height: "90vh", /*justifyContent: "space-between",*/ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href="/Player/RankPlayer">
                    <a style={{}}>
                        <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Phosphate", color: "#27f32c", marginTop: 20, marginBottom: 20 }}>
                            Rank
                    </div>
                    </a>
                </Link>
                <div style={{ borderBottom: "3px solid", borderBottomColor: "#0d8d40", width: "80%", alignSelf: "center"}}></div>
                <Link href="/Event/AllEvent">
                    <a style={{}}>
                        <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Phosphate", color: "#27f32c", marginTop: 20, marginBottom: 20 }}>
                            Event
                        </div>
                    </a>
                </Link>
                <div style={{ borderBottom: "3px solid", borderBottomColor: "#0d8d40", width: "80%", alignSelf: "center"}}></div>
                <Link href="/Event/Events">
                    <a style={{}}>
                        <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Phosphate", color: "#27f32c", marginTop: 20, marginBottom: 20 }}>
                            Player
                    </div>
                    </a>
                </Link>
                <div style={{ borderBottom: "3px solid", borderBottomColor: "#0d8d40", width: "80%", alignSelf: "center"}}></div>
                <Link href="/Team/AllTeam">
                    <a style={{}}>
                        <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Phosphate", color: "#27f32c", marginTop: 20, marginBottom: 20 }}>
                            Team
                    </div>
                    </a>
                </Link>
                <div style={{ borderBottom: "3px solid", borderBottomColor: "#0d8d40", width: "80%", alignSelf: "center"}}></div>
                <Link href="/Event/Events">
                    <a style={{}}>
                        <div style={{ fontSize: 25, textAlign: "center", fontFamily: "Phosphate", color: "#27f32c", marginTop: 20, marginBottom: 20 }}>
                            Organisateur
                    </div>
                    </a>
                </Link>
                <div style={{ borderBottom: "3px solid", borderBottomColor: "#0d8d40", width: "80%", alignSelf: "center"}}></div>
                <Link href="/Event/Events">
                    <a style={{}}>
                        <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Phosphate", color: "#27f32c", marginTop: 20, marginBottom: 20 }}>
                            Contact
                    </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}