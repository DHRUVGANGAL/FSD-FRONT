// import { useState } from "react";
// import { PostComponent } from "./Post";

// function App() {
//   const [posts, setPosts] = useState([]);

//   // const postComponents = posts.map(post => <PostComponent
//   //   name={post.name}
//   //   subtitle={post.subtitle}
//   //   time={post.title}
//   //   image={post.image}
//   //   description={post.description}
//   // />)

//   function addPost() {
//     setPosts([...posts, {
//       name: "harkirat",
//       subtitle: "10000 followers",
//       time: "2m ago",
//       image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//       description: "What to know how to win big? Check out how these folks won $6000 in bounties."
//     }])
//   }

//   return (
//     <div style={{background: "#dfe6e9", height: "100vh", }}>
//       <button onClick={addPost}>Add post</button>
//       <div style={{display: "flex", justifyContent: "center" }}>
//         <div>
//           {posts.map(post => <PostComponent
//     name={post.name}
//     subtitle={post.subtitle}
//     time={post.title}
//     image={post.image}
//     description={post.description}
//   />)}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App




// import { useEffect, useState } from "react";

// function App() {
//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(function() {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//       .then(async res => {
//         const json = await res.json();
//         setTabData(json);
//         setLoading(false);
//       });

//   }, [currentTab])
  
//   return <div>
//     <button onClick={function() {
//       setCurrentTab(1)
//     }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
//     <button onClick={function() {
//       setCurrentTab(2)
//     }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
//     <button onClick={function() {
//       setCurrentTab(3)
//     }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
//     <button onClick={function() {
//       setCurrentTab(4)
//     }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
// <br /> 
//     {loading ? "Loading..." : tabData.title}
//   </div>
// }

// export default App





// import React from 'react';

// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };

// export default App;





// import './App.css'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function App() {

//   return <div>
//     <BrowserRouter>
//       <Link to="/">Allen</Link>
//       | 
//       <Link to="/neet/online-coaching-class-11">Class 11</Link> 
//       | 
//       <Link to="/neet/online-coaching-class-12">Class 12</Link>
//       <Routes>
//         <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
//         <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
//         <Route path="/" element={<Landing />} />
//         <Route path="*" element={<NotFound />} />

//       </Routes>
//     </BrowserRouter>
//   </div>
// }



// function NotFound() { return <div>404</div> }

// function Landing() {
//   return <div>
//     Welcome to allen
//   </div>
// }

// function Class11Program() {
//   return <div>
//       NEET programs for Class 11th
//   </div>
// }

// function Class12Program() {
//   const navigate=useNavigate();
//     function redirect(){
//       navigate('/');
//     }
//   return <div>
//       NEET programs for Class 12th
//       <button onClick={redirect}>navigate to Landing page</button>
//   </div>
// }

// export default App

//layout

//outlet




// better code

// import React, { useState, useRef } from 'react';
// function App(){
//      return<div>
//          <Stopwatch />
//      </div>
// }

// function Stopwatch() {
//   const [time, setTime] = useState(0);
//   const intervalRef = useRef(null);

//   const startTimer = () => {
//     if (intervalRef.current !== null) return; // Already running, do nothing

//     intervalRef.current = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   return (
//     <div>
//       <h1>Timer: {time}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }



// export default App;





//debounce


// import React from 'react'
// import { useState, useRef } from'react'



// function useDebounce(fn) {
//     const currentTimer=useRef();
//     const fn=()=>{
//         clearTimeout(currentTimer.current);
//         currentTimer.current=setTimeout(fn,200);
//     }
//     return fn;
// }

// const App = () => {
//     function sendDataToBackend(){
//         fetch("api.amazon.com/search/")
//     }
//     const debouncedSend=useDebounce(sendDataToBackend);



//   return (
//     <input type="text" onChange={debouncedSend} />
//   )
// }

// export default App






// import './App.css'
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { notifications, totalNotificationSelector } from './atoms'
// import { useEffect } from 'react'
// import axios from 'axios'

// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }
// const notifications=atom({
//     key: 'notifications',
//     default: selector({
//      get: async ()=>{
//          const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//          return res.data;
//      }
    
    
//     })
// })
// function MainApp() {
//   const [networkCount, setNetworkCount] = useRecoilState(notifications)
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

// //   useEffect(() => {
// //     // fetch
// //     axios.get("https://sum-server.100xdevs.com/notifications")
// //       .then(res => {
// //         setNetworkCount(res.data)
// //       })
// //   }, [])

//   return (
//     <>
//       <button>Home</button>
      
//       <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
//       <button>Jobs {networkCount.jobs}</button>
//       <button>Messaging ({networkCount.messaging})</button>
//       <button>Notifications ({networkCount.notifications})</button>

//       <button>Me ({totalNotificationCount})</button>
//     </>
//   )
// }

// export default App


// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([null]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const API_URL = 'https://fsd-backend-git-main-dhruvgangals-projects.vercel.app';

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/getdata`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Error fetching users: ' + err.message);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      
      const result = await response.json();
      setUsers([...users, result.data]);
      return { success: true };
    } catch (err) {
      console.error('Error adding user:', err);
      setError('Error adding user: ' + err.message);
      return { success: false, error: err.message };
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      
      const result = await response.json();
      setUsers(users.map(user => user.id === parseInt(id) ? result.data : user));
      setCurrentUser(null);
      return { success: true };
    } catch (err) {
      console.error('Error updating user:', err);
      setError('Error updating user: ' + err.message);
      return { success: false, error: err.message };
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      
      await response.json();
      setUsers(users.filter(user => user.id !== parseInt(id)));
      return { success: true };
    } catch (err) {
      console.error('Error deleting user:', err);
      return { success: false, error: err.message };
    }
  };

  const selectUserForEdit = (user) => {
    setCurrentUser(user);
  };

  const cancelEdit = () => {
    setCurrentUser(null);
  };

  return (
    <div className="app-container">
      <h1>User Management System</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="main-content">
        <div className="form-section">
          <UserForm 
            addUser={addUser} 
            updateUser={updateUser} 
            currentUser={currentUser}
            cancelEdit={cancelEdit}
          />
        </div>
        
        <div className="list-section">
          {loading ? (
            <p>Loading users...</p>
          ) : (
            <UserList 
              users={users} 
              deleteUser={deleteUser} 
              selectUserForEdit={selectUserForEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;


