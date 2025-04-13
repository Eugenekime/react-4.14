import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { MyContext } from "../ContextProvider/MyContext";
import LogOut from "../UI components/LogOut";

export default function RootLayout() {
  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    setUser({
      name: localStorage.getItem("username"),
      avatar: localStorage.getItem("avatar"),
    });
  }, [setUser]);

  return (
    <>
      <Header>
        <Nav>
          <Logo to="articles">Realworld Blog</Logo>
          {user.name ? (
            <CreateArticle to={"#"}>Create article</CreateArticle>
          ) : (
            <NavLink to="sign-in">Sign In</NavLink>
          )}

          {user.name && (
            <ProfileContainer to={"profile"}>
              <ProfileUsername>{user.name}</ProfileUsername>
              <ProfileAvatar
                src={
                  user.avatar &&
                  user.avatar !== "null" &&
                  user.avatar !== "undefined"
                    ? user.avatar
                    : "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png"
                }
                alt={`${user.name}'s avatar`}
              />
            </ProfileContainer>
          )}
          {user.name ? (
            <LogOut />
          ) : (
            <SignUpLink to="sign-up">Sign Up</SignUpLink>
          )}
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

// Styles
const Header = styled.header`
  display: flex;
  background-color: white;
  justify-content: center;
  margin-bottom: 25px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 1440px;
  justify-content: space-between;
  gap: 26px;
  align-items: center;
  height: 80px;
  padding: 0px 22px;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  cursor: pointer;
`;

const Logo = styled(Link)`
  font-size: 18px;
  margin-right: auto;
`;

const SignUpLink = styled(Link)`
  font-size: 18px;
  border: 1px solid rgba(82, 196, 26, 1);
  border-radius: 5px;
  padding: 10px 15px;
  color: rgba(82, 196, 26, 1);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: rgba(82, 196, 26, 1);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

// profile

const ProfileContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
`;

const ProfileUsername = styled.span`
  font-size: 18px;
`;

const ProfileAvatar = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

const CreateArticle = styled(Link)`
  padding: 6px 10px;
  color: rgba(82, 196, 26, 1);
  border: 1px solid rgba(82, 196, 26, 1);
  border-radius: 5px;
  transition: all 0.4s ease;
  &:hover {
    color: white;
    background-color: rgba(82, 196, 26, 1);
  }
`;
