import { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(to right, rgb(47, 45, 45), #f0f0f0);
  width: 95%;
  margin: 10px auto;
  padding: 15px 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Brand = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  color: #555;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #0077ff;
  }
`;

const Time = styled.div`
  font-size: 14px;
  color: #888;
`;

export default function Header({ onChange }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderContainer>
      <Brand>WASABI Diagnostic</Brand>
      <NavButtons>
        <NavButton onClick={() => onChange('main')}>Main</NavButton>
        <NavButton onClick={() => onChange('feedback')}>Feedback</NavButton>
        <NavButton onClick={() => onChange('effect')}>Effect</NavButton>
      </NavButtons>
      <Time>{now.toLocaleTimeString()}</Time>
    </HeaderContainer>
  );
}
