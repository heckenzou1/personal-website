import styles from "../styles/Home.module.css";
import Image from "next/image";
import Footer from "./footer";
import Headerzada from "./header";

export default function Projetos() {
  return (
    <div className={styles.container}>
      <Headerzada />
      <div className="box">
        <div id="item"></div>
        <div id="item"></div>
        <div id="item"></div>
        <div id="item"></div>
        <div id="item"></div>
      </div>
      <Footer />
    </div>
  );
}

