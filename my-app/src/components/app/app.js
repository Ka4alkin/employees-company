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
                {name: 'John A.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Dominik T.', salary: 1500, increase: true, rise: false, id: 2},
                {name: 'Merkel V.', salary: 1100, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all'
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
            rise: false,
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

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    onSetSalaryFromInput = (getSalary, getId) => {
        /*console.log('onSetSalaryFromInput')
        console.log('getSalary', getSalary)
        console.log('getId', getId)*/



        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === getId) {
                    return {...item, id: getId, salary: +getSalary}
                }
                return item
            })
        }))
    }

    onSelectFilter(data, filterName) {
        switch (filterName) {
            case 'rise':
                return data.filter(item => item.rise)
            case 'more1000':
                return data.filter(item => item.salary > 1000)
            default:
                return data
        }
    }

    onFilterPost = (name) => {
        console.log('onChangeFilter')
        console.log(name)
        // this.setState({filter: name})
        // this.onSelectFilter()
    }
    onFilterSelect = (filterName) => {
        this.setState({filter: filterName})
    }


    render() {
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length

        const {data, term, filter} = this.state
        // const visibleData = this.searchEmp(data, term)
        const visibleData = this.onSelectFilter(this.searchEmp(data, term), filter)


        return (
            <div className="App">
                <AppInfo
                    employees={employees}
                    increased={increased}
                />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>

                <EmployersList
                    // data={this.state.data}
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSetSalaryFromInput={this.onSetSalaryFromInput}
                />
                <EmployersAddForm
                    onAddPersonApp={this.onAddPersonApp}
                />
            </div>
        );
    }
}

export default App;