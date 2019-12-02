/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';

class SaveComponent extends Component {
    render() {
        return (
            <div className="ms_save_modal">
                <div id="save_modal" className="modal centered-modal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close" />
                            </button>
                            <div className="modal-body">
                                <h1>Log in to start sharing your music!</h1>
                                <div className="save_modal_btn">
                                    <a href="#"><i className="fa fa-google-plus-square" aria-hidden="true" /> continue with google </a>
                                    <a href="#"><i className="fa fa-facebook-square" aria-hidden="true" /> continue with facebook</a>
                                </div>
                                <div className="ms_save_email">
                                    <h3>or use your email</h3>
                                    <div className="save_input_group">
                                        <input type="text" placeholder="Enter Your Name" className="form-control" />
                                    </div>
                                    <div className="save_input_group">
                                        <input type="password" placeholder="Enter Password" className="form-control" />
                                    </div>
                                    <button className="save_btn">Log in</button>
                                </div>
                                <div className="ms_dnt_have">
                                    <span>Dont't have an account ?</span>
                                    <a href="#" className="hideCurrentModel" data-toggle="modal" data-target="#myModal">Register Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SaveComponent;
