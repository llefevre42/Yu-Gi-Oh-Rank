import styles from '../Styles/globalStyle'

function HeadTab(props) {
    return (
        <div style={{...styles.titre_metro, fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: props.size }}>
            {props.text}
        </div>
    )
}

export default HeadTab