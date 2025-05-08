import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserEntityFilter = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [entities, setEntities] = useState([]);

    useEffect(() => {
        // Fetch all users
        axios.get('/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    useEffect(() => {
        if (selectedUser) {
            // Fetch entities created by the selected user
            axios.get(`/api/places/created-by/${selectedUser}`)
                .then(response => setEntities(response.data))
                .catch(error => console.error('Error fetching entities:', error));
        }
    }, [selectedUser]);

    return (
        <div>
            <h2>Filter Entities by User</h2>
            <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
                <option value="">Select a user</option>
                {users.map(user => (
                    <option key={user._id} value={user._id}>{user.name}</option>
                ))}
            </select>

            <div>
                <h3>Entities Created by Selected User</h3>
                <ul>
                    {entities.map(entity => (
                        <li key={entity._id}>{entity.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserEntityFilter;