import React, {useEffect} from 'react';
import axios from 'axios';
import Chip from "@material-ui/core/Chip";

const Genres = ({
                  selectedGenres,
                  setSelectedGenres,
                  genres,
                  setGenres,
                  type,
                  setPage
                }) => {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((el) => el.id !== genre.id));
    setPage(1);
  }

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    )
    setGenres([...genres, genre]);
    setPage(1);
  }
  const fetchGenres = async () => {
    try {
      const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      console.log('this is data genres', data);
      setGenres(data.genres);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({})
    }
  }, [])
  return (
    <>
      <div style={{padding: "6px 0"}}>
        {selectedGenres && selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            style={{margin: 2}}
            size="small"
            color="primary"
            key={genre.id}
            clickable
            onDelete={() => handleRemove(genre)}
          />
        ))}
        {genres && genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{margin: 2}}
            size="small"
            key={genre.id}
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
      </div>
    </>
  );
};

export default Genres;
