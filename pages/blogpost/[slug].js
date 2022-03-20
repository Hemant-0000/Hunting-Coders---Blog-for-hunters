import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'


// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = () => {
    const router = useRouter();
    const { slug } = router.query
    return (
        <>
            <div className={ styles.container }>
                <main className={ styles.main }>
                <h1>Title of the page {slug} </h1>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, dolorum enim, corporis necessitatibus doloremque eveniet maiores distinctio, excepturi soluta beatae animi autem suscipit.
                    </p>
                </main>
            </div>
        </>
    )
}

export default Slug