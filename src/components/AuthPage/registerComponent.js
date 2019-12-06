/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { LoginWithFB } from '../../redux/actions/authAction';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        user: state.authReducer
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginUser: (token) => {
            dispatch(LoginWithFB(token));
        }
    }
};

class RegisterComponent extends Component {
    componentClicked = ()=>{
        //do anythings
    }
    responseFacebook = (res) => {

        let {loginUser} = this.props;
        loginUser(res.accessToken);
        console.log(res.accessToken);
    }
    render() {
        return (
            <div className="ms_register_popup">
                <div id="myModal" className="modal centered-modal" role="dialog">
                    <div className="modal-dialog register_dialog">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close"/>
                            </button>
                            <div className="modal-body">
                                <div className="ms_register_img">
                                    <img src="images/register_img.png" alt="" className="img-fluid"/>
                                </div>
                                <div className="ms_register_form">
                                    <h2>Register / Sign Up</h2>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Your Name" className="form-control"/>
                                        <span className="form_icon">
                <i className="fa_icon form-user" aria-hidden="true"/>
              </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Your Email" className="form-control"/>
                                        <span className="form_icon">
                <i className="fa_icon form-envelope" aria-hidden="true"/>
              </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Enter Password" className="form-control"/>
                                        <span className="form_icon">
                <i className="fa_icon form-lock" aria-hidden="true"/>
              </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Confirm Password" className="form-control"/>
                                        <span className="form_icon">
                <i className="fa_icon form-lock" aria-hidden="true"/>
              </span>
                                    </div>
                                    <a href="#" className="ms_btn">register now</a>
                                    <p>Already Have An Account? <a href="#myModal1" data-toggle="modal"
                                                                   className="ms_modal hideCurrentModel">login here</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="myModal1" className="modal centered-modal" role="dialog">
                    <div className="modal-dialog login_dialog">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close"/>
                            </button>
                            <div className="modal-body">
                                <div className="ms_register_img">
                                    <img src="images/register_img.png" alt="" className="img-fluid"/>
                                </div>
                                <div className="ms_register_form">
                                    <h2>login / Sign in</h2>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Your Email" className="form-control"/>
                                        <span className="form_icon">
                <i className="fa_icon form-envelope" aria-hidden="true"/>
              </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Enter Password" className="form-control"/>
                                        <span className="form_icon">
                <i className="fa_icon form-lock" aria-hidden="true"/>
              </span>
                                    </div>
                                    <div className="remember_checkbox">
                                        <label>Keep me signed in
                                            <input type="checkbox"/>
                                            <span className="checkmark"/>
                                        </label>
                                    </div>
                                    <a href="profile.html" className="ms_btn">login now</a>

                                        <FacebookLogin
                                            appId="483388002507299"
                                            autoLoad={false}
                                            fields="name,email,picture"
                                            callback={this.responseFacebook}
                                            onClick={this.componentClicked}
                                            render={renderProps=>(
                                                <a className="ms_btn" style={{marginLeft: "2em", color: "white"}} onClick={renderProps.onClick}>Đăng nhập với Facebook</a>
                                            )}
                                            // icon="fa-facebook"
                                        />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
