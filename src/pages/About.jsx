import React from 'react';
import { Users, Target, Award, ArrowRight, Star, Quote } from 'lucide-react';
import headerImage from './images/mealHeader.webp';
import person1 from './images/person1.webp';
import person2 from './images/person2.webp';
import person3 from './images/person3.webp';
import classes from './styles/about.module.css';

const About = () => {
  const features = [
    {
      icon: <Users size={40} />,
      title: 'Community Driven',
      description:
        'Join thousands of food enthusiasts sharing their favorite recipes and cooking experiences. Our community is passionate about bringing people together through food.',
    },
    {
      icon: <Target size={40} />,
      title: 'Curated Content',
      description:
        'Every recipe is carefully selected and tested to ensure quality. We focus on authentic flavors and easy-to-follow instructions that anyone can master.',
    },
    {
      icon: <Award size={40} />,
      title: 'Quality First',
      description:
        'We pride ourselves on providing high-quality content with detailed instructions, nutritional information, and beautiful food photography.',
    },
  ];

  const testimonials = [
    {
      image: person1,
      name: 'Sarah Johnson',
      role: 'Home Chef',
      rating: 5,
      text: 'Meal Shop has completely transformed my cooking routine. The recipes are easy to follow and always turn out amazing!',
    },
    {
      image: person2,
      name: 'Michael Chen',
      role: 'Food Blogger',
      rating: 5,
      text: 'As a food blogger, I appreciate the quality and variety. The search functionality makes it so easy to find exactly what I need.',
    },
    {
      image: person3,
      name: 'Emily Rodriguez',
      role: 'Busy Mom',
      rating: 5,
      text: 'Quick, healthy meals for my family are just a search away. This platform has been a lifesaver for weeknight dinners!',
    },
  ];

  return (
    <div className={classes.aboutContainer}>
      {/* Hero Section */}
      <section className={classes.heroSection}>
        <div className={classes.heroImageWrapper}>
          <img src={headerImage} alt="Delicious meals" className={classes.heroImage} />
          <div className={classes.heroOverlay}></div>
        </div>
        <div className={classes.heroContent}>
          <h1 className={classes.heroTitle}>Welcome to Meal Shop</h1>
          <p className={classes.heroSubtitle}>
            Your ultimate destination for discovering and sharing delicious recipes from around the world
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={classes.featuresSection}>
        <div className={classes.sectionHeader}>
          <h2 className={classes.sectionTitle}>Why Choose Meal Shop</h2>
          <p className={classes.sectionSubtitle}>
            We're committed to making cooking accessible, enjoyable, and delicious for everyone
          </p>
        </div>

        <div className={classes.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={classes.featureCard}>
              <div className={classes.featureIcon}>{feature.icon}</div>
              <h3 className={classes.featureTitle}>{feature.title}</h3>
              <p className={classes.featureDescription}>{feature.description}</p>
              <button className={classes.featureButton}>
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className={classes.missionSection}>
        <div className={classes.missionContent}>
          <h2 className={classes.missionTitle}>Our Mission</h2>
          <p className={classes.missionText}>
            At Meal Shop, we believe that great food brings people together. Our mission is to inspire home cooks of all
            skill levels to explore new flavors, try new cuisines, and create memorable meals for their loved ones.
          </p>
          <p className={classes.missionText}>
            Whether you're a beginner looking for simple recipes or an experienced chef seeking culinary inspiration,
            we're here to support your cooking journey every step of the way.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={classes.testimonialsSection}>
        <div className={classes.sectionHeader}>
          <h2 className={classes.sectionTitle}>Happy Clients</h2>
          <p className={classes.sectionSubtitle}>
            Hear what our community members have to say about their experience with Meal Shop
          </p>
        </div>

        <div className={classes.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={classes.testimonialCard}>
              <Quote className={classes.quoteIcon} size={32} />
              <div className={classes.testimonialRating}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#ffd700" color="#ffd700" />
                ))}
              </div>
              <p className={classes.testimonialText}>{testimonial.text}</p>
              <div className={classes.testimonialAuthor}>
                <img src={testimonial.image} alt={testimonial.name} className={classes.testimonialImage} />
                <div className={classes.testimonialInfo}>
                  <h4 className={classes.testimonialName}>{testimonial.name}</h4>
                  <p className={classes.testimonialRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={classes.ctaSection}>
        <h2 className={classes.ctaTitle}>Ready to Start Cooking?</h2>
        <p className={classes.ctaText}>Explore thousands of recipes and join our cooking community today</p>
        <button className={classes.ctaButton}>
          Explore Recipes <ArrowRight size={20} />
        </button>
      </section>
    </div>
  );
};

export default About;
