import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

function Navigation() {
  return (
    <Menu pageWrapId={'page-wrap'}>
      <Link href="/">
        <a id="home" className="menu-item">
          Home
        </a>
      </Link>
      <Link href="/about">
        <a id="about" className="menu-item">
          About
        </a>
      </Link>
      <Link href="/contact">
        <a id="contact" className="menu-item">
          Contact
        </a>
      </Link>
    </Menu>
  );
}

export default Navigation;
