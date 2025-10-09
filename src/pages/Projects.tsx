import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Sparkles, Zap, TrendingUp } from 'lucide-react';
import kriyaflowImg from '@/assets/project-kriyaflow.jpg';
import spotliteImg from '@/assets/project-spotlite.jpg';
import quickbiteImg from '@/assets/project-quickbite.jpg';

const projects = [
  {
    title: 'KriyaFlow',
    tagline: 'AI-Powered Life Management',
    description: 'An intelligent personal life management tool that revolutionizes how you organize your daily activities.',
    detailedDescription: 'KriyaFlow uses advanced AI algorithms to help you manage tasks, goals, habits, and events with intelligent insights and tracking. The platform analyzes your productivity patterns and provides personalized recommendations to optimize your time management.',
    features: [
      'Smart task prioritization using AI',
      'Habit tracking with streak counters',
      'Goal setting with milestone tracking',
      'Calendar integration for events',
      'Productivity analytics and insights',
    ],
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'FastAPI'],
    github: 'https://github.com/vgrbuilds/KriyaFlow',
    color: 'primary',
    icon: Sparkles,
    image: kriyaflowImg,
  },
  {
    title: 'Spotlite',
    tagline: 'AI-Powered Portfolio Platform',
    description: 'A next-generation portfolio platform designed for professionals to shine in their careers.',
    detailedDescription: 'Spotlite empowers professionals to create stunning portfolios and connect with recruiters using AI-driven profile optimization. The platform analyzes industry trends and suggests improvements to make profiles stand out.',
    features: [
      'AI-powered profile optimization',
      'Smart recruiter matching',
      'Skill assessment and recommendations',
      'Portfolio templates and customization',
      'Real-time analytics on profile views',
    ],
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'OpenAI API', 'Tailwind CSS'],
    color: 'secondary',
    icon: TrendingUp,
    image: spotliteImg,
  },
  {
    title: 'QuickBite',
    tagline: 'Smart College Canteen App',
    description: 'Revolutionary pre-ordering system that eliminates long queues in college canteens.',
    detailedDescription: 'QuickBite automatically detects your college location, displays available canteen menus, and allows you to place orders in advance. The app integrates with payment systems and provides real-time order tracking.',
    features: [
      'Automatic college detection using GPS',
      'Real-time menu browsing',
      'Advanced order placement',
      'Multiple payment options',
      'Order status tracking',
      'Rating and review system',
    ],
    technologies: ['React Native', 'Node.js', 'Express', 'MySQL', 'Stripe API'],
    github: 'https://github.com/vgrbuilds/QuickBite',
    color: 'accent',
    icon: Zap,
    image: quickbiteImg,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gradient">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              Innovative solutions leveraging AI/ML and modern web technologies to solve real-world problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-24">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <Card className="bg-card/50 backdrop-blur border-border overflow-hidden hover:border-primary/50 transition-all">
                    <div className={`grid lg:grid-cols-2 gap-8 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                      {/* Image */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className={`relative h-80 lg:h-full ${isEven ? '' : 'lg:col-start-2'}`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      </motion.div>

                      {/* Content */}
                      <div className={`p-8 lg:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`p-3 rounded-xl ${
                              project.color === 'primary' ? 'bg-primary/10' :
                              project.color === 'secondary' ? 'bg-secondary/10' :
                              'bg-accent/10'
                            }`}>
                              <Icon className={`h-7 w-7 ${
                                project.color === 'primary' ? 'text-primary' :
                                project.color === 'secondary' ? 'text-secondary' :
                                'text-accent'
                              }`} />
                            </div>
                            <div>
                              <CardTitle className="text-3xl font-heading font-bold text-foreground">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="text-base font-body mt-1">
                                {project.tagline}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="p-0 space-y-6">
                          <p className="text-lg text-muted-foreground font-body leading-relaxed">
                            {project.detailedDescription}
                          </p>

                          {/* Features */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                                  <span className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                                    project.color === 'primary' ? 'bg-primary' :
                                    project.color === 'secondary' ? 'bg-secondary' :
                                    'bg-accent'
                                  }`} />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`px-3 py-1 rounded-full text-sm font-body border ${
                                    project.color === 'primary' 
                                      ? 'bg-primary/10 text-primary border-primary/20' 
                                      : project.color === 'secondary'
                                      ? 'bg-secondary/10 text-secondary border-secondary/20'
                                      : 'bg-accent/10 text-accent border-accent/20'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3 pt-4">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                              >
                                <Button
                                  variant="outline"
                                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body"
                                >
                                  <Github className="mr-2 h-4 w-4" />
                                  View Code
                                </Button>
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 bg-card/50 backdrop-blur border border-border rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
              More Projects Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              I'm constantly working on new and exciting projects. Stay tuned for more innovative solutions!
            </p>
            <a href="https://github.com/vgrbuilds" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cosmic hover:opacity-90 text-primary-foreground font-body">
                <Github className="mr-2 h-5 w-5" />
                View All on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
