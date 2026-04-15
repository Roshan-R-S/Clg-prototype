import { motion } from 'motion/react';
import { History, Users, Building2 } from 'lucide-react';
import { Card, Badge, Section, SectionHeader } from '@/components/ui';

const founders = [
  {
    name: 'Lt. Col. Gurdial Singh Gill',
    role: 'Founder President',
    image: 'https://picsum.photos/seed/gill/200/200',
    description:
      'The Punjab Association owes an irredeemable debt of gratitude to its Founder President, the late Lt.Col. Gurdial Singh Gill who was the first Indian Inspector General of Police. A man who had a well-defined foresight always thinking far ahead; Lt. Col. Gill was a revolutionary. During his four-decade-long steadfast stewardship, he displayed keen insight and a crusading spirit to build up a stupendous service structure.',
  },
  {
    name: 'Shri P.N. Dhawan',
    role: 'Founder Member',
    image: 'https://picsum.photos/seed/dhawan/200/200',
    description:
      'Shri P.N. Dhawan made this his life\'s mission dedicating the best of himself to this cause. He organized a get-together of five Punjab families on January 1st, 1937 and suggested they form an association for social service. Shri P.N. Dhawan served as its General Secretary for over 55 years, duly attaining the status of a legend in his lifetime. He was bestowed with the honor of Padmashri in 1984.',
  },
];

export default function AboutPunjab() {
  return (
    <div className="min-h-screen pb-20">
      <Hero />
      <AboutSection />
      <HeritageSection />
      <FoundersSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-secondary py-24 px-6 text-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Badge variant="primary" size="md">
              Our Foundation
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
          >
            The Punjab <span className="text-primary">Association</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed max-w-xl"
          >
            A legacy of service, resilience, and empowerment that began in 1937 and continues to shape society today.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-none overflow-hidden border-4 border-slate-200 shadow-2xl">
            <img
              src="https://picsum.photos/seed/punjab/800/600"
              alt="Punjab Association Legacy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-none flex items-center justify-center">
            <History size={32} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">About the Association</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              The Punjab Association is proud to uphold the legacy of its founders and continually strives to help the
              community development for the better. By ensuring the social services reach more deserving individuals,
              through education and employment. It is undoubtedly a humbling endeavor to empower society at large.
            </p>
            <p>
              Madras, right from the early days of its Presidency, was known for its reputable educational institutions
              – schools and colleges where several stalwarts came to learn. Gradually and quite inevitably, there
              came a time where space was becoming a constraint to house students. This need was promptly addressed by
              the Punjab Association who came forward to start what would be the first of their many educational
              institutions.
            </p>
            <p>
              The Adarsh Vidyalaya was started in a mansion on Peters Road in Royapettah with a thought-provoking story
              behind its foundation.
            </p>
          </div>
        </div>
        <Card className="space-y-8" padding="lg">
          <h3 className="text-2xl font-bold text-primary italic">"Sahiddon Ki Pukkar"</h3>
          <p className="text-slate-600 leading-relaxed italic">
            Five Punjabi families in the city came together and put on a performance enacting the drama "Sahiddon Ki
            Pukkar"; an episode that recalled the cold-blooded Jallianwalah Bagh Massacre of Amritsar, Punjab in 1919;
            they received proceeds from this show which was then used to purchase the land in an auction for a humble
            Rs. 56,400. The mansion was bought in the year 1953 and Adarsh Vidyalaya was started on 13th July 1954 as a
            small English Medium Nursery School with 35 young children on the rolls.
          </p>
          <div className="pt-6 border-t border-slate-200">
            <p className="font-bold text-slate-900">
              This sincere and whole-hearted foray into education was the keystone of what the new generation would
              thrive on.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function HeritageSection() {
  return (
    <section className="py-32 px-6 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Heritage</h2>
          <p className="text-slate-500">A story of resilience and the spirit of Chennai.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              It was a time that changed the history of India; the year 1947, when people were forced to flee from the
              erstwhile Punjab and Sind provinces (now a part of Pakistan) in Hindustan. Families escaped in hordes,
              carrying what little they could on their backs, arriving in places like Delhi by train, by road, by carts
              and by walk.
            </p>
            <p>
              At this trying time where families were facing displacement, among other massive losses; The Tamil Nadu
              Government came forward to rehabilitate them through the existing Punjab Association in Chennai. The
              Punjab Association at that time which was merely a group of 10 to 15 families, took the aid of the
              Government caring for the refugees like their own, ensuring all their needs were met.
            </p>
          </div>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              In addition to providing accommodation, the people who hade now made this city their home were given
              licenses to export, shops to run their business, and their children were admitted in schools and colleges
              as well. The residents of the city were of immense help to the people too.
            </p>
            <p>
              Through sheer grit, diligence and their business acumen, the Punjabis carved their identities in a new
              city that was now home forever. They excelled as entrepreneurs, professionals and academicians. To honour
              their new lives, two dynamic Punjabi gentlemen Lt. Col. G.S. Gill and Shri P.N. Dhawan decided they must
              reciprocate their community's goodwill to the Tamils who treated them as their own brethren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoundersSection() {
  return (
    <Section background="white">
      <SectionHeader badge="Our Leaders" title="Our Torch Bearers" subtitle="The visionary leaders who built this institution." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {founders.map((founder, idx) => (
          <motion.div key={idx} whileHover={{ y: -10 }}>
            <Card className="space-y-8" padding="lg">
              <div className="flex items-center gap-6">
                <div className={`w-24 h-24 rounded-none overflow-hidden shadow-lg ${idx > 0 ? 'border-2 border-slate-100' : ''}`}>
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{founder.name}</h3>
                  <p className="text-primary font-semibold">{founder.role}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{founder.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}