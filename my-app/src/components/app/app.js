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
            ],
            term: ''
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            this.maxId--
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    onAddPersonApp = (name, salary) => {

        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });

    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }


    render() {

        const {data, term} = this.state
        const visibleData = this.searchEmp(data, term)

        return (
            <div className="App">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter/>
                </div>

                <EmployersList
                    // data={this.state.data}
                    data={visibleData}
                    onDelete={this.deleteItem}
                />
                <EmployersAddForm
                    onAddPersonApp={this.onAddPersonApp}
                />
            </div>
        );
    }
}

export default App;