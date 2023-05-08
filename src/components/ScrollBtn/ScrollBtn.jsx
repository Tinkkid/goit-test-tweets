import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from './ScrollBtn.styled';

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button>
      <ArrowUpwardIcon
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none', color: '#461ca9e0' }}
        width="30"
        height="30"
      />
    </Button>
  );
};
