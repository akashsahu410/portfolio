import React from 'react';
import {Link} from 'react-router-dom';
import Contributors from './contributors';
import AboutUs from './aboutus';
import GetInTouch from './getintouch';
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      email_valid:"",
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  email_valid=()=> {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true){
        return true;
    }
    else{
        return false;
    }
  }
  sendData=(e)=>{
    e.preventDefault();
    if(this.email_valid())
    {
      this.setState({email_valid:""});
      let options={
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(this.state)
      }
      fetch("http://localhost:8081/login",options)
      .then(res=>{
        console.log("response",res)
        return res.json();
      })
      .then(data=>{
        console.log("data fetched",data,data[0].email,data[0].password)
        if((data[0].email === this.state.email) && (data[0].password === this.state.password)){
          localStorage.setItem("email",this.state.email)
          console.log("email",localStorage.getItem("email"))
          this.props.history.push(`/profile`)
        }
      })
      .catch(err=>{
        this.setState({email_valid:"Login Unsuccessful"})
        console.log("error in fetch all",err)
      })
    }
    else{
      this.setState({email_valid:"Invalid Email id"})
    }
  }
    render(){
      return(
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Login</title>
          {/* Bootstrap */}
          <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
          <link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.css" />
          {/* Stylesheet
      ================================================== */}
          <link rel="stylesheet" type="text/css" href="css/style.css" />
          <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/nivo-lightbox.css" />
          <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/default.css" />
          {/* <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300" rel="stylesheet" type="text/css" /> */}
          {/* Navigation
          ==========================================*/}
          <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container"> 
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#login" className="page-scroll">Login</a></li>
                <li><Link to="/home"><a href="#" className="page-scroll">Timeline</a></Link></li>

                  <li><a href="#friends" className="page-scroll">Contributors</a></li>
                  <li><a href="#about" className="page-scroll">About</a></li>
                  {/* <li><a href="#portfolio" class="page-scroll">Gallery</a></li> */}
                  <li><a href="#contact" className="page-scroll">Contact</a></li>
                </ul>
              </div>
              {/* /.navbar-collapse */} 
            </div>
            {/* /.container-fluid */} 
          </nav>
          {/* Header */}
          <header id="header">
            <a name="login">
            </a><div className="login"><a name="login">
              </a><div className="overlay"><a name="login">
                </a><div className="container"><a name="login">
                  </a><div className="row"><a name="login">
                      <br /> <br /> <br />
                      <center><h1>Login</h1></center> 
                    </a><div className="col-md-8 col-md-offset-3"><a name="login">
                      </a><form name="sentMessage" id="contactForm" noValidate><a name="login">
                        </a><div className="row"><a name="login">
                          </a><div className="col-md-9"><a name="login">
                              <div className="form-group">
                                <input type="text" id="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Email" required="required" />
                                <p className="help-block text-danger" />
                              </div>
                              <div className="form-group">
                                <input type="password" id="password" name="password" onChange={this.handleChange}className="form-control" placeholder="Password" required="required" />
                                <p className="help-block text-danger" />
                                <h3 className="email_valid">{this.state.email_valid}</h3>
                              </div>
                              <div id="success">
                                <button type="submit" className="btn btn-custom btn-lg" onClick={this.sendData}>Login</button>
                              </div>
                              <br/> <Link to="/forgot"><a href="#">Forgot Password?</a></Link>
                              <div className="section-title text-center center">
                                <p style={{color: 'white'}}>I do not have any account yet.<br />
                                  <Link to="/signup"><a href="#">Create My Account Now !</a></Link>
                                </p>
                              </div>
                            </a></div><a name="login">
                            <br />
                          </a></div><a name="login">
                          <br />
                        </a></form></div><a name="login">
                    </a></div><a name="login">
                  </a></div><a name="login">
                </a></div><a name="login">
              </a>
            </div></header>
          {/* Contributors Section */}
          <Contributors/>
          {/* About Section */}
          <AboutUs/>
          {/* Contact Section */}
          <GetInTouch/>
          {/* Footer Section */}
          <div id="footer">
            <div className="container text-center">
              <p>Copyright © 2018</p>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Login;