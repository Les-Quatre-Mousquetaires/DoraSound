/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';

class LoaderComponent extends Component {
    render() {
        return (
            <div className="ms_loader">
                <div className="wrap">
                    <img src="images/loader.gif" alt=""/>
                </div>
            </div>
        );
    }
}

export default LoaderComponent;
