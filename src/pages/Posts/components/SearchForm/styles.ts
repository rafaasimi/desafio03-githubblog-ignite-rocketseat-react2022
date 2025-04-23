import styled from "styled-components";

export const SearchFormContainer = styled.div`
  margin-bottom: 3rem;

  & > div {
    margin-bottom: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: bold;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  & > form {
    

    input {
      width: 100%;
      border: none;
      background: ${(props) => props.theme["base-input"]};
      padding: 0.75rem 1rem;
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme["base-border"]};
      color: ${(props) => props.theme["base-text"]};

      &::placeholder {
        color: ${(props) => props.theme["base-label"]};
      }
    }
  }
`;
