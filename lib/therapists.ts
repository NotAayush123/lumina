// lib/therapists.js
export const therapistsData = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    credentials: 'PhD, Licensed Clinical Psychologist',
    specialty: ['Anxiety', 'Depression', 'Trauma'],
    approach: 'Cognitive Behavioral Therapy (CBT)',
    yearsExperience: 12,
    languages: ['English', 'Spanish'],
    availability: 'Available',
    bio: 'Specializing in evidence-based treatments for anxiety and depression. I work collaboratively with clients to develop practical coping strategies.',
    acceptingNew: true,
    gender: 'Female',
    type: 'Clinical Psychologist',
    worksWith: ['Adults (21+)', 'Seniors (65+)'],
    experienced: ['Anxiety', 'Depression', 'Trauma', 'Grief', 'Life Transitions', 'Relationship Issues'],
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
    fees: {
      individual: '$150-200 per session',
      couples: '$200-250 per session',
      insurance: ['Aetna', 'Blue Cross Blue Shield', 'Cigna', 'United Healthcare']
    },
    practiceInfo: {
      credentials: 'Licensed Clinical Psychologist (CA PSY 28945)',
      education: 'Ph.D. in Clinical Psychology, Stanford University',
      experience: '15+ years of clinical experience',
      availability: 'Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 2:00 PM',
      modalities: ['CBT', 'DBT', 'Mindfulness-Based', 'Psychodynamic', 'Trauma-Focused', 'EMDR']
    },
    approachContent: {
      learnings: "My top three learnings are: always bring an open mind into every consultation; if we pigeon hole our solutions, we miss the nuances. Listen on multiple levels, not only the content but also the delivery and context in which it is said. Finally, have a sense of humour, we are all humans after all and the ability to laugh and find joy in anything can brighten up the saddest of days.",
      approach: "I believe in creating a safe, non-judgmental space where clients feel comfortable exploring their thoughts and feelings. My approach is integrative, drawing from cognitive-behavioral therapy (CBT), mindfulness-based techniques, and psychodynamic principles to tailor treatment to each individual's unique needs.\n\nI view therapy as a collaborative process where we work together to identify patterns, develop insights, and create practical strategies for change. My goal is to help you build resilience, improve relationships, and develop a deeper understanding of yourself.",
      sessionExpectations: "In our first session, we'll focus on getting to know each other and understanding what brings you to therapy. I'll ask questions about your history, current challenges, and goals for treatment. From there, we'll develop a treatment plan together that feels right for you. Sessions are typically 50 minutes and can be held weekly or bi-weekly depending on your needs."
    },
    locationInfo: {
      address: '450 Sutter Street, Suite 2400, San Francisco, CA 94108',
      transit: 'Near Montgomery BART station (5 min walk)',
      parking: 'Garage parking available at Sutter-Stockton Garage',
      accessibility: 'Wheelchair accessible building with elevator access',
      telehealth: true
    }
  },
  {
    id: 2,
    name: 'Marcus Chen',
    credentials: 'LCSW, Licensed Clinical Social Worker',
    specialty: ['Relationship Issues', 'Life Transitions', 'Stress Management'],
    approach: 'Psychodynamic Therapy',
    yearsExperience: 8,
    languages: ['English', 'Mandarin'],
    availability: 'Limited',
    bio: 'Focused on helping individuals navigate relationship challenges and major life changes with insight-oriented approaches.',
    acceptingNew: true,
    gender: 'Male',
    type: 'Clinical Social Worker',
    worksWith: ['Adults (18+)', 'Couples'],
    experienced: ['Relationship Issues', 'Life Transitions', 'Stress Management', 'Identity Issues', 'Career Counseling'],
    location: 'Oakland, CA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    fees: {
      individual: '$120-160 per session',
      couples: '$180-220 per session',
      insurance: ['Blue Cross Blue Shield', 'Kaiser Permanente', 'Medi-Cal']
    },
    practiceInfo: {
      credentials: 'Licensed Clinical Social Worker (CA LCSW 84562)',
      education: 'Masters in Social Work, UC Berkeley',
      experience: '8+ years of clinical experience',
      availability: 'Tuesday - Thursday: 10:00 AM - 7:00 PM',
      modalities: ['Psychodynamic', 'Relational Therapy', 'Narrative Therapy', 'Mindfulness']
    },
    // No approachContent provided - will use default content
  },
  {
    id: 3,
    name: 'Dr. Jennifer Williams',
    credentials: 'PsyD, Clinical Psychology',
    specialty: ['PTSD', 'Trauma', 'Anxiety'],
    approach: 'EMDR',
    yearsExperience: 15,
    languages: ['English'],
    availability: 'Available',
    bio: 'Specialized training in trauma-focused therapies. Helping clients process traumatic experiences and build resilience.',
    acceptingNew: true,
    gender: 'Female',
    type: 'Clinical Psychologist',
    worksWith: ['Adults (18+)', 'Teens (16+)'],
    experienced: ['PTSD', 'Trauma', 'Anxiety', 'Grief', 'Stress Disorders'],
    location: 'San Jose, CA',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
    fees: {
      individual: '$180-220 per session',
      couples: '$220-280 per session',
      insurance: ['Aetna', 'Cigna', 'United Healthcare', 'Optum']
    },
    practiceInfo: {
      credentials: 'Licensed Clinical Psychologist (CA PSY 36789)',
      education: 'Psy.D. in Clinical Psychology, Alliant International University',
      experience: '15+ years of clinical experience',
      availability: 'Monday - Thursday: 8:00 AM - 5:00 PM',
      modalities: ['EMDR', 'Trauma-Focused CBT', 'Somatic Therapy', 'Mindfulness']
    },
    // No approachContent provided - will use default content
  },
  {
    id: 4,
    name: 'David Park',
    credentials: 'LMFT, Licensed Marriage and Family Therapist',
    specialty: ['Couples Therapy', 'Family Therapy', 'Communication'],
    approach: 'Emotionally Focused Therapy',
    yearsExperience: 10,
    languages: ['English', 'Korean'],
    availability: 'Waitlist',
    bio: 'Working with couples and families to strengthen relationships and improve communication patterns.',
    acceptingNew: false,
    gender: 'Male',
    type: 'Marriage and Family Therapist',
    worksWith: ['Couples', 'Families', 'Adults (18+)'],
    experienced: ['Couples Therapy', 'Family Therapy', 'Communication', 'Marital Issues', 'Parenting'],
    location: 'Berkeley, CA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    fees: {
      individual: '$140-180 per session',
      couples: '$190-240 per session',
      insurance: ['Blue Cross Blue Shield', 'Kaiser Permanente']
    },
    practiceInfo: {
      credentials: 'Licensed Marriage and Family Therapist (CA LMFT 52841)',
      education: 'Masters in Counseling Psychology, Santa Clara University',
      experience: '10+ years of clinical experience',
      availability: 'Wednesday - Friday: 11:00 AM - 8:00 PM',
      modalities: ['Emotionally Focused Therapy', 'Family Systems', 'Gottman Method', 'Solution-Focused']
    },
    // No approachContent provided - will use default content
  },
  {
    id: 5,
    name: 'Dr. Rachel Thompson',
    credentials: 'PhD, Licensed Psychologist',
    specialty: ['OCD', 'Anxiety', 'Panic Disorder'],
    approach: 'Exposure and Response Prevention',
    yearsExperience: 9,
    languages: ['English'],
    availability: 'Available',
    bio: 'Expert in treating OCD and anxiety disorders using evidence-based exposure therapy techniques.',
    acceptingNew: true,
    gender: 'Female',
    type: 'Clinical Psychologist',
    worksWith: ['Adults (18+)', 'Teens (14+)'],
    experienced: ['OCD', 'Anxiety', 'Panic Disorder', 'Phobias', 'Health Anxiety'],
    location: 'Palo Alto, CA',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
    fees: {
      individual: '$160-210 per session',
      couples: '$210-260 per session',
      insurance: ['Aetna', 'Cigna', 'United Healthcare']
    },
    practiceInfo: {
      credentials: 'Licensed Psychologist (CA PSY 45218)',
      education: 'Ph.D. in Clinical Psychology, UCLA',
      experience: '9+ years of clinical experience',
      availability: 'Monday - Friday: 7:00 AM - 4:00 PM',
      modalities: ['Exposure and Response Prevention', 'CBT', 'Acceptance and Commitment Therapy']
    },
    // No approachContent provided - will use default content
  },
  {
    id: 6,
    name: 'Lisa Rodriguez',
    credentials: 'LPC, Licensed Professional Counselor',
    specialty: ['Depression', 'Self-Esteem', 'Women\'s Issues'],
    approach: 'Humanistic Therapy',
    yearsExperience: 7,
    languages: ['English', 'Spanish'],
    availability: 'Available',
    bio: 'Creating a supportive space for personal growth, with focus on self-compassion and authentic living.',
    acceptingNew: true,
    gender: 'Female',
    type: 'Professional Counselor',
    worksWith: ['Adults (18+)', 'Women', 'Young Adults'],
    experienced: ['Depression', 'Self-Esteem', 'Women\'s Issues', 'Identity Development', 'Life Purpose'],
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    fees: {
      individual: '$130-170 per session',
      couples: '$180-230 per session',
      insurance: ['Blue Cross Blue Shield', 'Medi-Cal']
    },
    practiceInfo: {
      credentials: 'Licensed Professional Counselor (CA LPC 69327)',
      education: 'Masters in Clinical Mental Health Counseling, San Francisco State University',
      experience: '7+ years of clinical experience',
      availability: 'Tuesday - Saturday: 9:00 AM - 6:00 PM',
      modalities: ['Humanistic Therapy', 'Person-Centered', 'Gestalt Therapy', 'Mindfulness']
    },
    // No approachContent provided - will use default content
  }
];

