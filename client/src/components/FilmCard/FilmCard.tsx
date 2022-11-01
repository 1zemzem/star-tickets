import * as React from "react";
import { API_URL } from "../../service/index";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { host } from "../../service";
import { useParams } from "react-router-dom";
import { IFilm } from "../../types/typesFilm";
import {
  FilmSessionsReduserState,
  IFilmSession,
} from "../../types/typesFilmSession";

type Props = Partial<FilmSessionsReduserState> & {
  fetchFilmSessions: Function;
};

const FilmCard = (props: Props) => {
  const { filmSessionsList, fetchFilmSessions, error, isLoaded } = props;

  const [film, setFilm] = useState<IFilm | null>(null);
  const [filmSession, setFilmSession] = useState<IFilmSession | null>(null);

  const { id } = useParams();

  const fetchOneFilm = async (id: any) => {
    const { data } = await host.get("api/film/" + id);
    return data;
  };

  useEffect(() => {
    fetchOneFilm(id).then((data) => setFilm(data));
  }, []);

  // useEffect(() => {
  //   fetchFilmSessions(film?.id).then((data: any) => setFilmSession(data));
  // }, []);

  return (
    <Card sx={{ bgcolor: "#27272a" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            src={API_URL + "/" + film?.img}
            alt="img"
            height={480}
          />
        </Grid>
        <Grid item xs={8}>
          <Container>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mb: 4 }}
              >
                {film?.title}
              </Typography>

              <Typography paragraph sx={{ mb: 2 }}>
                {film?.info}
              </Typography>
              <Grid container spacing={2}>
                {/* <Grid item>
                  <Button variant="outlined" sx={{ mb: 4 }}>
                    Time
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" sx={{ mb: 4 }}>
                    Time
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" sx={{ mb: 4 }}>
                    Time
                  </Button>
                </Grid> */}
              </Grid>
            </CardContent>
          </Container>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FilmCard;

// import * as React from "react";
// import { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Container, Grid } from "@mui/material";
// import { host } from "../../service";
// import { useParams } from "react-router-dom";
// import { API_URL } from "../../service/index";

// const FilmCard = () => {
//   const { id } = useParams();
//   console.log(id);

//   const fetchOneFilm = async (id) => {
//     const { data } = await host.get("api/film/" + id);
//     return data;
//   };
//   const [film, setFilm] = useState({});

//   useEffect(() => {
//     fetchOneFilm(id).then((data) => setFilm(data));
//   }, []);

//   return (
//     <Card sx={{ bgcolor: "#27272a" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//           <CardMedia
//             component="img"
//             src={API_URL + "/" +  film.img}
//             alt="img"
//             height={480}
//           />
//         </Grid>
//         <Grid item xs={8}>
//           <Container>
//             {/* <CardActions>
//               <Button
//                 size="large"
//                 variant="contained"
//                 color="secondary"
//                 sx={{ borderRadius: 20, my: 2 }}
//               >
//                 Купить билет
//               </Button>
//             </CardActions> */}
//             <CardContent>
//               <Typography
//                 gutterBottom
//                 variant="h5"
//                 component="div"
//                 sx={{ mb: 4 }}
//               >
//                 {film.title}
//               </Typography>

//               <Typography paragraph sx={{ mb: 2 }}>
//                 {film.info}
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item>
//                   <Button variant="outlined" sx={{ mb: 4 }}>
//                     Time
//                   </Button>
//                 </Grid>
//                 <Grid item>
//                   <Button variant="outlined" sx={{ mb: 4 }}>
//                     Time
//                   </Button>
//                 </Grid>
//                 <Grid item>
//                   <Button variant="outlined" sx={{ mb: 4 }}>
//                     Time
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Container>
//         </Grid>
//       </Grid>
//     </Card>
//   );
// };

// export default FilmCard;
