/**
 *
 * Component: Resources
 * Location: Profile page
 * @desc This component shows editorial resources on the editable profile page, jsut for the user with editorial rights
 * @author Robert Koteles
 * @version 1.0.0
 *
 */

import React from "react";
import { ContentList, ContentListItem } from "../../_library/Cards";
import ProfileCardBox from "./ProfileCardBox";
import DiscoverMore from "../../Widgets/DiscoverMore";

const ProfileCardResources = (props) => {
  const profileUid = props.profileuid;
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const isProfilePage = props.isprofilepage ? props.isprofilepage : false;

  const extraButton = (
    <DiscoverMore
      title={["Show all resources", "Show all resources"]}
      link="/demm"
      onclick={(e) => {}}
    />
  );

  return (
    <ProfileCardBox
      title="Resources"
      subtitle="Private to you"
      subtitleicon="/images/icon-eye.svg"
      extrabutton={extraButton}
    >
      <ContentList>
        <ContentListItem>
          <img src="/images/icon-mercado.svg" alt="" />
          <div>
            <h3>Creator mode Off</h3>
            <p>
              Get discovered, showcase content on your profile, and get access
              to creator toolsGet discovered, showcase content on your profile,
              and get access to creator tools
            </p>
          </div>
        </ContentListItem>
        <ContentListItem>
          <img src="/images/icon-people.svg" alt="" />
          <div>
            <h3>My network</h3>
            <p>See and manage your connections and interests.</p>
          </div>
        </ContentListItem>
      </ContentList>
    </ProfileCardBox>
  );
};

export default ProfileCardResources;
