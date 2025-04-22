import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme["base-profile"]};

  & > img:first-of-type {
    position: absolute;
    left: 0;
    max-width: 100%;

    top: 50%;
    transform: translateY(-50%);
  }

  & > img:last-of-type {
    position: absolute;
    right: 0;
    max-width: 100%;

    top: 50%;
    transform: translateY(-50%);
  }
`;

export const HeaderContent = styled.header`
  max-width: 54rem;
  margin: 0 auto;
  padding: 4rem 1rem 8.375rem;

  display: flex;
  justify-content: center;
`;
