import axios, { HttpStatusCode } from 'axios';
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useEffect, useState } from 'react';
import VideoPlayer from "../components/video-player";
import styles from '@/styles/mainpage.module.css';
import Head from 'next/head';

axios.defaults.baseURL = "https://peij7sabwv.ap-northeast-1.awsapprunner.com";
axios.defaults.responseType = "json"
axios.defaults.httpsAgent =  { rejectUnathorized: false };

const inter = Inter({ subsets: ["latin"] });


const Hlsplayer = () => {
    const [videoUrl, setVideoUrl] = useState('');
    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('/nol1');
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
        <title>놀면 뭐하니 1화</title>
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
                    <VideoPlayer src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/enter/vod/nol1/HLS/nol1_1280.m3u8' />
                </div>
              </section>
            </section>
          </main>
          <main className={styles.mainContent}>
              <section className={styles.featured}>
                <section className={styles.videosync}>
                  <div>
                    <Link href="/nol1">
                    <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/enter/vod/nol1/THUMB/nol1.0000000.jpg' alt="2화" width="240" height="135" />
                      <p>1화</p>
                    </Link>
                    <Link href="/nol2">
                    <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/enter/vod/nol2/THUMB/nol2.0000000.jpg' alt="3화" width="240" height="135" />
                      <p>2화</p>
                    </Link>
                    <Link href="/nol3">
                    <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/enter/vod/nol3/THUMB/nol3.0000000.jpg' alt="4화" width="240" height="135" />
                        <p>3화</p>
                    </Link>
                  </div>
                  <div>
                    <Link href="/nol4">
                    <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/enter/vod/nol4/THUMB/nol4.0000000.jpg' alt="5화" width="240" height="135" />
                      <p>4화</p>
                    </Link>
                    <Link href="/nol1">
                    <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/enter/vod/nol1/THUMB/nol1.0000000.jpg' alt="6화" width="240" height="135" />
                      <p>5화</p>
                    </Link>
                    <Link href="/nol2">
                    <img src='https://vodasiabuk.s3.ap-northeast-2.amazonaws.com/enter/vod/nol2/THUMB/nol2.0000000.jpg' alt="2화" width="240" height="135" />
                      <p>6화</p>
                    </Link>
                  </div>
                </section>
              </section>
            </main>
        </div>
        </main>
    );
};

export default Hlsplayer;
