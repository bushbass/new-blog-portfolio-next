import Header from './Header'
import Footer from './Footer'
import { slide as Menu } from 'react-burger-menu'
function Layout({ children }) {
  return (
    <div>
      <Menu pageWrapId={'page-wrap'}>
        <a id='home' className='menu-item' href='/'>
          Home
        </a>
        <a id='about' className='menu-item' href='/about'>
          About
        </a>
        <a id='contact' className='menu-item' href='/contact'>
          Contact
        </a>
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
