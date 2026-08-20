export const experiences = [
  {
    role: 'Software Developer',
    company: 'Glenysys',
    period: 'Aug 2024 - Present',
    description: 'Designed and deployed scalable, high-quality data solutions for clinical trials using Java, Medidata Rave, and HP ALM, improving data integrity and accelerating project delivery.',
    responsibilities: [
      'Architected and deployed a Spring Boot 3 and PostgreSQL warehouse management system on GCP, exposing 20+ REST endpoints across five core domain services with Flyway-managed schema versioning for zero-downtime migrations.',
      'Designed environment-based configuration separating dev and prod profiles, including tuned HikariCP connection pooling (up to 20 concurrent connections in production) and externalized secrets management for secure, repeatable deployments.',
      'Built a SKU-level demand forecasting pipeline with lag, rolling, and calendar features and a walk-forward temporal split, benchmarking a linear regression baseline against a tuned XGBoost model (RandomizedSearchCV, 3-fold TimeSeriesSplit) that cut MAPE by 11.14% (35.21% to 31.29%) on an 8-week held-out window.',
      'Delivered a full-stack application using React and Zustand with real-time data visualization, designing clean APIs and user interfaces that integrate multiple data sources into cohesive workflows.'
    ],
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'GCP', 'XGBoost', 'CI/CD pipeline', 'Microservices', 'React 18', 'MongoDB Atlas', 'Mongoose', 'CORS', "REST API's", 'Render', 'Netlify'],
  },  
  {
      role: 'Data Analyst',
      company: 'Accenture',
      period: 'Oct 2019 - Jul 2022',
      description: 'Designed and deployed scalable, high-quality data solutions for clinical trials using Java, Medidata Rave, and HP ALM, improving data integrity and accelerating project delivery.',
      responsibilities: [
        'Reduced data discrepancies by 15% over 14+months by designing and optimizing data pipelines and validation workflows using Medidata Rave, ensuring robust data quality checks.',
        'Developed and deployed scalable data processing solutions in Java 8, delivering two critical projects ahead of schedule, demonstrating expertise in object-oriented programming and ETL development.',
        'Implemented a micro-service to gather and test data from multiple external sources while ensuring data safety for clinical trial data.',
        'Increased test coverage by developing 280+ test cases using HP ALM test platform, achieving a 90% bug detection and resolution rate by leveraging automated test execution, rigorous validation strategies, and defect-tracking workflows.'
      ],
      skills: ['HP ALM', 'Postman', 'Java', 'Agile', 'Medidata Rave'],
      award: {
        name: 'Extra Mile Award',
        PDF: '/Chirag_Chandrashekar.pdf'
      }
    },
    {
      role: 'Graduate Teaching Assistant',
      company: 'University of Colorado Boulder',
      period: 'Aug 2023 - Dec 2023',
      description: 'Assisted in teaching Fundamentals of Algorithms course, conducted lab sessions, and mentored students.',
      responsibilities: [
        'Conducted weekly lab sessions and office hours for 50+ students',
        'Graded assignments and provided constructive feedback',
        'Assisted in developing course materials and assignments',
        'Mentored students on best coding practices and problem-solving'
      ],
      skills: ['Python', 'Java', 'CSS', 'HTML','React', 'Git', 'Docker', 'Algorithms', 'Teaching', 'Mentoring']
    }
];
