import React from 'react'

function Effect() {
    const [count, setCount] = React.useState(0);
  const [User,setUser]=React.useState([]);
    React.useEffect(() => {
        console.log("mount");
        return ()=>{
            console.log("unmount")
        }
    },[count]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching user data:', error));
      
    }, []);
      console.log(User);
  return (
    <div>Effect
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <div>{
          User.map(user => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))
        }</div>
    </div>
  )
}

export default Effect