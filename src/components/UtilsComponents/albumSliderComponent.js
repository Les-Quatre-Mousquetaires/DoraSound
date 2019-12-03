/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from "react";
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import ElementOfSliderComponent from "./elementOfSliderComponent";


class AlbumSliderComponent extends Component {

    params = {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    };
    render() {
        let arr = [1,2,3,4,5,6,7,8,9,10,11];
        let ttt = arr.map((item,index)=>{
            return(
                <div key={index}>
                    <ElementOfSliderComponent/>
                </div>
            );
        });
        return <div className="ms_heading">
            <h1>Recently Played</h1>
            <span className="veiw_all"><a href="#">view more</a></span>
            <Swiper {...this.params}>
                    {ttt}

            </Swiper>
        </div>;
    }
}

export default AlbumSliderComponent;
