import React, { useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';


// Step 1: Collect all the files data from blogdata directory
// Step 2: Iterate through the and display them
const Blog = (props) => {
  console.log(props)

  const [blogs, setBlogs] = useState(props.allBlogs)

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
              <Link passHref href={`/blogpost/${blogItem.slug}`}><button className={styles.btn}>Read More</button></Link>
            </div>
          })}

        </main>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let myFile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  return {
    props: { allBlogs } // will be passed to the page component as props
  }
}

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allBlogs = await data.json()

//   return {
//     props: {allBlogs} // will be passed to the page component as props
//   }
// }


export default Blog