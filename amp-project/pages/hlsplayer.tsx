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
                setStaticData(JSON.parse(response.data));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const data = fetchData();
    }, []);

    // if (!staticData) {
    //     return <div>Loading...</div>;
    // }

    return(
        <div className={styles.container}>
            <VideoPlayer src="${staticData[0].vod_url_s3}" />
        </div>
    );
};

export default Hlsplayer;
