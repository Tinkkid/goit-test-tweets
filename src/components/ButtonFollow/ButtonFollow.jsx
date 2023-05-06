import { BtnFlw } from "./ButtonFollow.styled";

export const BtnFollow = ({ onClickBtn, isFollowing }) => {
  const btnBackground = isFollowing ? "#5cd3a8" : "#EBD8FF";
  return (
    <BtnFlw
      type="button"
      onClick={onClickBtn}
      style={{
        backgroundColor: btnBackground,
      }}
    >
      {isFollowing ? <p>Following</p> : <p>Follow</p>}
    </BtnFlw>
  );
};
