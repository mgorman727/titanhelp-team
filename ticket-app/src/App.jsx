import './App.css'

function App() {
    const backgroundColor = {
        backgroundColor: '#F8FAFC',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const headingStyle = {
        color: 'darkblue',
        fontSize: '2rem',
    }

  return (
    <div style={backgroundColor}>
        <div>
            <h1 style={headingStyle}>Ticketing Application SPC</h1>
        </div>
    </div>
  )
}

export default App
