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
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-tight">
                Hi, I'm <span className="text-gradient animate-pulse-slow">Vignesh GR</span>
              </h1>
              <p className="text-3xl md:text-4xl text-primary font-body max-w-4xl mx-auto font-semibold">
                Computer Science Student specializing in AI/ML
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
                Building innovative solutions for real-world applications with a focus on artificial intelligence and machine learning. Currently pursuing my Bachelor's at RV University, Bangalore.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-6 justify-center items-center"
            >
              <Link to="/projects">
                <Button size="lg" className="bg-cosmic hover:opacity-90 text-primary-foreground font-body text-lg px-10 py-7 glow-primary transition-smooth hover:scale-105">
                  View My Work
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-7 transition-smooth hover:scale-105">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-8 justify-center items-center pt-12"
            >
              <a
                href="https://github.com/vgrbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              >
                <Github className="h-8 w-8" />
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
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-6">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through code
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
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
                  <Card className="bg-card/50 backdrop-blur border-primary/20 h-full hover:border-primary shadow-elevated transition-smooth hover:scale-105">
                    <CardContent className="p-10 text-center space-y-6">
                      <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center glow-primary">
                        <Icon className="h-10 w-10 text-primary animate-pulse-slow" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-body leading-relaxed text-lg">
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
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-gradient leading-tight">
                My Workspace
              </h2>
              <p className="text-xl text-muted-foreground font-body leading-relaxed">
                Where innovation meets execution. I create cutting-edge applications using modern technologies and best practices.
              </p>
              <Link to="/about">
                <Button className="bg-cosmic hover:opacity-90 text-primary-foreground font-body text-lg px-8 py-6 glow-primary transition-smooth hover:scale-105">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
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
                className="rounded-2xl shadow-elevated border-2 border-primary/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Focus Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
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
                className="rounded-2xl shadow-elevated border-2 border-secondary/20 glow-secondary"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 order-1 md:order-2"
            >
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-gradient leading-tight">
                AI & Machine Learning
              </h2>
              <p className="text-xl text-muted-foreground font-body leading-relaxed">
                Specializing in artificial intelligence and machine learning to develop intelligent solutions that make a difference. From neural networks to practical applications.
              </p>
              <Link to="/skills">
                <Button className="bg-cosmic hover:opacity-90 text-primary-foreground font-body text-lg px-8 py-6 glow-secondary transition-smooth hover:scale-105">
                  Explore My Skills
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-12 bg-card/50 backdrop-blur border border-primary/20 rounded-3xl p-16 shadow-elevated"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-gradient leading-tight">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, internship opportunities, or collaborations. Let's connect and create something extraordinary together!
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-cosmic hover:opacity-90 text-primary-foreground font-body text-lg px-10 py-7 glow-primary transition-smooth hover:scale-105">
                  <Mail className="mr-2 h-6 w-6" />
                  Contact Me
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-7 transition-smooth hover:scale-105">
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
