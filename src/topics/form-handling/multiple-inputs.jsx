import React, { useState } from "react";

function MultipleInputs() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(user);
    setUsers([...users, user]);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-2">Form Handling</h1>
      <form
        onSubmit={submitHandler}
        className="w-1/3 mx-auto p-4 shadow-xl/30 rounded-sm"
      >
        <div className="my-2 input-field flex flex-col">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            className="border rounded-sm py-2 px-2"
            name="firstName"
            value={user.firstName}
            onChange={changeHandler}
          />
        </div>
        <div className="my-2 input-field flex flex-col">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            className="border rounded-sm py-2 px-2"
            name="lastName"
            value={user.lastName}
            onChange={changeHandler}
          />
        </div>
        <div className="my-2 input-field flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border rounded-sm py-2 px-2"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </div>
        <div className="my-2 input-field flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border rounded-sm py-2 px-2"
            name="password"
            value={user.password}
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white w-full my-2 p-2 rounded cursor-pointer"
        >
          Submit
        </button>
      </form>
      <div className="users flex justify-between flex-wrap w-2/3 mt-4 mx-auto">
        {users.map((mereUsers) => {
          return (
            <div className="shadow-xl/30 p-4">
              <h1>{mereUsers.firstName}</h1>
              <h1>{mereUsers.lastName}</h1>
              <h1>{mereUsers.email}</h1>
              <h1>{mereUsers.password}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MultipleInputs;
