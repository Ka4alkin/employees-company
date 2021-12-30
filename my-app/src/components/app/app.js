import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: 'John A.', salary: 800, increase: false, id: 1},
                {name: 'Dominik T.', salary: 1500, increase: true, id: 2},
                {name: 'Merkel V.', salary: 1100, increase: false, id: 3},
            ]
        }
    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id)

            /*const before = data.slice(0,index)
            const after = data.slice(index + 1)

            const newArr = [...before,...after]*/

            return {
                data: data.filter(elem => elem.id !== id)
            }

        })
    }

    render() {
        return (
            <div className="App">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployersAddForm/>
            </div>
        );
    }
}

export default App;