import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import "../styles/App.css";

const App = () => {
  const url = 'https://www.course-api.com/react-tours-project';
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
const fetchTours = () => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setTours(data))
      .catch((error) => console.error("Unable to fetch tours:", error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchTours();
  }, []);
  const removeTour = (id) => {
    setTours((previousTours) =>
      previousTours.filter((tour) => tour.id !== id)
    );
  };
  return (
    <main id="main">
      <header className="page-header">
        <p className="eyebrow">Make your next trip unforgettable</p>
        <h1>Explore our tours</h1>
        <span className="title-underline" aria-hidden="true" />
      </header>
      {loading && <Loading />}
      {!loading && tours.length === 0 && <button onClick={fetchTours}>refresh</button>}
      {tours && <Tours tours={tours} removeTour={removeTour}/>}
    </main>
  )
}
export default App;
