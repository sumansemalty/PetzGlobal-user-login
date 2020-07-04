import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login';

export default class SignUp extends Component {
    render() {
        return (
            <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter Username" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            
                
            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" placeholder="Enter Phone Number" />
            </div>

            <div className="form-group">
                    <label>Date Of Birth</label>
                    <input type="date" className="form-control" placeholder="Enter DOB" />
            </div>

            <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" placeholder="" />
            </div>


        

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Re-Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p >
            </p>
            <div className="forgot-password text-right">
                Already registered <Link to="/sign-in">sign in?</Link>
            </div>


        </form>
        );
    }
}