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

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage>
        <img src="https://github.com/rafaasimi.png" alt="" />
      </ProfileImage>

      <ProfileInfo>
        <ProfileHeader>
          <h2>Rafael Simionato</h2>
          <a href="https://github.com/rafaasimi" target="_blank">
            Github
            <ArrowUpRightFromSquare />
          </a>
        </ProfileHeader>

        <ProfileDescription>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileDescription>

        <ProfileSocials>
          <span>
            <Github />
            rafaasimi
          </span>
          <span>
            <Building />
            Sicredi
          </span>
          <span>
            <UsersGroup />
            99 seguidores
          </span>
        </ProfileSocials>
      </ProfileInfo>
    </ProfileContainer>
  );
}
