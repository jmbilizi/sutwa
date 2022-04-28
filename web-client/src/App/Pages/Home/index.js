import React, { useState } from "react";
import * as Layouts from "../../Components/Layouts";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../_Store/Reduce/actionTypes/_index";
const Home = () => {
  //redux code
  const [newUser, setNewUser] = useState({ name: "", email: "", dob: "" });
  const counter = useSelector((state) => state.Counter);
  const users = useSelector((state) => state.Users);
  const dispatch = useDispatch();

  return (
    <Layouts.MainLayout>
      <div className="container mt-5 pt-5">
        <div className="counter-app">
          <h2>Counter App Redux class</h2>
          <p>{counter}</p>
          <button
            className="me-3"
            onClick={() => dispatch({ type: actions.counterActionTypes.ADDED })}
          >
            Add
          </button>
          <button
            onClick={() =>
              dispatch({ type: actions.counterActionTypes.SUBTRACTED })
            }
          >
            Minus
          </button>
        </div>
        <div className="social-media-app mt-5">
          <h2 className="mb-3">Social Media App</h2>
          <input
            placeholder="name"
            className="me-2"
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          ></input>
          <input
            placeholder="email"
            className="me-2"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          ></input>
          <input
            placeholder="dob"
            className="me-2"
            onChange={(e) => setNewUser({ ...newUser, dob: e.target.value })}
          ></input>
          <button
            onClick={() =>
              dispatch({
                type: actions.userActionTypes.USER_ADDED,
                payload: newUser,
              })
            }
          >
            Sign Up
          </button>
          <h5 className="mt-4">Users</h5>
          <ol className="col-6 mt-3 mx-auto">
            {users.map((user) => (
              <li key={user.id}>
                name: {user.name}, email: {user.email}, dob: {user.dob}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Layouts.MainLayout>
  );
};

export default Home;
