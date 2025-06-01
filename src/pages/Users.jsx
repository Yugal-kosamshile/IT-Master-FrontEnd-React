import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import API from '../axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get('/get-users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-5">Loading users...</div>;
  if (error) return <div className="text-center text-danger mt-5">{error}</div>;

  return (
    <div className="container users-page my-5">
      <h1 className="heading">👥 Registered Users</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered users-table">
          <thead className="table-light">
            <tr>
              <th>Username</th>
              <th>Mobile</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="text-center">
                <td>{user.username}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
