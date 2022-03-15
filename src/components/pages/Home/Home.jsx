import React, { useEffect, useState } from "react";
import { getUsers, addUser } from "../../../services/users.service";
import GridLayout from "../../templates/GridLayout/GridLayout.jsx";
import UserCard from "../../molecules/UserCard/UserCard";
import Button from "../../atoms/Button/Button";
import addButton from "../../../assets/raster/plus.png";
import AddUserCard from "./AddUserCard/AddUserCard";
import UpdateUserModal from "./UpdateUserModal/UpdateUserModal";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getUsers().then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  const handleAddUser = (name, gender, email) => {
    const newUser = {
      name: name,
      gender: gender,
      email: email,
      status: "active",
    };

    addUser(newUser).then((res) => {
      console.log(res);
    });
  };

  return (
    <div style={{ margin: "10px 20px 10px 20px" }}>
      {isModalOpen ? (
        <UpdateUserModal
          selectedUser={selectedUser}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}

      <AddUserCard handleAddUser={handleAddUser} />
      <Button className="circled-button" onClick={handleAddUser}>
        <img src={addButton} alt="minus" width={30} height={30} />
      </Button>

      <GridLayout
        gridAutoColumns="1fr"
        gridTemplateColumns="1fr 1fr 1fr"
        gap="10px 10px"
        gridTemplateAreas=". . ."
        additionalStyle={{ marginTop: 30 }}
      >
        {users.map((user) => (
          <UserCard
            user={user}
            setUsers={setUsers}
            setSelectedUser={setSelectedUser}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </GridLayout>
    </div>
  );
};

export default Home;
