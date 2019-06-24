import React, {Component} from 'react';
import './style.css';

export default class Main extends Component {
    render() {
        return (
            /*<div className="App">*/
                <div className='MainBody'>
                    <div className='MainContent'>
                        <div className="formInput" id="class">

                            <div className="text">
                                <p> Здесь вы сможете узнать результаты своих анализов крови! Помимо последних анализов,
                                    вы сможете увидеть результаты своих прошлых анализов. Для этого вы должны быть
                                    зарегистрированы на этом сайте. Во время регистрации необходимо запомнить свой
                                    идентификатор, который устанавливается автоматически, и пароль. По окончанию
                                    использования не забывайте выходить из своего личного кабинета!</p>
                            </div>


                        </div>
                    </div>
                </div>
            // </div>
        );
    }
}
