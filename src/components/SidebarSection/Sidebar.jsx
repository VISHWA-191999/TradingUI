import { IoIosArrowDropright } from "react-icons/io";
import Menu from "./Menu";
import Apps from "./Apps";
import { IoIosArrowDown } from "react-icons/io";
import Profile from "./Profile";


const Sidebar = () => {

    return (
       <aside className="bg-white p-1 rounded-l-lg fixed ">
        <div className="flex justify-between items-center my-3 mx-3 ">
        <h3 className="font-semibold text-lg">Trading</h3>
        <IoIosArrowDropright size={20}/>
        </div>

        {/* Menu Section */}

        <div>
            <Menu/>
        </div>

        <hr className="my-3"/>

        {/* Apps Section */}

        <Apps/>

        {/* Remaining part...i.e Account , status , pprogram */}
        <div className="my-3 bg-gray-100 px-1 py-2 mx-2 rounded-lg">
            <div className="flex justify-between mx-2 p-2 bg-white rounded mt-2">
                <h3 className="text-gray-500">Account :</h3>
                <div className="flex items-center gap-1 ">
                <p>9999999</p>
                <IoIosArrowDown/>

                </div>
               
            </div>

            <div className="flex justify-between mx-2 p-2 bg-white rounded mt-1">
                <h3 className="text-gray-500">Status</h3>
                <div className="flex items-center gap-2 justify-center ">
                    <p>Active</p>
               <div className="bg-green-600 rounded-full h-2 w-2"></div>
               

                </div>
               
            </div >
            <div className="flex justify-between mx-2 p-2 bg-white rounded mt-1">
                <h3 className="text-gray-500">Program</h3>
                
                <p>$50,000 Evl.</p>
                

               
               
            </div>
        </div>

        <Profile/>
       
       </aside>
    )
}

export default Sidebar;