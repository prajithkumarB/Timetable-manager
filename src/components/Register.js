import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

const Register = () => {

    const[id,idchange]=useState("");
    const[email,emailchange]=useState("");
    const[password,passwordchange]=useState("");

    const navigate=useNavigate();

    const IsValidate=()=> {
        let isproceed=true;
        let errormessage = 'Please enter proper details';
        if(id===null || id==='') {
            isproceed=false;
            errormessage += 'Username';
        }
        if(id===null || id==='') {
            isproceed=false;
            errormessage += 'Email';
        }
        if(id===null || id==='') {
            isproceed=false;
            errormessage += 'Password';
        }
        if(!isproceed) {
            toast.warning(errormessage, {
                autoClose: 8000
            });
        }
        else {
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else {
                isproceed = false;
                toast.warning('Please Enter a valid e-mail');
            }
        }
        return isproceed;
    }

    const handlesubmit=(e)=> {
        if(IsValidate()) {
            e.preventDefault();
            let regobj={id,email,password};
            // console.log(regobj);
            fetch("http://localhost:3000/users/",{
                method: "POST",
                headers: {'content-type':'application/json'},
                body: JSON.stringify(regobj)
            }).then((res)=>{
                toast.success('Account Created Successfully.')
                navigate('/login');
            }).catch((err)=>{
                toast.error('Failed to Create your Account'+err.message);
            });
        }
    }

    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Create your Account</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col lg-6">
                                    <div className="form-group">
                                        <label>User Name:<span className="errmsg">*</span></label>
                                        <input required value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col lg-6">
                                    <div className="form-group">
                                        <label>E-mail:<span className="errmsg">*</span></label>
                                        <input required value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col lg-6">
                                    <div className="form-group">
                                        <label>Password:<span className="errmsg">*</span></label>
                                        <input required value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <a className="btn btn-danger" href="/">Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;