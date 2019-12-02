/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from "react";
import {HeaderComponent} from "../UtilsComponents/headerComponent";
import HomeComponent from "../HomePage/homeComponent";

export class ContentPage extends Component {
    render() {
        return <div className="ms_content_wrapper padder_top80">
            <HeaderComponent/>
            <HomeComponent/>
        </div>;
    }
}
