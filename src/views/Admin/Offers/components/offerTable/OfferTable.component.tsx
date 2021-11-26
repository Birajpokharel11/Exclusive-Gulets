import React, { useState } from 'react';
import Image from 'next/image';
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
import container from './OfferTable.container';
import BackgroundVectors from '@components/BackgroundVectors';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import ConfirmDeleteModal from '@components/ConfirmDeleteModal';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IExperienceState } from '@store/interfaces';
import DefaultImage from '@assets/images/not_found_image.png';
import { trimString } from '@utils/misc';

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
  experience?: IExperienceState;
  loading?: any;
  offer?: any;
  route?: string;
  next_page?: number;
  onCreateExperienceStart?: (formData) => any;
  onDeleteGenericOfferStart?: (toDeleteId, handleClose) => any;
}

const TableList = (props) => {
  const classes = useStyles();

  const { offer, index, handleClickOpen } = props;

  return (
    <TableRow hover>
      <TableCell>
        <Grid container direction="column" justify="center" spacing={1}>
          <Grid item>
            <Grid item>{index + 1}</Grid>
          </Grid>
        </Grid>
      </TableCell>

      <TableCell>
        <img
          src={offer.photo ? offer.photo : '/assets/images/not_found_image.png'}
          alt="image"
          style={{ width: '50px', height: '50px' }}
        />
      </TableCell>

      <TableCell>{offer.name ?? ''}</TableCell>
      <TableCell>{trimString(offer.description) ?? ''}</TableCell>

      <TableCell>{offer.airports ?? ''}</TableCell>
      <TableCell className={classes.actionBtn} colSpan={2}>
        <IconButton
          aria-label="edit"
          edge="end"
          size="small"
          onClick={() =>
            router.push({
              pathname: '/manage/offers/edit-offer',
              query: { id: offer.id }
            })
          }
        >
          <EditIcon color="primary" />
        </IconButton>
        <IconButton
          aria-label="delete"
          edge="end"
          size="small"
          onClick={() => handleClickOpen(offer.id)}
        >
          <DeleteIcon color="primary" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

function ExperiencesTable({
  offer: { genericOffers, isDeleting },
  onCreateExperienceStart,
  onDeleteGenericOfferStart
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
    onDeleteGenericOfferStart(toDeleteId, handleClose);
  };

  console.log('handleClose>>', open);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Offer Name</TableCell>
            <TableCell>Offer Description</TableCell>
            <TableCell>Airports</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {genericOffers.map((offer, index) => (
            <TableList
              key={offer.id}
              offer={offer}
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
