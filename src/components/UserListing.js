import { useEffect } from "react";
import { FetchUserList,Removeuser } from "../Redux/Action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

const Userlisting = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])
    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
                <div className="card">
                    <div className="card-header">
                        <h2>User Listing</h2>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Purchase</th>
                                    <th>Sales</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            
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
        loaduser: () => dispatch(FetchUserList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);