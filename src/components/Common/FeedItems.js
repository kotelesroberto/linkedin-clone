import styled from "styled-components";

export const SocialCounts = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 8px 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 1em;
`;

export const SocialCountItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin: 0 4px;
  }

  span {
    margin-left: 4px;
  }
`;
