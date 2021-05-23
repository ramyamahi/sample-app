import React from 'react';
import profile from '../assets/images/profile.jpeg';
import info from '../assets/images/info.svg';
import authenticate from '../assets/images/authenticate.svg';
import password from '../assets/images/password.svg';

const Profile = () => {
    return (
        <div className="profile-container">
            <section className="profile-left">
                <div className="left-container">
                    <img src={profile} alt="profile" className="profile-img"/>
                    <h4 className="profile-name">Deepak</h4>
                    <p className="profile-data">Ireland, Galeway</p>
                    <p className="profile-data1">Member since May 6, 2020</p>
                    <a href="" className="link-container">
                        <img src={info} alt="icon" className="icon"/>
                        <div className="link-header">
                            <h3>Personal Information</h3>
                            <h5>Update your personal information</h5>
                        </div>
                    </a>
                    <a href="" className="link-container">
                        <img src={authenticate} alt="icon" className="icon"/>
                        <div className="link-header">
                            <h3>Two-Factor Authentication</h3>
                            <h5>Update your authentication preferences</h5>
                        </div>
                    </a>
                    <a href="" className="link-container">
                        <img src={password} alt="icon" className="icon"/>
                        <div className="link-header">
                            <h3>Change Password</h3>
                            <h5>Change your account password</h5>
                        </div>
                    </a>
                </div>
            </section>
            <section className="profile-right">
                <form className="right-container">
                    <h3 className="info-title">Personal Information</h3>
                    <div className="name-container">
                        <div className="first-name">
                            <label className="form-label">First Name</label><br/>
                            <input type="text" placeholder="Enter your First Name" className="firstname-input"/>
                        </div>
                        <div className="last-name">
                            <label className="form-label">Last Name</label><br/>
                            <input type="text" placeholder="Enter your Last Name" className="lastname-input"/><br/>
                        </div>
                    </div>
                    <div className="email-container">
                        <label className="form-label">E-mail</label><br/>
                        <input type="email" placeholder="xyzexample@gmail.com" className="email-input"/><br/>
                    </div>
                    <div className="dob-container">
                        <label className="form-label">Date of Birth</label><br/>
                        <input type="text" placeholder="dd-mm-yyyy" className="dob-input"/>
                    </div>
                    <div className="code-container">
                        <div className="calling-code">
                            <label className="form-label">Calling Code</label><br/>
                            <input type="text" placeholder="Enter your Calling Code"/>
                        </div>
                        <div className="phone">
                            <label className="form-label">Phone Number</label><br/>
                            <input type="number" placeholder="Enter your Mobile Number"/><br/>
                        </div>
                    </div>
                    <div className="profile-btn">
                        <button className="cancel-btn">Cancel</button>
                        <button className="save-btn">Save</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Profile