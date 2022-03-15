import React from "react";
import Button from "../../atoms/Button/Button";
import minusIcon from "../../../assets/raster/minus.png";
import { deleteUser, getUsers } from "../../../services/users.service";
import "./UserCard.css";

function UserCard({ user, setUsers, setSelectedUser, setIsModalOpen }) {
  const handleDeleteButton = () => {
    deleteUser(user.id).then((res) => {
      console.log(res, "delete");
      getUsers().then((res) => {
        console.log(res);
        setUsers(res.data);
      });
    });
  };

  return (
    <div
      className="user-card"
      onClick={() => {
        setSelectedUser(user);
        setIsModalOpen(true);
      }}
    >
      <h3>{user.id}</h3>
      <p>{user.gender}</p>
      <p>{user.email}</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button className="circled-button" onClick={handleDeleteButton}>
          <img src={minusIcon} alt="minus" width={30} height={30} />
        </Button>
      </div>
    </div>
  );
}

export default UserCard;
