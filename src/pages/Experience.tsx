import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Music } from 'lucide-react';

const accomplishments = [
  {
    icon: Trophy,
    title: 'Google Hackathons',
    description: 'Participated in 2 Google-hosted Hackathons, successfully leading a team to develop an innovative solution under tight deadlines.',
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Operations Head - Entrepreneurship Club',
    description: 'Served as Operations Head at the Entrepreneurship Club, RVU, coordinating events, managing operations, and driving student engagement in entrepreneurial initiatives.',
    color: 'secondary',
  },
  {
    icon: Music,
    title: 'Concert Performances',
    description: 'Performed in various concerts, showcasing creativity, discipline, and the ability to collaborate in diverse teams.',
    color: 'accent',
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
              Experience & Accomplishments
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Leadership, innovation, and creative excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accomplishments.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="bg-card/50 backdrop-blur border-border h-full hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          item.color === 'primary' ? 'bg-primary/10' :
                          item.color === 'secondary' ? 'bg-secondary/10' :
                          'bg-accent/10'
                        }`}>
                          <Icon className={`h-6 w-6 ${
                            item.color === 'primary' ? 'text-primary' :
                            item.color === 'secondary' ? 'text-secondary' :
                            'text-accent'
                          }`} />
                        </div>
                        <span className="font-heading text-lg">{item.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
