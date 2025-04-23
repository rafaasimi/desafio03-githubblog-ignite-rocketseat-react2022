import styled from "styled-components";

export const PostPageContainer = styled.main`
  position: relative;
  top: -5.5rem;

  max-width: 54rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2rem;
  margin-bottom: 4.5rem;

  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media (width < 767px) {
    flex-direction: column;
  }
`;

export const CardInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardHeader = styled.header`
  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  h2 {
    margin-top: 1.25rem;

    font-size: 1.5rem;
    line-height: 130%;
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
  }

  a {
    position: relative;
    font-size: 0.75rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-transform: uppercase;

    color: ${(props) => props.theme.blue};

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }

    &:hover::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.blue};
    }
  }
`;

export const CardSocials = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};

    svg {
      color: ${(props) => props.theme["base-label"]};
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  @media (width < 425px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
