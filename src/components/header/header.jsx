import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    height: '70px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    color: 'whitesmoke',
    fontFamily: "'Alata', sans-serif",
  },
  add: {
    display: 'flex',
    alignItems: 'center',
    color: 'whitesmoke',
    cursor: 'pointer',
    marginLeft: '2em',
  },
  nav: {
    display: 'flex',
  },
}));

const Header = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Container className={styles.content}>
        <NavLink to="/">
          <Typography variant="h5" className={styles.title}>
            React blog
          </Typography>
        </NavLink>
        <NavLink to="/addPost">
          <Typography variant="button" className={styles.add}>
            Новый пост
          </Typography>
        </NavLink>
      </Container>
    </Box>
  );
};

export default Header;
