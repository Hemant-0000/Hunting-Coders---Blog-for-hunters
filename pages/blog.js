import React from 'react'
import styles from '../styles/Blog.module.css'
import { useEffect } from 'react/cjs/react.development'
import { useState } from 'react/cjs/react.development'
import Link from 'next/link'


// Step 1: Collect all the files data from blogdata directory
// Step 2: Iterate through the and display them
const Blog = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    })
      .then((parsed) => {
        setBlogs(parsed)
      })
  }, [])

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>

          {blogs.map((blogItem) => {
            return <div key={blogItem.slug} className={styles.blogItems}>
              <Link passHref href={`/blogpost/${blogItem.slug}`}>
                <h3>{blogItem.title}</h3>
              </Link>
              <p className={styles.blogItemP}>{blogItem.content.substr(0, 120)}...</p>
            </div>
          })}

        </main>
      </div>
    </>
  )
}

export default Blog