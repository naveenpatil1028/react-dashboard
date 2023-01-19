import { Link } from 'react-router-dom'
import './newUser.css'

function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='Username' />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Full Name' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div className="newUserItem">
                    <label>Phone Number</label>
                    <input type="text" placeholder='Phone Number' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='Email' />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder='Address' />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name='gender' id='female' value="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <Link to='/users'>
                <button className="newUserButton">Create</button>
                </Link>
            </form>
        </div>
    )
}

export default NewUser
