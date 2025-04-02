import React from 'react';

const UserList = ({ users, deleteUser, selectUserForEdit }) => {
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(id);
    }
  };

  // Add a check for null or undefined users
  if (!users) {
    return (
      <div className="user-list">
        <h2>Users</h2>
        <p className="error-message">Error loading users. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h2>Users</h2>
      {users.length === 0 ? (
        <p className="no-users">No users found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => selectUserForEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;