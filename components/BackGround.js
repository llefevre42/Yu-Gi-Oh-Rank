import Arbo from './../components/Arbo'
import Header from './../components/Header'
export default function BackGround(props) {
    return (
        <div style={{
            minHeight: "100vh", 
            overflow: "hidden", 
            backgroundColor: "#22171c", 
            backgroundImage: "url(" + "/pattern.png" + ")", 
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "30%",
            backgroundPosition: "right top",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Arbo />
                <div style={{ width: "100%", marginLeft: 30 }}>
                    <Header />
                    {props.children}
                </div>
            </div>
        </div>
    )
}