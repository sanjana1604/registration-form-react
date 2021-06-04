import React,{Component} from 'react';
import {FormErrors} from './Errors';

class Registration extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      cpassword:'',
      tandc:true,
      formErrors: {email: '', password: '',cpassword:'', tandc:''},
      emailValid: false,
      passwordValid: false,
      cpasswordValid:false,
      tandcValid:false,
      formValid: false
    }
  };
  
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let cpasswordValid= this.state.cpasswordValid;
    let tandcValid = this.state.tandcValid;
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      case 'cpassword':
        cpasswordValid = value.match(this.state.password);
        fieldValidationErrors.cpassword=cpasswordValid?'':' do not match';
        break;
      case 'tandc':
        tandcValid =  value.match(true);
        fieldValidationErrors.tandc=tandcValid?'':' are not agree';
        break; 
      default:
        break;
    }
    
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    cpasswordValid:cpasswordValid,
                    tandcValid: tandcValid
                  }, this.validateForm);
  }
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.cpasswordValid && this.state.tandcValid});
  }
  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render(){
  return (
    <div>
      <h2>Registration Form</h2>
      <form >
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>

        <label for="email">Email</label>
        <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required/>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleChange} required/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.cpassword)}`}>
        <label for="cpassword">Confirm Password:</label>
        <input type="password" class="form-control" id="cpassword" placeholder="Enter password Again" name="cpassword" value={this.state.cpassword} onChange={this.handleChange} required/>
        </div>
        <div class="form-group form-check">
        <label for="tandc" class="form-check-label">
        <input class="form-check-input" type="checkbox" id="tandc" name="tandc" value={this.state.tandc} onChange={this.handleChange} required/> I agree on terms&conditions.
         </label>
        </div>
        <button type="submit" class="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
      </form>
    </div>
  );
  };
};

export default Registration;