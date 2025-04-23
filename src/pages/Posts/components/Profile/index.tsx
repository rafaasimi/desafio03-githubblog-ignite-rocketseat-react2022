import {
  ProfileContainer,
  ProfileDescription,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  ProfileSocials,
} from "./styles";

import { ArrowUpRightFromSquare } from "../../../../assets/arrowUpRightFromSquare";
import { Github } from "../../../../assets/github";
import { Building } from "../../../../assets/building";
import { UsersGroup } from "../../../../assets/usersGroup";
import { PostsContext } from "../../../../contexts/PostsContext";
import { useContext } from "react";

export function Profile() {
    const { user } = useContext(PostsContext);

  return (
    <ProfileContainer>
      <ProfileImage>
        <img src={`https://github.com/${user?.login}.png`} alt="" />
      </ProfileImage>

      <ProfileInfo>
        <ProfileHeader>
          <h2>{user?.name}</h2>
          <a href={`https://github.com/${user?.login}`} target="_blank">
            Github
            <ArrowUpRightFromSquare />
          </a>
        </ProfileHeader>

        <ProfileDescription>
          <p>
            {user?.bio}
          </p>
        </ProfileDescription>

        <ProfileSocials>
          <span>
            <Github />
            {user?.login}
          </span>
          <span>
            <Building />
            {user?.company}
          </span>
          <span>
            <UsersGroup />
            {user?.followers} seguidores
          </span>
        </ProfileSocials>
      </ProfileInfo>
    </ProfileContainer>
  );
}
