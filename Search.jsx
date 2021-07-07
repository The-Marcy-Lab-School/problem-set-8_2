function Search() {
  const [userId, setUserId] = React.useState(1);
  return (
    <div className='search'>
      <form>
        <label>Users</label>
        <select>
          <option onClick={() => setUserId(1)} value='User 1'>User 1</option>
          <option onClick={() => setUserId(2)} value='User 2'>User 2</option>
          <option onClick={() => setUserId(3)} value='User 3'>User 3</option>
          <option onClick={() => setUserId(4)} value='User 4'>User 4</option>
          <option onClick={() => setUserId(5)} value='User 5'>User 5</option>
          <option onClick={() => setUserId(6)} value='User 6'>User 6</option>
          <option onClick={() => setUserId(7)} value='User 7'>User 7</option>
          <option onClick={() => setUserId(8)} value='User 8'>User 8</option>
          <option onClick={() => setUserId(9)} value='User 9'>User 9</option>
          <option onClick={() => setUserId(10)} value='User 10'>User 10</option>
          <option onClick={() => setUserId(11)} value='User 11'>User 11</option>
          <option onClick={() => setUserId(12)} value='User 12'>User 12</option>
        </select>
      </form>

        <UserCard userId={userId}/>
    </div>
  )
}
