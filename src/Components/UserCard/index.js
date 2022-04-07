import { Container, ImgWrap, Image, UserInfo, Info } from "./StyledComponents";

const UserCard = ({ first_name, last_name, email, avatar }) => {
  return (
    <Container>
      <ImgWrap>
        <Image src={avatar} />
      </ImgWrap>
      <UserInfo>
        <Info>
          First Name: <strong>{first_name}</strong>
        </Info>
        <Info>
          Last Name: <strong>{last_name}</strong>
        </Info>
        <Info>
          Email: <strong>{email}</strong>
        </Info>
      </UserInfo>
    </Container>
  );
};

export default UserCard;
