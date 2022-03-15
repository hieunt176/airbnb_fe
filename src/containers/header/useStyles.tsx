import { makeStyles } from '@mui/styles';

import theme from '../../theme';

export const useStyles = makeStyles({
  header: {
    background: '#fff',
  },
  content: {
    width: '85%',
    margin: '0 auto',
    color: '#000',
    height: '80px',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },

  hidden: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
});
