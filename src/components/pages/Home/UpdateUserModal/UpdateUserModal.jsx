import React, { useState, useEffect } from "react";
import "./UpdateUserModal.css";
import Modal from "../../../templates/Modal/Modal";
import { updateUser } from "../../../../services/users.service";

const UpdateUserModal = ({ selectedUser, setIsModalOpen }) => {
  const [updatedName, setUpdatedName] = useState(selectedUser?.name);
  const [updatedGender, setUpdatedGender] = useState(selectedUser?.gender);
  const [updatedEmail, setUpdatedEmail] = useState(selectedUser?.email);

  useEffect(() => {
    console.log(selectedUser);
  }, [selectedUser]);

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <form
        className="update-user-form"
        onSubmit={(e) => {
          const updatedUser = {
            name: updatedName,
            email: updatedEmail,
            status: "active",
          };
          e.preventDefault();
          updateUser(updatedUser, selectedUser.id).then((res) => {
            console.log(res);
          });
        }}
      >
        <label>Update Name</label>
        <input
          type="text"
          value={updatedName}
          onChange={(e) => {
            setUpdatedName(e.target.value);
          }}
        />
        <label>Update Gender</label>
        <select
          value={updatedGender}
          onChange={(e) => {
            setUpdatedGender(e.target.value);
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>Update Email</label>
        <input
          type="text"
          value={updatedEmail}
          onChange={(e) => {
            setUpdatedEmail(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </Modal>
  );
};

export default UpdateUserModal;
