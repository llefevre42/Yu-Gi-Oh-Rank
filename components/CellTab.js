import styles from '../Styles/globalStyle'

function CellTab(props) {
    return (
        <div style={{...styles.titre_metro, fontSize: 25, textAlign: "center", color: "#efefef", fontSize: 25, width: props.size, marginTop: 10, marginBottom: 10  }}>
            {props.text}
        </div>
    )
}

export default CellTab