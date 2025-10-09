import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Music, Award, Target, Briefcase } from 'lucide-react';
import hackathonImg from '@/assets/hackathon.jpg';

const accomplishments = [
  {
    icon: Trophy,
    title: 'Google Hackathons',
    period: '2023 - 2024',
    description: 'Participated in 2 Google-hosted Hackathons, successfully leading a team to develop an innovative solution under tight deadlines.',
    details: [
      'Led a team of 4 developers in building a functional prototype',
      'Implemented AI-based features for real-time problem solving',
      'Presented solution to panel of industry experts',
      'Enhanced leadership and time management skills',
    ],
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Operations Head - Entrepreneurship Club',
    organization: 'RV University',
    period: '2023 - Present',
    description: 'Served as Operations Head at the Entrepreneurship Club, RVU, coordinating events, managing operations, and driving student engagement in entrepreneurial initiatives.',
    details: [
      'Organized 15+ entrepreneurship events and workshops',
      'Managed team of 20+ club members',
      'Coordinated with industry mentors and guest speakers',
      'Increased club membership by 40% through strategic initiatives',
      'Led successful fundraising campaigns for club activities',
    ],
    color: 'secondary',
  },
  {
    icon: Music,
    title: 'Concert Performances',
    period: '2022 - Present',
    description: 'Performed in various concerts, showcasing creativity, discipline, and the ability to collaborate in diverse teams.',
    details: [
      'Participated in 10+ live performances',
      'Collaborated with musicians from different backgrounds',
      'Developed stage presence and public speaking confidence',
      'Balanced creative pursuits with academic excellence',
    ],
    color: 'accent',
  },
];

const achievements = [
  { icon: Award, text: 'Dean\'s List - Academic Excellence' },
  { icon: Target, text: 'Best Project Award - University Tech Fest' },
  { icon: Briefcase, text: 'Completed 3 Major Projects' },
  { icon: Trophy, text: 'Hackathon Finalist' },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-24"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gradient">
              Experience & Accomplishments
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              Leadership, innovation, and creative excellence through diverse experiences
            </p>
          </div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-96 rounded-3xl overflow-hidden border-2 border-primary/20"
          >
            <img
              src={hackathonImg}
              alt="Hackathon experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-12">
              <div className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                  Building. Learning. Growing.
                </p>
                <p className="text-lg text-muted-foreground font-body">
                  Every experience shapes who I am as a developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Accomplishments */}
          <div className="space-y-16">
            {accomplishments.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7 }}
                >
                  <Card className="bg-card/50 backdrop-blur border-border overflow-hidden hover:border-primary/50 transition-all">
                    <div className="p-8 lg:p-12 space-y-8">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`p-4 rounded-2xl flex-shrink-0 ${
                            item.color === 'primary' ? 'bg-primary/10' :
                            item.color === 'secondary' ? 'bg-secondary/10' :
                            'bg-accent/10'
                          }`}>
                            <Icon className={`h-8 w-8 ${
                              item.color === 'primary' ? 'text-primary' :
                              item.color === 'secondary' ? 'text-secondary' :
                              'text-accent'
                            }`} />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                              {item.title}
                            </h3>
                            {item.organization && (
                              <p className="text-lg font-body text-primary font-semibold">
                                {item.organization}
                              </p>
                            )}
                            <p className="text-sm font-body text-muted-foreground">
                              {item.period}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-muted-foreground font-body leading-relaxed">
                        {item.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider">
                          Key Highlights
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {item.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50"
                            >
                              <span className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${
                                item.color === 'primary' ? 'bg-primary' :
                                item.color === 'secondary' ? 'bg-secondary' :
                                'bg-accent'
                              }`} />
                              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Achievements */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
                Notable Achievements
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Recognition and milestones along my journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-card/50 backdrop-blur border-border h-full hover:border-primary/50 transition-all hover:scale-105">
                      <CardContent className="p-8 text-center space-y-4">
                        <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <p className="text-base font-body font-medium text-foreground leading-snug">
                          {achievement.text}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Skills Gained Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur border border-border rounded-3xl p-12"
          >
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                  Skills Developed Through Experience
                </h2>
                <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
                  These experiences have shaped me into a well-rounded developer and leader
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                <Card className="bg-muted/30 border-border">
                  <CardHeader>
                    <CardTitle className="text-primary font-heading text-xl">
                      Technical Leadership
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="font-body text-muted-foreground">
                    Leading development teams, making architectural decisions, and mentoring peers in technical problem-solving
                  </CardContent>
                </Card>

                <Card className="bg-muted/30 border-border">
                  <CardHeader>
                    <CardTitle className="text-secondary font-heading text-xl">
                      Project Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="font-body text-muted-foreground">
                    Planning, executing, and delivering projects on time while managing resources and coordinating teams
                  </CardContent>
                </Card>

                <Card className="bg-muted/30 border-border">
                  <CardHeader>
                    <CardTitle className="text-accent font-heading text-xl">
                      Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="font-body text-muted-foreground">
                    Presenting technical concepts to diverse audiences and collaborating effectively across teams
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Looking Forward */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 bg-card/50 backdrop-blur border border-border rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
              What's Next?
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              I'm actively seeking internship opportunities where I can apply my skills, learn from experienced professionals, and contribute to meaningful projects. Let's create something amazing together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
