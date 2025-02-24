"use client"
import FeatureItem from './feature';

interface FeatureItemProps {
  image: string;
  title: string;
  points: string[];
  services: string;
  map?: string;
}

const About: React.FC = () => {

  const features: FeatureItemProps[] = [
    {
      image: "https://www.wsclinic.org/assets/MentalHealth-BvNceQJh.jpg",
      title: "PHYSICAL HEALTH",
      points: [
        "General Physician",
        "Gynaecologist",
        "Dermatologist",
        "Nephrologist",
        "Cardiologist",
        "Orthopedic",
        "Diabetologist",
        "Physiotherapist",
        "Dietician ",
        "Infectious Disease Specialists",
      ],
      services: "/services/physicalHealth",
    },
    {
      image: "https://www.wsclinic.org/assets/MentalHealth-BvNceQJh.jpg",
      title: "MENTAL HEALTH",
      points: [
        "Psychiatrist",
        "Psychologist",
        "Sexology",
        "Post-traumatic stress disorder",
        "Couple therapies",
        "Therapies",
        "Anxiety",
        "Depression",
        "OCD",
        "Psychosis",
      ],
      services: "/services/mentalHealth",
    },
    {
      image: "https://www.wsclinic.org/assets/MentalHealth-BvNceQJh.jpg",
      title: "Kids CARE",
      points: [
        "Occupational Therapy",
        "Speech Therapy",
        "Special Education",
        "Psychological Assessment",
        "Behavioral Therapy",
        "Autism",
        "ADHD Support",
        "Counseling",
        "Psychology Screening",
        "Cognitive Behavioral Therapy",
      ],
      services: "/services/kidsCare",
    },
  ];

  return (
    <>
      <div className="container mx-auto lg:px-8 px-4 py-2 md:mt-36">
        <div className="counter md:p-0 p-3">
          <div className="flex justify-center">
            <div className="w-full ">
              <div className="section-title mb-4 text-center">
                <h2 className="text-2xl mt-3 mb-0 font-bold uppercase text-gray-600">
                  What’s Unique <span className="text-red-500">About Us?</span>
                </h2>
              </div>
              <p className="mb-4 text-center">
                WS Clinic is an innovative and all-inclusive health and wellness initiative committed to evaluating and enhancing overall well-being. Our goal is to ensure that everyone flourishes in a caring and supportive environment by offering comprehensive preventative care that addresses mental, physical, and behavioural issues.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:gap-6">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                image={feature.image}
                title={feature.title}
                points={feature.points}
                services={feature.services}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;