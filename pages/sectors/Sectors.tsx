
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Activity, Moon, Palette, Home as HomeIcon, Zap, Heart, Sparkles } from 'lucide-react';
import SectorCard from '../../components/ui/SectorCard';
import QuoteBlock from '../../components/ui/QuoteBlock';

const Sectors: React.FC = () => {
  const sectors = [
    { 
      title: "Education", 
      icon: <BookOpen />, 
      desc: "Preserving sacred knowledge systems while embracing modern Montessori pedagogy for future leaders.", 
      color: "from-amber-600/30",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
      className: "md:col-span-2 md:row-span-1"
    },
    { 
      title: "Spiritual Life", 
      icon: <Moon />, 
      desc: "Vedic astrology, meditation retreats, and cosmic harmony for the modern seeker.", 
      color: "from-indigo-600/30",
      image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1200",
      className: "md:col-span-1 md:row-span-2"
    },
    { 
      title: "Shelter", 
      icon: <HomeIcon />, 
      desc: "Dignified living through heritage-conscious social housing and restoration of ancestral ghats.", 
      color: "from-amber-900/30",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Innovation", 
      icon: <Zap />, 
      desc: "AI-driven translation of rare palm leaf manuscripts and digital heritage preservation.", 
      color: "from-blue-600/30",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Health", 
      icon: <Activity />, 
      desc: "Holistic wellness combining ancient Ayurveda with modern bio-innovation and medical aid.", 
      color: "from-green-600/30",
      image: "https://images.unsplash.com/photo-1505751172107-5739a00943d5?q=80&w=1200",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Self Empowerment", 
      icon: <Sparkles />, 
      desc: "Vocational training and spiritual leadership programs for marginalized communities.", 
      color: "from-purple-600/30",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto pb-40">
      <div className="max-w-3xl mb-24">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase"
        >
          Spheres of Action
        </motion.span>
        <h1 className="text-5xl md:text-8xl font-serif-vintage italic mb-8">Pillars of <span className="text-amber-600">Action</span></h1>
        <p className="text-xl text-gray-400 font-light italic leading-relaxed max-w-2xl border-l border-amber-600/30 pl-8">
          "The goal of humanity is knowledge. From the nursery of curiosity to the art house of truth, we build the scaffolding of the soul."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {sectors.map((sector, i) => (
          <SectorCard key={i} {...sector} />
        ))}
      </div>

      <div className="space-y-12">
        <QuoteBlock 
          quote="One child, one teacher, one book, one pen can change the world."
          author="Malala Yousafzai"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Malala_Yousafzai_2015.jpg/800px-Malala_Yousafzai_2015.jpg"
          variant="glass"
          imagePosition="left"
        />
        <QuoteBlock 
          quote="Innovation distinguishes between a leader and a follower. I'd rather be optimistic and wrong than pessimistic and right."
          author="Elon Musk"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg"
          sanskrit="ज्ञानं परमं बलम्"
        />
      </div>
    </div>
  );
};

export default Sectors;
