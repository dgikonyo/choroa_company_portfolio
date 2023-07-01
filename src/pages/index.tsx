import HomePage from "@/pages/HomePage";
import styles from "../styles/style.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
