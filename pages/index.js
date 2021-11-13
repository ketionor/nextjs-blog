import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <main className={styles.container}>
      <Hero />
    </main>
  );
}

export default Home;
