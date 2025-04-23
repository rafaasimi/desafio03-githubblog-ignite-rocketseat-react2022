import styled from "styled-components";

export const ProfileContainer = styled.section`
  position: relative;
  top: -5.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media (width < 767px) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.div`
  max-width: 9.25rem;
  max-height: 9.25rem;

  overflow: hidden;
  border-radius: 8px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProfileHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
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

export const ProfileDescription = styled.div`
  margin-top: 8px;

  p {
    color: ${(props) => props.theme["base-text"]};
    line-height: 160%;
  }
`;

export const ProfileSocials = styled.div`
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
