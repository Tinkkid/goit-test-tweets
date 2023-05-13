import {
  ContainerHome,
  ContainerText,
  Title,
  Info,
  ContainerLink,
  StyledLink,
  StyledIcon,
  LinkInfo,
} from './Home.styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import people from '../../assets/img/people.png';

const Home = () => {
  return (
    <section>
      <ContainerHome>
        <ContainerText>
          <Title>Hi! Welcome to Tweets App</Title>
          <img src={people} alt="people" width="100" />
          <Info>Choose friends to follow them.</Info>
          <ContainerLink>
            <LinkInfo>Let's start!</LinkInfo>
            <StyledLink to="/tweets">
              <StyledIcon>
                <ArrowForwardIcon sx={{ fontSize: 40 }} />
              </StyledIcon>
            </StyledLink>
          </ContainerLink>
        </ContainerText>
      </ContainerHome>
    </section>
  );
};

export default Home;
