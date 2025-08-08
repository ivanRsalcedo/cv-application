import { useState } from 'react'
import '../styles/sections.css'

export default function Education() {

    const [submitted, setSubmitted] = useState({
        schoolName: '',
        fieldOfStudy: '',
        from: '',
        until: ''
    })

    const [isEditing, setIsEditing] = useState(true)

    function handleSubmit(formData) {
        const data = Object.fromEntries(formData)
        setSubmitted(data)
        setIsEditing(false)
    }

    return (
        <section className='card'>
            <h2>Education</h2>
            {isEditing ? (
                <form action={handleSubmit} className='form'>
                    <label>School Name
                        <input
                            name='schoolName'
                            type='text'
                            defaultValue={submitted.schoolName}
                        />
                    </label>
                    <label>Field of Study
                        <input
                            name='fieldOfStudy'
                            type="text"
                            defaultValue={submitted.fieldOfStudy}
                        />
                    </label>
                    <label>From
                        <input
                            name='from'
                            type='text'
                            defaultValue={submitted.from}
                        />
                    </label>
                    <label>Until
                        <input
                            name='until'
                            type='text'
                            defaultValue={submitted.until}
                        />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            )

                :
                (
                    <div className='display'>
                        <p><b>School Name:</b> {submitted.schoolName}</p>
                        <p><b>Field of Study:</b> {submitted.fieldOfStudy}</p>
                        <p><b>From:</b> {submitted.from}</p>
                        <p><b>To:</b> {submitted.until}</p>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                )
            }
        </section>
    )
}