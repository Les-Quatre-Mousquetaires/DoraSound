import React, {Component} from "react";

class ElementOfSliderComponent extends Component {
    render() {
        return (

            <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                    <img src="images/music/r_music6.jpg" alt=""/>
                    <div className="ms_main_overlay">
                        <div className="ms_box_overlay"/>
                        <div className="ms_more_icon">
                            <img src="images/svg/more.svg" alt=""/>
                        </div>
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
        );
    }
}

export default ElementOfSliderComponent;
