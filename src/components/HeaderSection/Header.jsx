import { AiFillDollarCircle } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { useTheme } from './../../useContextHook/useTheme';
import { FiMoon, FiSun } from "react-icons/fi";

const Header = () => {

    const { isDarkMode, toggleTheme } = useTheme();
    console.log(isDarkMode)
    // console.log(toggleTheme)
    return (
        <header className=" bg-white dark:bg-gray-900 dark:text-white ml-1 flex justify-between items-center rounded-tr-lg p-4 ">

           <h2 className="text-2xl text-black  dark:text-white font-semibold">
                Welcome back, Vishwa 
           </h2>
           <div className="flex justify-between items-center gap-4 mr-3">
            <div className="flex items-center bg-blue-600 rounded-lg p-1 gap-1">
                <AiFillDollarCircle/>
               <h3>Request Payout</h3>


            </div>
            <div className="flex items-center bg-blue-200 p-1 rounded-lg  gap-1">
                <IoMdShare/>
                <h3>Share Matrices</h3>
            </div>
            <div className="bg-blue-200 rounded-lg p-2">
            <FaKey  />
            </div>
            {/* <button onClick={toggleTheme} className="p-2 rounded bg-gray-300 dark:bg-gray-800">
      Toggle Theme
    </button> */}

 <button className={`flex items-center justify-center h-10 w-10 rounded-full ${isDarkMode ? "bg-yellow-500" : "bg-gray-800"}  ${isDarkMode ? "bg-gray-300" : "bg-white"}  `}
        onClick={toggleTheme}>
         {isDarkMode ? (
          <FiSun className="text-xl bg-yellow-400 rounded-full"/>
         ) : (
          <FiMoon className={`text-xl ${isDarkMode ? "text-white" : ""}`}/>
         )
        }
        </button> 
           

           </div>
        </header>
    )
}

export default Header;