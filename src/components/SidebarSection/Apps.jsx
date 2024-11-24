import { LiaCertificateSolid } from "react-icons/lia";

const Apps = () => {
  return (
    <div>
      <div className="text-xs text-gray-500 ml-2 mb-2">APPS</div>
      <div className="flex flex-col gap-2 ml-2">
        <div className="flex gap-1  items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>News Feeds</h3>
        </div>

        <div className="flex gap-1  items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>Economic Calender</h3>
        </div>

        <div className="flex gap-1  items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>WebTrader Platform</h3>
        </div>

        <div className="flex gap-1  items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>Margin Calculator</h3>
        </div>
        <div className="flex gap-1  items-center">
          <span>
            <LiaCertificateSolid />
          </span>
          <h3>Profit Calculator</h3>
        </div>
      </div>
    </div>
  );
};

export default Apps;
