import React, { useState } from "react";

function Forms() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  function changeFullName(e) {
    setFullName(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (fullname && email) {
      const user = { fullname, email };
      setUsers([...users, user]);
      setFullName("");
      setEmail("");
    } else {
      alert("Please fill all the fields");
    }
  }
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-2">Form Handling</h1>
      <form
        onSubmit={submitHandler}
        className="w-1/3 mx-auto p-4 shadow-xl/30 rounded-sm"
      >
        <div className="my-2 input-field flex flex-col">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            id="fullname"
            className="border rounded-sm py-2 px-2"
            value={fullname}
            onChange={changeFullName}
          />
        </div>
        <div className="my-2 input-field flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border rounded-sm py-2 px-2"
            value={email}
            onChange={changeEmail}
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
              <h1>{mereUsers.fullname}</h1>
              <h1>{mereUsers.email}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forms;
