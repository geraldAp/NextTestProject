import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          sunt porro commodi. Ratione, voluptate doloremque.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          sunt porro commodi. Ratione, voluptate doloremque.
        </p>
        <Link className={styles.btn} href="/ninjas">
          See Ninja Listings
        </Link>
      </div>
    </>
  );
}
