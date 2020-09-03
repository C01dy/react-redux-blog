import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '15px 0',
    backgroundColor: '#E6E6FA'
  },
  media: {
    height: 140,
  },
});

const Post = ({title, body, date }) => {
  const styles = useStyles();
  return (
    <Card className={styles.root}>
      <CardHeader
        title={title}
        subheader={date}
      />
    </Card>
  );
};

export default Post;
