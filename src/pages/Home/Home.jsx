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
import friends from '../../assets/img/freinds.jpeg';

const Home = () => {
  return (
    <ContainerHome>
      <div>
        <img src={friends} alt="logo" width="400" />
      </div>
      <ContainerText>
        <Title>Hi! Welcome to Tweets App</Title>
        <Info>Choose friends to follow them.</Info>
        <ContainerLink>
          <LinkInfo>Lets start!</LinkInfo>
          <StyledLink to="/tweets">
            <StyledIcon>
              <ArrowForwardIcon sx={{ fontSize: 40 }} />
            </StyledIcon>
          </StyledLink>
        </ContainerLink>
      </ContainerText>
    </ContainerHome>
  );
};

export default Home;
