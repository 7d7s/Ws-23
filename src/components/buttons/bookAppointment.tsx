import Link from 'next/link';
import './btnModule.css'

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ text, link, className = "", style }) => {
  return (
    <Link href={link} passHref className={`btn ${className} px-4 py-2 rounded-md btn-airtel`}
    style={style}>
        {text}
    </Link>
  );
};

export default Button;
