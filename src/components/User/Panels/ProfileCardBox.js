/**
 *
 * Component: General, empty box for Profile page components
 * @desc This component uses a parser that parses HTML content to render (without it all HTML element is rendered as simple raw content) OR a component structure as children
 * @author Robert Koteles
 * @version 1.0.0
 * @param props
 * @param props.title - Title of the box
 * @param props.subtitle - Subtitle of teh box
 * @param props.subtitleicon - Image, icon for the subtitle
 * @param props.extrabutton - Extra button to show at the bottom of the box, a React component
 * @param props.iseditmode - Boolean, is this box editable?
 */

import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { BoxContainer, BoxCardTop, BoxCardContent } from "../../Common/Cards";
import { EditButton } from "../../Common/Buttons";

import { connect } from "react-redux";
import {
  actionSetShowModal,
  setCurrentURLAPI,
} from "../../../redux/actions/actions";

const ProfileCardBox = (props) => {
  const isEditMode = props.iseditmode ? props.iseditmode : false;
  const showModal = props.showModal;
  const setShowModal = props.setShowModal;
  const panel = props.panel;

  const onClickEdit = (e) => {
    e.preventDefault();
    console.log("onClickEdit");
    setShowModal(`edit-profile--${panel}`);
  };

  // Content to show. It could be some HTML content or Component as children
  const content = props.content ? parse(props.content) : props.children;

  return (
    <BoxContainer>
      <BoxCardTop>
        <h2>{props.title}</h2>

        {props.subtitleicon && (
          <span>
            <img src={props.subtitleicon} alt={props.subtitle} />
            <h3>{props.subtitle}</h3>
          </span>
        )}
      </BoxCardTop>
      <BoxCardContent>{content}</BoxCardContent>

      {isEditMode && (
        <LocalEditButton className="big" onClick={(e) => onClickEdit(e)} />
      )}

      {!!props.extrabutton && props.extrabutton}
    </BoxContainer>
  );
};

const LocalEditButton = styled(EditButton)`
  z-index: 100;
  position: absolute;
  right: 12px;
  top: 24px;
  border: none;

  &.big {
    &:before {
      width: 20px;
      height: 20px;
    }
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    showModal: state.popupModalState.popupModal.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowModal: (newPopupState) => {
      dispatch(actionSetShowModal(newPopupState));
    },
    setCurrentURL: (url) => {
      dispatch(setCurrentURLAPI(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCardBox);
