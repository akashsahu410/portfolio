import React from 'react';
import Dropzone from 'react-dropzone';
import Timeago from 'react-timeago';
import Action from './action'
// import FacebookProvider, { Like } from 'react-facebook';
// import InstagramEmbed from 'react-instagram-embed'

class Showpost extends React.Component{
    constructor(props){
        super(props);
        this.state={
            images:null,
            preview:null,
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString(),
            email:localStorage.getItem("email"),
            timeago:new Date(),
            post:null,
            verify:false,
        }
    }
    
    componentDidMount(){
        let options={
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify({"email":this.state.email})
        }
        fetch("http://localhost:8081/post/find",options)
        .then(res=>{
            console.log("response post cdm",res)
            return res.json();
        })
        .then(data=>{
            console.log("data get cdm",data.userdata)
            this.setState({post:data.userdata.reverse(),verify:true})
            console.log("dsf",this.state.post)

        })
        .catch(err=>{
            console.log("error occured cdm",err)
        })
    }
    getdata=()=>{
        console.log("inside the function");
        let formData  = new FormData();
          formData.append("images",this.state.images)
          formData.append("email",this.state.email)
          formData.append("date",this.state.date)
          formData.append("time",this.state.time)
          formData.append("timeago",this.state.timeago)
        let options={
            method:"POST",
            body:formData
        }
        console.log("options",options)
        fetch("http://localhost:8081/post/upload",options)
        .then(res=>{
            console.log("response post",res)
            return res.json();
        })
        .then(data=>{
            console.log("data get",data)
            this.reload();
        })
        .catch(err=>{
            console.log("error occured",err)
        });
        
    }
    reload=()=>{
        let options={
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify({"email":this.state.email})
        }
        fetch("http://localhost:8081/post/find",options)
        .then(res=>{
            console.log("response post cdm",res)
            return res.json();
        })
        .then(data=>{
            console.log("data get cdm",data.userdata)
            this.setState({post:data.userdata.reverse(),verify:true})
            console.log("dsf",this.state.post)  
        })
        .catch(err=>{
            console.log("error occured cdm",err)
        })
    }
    handleDrop=(acceptetedFiles,rejectedFiles)=> {
        console.log("images data",acceptetedFiles)
        this.setState({images:acceptetedFiles[0],preview:acceptetedFiles[0].preview});
        this.getdata();
      }
    render(){
        return(
            <div>
                <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                    <p>
                    <Dropzone onDrop={this.handleDrop} name="images" accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png">
                    Upload your image
                    </Dropzone>
                    </p>
                 </div>
                 {this.state.verify === true ? this.state.post.map((data)=>
                ( 
                <div className="col-sm-6 col-md-3 col-lg-3 adipiscing">
                
                <div className="portfolio-item">
                  <div className="hover-bg"> 
                    <a href={`http://localhost:8081/${data.images}`} title={data.date} data-lightbox-gallery="gallery1">
                      <img src={`http://localhost:8081/${data.images}`} className="img-responsive"/> 
                    </a>   
                  </div>
                </div>
                {data.date === new Date().toLocaleDateString() ? <Timeago date={data.timeago}/> : data.date}
                <Action id={data._id}/>
                </div>)
                )  :""}
                </div>
        )
    }
}
export default Showpost;