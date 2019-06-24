import React from 'react'
import connect from "react-redux/es/connect/connect";
import {checkRes} from "../../action/patientPanel";
import "./style.css"
import fetch from "cross-fetch";
import {CheckResControl} from "../../components/PatientPanel/CheckResControl";
import {addBioRes, addMainRes} from "../../action/doctorPanel";


class PatientPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            listPatients:[],
            status: ['active']
        }
        this.getRes = this.getRes.bind(this);
    }

    getRes() {
        fetch(`http://localhost:8080/api/results`, {method: 'GET'})
            .then(response => Promise.all([response, response.json()]))
            .then(([response, json]) => {
                if (response.status === 200) {
                    this.setState({
                        listPatients: json
                    })
                }
                else {
                    alert("ERROR")
                }
            })
    }


    componentDidMount() {
        this.getRes();

    }

    render() {
        return <div className='patientMenu'>
            <div className='MenuChanger'>

                <label onClick={() => {
                    this.setState({status: ['active']})
                }}>Страница пациента
                </label>
            </div>
            {/*<CheckResultPatControl status={this.state.status[0]} checkRes={this.props.checkRes} listRes={this.props.listRes}/>*/}
            <CheckResControl status={this.state.status[0]} checkRes={this.props.checkRes}/>
        </div>
    }


}
const mapStateToProps = (store) => {
    return {
        status: store.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkRes: (id) => dispatch(checkRes(id)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PatientPanel)
