import React, {Component} from 'react'
import './styles.css'
import { Alert, Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd'
import Api from '../controllers/Api'

const FormItem = Form.Item

class Login extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      wrongCredentials: false
    }

    this.api = new Api()

    this.redirectToDasboard = this.redirectToDasboard.bind( this )
    this.handleSubmit = this.handleSubmit.bind( this )
    this.showErrorMessage = this.showErrorMessage.bind( this )
  }

  componentWillMount() {
    if (localStorage.isLogin == 'true') {
      this.props.history.push( '/dashboard' )
    } 
  }

  handleSubmit( e ) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.api.login( values.userName, values.password )
          .then(  success => this.redirectToDasboard() )
          .catch( err => this.showErrorMessage() )
      }
    })
  }

  redirectToDasboard() {
    localStorage.setItem("isLogin", "true")
    this.props.history.push( '/dashboard' )

  }

  showErrorMessage() {
    this.setState( {
      wrongCredentials: true
    } )
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const errorMsg = this.state.wrongCredentials ? <Alert message="User or password incorrect, try again." type="error" showIcon />: ''
    
    return(
      <div className="login-background">

        <Row>
          <Col span={12} offset={6}>
            <div className="form-section">
              <h1 className="login-title"><b>Admin</b>ANT</h1>
              <p>Sign In to start your session</p>

              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your Email!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                
                {errorMsg}

                <FormItem>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                </FormItem>
              </Form>
            </div>
          </Col>
        </Row>

        
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
module.exports = WrappedNormalLoginForm