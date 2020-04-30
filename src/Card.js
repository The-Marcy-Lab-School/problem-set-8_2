import React from 'react';
import './card.css';

function Card (props){ 
    const [ email, setEmail ] = React.useState('Loading...');
    const [ firstName, setFirstName ] = React.useState('Loading...');
    const [ lastName, setLastName ] = React.useState('Loading...');
    const [ avatar, setAvatar ] = React.useState('Loading...');
    
    React.useEffect(() => {
        async function getData() {
            const res = await fetch(`https://reqres.in/api/users/${props.userId}`);
            const data = await res.json();
            const obj = await data.data;
            
            setEmail(obj.email);
            setFirstName(obj.first_name);
            setLastName(obj.last_name);
            setAvatar(obj.avatar);
        }
        getData();
    }, [props.userId]);
      
      

    
    return (
        <div className='card'>
            <center><img src={avatar} className='pic'></img></center>
            <ul className='userInfo'>
                <li>Email: {email}</li>
                <li>First Name: {firstName}</li>
                <li>Last Name: {lastName}</li>
            </ul>
        </div>
        );
      
}

export default Card;