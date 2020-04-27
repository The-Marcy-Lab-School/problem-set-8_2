const UserCard = (props) => {
  const [email, setEmail] = React.useState('loading...')
  const [firstname, setFirstName] = React.useState('loading...')
  const [lastname, setLastName] = React.useState('loading...')
  const [avatar, setAvatar] = React.useState('...loading')

  React.useEffect(() => {
    async function userInfo(userId) {
      let response = await fetch(`https://reqres.in/api/users/${userId}`);
      let data = await response.json()
      let user = await data.data;

      setEmail(user.email)
      setFirstName(user.first_name)
      setLastName(user.last_name)
      setAvatar(user.avatar)
    }
    userInfo(props.userId)
}, [props.userId])

  return(
    <div>
      <img src={avatar} />
      <h1>{firstname} {lastname}</h1>
      <h3>{email}</h3>
    </div>
  )
}
