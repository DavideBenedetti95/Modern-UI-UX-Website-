import {useState} from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {

  // useState for Toggle Navbar Icon
  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => {
    setToggle(prevToggle => !prevToggle)
  }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="logo" className='w-[124px] h-[32px]'/>
      
      {/* Desktop Navbar */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((e, index)=>(
          <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === e.length - 1 ? 'mr-0' : 'mr-8'}`}>
            <a href={`#${e.id}`}>
              {e.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar  */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img onClick={toggleHandler} src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' />
        <div className={`${toggle ? 'flex' :' hidden'} p-6 bg-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-gradient-to-r from-gray-900 to-gray-500 sidebar`}>
        <ul className='list-none flex justify-end items-center flex-1 flex-col'>
          {navLinks.map((e, index)=>(
            <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === e.length - 1 ? 'mr-0' : 'mb-4'}`}>
              <a href={`#${e.id}`}>
                {e.title}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar