
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useSelector, useDispatch } from "react-redux";
import { activeFiltersAdded } from "../../actions";

const HeroesFilters = () => {
    const { filters } = useSelector(state => state);
    const dispatch = useDispatch();

    const onActive = (filter) => {
        dispatch(activeFiltersAdded(filter))
    }

    const renderFilters = (filters) => {
        return filters.map(filter => {
            switch (filter) {
                case "fire":
                    return <button data-element={filter} key={filter} onClick={() => onActive(filter)} className="btn btn-danger">Огонь</button>
                case "water":
                    return <button data-element={filter} key={filter} onClick={() => onActive(filter)} className="btn btn-primary">Вода</button>
                case "wind":
                    return <button data-element={filter} key={filter} onClick={() => onActive(filter)} className="btn btn-success">Ветер</button>
                case "earth":
                    return <button data-element={filter} key={filter} onClick={() => onActive(filter)} className="btn btn-secondary">Земля</button>
                default:
                    return <button data-element={filter} key={filter} onClick={() => onActive(filter)} className="btn btn-outline-dark active">Все</button>
            }

        })
    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {renderFilters(filters)}
                    {/* <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Огонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary">Земля</button> */}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;