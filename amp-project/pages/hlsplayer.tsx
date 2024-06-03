import axios from 'axios';
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useEffect, useRef } from 'react';
import VideoPlayer from "../components/video-player";
import styles from '@/styles/hlsplayer.module.css';

axios.defaults.baseURL = "https://43.202.4.22:5000";
axios.defaults.responseType = "json"

const inter = Inter({ subsets: ["latin"] });

const Hlsplayer = async () => {
    const response = await axios.get('/data')
    const StaticData = JSON.parse(response.data);
    
    return(
        <div className={styles.container}>
            <VideoPlayer src="${staticData[0].vod_url_s3}" />
        </div>
    );
};

export default Hlsplayer;
