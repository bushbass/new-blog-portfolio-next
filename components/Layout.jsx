import Header from './Header'
import Footer from './Footer'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
function Layout({ children }) {
  return (
    <div>
      <Menu pageWrapId={'page-wrap'}>
        <Link href='/'>
          <a id='home' className='menu-item'>
            Home
          </a>
        </Link>
        <Link href='/about'>
          <a id='about' className='menu-item'>
            About
          </a>
        </Link>
        <Link href='/contact'>
          <a id='contact' className='menu-item'>
            Contact
          </a>
        </Link>
      </Menu>
      <main id='page-wrap'>
        <>
          {children}
          <Footer />
        </>
      </main>
    </div>
  )
}

export default Layout
