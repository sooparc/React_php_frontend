import { Routes, Route } from "react-router-dom";
import Table from "./Components/Table";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>
    </>
  );
}

export default App;
