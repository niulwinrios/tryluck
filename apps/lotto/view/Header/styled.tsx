import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Logo = styled.div`
  width: 17%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const OptionsMenu = styled.div`
  display: flex;
  align-items: center;
  color: #cc171f;
  margin: 0 20px;
  font-weight: bold;
  &:hover {
    border-bottom: 2px solid #cc171f;
  }
`;

export const User = styled.div`
  width: 17%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cc171f;
  border-radius: 50%;
  margin: 0 10px;
`;

export const UserName = styled.div`
  color: #cc171f;
  font-weight: bold;
  text-align: center;
`;
