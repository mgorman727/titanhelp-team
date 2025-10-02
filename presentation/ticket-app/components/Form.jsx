import { useState } from 'react'

export default function Form() {

    function submitForm() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if (shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try again!'));
                } else {
                    resolve();
                }
            })
        })
    }

    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('typing')

    if (status === 'success') {
        return (
            <div>
                <h1>Ticket Details</h1>
                {/*<h1>Correct</h1>*/}
                <p>{answer}</p>
            </div>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        try {
            await submitForm(answer)
            setStatus('success')
        } catch (err) {
            setStatus('typing')
            setError(err)
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <h2>Fill out ticket information</h2>
            <p>Fill out the information for your ticket request</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Enter Your ticket request"
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <textarea
                    placeholder="First Name"
                />
                <textarea
                    placeholder="Last Name"
                />
                <br />
                <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
                {error !== null && <p>{error.message}</p>}
            </form>
        </>
    )
}