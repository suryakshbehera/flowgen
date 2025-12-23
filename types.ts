
import React from 'react';

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Coaching' | 'D2C' | 'Corporate';
  results: string[];
  image: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  // Fix: Added React import to define the React namespace for ReactNode
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
