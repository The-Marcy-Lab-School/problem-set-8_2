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
    maxHeight: 200,
    maxWidth: 345,
  },
});

const UserCard = () => {
  let results = [];
  // const userID = 4;
  const [user, setUser] = React.useState(results);
  const [isLoading, setIsLoading] = React.useState(true);

  const classes = useStyles();

  React.useEffect(() => {
    getUsers('5')
      .then(data => {
        setUser(data);
        setIsLoading(false);
      });
  }, []);

  

  return (
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="120"
          width="345"
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