import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  padding: 16px;
  border-radius: 8px;
  min-height: 72px;

  background: var(--gray-500);
  border: 1px var(--gray-400) solid;

  div {
    display: flex;
    gap: 12px;

    input[type="checkbox"] {
      appearance: none;

      border: 2px var(--blue) solid;
      border-radius: 50%;
      width: 17px;
      height: 17px;

      cursor: pointer;

      transition: background-color ease 200ms, border ease 200ms;

      &:hover {
        border-color: var(--blue-dark);
        background-color: #1E6F9F14;
      }

      &:checked {
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.93059 0.342093L3.59865 4.67403L1.11618 2.19156L0.280273 3.02747L3.59865 6.34584L8.76649 1.178L7.93059 0.342093Z' fill='%23F2F2F2'/%3E%3C/svg%3E%0A");
        background-position: center;
        background-repeat: no-repeat;

        background-color: var(--purple-dark);
        border: 2px var(--purple-dark) solid;

        &:hover {
        background-color: var(--purple);
        border-color: var(--purple);
      }
      }
    }

    h2 {
      font-weight: 400;
      font-size: 14px;
      color: var(--gray-100);
  
      flex: 1;
    }
    
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      background: none;
      height: min-content;

      cursor: pointer;
      padding: 4.5px 6px;
      border-radius: 4px;

      transition: all ease 200ms;

      svg {
        height: 16px;
      }

      &:hover {
        background: var(--gray-400);

        path {
          fill: var(--danger);
        }
      }
    }
  }

`