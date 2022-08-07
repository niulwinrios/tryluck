import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #9b9b9b29;
  padding-bottom: 20px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
export const Header = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;
export const Span = styled.span`
  font-size: 20px;
  color: #535353;
  font-weight: bold;
`;
export const Info = styled.div`
  width: 85%;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
`;
export const Tittles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const BoxInfo = styled.div<{ direction?: string }>`
  width: 25%;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #373737;
  flex-direction: ${(props) => props.direction || 'row'};
`;

export const Conditions = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-evenly;
`;
export const BoxConditions = styled.div<{ align?: string; justify?: string }>`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || 'flex-start'};
  justify-content: ${(props) => props.justify || 'flex-start'};
`;
export const DivCheck = styled.div`
  margin: 10px 0;
`;
export const DivButton = styled.div`
  width: 40%;
  padding-bottom: 20px;
  margin: auto;
  display: flex;
  justify-content: center;
`;
export const Texto = styled.span`
  font-size: 10px;
  color: #8a8a8a;
  margin-top: 10px;
`;
