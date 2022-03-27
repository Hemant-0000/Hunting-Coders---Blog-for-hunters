import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog)
    // const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>{blog && blog.title}</h1>
                    <hr />
                    <p>
                        {blog && blog.content}
                    </p>
                </main>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query
    let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
    let myBlog = await data.json()
  
    return {
        props: { myBlog } // will be passed to the page component as props
    }
}

export default Slug