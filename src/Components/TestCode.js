import React from 'react';
import Button from '@material-ui/core/Button';
import { BsPlayFill } from 'react-icons/bs';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
  },
});

const StyledButton = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
};

const TestCode = () => {
  return (
    <div>
      <StyledButton />
      <Button
        size='large'
        variant='contained'
        color='primary'
        endIcon={<BsPlayFill />}
      >
        Hello Mr Button
      </Button>
      <Button size='large' variant='contained' color='secondary'>
        Secondary
      </Button>
    </div>
  );
};

export default TestCode;
