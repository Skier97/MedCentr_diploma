import React from "react";

export class AddBioControl extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {addBioRes,listPatients,status} = this.props;
        return <div className={`doctorPanel ${status}`}>

            <div className='Panel'>
                <p>Добавление результа биохимического анализа</p>
                <input ref={(node) => this._numtest = node} type="text" placeholder='Номер анализа'/>
                <input ref={(node) => this._patients = node} type="text" placeholder='Пациент'/>
                <input ref={(node) => this._albumin = node} type="text" placeholder='Значение альбумина'/>
                <input ref={(node) => this._creatin = node} type="text" placeholder='Значение креатина'/>
                <input ref={(node) => this._mochevina = node} type="text" placeholder='Значение мочевины'/>
                <input ref={(node) => this._alt = node} type="text" placeholder='Значение АЛТ'/>
                <input ref={(node) => this._ast = node} type="text" placeholder='Значение АСТ'/>
                <input ref={(node) => this._fosfataza = node} type="text" placeholder='Значение фосфатазы'/>
                <input ref={(node) => this._calciy = node} type="text" placeholder='Значение кальция'/>
                <input ref={(node) => this._phosfor = node} type="text" placeholder='Значение фосфора'/>
                <div>
                    <label>Рецепт от врача:</label>
                    <input ref={(node) => this._recept = node} type="file" placeholder='recept'/>
                </div>
                <div>
                    <label>Результат:</label>
                    <input ref={(node) => this._result = node} type="file" placeholder='result'/>
                </div>
                <div>
                    <label>Дата сдачи:</label>
                    <input ref={(node) => this._date = node} type="date" placeholder='date'/>
                </div>

                <button type="button" className="but_reg"
                        onClick={() => addBioRes(`num=${this._numtest.value}&patientId=${this._patients.value}&albumin=${this._albumin.value}&creatin=${this._creatin.value}&mochevina=${this._mochevina.value}&alt=${this._alt.value}&ast=${this._ast.value}&fosfataza=${this._fosfataza.value}
                        &calciy=${this._calciy.value}&phosfor=${this._phosfor.value}&recept=${this._recept.value}&result=${this._result.value}&date=${this._date.value}`)}>Добавить
                </button>
            </div>

        </div>
    }
}
