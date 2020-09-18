import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import RecipeTable from "./RecipeTable";
import { DataContext } from "../../context/DataContext";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import commentsAPI from "../../api/comments";
import favoritesAPI from "../../api/favorites";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AuthContext } from "../../context/AuthContext";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";

const method = [
  "Sequi aut iusto nisi possimus incidunt ut. Illo qui rerum cupiditate ut omnis cumque et dolore. Corporis et delectus quo.",
  "Est ducimus modi nihil debitis quisquam eius officiis quis. Omnis reprehenderit ipsum ea consequatur quas ab dolorem minus veniam. Assumenda iste dicta nobis fugit. Tempore explicabo officia earum laborum.",
  "In quaerat voluptatem quis adipisci nihil eos. Doloremque et recusandae vitae incidunt occaecati ut. Earum ut aperiam eaque rem qui eveniet doloremque. Et neque et reiciendis blanditiis in fugit rerum sunt. Ipsa quae ut sunt corrupti atque impedit. Vitae sed nesciunt quis rerum est unde modi quibusdam necessitatibus.",
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.values.md,
    margin: "auto",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  title: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
  imageGrid: {
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  image: {
    borderRadius: "5px",
  },
  totalTime: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
    },
  },
  yield: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
    },
  },
  ingredients: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(10),
    },
  },
  method: {},
  imgContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  textContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  favorite: {
    color: "red",
    cursor: "pointer",
    marginLeft: "1rem",
  },
}));
function IngredientList({ ingredientLines }) {
  const classes = useStyles();
  return (
    <Grid item xs container direction="column" className={classes.ingredients}>
      <Typography variant="h6" gutterBottom>
        Ingredients:
      </Typography>
      <List dense>
        {ingredientLines.map((ingredient, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={ingredient} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
function MethodList({ method }) {
  const classes = useStyles();
  return (
    <Grid item xs className={classes.method}>
      <Typography variant="h6" gutterBottom>
        Method:
      </Typography>
      <List dense>
        {method.map((instruction, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={instruction} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
function Yield({ servings }) {
  const classes = useStyles();
  return (
    <Grid item xs className={classes.yield}>
      <Typography variant="subtitle2">Servings:</Typography>
      <Typography variant="body2">{servings}</Typography>
    </Grid>
  );
}
function PreparationTime({ totalTime }) {
  const classes = useStyles();
  return (
    <Grid item xs className={classes.totalTime}>
      <Typography variant="subtitle2">Preparation:</Typography>
      <Typography variant="body2">{totalTime}</Typography>
    </Grid>
  );
}
function FoodImage({ image, label }) {
  const classes = useStyles();
  return (
    <Grid item xs className={classes.imageGrid}>
      <img src={image} alt={label} className={classes.image} />
    </Grid>
  );
}

function Recipe(props) {
  const {
    favorites,
    loadingComments,
    setLoadingComments,
    getFavorites,
    currentRecipe,
  } = useContext(DataContext);
  const { auth, user, token } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [fav, setFav] = useState(null);
  const { id } = useParams();
  const classes = useStyles();

  const {
    label,
    totalTime,
    image,
    ingredientLines,
    totalNutrients,
    totalWeight,
    uri,
  } = currentRecipe;

  const isFavorite = () => {
    const result = favorites.some((val) => val.label === id);
    setFav(result);
  };
  const getComments = async (id) => {
    setLoadingComments(true);
    const response = await commentsAPI.searchComments(id);
    setComments(response);
    setLoadingComments(false);
  };
  const handleAddFav = () => {
    const { CHOCDF, ENERC_KCAL, FAT, PROCNT, FIBTG } = totalNutrients;
    const newTotalNutrients = { CHOCDF, ENERC_KCAL, FAT, PROCNT, FIBTG };
    const favorite = {
      label: id,
      totalTime,
      image,
      ingredientLines,
      totalNutrients: newTotalNutrients,
      totalWeight,
      yield: currentRecipe["yield"],
      user: user._id,
      uri,
    };
    favoritesAPI
      .addFavorite(favorite, token)
      .then((res) => {
        setFav(true);
        getFavorites();
      })
      .catch((e) => console.log(e));
  };
  const handleRemoveFav = () => {
    favoritesAPI
      .removeFavorite(id, token)
      .then((res) => {
        setFav(false);
        getFavorites();
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getComments(id);
    if (auth) isFavorite();
  }, []);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      {/* Recipe title */}
      <Grid item xs className={classes.title}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          display="inline"
          gutterBottom
        >
          {label}
        </Typography>
        {auth &&
          (fav ? (
            <FavoriteRoundedIcon
              onClick={handleRemoveFav}
              fontSize="large"
              className={classes.favorite}
            />
          ) : (
            <FavoriteBorderRoundedIcon
              onClick={handleAddFav}
              fontSize="large"
              className={classes.favorite}
            />
          ))}
      </Grid>
      {/* Food image, preparation time and portions */}
      <Grid item container classes={{ container: classes.imgContainer }}>
        <FoodImage image={image} label={label} />
        <Grid item xs container direction="column">
          <PreparationTime totalTime={totalTime} />
          <Yield servings={currentRecipe["yield"]} />
        </Grid>
      </Grid>
      {/* Ingredients and method */}
      <Grid item xs container classes={{ container: classes.textContainer }}>
        <IngredientList ingredientLines={ingredientLines} />
        <MethodList method={method} />
      </Grid>
      {/* Nutrients table */}
      <RecipeTable totalNutrients={totalNutrients} totalWeight={totalWeight} />
      {/* Comments */}
      {loadingComments ? (
        <CircularProgress />
      ) : (
        <CommentList comments={comments} />
      )}
      {auth && <CommentForm recipe={id} getComments={getComments} />}
    </Grid>
  );
}

export default Recipe;
