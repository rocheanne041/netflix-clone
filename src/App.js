import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
    <Banner />
    
      <Row isLargeRow={true} title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title = "Trending Now"  fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
      <Row title="Scifi" fetchUrl={requests.fetchfetchSciFi } />
      <Row title="Animation" fetchUrl={requests.fetchAnimation } />
    </div>
  );
}

export default App;
