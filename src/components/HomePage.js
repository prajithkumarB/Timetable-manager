import { useEffect } from "react";
import { FetchUserList, Removeuser } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import './passwordtoggle.css'
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { jsPDF } from 'jspdf';
import { toast } from "react-toastify";
import "jspdf-autotable";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
}
const HomePage = (props) => {
    const usenavigate = useNavigate();
    const [currentDate, setCurrentDate] = useState(getDate());
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/login');
        }
    });
    useEffect(() => {
        props.loaduser();
    }, [])
    const handledelete = (code) => {
        if (window.confirm('Are you sure you want to delete')) {
            props.removeuser(code);
            props.loaduser();
            toast.success('Data Removed Successfully');
        }
    }
    const exportPdf = async () => {
        const doc = new jsPDF({ orientation: "landscape" });
    
        doc.autoTable({
          html: "#time-table"
        });
    
        doc.save("timetable.pdf");
    };
    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
                <div className="card">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link to={'/'} className="navbar-brand"><h4>Department of Computer Science (SF) NGMC - Time Table Manager</h4>©2023 Prajith Kumar</Link>
                            
                            <Link to={'/login'} className="btn btn-danger">Log Out</Link>
                        </div>
                    </nav>
                    <div className="card-header">
                        <Link to={'/adduser'} className="btn btn-success">Add Time Table [+]</Link>
                        <button
                            className="btn btn-primary float-end mt-2 mb-2"
                            onClick={exportPdf}
                        >
                            Download Time Table
                        </button>
                    </div>
                    <div className="card-body">
                        <p id="date">Date:{currentDate}</p>
                        <table className="table table-bordered" id="time-table">
                            <thead className="table-dark">
                                <tr>
                                    <th>Day Order</th>
                                    <th>Class</th>
                                    <th>09:00 to 10:00</th>
                                    <th>10:00 to 11:00</th>
                                    <th>11:00 to 12:00</th>
                                    <th>12:15 to 01:15</th>
                                    <th>01:15 to 02:00</th>
                                    <th>02:00 to 03:00</th>
                                    <th>03:00 to 04:00</th>
                                    <th>04:00 to 05:00</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.user.userlist?.map(item =>
                                        <tr key={item.id}>
                                            <td>{item.selectedDo}</td>
                                            <td>{item.selectedCls}</td>
                                            <td>{item.p1}</td>
                                            <td>{item.p2}</td>
                                            <td>{item.p3}</td>
                                            <td>{item.p4}</td>
                                            <td>{item.p5}</td>
                                            <td>{item.p6}</td>
                                            <td>{item.p7}</td>
                                            <td>{item.p8}</td>
                                            <td>
                                                <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) => dispatch(Removeuser(code))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);