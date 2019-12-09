import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  width: ${props => (props.size === 'big' ? 600 : 400)}px;
  background-color: #36393f;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > span {
      color: #b9bbbe;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      margin-top: 15px;
    }

    > input {
      height: 40px;
      color: #f5f5f5;
      background-color: rgba(0, 0, 0, 0.3);
      font-size: 16px;
      padding: 10px;
      margin-top: 8px;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      transition: border 0.15s ease;

      &:focus {
        border-color: #7289da;
      }
    }

    > button {
      margin-top: 20px;
    }
  }
`;
