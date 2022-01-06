import globalStyles from '../Styles/globalcss.js'

function Layout(props) {
  return (
    <div>
      {props.children}
      < meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}

export default Layout