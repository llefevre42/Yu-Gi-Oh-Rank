
import Link from 'next/link'
import styles from '../Styles/globalStyle'
import ArboStyle from './StyledComponent/ArboStyle'
 
export default function Arbo(visible) {
    return (
        <ArboStyle>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href="/Player/RankPlayer">
                    <a>
                    <div className="ArboText">
                            Rank
                    </div>
                    </a>
                </Link>
                <div className="ArboLine"></div>
                <Link href="/Event/AllEvent">
                    <a>
                    <div className="ArboText">
                            Event
                        </div>
                    </a>
                </Link>
                <div className="ArboLine"></div>
                <Link href="/Player/AllPlayer">
                    <a>
                    <div className="ArboText">
                            Player
                    </div>
                    </a>
                </Link>
                <div className="ArboLine"></div>
                <Link href="/Team/AllTeam">
                    <a>
                    <div className="ArboText">
                            Team
                    </div>
                    </a>
                </Link>
            </div>
        </ArboStyle>

    )
}