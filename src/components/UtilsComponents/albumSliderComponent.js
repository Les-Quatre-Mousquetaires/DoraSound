/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from "react";
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import ElementOfSliderComponent from "./elementOfSliderComponent";
import {connect} from "react-redux";
import {Get_All} from "../../redux/actions/songsAction";


class AlbumSliderComponent extends Component {

    constructor(props){
        super(props);

        let {getAllSongs} = this.props;
        getAllSongs();
    }
    params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
        }
    };
    render() {
        console.log(this.props);
        let arr = [1,2,3,4,5,6,7,8,9,10,11];
        let ttt = arr.map((item,index)=>{
            return(
                <div key={index} className="col-lg-3 col-md-6 col-xs-6">
                    <ElementOfSliderComponent/>
                </div>
            );
        });
        return <div className="ms_heading">
            <h1>Recently Played</h1>
            <span className="veiw_all"><a href="#">view more</a></span>
            <br/>
            <br/>
            <Swiper {...this.params}>
                    {ttt}
            </Swiper>
        </div>;
    }
}
const  mapStateToProps = (state) =>{
    return{
        songs:state.songsReducer
    }
};
const mapDispatchToProps=(dispatch, props)=>{
    return {
        getAllSongs: ()=>{
            dispatch(
                Get_All()
            );
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AlbumSliderComponent);
