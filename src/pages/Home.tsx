import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
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
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold">
              Hi, I'm <span className="text-gradient">Vignesh GR</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto">
              Computer Science Student specializing in AI/ML
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-body max-w-xl mx-auto">
              Building innovative solutions for real-world applications with a focus on artificial intelligence and machine learning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <Button size="lg" className="bg-cosmic hover:opacity-90 text-primary-foreground font-body">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:grvignesh.official@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-12"
          >
            <p className="text-sm text-muted-foreground font-body">
              Based in Bangalore, India • Expected Graduation 2027
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
