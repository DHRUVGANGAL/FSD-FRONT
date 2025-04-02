// components/UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, currentUser, cancelEdit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [formError, setFormError] = useState('');

  // Reset form when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAge(currentUser.age.toString());
    } else {
      setName('');
      setAge('');
    }
    setFormError('');
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!name.trim() || !age.trim()) {
      setFormError('Name and age are required');
      return;
    }
    
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum <= 0) {
      setFormError('Age must be a positive number');
      return;
    }

    const userData = { name, age: ageNum };
    let result;

    if (currentUser) {
      // Update existing user
      result = await updateUser(currentUser.id, userData);
    } else {
      // Add new user
      result = await addUser(userData);
    }

    if (result.success) {
      // Reset form after successful submission
      setName('');
      setAge('');
      setFormError('');
    } else {
      setFormError(result.error || 'An error occurred');
    }
  };

  return (
    <div className="user-form">
      <h2>{currentUser ? 'Edit User' : 'Add New User'}</h2>
      
      {formError && <div className="form-error">{formError}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
            min="1"
          />
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            {currentUser ? 'Update User' : 'Add User'}
          </button>
          
          {currentUser && (
            <button 
              type="button" 
              className="cancel-btn" 
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;