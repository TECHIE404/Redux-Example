import React from 'react';
import styles from '../../styles/Home.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { decrease, increase, divide, multiply } from '../state/countReducer';

function MainPage() {

    const count=useSelector((state)=> state.counter.value);
    const dispatch = useDispatch()

  return (
    <main className={styles.main}>
        <h1 className={`${styles.title}`}>
          Welcome to <a href="https://nextjs.org">Next.js + Redux toolkit</a>
        </h1>
        <h1 className={styles.title}>
          Total Count: {count}
        </h1>

        <p className={styles.description}>
         An Example Of Redux Toolkit 
        </p>

        <div className={styles.grid}>
        
          <a  className={styles.card}>
          <button onClick={() => dispatch(increase())} style={{border:"none", background:"none"}}>
            <h2>Increase &#43;</h2>
            <p>Increase Element by one integer value.</p>
            </button>
          </a>
          
        
          <a  className={styles.card}>
          <button onClick={()=>dispatch(decrease())} style={{border:"none", background:"none"}}>
            <h2>Decrease &#8722;</h2>
            <p>Decrease Element by one integer value.</p>
            </button>
          </a>
        

          <a
            className={styles.card}
          >
          <button onClick={()=>dispatch(divide())} style={{border:"none", background:"none"}}>
            <h2>Divide &divide;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
            </button>
          </a>

          <a
            className={styles.card}
          >
          <button onClick={()=>dispatch(multiply())} style={{border:"none", background:"none"}}>
            <h2>Multiple &times;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            </button>
          </a>
          <a
            className={styles.card}
          >
            <h2>Increase By amount &rarr;</h2>
            <p>
            
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            <input type="number" placeholder="Amount"/>
          </a>
          <a
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