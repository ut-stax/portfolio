-- Initial Database Schema for Utkarsh Tripathi Portfolio
-- Generated: 2025-02-04

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- PROFILES TABLE
-- ============================================
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name VARCHAR(100) NOT NULL,
    bio TEXT,
    avatar_url TEXT,
    resume_url TEXT,
    location VARCHAR(200),
    social_links JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_display_name ON profiles(display_name);

-- ============================================
-- PROJECTS TABLE
-- ============================================
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    github_url TEXT,
    live_url TEXT,
    demo_url TEXT,
    featured BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    technologies JSONB DEFAULT '[]'::jsonb,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_projects_profile_id ON projects(profile_id);
CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);

-- ============================================
-- EXPERIENCES TABLE
-- ============================================
CREATE TABLE experiences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    company VARCHAR(200) NOT NULL,
    position VARCHAR(200) NOT NULL,
    location VARCHAR(200),
    description TEXT,
    is_current BOOLEAN DEFAULT FALSE,
    start_date DATE NOT NULL,
    end_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_experiences_profile_id ON experiences(profile_id);
CREATE INDEX idx_experiences_date ON experiences(start_date DESC);

-- ============================================
-- SKILLS TABLE
-- ============================================
CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    proficiency INTEGER CHECK (proficiency >= 0 AND proficiency <= 100),
    icon_url TEXT,
    featured BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_skills_profile_id ON skills(profile_id);
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_skills_featured ON skills(featured);

-- ============================================
-- CERTIFICATES TABLE
-- ============================================
CREATE TABLE certificates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    issuer VARCHAR(200) NOT NULL,
    credential_id VARCHAR(100),
    credential_url TEXT,
    issue_date DATE,
    expiry_date DATE,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_certificates_profile_id ON certificates(profile_id);
CREATE INDEX idx_certificates_issue_date ON certificates(issue_date DESC);

-- ============================================
-- BLOG_POSTS TABLE
-- ============================================
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    cover_image TEXT,
    published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMPTZ,
    read_time INTEGER DEFAULT 5,
    views INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- ============================================
-- CONTACT_MESSAGES TABLE
-- ============================================
CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(200),
    message TEXT NOT NULL,
    "read" BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_contact_messages_created ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_read ON contact_messages("read");

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Profiles: Public read, Owner write
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = user_id);

-- Projects: Public read, Owner write
CREATE POLICY "Public projects are viewable by everyone" ON projects
    FOR SELECT USING (true);

CREATE POLICY "Owners can manage own projects" ON projects
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = profile_id));

-- Experiences: Public read, Owner write
CREATE POLICY "Public experiences are viewable by everyone" ON experiences
    FOR SELECT USING (true);

CREATE POLICY "Owners can manage own experiences" ON experiences
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = profile_id));

-- Skills: Public read, Owner write
CREATE POLICY "Public skills are viewable by everyone" ON skills
    FOR SELECT USING (true);

CREATE POLICY "Owners can manage own skills" ON skills
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = profile_id));

-- Certificates: Public read, Owner write
CREATE POLICY "Public certificates are viewable by everyone" ON certificates
    FOR SELECT USING (true);

CREATE POLICY "Owners can manage own certificates" ON certificates
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = profile_id));

-- Blog Posts: Public read for published, Owner all access
CREATE POLICY "Published blog posts are viewable by everyone" ON blog_posts
    FOR SELECT USING (published = true);

CREATE POLICY "Owners can manage own blog posts" ON blog_posts
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = author_id));

-- Contact Messages: Owner read/write (for admin)
CREATE POLICY "Public can insert contact messages" ON contact_messages
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Owners can view own contact messages" ON contact_messages
    FOR SELECT USING (true);

CREATE POLICY "Owners can update contact messages" ON contact_messages
    FOR UPDATE USING (true);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_experiences_updated_at
    BEFORE UPDATE ON experiences
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_skills_updated_at
    BEFORE UPDATE ON skills
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_certificates_updated_at
    BEFORE UPDATE ON certificates
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- STORAGE BUCKETS (via Supabase Dashboard or CLI)
-- ============================================
-- Run these commands in Supabase CLI or dashboard:
--
-- supabase storage buckets create profiles --public
-- supabase storage buckets create projects --public
-- supabase storage buckets create certificates --public
-- supabase storage buckets create blog --public
-- supabase storage buckets create resume --public
-- supabase storage buckets create private --private
