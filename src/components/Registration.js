import '../Registration.css';
import React, { useState } from 'react';
import validator from 'validator';
// import {FormErrors} from './Errors';

const Registration= () =>{
  //inital value set in the inputs.
  const [rollNo, setRollNo]=useState("");
  const [uname, setUname]=useState("");
  const [email, setEmail]=useState("");
  const [fatherName, setFatherName]=useState("");
  const [schoolName, setSchoolName]=useState("");
  const [course, setCourse]=useState("");
  const [specialization, setSpecialization]=useState("");
  const [mobileNo, setMobileNo]=useState("");
  const [password, setPassword]=useState("");
  
  
  //to store error objects during validation check
  const [rollNoError, setRollNoError]=useState({});
  const [unameError, setUnameError]=useState({});
  const [emailError, setEmailError]=useState({});
  const [fatherNameError, setFatherNameError]=useState({});
  const [schoolNameError, setSchoolNameError]=useState({});
  const [courseError, setcourseError]=useState({});
  const [specializationError, setSpecializationError]=useState({});
  const [mobileNoError, setMobileNoError]=useState({});
  const [passwordError, setPasswordError]=useState({});

  const onSubmit=(e)=>{
    e.preventDefault();    
    const isValid=formValidation();
    if(isValid){
      //SEND TO BACKEND
      setRollNo("");
      setUname("");
      setEmail("");
      setFatherName("");
      setSchoolName("");
      setSpecialization("");
      setCourse("");
      setMobileNo("");
      setPassword("");
    }
  }
  const formValidation=()=>{
    const rollNoError={};
    const unameError={};
    const emailError={};
    const fatherNameError={};
    const schoolNameError={};
    const specializationError={};
    const courseError={};
    const mobileNoError={};
    const passwordError={};
    let isValid=true;

    if(validator.isEmpty(rollNo) && !validator.trim(rollNo)){
      rollNoError.rollNoEmpty="Roll No. is required";
      isValid=false;
    }
    if(validator.isEmpty(uname) && !validator.trim(uname)){
      unameError.unameEmpty="Name is required";
      isValid=false;
    }
    if(validator.isEmpty(fatherName) && !validator.trim(fatherName)){
      fatherNameError.fatherNameEmpty="Father name is required";
      isValid=false;
    }
    if(validator.isEmpty(schoolName) && !validator.trim(schoolName)){
      schoolNameError.schoolNameEmpty="School name is required";
      isValid=false;
    }
    if(validator.isEmpty(course) && !validator.trim(course)){
      courseError.courseEmpty="Course is required";
      isValid=false;
    }    
    if(validator.isEmpty(specialization) && !validator.trim(specialization)){
      specializationError.specializationEmpty="Specialization is required";
      isValid=false;
    }
    if(password.trim().length<6){
      passwordError.passwordShort="Password is too short";
      isValid=false;
    }
      if(password.trim().length>6 && password.trim().length<8){
      passwordError.passwordMedium="Password is medium";
      isValid=false;
    }
    if(validator.isLength(password,{min:8})){
      isValid=true;
    }
    if(!validator.isEmail(email)){
      emailError.emailpattern="Invalid Email";
      isValid=false;
    }
    if(!validator.isMobilePhone(mobileNo)){
      mobileNoError.mobilepattern="Invalid Mobile No.";
      isValid=false;
    }
    // if(!date.match('\d{2}-\d{2}-\d{4}') && date.){
    //   dobError.dobpattern="Invalid Date";
    // }
    setRollNoError(rollNoError);
    setUnameError(unameError);
    setEmailError(emailError);
    setFatherNameError(fatherNameError);
    setSchoolNameError(schoolNameError);
    setcourseError(courseError);
    setSpecializationError(specializationError);
    setMobileNoError(mobileNoError);
    setPasswordError(passwordError);
    return isValid;
  }
  return (
    <form onSubmit={onSubmit}>
    <div className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>
      <label for="rollNo"><b>Roll No.</b></label>
      <input type="number" placeholder="Enter Roll No." name="rollNo" id="rollNo" value={rollNo} onChange={(e)=>{setRollNo(e.target.value)}}/>
      <div className="errors">
      {Object.keys(rollNoError).map((key)=>{
        return <div style={{color:"red"}}>{rollNoError[key]}</div>
      })}
      </div>

      <label for="uname"><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="uname" id="uname" value={uname} onChange={(e)=>{setUname(e.target.value)}} />
      <div className="errors">
      {Object.keys(unameError).map((key)=>{
        return <div style={{color:"red"}}>{unameError[key]}</div>
      })}
      </div>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <div className="errors">
      {Object.keys(emailError).map((key)=>{
        return <div style={{color:"red"}}>{emailError[key]}</div>
      })}
      </div>

      <label for="fatherName"><b>Father</b></label>
      <input type="text" placeholder="Enter Father Name" name="fatherName" id="fatherName" value={fatherName} onChange={(e)=>{setFatherName(e.target.value)}}/>
      <div className="errors">
      {Object.keys(fatherNameError).map((key)=>{
        return <div style={{color:"red"}}>{fatherNameError[key]}</div>
      })}
      </div>

      <label for="schoolName"><b>School</b></label>
      <input type="text" placeholder="Enter School Name" name="schoolName" id="schoolName"value={schoolName} onChange={(e)=>{setSchoolName(e.target.value)}}/>
      <div className="errors">
      {Object.keys(schoolNameError).map((key)=>{
        return <div style={{color:"red"}}>{schoolNameError[key]}</div>
      })}
      </div>

      <label for="course"><b>Course</b></label>
      <input type="text" placeholder="Enter Course" name="course" id="course"value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
      <div className="errors">
      {Object.keys(courseError).map((key)=>{
        return <div style={{color:"red"}}>{courseError[key]}</div>
      })}
      </div>
      
      <label for="specialization"><b>Specialization</b></label>
      <input type="text" placeholder="Enter Specialization" name="specialization" id="specialization"value={specialization} onChange={(e)=>{setSpecialization(e.target.value)}}/>
      <div className="errors">
      {Object.keys(specializationError).map((key)=>{
        return <div style={{color:"red"}}>{specializationError[key]}</div>
      })}
      </div>

      <label for="mobileNo"><b>Mobile No.</b></label>
      <input type="tel" placeholder="Enter Mobile No" name="mobileNo" id="mobileNo" value={mobileNo} onChange={(e)=>{setMobileNo(e.target.value)}}/>
      <div className="errors">
      {Object.keys(mobileNoError).map((key)=>{
        return <div style={{color:"red"}}>{mobileNoError[key]}</div>
      })}
      </div>

      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <div className="errors">
      {Object.keys(passwordError).map((key)=>{
        if(key=='passwordShort'){
        return(
          <div style={{color:"red"}}>{passwordError[key]}</div>
        );
        }
        if(key=='passwordMedium'){
          return(
            <div style={{color:"yellow"}}>{passwordError[key]}</div>
          );
        }
        // 
      })}
      </div>
      
      {/* <label for="dob"><b>DOB</b></label>
      <input type="date" placeholder="Enter DOB" name="dob" id="dob" />

      <label for="createdDate"><b>Created Date</b></label>
      <input type="date" placeholder="Enter created date" name="createdDate" id="createdDate"/>

      <label for="gender"><b>Select gender</b></label><br/>
      <input type="radio" id="male" name="gender" value="male"/>Male<br/>
      <input type="radio" id="female" name="gender" value="female"/>Female<br/>
      <input type="radio" id="other" name="gender" value="other"/>Other<br/> */}

      <p>By creating an account you agree to our <a>Terms & Privacy</a>.</p>
      <button type="submit" className="registerbtn">Register</button>
    </div>

    <div className="container signin">
      <p>Already have an account? <a >Sign in</a>.</p>
    </div>
  </form>
  );
}
export default Registration;

