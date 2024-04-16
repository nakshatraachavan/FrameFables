import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '350px', // Set the desired height
    width: '100%', // Make the CardMedia take up the full width of its container
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundBlendMode: 'darken',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '10px',
    color: 'white',
  },
  details: {
    display: 'flex',
    flexDirection: 'column', // Change to column layout for smaller content
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 6px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});