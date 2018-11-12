import React from 'react';
import {Link} from 'react-router-dom';
class ChangePassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password:"",
            confirm_password:"",
            password_valid:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    sendData=(e)=>{
        e.preventDefault();
        console.log("inside the function")
        if(this.state.password === this.state.confirm_password){
        let options={
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify({password:this.state.password})
        }
        fetch("http://localhost:8081/password/change",options)
        .then(res=>{
            console.log("response",res)
            return res.text();
        })
        .then(data=>{
            console.log("data",data)
            if(data === "Not Found"){
                this.setState({email_valid:"Email id not exist"})
            }
            else{
                this.setState({email_valid:data})
                this.props.history.push("/login")
            }
        })
        .catch(err=>{
            console.log("error",err)
        })
      }
      else{
          this.setState({password_valid:"Password not match"})
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
                  </a><div className="row">
                      <br /> <br /> <br />
                      <center><h1>Change Password</h1></center> 
                    <div className="col-md-8 col-md-offset-3"><a name="login">
                      </a><form name="sentMessage" id="contactForm" noValidate><a name="login">
                        </a><div className="row"><a name="login">
                          </a><div className="col-md-9"><a name="login">
                          <div className="form-group">
                                <input type="password" id="password" name="password" onChange={this.handleChange}className="form-control" placeholder="Password" required="required" />
                                <p className="help-block text-danger" />
                                <h3 className="email_valid">{this.state.email_valid}</h3>
                                
                              </div>
                              <div className="form-group">
                                <input type="password" id="password" name="confirm_password" onChange={this.handleChange}className="form-control" placeholder="Confirm Password" required="required" />
                                <p className="help-block text-danger" />
                                <h3 className="email_valid">{this.state.password_valid}</h3>
                              </div>
                              <div id="success">
                                <button type="submit" className="btn btn-custom btn-lg" onClick={this.sendData}>Submit</button>

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
        {/* footer */}
            <div id="footer">
            <div className="container text-center">
              <p>Copyright © 2018</p>
            </div>
          </div>
                </div>
        )
    }
}
export default ChangePassword;