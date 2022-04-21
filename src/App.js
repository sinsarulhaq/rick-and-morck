import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Cards from "./Components/Cards/Cards";
import Filter from "./Components/Filters/Filter";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";

function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, updateFetchData] = useState([]);
  const [search, setSearch] = useState("")

  const { info, results } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    //IIFE Function
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center my-4">
        Rick & Morty <span className="text-primary">Wiki </span>
      </h1>
    <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
            <Filter />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
    </div>
  );
}

export default App;
