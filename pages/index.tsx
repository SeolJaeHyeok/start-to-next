import { useRouter } from "next/router";
import HeadTitle from "../components/HeadTitle";

export default function Home({ movieData }) {
  const router = useRouter();

  const handleMovieClick = (movieId: string) => {
    router.push(`/movies/${movieId}`);
  };
  return (
    <div className='container'>
      <HeadTitle title='Home' />
      {!movieData && <h4>Loading...</h4>}
      {movieData?.map((movie) => (
        <div
          onClick={() => handleMovieClick(movie.id)}
          className='movie'
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results: movieData } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      movieData,
    },
  };
}
