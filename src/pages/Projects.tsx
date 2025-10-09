import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'KriyaFlow',
    description: 'An AI-powered personal life management tool',
    details: 'Managed tasks, goals, habits, and events using intelligent insights and tracking.',
    github: 'https://github.com/vgrbuilds/KriyaFlow',
    color: 'primary',
  },
  {
    title: 'Spotlite',
    description: 'AI-powered portfolio platform for professionals',
    details: 'Created a platform for professionals to showcase their skills and connect with recruiters.',
    color: 'secondary',
  },
  {
    title: 'QuickBite',
    description: 'Smart pre-ordering app for college canteens',
    details: 'Developed an app to detect a user\'s college, browse menus, and place orders in advance.',
    github: 'https://github.com/vgrbuilds/QuickBite',
    color: 'accent',
  },
];

const Projects = () => {
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
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Innovative solutions leveraging AI/ML and modern web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-card/50 backdrop-blur border-border h-full flex flex-col hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className={`font-heading ${
                      project.color === 'primary' ? 'text-primary' :
                      project.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="font-body">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between space-y-4">
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {project.details}
                    </p>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
