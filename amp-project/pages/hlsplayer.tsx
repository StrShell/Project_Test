import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import VideoPlayer from "../components/video-player";
import styles from '@/styles/hlsplayer.module.css';

axios.defaults.baseURL = "http://192.168.0.25:5000";
axios.defaults.responseType = "json"


const Hlsplayer = () => {
    axios.get('/파묘')
    .then(function (response) {
      const StaticData = JSON.parse(response.data);
    })
    return(
    // HLS 플레이어 컴포넌트
        <div className={styles.container}>
        {/* 비디오 요소 */}
            <VideoPlayer src="${staticData[0].vod_url_s3}" />
        </div>
    );
};

export default Hlsplayer;
