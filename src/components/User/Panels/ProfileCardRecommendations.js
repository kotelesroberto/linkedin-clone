/**
 *
 * Component: Recommendations
 * @desc This component is for showing the user's recommendations by other users
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";

const ProfileCardRecommendations = (props) => {
  const isEditMode = false;
  const profileUid = props.profileuid;

  const navigate = useNavigate();

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
  };

  const contentToShow = [
    {
      image: "/images/avatar.svg",
      title: "John Doe",
      content:
        "It has truly been a pleasure working with Robert Koteles, and I have no doubt that [he/she] will be a valuable asset to any team or project. I highly recommend [him/her] to anyone seeking a seasoned frontend developer who can consistently deliver exceptional results.",
    },
    {
      image: "/images/avatar.svg",
      title: "Johhny Doe",
      content:
        "Robert Koteles possesses an in-depth understanding of frontend technologies, including but not limited to HTML, CSS, and JavaScript. Their ability to translate design concepts into seamless, responsive user interfaces is truly impressive. What sets [him/her] apart is his dedication to staying current with industry trends and best practices, ensuring our projects always leverage the latest and most effective technologies.",
    },
    {
      image: "/images/avatar.svg",
      title: "Bob Doe",
      content:
        "I had the pleasure of working closely with Robert Koteles for the past 5 years, and I wholeheartedly recommend them as a senior frontend developer. His technical expertise and commitment to delivering high-quality solutions have significantly contributed to the success of our projects.",
    },
    {
      image: "/images/avatar.svg",
      title: "Johhny English",
      content:
        "In addition to his technical skills, Robert Koteles is a problem-solver who approaches challenges with a proactive mindset. His innovative thinking and attention to detail have been instrumental in identifying and implementing optimizations that have positively impacted the overall performance and user experience of our applications.",
    },
    {
      image: "/images/avatar.svg",
      title: "Bill Gates",
      content:
        "Beyond technical prowess, Robert Koteles is a collaborative team player who consistently goes above and beyond to meet project deadlines. [He/She] excels at communicating complex technical concepts in a way that is accessible to both technical and non-technical stakeholders, fostering a positive and efficient working environment.",
    },
  ];

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  const extraButton = (
    <DiscoverMore
      title={["Show all recommendations", "Show all recommendations"]}
      link="#"
      onclick={(e) => doDemo(e)}
    />
  );

  return (
    <ProfileCardBox
      title="Recommendations"
      onclickedit={onClickEdit}
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      <ContentListItems items={contentToShow} />
    </ProfileCardBox>
  );
};

export default ProfileCardRecommendations;
