import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
  // CSS 파일을 가져와 스타일을 적용합니다.
import styles from '@/styles/mainpage.module.css';
const inter = Inter({ subsets: ["latin"] });

const Index = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <a href="/">OTT 서비스</a>
        </div>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <a href="/movies">영화</a>
          </li>
          <li className={styles.navItem}>
            <a href="/tv-shows">TV 프로그램</a>
          </li>
          <li className={styles.navItem}>
            <a href="/my-list">내 목록</a>
          </li>
        </ul>
      </nav>

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>OTT 서비스에 오신 것을 환영합니다!</h1>
          <p>다양한 영화와 TV 프로그램을 즐겨보세요.</p>
          <button className={styles.heroButton}>지금 시작하기</button>
        </section>
        <section className={styles.featured}>
          <h2>인기 콘텐츠</h2>
        </section>
      </main>
    </div>
  );
};

export default Index;
