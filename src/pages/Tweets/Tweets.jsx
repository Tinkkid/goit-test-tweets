import { useEffect, useState } from 'react';
import { BtnLoadMore } from '../../components/ButtonLoad/BtnLoadMore';
import Filter from '../../components/FilterButton/FilterButton';
import { Loader } from '../../components/Loader/Loader';
import { ScrollButton } from '../../components/ScrollBtn/ScrollBtn';
import { UsersList } from '../../components/UsersList/UsersList';
import { getFiltredUsers, localGetStorage } from '../../helpers/helpers';
import { fetchFilterUser, fetchUser } from '../../services/user-api';
import { Container } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allUsers, setAllUsers] = useState(
    localGetStorage('filterValue-filter', null)
  );
  const [selectFilter, setSelectFilter] = useState(
    localGetStorage('select-filter', 'showAll')
  );

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        await fetchUser(page).then(response => {
          setUsers(prevState => [...prevState, ...response]);
        });
      } catch (error) {
        setError(true);
        console.warn(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [page]);

  useEffect(() => {
    const getFilterUsers = async () => {
      if (allUsers) return;
      try {
        setIsLoading(true);
        await fetchFilterUser().then(response => {
          setAllUsers(response);
          localStorage.setItem('filterValue', JSON.stringify(response));
        });
      } catch (error) {
        setError(true);
        console.warn(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilterUsers();
  }, [allUsers]);

  const onLoadMore = () => setPage(prevState => prevState + 1);

  const handleChange = event => {
    setSelectFilter(event.target.value);
    localStorage.setItem('select-filter', JSON.stringify(event.target.value));
  };

  const filteredUsers = getFiltredUsers(selectFilter, users);

  return (
    <Container>
      {error && <p>Something went wrong!</p>}
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <Filter handleChange={handleChange} selectFilter={selectFilter} />
      )}
      {filteredUsers && <UsersList users={filteredUsers} />}
      {users && !error && !isLoading && <BtnLoadMore onClick={onLoadMore} />}
      {users && !error && !isLoading && <ScrollButton />}
    </Container>
  );
};

export default Tweets;
