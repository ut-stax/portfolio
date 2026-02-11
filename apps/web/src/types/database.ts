// Database types generated from Supabase schema
// Run: pnpm db:generate to regenerate after schema changes

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          user_id: string;
          display_name: string;
          bio: string | null;
          avatar_url: string | null;
          resume_url: string | null;
          location: string | null;
          social_links: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          display_name: string;
          bio?: string | null;
          avatar_url?: string | null;
          resume_url?: string | null;
          location?: string | null;
          social_links?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          display_name?: string;
          bio?: string | null;
          avatar_url?: string | null;
          resume_url?: string | null;
          location?: string | null;
          social_links?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          profile_id: string;
          title: string;
          description: string;
          slug: string;
          github_url: string | null;
          live_url: string | null;
          demo_url: string | null;
          featured: boolean;
          sort_order: number;
          technologies: Json | null;
          start_date: string | null;
          end_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          profile_id: string;
          title: string;
          description: string;
          slug: string;
          github_url?: string | null;
          live_url?: string | null;
          demo_url?: string | null;
          featured?: boolean;
          sort_order?: number;
          technologies?: Json | null;
          start_date?: string | null;
          end_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          profile_id?: string;
          title?: string;
          description?: string;
          slug?: string;
          github_url?: string | null;
          live_url?: string | null;
          demo_url?: string | null;
          featured?: boolean;
          sort_order?: number;
          technologies?: Json | null;
          start_date?: string | null;
          end_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      experiences: {
        Row: {
          id: string;
          profile_id: string;
          company: string;
          position: string;
          location: string | null;
          description: string | null;
          is_current: boolean;
          start_date: string;
          end_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          profile_id: string;
          company: string;
          position: string;
          location?: string | null;
          description?: string | null;
          is_current?: boolean;
          start_date: string;
          end_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          profile_id?: string;
          company?: string;
          position?: string;
          location?: string | null;
          description?: string | null;
          is_current?: boolean;
          start_date?: string;
          end_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      skills: {
        Row: {
          id: string;
          profile_id: string;
          name: string;
          category: string;
          proficiency: number | null;
          icon_url: string | null;
          featured: boolean;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          profile_id: string;
          name: string;
          category: string;
          proficiency?: number | null;
          icon_url?: string | null;
          featured?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          profile_id?: string;
          name?: string;
          category?: string;
          proficiency?: number | null;
          icon_url?: string | null;
          featured?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      certificates: {
        Row: {
          id: string;
          profile_id: string;
          name: string;
          issuer: string;
          credential_id: string | null;
          credential_url: string | null;
          issue_date: string | null;
          expiry_date: string | null;
          image_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          profile_id: string;
          name: string;
          issuer: string;
          credential_id?: string | null;
          credential_url?: string | null;
          issue_date?: string | null;
          expiry_date?: string | null;
          image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          profile_id?: string;
          name?: string;
          issuer?: string;
          credential_id?: string | null;
          credential_url?: string | null;
          issue_date?: string | null;
          expiry_date?: string | null;
          image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          author_id: string;
          title: string;
          excerpt: string | null;
          content: string;
          slug: string;
          cover_image: string | null;
          published: boolean;
          published_at: string | null;
          read_time: number;
          views: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          author_id: string;
          title: string;
          excerpt?: string | null;
          content: string;
          slug: string;
          cover_image?: string | null;
          published?: boolean;
          published_at?: string | null;
          read_time?: number;
          views?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          author_id?: string;
          title?: string;
          excerpt?: string | null;
          content?: string;
          slug?: string;
          cover_image?: string | null;
          published?: boolean;
          published_at?: string | null;
          read_time?: number;
          views?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string | null;
          message: string;
          read: boolean;
          read_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          subject?: string | null;
          message: string;
          read?: boolean;
          read_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          subject?: string | null;
          message?: string;
          read?: boolean;
          read_at?: string | null;
          created_at?: string;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          subscribed: boolean;
          subscribed_at: string;
          unsubscribed_at: string | null;
          source: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          subscribed?: boolean;
          subscribed_at?: string;
          unsubscribed_at?: string | null;
          source?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          subscribed?: boolean;
          subscribed_at?: string;
          unsubscribed_at?: string | null;
          source?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}

// Type exports for convenience
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type ProfileInsert = Database["public"]["Tables"]["profiles"]["Insert"];
export type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"];

export type Project = Database["public"]["Tables"]["projects"]["Row"];
export type ProjectInsert = Database["public"]["Tables"]["projects"]["Insert"];
export type ProjectUpdate = Database["public"]["Tables"]["projects"]["Update"];

export type Experience = Database["public"]["Tables"]["experiences"]["Row"];
export type ExperienceInsert = Database["public"]["Tables"]["experiences"]["Insert"];
export type ExperienceUpdate = Database["public"]["Tables"]["experiences"]["Update"];

export type Skill = Database["public"]["Tables"]["skills"]["Row"];
export type SkillInsert = Database["public"]["Tables"]["skills"]["Insert"];
export type SkillUpdate = Database["public"]["Tables"]["skills"]["Update"];

export type Certificate = Database["public"]["Tables"]["certificates"]["Row"];
export type CertificateInsert = Database["public"]["Tables"]["certificates"]["Insert"];
export type CertificateUpdate = Database["public"]["Tables"]["certificates"]["Update"];

export type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"];
export type BlogPostInsert = Database["public"]["Tables"]["blog_posts"]["Insert"];
export type BlogPostUpdate = Database["public"]["Tables"]["blog_posts"]["Update"];

export type ContactMessage = Database["public"]["Tables"]["contact_messages"]["Row"];
export type ContactMessageInsert = Database["public"]["Tables"]["contact_messages"]["Insert"];
export type ContactMessageUpdate = Database["public"]["Tables"]["contact_messages"]["Update"];

export type NewsletterSubscriber = Database["public"]["Tables"]["newsletter_subscribers"]["Row"];
export type NewsletterSubscriberInsert = Database["public"]["Tables"]["newsletter_subscribers"]["Insert"];
export type NewsletterSubscriberUpdate = Database["public"]["Tables"]["newsletter_subscribers"]["Update"];

// Application-specific types
export interface ProjectWithImages extends Project {
  images: string[];
  tags: string[];
}

export interface ExperienceWithCompany extends Experience {
  logo_url?: string;
  website?: string;
}

export interface BlogPostWithAuthor extends BlogPost {
  author: Profile;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  dribbble?: string;
  behance?: string;
  website?: string;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "programming"
  | "database"
  | "devops"
  | "design"
  | "tools"
  | "other";
