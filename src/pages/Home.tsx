import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Mail, ArrowRight, Code, Brain, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import workspaceImg from '@/assets/workspace.jpg';
import aiBrainImg from '@/assets/ai-brain.jpg';

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building end-to-end applications with modern web technologies and frameworks',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Developing intelligent solutions using cutting-edge AI/ML technologies',
  },
  {
    icon: Rocket,
    title: 'Innovation Focused',
    description: 'Creating impactful projects that solve real-world problems',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-8xl font-heading font-bold">
                Hi, I'm <span className="text-gradient">Vignesh GR</span>
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-body max-w-3xl mx-auto font-semibold">
                Computer Science Student specializing in AI/ML
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
                Building innovative solutions for real-world applications with a focus on artificial intelligence and machine learning. Currently pursuing my Bachelor's at RV University, Bangalore.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center items-center"
            >
              <Link to="/projects">
                <Button size="lg" className="bg-cosmic hover:opacity-90 text-primary-foreground font-body text-base">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-6 justify-center items-center pt-8"
            >
              <a
                href="https://github.com/vgrbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="mailto:grvignesh.official@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-7 w-7" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Passionate about creating innovative solutions through code
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="bg-card/50 backdrop-blur border-border h-full hover:border-primary/50 transition-all hover:scale-105">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
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
      </section>

      {/* Visual Showcase Section */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
                My Workspace
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Where innovation meets execution. I create cutting-edge applications using modern technologies and best practices.
              </p>
              <Link to="/about">
                <Button className="bg-cosmic hover:opacity-90 text-primary-foreground font-body">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={workspaceImg}
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl border-2 border-primary/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Focus Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <img
                src={aiBrainImg}
                alt="AI and Machine Learning"
                className="rounded-2xl shadow-2xl border-2 border-secondary/20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
                AI & Machine Learning
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Specializing in artificial intelligence and machine learning to develop intelligent solutions that make a difference. From neural networks to practical applications.
              </p>
              <Link to="/skills">
                <Button className="bg-cosmic hover:opacity-90 text-primary-foreground font-body">
                  Explore My Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 bg-card/50 backdrop-blur border border-border rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              I'm always open to discussing new projects, internship opportunities, or collaborations. Let's connect and create something extraordinary together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-cosmic hover:opacity-90 text-primary-foreground font-body text-base">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base">
                  View My Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
