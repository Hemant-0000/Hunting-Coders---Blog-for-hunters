import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = () => {
    const [blog, setBlog] = useState()
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return 
        const { slug } = router.query
        fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlog(parsed)
            })
    }, [router.isReady])

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

export default Slug