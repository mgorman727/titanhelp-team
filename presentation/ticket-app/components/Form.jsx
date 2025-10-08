import { useState } from 'react'

export default function Form({ onTicketCreated }) {
  function validateForm() {
    if (!firstName.trim() || firstName.length > 100) {
      return 'Name is required and must be 100 characters or less'
    }
    if (!problemDescription.trim() || problemDescription.length > 1000) {
      return 'Problem Description is required and must be 1000 characters or less'
    }
    return null
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [problemDescription, setProblemDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  // const [ticktStatus, setTicktStatus] = useState('Unknown')
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('typing')

  //   async function handleSubmit(e) {
  //     e.preventDefault()
  //     const validationError = validateForm()
  //     if (validationError) {
  //       setError({ message: validationError })
  //       return
  //     }

  //     setStatus('submitting')
  //     setError(null)

  //     const newTicket = {
  //       id: Date.now(),
  //       name: `${firstName.trim()} ${lastName.trim()}`.trim(),
  //       date: new Date().toISOString(),
  //       problemDescription: problemDescription.trim(),
  //       priority,
  //       status: 'Open', // Default
  //     }

  //     onTicketCreated(newTicket)

  //     setFirstName('')
  //     setLastName('')
  //     setProblemDescription('')
  //     setPriority('Medium')
  //     setStatus('success')
  //     setTimeout(() => setStatus('typing'), 3000)

  //     try {
  //       const response = await fetch('http://localhost:400/tickets', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({
  //           firstName: firstName,
  //           LastName: lastName,
  //           description: problemDescription,
  //           priority,
  //           status: 'Open',
  //         }),
  //       })

  //       if (!response.ok) {
  //         throw new Error(`Failed to save ticket: ${response.statusText}`)
  //       }

  //       const newTicket = {
  //         id: savedTicket._id,
  //       }

  //       setStatus('success')

  //       onTicketCreated(newTicket)

  //       setFirstName('')
  //       setLastName('')
  //       setProblemDescription('')
  //       setPriority('Medium')
  //     } catch (err) {
  //       setError({ message: err.message })
  //       setStatus('typing')
  //     }
  //   }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationError = validateForm()
    if (validationError) {
      setError({ message: validationError })
      return
    }

    setStatus('submitting')
    setError(null)

    try {
      const response = await fetch('http://localhost:4000/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          description: problemDescription,
          priority,
          status: 'Open',
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to save ticket: ${response.statusText}`)
      }

      const savedTicket = await response.json()

      const newTicket = {
        id: savedTicket._id,
        name: savedTicket.name,
        date: savedTicket.date,
        problemDescription: savedTicket.description,
        priority: savedTicket.priority,
        status: savedTicket.status,
      }

      onTicketCreated(newTicket)

      setFirstName('')
      setLastName('')
      setProblemDescription('')
      setPriority('Medium')
      setStatus('success')
      setTimeout(() => setStatus('typing'), 3000)
    } catch (err) {
      setError({ message: err.message })
      setStatus('typing')
    }
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  function handleProblemDescriptionChange(e) {
    setProblemDescription(e.target.value)
  }

  function handlePriorityChange(e) {
    setPriority(e.target.value)
  }

  const isSubmitting = status === 'submitting'
  const isInvalid =
    firstName.length > 100 ||
    lastName.length > 100 ||
    problemDescription.length > 1000

  return (
    <>
      <h2>Fill out ticket information</h2>
      <p>Fill out the information for your ticket request</p>
      <form onSubmit={handleSubmit}>
        <textarea
          type='text'
          id='firstName'
          placeholder='Enter Your First Name'
          value={firstName}
          onChange={handleFirstNameChange}
          disabled={isSubmitting}
          maxLength={100}
          required
        />
        {/*{firstName.length > 100 && <span>Max 100 characters</span>}*/}
        <textarea
          type='text'
          id='lastName'
          placeholder='Enter Your Last Name'
          value={lastName}
          onChange={handleLastNameChange}
          disabled={status === 'submitting'}
          maxLength={100}
          required
        />
        <textarea
          type='text'
          id='problemDescription'
          placeholder='Problem Description'
          value={problemDescription}
          onChange={handleProblemDescriptionChange}
          disabled={status === 'submitting'}
          maxLength={1000}
          required
        />
        <div>
          <label htmlFor='priority'>Priority:</label>
          <select
            id='priority'
            value={priority}
            onChange={handlePriorityChange}
            disabled={isSubmitting}
          >
            <option value={'High'}>High</option>
            <option value={'Medium'}>Medium</option>
            <option value={'Low'}>Low</option>
          </select>
        </div>
        <br />
        <button
          disabled={
            problemDescription.length === 0 ||
            status === 'submitting' ||
            isInvalid
          }
        >
          {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
        </button>
        {error !== null && <p>{error.message}</p>}
        {status === 'success' && (
          <p className='success'>Ticket created successfully!</p>
        )}
      </form>
    </>
  )
}
