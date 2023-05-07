import { useEffect, useState } from 'react';
import { BtnLoadMore } from '../../components/ButtonLoad/BtnLoadMore';
import Filter from '../../components/FilterButton/FilterButton';
import { ScrollButton } from '../../components/ScrollBtn/ScrollBtn';
import { UsersList } from '../../components/UsersList/UsersList';
// import { useMyGetStorage } from '../../hooks/useLocalStorage';
import { fetchFilterUser, fetchUser } from '../../services/user-api';
import { Container } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [allUsers, setAllUsers] = useState(
    localStorage.getItem('filterValue') || null
  );
  const [selectFilter, setSelectFilter] = useState(
    JSON.parse(localStorage.getItem('select-filter')) || 'showAll'
  );

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

  useEffect(() => {
    const getFilterUsers = async () => {
      if (allUsers) return;
      try {
        await fetchFilterUser().then(response => {
          setAllUsers(response);
          localStorage.setItem('filterValue', JSON.stringify(response));
        });
      } catch (error) {
        console.warn(error.message);
      }
    };
    getFilterUsers();
  }, [allUsers]);

  const onLoadMore = () => setPage(prevState => prevState + 1);

  const handleChange = event => {
    setSelectFilter(event.target.value);
    localStorage.setItem('select-filter', JSON.stringify(event.target.value));
  };

  const getFiltredUsers = (filter, followers) => {
    switch (filter) {
      case 'follow':
        return followers.filter(
          user => JSON.parse(localStorage.getItem(`key${user.id}`)) !== true
        );
      case 'following':
        return followers.filter(
          user => JSON.parse(localStorage.getItem(`key${user.id}`)) === true
        );
      case 'showAll':
        return followers;
      default:
        break;
    }
  };

  const filteredUsers = getFiltredUsers(selectFilter, users);

  return (
    <Container>
      <Filter handleChange={handleChange} selectFilter={selectFilter} />
      {filteredUsers && <UsersList users={filteredUsers} />}
      {users && <BtnLoadMore onClick={onLoadMore} />}
      <ScrollButton />
    </Container>
  );
};

export default Tweets;
