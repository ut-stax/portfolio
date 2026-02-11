-- Seed data for Utkarsh Tripathi Portfolio
-- Generated: 2025-02-04

-- ============================================
-- PROFILE
-- ============================================
INSERT INTO profiles (
    id,
    user_id,
    display_name,
    bio,
    location,
    social_links
) VALUES (
    '550e8400-e29b-41d4-a716-446655440000',
    '550e8400-e29b-41d4-a716-446655440001',
    'Utkarsh Tripathi',
    'B.Tech IT student with a specialization in Data Science, demonstrating skills in web development and artificial intelligence. Committed to solving real-world problems through innovative projects and teamwork. Proven ability to contribute effectively in collaborative environments.',
    'Gwalior, M.P. 474020',
    '{
        "github": "https://github.com/utkarshtripathi",
        "linkedin": "https://linkedin.com/in/utkarshtripathi",
        "twitter": "https://twitter.com/utkarshtripathi",
        "email": "tripathikarsn79@gmail.com"
    }'::jsonb
);

-- ============================================
-- EXPERIENCES
-- ============================================
INSERT INTO experiences (profile_id, company, position, location, description, is_current, start_date, end_date) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'Amity University Madhya Pradesh', 'B.Tech IT Student', 'Gwalior, M.P.', 'Currently in 6th Semester, GPA: 8.85. Specialization in Data Science.', TRUE, '2023-07-01', NULL),
('550e8400-e29b-41d4-a716-446655440000', 'Freelance', 'Web Developer', 'Remote', 'Building web applications for clients using modern technologies.', FALSE, '2025-08-01', '2025-11-30'),
('550e8400-e29b-41d4-a716-446655440000', 'Intern Vision', 'Summer Virtual Intern', 'Remote', 'Web development internship focusing on frontend technologies.', FALSE, '2025-07-01', '2025-08-31'),
('550e8400-e29b-41d4-a716-446655440000', 'Freelance', 'Web Developer', 'Remote', 'First paid freelance project - PrimeVista Dairy website.', FALSE, '2023-08-01', '2024-08-31');

-- ============================================
-- SKILLS
-- ============================================
INSERT INTO skills (profile_id, name, category, proficiency, icon_url, featured, sort_order) VALUES
-- Programming
('550e8400-e29b-41d4-a716-446655440000', 'C', 'programming', 85, NULL, TRUE, 1),
('550e8400-e29b-41d4-a716-446655440000', 'C++', 'programming', 95, NULL, TRUE, 2),
('550e8400-e29b-41d4-a716-446655440000', 'Java', 'programming', 92, NULL, TRUE, 3),
('550e8400-e29b-41d4-a716-446655440000', 'Python', 'programming', 85, NULL, TRUE, 4),
('550e8400-e29b-41d4-a716-446655440000', 'SQL', 'programming', 85, NULL, FALSE, 5),
-- Frontend
('550e8400-e29b-41d4-a716-446655440000', 'HTML', 'frontend', 85, NULL, FALSE, 6),
('550e8400-e29b-41d4-a716-446655440000', 'CSS', 'frontend', 85, NULL, FALSE, 7),
('550e8400-e29b-41d4-a716-446655440000', 'JavaScript', 'frontend', 75, NULL, TRUE, 8),
('550e8400-e29b-41d4-a716-446655440000', 'Tailwind CSS', 'frontend', 75, NULL, TRUE, 9),
('550e8400-e29b-41d4-a716-446655440000', 'Bootstrap', 'frontend', 75, NULL, FALSE, 10),
('550e8400-e29b-41d4-a716-446655440000', 'React', 'frontend', 60, NULL, TRUE, 11),
('550e8400-e29b-41d4-a716-446655440000', 'Next.js', 'frontend', 55, NULL, TRUE, 12),
-- Backend
('550e8400-e29b-41d4-a716-446655440000', 'Firebase', 'backend', 75, NULL, TRUE, 13),
('550e8400-e29b-41d4-a716-446655440000', 'Supabase', 'backend', 70, NULL, TRUE, 14),
-- Frameworks
('550e8400-e29b-41d4-a716-446655440000', 'Streamlit', 'frameworks', 60, NULL, TRUE, 15),
('550e8400-e29b-41d4-a716-446655440000', 'Flask', 'frameworks', 50, NULL, FALSE, 16),
-- Design
('550e8400-e29b-41d4-a716-446655440000', 'Canva', 'design', 95, NULL, TRUE, 17),
('550e8400-e29b-41d4-a716-446655440000', 'Figma', 'design', 85, NULL, TRUE, 18),
('550e8400-e29b-41d4-a716-446655440000', 'Framer', 'design', 80, NULL, FALSE, 19),
('550e8400-e29b-41d4-a716-446655440000', 'Adobe XD', 'design', 75, NULL, FALSE, 20),
-- Database
('550e8400-e29b-41d4-a716-446655440000', 'MySQL', 'database', 75, NULL, TRUE, 21),
('550e8400-e29b-41d4-a716-446655440000', 'MongoDB', 'database', 60, NULL, TRUE, 22),
('550e8400-e29b-41d4-a716-446655440000', 'PostgreSQL', 'database', 65, NULL, TRUE, 23),
-- Data Science
('550e8400-e29b-41d4-a716-446655440000', 'Machine Learning', 'data_science', 60, NULL, TRUE, 24),
('550e8400-e29b-41d4-a716-446655440000', 'NLP', 'data_science', 55, NULL, TRUE, 25),
('550e8400-e29b-41d4-a716-446655440000', 'Data Science', 'data_science', 65, NULL, TRUE, 26),
-- Tools
('550e8400-e29b-41d4-a716-446655440000', 'Git', 'tools', 80, NULL, TRUE, 27),
('550e8400-e29b-41d4-a716-446655440000', 'Version Control', 'tools', 80, NULL, FALSE, 28);

