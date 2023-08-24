
// import { useState } from 'react';

// export default function SignUpForm() {
//     const [disable,setDisable]=useState(null)
//     const [change,setChange]=useState({
//                 name:'',
//                 email:'',
//                 password:'',
//                 confirm:'',
//                 error:''
//             })
  
//    const  handleChange =(e)=>{
//           setChange({ [e.target.name]:e.target.value, error:''})
//    }
//   const   handleSubmit =(e)=>{
//          e.preventDefault()
//          alert(console.log(change))
//         }
//           return (
//             <div>
//                 <div className="form-container">
//                   <form autoComplete="off" onSubmit={handleSubmit()}>
//                     <label>Name</label>
//                     <input type="text" name="name" value={this.name} onChange={this.handleChange} required />
//                     <label>Email</label>
//                     <input type="email" name="email" value={props.email} onChange={this.handleChange} required />
//                     <label>Password</label>
//                     <input type="password" name="password" value={state.password} onChange={this.handleChange} required />
//                     <label>Confirm</label>
//                     <input type="password" name="confirm" value={state.confirm} onChange={this.handleChange} required />
//                     <button type="submit" disabled={disable}>SIGN UP</button>
//                   </form>
//                 </div>
//                 <p className="error-message">&nbsp;{this.state.error}</p>
//             </div>
//         );
//           }

  


import { Component } from "react";

export default class SignUpForm extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        confirm:'',
        error:''
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value, error:''
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        alert(JSON.stringify(this.state))
    }
    render(){
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                  <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                  </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }

}