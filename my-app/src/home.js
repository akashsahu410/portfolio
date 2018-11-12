import React from 'react';
import {Link} from 'react-router-dom';
import Timeago from 'react-timeago';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      post:null,
      verify:false
    }
  }
  componentDidMount(){
    let options={
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },
    }
    fetch("http://localhost:8081/post/find",options)
    .then(res=>{
        console.log("response post cdm",res)
        return res.json();
    })
    .then(data=>{
        console.log("data get cdm",data.userdata)
        this.setState({post:data.userdata,verify:true})
        console.log("dsf",this.state.post)

    })
    .catch(err=>{
        console.log("error occured cdm",err)
    })
}
    render(){
      return(
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio</title>
        <meta name="description" content />
        <meta name="author" content />
        {/* Favicons
    ================================================== */}
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
        {/* Bootstrap */}
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.css" />
        {/* Slider
    ================================================== */}
        <link href="css/owl.carousel.css" rel="stylesheet" media="screen" />
        <link href="css/owl.theme.css" rel="stylesheet" media="screen" />
        {/* Stylesheet
    ================================================== */}
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/nivo-lightbox.css" />
        <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/default.css" />
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300" rel="stylesheet" type="text/css" />
        {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
        {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
        {/*[if lt IE 9]>
      
      
    <![endif]*/}
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
              <li><Link to="/login"> <a href="#" className="page-scroll">Login</a></Link></li>
                <li><a href="#about" className="page-scroll">About</a></li>
                <li><a href="#services" className="page-scroll">Services</a></li>
                <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
                {/* <li><a href="#testimonials" class="page-scroll">Testimonials</a></li> */}
                <li><a href="#contact" className="page-scroll">Contact</a></li>
              </ul>
            </div>
            {/* /.navbar-collapse */} 
          </div>
          {/* /.container-fluid */} 
        </nav>
        {/* Header */}
        <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="intro-text"> <span>Welcome to my</span>
                    <h1>Portfolio</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing. <br />
                      Duis sed dapibus leo nec ornare diam.</p>
                    <a href="#about" className="btn btn-custom btn-lg page-scroll">Learn More</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* About Section */}
        <div id="about">
          <div className="container">
            <div className="section-title text-center center">
              <h2>About Us</h2>
              <hr />
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6"> <img src="img/about.png" className="img-responsive" alt /> </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h3>Lorem ipsum dolor sit amet!</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Section */}
        <div id="services" className="text-center">
          <div className="container">
            <div className="col-md-10 col-md-offset-1 section-title">
              <h2>Our Services</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-3"> <i className="fa fa-comments-o" />
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
              </div>
              <div className="col-xs-6 col-md-3"> <i className="fa fa-bullhorn" />
                <h4>Dolor sit amet</h4>
                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.</p>
              </div>
              <div className="col-xs-6 col-md-3"> <i className="fa fa-group" />
                <h4>Tempus eleifend</h4>
                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
              </div>
              <div className="col-xs-6 col-md-3"> <i className="fa fa-magic" />
                <h4>Pellentesque</h4>
                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Section */}
        <div id="portfolio">
          <div className="container">
            <div className="section-title text-center center">
              <h2>Gallery</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="categories">
              <div className="clearfix" />
            </div>
            <div className="row">
              <div className="portfolio-items">
              {this.state.verify === true ? this.state.post.map((data)=>
                ( 
                <div className="col-sm-6 col-md-3 col-lg-3 adipiscing">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={`http://localhost:8081/${data.images}`} title={data.date} data-lightbox-gallery="gallery1">
                      <img src={`http://localhost:8081/${data.images}`} className="img-responsive" alt="Project Title" /> </a> </div>
                </div>{data.date === new Date().toLocaleDateString() ? <Timeago date={data.timeago}/> : data.date}<span style={{float:"right"}}>Like</span>
                </div>)
                )  :""}
              </div>
                
            </div>
          </div>
        </div>
        {/* Achievements Section */}
        {/* <div id="achievements" class="text-center">
  <div class="overlay">
    <div class="container">
      <div class="section-title center">
        <h2>Some Stats</h2>
        <hr>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-3">
          <div class="achievement-box"> <span class="count">260</span>
            <h4>Customers</h4>
          </div>
        </div>
        <div class="col-md-3 col-sm-3">
          <div class="achievement-box"> <span class="count">83</span>
            <h4>Developers</h4>
          </div>
        </div>
        <div class="col-md-3 col-sm-3">
          <div class="achievement-box"> <span class="count">571</span>
            <h4>Projects</h4>
          </div>
        </div>
        <div class="col-md-3 col-sm-3">
          <div class="achievement-box"> <span class="count">12</span>
            <h4>Awards</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
        {/* Testimonials Section */}
        {/* <div id="testimonials" class="text-center">
  <div class="container">
    <div class="section-title">
      <h2>Testimonials</h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div id="testimonial" class="owl-carousel owl-theme">
          <div class="item"> <img src="img/clients/01.jpg" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
            <p><strong>John DOE</strong>, CEO, Company.</p>
          </div>
          <div class="item"> <img src="img/clients/02.jpg" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
            <p><strong>Jenny DOE</strong>, CEO, Company.</p>
          </div>
          <div class="item"> <img src="img/clients/03.jpg" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
            <p><strong>John DOE</strong>, CEO, Company.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
        {/* Contact Section */}
        <div id="contact" className="text-center">
          <div className="container">
            <div className="section-title center">
              <h2>Get In Touch</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control" rows={4} placeholder="Message" required defaultValue={""} />
                  <p className="help-block text-danger" />
                </div>
                <div id="success" />
                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
              </form>
              <div className="social">
                <ul>
                  <li><a href="https://www.facebook.com/akash.sahu.9028194"><i className="fa fa-facebook" /></a></li>
                  <li><a href="https://twitter.com/prashan24759125"><i className="fa fa-twitter" /></a></li>
                  <li><a href="plus.google.com/+AkashSahu"><i className="fa fa-google-plus" /></a></li>
                </ul>
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
export default Home;