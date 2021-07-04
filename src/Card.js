import React from 'react';
import './card.css';
import getData from './Data';

function Card(props) {
    const [email, setEmail] = React.useState('Loading...');
    const [firstName, setFirstName] = React.useState('Loading...');
    const [lastName, setLastName] = React.useState('Loading...');
    const [avatar, setAvatar] = React.useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fretchhh.files.wordpress.com%2F2015%2F03%2Floading2.gif&f=1&nofb=1');

    React.useEffect(() => {
        getData(props.userId).then(user => {
            setEmail(user.email);
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setAvatar(user.avatar);
        });
    }, [props.userId]);

    return (
        <div className='card'>
            <center><img src={avatar} className='pic' alt='user pic'></img></center>
            <ul className='userInfo'>
                <li>Email: {email}</li>
                <li>First Name: {firstName}</li>
                <li>Last Name: {lastName}</li>
            </ul>
        </div>
    );
}

export default Card;