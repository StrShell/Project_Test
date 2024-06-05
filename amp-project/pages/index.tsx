import Head from "next/head";
import Image from "next/image";
import axios from 'axios';
import Link from 'next/link'
import { Inter } from "next/font/google";
import styles from "@/styles/mainpage.module.css";
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });
axios.defaults.baseURL = "https://gy5uzaw2c7.ap-northeast-1.awsapprunner.com";
axios.defaults.responseType = "json"

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/');
        setData(response.data.vod_name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          {/* 상단 네비게이션바 */}
          <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>
              <Link href="/">OTT 서비a스</Link>
            </div>
            <ul className={styles.navbarNav}>
              <li className={styles.navItem}>
                <Link href="/hlsplayer">영화</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/tv-shows">TV 프로그램</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/my-list">내 목록</Link>
              </li>
            </ul>
          </nav>

          {/* 메인 콘텐츠 */}
          <main className={styles.mainContent}>
            <section className={styles.hero}>
              <h1>OTT 서비스에 오신 것을 환영합니다!</h1>
              <p>다양한 영화와 TV 프로그램을 즐겨보세요.</p>
              <button className={styles.heroButton}>지금 시작하기</button>
            </section>
            <section className={styles.featured}>
              <h2>인기 콘텐츠</h2>
              {/* 인기 콘텐츠 목록 */}
              <section>
                <h2>영화</h2>
                <div>
                    <Link href="/hlsplayer">
                      <img src={data[0]} alt={data[0]} width="30" height="30" />
                      {data[0]}
                    </Link>
                </div>
              </section>
            </section>
          </main>
        </div>
      </main>
    </>
  );
}
