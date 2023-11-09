import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaBars } from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
  }

  const menuItems = <>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/foods'}>Foods</NavLink>
          <NavLink to={'/addFood'}>Add Food</NavLink>
          <NavLink to={'/manageFood'}>Manage My Foods</NavLink>
          <NavLink to={'/myFoodRequest'}>My Food Request</NavLink>
  </>
  return (
    <div className='px-[5%] mx-auto flex items-center py-5 shadow-lg shadow-[#9ca3af29] gap-5'>

      {/* website logo section  */}
      <div className='flex place-items-center gap-5'>
        <img src={logo} alt="" className='h-[70px]' />
        <span className='text-2xl font-medium primary-color'>Share Plate</span>
      </div>

      {/* navbar section here  */}
      <div className='flex-1'>
        <div className='hidden lg:block text-center space-x-8 xl:space-x-10 text-xl playfair-display tracking-wide'>
          {
            menuItems
          }
        </div>
        <div className='block lg:hidden text-center'>
          <span className='inline-block dropdown relative'>
            <FaBars className='text-3xl'></FaBars>
            <div className='dropdown-items absolute top-7 hidden rounded-md bg-gray-200 w-[200px] py-2'>
              {
                menuItems
              }
            </div>
          </span>
        </div>
      </div>

      {/* login profile section here  */}
      <div className='text-right'>
        {
          user ? <div className='w-[50px] h-[50px] relative profile-container z-30'>
          <img src={user.photoURL} alt="" className='w-full rounded-full bg-gray-400 h-full' />
          <div className='bg-gray-100 w-[350px] absolute top-13 rounded-md -right-1 text-left px-5 py-8 space-y-5 profile hidden'>
            <h2 className='text-xl'>{user.displayName}</h2>
            <h2 className='text-xl'>{user.email}</h2>
            <hr className='border-t border-gray-500' />
            <button onClick={handleLogOut} className='primary-bg text-white px-8 py-2 montserrat rounded-md text-xl tracking-wide'>Logout</button>
          </div>
        </div>

          :
          
          <Link to={'/login'}><button className='primary-bg text-white px-8 py-2 montserrat rounded-md text-xl tracking-wide'>Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Header;
