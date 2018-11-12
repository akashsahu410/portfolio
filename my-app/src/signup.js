import React from 'react';
import {Link} from 'react-router-dom';
import Contributors from './contributors';
import AboutUs from './aboutus';
import GetInTouch from './getintouch';
import Dropzone from 'react-dropzone';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstname:"",
      lastname:"",
      age:null,
      email:"",
      password:"",
      bio:"",
      phone:"",
      images:null,
      preview:null,
      email_valid:"",
      age_valid:""
    }
  }
  handleChange=(e)=>{
    console.log("inside the function")
    this.setState({[e.target.name]:e.target.value});
  }
  handleDrop=(acceptetedFiles,rejectFiles)=> {
    this.setState({ images:acceptetedFiles[0]});
    this.setState({preview:acceptetedFiles[0].preview})
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
  age_valid=()=>{
    if(this.state.age >=1 && this.state.age <=70)
    {
      return true;
    }
    else{
      return false;
    }
  }
    sendData=(e)=>{
    e.preventDefault();
    console.log("state",this.state); 
    if(this.age_valid())
    {
      this.setState({age_valid:""})
        if(this.email_valid())
        {     
          this.setState({email_valid:""})
          let formData  = new FormData();
          formData.append("firstname",this.state.firstname)
          formData.append("lastname",this.state.lastname)
          formData.append("age",this.state.age)
          formData.append("email",this.state.email)
          formData.append("password",this.state.password)
          formData.append("bio",this.state.bio)
          formData.append("images",this.state.images)
          formData.append("preview",this.state.preview)
          formData.append("phone",this.state.phone)
        
          let options={
              method:"POST",
              body:formData
          }
          console.log("options",options)
          fetch("http://localhost:8081/signup",options)
          .then(res=>{
            console.log("response",res);
            return res.text();
          })
          .then(data=>{
            console.log("data",data)
            if(data === "Registered Successfully"){
              this.props.history.push("/login");
            }
            else
            {
              this.setState({email_valid:data})
            }
          })
          .catch(err=>{
            console.log("error in fetch call",err)
          })
        }
        else{
          this.setState({email_valid:"Invalid Email"});
        }
    }
    else{
      this.setState({age_valid:"Invalid Age"});
    }
  }
    render(){
      return(
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Signup</title>
          {/* Bootstrap */}
          <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
          <link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.css" />
          {/* Favicons
      ================================================== */}
          <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
          {/* Stylesheet
      ================================================== */}
          <link rel="stylesheet" type="text/css" href="css/style.css" />
          <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/nivo-lightbox.css" />
          <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/default.css" />
          <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300" rel="stylesheet" type="text/css" />
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
                  <li><a href="/" className="page-scroll">Timeline</a></li>
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
          <a name="signup">
            <div className="signup">
              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <br /> <br /> <br />
                    <center><h1>Signup</h1></center> 
                    <div className="col-md-8 col-md-offset-3">
                      <form name="sentMessage" id="contactForm" noValidate>
                        <div className="row">
                          <div className="col-md-9">
                            <div className="form-group">
                              <input type="text" id="firstname" className="form-control" onChange={this.handleChange} name="firstname" placeholder="FirstName" required="required" />
                              <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                              <input type="text" id="lastname" className="form-control" name="lastname" onChange={this.handleChange} placeholder="LastName" required="required" />
                              <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                              <input type="number" id="age" className="form-control" name="age" onChange={this.handleChange} placeholder="Age" required="required" />
                              <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                              <input type="text" id="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Email" required="required" />
                              <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                              <input type="password" id="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password" required="required" />
                              <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                              <input type="number" id="phone" className="form-control" maxlength="10" name="phone" onChange={this.handleChange} placeholder="Mobile No." required="required" />
                              <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                              <textarea name="bio" id="bio" className="form-control" rows={4} name="bio" onChange={this.handleChange} placeholder="Bio" required defaultValue={""} />
                              <p className="help-block te xt-danger" />
                            </div>
                            <div className="form-group">
                              <p>
                                {/* <input type="file" id="file" className="form-control" name="image" onChange="this.handleChange"/> */}
                                <Dropzone onDrop={ this.handleDrop } name="images" accept="image/jpeg,image/jpg,image/tiff,image/gif" height="200" width="200">
                                  Upload your profile pic
                              </Dropzone>
                              { this.state.preview &&
                                <img src={ this.state.preview } alt="image preview" height="500" width="500" />
                              }
                              <h4 className="email_valid">{this.state.email_valid}</h4>
                              <h4 className="age_valid">{this.state.age_valid}</h4>                              
                              </p>
                            </div>
                            <div id="success">
                              <button type="submit" className="btn btn-custom btn-lg" onClick={this.sendData}>Submit</button>
                            </div>
                            <div className="section-title text-center center">
                              <p>I already have an account.<br />
                               <Link to="/login"> <a href="#">Login My Account !</a></Link>
                              </p>
                            </div>
                          </div>
                        </div></form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </header>
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
  
  export default Signup;