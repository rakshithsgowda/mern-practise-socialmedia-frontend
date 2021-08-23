const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h1>Register </h1>
        </div>
      </div>
      <div className="row py-3">
          <div className="col-md-6 offset-md-3">
            <form >
              <div className="form-group py-2">
                <label  className="text-muted"><small>Name</small></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder='Enter Your Name'
                  />
              </div>
            </form>
            <form >
              <div className="form-group py-2">
                <label  className="text-muted "><small>Email address </small></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder='Enter Your Email'
                  />
              </div>
            </form>
            <form >
              <div className="form-group py-2">
                <label  className="text-muted"><small>Your Password</small></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder='Enter Password'
                  />
            </div>

            <div className="form-group py-2">
              <label className="text-muted"><small>Pick a question</small></label>
              <select className="form-control">
                <option >What is your favourite color ?</option>
                <option >What is your best friend's name  ?</option>
                <option >In which city were you born ?</option>
              </select>
              <small className="form-text text-muted">
                You can use this to reset your password if forgottten.
              </small>
            </div>
            <div className="form-group py-2">
              <input type="text" placeholder="Write your Answer here" className="form-control" />
            </div>
            <div className="form-group d-grid py-3">
               <button className="btn btn-primary btn-lg">Submit</button>
            </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Register
