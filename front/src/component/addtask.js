import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './addtask.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

function Addtask() {
    const [name, updatename] = useState('')
    const [id, setid] = useState('')
    const [loginerror, updateloginerror] = useState(false)
    const [signuperror, updatesignuperror] = useState(false)
    const [a,b] = useState([])
    let history = useHistory();

    async function names() {
        try {
            let getdata = await axios.get('http://localhost:8000/api');
            let datas=getdata.data
            b(datas)
            console.log(a)
        } catch (e) {
            console.log('error')
        }
    }
    useEffect(() => { names() }, [name])
    const logindata = () => {

        a.map((item) => {
            if (item.Department === name && item.Employee === id) {
                const storage = { dep: name, emp: id }
                sessionStorage.setItem('user', JSON.stringify(storage))
                updatename('')
                setid('')
                history.push('/second')
            }
            if (item.Department !== name || item.Employee !== id) {
                // alert('Already exist')
                updateloginerror(true)
            }
        })
    }
    const signupdata = () => {
        let count=0;
        if (a.length) {
            a.map((item) => {
                if (item.Department === name && item.Employee === id) {
                    return updatesignuperror(true)
                }
            count=count+1;
            console.log(a.length,count)
            if(count===a.length) {  
                if (name.trim() !== '' && id.trim() !== '') {
                    count=0;
                    const storage = { dep: name, emp: id }
                    sessionStorage.setItem('user', JSON.stringify(storage))
                    axios.post('http://localhost:8000/api', {
                        Department: name,
                        Employee: id
                    }).then(res => {
                        updatename('')
                        setid('')
                    })
                    swal({
                        title: "Welcome!",
                        text: "your account is created!",
                        icon: "success",
                        button: "Okk!",
                    });
                    history.push('/second')
                }
            }
            })

            
        }

        // empty array is won't map,so write a else condition 

        else {
            if (name.trim() !== '' && id.trim() !== '') {
                const storage = { dep: name, emp: id }
                sessionStorage.setItem('user', JSON.stringify(storage))
                axios.post('http://localhost:8000/api', {
                    Department: name,
                    Employee: id
                }).then(res => {
                    updatename('')
                    setid('')
                })
                swal({
                    title: "Welcome!",
                    text: "your account is created!",
                    icon: "success",
                    button: "Okk!",
                });
                history.push('/second')
            }
        }
    }
    return (
        <div className='authform'>
            <Router>
                <div className='addtask'>
                    <div className='name'><label className='namelabel'>Department : <input value={name} className='nameinput' type='text' onChange={event => updatename(event.target.value)} /></label>{loginerror ? <div className='errormsg'>incorrect username</div> : null}{signuperror ? <div className='errormsg'>This user name is already exist</div> : null}</div>
                    <div className='password'><label>Employee Id : <input value={id} type='password' onChange={event => setid(event.target.value)} /></label>{loginerror ? <div className='errormsg'>incorrect password</div> : null}{signuperror ? <div className='errormsg'>incorrect username</div> : null}</div>
                    <div className='buttons'>
                        <button className='button' type='button' onClick={() => signupdata()}>Sign up</button>
                        <div className='buttondiv' onClick={() => logindata()}>log in</div>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Addtask