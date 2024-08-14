import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div class="content-main">
                <div class="content-table">
                    <table>
                        <tr>
                            <th>S No</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>College</th>
                            <th>Year of Passing out</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ajaykumar A</td>
                            <td>Information Technology</td>
                            <td>Hindusthan College of Engineering and Technology</td>
                            <td>2025</td>
                        </tr>
                    </table>
                </div>
                <div class="content-form">
                    <h1>Login Page</h1>
                    <label>Username</label>
                    <input type="text" id="username"></input>
                    <label>Password</label>
                    <input type="text" id="password"></input>
                    <button type="button" id="submit">Login</button>
                </div>
            </div>
        );
    }
}

export default Header;