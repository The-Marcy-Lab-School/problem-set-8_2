import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const UserCard = () => {
  const classes = useStyles();

  return (
  <Card className={classes.root}>
    <CardActionArea>
      {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140" //200maybe ?
          width="345"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
      /> */}
      <img src='https://via.placeholder.com/345x200/FFFF00/000000'/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
              Peter Rose
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
            Fellow @MarcyLabSchool 
            Software Engineer
            Pokemon Master
        </Typography>
      </CardContent>
      </CardActionArea>
  </Card>
  );
};

export default UserCard;