import React, {Component} from "react";
import {Button, Form, Grid, Header, Message, Segment, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './Login.css';
import {LabelByLang} from "../../components/common";

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

    handleSubmit = (e) => {
        console.log('e', this.state);

        const { name, email } = this.state;

        this.setState({ submittedName: name, submittedEmail: email })

        this._resetForm();
    };

    _resetForm = () => {
        alert('3')
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

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    _renderLoginForm = () => {
        const { id, pass } = this.state

       return (
            <div className='login-form'>
                <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            {/*<Image src='/logo.png' />*/}
                            <Icon name='dropdown'/>
                            Log-in to your account
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                                            onChange={this.handleChange} name={'id'} value={id}/>
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='pass'
                                    value={pass}
                                    onChange={this.handleChange}
                                />

                                <Button color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? Sign Up
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
    render() {
        return this._renderLoginForm();
        // return (
        //     <GlobalParams.Consumer>
        //         {GParams => {
        //             const { lang } = GParams;
        //             return[
        //             <div key={'LoginView'} className='formContainer'>
        //                 <Form onSubmit={this.handleSubmit}>
        //                     <Form.Field required>
        //                         <label>{getLabel(lang, 'id')}</label>
        //                         <Input
        //                             name='id'
        //                             label={getLabel(lang, 'id')} labelPosition='left'
        //                             // icon={this._feedbackIcon()} iconPosition='right'
        //                             value={this.state.id}
        //                             placeholder='User ID Here...'
        //                             onChange={this.handleInputChange}
        //                         />
        //                     </Form.Field>
        //                     <Form.Field required>
        //                         <label>{getLabel(lang, 'password')}</label>
        //                         <Input
        //                             name='pass'
        //                             label={getLabel(lang, 'password')} labelPosition='left'
        //                             // icon={this._feedbackIcon()} iconPosition='right'
        //                             value={this.state.pass}
        //                             placeholder='Password Here...'
        //                             onChange={this.handleInputChange}
        //                         />
        //                     </Form.Field>
        //                     <Form.Field>
        //                         <Checkbox label={getLabel(lang, 'login_checkbox_text')}/>
        //                     </Form.Field>
        //                     <Button primary type='submit'>{getLabel(lang, 'submit_login')}</Button>
        //                 </Form>
        //             </div>,
        //             <DocumentTitle key={'LoginDocumentTitle'} title={`${GParams[lang + "GanName"]} | ${getLabel(lang, 'Login')}`}/>
        //         ]}}
        //     </GlobalParams.Consumer>
        // );
    }
}

LoginView.defaultProps = {};

export default LoginView;