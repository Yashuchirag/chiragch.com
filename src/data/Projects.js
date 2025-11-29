export const Projects = [
    {
      title: 'Netflix Clone — MERN Full-Stack Streaming Platform',
      company: 'Personal Project / Chirag Chandrashekar',
      period: 'July 2025 - Present',
      description: 'A fully responsive Netflix-style streaming application built using the MERN stack with a modern UI and production-ready architecture. This project showcases robust backend design, scalable API structures, and a seamless user experience powered by React, TailwindCSS, and Zustand.',
      responsibilities: [
      'Engineered a full-stack MERN application replicating core streaming platform functionality, featuring secure authentication, category-based browsing, watchlists, and video previews, designed to mimic the user experience of modern OTT platforms.',
      'Developed a responsive, mobile-first UI using React 19, Vite, TailwindCSS, and DaisyUI, implementing smooth animations, optimized layouts, accessibility considerations, and consistent component patterns to deliver a polished, high-performance frontend.',
      'Implemented a scalable backend with Node.js, Express 5, and MongoDB, including structured REST API routes, modular controllers, and robust Mongoose models to support authentication flows, movie retrieval, and persistent watchlist management.',
      'Designed and integrated secure authentication workflows using JWT, Bcrypt, and HTTP-only cookies, ensuring protected routes, automatic revalidation, and reliable session handling while preventing common vulnerabilities.',
      'Built global state and data-fetching logic using Zustand and React Query, enabling client-side caching, optimistic updates, background refetching, and reduced API latency for smoother browsing and near-instant UI response.',
      'Created an interactive media browsing experience with categorized movie lists, dynamic fetching, loading states, toast notifications, and a React Player integration for seamless trailer/preview playback within the UI.',
      'Optimized the full development pipeline, including Vite’s fast HMR, minified production builds, environment-based configuration, and well-structured scripts for running, building, and deploying both frontend and backend services.'
      ],
      skills: ['React 19 + Vite', 'TailwindCSS', 'DaisyUI', 'Zustand', 'Render', 'React Hot Toast / Toastify', 'React Query', 'Node.js + Express', 'MongoDB & Mongoose', 'JWT Authentication', 'Bcrypt for hashing'],
      link: 'https://github.com/Yashuchirag/netflix-clone'
    },
    {
      title: 'Informative AI App',
      company: 'Personal Project / Chirag Chandrashekar',
      period: 'July 2025 - August 2025',
      description: 'Built a modern, production-ready web application using Next.js 14 and React 18 that provides AI-powered information and interactive chat features with a focus on responsive design, accessibility, and developer ergonomics.',
      responsibilities: [
      'Architected and implemented a Next.js 14 + React 18 frontend with concurrent rendering, fast refresh, and an optimized production build pipeline to ensure low-latency AI interactions and smooth UX across devices.',
      'Designed and developed a responsive UI with dark/light themes, accessibility considerations, and a clean modern aesthetic; implemented UI features including file/image uploads, markdown rendering (including tables), and keyboard shortcuts (Enter to submit, Shift+Enter for newline).',
      'Built a model-selection UX with disabled/greyed-out states for unavailable models, clear selection indicators, and client-side enforcement of prompt character limits to improve reliability and guardrails for user input.',
      'Implemented multiple chat history support with controls to start new chats, persist conversations, and render message histories with proper markdown and media handling for an organized user experience.',
      'Integrated backend API routes and state management for streaming AI responses, efficient file handling, and scalable session management while ensuring secure handling of user data and environment secrets.',
      'Added developer-focused improvements such as Fast Refresh, clear project scripts (dev/build/prod), and documentation to streamline local development and deployment workflows.'
      ],
      skills: ['Next.js 14', 'React 18', 'JavaScript', 'Node.js', 'CSS', 'Responsive Design', 'Markdown', 'PWA', 'File Upload', 'Accessibility', 'Vercel/Netlify'],
      link: 'https://github.com/Yashuchirag/InformativeAIApp'
    },
    {
      title: 'Volunteer Management System',
      company: 'University of Colorado Boulder',
      period: 'Jan 2024 - May 2024',
      description: 'Developed a Docker-containerized full-stack application optimizing volunteer management through automated data collection, secure authentication, scalable SQL databases, and real-time analytics.',
      responsibilities: [
        'Built a full-stack web application using React, Flask, and PostgreSQL with user authentication, event registration, and real-time participation tracking. Deployed on Heroku and containerized with Docker for consistent development and deployment environments.',
        'Automated web scraping of volunteer events using Python and BeautifulSoup every four hours, ensuring accurate, up-to-date scheduling and improved operational efficiency.',
        'Designed a SQL-based data analysis pipeline to evaluate volunteer participation and event trends, optimize database operations, and support data-driven strategic planning.'
      ],
      skills: ['React', 'Flask', 'PostgreSQL', 'Heroku', 'Python', 'BeautifulSoup', 'SQL', 'CORS', 'Docker'],
      link: 'https://github.com/Yashuchirag/Volunteer-Management'
    },
    {
      title: 'Team Pressing Project: Premier League Analysis',
      company: 'University of Colorado Boulder',
      period: 'Jan 2023 - April 2023',
      description: 'Performed data exploration and visualization on Premier League teams, identifying performance trends and developing PCA-based predictive models for injury and goal forecasting.',
      responsibilities: [
        'Analyzed soccer team pressing metrics with Python and Pandas, revealing patterns in defensive intensity and ball recovery strategies through advanced statistics.',
        'Created interactive visualizations using Matplotlib, Seaborn, and Plotly, including heatmaps and pressure-zone maps to communicate team and player performance insights.',
        'Developed custom metrics like Pressing Intensity (PPDA) and predictive models using scikit-learn and PCA to assess team effectiveness in match-event data.'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Data Visualization', 'PCA', 'ElasticNet Regressor', 'Linear Regression', 'Matplotlib', 'Seaborn', 'Pandas', 'Scikit-learn'],
      link: 'https://github.com/Yashuchirag/team_pressing_project'
    },
    {
      title: 'Glasso Algorithm Project',
      company: 'University of Colorado Boulder',
      period: 'Jan 2024 - April 2024',
      description: 'Performed data exploration and visualization on Premier League teams, identifying performance trends and developing PCA-based predictive models for injury and goal forecasting.',
      responsibilities: [
        'Developed and implemented machine learning solutions using the Graphical Lasso (GLASSO) algorithm to analyze large Gaussian graphical models in high-dimensional datasets, enhancing the interpretability of complex data relationships.',
        'Estimated sparse precision matrices to improve the accuracy of predictions, anomaly detection, and scenario simulations, while conducting in-depth analysis of marginal and conditional independence within graphs.',
        'Applied these techniques to real-world data, including gene expression datasets, improving predictive modeling and enabling data-driven decision-making in large-scale data science applications.'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Data Visualization', 'PCA', 'GLASSO', 'Linear Regression', 'Matplotlib', 'Seaborn'],
      link: ''
    },
    {
      title: 'Forest Cover-Type Prediction',
      company: 'University of Colorado Boulder',
      period: 'Jan 2023 - April 2023',
      description: 'Performed data exploration and visualization on Premier League teams, identifying performance trends and developing PCA-based predictive models for injury and goal forecasting.',
      responsibilities: [
        'Developed high-accuracy forest cover-type prediction models using logistic regression, neural networks, PCA, and bagging techniques, achieving 96.85% test accuracy by optimizing model performance through feature scaling, outlier removal, and preprocessing of 580,000+ samples.',
        'Performed sensitivity analysis using confusion matrices and correlation heatmaps, evaluating model robustness and identifying key feature dependencies to refine predictive accuracy.',
        'Enhanced model generalization through hyperparameter tuning and advanced feature engineering, leveraging grid search, cross-validation, and dimensionality reduction to improve classification performance and scalability.'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Data Visualization', 'PCA', 'GLASSO', 'Linear Regression', 'Matplotlib', 'Seaborn'],
      link: 'https://github.com/Yashuchirag/CoverType'
    }
];