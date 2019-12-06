/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { LoginWithFB, NormalLogin } from '../../redux/actions/authAction';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        user: state.authReducer
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginUserFB: (token) => {
            dispatch(LoginWithFB(token));
        },
        loginUser: (user) => {
            dispatch(NormalLogin(user));
        }
    }
};

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = async (event) => {
        event.preventDefault();
        let {email, password} = this.state;
        let user = {
            email, password
        };
        let {loginUser} = this.props;
        loginUser(user);
    };

    componentClicked = ()=>{
        //do anythings
    }
    responseFacebook = (res) => {

        let {loginUserFB} = this.props;
        loginUserFB(res.accessToken);
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
                                        <input type="text" placeholder="Enter Your Email" name="email"
                                         className="form-control"
                                         onChange={this.onChange}/>
                                        <span className="form_icon">
                <i className="fa_icon form-envelope" aria-hidden="true"/>
              </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Enter Password" name="password" 
                                        className="form-control"
                                        onChange={this.onChange}/>
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
                                        <input type="text" placeholder="Enter Your Email" className="form-control" name="email" onChange={this.onChange}/>
                                        <span className="form_icon">
                <i className="fa_icon form-envelope" aria-hidden="true"/>
              </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Enter Password" className="form-control"  name="password" onChange={this.onChange}/>
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
                                    <a href="profile.html" className="ms_btn" onClick={this.onSubmit}>login now</a>

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
