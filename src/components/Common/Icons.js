import styled from 'styled-components';

export const IconPeople = styled.span``;

export const IconButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;
    padding: 12px 8px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-weight: 700;

    &:hover {
      outline: none;
      background-color: rgba(0, 0, 0, 0.04);
    }

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;