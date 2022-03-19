import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'


const Navbar = () => {
    return (
        <>
            <nav className={styles.mainnav}>
                <ul>
                    <Link href='/' passHref><li>Home</li></Link>
                    <Link href='/about' passHref><li>About</li></Link>
                    <Link href='/blog' passHref><li>Blogs</li></Link>
                    <Link href='/contact' passHref><li>Contact</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar