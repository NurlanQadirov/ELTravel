// src/pages/HomePage.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import TourCategories from '../sections/TourCategories';
import TeamSection from '../sections/TeamSection';
import GallerySection from '../sections/GallerySection';

const HomePage = () => (
  <>
    <HeroSlider />
    <AnimatedSection animationType="slide-right"><AboutSection /></AnimatedSection>
    <AnimatedSection animationType="fade-up"><ServicesSection /></AnimatedSection>
    <AnimatedSection animationType="zoom-in"><TourCategories /></AnimatedSection>
    <AnimatedSection animationType="fade-up"><TeamSection /></AnimatedSection>
    <AnimatedSection animationType="fade-in"><GallerySection /></AnimatedSection>
  </>
);

export default HomePage;
