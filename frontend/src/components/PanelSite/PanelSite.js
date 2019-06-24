import React from 'react'
import ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux';
import profileIcon from '../../img/logo_side.png'
// import iconFind from '../../img/search.png'
// import trashIcon from '../../img/trash.png'
import {Link, withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import "./style.css"
import logo from '../../img/logo_1.png'
import * as sessionActions from '../../action/user-profile';
// import {getCatalog, searchItem} from '../../action/catalog'


class PanelSite extends React.Component {
    constructor(props) {
        super(props);
        this.sideMenu = this.sideMenu.bind(this);
        this.handelClick = this.handelClick.bind(this);
        // this.mouseEnter = this.mouseEnter.bind(this);
        // this.mouseLeave = this.mouseLeave.bind(this);
    }

    sideMenu(nodeEl, classOn, classOff, isBlur) {

        const side = ReactDOM.findDOMNode(nodeEl);
        if (side.classList.contains(classOn)) {
            side.classList.remove(classOn);
            side.classList.add(classOff)
        }
        else {
            side.classList.remove(classOff);
            side.classList.add(classOn)
        }
        
    }


    handelClick(history) {
        this.props.actions.userLogIn(this._loginEl.value,this._passEl.value)

    }
    render() {
        const {user,getCatalogItems,category,searchItem} = this.props,{logOut}=this.props.actions, Submitbutton = withRouter(({history}) => (
            <button type="button" onClick={() => this.handelClick(history)}>Вход</button>));
        return (
            <div className='panelSite'>
                <div className="dropdown_menu">
                    <button className="dropbtn_menu">Меню</button>
                    <div className="dropdown-content_menu" >
                        <a href="/">Главная</a>
                        <a href="/info-doctors">Врачи</a>
                        <a href="/help">Справка</a>
                    </div>
                </div>
                {/*logo*/}
                < div className='nameFirm'>
                    <Link to='/'><img className='logo' src={logo} alt="logo"/>ЛАБОРАТОРНЫЙ АНАЛИЗ КРОВИ</Link>
                </div>
                {/*end logo*/}

                <div className="RightMenu">
                    <div className='dropdown'>
                        <img src={profileIcon} className='dropbtn'
                             onClick={(node, classOn, classOff, isBlur) => this.sideMenu(this._dropMenu, 'dropMenuOn', 'dropMenuOff', false)}/>
                        {user.isLogin ? <p>Профиль</p> : <p>Войти</p>}
                        <div ref={(node) => {
                            this._dropMenu = node
                        }} className='dropMenuOff'>
                            {user.isLogin === true ?
                                <ul className='profile'>
                                    <Link to='/profile'> <li>Имя:{user.name}</li></Link>
                                    <li>
                                        <button onClick={logOut}>Выйти</button>
                                    </li>
                                </ul>
                                :
                                <form action="">
                                    <p>Почта</p>
                                    <input ref={(node) => {
                                        this._loginEl = node
                                    }} type="text"/>
                                    <p>Пароль</p>
                                    <input ref={(node) => {
                                        this._passEl = node
                                    }} type='password'/>
                                    <Submitbutton/>
                                    <Link to='/register-doctor'>
                                        <button>регистрация врача</button>
                                    </Link>
                                    <Link to='/register-patient'>
                                        <button>регистрация пациента</button>
                                    </Link>

                                </form>
                            }
                        </div>
                    </div>

                    {/*<div className="trash">*/}
                        {/*<Link to='/order-page'>*/}
                            {/*<img src={trashIcon} alt=""/>*/}
                        {/*</Link>*/}
                        {/*<p>Корзина</p>*/}
                    {/*</div>*/}

                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.session.user,
        // category:store.category
    }
};
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(sessionActions, dispatch),
        // getCatalogItems: (id) => dispatch(getCatalog(id)),
        // searchItem:(name)=>dispatch(searchItem(name))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelSite)