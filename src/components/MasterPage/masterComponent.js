/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import PlayerComponent from "../UtilsComponents/playerComponent";
import {SideMenuComponent} from "../SideMenuComponent/sideMenuComponent";
import {ContentPage} from "../ContentPage/contentPage";
import {FooterComponent} from "../FooterComponent/footerComponent";

class MasterComponent extends Component {
    render() {
        return (
            <div className="ms_main_wrapper">
                <SideMenuComponent/>
                <ContentPage/>
                <FooterComponent/>
                <PlayerComponent/>
            </div>
        );
    }
}

export default MasterComponent;
