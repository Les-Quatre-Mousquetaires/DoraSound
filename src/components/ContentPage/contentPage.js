/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from "react";
import HomeComponent from "../HomePage/homeComponent";
import routerRendering from "../../commons/routerRendering";
import homeContentRoutes from "../../routers/homeContentRoutes";

export class ContentPage extends Component {
    render() {
        return <div className="ms_content_wrapper padder_top80">
            {routerRendering(homeContentRoutes, true)}
        </div>;
    }
}
