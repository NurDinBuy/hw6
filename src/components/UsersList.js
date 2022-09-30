import React from 'react';
import classes from './UsersList.module.css'


function UsersList(props) {
    const {users, details} = props
    return (
        <div className={classes.container}>
            {
                users.map(user =>
                    <div key={user.id} className={classes.userList}>
                        <h2>{user.name}</h2>
                        <button data-id={user.id} onClick={details} className={classes.btn}>INFO</button>
                    </div>)
            }
        </div>
    );
}

export default UsersList;