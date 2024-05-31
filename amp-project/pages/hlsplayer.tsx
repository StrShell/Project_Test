import axios from 'axios';
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useEffect, useRef } from 'react';
import VideoPlayer from "../components/video-player";
import styles from '@/styles/hlsplayer.module.css';

axios.defaults.baseURL = "http://192.168.0.25:5000";
axios.defaults.responseType = "json"

const inter = Inter({ subsets: ["latin"] });

const Hlsplayer = () => {
    axios.get('/파묘')
    .then(function (response) {
      const StaticData = JSON.parse(response.data);
    })
    return(
        <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
        <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
            <Link href="/">OTT 서비스</Link>
        </div>
        <ul className={styles.navbarNav}>
        </ul>
        </nav>
        <div className={styles.container}>
        // HLS 플레이어 컴포넌트
        {/* 비디오 요소 */}
            <VideoPlayer src="${staticData[0].vod_url_s3}" />
        </div>
        </div>
        </main>
    );
};

export default Hlsplayer;
