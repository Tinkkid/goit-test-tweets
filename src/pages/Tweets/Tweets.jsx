import { useEffect, useState } from "react";
import { UsersList } from "../../components/UsersList/UsersList";
import { fetchUser } from "../../services/user-api";

const Tweets = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUser();
        setUsers(users);
      } catch (error) {
        console.warn("Something went wrong");
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

export default Tweets;
