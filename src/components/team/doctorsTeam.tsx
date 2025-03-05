import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Button from "@/components/buttons/bookAppointment";
import Image from "next/image";
import "./teamModule.css";

interface SocialLink {
  href: string;
  icon: string;
}

interface TeamMember {
  imgSrc: string;
  name: string;
  title: string;
  socialLinks?: SocialLink[];
  profileLink: string;
  appointmentLink: string;
}

interface DoctorsTeamProps {
  teamMembers: TeamMember[];
}

const DoctorsTeam: React.FC<DoctorsTeamProps> = ({ teamMembers }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="Team_Section container-fluid py-3 mt-3">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/3">
            <div className="doc-section-title bg-gray-50 team-item-box rounded-lg p-6 lg:p-10 flex flex-col justify-center items-center text-center">
              <h2 className="text-4xl font-bold text-gray-700 mb-4">
                Our Expert Doctors, Our Backbone
              </h2>
              <Button text="Book Appointment" link="/contactus" className="mt-7 py-4 px-7" />
            </div>
          </div>

          {/* Slick Slider */}
          <div className="w-full lg:w-2/3">
            {teamMembers?.length > 0 ? (
              <Slider {...settings}>
                {teamMembers.map((member, index) => (
                  <div key={index} className="p-2">
                    <div className="team-item team-item-box">
                      <div className="relative rounded-t-lg">
                        <Image
                          className="img-fluid rounded-top w-100"
                          src={member.imgSrc || "/default-image.jpg"}
                          alt={member.name || "Doctor Image"}
                          width={300}
                          height={300}
                        />
                        <div className="absolute top-0 left-0 right-0 flex justify-center space-x-2 bg-light rounded p-2">
                          {member.socialLinks?.map((link, idx) => (
                            <a key={idx} className="btn bg-gray-dark text-white btn-square" href={link.href}>
                              <i className={link.icon} />
                            </a>
                          )) || <p>No social links</p>}
                        </div>
                      </div>
                      <div className="team-text text-center bg-light rounded-b-lg p-4 pt-5">
                        <h4 className="mb-2">{member.name || "Unknown"}</h4>
                        <p className="text-red mb-0">{member.title || "No Title"}</p>
                        <div className="mt-3">
                          <Link href={member.profileLink || "#"} className="btn btn-primary btn-airtel me-2">
                            View Profile
                          </Link>
                          <Link href={member.appointmentLink || "#"} className="btn btn-secondary btn-airtel">
                            Book Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <p>No team members are available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsTeam;