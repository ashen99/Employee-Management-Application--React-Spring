import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import TableView from "./components/TableView/TableView";
import AddEmployee from "./components/AddEmployee/AddEmployee";


function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<TableView />}> </Route>
                    <Route path="/employee" element={<TableView />}> </Route>
                    <Route path="/add-employee" element={<AddEmployee />}></Route>
                </Routes>
            </div>
        </Router>

    </div>
  );
}

export default App;
