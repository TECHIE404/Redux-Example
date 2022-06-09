import styles from '../styles/Home.module.css'
import Header from "../src/components/head";
import Main from "../src/components/mainPage";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Main />
      <Footer />
    </div>
  )
}
