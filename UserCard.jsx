function UserCard({ userId }){
  const [user, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)
  
  React.useEffect(()=>{
    getUser(userId)  
      .then(user =>{
        setUsers(user);
        setIsLoading(false);
      });
  },[]);
  
  
  return (
    <div>
      <ul>
      {isLoading ? ("...Loading"): 
        <li key={user.id}>
        <p>Email: {user.email}</p>
        <p> {user.first_name}</p>
        <p>{user.last_name}</p>
        <img src={user.avatar}/>
        </li>}
      </ul>  
    </div>
    );
}


async function getUser(userId){
  try{
  const request = await fetch(`https://reqres.in/api/users/${userId}`);
  const response = await request.json();
  return response.data;
  }catch(err){
    console.log(err);
    throw new Error(err);
  }
}
