
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
      desc: "संस्कारः शिक्षायाः मूलम् Education is not information. It is the shaping of awareness", 
      color: "from-amber-600/30",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
      className: "md:col-span-2 md:row-span-1"
    },
    { 
      title: "Spiritual Life", 
      icon: <Moon />, 
      desc: "तारा न भाग्यं निर्णेतुं। ते चिंतनं आमंत्रयन्ति। Stars do not decide fate.They invite reflection.", 
      color: "from-indigo-600/30",
      image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1200",
      className: "md:col-span-1 md:row-span-2"
    },
    { 
      title: "Shelter", 
      icon: <HomeIcon />, 
      desc: "निवासः केवलं भित्तिः न भवति A shelter is not walls.It is dignity made visible.", 
      color: "from-amber-900/30",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Innovation", 
      icon: <Zap />, 
      desc: "Innovation is tradition that learned to adapt.", 
      color: "from-blue-600/30",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Health", 
      icon: <Activity />, 
      desc: "Health is harmony between body, mind, and environment.", 
      color: "from-green-600/30",
      image: "/assets/sector_health.png",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Self Empowerment", 
      icon: <Sparkles />, 
      desc: "We do not uplift hands.We strengthen spines", 
      color: "from-purple-600/30",
      image: "/assets/selfEmpowerment.jpeg",
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
          quote="Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough."
          author="From the Vikshu Lineage"
          variant="paper"
          className="text-amber-600"
        />
      </div>
    </div>
  );
};

export default Sectors;
