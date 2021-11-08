import React, { useEffect } from 'react';
import '../Auth-Form/addtask.css';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Request from './Request-Form.js';
import Dummy from './dummytext';

function Second() {
    const data = sessionStorage.getItem('user');
    const name = JSON.parse(data)
    let history = useHistory();
    const logout = () => {
        sessionStorage.removeItem('user')
        history.push('/')
    }
    return (
        <Router>
            <div>
                <div className='contentofbody'>
                    <div className='top'><div className='topleft'>Well come {name.dep} team</div><div><button onClick={() => logout()} className='logoutbutton' style={{fontSize:'12px'}}>log out</button></div></div>
                    <div class='row' style={{ height: '100%' }}>
                        <div class='col-md-2 bg-warning fluid' style={{ height: '100%' }} ><Link to='/request'><a style={{ margin: '30px 0' }} class='btn container-fluid btn-primary btn-justified'>Event Management</a></Link></div>

                        <div class='col-md-10 bg-info'>

                            <Switch>
                                <Route path='/second' component={Dummy} />
                                <Route path='/request'component={Request}/>
                            </Switch>
                        </div>

                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Second

{/* <Link to='/second'> */ }