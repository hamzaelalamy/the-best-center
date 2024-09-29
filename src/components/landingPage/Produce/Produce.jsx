import './Produce.css';
import ServiceCard from './ServiceCard';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

/* Importing images from the same directory */


export default function Produce() {
  const projects = [
    {
      title: "Développement Web et Mobile",
      description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "https://res.cloudinary.com/df74f5pou/image/upload/v1723562512/dev_filb9w.jpg",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#C2A7CD"
    },
    {
      title: "Bureau d'étude",
      description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "https://res.cloudinary.com/df74f5pou/image/upload/v1723562530/etude_i7xvef.jpg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#B392C1"
    },
    {
      title: "Support fonctionnel",
      description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "https://res.cloudinary.com/df74f5pou/image/upload/v1723562543/support_hz3qst.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#9466A8"
    },
    {
      title: "Centre d'appel",
      description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      src: "https://res.cloudinary.com/df74f5pou/image/upload/v1723562512/center_eeayay.jpg ",
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#753A8F"
    },
    {
      title: "Communication",
      description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
      src: "https://res.cloudinary.com/df74f5pou/image/upload/v1723562512/communication_jozz94.jpg",
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#5C2076"
    }
  ];
  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <main ref={container} className='produceMain'>
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          const textColor = i === 0 ? 'black' : 'white'; // Set text color based on the index
          return (
            <ServiceCard 
              key={`p_${i}`} 
              i={i} 
              {...project} 
              progress={scrollYProgress} 
              range={[i * .25, 1]} 
              targetScale={targetScale} 
              textColor={textColor} // Pass the text color as a prop
            />
          );
        })
      }
    </main>
  );
}
