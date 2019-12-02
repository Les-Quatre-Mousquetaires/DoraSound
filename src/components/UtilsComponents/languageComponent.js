/*
 * Created by @tranphuquy19 on 03/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';

class LanguageComponent extends Component {
    render() {
        return (
            <div className="ms_lang_popup">
                <div id="lang_modal" className="modal  centered-modal" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close"/>
                            </button>
                            <div className="modal-body">
                                <h1>language selection</h1>
                                <p>Please select the language(s) of the music you listen to.</p>
                                <ul className="lang_list">
                                    <li>
                                        <label className="lang_check_label">
                                            English
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            hindi
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            punjabi
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            French
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            German
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Spanish
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Chinese
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Japanese
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Arabic
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Italian
                                            <input type="checkbox" name="check"/>
                                            <span className="label-text"/>
                                        </label>
                                    </li>
                                </ul>
                                <div className="ms_lang_btn">
                                    <a href="#" className="ms_btn">apply</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LanguageComponent;
