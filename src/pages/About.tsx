import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Code, Brain, Users } from 'lucide-react';

const skills = {
  technical: ['Python Programming', 'C++ Programming', 'Software Development', 'Web Development', 'Database Management', 'API Integration'],
  soft: ['Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Communication'],
};

const About = () => {
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
              About Me
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              A passionate developer with a keen interest in AI/ML and creating impactful solutions
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Brain className="h-6 w-6" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-muted-foreground leading-relaxed">
                Computer Science student pursuing internship opportunities to leverage technical skills and acquire practical industry experience. Demonstrated interest in Artificial Intelligence and Machine Learning, focused on developing innovative solutions for real-world applications. Proven ability to learn quickly, adapt to challenges, and collaborate effectively within teams to drive impactful projects.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <GraduationCap className="h-6 w-6" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Bachelor of Computer Applications: Computer Science
                </h3>
                <p className="text-primary font-body">RV University</p>
                <p className="text-muted-foreground font-body">Bangalore, India</p>
                <p className="text-muted-foreground font-body">Expected Graduation: 2027</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code className="h-6 w-6" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Users className="h-6 w-6" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-body border border-secondary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
