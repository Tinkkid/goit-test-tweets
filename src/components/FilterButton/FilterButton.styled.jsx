import styled from '@emotion/styled';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export const Input = styled(InputLabel)``;

export const Form = styled(FormControl)`
  background-color: #ae7be3;
`;

export const styleForm = {
  formControl: {
    fontFamily: 'Montserrat',
    minWidth: 140,
    marginTop: 6,
    textTransform: 'uppercase',
    borderRadius: 2,
    paddingLeft: 2,
    paddingRight: 2,
  },
  input: {
    border: '1.5px solid rgba(118, 56, 204, 0.4)',
    transition: 'all 250ms linear 0s',
    ':hover': {
      bgcolor: '#c1a5de',
      border: '1.5px solid rgba(118, 56, 204, 0.4)',
    },
  },
  filter: {
    bgcolor: '#ae7be3',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 1,
    fontWeight: '700',
  },
  menu: {
    textTransform: 'uppercase',
    ':hover': {
      bgcolor: '#c1a5de',
    },
  },
};
