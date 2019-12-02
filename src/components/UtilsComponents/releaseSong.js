/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from "react";

export class ReleaseSong extends Component {
    render() {
        return <div className="ms_releases_wrapper">
            <div className="ms_heading">
                <h1>New Releases</h1>
                <span className="veiw_all"><a href="#">view more</a></span>
            </div>
            <div className="ms_release_slider swiper-container">
                <div className="ms_divider"/>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="ms_release_box">
                            <div className="w_top_song">
                                <span className="slider_dot"/>
                                <div className="w_tp_song_img">
                                    <img src="images/weekly/song1.jpg" alt=""/>
                                    <div className="ms_song_overlay">
                                    </div>
                                    <div className="ms_play_icon">
                                        <img src="images/svg/play.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="w_tp_song_name">
                                    <h3><a href="#">Dark Alley Acoustic</a></h3>
                                    <p>Ava Cornish</p>
                                </div>
                            </div>
                            <div className="weekly_right">
                                <span className="w_song_time">5:10</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="ms_release_box">
                            <div className="w_top_song">
                                <span className="slider_dot"/>
                                <div className="w_tp_song_img">
                                    <img src="images/weekly/song2.jpg" alt=""/>
                                    <div className="ms_song_overlay">
                                    </div>
                                    <div className="ms_play_icon">
                                        <img src="images/svg/play.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="w_tp_song_name">
                                    <h3><a href="#">Dark Alley Acoustic</a></h3>
                                    <p>Ava Cornish</p>
                                </div>
                            </div>
                            <div className="weekly_right">
                                <span className="w_song_time">5:10</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="ms_release_box">
                            <div className="w_top_song">
                                <span className="slider_dot"/>
                                <div className="w_tp_song_img">
                                    <img src="images/weekly/song3.jpg" alt=""/>
                                    <div className="ms_song_overlay">
                                    </div>
                                    <div className="ms_play_icon">
                                        <img src="images/svg/play.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="w_tp_song_name">
                                    <h3><a href="#">Dark Alley Acoustic</a></h3>
                                    <p>Ava Cornish</p>
                                </div>
                            </div>
                            <div className="weekly_right">
                                <span className="w_song_time">5:10</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="ms_release_box">
                            <div className="w_top_song">
                                <span className="slider_dot"/>
                                <div className="w_tp_song_img">
                                    <img src="images/weekly/song4.jpg" alt=""/>
                                    <div className="ms_song_overlay">
                                    </div>
                                    <div className="ms_play_icon">
                                        <img src="images/svg/play.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="w_tp_song_name">
                                    <h3><a href="#">Dark Alley Acoustic</a></h3>
                                    <p>Ava Cornish</p>
                                </div>
                            </div>
                            <div className="weekly_right">
                                <span className="w_song_time">5:10</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="ms_release_box">
                            <div className="w_top_song">
                                <span className="slider_dot"/>
                                <div className="w_tp_song_img">
                                    <img src="images/weekly/song5.jpg" alt=""/>
                                    <div className="ms_song_overlay">
                                    </div>
                                    <div className="ms_play_icon">
                                        <img src="images/svg/play.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="w_tp_song_name">
                                    <h3><a href="#">Dark Alley Acoustic</a></h3>
                                    <p>Ava Cornish</p>
                                </div>
                            </div>
                            <div className="weekly_right">
                                <span className="w_song_time">5:10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-button-next2 slider_nav_next"/>
            <div className="swiper-button-prev2 slider_nav_prev"/>
        </div>;
    }
}
