import styled from "styled-components";

export const Container = styled.main`
  max-width: 1100px;
  margin: 91px auto;

  header {
    display: flex;
    justify-content: space-between;

    font-size: 14px;
    font-weight: bold;

    margin-bottom: 24px;

    div:first-child {
      color: var(--blue);
    }

    div:last-child {
      color: var(--purple);
    }

    span {
      color: var(--gray-200);
      background: var(--gray-400);
      padding: 2px 8px;
      border-radius: 9px;
      font-size: 12px;
    }
  }

  > div + div {
    margin-top: 12px;
  }
`