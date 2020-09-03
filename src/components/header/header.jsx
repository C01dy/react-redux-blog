import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background:
      'linear-gradient(90deg, rgba(156,58,180,1) 0%, rgba(123,29,253,1) 50%, rgba(115,13,114,1) 100%)',
  },
  content: {},
  title: {
    margin: 0,
    height: '70px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    color: 'whitesmoke',
    fontFamily: "'Alata', sans-serif",
  },
});

const Header = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Container className={styles.content}>
        <Typography className={styles.title}>React blog</Typography>
      </Container>
    </Box>
  );
};

export default Header;
