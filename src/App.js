// 7-3

// fetch, json을 진행 후 로딩을 끝냈기 때문에 반드시 setLoading(false)를 해줘야함
// then대신에 async-await를 보편적으로 사용함
// await을 감싸는 await을 만들 수 있음
// movies.map((movie
// ->map의 argument는 x, m, g 등등 마음대로 해도됨
// 여기선 movie라고 정함
// div key={movie.id} h2{movie.title}/h2
// -> 이 컴포넌트들은 movie 배열에 있는 각 movie에서 변형되어 나온 것

// key={g} -> 따로 정해진 key가 없기 때문에 g를 가져와 key로 써줌
// 단, g가 고유한 값일 경우에만 가능

// import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => ( // key 값 넘겨주기 필수
            <div key={movie.id}> 
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;