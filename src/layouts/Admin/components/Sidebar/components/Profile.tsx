import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = (props) => {
  const {
    className,
    auth: { currentUser },
    ...rest
  } = props;

  const classes = useStyles();

  const user = {
    name: currentUser.firstName ?? '',
    avatar: currentUser.imageURL ?? '/static/images/avatars/avatar_11.png'
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        // component={MakeLink}
        src={user.avatar}
        // href="/settings"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      {/* <Typography variant="body2">{user.bio}</Typography> */}
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
