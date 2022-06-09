import styles from '../styles/Home.module.css'
import Header from "../src/components/head";
import Main from "../src/components/mainPage";
import Footer from "../src/components/footer";

import {Provider} from 'react-redux';
import {store} from '../src/state/store';


export default function Home() {
  return (
    <div className="container">
      <Header/>
      <Main />
      <Footer />
    </div>
  )
}
