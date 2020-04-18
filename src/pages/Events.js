import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slide from 'react-reveal/Slide';
import { Container, CssBaseline } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Events from '../assets/events.svg';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Test from '../assets/undraw_scrum_board_cesn.svg';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

    button: {
         backgroundColor: '#746B6B',
         color:'white'
    },
    rootCard: {
        maxWidth: 400,
        height: 400
      },
      media: {
        height: 230,
      },
      grid: {
          height: 550
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        margin:'auto',
      },
      paperModal: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

const EventsAlt = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <Fragment>
         <CssBaseline />
         <Container fixed>
         <Grid container spacing={2} className={classes.grid}>
         <Grid item xs={12} sm={6} md={3} lg={6} xl={6} style={{paddingTop:'100px',}}>
             <Typography variant='h3' style={{fontWeight:'bold'}}>Events</Typography>
             <Typography variant='h6' style={{color:'grey', paddingTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
         </Grid>
         <Grid item xs={12} sm={6} md={3} lg={6} xl={6} style={{paddingTop:'100px',}}>
        <img src={Events} alt='event_img' height='50%' width='120%' />
         </Grid>
         </Grid>
         <Grid container spacing={2}>
         <Grid item xs={12} sm={6} md={3} lg={4} xl={4} style={{}}>
         <Slide bottom>
         <Card className={classes.rootCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Test}
          title="Event"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Slide>
         </Grid>
         <Grid item xs={12} sm={6} md={3} lg={4} xl={4} style={{}}>
         <Slide bottom>
         <Card className={classes.rootCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Test}
          title="Event"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Slide>
         </Grid>
         <Grid item xs={12} sm={6} md={3} lg={4} xl={4} style={{}}>
         <Slide bottom>
         <Card className={classes.rootCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Test}
          title="Event"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Slide>
         </Grid>
         </Grid>
         <Grid container spacing={2}>
         <Grid item xs={12} sm={6} md={3} lg={4} xl={4} style={{}}>
         <Slide bottom>
         <Card className={classes.rootCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Test}
          title="Event"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Slide>
         </Grid>
         <Grid item xs={12} sm={6} md={3} lg={4} xl={4} style={{}}>
         <Slide bottom>
         <Card className={classes.rootCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Test}
          title="Event"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Slide>
         </Grid>
         <Grid item xs={12} sm={6} md={3} lg={4} xl={4} style={{}}>
         <Slide bottom>
         <Card className={classes.rootCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Test}
          title="Event"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Slide>
         </Grid>
         </Grid>
         <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        
      >
        <Fade in={open}>
          <div className={classes.paperModal}>
            <h2 id="transition-modal-title">Lizard</h2>
            <p id="transition-modal-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Fade>
      </Modal>
         </Container>
            
        </Fragment>
    )
}

export default EventsAlt
