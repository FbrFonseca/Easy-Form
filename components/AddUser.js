"use client"
import React, { useState } from 'react'

const AddUser = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    
    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("surname", surname);
        formData.append("email", email);

        try {
            const response = await fetch("../../easy-form-backend/next-php-insert.php", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
            } else {
                console.error("Failed to insert data.");
            }
        } catch (error) {
            console.error("Network error", error);
        }

    }

  return (
    <div className=''>

       <form method='POST' className='' onSubmit={handleSubmit}>
        <div>
            <h3>Name</h3>
            <input className='text-slate-950' type='text' name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
            
        <div>
            <h3>Surname</h3>
            <input type='text' name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
        </div>

        <div>
            <h3>Email</h3>
            <input type='text' name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type='submit'>Add</button>
       </form>

    </div>
  )
}

export default AddUser