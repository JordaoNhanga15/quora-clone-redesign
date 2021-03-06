import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;

  @media (min-width: 1180px) {
  }
`;

export const Layout = styled.section`
  background: var(--color-input);

  @media (min-width: 1180px) {
    display: flex;
    justify-content: center;
  }
`;
