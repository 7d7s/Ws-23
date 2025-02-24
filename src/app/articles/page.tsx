'use client';
import Banner from '@/components/banner/index'
import Image from 'next/image';
import './articlesModule.css';
import {FaComment} from "react-icons/fa";
const aboutBanner = {
    title: "Articles",
    subtitle: "Articles",
    backgroundImage: "https://www.wsclinic.org/assets/contactimg-BySp04I7.jpg", // Custom image for About page
  };

const articles = [
  {
    image: 'https://www.wsclinic.org/assets/Blog1-CXAobCw_.jpg',
    date: '12 Jul',
    tags: ['Health', 'Patient'],
    title: 'The Importance of Regular Health Check-ups',
    content:
      'Regular health check-ups are essential for early detection of health issues, ensuring timely treatment and proactive management for wellness.',
    author: {
      image: 'https://www.wsclinic.org/assets/Blog3-CAUjdUcE.jpg',
      name: 'Author',
    },
    comments: 9,
  },
  {
    image: '/article2.jpg',
    date: '12 May',
    tags: ['Health', 'Patient'],
    title: 'Understanding the Basics of Vaccination',
    content:
      'Vaccination is crucial for public health, providing immunity against infectious diseases. Understanding its benefits and dispelling myths is essential for informed decisions.',
    author: {
      image: '/author2.jpg',
      name: 'Author',
    },
    comments: 5,
  },
  {
    image: '/article3.jpg',
    date: '23 Apr',
    tags: ['Health', 'Patient'],
    title: 'The Significance of Mental Health Awareness',
    content:
      'Mental health awareness is essential for overall well-being. Recognizing and addressing mental health issues promotes fulfilling lives.',
    author: {
      image: '/author3.jpg',
      name: 'Author',
    },
    comments: 12,
  },
  {
    image: '/article4.jpg',
    date: "07 Apr",
    tags: ["Health", "Patient"],
    title: "Benefits Beyond the Physical",
    content:
      "about physical fitness crucial for mental and emotional well-being. Regular activity reduces stress and boosts mood.",
    author: {
      image: '/author3.jpg',
      name: "Author",
    },
    comments: 2,
  },
];

export default function Articles() {
  return (
    <>
      <Banner {...aboutBanner} />
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-10 section-title">
          <h1 className="font-bold text-lg bottom-line uppercase relative">Our Articles</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mt-5">
            Enhancing Life Through Health Consciousness
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white border rounded-lg overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative">
                <Image
                  src={article.image}
                  alt="Article Image"
                  width={400}
                  height={250}
                  className="w-full h-60 object-cover"
                />
                <div className="post-date rounded-md">
                  {article.date}
                </div>
              </div>
              <div className="p-4">
                <div className="flex space-x-2 text-sm text-gray-500">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="font-medium text-gray-700">
                        {tag}
                        </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2">{article.content}</p>
                <div className="mt-4 flex items-center justify-between border-t pt-3">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={article.author.image}
                      alt="Author"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-700 font-medium">
                      {article.author.name}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm flex item-center justify-center">
                    <FaComment className="mt-1 text-red-900" /> &nbsp; {article.comments} Comments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
