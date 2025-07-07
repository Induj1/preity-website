
import React from 'react';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import ContactHero from '../components/contact/ContactHero';
import QuickActionButtons from '../components/contact/QuickActionButtons';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import CalendarSection from '../components/contact/CalendarSection';
import WhatsAppButton from '../components/contact/WhatsAppButton';

const Contact = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <CustomCursor />
      <Navigation />
      
      <ContactHero />
      <QuickActionButtons />

      {/* Main Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <CalendarSection />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
