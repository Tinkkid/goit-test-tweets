import { BtnFlw } from "./ButtonFollow.styled";

export const BtnFollow = ({ onClickBtn }) => {
  return (
    <BtnFlw type="button" onClick={onClickBtn}>
      Follow
    </BtnFlw>
  );
};
