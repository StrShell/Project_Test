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
    const [staticData, setStaticData] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data');
                setStaticData(response.data);
                const video = document.getElementsByTagName('VideoPlayer');
                video.item = response.data[0].vod_s3_url;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // if (!staticData) {
    //     return <div>Loading...</div>;
    // }
    
    return(
        <script>
        <div className={styles.container}>
            <VideoPlayer src />
        </div>
        </script>
    );
};

export default Hlsplayer;
