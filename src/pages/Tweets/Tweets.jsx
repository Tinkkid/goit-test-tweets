import { useEffect, useState } from 'react';
import { BtnLoadMore } from '../../components/ButtonLoad/BtnLoadMore';
import { ScrollButton } from '../../components/ScrollBtn/ScrollBtn';
import { UsersList } from '../../components/UsersList/UsersList';
import { fetchUser } from '../../services/user-api';
import { Container } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      try {
        await fetchUser(page).then(response => {
          setUsers(prevState => [...prevState, ...response]);
        });
      } catch (error) {
        console.warn(error.message);
      }
    };
    getUsers();
  }, [page]);

  const onLoadMore = () => setPage(prevState => prevState + 1);

  return (
    <Container>
      <UsersList users={users} />
      {users && <BtnLoadMore onClick={onLoadMore} />}
      <ScrollButton />
    </Container>
  );
};

export default Tweets;
