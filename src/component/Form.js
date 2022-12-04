import { useState , useRef} from "react";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Formbasic() {
  const [IsValidEmail, setIsValidEmail] = useState(false);
  const [IsValidPass, setIsValidPass] = useState(false);


  const emailElementRef = useRef(null);
  const passwordElementRef = useRef(null);

  
  function validateEmail(email) { // esmesh ba oon useState yeki bood avaz kardam ke gij konande nabashe
    return /\S+@\S+\.\S+/.test(email);
  }
  
  function validatePassword(password){
    if(password.length >= 8){
      return true;
    }else{
      return false;
    }
  }
  function validateForm(e) {
    e.preventDefault();
    if (IsValidEmail  !== true || IsValidPass !== true) {
      document.getElementById("errors").innerHTML="Please fill in the blank fields "
    }
    
  }
  function handleEmailChange(e) {
    // console.log(e)
    const email = emailElementRef.current.value;
    if(validateEmail(email)){
      setIsValidEmail(true);
    }else{
      setIsValidEmail(false);
    }
  }
  function handlePassChange(e) { //say kon codet az ye olgoo peyravi kone masalan age esme tabe bala ro gozashti handlEmailChange 
                                // ino bezar handlePassChange be jaye hanldePass ke badan gij nashi
    const password = passwordElementRef.current.value;
    if(validatePassword(password)){
      setIsValidPass(true);
    }else{
      setIsValidPass(false);
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
                className={`form-control bg-dark text-white ${IsValidEmail ? "valid":"invalid"}`}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleEmailChange}
                ref={emailElementRef}
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
                type="password" //type in ham password bashe behtare ke text ro neshoon nade (midoonam midoonesi havaset naboode :D)
                className={`form-control bg-dark text-white ${IsValidPass ? "valid":"invalid"}`}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                id="floatingPassword"
                onChange={handlePassChange}
                ref={passwordElementRef}
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
