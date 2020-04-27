import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import getUsers from './getUsers';

const useStyles = makeStyles({
  root: {
    maxHeight: 1000,
    maxWidth: 545,
  },
});

const UserCard = () => {
  const [user, setUser] = React.useState({
    avatar:'loading...',
    email:'loading...',
    first_name: 'loading...',
    last_name:'loading...'
  });

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getUsers('3')
      .then(data => {
        setUser(data);
        setIsLoading(false);
      });
  }, []);

  const classes = useStyles();

  return (
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="220"
          width="545"
          image={user.avatar}
          title="user avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {`${ user.first_name } ${ user.last_name }`}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
            { user.email }
        </Typography>
      </CardContent>
      </CardActionArea>
  </Card>
  );
};

export default UserCard;