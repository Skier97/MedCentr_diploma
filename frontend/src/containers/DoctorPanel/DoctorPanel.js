import React from 'react'
import connect from "react-redux/es/connect/connect";
import {addMainRes,addBioRes,changeDoc, listPatients} from "../../action/doctorPanel";
import "./style.css"
import fetch from "cross-fetch";
import {AddMainControl} from "../../components/DoctorPanel/AddMainControl";
import {AddBioControl} from "../../components/DoctorPanel/AddBioControl";
import {ChangeDocPage} from "../../components/DoctorPanel/ChangeDocPage";


class DoctorPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            listPatients:[],
            status: ['active', 'hidden','hidden']
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
        return <div className='adminMenu'>
            <div className='MenuChanger'>
                <button onClick={() => {
                    this.setState({status: ['active', 'hidden','hidden']})
                }}>Добавление результата общего анализа крови
                </button>
                <button onClick={() => {
                    this.setState({status: ['hidden', 'active','hidden']})
                }}>Добавление результата биохимического анализа крови
                </button>
                <button onClick={() => {
                    this.setState({status: ['hidden', 'hidden', 'active']})
                }}>Просмотр результатов пациентов
                </button>
            </div>
            <AddMainControl status={this.state.status[0]} addRes={this.props.addMainRes}  />
            <AddBioControl status={this.state.status[1]} addRes={this.props.addBioRes} />
            <ChangeDocPage status={this.state.status[2]} changeDoc={this.props.changeDoc}/>
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
        addMainRes: (id) => dispatch(addMainRes(id)),
        addBioRes: (id) => dispatch(addBioRes(id)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorPanel)