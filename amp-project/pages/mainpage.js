// Next.js 프레임워크를 사용하여 React 컴포넌트를 생성합니다.
import React from 'react';

// CSS 파일을 가져와 스타일을 적용합니다.
import styles from './mainpage.module.css';

// 메인 화면 컴포넌트
function MainPage() {
  return (
    <div className={styles.container}>
      {/* 상단 네비게이션바 */}
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
        </section>
      </main>
    </div>
  );
};

export default MainPage;
