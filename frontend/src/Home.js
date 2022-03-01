import React, { useEffect } from "react";

import Footer from "./component/layout/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Cards from "./component/layout/Cards";
import CategoryLibrary from "./component/layout/CategoryLibrary";
import Services from "./component/layout/Services";

import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "./redux/actions/productAction";

import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";

import Image1 from "../src/component/img/cake.jpg";

import Logo from "../src/component/img/cakelogo3.png";
import Aos from "aos"
import "aos/dist/aos.css"
import CommonHeader from "./component/layout/Header";
import Shortcut from "./component/layout/Shortcut";

const Home = ({ product }) => {
  const dispatch = useDispatch();



  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );
  const {isAuthenticated, user} = useSelector(state=> state.user)

  useEffect(() => { 
    Aos.init({duration:1000});
   
      dispatch(getProduct())
   
    
  }, [dispatch]);
  const classes = useStyles();
  return (
    <>
      
    
        <main>
          <React.Fragment>
            <CssBaseline />

            <CommonHeader />
            <main className={classes.main}>
            {isAuthenticated && <Shortcut user={user}/>}  
          
              <div  className={classes.heroContent}>
              
                <Container  data-aos="fade-up" maxWidth="sm" className={classes.container}>
                  <img
                    style={{
                      height: "400px",
                      width: "auto",
                      marginLeft: "100px",
                      marginTop: "-100px",
                      marginBottom: "-80px",
                    }}
                    src={Logo}
                    alt="."
                  ></img>

                  <Typography
                    variant="h6"
                    align="center"
                    color="textSecondary"
                    paragraph
                  >
                    All types Of cakes .... We served you with the best quility
                    as well as best flavors that differs us from other cake
                    shops..
                  </Typography>

                  <div   data-aos="fade-up" className={classes.heroButtons}>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item>
                        <Button href="#scroll"  variant="contained" color="primary">
                          Explore More
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Container>
              </div>
            </main>
          </React.Fragment>
          <div  data-aos="fade-up">
          <Services />
          </div>
          <div  data-aos="fade-up">
          <CategoryLibrary />
          </div>
         
          <>
            <Container  data-aos="fade-up" className={classes.cardGrid} maxWidth="md">
              <Grid  data-aos="fade-up" container spacing={4}>
                {products &&
                  products.map((product) => <Cards  data-aos="fade-up" product={product} />)}
              </Grid>
            </Container>
          </>
          <Footer />
        </main>

    </>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    color: "black",
  },

  heroContent: {
    minHeight: "100vh",
    backgroundImage: `url(${Image1})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    color: "white",
    clipPath: "circle(75.6% at 34% 0)",
  },

  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  container: {
    paddingTop: "100px",
    marginRight: "1000px",
  },
  typography: {
    fontFamily: '"Apple Color Emoji"',
  },
  logo: {
    marginLeft: "20px",
  },
  appBar: {
    backgroundImage: `url(${Image1})`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    opacity: "0.9",
  },
  "@global": {
    "@keyframes pulsate": {
      from: {
        opacity: 1,
        transform: "scale(1)",
      },
      to: {
        opacity: 0,
        transform: "scale(2)",
      },
    }
  },
  background: theme.palette.primary.main,
  borderRadius: "100%",
  animation: "$plusate 1s infinite ease",
  position: "absolute",
  zIndex: -2,
}));
