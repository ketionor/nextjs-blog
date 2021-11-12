import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}

export default Home;
