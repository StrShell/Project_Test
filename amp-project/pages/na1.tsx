import axios, { HttpStatusCode } from 'axios';
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useEffect, useState } from 'react';
import VideoPlayer from "../components/video-player";
import styles from '@/styles/mainpage.module.css';

axios.defaults.baseURL = "https://peij7sabwv.ap-northeast-1.awsapprunner.com";
axios.defaults.responseType = "json"
axios.defaults.httpsAgent =  { rejectUnathorized: false };

const inter = Inter({ subsets: ["latin"] });


const Hlsplayer = () => {
    const [videoUrl, setVideoUrl] = useState('');
    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('/na1');
    //             setVideoUrl(response.data[0].vod_url_s3);
                
    //             console.log(videoUrl);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // if (!videoUrl) {
    //     return <div>Loading...</div>;
    // }
    
    return(
        <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          {/* 상단 네비게이션바 */}
          <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>
              <Link href="/">OTT 서비스</Link>
            </div>
          </nav>
          <main className={styles.mainContent}>
            <section className={styles.featured}>
              <h2>인기 콘텐츠</h2>
              {/* 인기 콘텐츠 목록 */}
              <section>
                <div className={styles.player}>
                    <VideoPlayer src={videoUrl[0]} />
                </div>
              </section>
            </section>
          </main>
          <main className={styles.mainContent}>
              <section className={styles.featured}>
                <div>
                  <Link href="/na2">
                  <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/movie/vod/pamyo3/THUMB/pamyo3.0000000.jpg' alt="2화" width="192" height="108" />
                    2화
                  </Link>
                  <Link href="/na3">
                  <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/movie/vod/pamyo3/THUMB/pamyo3.0000000.jpg' alt="3화" width="192" height="108" />
                    3화
                  </Link>
                </div>
                <div>
                  <Link href="/na4">
                  <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/movie/vod/pamyo3/THUMB/pamyo3.0000000.jpg' alt="4화" width="192" height="108" />
                    4화
                  </Link>
                  <Link href="/na5">
                  <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/movie/vod/pamyo3/THUMB/pamyo3.0000000.jpg' alt="5화" width="192" height="108" />
                    5화
                  </Link>
                </div>
                <div>
                  <Link href="/na6">
                  <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/movie/vod/pamyo3/THUMB/pamyo3.0000000.jpg' alt="6화" width="192" height="108" />
                    6화
                  </Link>
                </div>
              </section>
            </main>
        </div>
        </main>
    );
};

export default Hlsplayer;
