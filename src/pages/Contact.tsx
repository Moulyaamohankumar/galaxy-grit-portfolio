import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'grvignesh.official@gmail.com',
    link: 'mailto:grvignesh.official@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 911 303 4776',
    link: 'tel:+919113034776',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/vgrbuilds',
    link: 'https://github.com/vgrbuilds',
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 lg:px-24 pb-32 flex items-center justify-center">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-gradient">
              Get In Touch
            </h1>
            <p className="text-2xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, opportunities, or collaborations
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="bg-card/50 backdrop-blur border-primary/20 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-center text-3xl font-heading text-primary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-12">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-6 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth hover:scale-105"
                    >
                      <div className="p-4 rounded-lg bg-primary/10 glow-primary">
                        <Icon className="h-8 w-8 text-primary animate-pulse-slow" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-lg text-muted-foreground font-body">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-foreground font-body text-xl hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-body text-xl">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground font-body mb-8 text-xl">
              Feel free to reach out for internships, collaborations, or just to connect!
            </p>
            <a href="mailto:grvignesh.official@gmail.com">
              <Button size="lg" className="bg-cosmic hover:opacity-90 text-primary-foreground font-body text-lg px-10 py-7 glow-primary transition-smooth hover:scale-105">
                <Mail className="mr-2 h-6 w-6" />
                Send an Email
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
