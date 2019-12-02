/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from "react";

export class CategoryTiles extends Component {
    render() {
        return <div className="ms_genres_wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ms_heading">
                        <h1>Top Genres</h1>
                        <span className="veiw_all"><a href="#">view more</a></span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ms_genres_box">
                        <img src="images/genrs/img1.jpg" alt="" className="img-fluid"/>
                        <div className="ms_main_overlay">
                            <div className="ms_box_overlay"/>
                            <div className="ms_play_icon">
                                <img src="images/svg/play.svg" alt=""/>
                            </div>
                            <div className="ovrly_text_div">
                                <span className="ovrly_text1"><a href="#">romantic</a></span>
                                <span className="ovrly_text2"><a href="#">view song</a></span>
                            </div>
                        </div>
                        <div className="ms_box_overlay_on">
                            <div className="ovrly_text_div">
                                <span className="ovrly_text1"><a href="#">romantic</a></span>
                                <span className="ovrly_text2"><a href="#">view song</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ms_genres_box">
                                <img src="images/genrs/img2.jpg" alt="" className="img-fluid"/>
                                <div className="ms_main_overlay">
                                    <div className="ms_box_overlay"/>
                                    <div className="ms_play_icon">
                                        <img src="images/svg/play.svg" alt=""/>
                                    </div>
                                    <div className="ovrly_text_div">
                                        <span className="ovrly_text1"><a href="#">Classical</a></span>
                                    </div>
                                </div>
                                <div className="ms_box_overlay_on">
                                    <div className="ovrly_text_div">
                                        <span className="ovrly_text1"><a href="#">Classical</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ms_genres_box">
                                <img src="images/genrs/img3.jpg" alt="" className="img-fluid"/>
                                <div className="ms_main_overlay">
                                    <div className="ms_box_overlay"/>
                                    <div className="ms_play_icon">
                                        <img src="images/svg/play.svg" alt=""/>
                                    </div>
                                    <div className="ovrly_text_div">
                                        <span className="ovrly_text1"><a href="#">hip hop</a></span>
                                    </div>
                                </div>
                                <div className="ms_box_overlay_on">
                                    <div className="ovrly_text_div">
                                        <span className="ovrly_text1"><a href="#">hip hop</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ms_genres_box">
                                <img src="images/genrs/img5.jpg" alt="" className="img-fluid"/>
                                <div className="ms_main_overlay">
                                    <div className="ms_box_overlay"/>
                                    <div className="ms_play_icon">
                                        <img src="images/svg/play.svg" alt=""/>
                                    </div>
                                    <div className="ovrly_text_div">
                                        <span className="ovrly_text1"><a href="#">dancing</a></span>
                                    </div>
                                </div>
                                <div className="ms_box_overlay_on">
                                    <div className="ovrly_text_div">
                                        <span className="ovrly_text1"><a href="#">dancing</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ms_genres_box">
                                <img src="images/genrs/img6.jpg" alt="" className="img-fluid"/>
                                <div className="ms_main_overlay">
                                    <div className="ms_box_overlay"/>
                                    <div className="ms_play_icon">
                                        <img src="images/svg/play.svg" alt=""/>
                                    </div>
                                    <div className="ovrly_text_div">
                                        <span className="ovrly_text1"><a href="#">EDM</a></span>
                                    </div>
                                </div>
                                <div className="ms_box_overlay_on">
                                    <div className="ovrly_text_div">
                                        <span className="ovrly_text1"><a href="#">EDM</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="ms_genres_box">
                        <img src="images/genrs/img4.jpg" alt="" className="img-fluid"/>
                        <div className="ms_main_overlay">
                            <div className="ms_box_overlay"/>
                            <div className="ms_play_icon">
                                <img src="images/svg/play.svg" alt=""/>
                            </div>
                            <div className="ovrly_text_div">
                                <span className="ovrly_text1"><a href="#">rock</a></span>
                            </div>
                        </div>
                        <div className="ms_box_overlay_on">
                            <div className="ovrly_text_div">
                                <span className="ovrly_text1"><a href="#">rock</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
