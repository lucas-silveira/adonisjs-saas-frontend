import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #202225;
  padding: 20px 10px;
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Team = styled.button`
  background: transparent;
  margin: 0 0 8px;
  border: 0;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all 200ms;
  }

  &:hover {
    img {
      border-radius: 30%;
    }
  }
`;
