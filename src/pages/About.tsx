import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Brain, Target, Lightbulb, Heart, Rocket } from 'lucide-react';
import universityImg from '@/assets/university.jpg';
import aiBrainImg from '@/assets/ai-brain.jpg';

const journey = [
  {
    icon: Lightbulb,
    title: 'The Beginning',
    description: 'My journey in tech started with curiosity about how things work. From dismantling gadgets to writing my first "Hello World" program, I was hooked.',
  },
  {
    icon: Target,
    title: 'Finding My Path',
    description: 'Discovered my passion for AI and Machine Learning during my first year. The potential to create intelligent systems that solve real problems fascinated me.',
  },
  {
    icon: Rocket,
    title: 'Building Solutions',
    description: 'Started developing projects that combine my interests in AI, web development, and user experience to create impactful solutions.',
  },
  {
    icon: Heart,
    title: 'Continuous Growth',
    description: 'Every project, hackathon, and collaboration teaches me something new. I believe in learning by doing and sharing knowledge with others.',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'Always looking for creative solutions and new ways to solve problems',
  },
  {
    title: 'Quality',
    description: 'Committed to writing clean, maintainable code and delivering excellence',
  },
  {
    title: 'Collaboration',
    description: 'Believe in the power of teamwork and open communication',
  },
  {
    title: 'Learning',
    description: 'Continuous improvement and staying updated with latest technologies',
  },
];

const About = () => {
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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              A passionate developer with a keen interest in AI/ML and creating impactful solutions
            </p>
          </div>

          {/* Introduction with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary text-2xl">
                    <Brain className="h-7 w-7" />
                    Who I Am
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-muted-foreground leading-relaxed text-lg">
                  <p>
                    I'm a Computer Science student at RV University, Bangalore, with a deep passion for Artificial Intelligence and Machine Learning. My journey in tech is driven by curiosity and the desire to create solutions that make a real difference.
                  </p>
                  <p>
                    What excites me most about programming is the ability to turn ideas into reality. Whether it's building an AI-powered life management tool or creating a smart pre-ordering system for college canteens, I love solving problems that impact people's daily lives.
                  </p>
                  <p>
                    Beyond coding, I believe in the power of collaboration and continuous learning. I've participated in Google hackathons, led teams, and constantly push myself to explore new technologies and approaches.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative h-96 lg:h-full min-h-[500px]"
            >
              <img
                src={aiBrainImg}
                alt="AI and Technology"
                className="w-full h-full object-cover rounded-3xl border-2 border-primary/20 shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="bg-card/50 backdrop-blur border-border overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-full">
                  <img
                    src={universityImg}
                    alt="RV University"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="flex items-center gap-3 text-secondary text-3xl">
                      <GraduationCap className="h-8 w-8" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <h3 className="text-2xl font-heading font-semibold text-foreground">
                      Bachelor of Computer Applications
                    </h3>
                    <p className="text-xl text-primary font-body font-semibold">
                      Computer Science
                    </p>
                    <p className="text-lg text-muted-foreground font-body">
                      RV University, Bangalore, India
                    </p>
                    <p className="text-base text-muted-foreground font-body">
                      Expected Graduation: 2027
                    </p>
                    <p className="text-base text-muted-foreground font-body leading-relaxed pt-4">
                      Pursuing a comprehensive education in computer science with a focus on artificial intelligence, machine learning, and software development. Active participant in hackathons, coding competitions, and university tech clubs.
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Journey Section */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
                My Journey
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                From curiosity to creation, here's how my passion for technology evolved
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-card/50 backdrop-blur border-border h-full hover:border-accent/50 transition-all">
                      <CardContent className="p-8 space-y-4">
                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                          <Icon className="h-7 w-7 text-accent" />
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-body leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
                Core Values
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Principles that guide my work and approach to problem-solving
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-card/50 backdrop-blur border-border h-full hover:border-primary/50 transition-all hover:scale-105">
                    <CardContent className="p-6 text-center space-y-3">
                      <h3 className="text-xl font-heading font-bold text-primary">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur border border-border rounded-3xl p-12 text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology and innovation. Feel free to reach out!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
