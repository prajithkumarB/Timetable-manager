import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const Adduser = () => {

    const cls = ['---Select Class---','I-A','I-B','II-A','II-B','III-A', 'III-B']
    const p = {
        'I-A': ['---Select---','-','Tamil', 'English', 'C (RN)', 'Digital (MK)', 'Maths (SS)','Lab 8 (RN)', 'HE','Lunch'],
        'I-B': ['---Select---','-','Tamil', 'English', 'C (MM)', 'Digital (RS)', 'Maths (GA)','Lab 8 (MM)', 'HE','Lunch'],
        'II-A': ['---Select---','-','Tamil', 'English', 'Java (GA)', 'OSL (JP)', 'OR (RN)','Lab 8 (JP)','Lab 8 (GA)','NME', 'HE','Lunch'],
        'II-B': ['---Select---','-','Tamil', 'English', 'Java (NA)', 'OSL (RS)','OR (JP)', 'Lab 6 (RS)','Lab 6 (NA)','NME', 'HE','Lunch'],
        'III-A': ['---Select---','-','Kotlin (SS)', 'Linux (NA)', 'Cyber Security (MK)', 'Elective (DP)', 'Kotlin Lab 8 (SS)','Linux Lab 8 (NA)','SBE Lab', 'HE', 'APD','Lunch'],
        'III-B': ['---Select---','-','Kotlin (MK)', 'Linux (DP)', 'Cyber Security (MM)', 'Elective (JP/RS)', 'Linux Lab 6 (DP)','Kotlin Lab 6 (MK)', 'Linux Lab 8 (DP)','Kotlin Lab 8 (MK)','SBE Lab', 'HE', 'APD','Lunch']
    }
    const [selectedDo,selectedDochange]=useState('');
    const [selectedCls, selectedClschange] = useState('');

    const [p1, p1change] = useState('');
    const [p2, p2change] = useState('');
    const [p3, p3change] = useState('');
    const [p4, p4change] = useState('');
    const [p5, p5change] = useState('');
    const [p6, p6change] = useState('');
    const [p7, p7change] = useState('');
    const [p8, p8change] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { selectedDo,selectedCls,p1,p2,p3,p4,p5,p6,p7,p8 };
        dispatch(FunctionAddUser(userobj));
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header">
                        <h2>Create Time Table</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label class="block mb-2 text-sm font-medium text-gray-900">Day Order:</label>
                                <select onChange={(e) => { selectedDochange(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                    <option selected>--Select--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                                    <label class="block mb-2 text-sm font-medium text-gray-900">Class:</label>
                                    <select onChange={(e) => { selectedClschange(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                        {
                                            cls.map(state => {
                                                return <option>{state}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label class="block mb-2 text-sm font-medium text-gray-900">09:00 to 10:00</label>
                                    {selectedCls && <select onChange={(e) => { p1change(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            p[selectedCls].map(hour => {
                                                return <option>{hour}</option>
                                            })
                                        }
                                    </select>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label class="block mb-2 text-sm font-medium text-gray-900">10:00 to 11:00</label>
                                    {selectedCls && <select onChange={(e) => { p2change(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            p[selectedCls].map(hour => {
                                                return <option>{hour}</option>
                                            })
                                        }
                                    </select>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label class="block mb-2 text-sm font-medium text-gray-900">11:00 to 12:00</label>
                                    {selectedCls && <select onChange={(e) => { p3change(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            p[selectedCls].map(hour => {
                                                return <option>{hour}</option>
                                            })
                                        }
                                    </select>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label class="block mb-2 text-sm font-medium text-gray-900">12:15 to 01:15</label>
                                    {selectedCls && <select onChange={(e) => { p4change(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            p[selectedCls].map(hour => {
                                                return <option>{hour}</option>
                                            })
                                        }
                                    </select>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label class="block mb-2 text-sm font-medium text-gray-900">01:15 to 02:00</label>
                                    {selectedCls && <select onChange={(e) => { p5change(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            p[selectedCls].map(hour => {
                                                return <option>{hour}</option>
                                            })
                                        }
                                    </select>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label class="block mb-2 text-sm font-medium text-gray-900">02:00 to 03:00</label>
                                    {selectedCls && <select onChange={(e) => { p6change(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            p[selectedCls].map(hour => {
                                                return <option>{hour}</option>
                                            })
                                        }
                                    </select>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label class="block mb-2 text-sm font-medium text-gray-900">03:00 to 04:00</label>
                                    {selectedCls && <select onChange={(e) => { p7change(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            p[selectedCls].map(hour => {
                                                return <option>{hour}</option>
                                            })
                                        }
                                    </select>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label class="block mb-2 text-sm font-medium text-gray-900">04:00 to 05:00</label>
                                    {selectedCls && <select onChange={(e) => { p8change(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            p[selectedCls].map(hour => {
                                                return <option>{hour}</option>
                                            })
                                        }
                                    </select>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" type="submit">Create</button>
                        <Link className="btn btn-danger" to={'/'}>Back</Link>
                    </div>
                </div>
            </form>
        </div>

    );
}
export default Adduser;