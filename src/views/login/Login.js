import React, {Component} from "react";
import {Input, Icon, Button, Checkbox, Form} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import DocumentTitle from 'react-document-title';
import getLabel from '../../labels/labels';

import './Login.css';
import LabelByLang from "../../components/common/LabelByLang";
import {GlobalLanguage} from "../../App";
import * as Globals from "../../GlobalConfig";

class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pass: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event, {name, value}) => {
        this.setState({
            [name]: value
        });
    };

    handleSubmit = () => {
        this._resetForm();
    };

    _resetForm = () => {
        this.setState({id: '', pass: ''})
    };

    _feedbackIcon = () => {
        const numberOfChars = this.state.in1.length;
        if (numberOfChars > 6) {
            if (numberOfChars > 12) {
                return this._errorIcon()
            } else if (numberOfChars < 13) {
                return this._checkMarkIcon()
            }
        } else {
            return null
        }
    };
    _checkMarkIcon = () => {
        return (
            <Icon
                color='green'
                name='check'
                size='small'
            />
        );
    };
    _errorIcon = () => {
        return (
            <Icon
                color='red'
                name='close'
                size='small'
            />
        );
    };

    _getInputLabel = () => {
        console.log('<LabelByLang string={\'id\'}/>', <LabelByLang string={'id'}/>);
        return (
            <LabelByLang string={'id'}/>
        );
    };

    render() {
        return (
            <GlobalLanguage.Consumer>
                {lang => [
                    <div key={'LoginView'} className='formContainer'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field required>
                                <label>{getLabel(lang, 'id')}</label>
                                <Input
                                    name='id'
                                    label={getLabel(lang, 'id')} labelPosition='left'
                                    // icon={this._feedbackIcon()} iconPosition='right'
                                    value={this.state.id}
                                    placeholder='User ID Here...'
                                    onChange={this.handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label>{getLabel(lang, 'password')}</label>
                                <Input
                                    name='pass'
                                    label={getLabel(lang, 'password')} labelPosition='left'
                                    // icon={this._feedbackIcon()} iconPosition='right'
                                    value={this.state.pass}
                                    placeholder='Password Here...'
                                    onChange={this.handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label={getLabel(lang, 'login_checkbox_text')}/>
                            </Form.Field>
                            <Button primary type='submit'>{getLabel(lang, 'submit_login')}</Button>
                        </Form>
                    </div>,
                    <DocumentTitle key={'LoginDocumentTitle'} title={`${Globals[lang + "GanName"]} | ${getLabel(lang, 'Login')}`}/>
                ]}
            </GlobalLanguage.Consumer>
        );
    }
}

LoginView.defaultProps = {};

export default LoginView;