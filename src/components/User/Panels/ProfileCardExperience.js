/**
 *
 * Component: Experience
 * @desc This component is for showing the user's working history, experience
 * @author Robert Koteles
 * @version 1.0.0
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCardBox from "./ProfileCardBox";
import ContentListItems from "./ContentListItems";
import DiscoverMore from "../../Widgets/DiscoverMore";

const ProfileCardExperience = (props) => {
  const profileUid = props.profileuid;
  const isEditMode = props.iseditmode ? props.iseditmode : false;

  const navigate = useNavigate();

  const contentToShow = [
    {
      image: "/upload/logo-williamslea.jpeg",
      title: "Williams Lea",
      title2: "May 2021 - Oct 2023 · 2 yrs 6 mos",
      title3: "London, England, United Kingdom",
      title4: "London, Greater London, United Kingdom",
      content2:
        "My current main projects are the site of https://www.thegazette.co.uk/ (UK's official governmental public record) and British Pharmacopoeia (www.pharmacopoeia.com).My current main projects are the site of https://www.thegazette.co.uk/ (UK's official governmental public record) and British Pharmacopoeia (www.pharmacopoeia.com).",
      content3:
        "<strong>Skills:</strong> User Experience Design (UED) · Prototyping · Mockups · GraphQL · Code Review · Problem Solving · XSLT · Government Relations · Amazon Web Services (AWS) · Webpack · Functionality · Code Design · Web Applications · REST APIs · Responsive Web Design",
    },
    {
      image: "/upload/infomentum_limited_logo.jpeg",
      title: "Senior Consultant",
      title2: "Infomentum · Full-time",
      title3: "Oct 2020 - May 2021 · 8 mos",
      title4: "London, Greater London, United Kingdom",
      content2:
        "Main project was https://www.baesystems.com/ (Defence for Financial Services, Cyber Security, Defence on air, sea and land).",
      content3:
        "<strong>Skills:</strong> User Experience Design (UED) · Prototyping · Mockups · Code Review · Problem Solving · Functionality · Code Design · Web Applications · REST APIs",
    },
    {
      image: "/upload/cheil_uk_logo.jpeg",
      title: "Tech Lead",
      title2: "Cheil UK · Full-time",
      title3: "Aug 2018 - Sep 2020 · 2 yrs 2 mos",
      title4: "London, Greater London, United Kingdom",
      content2:
        "<span >Samsung<br>- Deliver high quality, responsive pages for samsung.com, integrating where required with APIs and functional backend/frontend components<br>- Create highly transactional and scalable microservices to support our tools<br>- Develop the web front end of applications and write automated test code<br>- Managing and creating test and learn activities on samsung.com site (A/B tests)<br>- Engage with all relevant team members to ensure the required quality is delivered from the development processes<br>- Actively engage in and contribute to eCommerce solutions, design other requirements elaboration/refinement sessions as part of a Kanban development team<br>- Contribute to, and assist Solutions Architect with, technical solution design and architectural roadmap<br>- Ensure development team is developing solutions in accordance with Solutions Architect’s vision<br>- Mentor junior/mid-weight/senior developers. Do recruitment activities, hire the most talented developers from the market (interviews, technological tests, etc.).<br><br>What I'm proud of:<br>---------------------<br>- samsung.com UK system been migrated into a new AEM using brand new e-Commerce platform where all of our solutions works well (I mean all of API calls been transformed into the new shape and using new data structure and logical sequences)<br>- being the massive part of new product launches, prepare for unboxing events and make all of the online activities done.<br>- leading an agile team</span>",
      content3:
        "<strong>Skills:</strong> User Experience Design (UED) · Prototyping · Mockups · GraphQL · Code Review · Problem Solving · Functionality · Code Design · Web Applications · REST APIs",
    },
    {
      image: "/upload/logo-williamslea.jpeg",
      title: "Senior Frontend Developer, AEM Developer",
      title2: "Williams Lea Tag (Unilever) · Contract",
      title3: "Jan 2018 - Apr 2018 · 4 mos",
      title4: "London, Greater London, United Kingdom",
      content2:
        "<span>(Unilever)<br>Freelancer Senior AEM frontend developer<br><br>Main projects:<span > </span><br>----------------<br>Unilever: official websites of the entire ice cream palette (Magnum, Carte D'Or, Walls, Cornetto, Solero, etc.)<span > </span><br>Unilever: Signal worldwide.<br>Unilever: Domestos<br><br>Walls ice creams page for 10 global brands base on components in AEM 6.3.<br><br>Skills used: HTML5, CSS3, SASS, JavaScript ES5/ES6, React, Bootstrap, Handlebars.js, AJAX, JSON, Node.js, npm, Webpack, Gulp, AEM, Bitbucket, Jenkins, Sketch, JIRA, Confluence<br>• preparing responsive front-end base of pages, design and style guide for 10 sub brands in Adobe Experience Manager 6.1 and 6.3 with AEM components;<br>• using a new library based on AEM 6.3 with 57 components as a site building toolkit;<br>• working in Agile methodologies and project life cycles</span>",
      content3:
        "<strong>Skills:</strong> User Experience Design (UED) · Prototyping · Mockups · Code Review · Problem Solving · Functionality · Web Applications · REST APIs",
    },
    {
      image: "/upload/black_sun_logo.jpeg",
      title: "Senior Web Developer and Web Manager",
      title2: "Black Sun · Full-time",
      title3: "Mar 2015 - Oct 2017 · 2 yrs 8 mos",
      title4: "London, Greater London, United Kingdom",
      content2: "",
      content3:
        "<strong>Skills:</strong> User Experience Design (UED) · Prototyping · Mockups · Code Review · Problem Solving · Web Applications",
    },
  ];

  const doDemo = (e) => {
    e.preventDefault();
    navigate("/demo");
  };

  const extraButton = (
    <DiscoverMore
      title={["Show all experiences", "Show all experiences"]}
      link="#"
      onclick={(e) => doDemo(e)}
    />
  );

  return (
    <ProfileCardBox
      title="Experience"
      panel="experience"
      iseditmode={isEditMode}
      extrabutton={extraButton}
    >
      <ContentListItems items={contentToShow} />
    </ProfileCardBox>
  );
};

export default ProfileCardExperience;
