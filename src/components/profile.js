import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Profile extends Component {
    render() {
        return (
            <form>
            <h3>Pet's Profile</h3>

            <div className="form-group">

            <label for="type" className="font-large">Pet Type</label>
                <div className="col-sm-15">
                    <select class="form-control" id="gender">
                    <option value="">Select</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>  
                    </select>
                </div>
            </div> 

           

            
            <div className="form-group">
                <label>Pet Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" />
            </div>

            <div className="form-group">
                <label>Breed Type</label>
                <input type="text" className="form-control" placeholder="Enter Breed Type" />
            </div>

            <div className="form-group">
                <label for="type" className="font-large">Pet Gender</label>
                <div className="col-sm-15">
                <select class="form-control" id="gender">    
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
        </div>

            <div className="form-group">
                    <label>DOB Of Pet</label>
                    <input type="date" className="form-control" placeholder="Enter DOB" />
            </div>

            <div className="form-group">
                <label>Height</label>
                <input type="number" className="form-control" placeholder="Enter Height in cm" />
            </div>
            
            <div className="form-group">
                <label>Weight</label>
                <input type="number" className="form-control" placeholder="Enter Weight in Kg" />
            </div>

            <div className="form-group">
                <label>Pet Color</label>
                <input type="text" className="form-control" placeholder="Enter Pet Color" />
            </div>

            <div className="form-group">
                    <label for="boold_type" className="font-large">Blood Group</label>
                    <div className="col-sm-15">
                        <select class="form-control" id="blood_group">
                        <option value="">Select</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="DEA_1.1">DEA 1.1</option>
                        <option value="DEA_1.2">DEA 1.2</option>
                        <option value="DEA_3">DEA 3</option> 
                        <option value="DEA_4">DEA 4</option>
                        <option value="DEA_5">DEA 5</option>
                        <option value="DEA_6">DEA 6</option>
                        <option value="DEA_7">DEA 7</option>
                        <option value="DEA_8">DEA 8</option>
                        </select>
                    </div>
            </div>

            <div className="form-group">
                <label>Upload Picture</label>
                <input type="file" accept="image/*" className="file-input" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Add Another Form</button>
            
            <div className='text-center pt-4'>
                <span className="pt-3"> ----------------------- </span>OR
                <span className="pt-3"> ------------------------ </span>
            </div>
            <p></p>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p >
            </p>
            <div className='forgot'>
                    <Link to="#">Back</Link>
            </div>
            


        </form>
        );
    }
}