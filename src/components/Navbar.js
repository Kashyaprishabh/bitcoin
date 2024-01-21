import { IoChevronBack } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { CgEditFlipH } from "react-icons/cg";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { LiaUploadSolid } from "react-icons/lia";
import { IoRemoveCircleOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav>
      <span className="back-btn">
        <IoChevronBack color="#4c5968" />
      </span>
      <h3>Bitcoin Wallet</h3>
      <span className="menu-btn">
        <BsThreeDots color="#4c5968" className="logo" onclick="myFunction()" />
        <ul id="myDropdown" className="dropdown-content">
          <li onclick="performAction('Edit')">Edit<CgEditFlipH className='i'/></li>
          <li onclick="performAction('Courier Info')">Courier Info<HiOutlineRectangleStack className='i'/></li>
          <li onclick="performAction('Share')">Share<LiaUploadSolid className='i'/></li>
          <li onclick="performAction('Remove')">Remove<IoRemoveCircleOutline className='i' color='red'/></li>
        </ul>
      </span>
      
    </nav>
  );
};
export default Navbar;
