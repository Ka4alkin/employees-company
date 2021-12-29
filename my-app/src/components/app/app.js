import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import EmployersListItem from "../employers-list-item/employers-list-item";

function App() {

    const date = [
        {name: 'John A.', salary: 800, increase: false, id: 1},
        {name: 'Dominik T.', salary: 1500, increase: true, id: 2},
        {name: 'Merkel V.', salary: 1100, increase: false, id: 3},
    ]


    return (
        <div className="App">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={date}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;