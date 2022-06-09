import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Page Created by{' '}
          <b >Rahul</b>Rahul
        </a>
      </footer>
  )
}

export default Footer