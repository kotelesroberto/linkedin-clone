/**
 *
 * Component: General, listing given content on Profile page
 * @desc This component shows content as list items
 * @author Robert Koteles
 * @version 1.0.0
 * @param {string} param.title - Title
 * @param {string} param.title2 - Title 2
 * @param {string} param.title3 - Title 3
 * @param {string} param.title4 - Title 4
 * @param {string} param.content - Content 1
 * @param {string} param.content2 - Content 2
 * @param {string} param.content3 - Content 3
 * @param {string} param.content4 - Content 4
 */

import React from "react";
import { ContentList, ContentListItem } from "../../Common/Cards";
import styled from "styled-components";
import parse from "html-react-parser";
import * as variables from "../../Common/Variables";

const ContentListItems = (props) => {
  const items = props.items;
  return (
    <ContentList>
      {!!items.length &&
        items.map((item, index) => (
          <ContentListItem key={`${item.title.toLowerCase()}-${index}`}>
            {!!item.image && (
              <ContentListItemImage>
                <img src={item.image} alt={item.title} />
              </ContentListItemImage>
            )}
            <ContentListItemContainer>
              {!!item.title && (
                <ContentListItemTitle>{item.title}</ContentListItemTitle>
              )}
              {!!item.title2 && (
                <ContentListItemTitle2>{item.title2}</ContentListItemTitle2>
              )}
              {!!item.title3 && (
                <ContentListItemTitle3>{item.title3}</ContentListItemTitle3>
              )}
              {!!item.title4 && (
                <ContentListItemTitle4>{item.title4}</ContentListItemTitle4>
              )}

              {!!item.content && (
                <ContentListItemContent1>
                  {item.content}
                </ContentListItemContent1>
              )}
              {!!item.content2 && (
                <ContentListItemContent2>
                  {parse(item.content2)}
                </ContentListItemContent2>
              )}
              {!!item.content3 && (
                <ContentListItemContent3>
                  {parse(item.content3)}
                </ContentListItemContent3>
              )}
              {!!item.content4 && (
                <ContentListItemContent4>
                  {parse(item.content4)}
                </ContentListItemContent4>
              )}
            </ContentListItemContainer>
          </ContentListItem>
        ))}
    </ContentList>
  );
};

const ContentListItemImage = styled.div`
  width: 48px;
  margin-right: 8px;

  img {
    width: 48px;
    height: auto;
    display: block;
  }
`;

const ContentListItemContainer = styled.div`
  width: 100%;
`;

const ContentListItemTitle = styled.h3`
  margin-bottom: 4px;
`;

const ContentListItemTitle2 = styled.h4`
  font-size: 14px;
  color: ${variables.colors.maincolor3er};
  font-weight: 400;
`;

const ContentListItemTitle3 = styled.h5`
  color: ${variables.colors.maincolor3};
  font-size: 14px;
  font-weight: 400;
`;

const ContentListItemTitle4 = styled(ContentListItemTitle3)``;

const ContentListItemContent1 = styled.div`
  button {
    padding: 6px 16px;
    min-height: initial;
    margin-top: 12px;

    img {
      margin-left: 4px;
      width: 14px;
      height: auto;
    }
  }
`;
const ContentListItemContent2 = styled.div`
  margin-top: 8px;
  font-size: 14px;
`;
const ContentListItemContent3 = styled.div`
  margin-top: 8px;
  font-size: 14px;
`;
const ContentListItemContent4 = styled.div`
  font-size: 14px;
`;

export default ContentListItems;
