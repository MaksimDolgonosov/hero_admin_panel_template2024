
import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { heroAdded } from "../../actions";
// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    //const { heroes } = useSelector(state => state);

    const dispatch = useDispatch();
    const [hero, setHero] = useState({
        id: "",
        name: "",
        description: "",
        element: "none",
    })

    const createHero = (e) => {
        e.preventDefault();
        const heroID = uuidv4();
        const newHerro = { ...hero, id: heroID };
        //setHero(newHerro)
        console.log(newHerro);
        dispatch(heroAdded(newHerro));
        setHero({
            id: "",
            name: "",
            description: "",
            element: "none",
        })
    }


    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    //onChange={(e) => setHero({ name: e.target.value, description: null, element: null })}
                    onChange={(e) => setHero({ ...hero, ...{ name: e.target.value } })}
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?"
                    value={hero.name} />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    onChange={(e) => setHero({ ...hero, ...{ description: e.target.value } })}
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }}
                    value={hero.description} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    onChange={(e) => setHero({ ...hero, ...{ element: e.target.value } })}
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={hero.element}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button onClick={createHero} type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;