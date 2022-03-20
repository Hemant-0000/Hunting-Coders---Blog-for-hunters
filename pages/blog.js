import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'


const Blog = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>

          <div className={styles.blogItem}>
            <Link passHref href={'/blogpost/learn-javascript'}>
              <h3>How to learn JavaScript in 2022 ?</h3>
            </Link>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam reiciendis distinctio explicabo...</p>
          </div>

          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022 ?</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam reiciendis distinctio explicabo...</p>
          </div>

          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2022 ?</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam reiciendis distinctio explicabo...</p>
          </div>

        </main>
      </div>
    </>
  )
}

export default Blog