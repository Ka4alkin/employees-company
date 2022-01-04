import './employees-add-form.css'
// import './employees-add-form.scss'
import {Component} from "react";

class EmployersAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        }

    }

    onValueFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.salary]: e.target.salary,
        })
    }

    onSubmit  = (e) => {
        e.preventDefault()

        if (this.state.name.length < 3 || !this.state.salary) return;

        this.props.onAddPersonApp(this.state.name,this.state.salary)

        this.setState({
            name: '',
            salary: ''
        })
    }


    render() {

        // const {id} = this.props
        const {name, salary} = this.state


        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit }
                    >
                    {/*управляемий елемент
                    двойное связивание
                    исключение: инпут тип ФАЙЛ
                    */}
                    <input type="text"
                           onChange={this.onValueFormChange}
                           name="name"
                           value={name}
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"/>
                    <input type="number"
                           onChange={this.onValueFormChange}
                           name="salary"
                           value={salary}
                           className="form-control new-post-label"
                           placeholder="З/П в $?"/>

                    <button type="submit"
                            className="btn btn-outline-light"
                    >Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;