-- ============================================
-- CERTIFICATES
-- ============================================
INSERT INTO certificates (profile_id, name, issuer, credential_id, issue_date) VALUES
('550e8400-e29b-41d4-a716-446655440000', '3rd Place – Internal Smart India Hackathon (SIH) 2025', 'Amity University Madhya Pradesh', 'SIH2025-001', '2025-02-01'),
('550e8400-e29b-41d4-a716-446655440000', 'Cyber Security Campaign', 'M.P. Police', 'CYBER2025-001', '2025-02-01'),
('550e8400-e29b-41d4-a716-446655440000', 'Innovate 2025 Hackathon', 'Smart India Hackathon', 'INNOVATE2025-001', '2025-04-01'),
('550e8400-e29b-41d4-a716-446655440000', 'AR/MEI Workshop – Applied Math in Engineering', 'Amity University Gwalior', 'ARMEI2024-001', '2024-01-01'),
('550e8400-e29b-41d4-a716-446655440000', 'GSSoC 2024 Contributor', 'GirlScript Summer of Code', 'GSSOC2024-001', '2024-05-01'),
('550e8400-e29b-41d4-a716-446655440000', 'AmiHack 2K24', 'Amity University Gwalior', 'AMIHACK2024-001', '2024-02-01');

-- ============================================
-- PROJECTS
-- ============================================
INSERT INTO projects (profile_id, title, description, slug, github_url, live_url, technologies, featured, sort_order, start_date) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'Brand Pulse', 'AI-powered brand sentiment analysis tool for tracking brand perception across social media.', 'brand-pulse', 'https://github.com/utkarshtripathi/brand-pulse', 'https://brand-pulse.dev', '["React", "Python", "NLP", "Machine Learning"]', TRUE, 1, '2025-01-01'),
('550e8400-e29b-41d4-a716-446655440000', 'AI Book Recommender', 'Semantic book recommendation using sentence transformers & ChromaDB for personalized suggestions.', 'ai-book-recommender', 'https://github.com/utkarshtripathi/ai-book-recommender', 'https://book-recommender.dev', '["Python", "Streamlit", "ChromaDB", "NLP"]', TRUE, 2, '2024-12-01'),
('550e8400-e29b-41d4-a716-446655440000', 'Booky', 'React & Firebase digital library with authentication and book management.', 'booky', 'https://github.com/utkarshtripathi/booky', 'https://booky-app.vercel.app', '["React", "Firebase", "Authentication"]', TRUE, 3, '2024-10-01'),
('550e8400-e29b-41d4-a716-446655440000', 'AutoEDA', 'Streamlit automated EDA report generator for quick data insights.', 'autoeda', 'https://github.com/utkarshtripathi/autoeda', 'https://autoeda.streamlit.app', '["Python", "Streamlit", "Pandas"]', TRUE, 4, '2024-09-01'),
('550e8400-e29b-41d4-a716-446655440000', 'Website Screenshot Generator', 'Flask app for capturing full-page screenshots of websites.', 'screenshot-generator', 'https://github.com/utkarshtripathi/screenshot-generator', 'https://screenshot.gen', '["Python", "Flask", "Playwright"]', FALSE, 5, '2024-08-01'),
('550e8400-e29b-41d4-a716-446655440000', 'Authentic AI', 'Deep learning web app for AI-generated content detection (Runner-Up Innovate 2025).', 'authentic-ai', 'https://github.com/utkarshtripathi/authentic-ai', 'https://authentic-ai.dev',  '["Python", "Deep Learning", "Flask"]', TRUE, 6, '2025-03-01'),
('550e8400-e29b-41d4-a716-446655440000', 'Deepfake Detection', 'Real-time deepfake detection system (3rd Place Cyber Security Hackathon).', 'deepfake-detection', 'https://github.com/utkarshtripathi/deepfake-detection', 'https://deepfake-detector.dev', '["Python", "Computer Vision", "Deep Learning"]', TRUE, 7, '2025-02-01'),
('550e8400-e29b-41d4-a716-446655440000', 'StudyZen', 'AI study planner with DeepSeek AI for personalized learning paths.', 'studyzen', 'https://github.com/utkarshtripathi/studyzen', 'https://studyzen.ai', '["React", "Python", "AI", "DeepSeek"]', FALSE, 8, '2025-01-01'),
('550e8400-e29b-41d4-a716-446655440000', 'Manasāroha', 'Streamlit wellness app with mood tracking and mental health resources.', 'manasaroha', 'https://github.com/utkarshtripathi/manasaroha', 'https://manasaroha.streamlit.app', '["Python", "Streamlit", "Wellness"]', FALSE, 9, '2024-11-01'),
('550e8400-e29b-41d4-a716-446655440000', 'DocConvert Pro', 'Image-to-PDF converter with batch processing capabilities.', 'docconvert-pro', 'https://github.com/utkarshtripathi/docconvert-pro', 'https://docconvert.pro',  '["Python", "GUI", "PDF"]', FALSE, 10, '2024-07-01'),
('550e8400-e29b-41d4-a716-446655440000', 'Cricket Stats Scraper', 'Web scraping ESPN Cricinfo for cricket statistics and analysis.', 'cricket-stats', 'https://github.com/utkarshtripathi/cricket-stats', NULL, '["Python", "Web Scraping", "BeautifulSoup"]', FALSE, 11, '2024-06-01'),
('550e8400-e29b-41d4-a716-446655440000', 'Flipkart Clone', 'Responsive e-commerce website with product listings and cart functionality.', 'flipkart-clone', 'https://github.com/utkarshtripathi/flipkart-clone', 'https://flipkart-clone.vercel.app', '["HTML", "CSS", "JavaScript"]', FALSE, 12, '2024-05-01'),
('550e8400-e29b-41d4-a716-446655440000', 'School Website', 'Revamped school website with modern design and content management.', 'school-website', 'https://github.com/utkarshtripathi/school-website', 'https://school-portal.dev', '["HTML", "CSS", "JavaScript", "PHP"]', FALSE, 13, '2024-04-01'),
('550e8400-e29b-41d4-a716-446655440000', 'PrimeVista Dairy', 'First paid freelance project - Website for dairy products company.', 'primevista-dairy', 'https://github.com/utkarshtripathi/primevista-dairy', 'https://primevista.in', '["HTML", "CSS", "JavaScript", "Bootstrap"]', TRUE, 14, '2023-08-01');

-- ============================================
-- SAMPLE CONTACT MESSAGES
-- ============================================
INSERT INTO contact_messages (name, email, subject, message) VALUES
('John Doe', 'john@example.com', 'Collaboration Opportunity', 'Hi Utkarsh, I saw your portfolio and would love to collaborate on a project.'),
('Jane Smith', 'jane@example.com', 'Freelance Work', 'Hi, I have a web development project that might interest you.');
