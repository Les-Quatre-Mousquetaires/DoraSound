/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import {BannerComponent} from "./bannerComponent";
import AlbumSliderComponent from "../UtilsComponents/albumSliderComponent";
import {WeeklyTopComponent} from "../UtilsComponents/weeklyTopComponent";
import {ArtistSliderComponent} from "../UtilsComponents/artistSliderComponent";
import {ReleaseSong} from "../UtilsComponents/releaseSong";
import {CategoryTiles} from "../UtilsComponents/categoryTiles";

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <BannerComponent/>
                <AlbumSliderComponent/>
                <WeeklyTopComponent/>
                <ArtistSliderComponent/>
                <ReleaseSong/>
                <CategoryTiles/>
            </div>
        );
    }
}

export default HomeComponent;
