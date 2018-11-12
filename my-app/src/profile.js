import React from 'react';
import Showpost from './showpost.js';
import {Link} from 'react-router-dom';
class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:localStorage.getItem("email"),
      firstname:"",
      lastname:"",
      age:"",
      images:"",
      phone:"",
      bio:"",
      reload:false
    }
  }
  logout=()=>{
    localStorage.removeItem("email");
    this.props.history.push("/login");  
  }
  componentDidMount(){
    let options={
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({"email":this.state.email})
    }
    fetch("http://localhost:8081/profile",options)
    .then(res=>{
      console.log("response",res)
      return res.json();
    })
    .then(data=>{
      console.log("data fetched",data)
      console.log("data fetched",data[0].firstname)
      this.setState({"firstname":data[0].firstname,"lastname":data[0].lastname,"age":data[0].age,"phone":data[0].phone,"bio":data[0].bio,"images":data[0].images})
    })
    .catch(err=>{
      console.log("error in fetch call in profile",err)
    })
  }
    render(){
      return(
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Profile</title>
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
          {/* <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300" rel="stylesheet" type="text/css" /> */}
          {/* <link href="http://fonts.googleapis.com/css?family=Arizonia" rel="stylesheet" type="text/css" /> */}
          {/* Navigation
          ==========================================*/}
          <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container"> 
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                <a className="navbar-brand page-scroll" href="#page-top">{this.state.firstname} {this.state.lastname}</a> </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/home" className="page-scroll">Timeline</a></li>
                  <li><a href="#" className="page-scroll">Profile</a></li>
                  <li><a href="#my-uploads" className="page-scroll">My Uploads</a></li>
                  <li><a href="#" className="page-scroll" onClick={this.logout}>Logout</a></li>
                </ul>
              </div>
              {/* /.navbar-collapse */} 
            </div>
            {/* /.container-fluid */} 
          </nav>
          {/* Header */}
          <header id="header">
          <a name="page-top">
            <div className="signup">
              <div className="overlay">
                <div className="container">
                  <div className="col-lg-14">
                    <div className="row">
                      <div className="profile-pic">
                        <div className="col-sm-3 col-md-3 col-lg-3">
                          <div className="profile-item">
                            <div className="bg"> <a href={`http://localhost:8081/${this.state.images}`}>
                                <img src={`http://localhost:8081/${this.state.images}`} className="img-responsive" alt="Profile" /> </a> 
                            </div>
                            <p>{this.state.firstname} {this.state.lastname}<br />
                              Age:{this.state.age}<br />
                              Mob.No:{this.state.phone}<br/>
                              {this.state.email}</p> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </header>
          {/* My-uploads Section */}
          <div className="my-uploads">
            <div className="overlay">
              <a name="my-uploads">
              </a><div className="container"><a name="my-uploads">
                  <div className="section-title text-center center">
                    <h2>My Album</h2>
                    <hr />
                    <p>{this.state.bio}</p>
                  </div>
                  <div className="categories">
                    <div className="clearfix" />
                  </div>
                </a><div className="row"><a name="my-uploads">
                  </a><div className="portfolio-items"><a name="my-uploads">
                    </a><Showpost/>
                    {/* {this.state.reload === true ? this.props.history.push('/profile') : ""} */}
                </div>
              </div>
            </div>
            </div>
          </div>
          <div id="footer">
            <div className="container text-center">
              <p>Copyright © 2018</p>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Profile;