import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { deletePost } from '../../actions/delete-post-action';
import { editPost } from '../../actions/edit-post-action';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Collapse,
  ButtonGroup,
  Button,
  CircularProgress,
  Box,
  TextField,
  FormControl,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '15px 0',
  },
  media: {
    height: 140,
  },
  actions: {
    marginTop: '1.5em',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  progressRow: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1.5em 0',
    padding: '1em',
  },
  progressIndicator: {
    color: theme.palette.primary.dark,
  },
  form: {
    width: '100%',
  },
  formField: {
    margin: '.8em 0',
  },
}));

type postProps = {
  title: string;
  body: string;
  date: any;
  id: any;
  error: any;
  fetchingPosts: boolean;
};

const Post = ({ title, body, date, id, error, fetchingPosts }: postProps) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [t, setT] = useState(title);
  const [b, setB] = useState(body);

  const onEditPost = () => {
    dispatch(editPost({title: t, body: b, date, id}))
    setEditMode(false)
  }


  const onDeletePost = (id: any): void => {
    dispatch(deletePost(id));
  };

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  if (fetchingPosts) {
    return (
      <Box className={styles.progressRow}>
        <CircularProgress className={styles.progressIndicator} />
      </Box>
    );
  }

  return (
    <Card className={styles.root}>
      <CardHeader
        title={title}
        subheader={`Дата публикации: ${date}`}
        action={
          <IconButton
            className={clsx(styles.expand, {
              [styles.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {editMode ? (
            <FormControl className={styles.form}>
              <TextField
                className={styles.formField}
                id="standard-basic"
                label="Тема поста"
                value={t}
                onChange={(e) => setT(e.target.value)}
              />
              <TextField
                className={styles.formField}
                id="standard-multiline-flexible"
                label="Содержимое поста"
                multiline
                value={b}
                onChange={(e) => setB(e.target.value)}
              />
              <Button variant="contained" onClick={onEditPost}>Сохранить изменения</Button>
            </FormControl>
          ) : (
            <Typography variant="body1" color="textSecondary" component="p">
              {body}
            </Typography>
          )}
          <ButtonGroup
            aria-label="text primary button group"
            className={styles.actions}
          >
            <Button color="secondary" onClick={() => onDeletePost(id)}>
              Удалить
            </Button>
            <Button
              color="primary"
              onClick={() => setEditMode((prev) => (prev = !prev))}
            >
              <Typography>
                {editMode ? 'Отмена' : 'Редактировать'}
              </Typography>
            </Button>
          </ButtonGroup>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
