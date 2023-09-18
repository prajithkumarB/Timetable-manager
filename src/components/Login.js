import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const Login = () => {
    const [username, usernameupdate] = useState("");
    const [password, passwordupdate] = useState("");
    const [visible, setVisible] = useState(false);
    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:3000/users/" + username)
                .then((res) => {
                    return res.json();
                })
                .then((resp) => {
                    console.log(resp);
                    if (Object.keys(resp).length === 0) {
                        toast.error("Please enter valid credentials");    
                    } else {
                        if (resp.password === password) {
                            toast.success("Successfully Logged In");
                            sessionStorage.setItem("username", username);
                            usenavigate("/");
                        } else {
                            toast.error("The entered username or password is invalid");
                        }
                    }
                })
                .catch((err) => {
                    toast.error("Login Failed due to :" + err.message);
                });
        }
    };
  
    function validate() {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Department of Computer Science (SF) NGM Timetable Manager
          </h2>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={ProceedLogin}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Username:
              </label>
              <div className="mt-2">
                <input
                 
                  value={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password:
                </label>
                  {/* <div className="text-sm">
                    <Link to={'/forgotpassword'} className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot Password?</Link>
                  </div> */}
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  type={visible ? "text" : "password"}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div className="p-2" onClick={() => setVisible(!visible)}>
                    {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}      
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit" 
                className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none focus:ring-blue-300"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            New User ?{' '}
                <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to={"/register"}>
                    Create an Account
                </Link>
          </p> */}
        </div>
      </div>
    );
};

export default Login;
