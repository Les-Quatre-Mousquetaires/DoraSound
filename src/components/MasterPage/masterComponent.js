/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';

class MasterComponent extends Component {
    render() {
        return (
            <div className="ms_main_wrapper">
                <div className="ms_sidemenu_wrapper">
                    <div className="ms_nav_close">
                        <i className="fa fa-angle-right" aria-hidden="true"/>
                    </div>
                    <div className="ms_sidemenu_inner">
                        <div className="ms_logo_inner">
                            <div className="ms_logo">
                                <a href="index-2.html"><img src="images/logo.png" alt="" className="img-fluid"/></a>
                            </div>
                            <div className="ms_logo_open">
                                <a href="index-2.html"><img src="images/open_logo.png" alt="" className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="ms_nav_wrapper">
                            <ul>
                                <li><a href="index-2.html" className="active" title="Discover">
                    <span className="nav_icon">
                      <span className="icon icon_discover"/>
                    </span>
                                    <span className="nav_text">
                      discover
                    </span>
                                </a>
                                </li>
                                <li><a href="album.html" title="Albums">
                    <span className="nav_icon">
                      <span className="icon icon_albums"/>
                    </span>
                                    <span className="nav_text">
                      albums
                    </span>
                                </a>
                                </li>
                                <li><a href="artist.html" title="Artists">
                    <span className="nav_icon">
                      <span className="icon icon_artists"/>
                    </span>
                                    <span className="nav_text">
                      artists
                    </span>
                                </a>
                                </li>
                                <li><a href="genres.html" title="Genres">
                    <span className="nav_icon">
                      <span className="icon icon_genres"/>
                    </span>
                                    <span className="nav_text">
                      genres
                    </span>
                                </a>
                                </li>
                                <li><a href="top_track.html" title="Top Tracks">
                    <span className="nav_icon">
                      <span className="icon icon_tracks"/>
                    </span>
                                    <span className="nav_text">
                      top tracks
                    </span>
                                </a>
                                </li>
                                <li><a href="free_music.html" title="Free Music">
                    <span className="nav_icon">
                      <span className="icon icon_music"/>
                    </span>
                                    <span className="nav_text">
                      free music
                    </span>
                                </a>
                                </li>
                                <li><a href="stations.html" title="Stations">
                    <span className="nav_icon">
                      <span className="icon icon_station"/>
                    </span>
                                    <span className="nav_text">
                      stations
                    </span>
                                </a>
                                </li>
                            </ul>
                            <ul className="nav_downloads">
                                <li><a href="download.html" title="Downloads">
                    <span className="nav_icon">
                      <span className="icon icon_download"/>
                    </span>
                                    <span className="nav_text">
                      downloads
                    </span>
                                </a>
                                </li>
                                <li><a href="purchase.html" title="Purchased">
                    <span className="nav_icon">
                      <span className="icon icon_purchased"/>
                    </span>
                                    <span className="nav_text">
                      purchased
                    </span>
                                </a>
                                </li>
                                <li><a href="favourite.html" title="Favourites">
                    <span className="nav_icon">
                      <span className="icon icon_favourite"/>
                    </span>
                                    <span className="nav_text">
                      favourites
                    </span>
                                </a>
                                </li>
                                <li><a href="history.html" title="History">
                    <span className="nav_icon">
                      <span className="icon icon_history"/>
                    </span>
                                    <span className="nav_text">
                      history
                    </span>
                                </a>
                                </li>
                            </ul>
                            <ul className="nav_playlist">
                                <li><a href="feature_playlist.html" title="Featured Playlist">
                    <span className="nav_icon">
                      <span className="icon icon_fe_playlist"/>
                    </span>
                                    <span className="nav_text">
                      featured playlist
                    </span>
                                </a>
                                </li>
                                <li><a href="add_playlist.html" title="Create Playlist">
                    <span className="nav_icon">
                      <span className="icon icon_c_playlist"/>
                    </span>
                                    <span className="nav_text">
                      create playlist
                    </span>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ms_content_wrapper padder_top80">
                    <div className="ms_header">
                        <div className="ms_top_left">
                            <div className="ms_top_search">
                                <input type="text" className="form-control" placeholder="Search Music Here.."/>
                                <span className="search_icon">
                  <img src="images/svg/search.svg" alt=""/>
                </span>
                            </div>
                            <div className="ms_top_trend">
                                <span><a href="#" className="ms_color">Trending Songs :</a></span> <span
                                className="top_marquee"><a href="#">Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8 More)</a></span>
                            </div>
                        </div>
                        <div className="ms_top_right">
                            <div className="ms_top_lang">
                            <span data-toggle="modal" data-target="#lang_modal">languages <img src="images/svg/lang.svg"
                                                                                               alt=""/></span>
                            </div>
                            <div className="ms_top_btn">
                                <a href="#" className="ms_btn reg_btn" data-toggle="modal"
                                   data-target="#myModal"><span>register</span></a>
                                <a href="#" className="ms_btn login_btn" data-toggle="modal"
                                   data-target="#myModal1"><span>login</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="ms-banner">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="ms_banner_img">
                                        <img src="images/banner.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="ms_banner_text">
                                        <h1>This Month’s</h1>
                                        <h1 className="ms_color">Record Breaking Albums !</h1>
                                        <p>Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley, One More Of
                                            A Stranger, Endless<br/> Things, The Heartbeat Stops, Walking Promises, Desired
                                            Games and many more...</p>
                                        <div className="ms_banner_btn">
                                            <a href="#" className="ms_btn">Listen Now</a>
                                            <a href="#" className="ms_btn">Add To Queue</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms_rcnt_slider">
                        <div className="ms_heading">
                            <h1>Recently Played</h1>
                            <span className="veiw_all"><a href="#">view more</a></span>
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music1.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dream Your Moments (Duet)</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music2.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Until I Met You</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music3.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Gimme Some Courage</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music4.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music5.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Walking Promises</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music6.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Desired Games</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music1.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dream Your Moments (Duet)</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music2.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Until I Met You</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music3.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Gimme Some Courage</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/music/r_music4.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next slider_nav_next"/>
                        <div className="swiper-button-prev slider_nav_prev"/>
                    </div>
                    <div className="ms_weekly_wrapper">
                        <div className="ms_weekly_inner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ms_heading">
                                        <h1>weekly top 15</h1>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 padding_right40">
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        01
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song1.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Until I Met You</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        02
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song2.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Walking Promises</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        03
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song3.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Gimme Some Courage</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        04
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song4.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Desired Games</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        05
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song5.jpg" alt="" className="img-fluid"/>
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
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 padding_right40">
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        06
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song6.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Walking Promises</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        07
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song7.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Endless Things</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box ms_active_play">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        08
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song8.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <div className="ms_bars">
                                                            <div className="bar"/>
                                                            <div className="bar"/>
                                                            <div className="bar"/>
                                                            <div className="bar"/>
                                                            <div className="bar"/>
                                                            <div className="bar"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Dream Your Moments</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        09
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song9.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Until I Met You</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        10
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song5.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Gimme Some Courage</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        11
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song2.jpg" alt="" className="img-fluid"/>
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
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        12
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song11.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">The Heartbeat Stops</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        13
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song12.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">One More Stranger</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        14
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song13.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Walking Promises</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"/>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                      <span className="w_top_no">
                        15
                      </span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song14.jpg" alt="" className="img-fluid"/>
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><a href="#">Endless Things</a></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other={1}>
                        <img src="images/svg/more.svg" alt=""/>
                      </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_queue"/></span>Add To Queue</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_dwn"/></span>Download Now</a></li>
                                            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"/></span>Add
                                                To Playlist</a></li>
                                            <li><a href="#"><span className="opt_icon"><span
                                                className="icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms_featured_slider">
                        <div className="ms_heading">
                            <h1>Featured Artists</h1>
                            <span className="veiw_all"><a href="#">view more</a></span>
                        </div>
                        <div className="ms_feature_slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song1.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Best Of Ava Cornish</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song2.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Until I Met You</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song3.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Gimme Some Courage</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song4.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song5.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Walking Promises</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song6.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Desired Games</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song1.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dream Your Moments (Duet)</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song2.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Until I Met You</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song3.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Gimme Some Courage</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song4.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next1 slider_nav_next"/>
                        <div className="swiper-button-prev1 slider_nav_prev"/>
                    </div>
                    <div className="ms_advr_wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <a href="#"><img src="images/adv.jpg" alt="" className="img-fluid"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms_releases_wrapper">
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
                    </div>
                    <div className="ms_fea_album_slider">
                        <div className="ms_heading">
                            <h1>Featured Albums</h1>
                            <span className="veiw_all"><a href="#">view more</a></span>
                        </div>
                        <div className="ms_album_slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album1.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Bloodlust</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album2.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Time flies</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album3.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dark matters</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album4.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Eye to eye</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album5.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Cloud nine</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album6.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Cobweb of lies</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album1.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Bloodlust</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album2.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Time flies</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album3.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dark matters</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/album/album4.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Eye to eye</a></h3>
                                            <p>Ava Cornish &amp; Brian Hill</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next3 slider_nav_next"/>
                        <div className="swiper-button-prev3 slider_nav_prev"/>
                    </div>
                    <div className="ms_genres_wrapper">
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
                    </div>
                    <div className="ms_advr_wrapper ms_advr2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <a href="#"><img src="images/adv1.jpg" alt="" className="img-fluid"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms_radio_wrapper">
                        <div className="ms_heading">
                            <h1>Live Radio</h1>
                            <span className="veiw_all"><a href="#">view more</a></span>
                        </div>
                        <div className="ms_radio_slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img1.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Top Trendings</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img2.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">New Romantic Charts</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img3.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dance Beats - Hip Hops</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img4.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Workout Time</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img5.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Best Classics Of All Time</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img6.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Heart Broken - Soul Music</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img1.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dream Your Moments (Duet)</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img2.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Until I Met You</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img3.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Gimme Some Courage</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img4.jpg" alt=""/>
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"/>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt=""/>
                                                </div>
                                                <ul className="more_option">
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_fav"/></span>Add To Favourites</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_queue"/></span>Add To Queue</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_dwn"/></span>Download Now</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_playlst"/></span>Add To Playlist</a></li>
                                                    <li><a href="#"><span className="opt_icon"><span
                                                        className="icon icon_share"/></span>Share</a></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next4 slider_nav_next"/>
                        <div className="swiper-button-prev4 slider_nav_prev"/>
                    </div>
                </div>
                <div className="ms_footer_wrapper">
                    <div className="ms_footer_logo">
                        <a href="index-2.html"><img src="images/open_logo.png" alt=""/></a>
                    </div>
                    <div className="ms_footer_inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer_box">
                                    <h1 className="footer_title">miraculous music station</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure
                                        dolor.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer_box footer_app">
                                    <h1 className="footer_title">Download our App</h1>
                                    <p>Go Mobile with our app.<br/> Listen to your favourite songs at just one click.
                                        Download Now !</p>
                                    <a href="#" className="foo_app_btn"><img src="images/google_play.jpg" alt=""
                                                                             className="img-fluid"/></a>
                                    <a href="#" className="foo_app_btn"><img src="images/app_store.jpg" alt=""
                                                                             className="img-fluid"/></a>
                                    <a href="#" className="foo_app_btn"><img src="images/windows.jpg" alt=""
                                                                             className="img-fluid"/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer_box footer_subscribe">
                                    <h1 className="footer_title">subscribe</h1>
                                    <p>Subscribe to our newsletter and get latest updates and offers.</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter Your Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter Your Email"/>
                                        </div>
                                        <div className="form-group">
                                            <a href="#" className="ms_btn">sign me up</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer_box footer_contacts">
                                    <h1 className="footer_title">contact us</h1>
                                    <ul className="foo_con_info">
                                        <li>
                                            <div className="foo_con_icon">
                                                <img src="images/svg/phone.svg" alt=""/>
                                            </div>
                                            <div className="foo_con_data">
                                                <span className="con-title">Call us :</span>
                                                <span>(+1) 202-555-0176, (+1) 2025-5501</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="foo_con_icon">
                                                <img src="images/svg/message.svg" alt=""/>
                                            </div>
                                            <div className="foo_con_data">
                                                <span className="con-title">email us :</span>
                                                <span><a href="#">demo@mail.com </a>, <a href="#">dummy@mail.com</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="foo_con_icon">
                                                <img src="images/svg/add.svg" alt=""/>
                                            </div>
                                            <div className="foo_con_data">
                                                <span className="con-title">walk in :</span>
                                                <span>598 Old House Drive, London</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="foo_sharing">
                                        <div className="share_title">follow us :</div>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="ms_copyright">
                            <div className="footer_border"/>
                            <p>Copyright © 2018 <a href="#">The Miraculous Music Template</a>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
                <div className="ms_player_wrapper">
                    <div className="ms_player_close">
                        <i className="fa fa-angle-up" aria-hidden="true"/>
                    </div>
                    <div className="player_mid">
                        <div className="audio-player">
                            <div id="jquery_jplayer_1" className="jp-jplayer"/>
                            <div id="jp_container_1" className="jp-audio" role="application" aria-label="media player">
                                <div className="player_left">
                                    <div className="ms_play_song">
                                        <div className="play_song_name">
                                            <a href="#" id="playlist-text">
                                                <div className="jp-now-playing flex-item">
                                                    <div className="jp-track-name"/>
                                                    <div className="jp-artist-name"/>
                                                </div>
                                            </a></div>
                                        <a href="#" id="playlist-text">
                                        </a></div>
                                    <a href="#" id="playlist-text">
                                    </a>
                                    <div className="play_song_options"><a href="#" id="playlist-text">
                                    </a>
                                        <ul><a href="#" id="playlist-text">
                                        </a>
                                            <li><a href="#" id="playlist-text"/><a href="#"><span
                                                className="song_optn_icon"><i className="ms_icon icon_download"/></span>download
                                                now</a></li>
                                            <li><a href="#"><span className="song_optn_icon"><i
                                                className="ms_icon icon_fav"/></span>Add To Favourites</a></li>
                                            <li><a href="#"><span className="song_optn_icon"><i
                                                className="ms_icon icon_playlist"/></span>Add To Playlist</a></li>
                                            <li><a href="#"><span className="song_optn_icon"><i
                                                className="ms_icon icon_share"/></span>Share</a></li>
                                        </ul>
                                    </div>
                                    <span className="play-left-arrow"><i className="fa fa-angle-right" aria-hidden="true"/></span>
                                </div>
                                <div className="jp_queue_wrapper">
                                <span className="que_text" id="myPlaylistQueue"><i className="fa fa-angle-up"
                                                                                   aria-hidden="true"/> queue</span>
                                    <div id="playlist-wrap" className="jp-playlist">
                                        <div className="jp_queue_cls"><i className="fa fa-times" aria-hidden="true"/></div>
                                        <h2>queue</h2>
                                        <div className="jp_queue_list_inner">
                                            <ul>
                                                <li>&nbsp;</li>
                                            </ul>
                                        </div>
                                        <div className="jp_queue_btn">
                                            <a href="#" className="ms_clear" data-toggle="modal"
                                               data-target="#clear_modal">clear</a>
                                            <a href="clear_modal.html" className="ms_save" data-toggle="modal"
                                               data-target="#save_modal">save</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="jp-type-playlist">
                                    <div className="jp-gui jp-interface flex-wrap">
                                        <div className="jp-controls flex-item">
                                            <button className="jp-previous" tabIndex={0}>
                                                <i className="ms_play_control"/>
                                            </button>
                                            <button className="jp-play" tabIndex={0}>
                                                <i className="ms_play_control"/>
                                            </button>
                                            <button className="jp-next" tabIndex={0}>
                                                <i className="ms_play_control"/>
                                            </button>
                                        </div>
                                        <div className="jp-progress-container flex-item">
                                            <div className="jp-time-holder">
                                            <span className="jp-current-time" role="timer"
                                                  aria-label="time">&nbsp;</span>
                                                <span className="jp-duration" role="timer"
                                                      aria-label="duration">&nbsp;</span>
                                            </div>
                                            <div className="jp-progress">
                                                <div className="jp-seek-bar">
                                                    <div className="jp-play-bar">
                                                        <div className="bullet">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jp-volume-controls flex-item">
                                            <div className="widget knob-container">
                                                <div className="knob-wrapper-outer">
                                                    <div className="knob-wrapper">
                                                        <div className="knob-mask">
                                                            <div className="knob d3"><span/></div>
                                                            <div className="handle"/>
                                                            <div className="round">
                                                                <img src="images/svg/volume.svg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jp-toggles flex-item">
                                            <button className="jp-shuffle" tabIndex={0} title="Shuffle">
                                                <i className="ms_play_control"/></button>
                                            <button className="jp-repeat" tabIndex={0} title="Repeat"><i
                                                className="ms_play_control"/></button>
                                        </div>
                                        <div className="jp_quality_optn custom_select">
                                            <select>
                                                <option>quality</option>
                                                <option value={1}>HD</option>
                                                <option value={2}>High</option>
                                                <option value={3}>medium</option>
                                                <option value={4}>low</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MasterComponent;