export const specialties = [
  'All Specialties', 
  'Anxiety', 
  'Depression', 
  'Trauma', 
  'Relationship Issues', 
  'PTSD', 
  'OCD',
  'Stress Management',
  'Life Transitions',
  'Couples Therapy',
  'Family Therapy',
  'Self-Esteem',
  "Women's Issues",
  'Panic Disorder'
];

export const approaches = [
  'All Approaches', 
  'Cognitive Behavioral Therapy (CBT)', 
  'EMDR', 
  'Dialectical Behavior Therapy (DBT)', 
  'Psychodynamic Therapy', 
  'Acceptance and Commitment Therapy (ACT)',
  'Humanistic Therapy',
  'Emotionally Focused Therapy',
  'Exposure and Response Prevention'
];

// Default content for therapists without approachContent
const defaultApproachContent = {
  learnings: "Through my years of practice, I've learned that every individual's journey is unique. My key learnings include: the importance of creating a safe, non-judgmental space; the power of authentic human connection in healing; and that growth often happens when we embrace both our strengths and vulnerabilities.",
  approach: `I believe in a collaborative therapeutic relationship where we work together to understand your experiences and develop strategies for positive change. My approach is tailored to your specific needs and goals, drawing from evidence-based practices that have been shown to be effective.

I focus on helping you develop insight into patterns that may no longer serve you, while building practical skills to navigate life's challenges. Whether you're dealing with specific issues or seeking personal growth, I'm here to support your journey toward greater well-being.`,
  sessionExpectations: "In our sessions, you can expect a warm, supportive environment where you can speak openly about your concerns. We'll start by understanding what brings you to therapy and what you hope to achieve. Together, we'll develop a personalized plan that addresses your unique situation and goals. Sessions are typically 50 minutes, and we'll work at a pace that feels comfortable for you."
};

