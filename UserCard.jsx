function UserCard(props) {
  const [avatar, setAvatar] = React.useState('Loading...')
  const [firstName, setFirstName] = React.useState('Loading...')
  const [lastName, setLastName] = React.useState('Loading...')
  const [email, setEmail] = React.useState('Loading...')

  React.useEffect(() => {
    async function getUsers(userId) {
      const response = await fetch(`https://reqres.in/api/users/${userId}`)
      const data = await response.json()



      setAvatar(data.data.avatar)
      setFirstName(data.data.first_name)
      setLastName(data.data.last_name)
      setEmail(data.data.email)

    }
    getUsers(props.userId)
  }, [props.userId])

  return (
    <div>
      <figure>
        <img src={avatar} />
      </figure>

      <h2>{firstName} {lastName}</h2>
      <h3>{email}</h3>
    </div>
  )
}
