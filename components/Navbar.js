import Image from 'next/image'
import avatar from '../temp/avatar.jpeg'

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
        <div>0x0000...0000</div>
      </div>
    </div>
  )
}

export default Navbar