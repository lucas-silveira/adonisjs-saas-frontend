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

export const NewTeam = styled.button`
  width: 50px;
  height: 50px;
  color: rgba(255, 255, 255, 0.3);
  background: transparent;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 8px;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  transition: all 200ms;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
    border: 1px dashed rgba(255, 255, 255, 0.6);
  }
`;

export const Logout = styled.button`
  width: 50px;
  height: 50px;
  color: #e04848;
  background: transparent;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px dashed #e04848;
  border-radius: 50%;
  transition all 200ms;

  &:hover {
    color: #a43d3d;
    border-color: #a43d3d;
  }
`;
