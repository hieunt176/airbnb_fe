import { makeStyles } from '@mui/styles';

import theme from '../../../theme';

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

  //styles for Search component
  root: {
    marginLeft: 150,
    color: '#000 !important',
  },

  tab: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#000',
    },
    '& .Mui-selected': {
      opacity: '1 !important',
    },
  },

  tab_item: {
    color: '#000 !important',
    textDecoration: 'none !important',
    '&:hover': {
      opacity: '0.8',
    },
  },

  link: {
    color: '#000 !important',
    textDecoration: 'none !important',
  },

  panel: {
    position: 'absolute',
    marginLeft: '-150px',
  },

  //styles for Search component
  search: {
    width: 300,
    height: 48,
    border: '1px solid #dddddd !important',
    boxShadow: '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%) !important',
    borderRadius: '40px !important',
    display: 'flex !important',
    justifyContent: 'space-around !important',
    fontSize: '12px !important',
    color: '#000 !important',
  },

  search_icon: {
    padding: 6,
    borderRadius: '50%',
    backgroundColor: '#ff385c',
    color: '#fff !important',
    marginRight: '-40px !important',
  },

  //styles for Detail component
  form: {
    border: '1px solid #dddddd !important',
    borderRadius: '32px !important',
    padding: '10px 20px 10px 20px !important',
    background: 'rgb(255 255 255)',
  },

  input: {
    marginLeft: '10px !important',
  },
});
