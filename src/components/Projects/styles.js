import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px;

    h1 {
      font-size: 20px;
    }

    div {
      button {
        margin-left: 20px;
      }
    }
  }
`;

export const Project = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 0 0 20px;
  border-radius: 5px;

  p {
    font-size: 18px;
  }
`;
