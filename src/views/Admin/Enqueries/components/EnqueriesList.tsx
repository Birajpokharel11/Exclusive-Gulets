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
import { IExperienceState } from '@store/interfaces';

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
  enquiries?: any[];
  loading?: boolean;
}

const TableList = ({ list }) => {
  const classes = useStyles();

  return list.map((item) => (
    <TableRow hover key={item.id}>
      <TableCell>Biraj Pokharel</TableCell>
      <TableCell>biraj@gmail.com</TableCell>

      <TableCell>
        <Paper style={{ background: 'red' }}>
          <Typography align="center">New</Typography>
        </Paper>
      </TableCell>
      <TableCell className={classes.actionBtn} colSpan={2}>
        <Button>View</Button>
      </TableCell>
    </TableRow>
  ));
};

function EnqueriesList({ enquiries, loading }: Props) {
  const getContent = () => {
    if (loading && !enquiries.length) {
      return (
        <TableRow>
          <TableCell>Loading...</TableCell>
        </TableRow>
      );
    } else if (!loading && !enquiries.length) {
      return (
        <TableRow>
          <TableCell>Data Not found!!</TableCell>
        </TableRow>
      );
    }

    return <TableList list={enquiries} />;
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>{getContent()}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default EnqueriesList;
