
import Link from 'next/link'
export default function Arbo() {
    return (
        <div style={{ border: "3px solid", borderColor: '#0d8d40', borderRadius: "30px", tableLayout: "fixed", width: "15vw", display: "flex", flexDirection: "column", /*justifyContent: "space-between",*/ minHeight: "100vh", marginTop: 10, marginLeft: 10 }}>
            <Link href="/Player/RankPlayer">
                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                    <div style={{ fontSize: 30, textAlign: "center" }}>
                        Rank
                    </div>
                </a>
            </Link>

            <div style={{ fontSize: 30, textAlign: "center" }}>
                <Link href="/Event/AllEvent">
                    <a style={{ color: "inherit", textDecoration: "inherit" }}>
                        Event
                    </a>
                </Link>
            </div>
            <Link href="/Event/Events">
                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                    <div style={{ fontSize: 30, textAlign: "center" }}>
                        Player
                    </div>
                </a>
            </Link>
            <Link href="/Team/AllTeam">
                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                    <div style={{ fontSize: 30, textAlign: "center" }}>
                        Team
                    </div>
                </a>
            </Link>
            <Link href="/Event/Events">
                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                    <div style={{ fontSize: 30, textAlign: "center" }}>
                        Organisateur
                    </div>
                </a>
            </Link>
            <Link href="/Event/Events">
                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                    <div style={{ fontSize: 30, textAlign: "center" }}>
                        Contact
                    </div>
                </a>
            </Link>
        </div>
    )
}