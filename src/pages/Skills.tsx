import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Globe, Brain, GitBranch, Layers, Terminal, Cpu } from 'lucide-react';
import skillsImg from '@/assets/skills-programming.jpg';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    color: 'primary',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'JavaScript/TypeScript', level: 80 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    color: 'secondary',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    color: 'accent',
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Neural Networks', level: 75 },
    ],
  },
  {
    icon: Database,
    title: 'Database Management',
    color: 'primary',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    icon: GitBranch,
    title: 'Version Control & Tools',
    color: 'secondary',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 80 },
    ],
  },
  {
    icon: Layers,
    title: 'Frameworks & Libraries',
    color: 'accent',
    skills: [
      { name: 'Express.js', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Next.js', level: 70 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
];

const softSkills = [
  { name: 'Problem Solving', icon: Cpu },
  { name: 'Critical Thinking', icon: Brain },
  { name: 'Team Collaboration', icon: GitBranch },
  { name: 'Communication', icon: Globe },
  { name: 'Project Management', icon: Layers },
  { name: 'Leadership', icon: Terminal },
];

const Skills = () => {
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
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical abilities and the tools I use to bring ideas to life
            </p>
          </div>

          {/* Visual Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-64 md:h-96 rounded-3xl overflow-hidden border-2 border-primary/20"
          >
            <img
              src={skillsImg}
              alt="Programming skills"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-8">
              <p className="text-2xl md:text-3xl font-heading font-bold text-gradient">
                Constantly Learning & Growing
              </p>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-card/50 backdrop-blur border-border h-full hover:border-primary/50 transition-all">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            category.color === 'primary' ? 'bg-primary/10' :
                            category.color === 'secondary' ? 'bg-secondary/10' :
                            'bg-accent/10'
                          }`}>
                            <Icon className={`h-6 w-6 ${
                              category.color === 'primary' ? 'text-primary' :
                              category.color === 'secondary' ? 'text-secondary' :
                              'text-accent'
                            }`} />
                          </div>
                          <span className="font-heading text-lg">{category.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {category.skills.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-body text-foreground">{skill.name}</span>
                              <span className="text-xs font-body text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full rounded-full ${
                                  category.color === 'primary' ? 'bg-primary' :
                                  category.color === 'secondary' ? 'bg-secondary' :
                                  'bg-accent'
                                }`}
                              />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-secondary">
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  >
                    <Card className="bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all hover:scale-105 cursor-pointer">
                      <CardContent className="p-6 text-center space-y-3">
                        <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-xl flex items-center justify-center">
                          <Icon className="h-6 w-6 text-secondary" />
                        </div>
                        <p className="text-sm font-body font-medium text-foreground leading-tight">
                          {skill.name}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Learning Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur border border-border rounded-3xl p-12 text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
              Continuous Learner
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              Technology evolves rapidly, and so do I. I'm committed to staying up-to-date with the latest technologies, frameworks, and best practices in software development and AI/ML. Every project is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
