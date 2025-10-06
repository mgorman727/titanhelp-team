import React, {useState, useEffect} from 'react'

const TicketList = ({ tickets, onStatusChange }) => {
    if (tickets.length === 0) {
        return <p>No tickets yet.</p>
    }
    // const [tickets, setTickets] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     fetchTickets()
    // }, [])

    // const fetchTickets = async () => {
    //     try {
    //         setLoading(true)
    //         const response = await fetch('http://localhost:3001/api/tickets')
    //         if (!response.ok) throw new Error('Ticket not found.')
    //         const data = await response.json()
    //         setTickets(data)
    //     } catch (err) {
    //         setError(err.message)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    const ticketGrid = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
    }

    const ticketCard = {
        background: 'lightgrey',
        borderRadius: '5px',
        padding: '1em',
    }

    return (
        <div>
            <h2>Existing Tickets</h2>
            <div style={ticketGrid}>
                {tickets.map((ticket) => (
                    <div key={ticket.id} style={ticketCard}>
                        <div>
                            <h3>{ticket.name}</h3>
                        </div>
                        <div>
                            <label>Status:</label>
                            <select
                                id={`status-${ticket.id}`}
                                value={ticket.status}
                                onChange={(e) => onStatusChange(ticket.id, e.target.value)}
                            >
                                <option value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>
                        <div>
                            <p>Created: {new Date(ticket.date).toLocaleDateString()}</p>
                            <p>{ticket.problemDescription}</p>
                        </div>
                        <div>
                            <span>Priority: {ticket.priority}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TicketList