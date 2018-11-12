import React from 'react'
class Action extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            _id:props.id
            
        }
    }
    componentDidMount(){
        console.log("inside action did mount")
        let options={
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
        }
        fetch("http://localhost:8081/post/fetch_like",options)
        .then((response)=>{
            console.log("resposne",response);
            return response.json();
        })
        .then(data=>{
            console.log("data",data);
            
            
        })
        .catch(err=>{
            console.log("error occured",err);
        })
    }
    toggle_like=()=>{
        console.log("inside the function of toggle")
        if(this.props.data.upvote_toggle === true){
            this.props.data.upvote_toggle=false
        }
        else{
            this.props.data.upvote_toggle=true
        }
    }
    render(){
        let like_css = this.state.like_click ? {color:"blue"} :{color:"#e11c26"}
        return(
                <span style={{float:"right"}}>
                <a href="#" onClick={this.like} style={like_css}>Like</a>
                &nbsp;&nbsp;&nbsp;&nbsp;Delete</span>
            
        )
    }
}
export default Action