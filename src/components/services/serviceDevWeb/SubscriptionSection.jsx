import React from 'react';
import "../css/Service.css"; // Assurez-vous que ce fichier CSS existe

const SubscriptionSection = () => {
  return (
    <section className="subscription-section">
      <div className="subscription-container">
        <div className="subscription-content">
          <h3 className="subscription-title">Développement Web Personnalisé</h3>
          <p className="subscription-text">
            Recevez chaque semaine des insights et des stratégies web directement dans votre boîte mail.
          </p>
        </div>
        <div className="subscription-button-container">
          <button className="subscription-button">S’abonner</button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
