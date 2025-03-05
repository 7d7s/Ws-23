"use client"
import Image from "next/image";
import Banner from '@/components/banner/index'
import Link from "next/link";

const doctors = [
  {
    id: "psychologist",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647818/UpinderKaur_tlq0di.png",  
    name: "Ms. Upinder Kaur",
    title: "Masters in Psychology Therapist, Counsellor",
    experience: "21 Years of Experience",
    description: `
      <b>Ms. Upinder Kaur</b> is an accomplished psychologist with 21 years of experience in clinical and counselling psychology. She practises at WellSkool Clinic and Kalra Hospital in Kirti Nagar, Delhi. Ms. Kaur holds a Master’s in Psychology from Kurukshetra University (2003) and a Bachelor’s in Special Education from the Rehabilitation Council of India (2014). She also holds 10 years of former experience in Sir Ganga Ram Hospital. As a member of the Rehabilitation Council of India (RCI), she is committed to providing high-quality mental health services.
    `,
    specialties: [
      "Our psychologists offer therapeutic support for emotional and mental well-being, helping patients navigate stress, anxiety, and other psychological issues.",
    ],
  },
  {
    id: "General-Physician",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647752/AmitHarshana_mghg54.png",
    name: "Dr. Amit Harshana",
    title: "General Physician & HIV/ AIDS",
    description: `
      <b>Dr. Amit Harshana</b> holds an MBBS, DTM&H (RCP, London), DNB, AAHIVS 
      (American Academy of HIV Medicine), MPH (LSTM, UK), FRSPH (London), and 
      PGDPHN. With 15 years of experience, Dr. Harshana specialises in 
      infectious diseases, HIV, and sexual health. Having worked in the field 
      of HIV and sexually transmitted infections for over a decade, Dr. Harshana 
      also serves as a technical advisor to the National HIV/AIDS program, 
      contributing to policy-making at all levels.
    `,
    specialties: [
      "Our dedicated child specialists offer compassionate care for children, from routine check-ups to managing complex paediatric conditions.",
    ],
    experience: "15 Years of Experience",
    class: "pt-320-3",
  },
  {
    id: "Gynaecologist",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647772/Divija_m9cdkg.png",
    name: "Dr. Divija Chugh",
    title1: "MBBS, MS - Obstetrics & Gynaecology Obstetrician, Gynecologist",
    title2: "Gynecologist Specialist",
    description: `
      <b>Dr. Divija Chugh</b> is a compassionate and highly experienced 
      gynaecologist with over 16 years of professional experience. She has 
      worked at prestigious institutions including Lady Hardinge Medical College, 
      Safdarjung Hospital, Deen Dayal Upadhayay Hospital, MMIMSR Maula (Ambala), 
      UCMS, and GTB Hospital. Dr. Chugh expertly manages a wide range of 
      gynaecological procedures, C-sections, and deliveries. Additionally, she 
      has contributed to the medical field with numerous published papers in 
      various esteemed publications.
    `,
    specialties: [
      "Our skilled gynaecologists provide expert care in women's health, including reproductive health, pregnancy, and menopause management.",
    ],
    experience: "12 Years of Experience",
  },
  {
    id: "ENT/Hearing",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647798/Nitya_vhbqf3.png",
    name: "Dr. Nitya Subramanian",
    title1:
      "MBBS, Diploma in Otorhinolaryngology (DLO), DNB - Otorhinolaryngology ENT/ Otorhinolaryngologist",
    title2: "Gynecologist Specialist",
    description: `
      <b>Dr. Nitya Subramanian</b> is a dynamic ENT specialist renowned for her expertise in managing allergies, sinusitis, and vertigo. With a robust background from her tenure at SGRH, she has developed a deep understanding of these conditions and their impact on patients' lives. Dr. Subramanian is dedicated to delivering personalised and comprehensive care, ensuring her patients receive the best possible treatment. Her commitment to staying updated with the latest advancements in ENT medicine allows her to provide innovative and effective solutions, making her a trusted name in her field.
    `,
    specialties: [
      "Our ENT specialists offer comprehensive care for ear, nose, and throat conditions, including hearing assessments and treatments.",
    ],
    experience: "11 Years of Experience",
  },
  {
    id: "Nephrologist",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647757/BhanuMishra2_axelm8.png",
    name: "Dr. Bhanu Mishra",
    title1:
      "MBBS, MD - General Medicine, DNB - Nephrology Nephrologist/Renal Specialist, Internal Medicine",
    title2: "Nephrologist Specialist",
    description: `
      <b>Dr. Bhanu Mishra</b> is a Nephrologist and Internal Medicine specialist with 7 years of experience, practising at Mishra Superspeciality Clinic in both Rohini and Janakpuri, Delhi. He completed his MBBS from GMC Goa in 2013, his MD in General Medicine from Goa University in 2016, and his DNB in Nephrology from the National Board of Examination, India in 2020. Dr. Mishra offers a range of services including transplant nephrology, kidney transplants, adult nephrology, urinary tract infection (UTI) treatment, and dialysis/haemodialysis.
    `,
    specialties: [
      "Our nephrologists provide expert care for kidney-related issues, including chronic kidney disease, dialysis, and transplant preparation.",
    ],
    experience: "7 Years of Experience",
  },
  {
    id: "Cardiologist",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647794/Naveen_sh5abr.png",
    name: "Dr. Naveen Bhamri",
    title1: "MBBS, MD - Medicine, DM - Cardiology",
    title2: "MBBS, Cardiologist Specialist",
    description: `
      <b>Dr. Naveen Bhamri</b> is one of the top cardiologists in North and West Delhi, with impressive credentials including an MD in Medicine, DM in Cardiology, and FESC. He has performed over 23,000 angiographies, 8,000 angioplasties, 600 device implants (including pacemakers, AICDs, CRTs, CRT-Ds, and leadless pacemakers), 250 balloon valvuloplasties, and 500 peripheral angioplasties (carotid, vertebral, iliac, femoral, popliteal). Dr. Bhamri is a member of CSI, FSCAI, and FESC, reflecting his dedication to excellence in cardiology.
    `,
    specialties: [
      "Our cardiologists offer advanced care for heart health, including diagnostics, treatment, and management of cardiovascular diseases.",
    ],
    experience: "25 Years of Experience",
  },
  {
    id: "Orthopaedic",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647790/MadhurMahna_havhjo.png",
    name: "Dr. Madhur Mahna",
    title1:
      "MBBS, DNB - Orthopedics/Orthopaedic Surgery, Joint Replacement Surgeon, Spine And Pain Specialist, Orthopaedic surgeon",
    title2: "MBBS, Orthopaedic Specialist",
    description: `
      <b>Dr. Madhur Mahna</b> is a dynamic orthopaedic surgeon based in New Delhi, specialising in complex trauma, arthroplasty, arthroscopy, and paediatric orthopaedic diseases. He graduated from Kasturba Medical College, Mangalore in 2010 and completed his post-graduation in orthopaedics at Indraprastha Apollo Hospitals, Delhi in 2014. Dr. Mahna has extensive experience, having served as a Senior Resident at Sanjay Gandhi Memorial Hospital, where he managed an average of 80-90 patients daily and performed 4-5 independent procedures weekly. He has expertise in knee and hip arthroplasties, revision arthroplasties, arthroscopies, paediatric orthopaedic procedures, complex trauma, spine surgeries, and cold orthopaedics. He also worked as a Junior Consultant in Paediatric Orthopaedics and Spine at Artemis Hospitals, Gurugram, focusing on congenital deformities, clubfoot, DDH, paediatric trauma, and cerebral palsy.
    `,
    specialties: [
      "Our orthopaedic specialists treat musculoskeletal conditions, from fractures to joint replacements, ensuring optimal mobility and function.",
    ],
    experience: "14 Years of Experience",
  },
  {
    id: "Plastic-Cosmetic-Surgeon",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647809/SachinRajpal_go363x.png",
    name: "Dr. Sachin Rajpal",
    title1:
      "MS - General Surgery, MCh - Burns & Plastic Surgery, MBBS Plastic Surgeon",
    title2: "Plastic & Cosmetic Surgeon",
    description: `
      <b>Dr. Sachin Rajpal</b> is a highly skilled Plastic, Reconstructive, and Cosmetic Surgeon specialising in all areas of general plastic surgery, as well as cosmetic and reconstructive procedures. His primary focus is to establish a trustworthy relationship with his patients by delivering the best possible treatment tailored to their individual needs and desires.
    `,
    specialties: [
      "Our plastic and cosmetic surgeons offer a range of surgical and non-surgical treatments to enhance and restore appearance and function.",
    ],
    experience: "17 Years of Experience",
  },
  {
    id: "Psychiatrist",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647785/Harish_belwlk.png",
    name: "Dr. Harish Chandra",
    title1: "DNB - Psychiatry, MBBS Psychiatrist",
    title2: "Psychiatrist Specilists",
    description: `
      <b> Dr. Harish Chandra </b> is a psychiatr with 14 years of experience, practising at Mindscape Centre for Counseling and Psychological Well-Being in Malviya Nagar and WS Clinic in Kirti Nagar, Delhi. He earned his MBBS from the University of Delhi in 2006 and completed his DNB in Psychiatry from the National Board of Examinations in 2022. Dr. Chandra is dedicated to providing comprehensive mental health care to his patients.
    `,
    specialties: [
      "Our psychiatrists provide expert care for mental health conditions, offering therapy, medication management, and comprehensive psychiatric evaluations.",
    ],
    experience: "14 Years of Experience",
  },

  {
    id: "Physiotherapist",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647818/UpinderKaur_tlq0di.png",
    name: "Ms. Upinder Kaur",
    title1: "Masters in Psychology Therapist, Counsellor",
    title2: "Physiotherapist Specilists",
    description: `
      <b> Ms. Upinder Kaur</b> is an accomplished psychologist with 21 years of experience in clinical and counselling psychology. She practises at WellSkool Clinic and Kalra Hospital in Kirti Nagar, Delhi. Ms. Kaur holds a Master’s in Psychology from Kurukshetra University (2003) and a Bachelor’s in Special Education from the Rehabilitation Council of India (2014). She also holds 10 years of former experience in Sir Ganga Ram Hospital. As a member of the Rehabilitation Council of India (RCI), she is committed to providing high-quality mental health services.
      <br/>
      Upinder Kaur is a Consultant Psychologist specialising in counselling, coaching, and mentoring, with a focus on child, adolescent, and family mental health. She provides individual and group therapy to individuals, adolescents, couples, and families, offering feasible, self-empowering solutions. Upinder is passionate about making a positive impact, especially on children and young adults, and works with diverse populations across various regions. Her services include counselling, therapeutic work, workshops, and training, utilising techniques such as cognitive behavioural therapy, existential therapy, and assertiveness training to address issues like anxiety, stress, depression, self-esteem, and anger management.

    `,
    specialties: [
      "Our physiotherapists provide rehabilitation for injuries and chronic conditions, enhancing physical function and promoting overall well-being.",
    ],
    experience: "21 Years of Experience",
  },
];

