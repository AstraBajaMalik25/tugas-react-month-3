import React from "react";
import useFetch from "./useFetch";

export default function FetchExample() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  return (
    <div>
      <h3>Fetch Example</h3>
      <p><b>Title:</b> {data.title}</p>
      <p>{data.body}</p>
    </div>
  );
}
