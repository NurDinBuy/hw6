import React from 'react';
import UsersList from "../components/UsersList";

import classes from './UserPage.module.css'

function UserPage(props) {

    const [users, setUsers] = React.useState([])
    const [user, setUser] = React.useState({})
    const [modal, setModal] = React.useState(false)

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    const fetchUser = (e) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`)
            .then(response => response.json())
            .then(data => setUser(data))
        setModal(true)
    }

    const rootClasses = [classes.myModal]
    if (modal) {
        rootClasses.push(classes.active)
    }


    return (
        <div>
            <button onClick={fetchUsers} className={classes.btn}>get users</button>

            <UsersList users={users} details={fetchUser}/>

            <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
                <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                    <span>{user.name}</span>
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                </div>
            </div>
        </div>
    );
}

export default UserPage;