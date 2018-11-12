import React from 'react';
class GetInTouch extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      message:"",
      email_valid:""
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
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
    console.log("state",this.state);
    if(this.email_valid())
    {
      this.setState({email_valid:""})
        let options={
          method:"POST",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          body:JSON.stringify(this.state)
        }
        fetch("http://localhost:8081/user/feedback",options)
        .then(res=>{
          console.log("response",res);
          return res.text();
        })
        .then(data=>{
          console.log("data",data)
          alert("Thank you for your feedback");
        })
        .catch(err=>{
          console.log("error in get in touch fetch call",err)
        })
    }
    else{
      this.setState({email_valid:"Invalid email"})
    }

  }
    render(){
        return(
            <div>
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
                        <input type="text" id="name" className="form-control" name="name" placeholder="Name" onChange={this.handleChange} required="required" />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" id="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Email" required="required" />
                        <p className="help-block text-danger" />
                        <h3 className="email_valid">{this.state.email_valid}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea name="message" id="message" name="message" className="form-control" rows={4} onChange={this.handleChange} placeholder="Message" required defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                  <div id="success" />
                  <button type="submit" className="btn btn-custom btn-lg" onClick={this.sendData}>Send Message</button>
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
                </div>
        )
    }
}
export default GetInTouch;