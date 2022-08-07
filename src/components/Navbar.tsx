import tw from 'tailwind-styled-components';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  return (
    <Nav style={{ height: '15vh' }}>
      <Navhero>Todoer</Navhero>
      <HiMenu size={35} className="lg:hidden" />
      <Menu>
        <MenuItems>
          <L>Dodge</L>
        </MenuItems>
        <MenuItems>
          <L>Dodge</L>
        </MenuItems>
        <MenuItems>
          <L>Dodge</L>
        </MenuItems>
        <MenuItems>
          <L>Dodge</L>
        </MenuItems>
      </Menu>
    </Nav>
  );
};

const L = tw.a`
hover:font-bold
hover:cursor-pointer
`;

const MenuItems = tw.li`

`;

const Navhero = tw.div`
text-xl
flex-1
`;

const Nav = tw.nav`
p-10
bg-black
text-white
flex
`;

const Menu = tw.ul`
hidden
lg:flex
lg:gap-3

`;

export default Navbar;
