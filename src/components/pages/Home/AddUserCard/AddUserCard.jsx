import React, { useState } from "react";

export default function AddUserCard(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleAddUser(name, gender, email);
        }}
      >
        <label> Enter Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label> Choose Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Enter your email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
