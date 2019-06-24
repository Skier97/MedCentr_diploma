import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import './index.css';
import Main from './containers/Main/Main'
import {history, store} from './store/configureStore'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter,} from 'react-router-redux'
import RegisterPat from "./components/RegisterPatPage/RegisterPatPage";
import RegisterDoc from "./components/RegisterDocPage/RegisterDocPage";
import PanelSite from "./components/PanelSite/PanelSite";
import doctorPanel from "./containers/DoctorPanel/DoctorPanel"
import patientPanel from "./containers/PatientPanel/PatientPanel"
import infoDocPage from "./components/InfoDocPage/InfoDocPage"
import helpPage from "./components/HelpPage/HelpPage"
import FooterSite from "./components/FooterSite/FooterSite";
import Page404 from "./components/404Page/Page404";

class Pages extends React.Component {

    render() {

        return(
            <div className="App-header">
                <PanelSite/>
                <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/register-patient' component={RegisterPat}/>
                <Route path='/register-doctor' component={RegisterDoc}/>
                <Route path='/doctorpanel' component={doctorPanel}/>
                <Route path='/patientpanel' component={patientPanel}/>
                <Route path='/info-doctors' component={infoDocPage}/>
                <Route path='/help' component={helpPage}/>
                <Route component={Page404}/>
                </Switch>
                <FooterSite/>

            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ConnectedRouter history={history}>

                    <Pages/>


            </ConnectedRouter>
        </div>

    </Provider>,
    document.getElementById('root')
);
