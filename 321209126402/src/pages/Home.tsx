import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import CompanyIntro from '../components/CompanyIntro';
import TeachingMethod from '../components/TeachingMethod';
import CourseMaterials from '../components/CourseMaterials';
import Teachers from '../components/Teachers';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <CompanyIntro />
      <TeachingMethod />
      <CourseMaterials />
      <Teachers />
      <Testimonials />
    </Layout>
  );
};

export default Home;