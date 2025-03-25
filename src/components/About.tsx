import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <motion.section 
        id="hakkimizda" 
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Hakkımızda</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Laika Kafe, 2023 yılında masa oyunu tutkunları için özel olarak tasarlanmış
              bir mekan olarak açıldı. Amacımız, insanları bir araya getirip keyifli
              vakit geçirmelerini sağlamak ve masa oyunu kültürünü yaygınlaştırmaktır.
            </p>
            <p>
              Kafemizde 100'den fazla masa oyunu bulunmaktadır. Deneyimli personelimiz,
              oyunları öğrenmenize ve oynamanıza yardımcı olmaktan mutluluk duyacaktır.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="assets/laikaCoffe.jpeg" 
              alt="Laika Kafe Masa Oyunları" 
            />
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="iletisim" 
        className="contact-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="section-title">İletişim</h2>
        <div className="contact-content">
          <div className="contact-info card">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Adres</h3>
                <p>Örnek Mahallesi, Oyun Sokak No:123</p>
                <p>Kadıköy, İstanbul</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Telefon</h3>
                <p>(0216) 123 45 67</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>E-posta</h3>
                <p>info@laikakafe.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <div>
                <h3>Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 10:00 - 23:00</p>
                <p>Cumartesi - Pazar: 11:00 - 00:00</p>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.650789456456!2d29.0253!3d40.9909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzMyLjQiTiAyOcKwMDEnMzEuMSJF!5e0!3m2!1str!2str!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 