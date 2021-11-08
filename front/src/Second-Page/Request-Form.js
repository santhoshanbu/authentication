import React,{useState} from "react";
import axios from 'axios'

function Request() {

    const [name,upname]=useState('');
    const [mail,upmail]=useState('');
    const [address,upaddress]=useState('');
    const [pan,uppan]=useState('');
    const [aadhar,upaadhar]=useState('');
    const [meterial,upmeterial]=useState('');
    const [rs,uprs]=useState('');

    const store=async()=>{

        await axios.post('http://localhost:8000/request', {
            Name:name,
            Mail:mail,
            Address:address,
            Pan:pan,
            Aadhar:aadhar,
            Meterial:meterial,
            Rs:rs
                }).then(res => {
                    upname('')
                    upmail('')
                    upaddress('')
                    uppan('')
                    upaadhar('')
                    upmeterial('')
                    uprs('')
                })
        await axios.post('http://localhost:8000/mail').then(res=>console.log('succes')).catch(console.log('error'));
    }
    return (
        <div>
            <form class=' ' style={{width:'50%',marginLeft:'10%'}}>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" onChange={(e)=>upname(e.target.value)} value={name} style={{margin:'1% 0',padding:'2% 0'}} class="form-control"  placeholder="Enter your name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" onChange={(e)=>upmail(e.target.value)} value={mail} style={{margin:'1% 0',padding:'2% 0'}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" onChange={(e)=>upaddress(e.target.value)} value={address} style={{margin:'1% 0',padding:'2% 0'}} class="form-control" placeholder="Enter your address" />
                </div>
                <div class="form-group">
                    <label>PAN</label>
                    <input type="text" onChange={(e)=>uppan(e.target.value)} value={pan} style={{margin:'1% 0',padding:'2% 0'}} class="form-control" placeholder="Enter your PAN number" />
                </div>
                <div class="form-group">
                    <label>Aadhar</label>
                    <input type="number" onChange={(e)=>upaadhar(e.target.value)} value={aadhar} style={{margin:'1% 0',padding:'2% 0'}} class="form-control"  placeholder="Enter your aadhar number" />
                </div>
                <div class="form-group">
                    <label>Meterial</label>
                    <input type="text" onChange={(e)=>upmeterial(e.target.value)} value={meterial} style={{margin:'1% 0',padding:'2% 0'}} class="form-control"  placeholder="Enter your product name " />
                </div>
                <div class="form-group">
                    <label>Rs</label>
                    <input type="number" onChange={(e)=>uprs(e.target.value)} value={rs} style={{margin:'1% 0',padding:'2% 0'}} class="form-control"  placeholder="Enter your things amount" />
                </div>
                <button type="button" onClick={()=>store()} class="btn btn-block btn-primary " style={{marginLeft:'40%',marginTop:'5%'}}>Submit</button>
            </form>
        </div>
    );
}

export default Request;