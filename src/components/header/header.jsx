import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background:
      'linear-gradient(90deg, rgba(153,0,33,1) 0%, rgba(236,0,51,1) 50%, rgba(153,0,33,1) 100%)',
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
  nav_btn: {
    display: 'flex',
    alignItems: 'flex-end',
    color: 'whitesmoke',
    cursor: 'pointer',
    marginLeft: '2em'
  },
  nav: {
    display: 'flex',
  },
});

const Header = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Container className={styles.content}>
        <Typography variant="h5" className={styles.title}>
          React blog
        </Typography>
        <NavLink to="/add_post">
          <Box className={styles.nav}>
          <Typography variant="button" className={styles.nav_btn}>
              Главная
              <span className="material-icons">home</span>
            </Typography>
            <Typography variant="button" className={styles.nav_btn}>
              Добавить пост
              <span className="material-icons">addchart</span>
            </Typography>
          </Box>
        </NavLink>
      </Container>
    </Box>
  );
};

export default Header;
