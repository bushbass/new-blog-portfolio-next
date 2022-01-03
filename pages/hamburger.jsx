import { slide as Menu } from 'react-burger-menu'
function Hamburger() {
  return (
    <div>
      <Menu pageWrapId={'page-wrap'} />
      <main id='page-wrap'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolore
          commodi, natus culpa expedita quibusdam beatae eligendi odio impedit,
          praesentium quas nulla quam sed iusto architecto porro dicta aperiam
          velit itaque odit reprehenderit laborum dolorum. Quis aliquam
          perferendis necessitatibus accusantium, doloribus quidem deserunt,
          explicabo, culpa voluptas adipisci itaque hic dolorem.
        </p>
      </main>
    </div>
  )
}

export default Hamburger
