import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 128
  }
});

// component: semantic, variant: style
export default function UserCard({ userId }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function() {
      const res = await fetch(`https://reqres.in/api/users/${userId}`);
      const newUser = await res.json();
      setUser(newUser.data);
      setIsLoading(false);
    })();
  }, [userId]);

  const classes = useStyles();
  return (
    <Card>
      {isLoading ? (
        <CardContent>
          <Typography variant="body1" component="p">
            Loading...
          </Typography>
        </CardContent>
      ) : (
        <CardContent>
          <Typography variant="h3" component="h1">
            {user.first_name + ' ' + user.last_name}
          </Typography>
          <Typography variant="caption" component="p" color="textSecondary">
            First Name + Last Name
          </Typography>
          <CardMedia
            className={classes.root}
            component="img"
            src="https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
            alt="User's Image"
            title="Paella dish"
          />
          <Typography variant="caption" component="p" color="textSecondary">
            Picture
          </Typography>
          <Typography variant="body1" component="p">
            {'Email: ' + user.email}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
