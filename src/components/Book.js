import { useAppContext } from "./context/AppContext";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export const Book = ({ book }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <Card sx={{ width: 320, m: 1 }} variant="outlined">
      <Link href={book.volumeInfo.previewLink} target="_blank">
        <CardMedia
          component="img"
          alt={book.volumeInfo.title}
          sx={{ width: "100%", objectFit: "contain" }}
          height="100"
          image={book.volumeInfo.imageLinks.smallThumbnail}
        />
      </Link>

      <CardContent sx={{ textAlign: "center", minHeight: 150 }}>
        <Typography variant="h6" component="h2">
          {book.volumeInfo.title}
        </Typography>
        <Typography variant="caption" component="h5">
          {book.volumeInfo.authors.join(" | ")}
        </Typography>
        <Typography variant="caption" component="h6">
          {book.volumeInfo.publishedDate}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {favoritesChecker(book.id) ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => removeFromFavorites(book.id)}
          >
            Remove from Favorites
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="success"
            onClick={() => addToFavorites(book)}
          >
            Add to Favorites
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
