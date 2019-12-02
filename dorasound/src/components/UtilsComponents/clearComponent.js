/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';

class ClearComponent extends Component {
    render() {
        return (
            <div className="ms_clear_modal">
                <div id="clear_modal" className="modal centered-modal" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close"></i>
                            </button>
                            <div className="modal-body">
                                <h1>Are you sure you want to clear your queue?</h1>
                                <div className="clr_modal_btn">
                                    <a href="#">clear all</a>
                                    <a href="#">cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClearComponent;
