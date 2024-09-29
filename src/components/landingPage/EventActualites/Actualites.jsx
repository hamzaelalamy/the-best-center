import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Special from '../../common/Special/Special';


const EventSection = ({ title, description, imagePath, imageOnRight, quote, date, link }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(link);
  };

  return (
    <div className={`flex flex-col ${imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center w-full bg-white`}>
      <motion.img
        src={imagePath}
        alt={title}
        className="w-full h-auto rounded-lg shadow-lg md:max-w-xl md:mx-8"
        initial={{
          opacity: 0,
          x: imageOnRight ? 200 : -200
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.2
          }
        }}
        viewport={{ once: true }}
      />
      <div className="flex flex-col items-center justify-center w-full p-4 md:max-w-xl md:p-10 md:mr-8 xs:mx-8">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl md:mb-6">{title}</h1>
        <p className="mb-4 text-base text-gray-800 md:text-lg md:mb-6">{description}</p>
        <div className="flex flex-row self-start w-full">
          <div className="bg-[linear-gradient(225deg,#F76680,#57007B)] w-2 h-20"></div>
          <q className="italic font-light text-base md:text-lg leading-normal bg-[linear-gradient(225deg,#F76680,#57007B)] text-transparent bg-clip-text pl-4">{quote}</q>
        </div>
        <p className="mt-2 text-base font-semibold text-gray-800 md:text-lg md:mt-4">{date}</p>
        <button
          className="mt-4 md:mt-6 bg-[linear-gradient(225deg,#683280,#57007B,#f39200)] text-white py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-purple-700"
          onClick={handleNavigate}
        >
          En savoir plus
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen px-4 mx-auto overflow-hidden App max-w-7xl">
      <div className="w-full pl-4 mb-4 md:pl-12">
        <Special text={`ÉVÉNEMENTS`} hoverText={`EVENTS`} />
      </div>
      <EventSection
        title="Tournoi League of Legends inter-écoles"
        description="Participez à notre grand tournoi League of Legends opposant les meilleures équipes de différentes écoles. Venez représenter votre établissement et montrez vos talents de stratège !"
        imagePath="/assets/events/lol-tournament.jpg"
        imageOnRight={true}
        quote="Préparez-vous pour une compétition épique où stratégie, travail d'équipe et réflexes seront mis à l'épreuve !"
        date="Samedi 12 Octobre 2024"
        link="/lol-tournament"
      />
      <EventSection
        title="Concours d'éloquence annuel"
        description="Le concours d'éloquence annuel est de retour ! Préparez vos discours les plus convaincants et impressionnants. Une opportunité unique de développer vos compétences en communication et votre confiance en vous."
        imagePath="https://res.cloudinary.com/dwtsxzrly/image/upload/v1727633355/concours-eloquence_etudiants-universite-evenements-2023-2024-voix-jeunes-defense-agriculture-durable-alimentation_bygfqf.png"
        imageOnRight={false}
        quote="L'art de bien parler est la clé pour ouvrir toutes les portes. Venez vous exprimer et inspirer votre auditoire !"
        date="Vendredi 15 Novembre 2024"
        link="/concours-eloquence"
      />
      <EventSection
        title="Journée des sciences et de l'innovation"
        description="Explorez les merveilles de la science et de la technologie lors de notre journée dédiée à l'innovation. Expositions, ateliers pratiques et conférences passionnantes vous attendent !"
        imagePath="https://res.cloudinary.com/dwtsxzrly/image/upload/v1727633359/jipn_2020_3_cmtcdl.png"
        imageOnRight={true}
        quote="Découvrez, expérimentez et innovez : la science n'a jamais été aussi passionnante et accessible !"
        date="Samedi 7 Décembre 2024"
        link="/journee-sciences"
      />
    </div>
  );
};

export default App;