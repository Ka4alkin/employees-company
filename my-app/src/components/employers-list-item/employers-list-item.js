import './employers-list-item.css'
import {Component} from "react";
import {sassFalse} from "sass";


class EmployersListItem extends Component {

    /*constructor(props) {
        super(props);

        this.state = {
            salary: ''
        }
    }*/

    onSalaryEdit = (e) => {
        const salary = e.target.value.replace('$', '')

        if (this.inputValid(e.target)) {
            // console.log('ok')
            this.props.onSetSalaryFromInput(salary, this.props.id)
        } else {
            e.target.classList.add('active')
        }
    }

    inputValid = (input) => {
        input.classList.remove('active')
        return /^[0-9]+$/.exec(input.value.replace('$', ''))
    }

    render() {

        const {name, salary, onDelete, onToggleProp, increase, rise} = this.props

        let liClass = "list-group-item d-flex justify-content-between";


        if (increase) {
            liClass += " increase ";
        }

        if (rise) {
            liClass += " like ";
        }


        return (

            <li className={liClass}>
                <span className="list-group-item-label"
                      onClick={onToggleProp} data-toggle="rise">{name}</span>
                <input onChange={this.onSalaryEdit} type="text" className="list-group-item-input"
                       defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={onToggleProp}
                            data-toggle="increase"
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}

export default EmployersListItem;