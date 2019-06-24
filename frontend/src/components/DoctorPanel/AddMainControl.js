import React from "react";

export class AddMainControl extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {addMainRes,listPatients,status} = this.props;
        return <div className={`doctorPanel ${status}`}>
            <div className='Panel'>
                <p>Добавление результа общего анализа</p>
                <input ref={(node) => this._numtest = node} type="text" placeholder='Номер анализа'/>
                <input ref={(node) => this._patients = node} type="text" placeholder='Пациент'/>
                <input ref={(node) => this._leykocit = node} type="text" placeholder='Значение лейкоцитов'/>
                <input ref={(node) => this._eritrocit = node} type="text" placeholder='Значение эритроцитов'/>
                <input ref={(node) => this._gemoglobin = node} type="text" placeholder='Значение гемоглобина'/>
                <input ref={(node) => this._gematokrit = node} type="text" placeholder='Значение гематокрита'/>
                <input ref={(node) => this._mcv = node} type="text" placeholder='Значение MCV'/>
                <input ref={(node) => this._mchc = node} type="text" placeholder='Значение MCHC'/>
                <input ref={(node) => this._rdwsd = node} type="text" placeholder='Значение RDW-SD'/>
                <input ref={(node) => this._rdwcv = node} type="text" placeholder='Значение RDW-CV'/>
                <input ref={(node) => this._trombocit = node} type="text" placeholder='Значение тромбоцитов'/>
                <input ref={(node) => this._mpv = node} type="text" placeholder='Значение MPV'/>
                <input ref={(node) => this._trombokrit = node} type="text" placeholder='Значение тромбокритов'/>
                <input ref={(node) => this._pdw = node} type="text" placeholder='Значение PDW'/>
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
                        onClick={() => addMainRes(`num=${this._numtest.value}&patientsId=${this._patients.value}&leykocit=${this._leykocit.value}&eritrocit=${this._eritrocit.value}&gemoglobin=${this._gemoglobin.value}&gematokrit=${this._gematokrit.value}&mcv=${this._mcv.value}&mchc=${this._mchc.value}&rdwcv=${this._rdwcv.value}&rdwsd=${this._rdwsd.value}
                        &trombocit=${this._trombocit.value}&mpv=${this._mpv.value}&trombokrit=${this._trombokrit.value}&pdw=${this._pdw.value}&recept=${this._recept.value}&result=${this._result.value}&date=${this._date.value}`)}>Добавить
                </button>
            </div>


        </div>
    }
}
