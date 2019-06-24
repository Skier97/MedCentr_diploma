import React, {Component} from 'react'

// import notFound from "../../img/notFound_mini.png";
import connect from "react-redux/es/connect/connect";
import {sessionService} from "redux-react-session";


const PatItem = ({item}) =>
    <tr className="">
        <td>
            {item.number.name}
        </td>
        <td>
            {item.type.name}
        </td>
        <td>
            {item.doctor.name}
        </td>
        <td>
            {item.datetest}
        </td>
    </tr>


export class CheckResControl extends React.Component {
    setEditable = (event) => {
        document.getElementById("change").style.display = "none";
        document.getElementById("save").style.display = "block";
        this.setState({
            formDisabled: false
        })
    }
    handleInput = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.id]: event.target.value
            }
        })
    }
    updateUserInfo = () => {
        console.dir(this.state)
        this.setState({
            formDisabled: true
        })
        document.getElementById("change").style.display = "block";
        document.getElementById("save").style.display = "none";
    }

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            formDisabled: true,
            formDisabled_True: true,
            history: []
        };

    }


    render() {

        return (
            <div className="container">
                <div>
                    <div className="panel-body">
                        <table className='infoUser'>
                            <h4 className="text-center"> Личная информация </h4>
                            <tbody>
                            <tr>
                                <td>Id:</td>
                                <td><input type="text" className="input" id="surname" value={this.state.user.id}
                                           disabled={this.state.formDisabled_True}/></td>
                            </tr>
                            <tr>
                                <td>Фамилия:</td>
                                <td><input type="text" className="input" id="surname" value={this.state.user.surname}
                                           disabled={this.state.formDisabled_True}/></td>
                            </tr>
                            <tr>
                                <td>Имя:</td>
                                <td><input type="text" className="input" id="name" value={this.state.user.name}
                                           disabled={this.state.formDisabled_True}/></td>
                            </tr>
                            <tr>
                                <td>Отчество:</td>
                                <td><input type="text" className="input" id="patronymic"
                                           value={this.state.user.patronymic} disabled={this.state.formDisabled_True}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Дата рождения:</td>
                                <td><input type="date" className="input" id="surname" value={this.state.user.birthday}
                                           disabled={this.state.formDisabled_True}/></td>
                            </tr>
                            <tr>
                                <td>E-mail:</td>
                                <td><input type="text" className="input" id="email" onChange={this.handleInput}
                                           value={this.state.user.email} disabled={this.state.formDisabled}/></td>
                            </tr>
                            <tr>
                                <td>Город:</td>
                                <td><input type="text" className="input" id="city" onChange={this.handleInput}
                                           value={this.state.user.city} disabled={this.state.formDisabled}/></td>
                            </tr>
                            <tr>
                                <td>Телефон:</td>
                                <td><input type="text" className="input" id="phoneNumber" onChange={this.handleInput}
                                           value={this.state.user.phoneNumber} disabled={this.state.formDisabled}/></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <button className="button" id="change" onClick={this.setEditable}
                            disabled={!this.state.formDisabled}>Редактировать
                    </button>
                    <button className="button save" id="save" onClick={this.updateUserInfo}
                            disabled={this.state.formDisabled}>Сохранить
                    </button>
                    <h4>Результаты анализов</h4>
                    <div className=" history-orders">
                        <table>
                            <tbody>
                            <tr>
                                <td>Номер анализа</td>
                                <td>Тип анализа</td>
                                <td>Врач</td>
                                <td>Дата сдачи</td>
                            </tr>
                            {this.state.history.map((item) => <PatItem item={item}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>)
    }
}
