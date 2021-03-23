import { Header } from './Header';
import { MovieCard } from './MovieCard';
import '../styles/content.scss';

interface ContentMovieProps {
  title: string;
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Value: string;
    }>;
    Runtime: string;
  }>;
}

export function Content(props: ContentMovieProps) {
  return (
    <div className="container">
      <Header title={props.title} />

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}