import { useState } from 'react'
import '../styles/sections.css'

export default function Experience() {

    const [submitted, setSubmitted] = useState({
        companyName: '',
        position: '',
        duties: '',
        from: '',
        until: '',
    })

    const [isEditing, setIsEditing] = useState(true)

    function handleSubmit(formData) {
        const data = Object.fromEntries(formData)
        setSubmitted(data)
        setIsEditing(false)
    }

    return (
        <section className='card'>
            <h2>Work Experience</h2>

            {isEditing ? (
                <form action={handleSubmit} className='form'>
                    <label>Company Name
                        <input
                            type="text"
                            name="companyName"
                            defaultValue={submitted.companyName}
                        />
                    </label>

                    <label>Position
                        <input
                            type="text"
                            name="position"
                            defaultValue={submitted.position}
                        />
                    </label>

                    <label>Duties
                        <textarea
                            name="duties"
                            rows="3"
                            defaultValue={submitted.duties}
                        />
                    </label>

                    <label>From
                        <input
                            type="month"
                            name="from"
                            defaultValue={submitted.from}
                        />
                    </label>

                    <label>Until
                        <input
                            type="month"
                            name="until"
                            defaultValue={submitted.until}
                        />
                    </label>

                    <button type='submit'>Submit</button>
                </form>
            )

                : (
                    <div className="display">
                        <p><b>Company Name:</b> {submitted.companyName}</p>
                        <p><b>Position:</b> {submitted.position}</p>
                        <p><b>Duties:</b> {submitted.duties}</p>
                        <p><b>From:</b> {submitted.from}</p>
                        <p><b>To:</b> {submitted.until}</p>

                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                )

            }
        </section >
    )
}