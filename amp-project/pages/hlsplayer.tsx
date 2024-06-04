import axios, { HttpStatusCode } from 'axios';
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useEffect, useState } from 'react';
import VideoPlayer from "../components/video-player";
import styles from '@/styles/mainpage.module.css';

axios.defaults.baseURL = "https://test.mainep.xyz";
axios.defaults.responseType = "json"
axios.defaults.httpsAgent =  { rejectUnathorized: false };

const inter = Inter({ subsets: ["latin"] });


const Hlsplayer = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data');
                setVideoUrl(response.data[0].vod_url_s3);
                console.log(videoUrl);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // if (!videoUrl) {
    //     return <div>Loading...</div>;
    // }
    
    return(
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
          <main className={styles.mainContent}>
            <section className={styles.featured}>
              <h2>인기 콘텐츠</h2>
              {/* 인기 콘텐츠 목록 */}
              <section>
                <div className={styles.container}>
                    <VideoPlayer src={videoUrl} />
                </div>
              </section>
            </section>
          </main>
        </div>
        </main>
    );
};

export default Hlsplayer;
