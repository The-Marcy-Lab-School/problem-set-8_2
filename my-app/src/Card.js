import React from 'react';
import './App.css';

function Card(props){
    const [userProfilePicture, setProfilePicture] = React.useState('Loading...')
    const [userFirstName, setFirstName] = React.useState('Loading...')
    const [userLastName, setLastName] = React.useState('Loading...')
    const [userEmail, setEmail] = React.useState('Loading...')

    React.useEffect(() => {
      async function getUserData(userId) {
        const response = await fetch(`https://reqres.in/api/users/${userId}`)
        const data = await response.json()

        setProfilePicture(data.data.avatar)
        setFirstName(data.data.first_name)
        setLastName(data.data.last_name)
        setEmail(data.data.email)
      }
      getUserData(props.userId)
    }, [props.userId])

  return(
    <div>
      <img src={userProfilePicture}/>
      <h1>{userFirstName} {userLastName}</h1>
      <h3>{userEmail}</h3>
    </div>
  )
}

export default Card;
