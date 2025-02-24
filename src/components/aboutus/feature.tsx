"use client"
import Link from 'next/link';
import Image from 'next/image';
import './aboutModule.css'
import Button from '@/components/buttons/bookAppointment';
interface FeatureItemProps {
  image: string;
  title: string;
  points: string[];
  services: string;
  // heartIcon?: string; // Optional prop
}


const FeatureItem: React.FC<FeatureItemProps> = ({ image, title, points, services }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 sm:w-full md:p-4 p-2 item features-image">
      <div className="vlt-post--masonry">
        <div className="vlt-post-border">
          <span className="top"></span>
          <span className="right"></span>
          <span className="bottom"></span>
          <span className="left"></span>
        </div>
        <div className="item-wrapper">
          <div className="item-img">
            <Image
              src={image}  
              alt={title}
              width={500}  
              height={600}
            />
          </div>
          <div className="item-content w-100">
            <h5 className="text-white display-4 fs-3 text-uppercase">{title}</h5>
            <Link href="#"  className="text-white list- alt-tag">
              Read More...
            </Link>
            <ul className="mbr-text  mt-3 mb-6 pr-4 pl-12 leading-relaxed list-disc">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <Button text="Book Appointment" link={services} className='mt-64'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;