import './App.css'
import Form from '../components/Form.jsx'
import TicketList from '../components/TicketList.jsx'
import {useState} from "react";

function App() {
    const headingStyle = {
        color: 'darkblue',
        fontSize: '2rem',
    }
    const appContainerStyle = {
        backgroundColor: '#F8FAFC',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const appHeaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'orange',
        width: '100vw',
    }
    const mainContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 10,
        padding: '0.3rem',
        backgroundColor: 'yellow',
        width: '80vw'
    }
    const ticketListContainer = {
        backgroundColor: 'lightblue',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: '1rem',
        // overflowY: 'auto',
        height: '800px'
    }
    const formContainer = {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'lightgreen',
        width: '100%',
        flex: 2,
    }

    const [tickets, setTickets] = useState([
        {
            id: 1,
            name: 'John Doe',
            date: new Date('2025-10-01').toISOString(),
            problemDescription: 'Login issues with the portal.',
            priority: 'High',
            status: 'Open',
        },
        {
            id: 2,
            name: 'Jane Smith',
            date: new Date('2025-10-03').toISOString(),
            problemDescription: 'Printer not responding to network requests.',
            priority: 'Medium',
            status: 'Open',
        }
    ])

    const handleTicketCreated = (newTicket) => {
        setTickets((prev) => [...prev, newTicket]);
    };

    const handleStatusChange = (ticketId, newStatus) => {
        if (newStatus === 'Closed') {
            setTickets((prev) => prev.filter(ticket => ticket.id !== ticketId))
        } else {
            setTickets((prev) =>
                prev.map(ticket =>
                    ticket.id === ticketId
                        ? { ...ticket, status: newStatus }
                        : ticket
                )
            )
        }
    }

    // const handleTicketCreated = (newTicket) => {
    //     window.location.reload();
    // };

  return (
    <div style={appContainerStyle}>
        <header style={appHeaderStyle}>
            <h1 style={headingStyle}>Ticketing Application SPC</h1>
        </header>
        <main style={mainContainerStyle}>
            <div style={ticketListContainer}>
                <TicketList tickets={tickets} onStatusChange={handleStatusChange} />
            </div>
            <div style={formContainer}>
                <Form onTicketCreated={handleTicketCreated} />
            </div>
        </main>
    </div>
  )
}

export default App