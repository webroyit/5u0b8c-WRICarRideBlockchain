import Image from 'next/image'
import avatar from '../temp/avatar.jpeg'
import { BsPerson } from 'react-icons/bs'

const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-50 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-2xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
}

const currentAcccount = "0x0000000000000000000000000000000000000000";

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>WRI CRBC</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>Guest</div>
        <div className={style.userImageContainer}>
          <Image className={style.userImage} src={avatar} width={40} height={40} />
        </div>

        {currentAcccount ? (
          <div>
            {currentAcccount.slice(0, 6)}...{currentAcccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton}>
            <BsPerson />
            <span className={style.loginText}>please log in</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar