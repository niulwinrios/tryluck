import styled from 'styled-components';

export const BetsContainer = styled.div`
  width: 100%;
  padding: 5px 5px;
  display: flex;
  flex-direction: column;
  background-color: #e6e6e6;
`;
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const BetsCard = styled.div`
  width: 32.5%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
`;

export const Tittle = styled.span`
  width: 100%;
  padding: 10px;
  border-bottom: solid 1px #a5a5a5;
`;

export const GamesCard = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const EstimateCard = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
export const TeamCard = styled.div`
  width: 32%;
  height: 25px;
  font-size: 12px;
  background-color: #eb0202;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Span = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
