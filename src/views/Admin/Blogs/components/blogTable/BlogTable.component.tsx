import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  MenuItem,
  CircularProgress,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Avatar,
  Paper
} from '@material-ui/core';
import router, { useRouter } from 'next/router';
import container from './BlogTable.container';
import BackgroundVectors from '@components/BackgroundVectors';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IPostState } from '@store/interfaces';
import ConfirmDeleteModal from '@components/ConfirmDeleteModal';

const useStyles = makeStyles((theme) =>
  createStyles({
    table: {
      tableLayout: 'fixed',
      [theme.breakpoints.down('md')]: {
        display: 'block'
      }
    },
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    heading: {
      color: '#00204e',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '28px'
    },
    sectionGem: {
      minHeight: '40vh',
      paddingTop: '40px',
      marginBottom: '20px',
      position: 'relative'
    },
    actionBtn: {
      '& button': {
        margin: '.5rem'
      }
    }
  })
);
interface Props {
  posts?: IPostState;
  loading?: any;
  auth?: any;
  route?: string;
  next_page?: number;
  onCreatePostStart?: (formData) => any;
  onFetchPostsStart?: (formData) => any;
  onDeleteExperienceStart?: (id, handleClose) => any;
}

const TableList = (props) => {
  const classes = useStyles();

  const { experience, index, handleClickOpen } = props;

  return (
    <TableRow hover>
      <TableCell>
        <Grid container direction="column" justify="center" spacing={1}>
          <Grid item>
            <Grid item>{index + 1}</Grid>
          </Grid>
        </Grid>
      </TableCell>

      <TableCell>{experience.title ?? ''}</TableCell>
      <TableCell>{experience.description ?? ''}</TableCell>

      <TableCell>{experience.metaDescription ?? ''}</TableCell>
      <TableCell className={classes.actionBtn} colSpan={2}>
        <IconButton
          aria-label="edit"
          edge="end"
          size="small"
          onClick={() =>
            router.push({
              pathname: '/manage/blogs/edit-blog',
              query: { id: experience.id }
            })
          }
        >
          <EditIcon color="primary" />
        </IconButton>
        <IconButton
          aria-label="delete"
          edge="end"
          size="small"
          onClick={() => handleClickOpen(experience.id)}
        >
          <DeleteIcon color="primary" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

function ExperiencesTable({
  posts: { postsList, next_page, isCreating, isDeleting },
  onDeleteExperienceStart
}: Props) {
  const classes = useStyles();
  const [page, setpage] = React.useState(0);

  const [open, setOpen] = useState(false);

  const [toDeleteId, setToDeleteId] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (id) => {
    setToDeleteId(id);
    setOpen(true);
  };

  const deleteDataHandler = () => {
    onDeleteExperienceStart(toDeleteId, handleClose);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Meta Description</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postsList.map((experience, index) => (
            <TableList
              key={experience.id}
              experience={experience}
              index={index}
              handleClickOpen={handleClickOpen}
            />
          ))}
        </TableBody>
        <ConfirmDeleteModal
          handleClose={handleClose}
          open={open}
          deleteDataHandler={deleteDataHandler}
          isDeleting={isDeleting}
        />
      </Table>
    </TableContainer>
  );
}

export default container(ExperiencesTable);
