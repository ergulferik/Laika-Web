import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "../styles/About.css";

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
              Laika Coffee & Culture, sanat, müzik ve topluluk etkinliklerine ev
              sahipliği yapan benzersiz bir mekandır. İzmir’in Karşıyaka
              ilçesinde bulunan Laika, sadece kahve sunmakla kalmaz, aynı
              zamanda kültürel etkinlikler ve atölyelerle misafirlerine
              unutulmaz deneyimler yaşatır.
            </p>
            <p>
              Etkinliklerimiz arasında masa oyunları, bilgi yarışmaları, film
              gösterimleri ve canlı müzik performansları yer almaktadır. Samimi
              atmosferimiz ve zengin kahve menümüzle sizleri ağırlamaktan
              mutluluk duyarız.
            </p>
          </div>
          <div className="about-image">
            <img src="assets/laikaCoffee.jpeg" alt="Laika Coffee & Culture" />
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
                <p>Tuna Mahallesi, İsmail Özkunt Sokak No: 25A</p>
                <p>Karşıyaka, İzmir</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Telefon</h3>
                <p>(0232) 456 78 90</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>E-posta</h3>
                <p>info@laikacoffee.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaClock className="contact-icon" />
              <div>
                <h3>Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 09:00 - 23:00</p>
                <p>Cumartesi - Pazar: 10:00 - 23:00</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6248.57675677846!2d27.11817147596226!3d38.45790317182118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9da50c85957%3A0xb8e704922dffa807!2sLaika%20Coffee%20%26%20Culture!5e0!3m2!1str!2sus!4v1743282871193!5m2!1str!2sus"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
