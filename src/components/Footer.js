import { PiWalletFill } from 'react-icons/pi';
import { BsFillBellFill } from 'react-icons/bs';
import { TbSettings } from 'react-icons/tb';
import { IoMdCompass } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-btns">
        <PiWalletFill className="icon selected" />
        <IoMdCompass className="icon" />
        <BsFillBellFill className="icon" />
        <TbSettings className="icon" />
      </div>
    </footer>
  );
};
export default Footer;
