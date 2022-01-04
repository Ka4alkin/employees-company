import './app-filter.css'

const AppFilter = (props) => {


    let dataButtons = [
        {name: 'all', text: 'Все сотрудники'},
        {name: 'rise', text: 'На повишение'},
        {name: 'more1000', text: 'З/п больше 1000$'}
    ]

    const buttons = dataButtons.map(({name, text}) => {
            const active = props.filter === name
            const clazz = active ? 'btn-light' : 'btn-outline-light'

            return (
                <button className={`btn ${clazz}`}
                        key={text}
                        onClick={() => props.onFilterSelect(name)}
                        type="button">
                    {text}
                </button>
            )
        }
    )

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;