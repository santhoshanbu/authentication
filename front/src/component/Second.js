import React, { useEffect } from 'react';
import './addtask.css';
import { useHistory } from "react-router-dom";

function Second(){
    const data=sessionStorage.getItem('user');
    const name=JSON.parse(data)
    let history=useHistory();
    const logout=()=>{
        sessionStorage.removeItem('user')
        history.push('/')
    }
    return(
        <div>
            <div className='contentofbody'>
                <div className='top'><div className='topleft'>Well come {name.dep} team</div><div><button onClick={()=>logout()} className='logoutbutton'>log out</button></div></div>
                <div className='center'>
                    <div className='navbar'>Nav Bar</div>
                    <div className='content'>Customize speech recognition to transcribe domain-specific terms and rare words by providing hints and boost your transcription accuracy of specific words or phrases. Automatically convert spoken numbers into addresses, years, currencies, and more using classes.</div>
                </div>
            </div>
        </div>
    );
}

export default Second

{/* <Link to='/second'> */}