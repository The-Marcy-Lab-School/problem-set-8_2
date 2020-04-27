import React from 'react'
import './Card.css';

const UserCard = (props) => {
  const [avatar, setAvatar] = React.useState('https://media.tenor.com/images/e549f9798674301c5af2c91581194091/tenor.gif')
  const [firstName, setFirstName] = React.useState('Loading...')
  const [lastName, setLastName] = React.useState('Loading...')
  const [email, setEmail] = React.useState('Loading...')
  
  React.useEffect(() => {
    fetch(`https://reqres.in/api/users/${props.userId}`)
    .then((res) => res.json())
    .then((json) => {
      setAvatar(json.data.avatar)
      setFirstName(json.data.first_name)
      setLastName(json.data.last_name)
      setEmail(json.data.email)
    })
    .catch((err) => console.log(err))
  })
  
  return(
    <div className="card-container">
      <div className="card-header">
        <img src={avatar}></img>
      </div>
      <div className="card-body">
        <div className="card-content">
          <h1>{firstName} {lastName}</h1>
          <h6>{email}</h6>
        </div>
      </div>
    </div>
  )
}

export default UserCard