import React from 'react';
import styles from '../../styles/Home.module.css';

function MainPage() {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js + Redux toolkit</a>
        </h1>
        <h1 className={styles.title}>
          Total Count: 0
        </h1>

        <p className={styles.description}>
         An Example of Redux Toolkit 
        </p>

        <div className={styles.grid}>
          <a  className={styles.card}>
            <h2>Increase &#43;</h2>
            <p>Increase Element by one integer value.</p>
          </a>

          <a  className={styles.card}>
            <h2>Decrease &#8722;</h2>
            <p>Decrease Element by one integer value.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Todo List with Undo &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Shopping Cart &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Async &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Tree View &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
  )
}

export default MainPage