const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault(); // stop page refresh
    console.log(event);
    console.log(event.target);

    /*
    Other ways to get form data
        let fullname = document.getElementById("fullname").value;
        let email = event.target.elements.email.value;
    */

    let user = {
        id: Number(new Date()),
        fullname: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
        confirmPassword: event.target[3].value
    }
    console.log(user);
    /*
        JSON.stringify - convert object into string
        JSON.parse - convert string into object
    */
    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []; // ternary operator
    users.push(user); // adding item inside array
    localStorage.setItem("users", JSON.stringify(users));
}
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="" class="form-label">
            Full Name
          </label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Enter your full Name"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name=""
            id=""
            placeholder=""
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            name=""
            id=""
            placeholder=""
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Register
        </button>
        '
      </form>
    </>
  );
};

export default Register;
