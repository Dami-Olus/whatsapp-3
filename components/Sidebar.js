import { Avatar } from "@material-ui/core";
import styled from "styled-components";

function Sidebar() {
  return (
    <div>
      <Container>
        <Header>
          <UserAvatar />
          <IconsContainer></IconsContainer>
        </Header>
      </Container>
    </div>
  );
}

export default Sidebar;

const Container = styled.div``;
const Header = styled.div``;
const UserAvatar = styled(Avatar)`
  margin: 10px;
`;
const IconsContainer = styled.div``;
