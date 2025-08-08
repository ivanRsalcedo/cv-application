
import { useState } from 'react'
import '../styles/sections.css'

export default function General() {
    const [submitted, setSubmitted] = useState({
        name: '',
        email: '',
        phone: '',
    })
    const [isEditing, setIsEditing] = useState(true)

    function handleSubmit(formData) {
        const data = Object.fromEntries(formData)
        console.log(data)
        setSubmitted(data)
        setIsEditing(false)
    }

    return (
        <section className='card'>
            <h2>General</h2>

            {isEditing ? (
                <form action={handleSubmit} className='form'>
                    <label>
                        Name
                        <input
                            name='name'
                            defaultValue={submitted.name}
                        />
                    </label>

                    <label>
                        Email
                        <input
                            name='email'
                            type='email'
                            defaultValue={submitted.email}
                        />
                    </label>

                    <label>
                        Phone
                        <input
                            name='phone'
                            defaultValue={submitted.phone}
                        />
                    </label>

                    <button type='submit'>Submit</button>
                </form>
            ) : (
                <div className='display'>
                    <p><b>Name:</b> {submitted.name}</p>
                    <p><b>Email:</b> {submitted.email}</p>
                    <p><b>Phone:</b> {submitted.phone}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </section>
    )
}