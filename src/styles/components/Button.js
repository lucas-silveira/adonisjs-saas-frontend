import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  normal: css`
    height: 36px;
    font-size: 14px;
  `,
  large: css`
    height: 44px;
    font-size: 18px;
  `,
};

const colors = {
  default: css`
    background-color: #7289da;

    &:hover {
      background-color: #5f73bc;
    }
  `,
  danger: css`
    background-color: #e04848;

    &:hover {
      background-color: #a43d3d;
    }
  `,
  gray: css`
    background-color: #b9bbbe;
    color: #555;

    &:hover {
      background-color: #999;
    }
  `,
};

const Button = styled.button`
  color: #fff;
  background-color: #7289da;
  font-size: 12px;
  font-weight: 700;
  border-radius: 3px;
  border: 0;
  padding: 0 10px;
  text-transform: uppercase;
  transition: background-color 0.15s ease;

  ${props => sizes[props.size || 'normal']}
  ${props => colors[props.color || 'default']}

  ${props =>
    props.filled === false &&
    css`
      background: none;

      &:hover {
        opacity: 0.6;
        background: none;
      }
    `}
`;

export default Button;
