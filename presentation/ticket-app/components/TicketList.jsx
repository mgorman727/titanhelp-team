import React, { useState, useEffect } from 'react'

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
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    width: '100%',
    padding: '1rem 0rem',
  }

  const ticketCard = {
    width: '100%',
    maxWidth: '300px',
    background: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    border: '1px solid #e1e1e1',
  }

  const ticketHeader = {
    borderBottom: '1px solid #eee',
    paddingBottom: '0.5rem',
    marginBottom: '0.5rem',
  }

  const ticketStatus = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  }

  const ticketInfo = {
    fontSize: '0.9rem',
    color: '#666',
  }

  const priorityBadge = {
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: '#f0f0f0',
  }

  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          padding: '16px 0px 0px 0px',
          color: '#0B3558',
        }}
      >
        Existing Tickets
      </h2>
      <div style={ticketGrid}>
        {tickets.map(ticket => (
          <div
            key={ticket.id}
            style={{
              ...ticketCard,
              borderLeft:
                ticket.priority === 'High'
                  ? '4px solid #ef4444'
                  : ticket.priority === 'Medium'
                  ? '4px solid #f59e0b'
                  : '4px solid #22c55e',
            }}
          >
            <div style={ticketHeader}>
              <h3 style={{ margin: 0 }}>{ticket.name}</h3>
              <p style={{ ...ticketInfo, margin: '0.5rem 0 0 0' }}>
                Created: {new Date(ticket.date).toLocaleDateString()}
              </p>
            </div>

            <div style={ticketStatus}>
              <label>Status:</label>
              <select
                id={`status-${ticket.id}`}
                value={ticket.status}
                onChange={e => onStatusChange(ticket.id, e.target.value)}
                style={{
                  padding: '0.25rem',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                }}
              >
                <option value='Open'>Open</option>
                <option value='In Progress'>In Progress</option>
                <option value='Closed'>Closed</option>
              </select>
            </div>

            <p
              style={{
                margin: '0.5rem 0',
                flex: 1,
                lineHeight: '1.5',
              }}
            >
              {ticket.problemDescription}
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto',
              }}
            >
              <span
                style={{
                  ...priorityBadge,
                  backgroundColor:
                    ticket.priority === 'High'
                      ? '#fef2f2'
                      : ticket.priority === 'Medium'
                      ? '#fffbeb'
                      : '#f0fdf4',
                  color:
                    ticket.priority === 'High'
                      ? '#dc2626'
                      : ticket.priority === 'Medium'
                      ? '#d97706'
                      : '#16a34a',
                }}
              >
                {ticket.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TicketList
