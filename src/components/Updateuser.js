import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";

const Updateuser=()=>{
    const[id,idchange]=useState(0);
    const[date,datechange]=useState('');
    const[purchase,purchasechange]=useState('');
    const[sales,saleschange]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {code}=useParams();
    const userobj=useSelector((state)=>state.user.userobj);

    
    const handlesubmit=(e)=>{
        e.preventDefault();
        const userobj={id,date,purchase,sales};
        dispatch(FunctionUpdateUser(userobj,id));
        navigate('/');
        // console.log(userobj);
    }

    useEffect(()=>{
        dispatch(FetchUserObj(code));
    },[])

    useEffect(()=>{
        if(userobj){
            idchange(userobj.id);
            datechange(userobj.date);
            purchasechange(userobj.purchase);
            saleschange(userobj.sales);
        }
    },[userobj])

    return (
        <div>
            <form onSubmit={handlesubmit}>
            <div className="card">
                <div className="card-header">
                    <h2>Update User</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>ID:</label>
                                <input value={id} disabled="disabled" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Date:</label>
                                <input type="date" value={date} onChange={e=>datechange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Purchase:</label>
                                <input value={purchase} onChange={e=>purchasechange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Sales:</label>
                                <input value={sales} onChange={e=>saleschange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" type="submit">Update</button>
                    <Link className="btn btn-danger" to={'/'}>Back</Link>
                </div>
            </div>
            </form>
        </div>
    );
}
export default Updateuser;