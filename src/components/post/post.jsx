import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { deletePost } from '../../actions/delete-post-action';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '15px 0',
    // backgroundColor: '#E6E6FA',
    border: '1px solid lightgrey'
  },
  media: {
    height: 140,
  },
});

const Post = ({ title, body, date, id, onDeletePost }) => {
  const styles = useStyles();

  return (
    <Card className={styles.root} onClick={() => onDeletePost(id)}>
      <CardActionArea>
        <CardHeader title={title} subheader={date} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePost: (id) => dispatch(deletePost(id))
  };
};

export default connect(null , mapDispatchToProps)(Post);
