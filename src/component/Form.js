import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formbasic() {
  return (
    <>
      <div className="div icon-login">
        <div className="icon-user">
          <i  className="fa-regular fa-user"></i>
        </div>
      </div>
      <div className="form1">
        <div className="inputs">
          <Form className="m-3  p-5 ">
          <div  className="input-group mt-4 mb-3 ">
            <div  className="input-group-prepend">
              <span  className="input-group-text p-3 bg-dark text-white" id="basic-addon1"><i class="fa-regular fa-user"></i></span>
            </div>
            <input type="text" className="form-control bg-dark text-white" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>

          <div  className="input-group mb-3">
            <div  className="input-group-prepend">
              <span  className="input-group-text p-3 bg-dark text-white" id="basic-addon1"><i class="fa-sharp fa-solid fa-lock"></i></span>
            </div>
            <input type="text"  className="form-control bg-dark text-white " placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
          </div>
          <div className="checked">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <NavLink rel="stylesheet"  >Forgot Password?</NavLink>
          </div>
          </Form>
          
        </div>
        <div className="div-submit">
        <Button
            className="submit-btn"
            type="submit">
            LOGIN
          </Button>
        </div>
      </div>
    </>
  );
}

export default Formbasic;
