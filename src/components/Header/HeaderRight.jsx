import { Link } from "react-router-dom";
import { useState } from "react";
import UserPopover from "components/UserPopover";

const HeaderRight = () => {


  const [dropdown, setDropdown] = useState(false);



  return (
    <div className="header-right">
      {(
        <>

          <UserPopover/>
        </>
      )}
    </div>
  );
};

export default HeaderRight;
