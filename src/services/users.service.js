import axios from "axios";

export async function getUsers() {
  const result = await axios.get(`https://gorest.co.in/public/v2/users`);

  return result;
}

export async function deleteUser(userId) {
  const result = await axios.delete(
    `https://gorest.co.in/public/v2/users/${userId}`,
    {
      headers: {
        Authorization:
          "Bearer 5a7bbe0927d53e30520d01dca1e8762ff52122744b4d101a3e41f927ce81ca79",
      },
    }
  );
  return result;
}

export async function addUser(newUser) {
  const result = await axios.post(
    `https://gorest.co.in/public/v2/users`,
    newUser,
    {
      headers: {
        Authorization:
          "Bearer 5a7bbe0927d53e30520d01dca1e8762ff52122744b4d101a3e41f927ce81ca79",
      },
    }
  );
  return result;
}

export async function updateUser(updatedUser, userId) {
  const result = await axios.put(
    `https://gorest.co.in/public/v2/users/${userId}`,
    updatedUser,
    {
      headers: {
        Authorization:
          "Bearer 5a7bbe0927d53e30520d01dca1e8762ff52122744b4d101a3e41f927ce81ca79",
      },
    }
  );
  return result;
}
