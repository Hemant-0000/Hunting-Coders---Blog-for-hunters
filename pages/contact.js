import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, phone, desc)

    const data = { name, email, phone, desc };
    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
        alert("Thanks for contacting us")
        setName('')
        setEmail('')
        setPhone('')
        setDesc('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    }
    else if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name === 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name === 'desc') {
      setDesc(e.target.value)
    }
  }

  return (
    <div className={styles.main}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.op}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input type="text" value={name} onChange={handleChange} className={styles.input} id="name" name='name' aria-describedby="name" /></div>

          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input type="email" value={email} className={styles.input} onChange={handleChange} id="email" name='email' aria-describedby="email" />
            <div id="emailHelp" className={styles.input}>We will never share your email with anyone else.</div>
          </div>

          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formLabel}>Phone</label>
            <input type="number" value={phone} onChange={handleChange} className={styles.input} id="phone" name='phone' />
          </div>

          <div className={styles.mb3}>
            <label htmlFor="desc" className={styles.formLabel}>Description</label>
            <textarea value={desc} onChange={handleChange} className={styles.input} id="desc" name='desc' />
          </div>
        </div>

        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  )
}

export default Contact