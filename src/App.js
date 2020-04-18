import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  Loading = () => {
    this.setState({
      isLoading: false,
    });
  };

  componentDidMount = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  // render에 이 setInterval 메서드를 넣게 되면 re-render되면서 setInterval 메서드가 다시 실행된다.
  // componentDidMount에 메서드를 넣으면 reder와는 상관 없기 때문에 ( re-render는 업데이트임 ) 한번만 실행된다.

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        <h1>
          {isLoading
            ? "Loading..."
            : movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.poster}
                />
              ))}
        </h1>
      </div>
    );
  }
}

export default App;
