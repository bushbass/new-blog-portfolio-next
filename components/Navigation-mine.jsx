import styled from 'styled-components'
import { useState } from 'react'
import Image from 'next/image'

const Button = styled.button`
  padding: 5px;
  margin: 5px;
  border: 0;
  border-radius: 4px;
`
const Navbar = styled.nav`
  display: ${(props) => (props.navOpen ? 'inline' : 'none')};
  ul {
    list-style: none;
  }
  position: fixed;
  @media (min-width: 767px) {
    display: none;
  }
`
const OtherNav = styled.nav`
  display: ${(props) => (props.navOpen ? 'none' : 'inline')};
  position: fixed;
  background: #7272b1f2;
  color: white;
  height: 100vh;
  font-size: 1.3rem;
  ul {
    list-style-type: none;
    padding-right: 100px;
  }
  @media (min-width: 767px) {
    display: none;
  }
`
const FullNav = styled.nav`
  background: #7272b1;
  display: flex;
  color: white;
  padding: 10px 10px 10px 30px;
  p {
    font-size: 1.5rem;
  }
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    li {
      padding-right: 10px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export default function Nav() {
  const [navOpen, setNavOpen] = useState('false')

  return (
    <div>
      <FullNav>
        <p>Alex Nielsen</p>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </FullNav>

      <Navbar navOpen={navOpen}>
        <Button onClick={() => setNavOpen(!navOpen)}>
          <Image
            src='/menu-icon.svg'
            alt='Vercel Logo'
            width={25}
            height={20}
          />
        </Button>
      </Navbar>
      <OtherNav navOpen={navOpen}>
        <Button onClick={() => setNavOpen(!navOpen)}>
          <Image
            src='/menu-icon.svg'
            alt='Vercel Logo'
            width={25}
            height={20}
          />
        </Button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </OtherNav>
    </div>
  )
}
