/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import {logout} from "../../redux/actions/authAction";



class HeaderComponent extends Component {
    onclick = () => {
        let {logoutUser} = this.props;
        logoutUser();
    }
    render() {
        return <div className="ms_header">
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
                    {!this.props.user || !this.props.user.token ? 
                    <span><a href="#" className="ms_btn reg_btn" data-toggle="modal"
                       data-target="#myModal"><span>register</span></a>
                    <a href="#" className="ms_btn login_btn" data-toggle="modal"
                       data-target="#myModal1"><span>login</span></a></span> :

                    <a href="#" className="ms_btn login_btn" onClick={this.onclick}><span>logout</span></a>
                    }
                </div>
            </div>
        </div>;
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        logoutUser: () => {
            dispatch(logout());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);