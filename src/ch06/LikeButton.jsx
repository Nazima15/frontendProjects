import React from "react";

export class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state={liked:false};
       

    }
    handleClick(){
        //this.state.like=!this.state.liked;
        this.setState({liked:!this.state.liked});
       

    }
    render(){
        const text=this.state.liked?"You liked this.":"Like";
        /*
        if (this.state.liked===true){
            text="You liked this."}
        }else{
            text="Like."}
        */
        return <button onClick={()=>this.handleClick()}>{text}</button>
        //return <button onClick={this.handleClick}>{text}</button>
    }
}