import { useState } from "react";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

var errors_array = [];

function Formbasic() {
  const [Errors, setErrors] = useState();
  const [IsValidEmail, setIsValidEmail] = useState(false);
  const [IsValidPass, setIsValidPass] = useState(false);
  var errors_obj = document.getElementById("errors");
  
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  function validateForm(e) {
    e.preventDefault();
    if (IsValidEmail  !== true || IsValidPass !== true) {
      document.getElementById("errors").innerHTML="Please fill in the blank fields "
    }
    
  }
  function handleEmailChange(e) {
    // console.log(e)
    let email_obj = document.getElementById("floatingInput");
    e.preventDefault();
    if (!isValidEmail(e.target.value)) {
      setErrors("Email is invalid");
      setIsValidEmail(false);
      email_obj.classList.add("invalid");
      if (!isValidEmail.includes("email problem")) {
        isValidEmail.push("email problem");
       
      }
    } else {
      email_obj.classList.add("valid");
      setErrors(null);
      errors_array.splice(errors_array.indexOf("email problem"), 1);
      setIsValidEmail(true);
      
    }
  }
  function handlePass(e) {
    let pass_obj = document.getElementById("floatingPassword");
    e.preventDefault();
    if(e.target.value.length>=8){
      setErrors(null);
      setIsValidPass(true);
      errors_array.splice(errors_array.indexOf("pass problem"), 1);
      
      pass_obj.classList.add("valid");
    }else{
      if (!errors_array.includes("pass problem")) {
        errors_array.push("pass problem");
      }
      setIsValidPass(false);
      setErrors("Password is invalid");
      pass_obj.classList.add("invalid");
    }
  }


  return (
    <>
      <div className="div icon-login">
        <div className="icon-user">
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
      <div className="form1">
        <Form
          name="myForm"
          className="m-3  p-5 "
          action="#"
          onSubmit={validateForm}
          method="post"
        >
          <div className="inputs">
            <div className="input-group mt-4 mb-3 ">
              <div className="input-group-prepend">
                <span
                  className="input-group-text p-3 bg-dark text-white"
                  id="basic-addon1"
                >
                  <i className="fa-regular fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                id="floatingInput"
                name="email"
                required
                className="form-control bg-dark text-white"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleEmailChange}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text p-3 bg-dark text-white"
                  id="basic-addon1"
                >
                  <i className="fa-sharp fa-solid fa-lock"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control bg-dark text-white "
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                id="floatingPassword"
                onChange={handlePass}
              />
            </div>
            <div className="checked">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Remember me</label>
              </div>
              <NavLink rel="stylesheet">Forgot Password?</NavLink>
            </div>

            <div id="errors">{Errors}</div>
          </div>
          <div className="div-submit">
            <Button className="submit-btn" type="submit">
              LOGIN
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Formbasic;
