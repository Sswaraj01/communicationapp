import { Form } from "react-bootstrap";

function Login() {
    return (<><h1>Login</h1>

    <Form>
      
        <div class="mb-3">
            <label for="" class="form-label">Email</label>
            <input
                type="email"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Enter a valid email"
                
            />
        </div>
       <div class="mb-3">
            <label for="" class="form-label">Password</label>
            <input
                type="password"
                class="form-control"
                name=""
                id=""
                placeholder="Enter your password"
            />
        </div>
        <div>
            <button
                type="button"
                class="btn btn-primary"
            >
                Login
            </button>
            
        </div>
      
        
    </Form>

    </>);
}

export default Login;