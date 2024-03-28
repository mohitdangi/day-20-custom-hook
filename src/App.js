import React from "react";
import useDataFetching from "./useDataFetching";

const App = () => {
  const { data, loading, error } = useDataFetching(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
