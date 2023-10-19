import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  gap: 8px;
  max-width: 1100px;
  margin: -25.5px auto;

  input {
    display: flex;
    flex: 1;

    background: var(--gray-500);
    border: 1px var(--gray-700) solid;
    outline: none;
    color: var(--gray-100);
    font-size: 16px;

    padding: 16px;
    border-radius: 8px;

    &:focus {
      border: 1px var(--purple-dark) solid;
    }

    &::placeholder {
      color: var(--gray-300);
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;

    background: var(--blue-dark);
    border: 1px transparent solid;
    border-radius: 8px;
    transition: 200ms all ease;
    
    font-size: 14px;
    font-weight: bold;
    color: var(--gray-100);

    padding: 16px;

    cursor: pointer;

    &:hover {
      background: var(--blue);
    }
  }
`