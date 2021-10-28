
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const usePlaceholderStyles = makeStyles(theme => ({
  placeholder: {
    color: "#aaa"
  }
}));

const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};

export default Placeholder