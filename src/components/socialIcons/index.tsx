import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = "" }) => {
  const icons = [
    { id: 1, icon: <FaFacebookF />, link: "https://www.facebook.com/wsclinicindia/" },
    { id: 2, icon: <FaYoutube />, link: "https://www.youtube.com/@WsClinic" },
    { id: 3, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/ws-clinic/" },
    { id: 4, icon: <FaInstagram />, link: "https://www.instagram.com/wsclinic/" },
  ];

  return (
    <div className={`flex space-x-4`}>
      {icons.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className={`btn-airtel md:text-2xl text-sm rounded transition ${className}`} target="_blank"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