const Doctors = () => {
    const aboutBanner = {
        title: "Doctors",
        subtitle: "Doctors",
        backgroundImage: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647774/doctors_ewmtk3.jpg", // Custom image for About page
      };
  return (
    <>  
    <Banner {...aboutBanner} />
    <div className="container max-w-6xl mx-auto py-8 px-4 ">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="flex flex-col md:flex-row bg-white border-010 rounded-lg my-12 overflow-hidden"
        >
          {/* Left: Doctor Image */}
          <div className="md:w-1/3 flex justify-center items-center p-6">
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right: Doctor Details */}
          <div className="md:w-2/3 md:p-6 pt-0 px-6 pb-6">
            <h3 className="text-xl font-bold text-red-800  md:text-left text-center">{doctor.name}</h3>
            <p className="text-gray-700 font-semibold  md:text-left text-center ">{doctor.title}</p>
            <p className="text-gray-500">{doctor.experience}</p>

            <div
              className="mt-4 text-gray-600 text-justify"
              dangerouslySetInnerHTML={{ __html: doctor.description }}
            />

            {/* Specialties */}
            <div className="mt-4">
              <h6 className="text-lg font-semibold text-gray-800">Specialties</h6>
              <ul className="list-disc ml-6 text-gray-600 text-justify">
                {doctor.specialties.map((specialty, index) => (
                  <li key={index}>{specialty}</li>
                ))}
              </ul>
            </div>

            {/* Appointment Button */}
            <div className="mt-6">
              <Link href="/contact" className="px-4 py-2 rounded-md btn-airtel">
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Doctors;
