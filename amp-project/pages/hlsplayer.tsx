import React, { useEffect, useRef } from 'react';
import VideoPlayer from "../components/video-player";
import styles from './hlsplayer.module.css';

const Hlsplayer = () => {
    return(
    // HLS 플레이어 컴포넌트
        <div className={styles.container}>
        {/* 비디오 요소 */}
            <VideoPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
        </div>
    );
};

export default Hlsplayer;