const defaultLocationInfo = {
  address: 'Virtual sessions available',
  transit: 'Online therapy platform',
  parking: 'Not applicable for telehealth',
  accessibility: 'Fully accessible virtual platform',
  telehealth: true
};

// Helper function to find therapist by ID
export const findTherapistById = (id) => {
  const therapistId = parseInt(id);
  let therapist = therapistsData.find(t => t.id === therapistId);
  
  if (!therapist) {
    // Return first therapist as fallback
    therapist = therapistsData[0];
  }
  
  // Ensure all optional fields have defaults
  return {
    ...therapist,
    practiceInfo: therapist.practiceInfo || {
      credentials: therapist.credentials,
      education: 'Graduate degree in mental health field',
      experience: `${therapist.yearsExperience}+ years of clinical experience`,
      availability: 'Flexible scheduling available',
      modalities: [therapist.approach]
    },
    approachContent: therapist.approachContent || defaultApproachContent,
    locationInfo: therapist.locationInfo || defaultLocationInfo,
    fees: therapist.fees || {
      individual: '$150-200 per session',
      couples: '$200-250 per session',
      insurance: ['Out of network - superbill provided']
    }
  };
};

// Helper function to get all therapists
export const getAllTherapists = () => {
  return therapistsData;
};

// Helper function to get availability color
export const getAvailabilityColor = (availability) => {
  switch(availability) {
    case 'Available': return 'bg-green-100 text-green-700';
    case 'Limited': return 'bg-yellow-100 text-yellow-700';
    case 'Waitlist': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

// Helper function to filter therapists
export const filterTherapists = (therapists, selectedSpecialty, selectedApproach) => {
  return therapists.filter(therapist => {
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || therapist.specialty.includes(selectedSpecialty);
    const matchesApproach = selectedApproach === 'All Approaches' || therapist.approach.includes(selectedApproach);
    return matchesSpecialty && matchesApproach;
  });
};

// Helper function to get therapist initials for avatar
export const getTherapistInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('');
};