import styled from "styled-components";

export const Container = styled.main`
  max-width: 1100px;
  margin: 91px auto;

  header {
    display: flex;
    justify-content: space-between;

    font-size: 14px;
    font-weight: bold;

    div:first-child {
      color: var(--blue);
    }

    div:last-child {
      color: var(--purple);
    }
  }
`