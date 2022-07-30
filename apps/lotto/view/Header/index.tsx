import {
  Container,
  Logo,
  Menu,
  OptionsMenu,
  User,
  UserImage,
  UserName
} from './styled';

export const Header = () => {
  return (
    <Container>
      <Logo>
        <img src="/logotryluck.png" alt="" />
      </Logo>
      <Menu>
        <OptionsMenu>INFORMACIÓN</OptionsMenu>
        <OptionsMenu>SUPER LOTTO</OptionsMenu>
        <OptionsMenu>APUESTAS DEPORTIVAS</OptionsMenu>
        <OptionsMenu>JUEGOS</OptionsMenu>
        <OptionsMenu>SIMULADOR</OptionsMenu>
      </Menu>
      <User>
        <UserName>
          <div>Jose Gonzalez</div>
          <div>0,00$</div>
        </UserName>
        <UserName></UserName>
        <UserImage></UserImage>
      </User>
    </Container>
  );
};
