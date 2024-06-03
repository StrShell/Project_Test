import axios, { HttpStatusCode } from 'axios';
import Link from 'next/link'
import { Inter } from "next/font/google";
import React, { useEffect, useState } from 'react';
import VideoPlayer from "../components/video-player";
import styles from '@/styles/hlsplayer.module.css';

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
                setVideoUrl(response.data[0].vod_s3_url);
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
        // <div className={styles.container}>
        //     <VideoPlayer src={videoUrl} />
        // </div>
        <p>{videoUrl}</p>
    );
};

export default Hlsplayer;
