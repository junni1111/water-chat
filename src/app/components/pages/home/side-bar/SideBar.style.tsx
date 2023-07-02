import { css, styled } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      height: 100%;
      width: 360px;

      display: flex;
      justify-content: center;

      background-color: ${colors.grayscale.gray500};
    `;
  }}
`;
