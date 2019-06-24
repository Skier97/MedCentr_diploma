import React, {Component} from 'react'
import "./style.css"
import user from "../../img/user.jpg";

export default class InfoDocPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="formInput">
                <div className="div">
                    <p className="name_page">Врачи</p>
                    <div className="center gran" >
                        <img src={user} width = "18%" />
                            <div className="div">
                                <p className="FIO">Иванов Иван Иванович</p>
                                <p className="position">Заместитель лаборатории</p>
                                <p>Стаж 25 лет, высшая категория</p>
                                <p>Часы работы: 9:00 - 18:00, ПН-ПТ</p>
                            </div>
                    </div>
                    <div className="center gran">
                        <img src={user} width = "18%"/>
                            <div className="div">
                                <p className="FIO">Петров Сергей Иванович</p>
                                <p className="position">Врач-гематолог</p>
                                <p>Стаж 20 лет, высшая категория</p>
                                <p>Часы работы: 9:00 - 18:00, ПН-ПТ</p>
                            </div>
                    </div>
                    <div className="center gran">
                        <img src={user} width = "18%"/>
                            <div className="div">
                                <p className="FIO">Сергеева Лариса Вячеславовна</p>
                                <p className="position">Врач-гематолог</p>
                                <p>Стаж 22 лет, высшая категория</p>
                                <p>Часы работы: 9:00 - 18:00, СБ-ВС</p>
                            </div>
                    </div>
                    <div className="center gran">
                        <img src={user} width = "18%"/>
                            <div className="div">
                                <p className="FIO">Васин Петр Сергеевич</p>
                                <p className="position">Лаборант</p>
                                <p>Стаж 5 лет, 2 категория</p>
                                <p>Часы работы: 8:00 - 16:00, ПН-ПТ</p>
                            </div>
                    </div>
                </div>

            </div>
        )
    }
}