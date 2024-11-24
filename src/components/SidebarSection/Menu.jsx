import { LiaCertificateSolid } from "react-icons/lia";
const Menu = () => {
  return (
    <div>
      <div className="text-xs text-gray-500 ml-2 mb-2">MENU</div>
      <div className="flex flex-col gap-2 ml-2">
        <div className="flex gap-1 bg-blue-500 rounded-lg p-1 items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>Accounts Overview</h3>
        </div>
        <div className="flex gap-1  items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>Payouts</h3>
        </div>
        <div className="flex gap-1  items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>Certificates</h3>
        </div>

        <div className="flex gap-1  items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>Leaderboard</h3>
        </div>
        <div className="flex gap-1  items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>Order List</h3>
        </div>
      </div>
    </div>
  );
};

export default Menu;
