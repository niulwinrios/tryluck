import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #9b9b9b29;
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
`;
export const Tittles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const BoxInfo = styled.div<{ direction?: string }>`
  width: 30%;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #373737;
  flex-direction: ${(props) => props.direction || 'row%'};
`;

export const Label = styled.label``;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid;
`;
