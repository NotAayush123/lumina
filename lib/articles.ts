// lib/articles.js
export const articlesData = {
  'General': [
    {
      id: 1,
      title: 'Understanding Your Mental Health Journey',
      description: 'A comprehensive guide to recognizing mental health patterns and building resilience through evidence-based practices.',
      author: 'Dr. Sarah Mitchell',
      date: '18 Jan 2024',
      category: 'Therapy & Counseling',
      featured: true,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      authorBio: 'Clinical psychologist with 15+ years experience in cognitive behavioral therapy and mental health advocacy.',
      readTime: '8 min read',
      tags: ['Mental Health', 'Wellness', 'Resilience', 'Self-Care'],
      relatedArticles: [2, 3, 5],
      content: `## What Mental Health Really Means

Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act as we cope with life's challenges.

### The Spectrum of Mental Wellness

Unlike physical health, mental health exists on a spectrum. You can have good mental health while managing a condition, just as you can have poor mental health without a specific diagnosis.

### Recognizing Your Patterns

**Seasonal Patterns**
Many people experience mood changes during certain times of year.

**Stress-Response Patterns**
How you react to challenges reveals important information.

**Social Patterns**
Different social contexts affect mental states differently.

### Building Resilience

Resilience is a skill developed through practice:

- **Cognitive flexibility**: Adapting your thinking
- **Emotional regulation**: Managing intense feelings  
- **Social connection**: Supportive relationships
- **Meaning-making**: Finding purpose

### Daily Practices

**Mindfulness**
- 5 minutes of focused breathing
- Body scanning exercises
- Present-moment awareness

**Self-Care**
- Consistent sleep schedule
- Regular physical activity
- Healthy nutrition
- Social connections

> "Mental health is not a destination but a journey of daily practice."

Seek professional help if symptoms persist for more than two weeks.`
    },
    {
      id: 2,
      title: 'Daily Mindfulness for Better Mental Health',
      description: 'Simple mindfulness exercises you can incorporate into your daily routine.',
      author: 'Maria Santos',
      date: '16 Jan 2024',
      category: 'Mindfulness & Meditation',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      authorBio: 'Mindfulness coach and meditation teacher specializing in practical mindfulness techniques for modern life.',
      readTime: '5 min read',
      tags: ['Mindfulness', 'Meditation', 'Stress Relief', 'Daily Practice'],
      relatedArticles: [1, 4],
      content: `## Mindfulness Basics

Mindfulness means paying attention to the present moment without judgment.

### Simple Techniques

**Morning Practice (2 minutes)**
- Notice your breath upon waking
- Feel physical sensations
- Set daily intention

**Breathing Break (1 minute)**
- Stop current activity
- Take 3 deep breaths
- Notice present feelings

**Benefits**
- Reduces stress and anxiety
- Improves focus
- Better emotional regulation
- Enhanced self-awareness

Start with just one minute daily. Consistency matters more than duration.`
    }
  ],
  'Anxiety Management': [
    {
      id: 3,
      title: 'Managing Anxiety in Daily Life',
      description: 'Practical strategies for identifying triggers and developing coping mechanisms.',
      author: 'Lisa Chen',
      date: '14 Jan 2024',
      category: 'Anxiety Management',
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&h=400&fit=crop',
      authorBio: 'Therapist specializing in anxiety disorders and cognitive behavioral techniques.',
      readTime: '6 min read',
      tags: ['Anxiety', 'Coping Strategies', 'Triggers', 'Breathing'],
      relatedArticles: [1, 4],
      content: `## Understanding Anxiety

Anxiety is your body's natural alarm system that sometimes misfires.

### Identifying Triggers

Common anxiety triggers:
- Social situations
- Work-related stress
- Health concerns
- Financial pressures

### Coping Techniques

**4-7-8 Breathing**
1. Exhale completely
2. Inhale for 4 counts
3. Hold for 7 counts
4. Exhale for 8 counts

**Grounding Exercise**
Name:
- 5 things you see
- 4 things you touch
- 3 things you hear
- 2 things you smell
- 1 thing you taste

### Lifestyle Changes

**Daily Exercise**
- 30 minutes of walking
- Yoga or stretching
- Any enjoyable movement

**Sleep Routine**
- Consistent bed/wake times
- No screens before bed
- Cool, dark bedroom`
    }
  ],
  'Depression Support': [
    {
      id: 4,
      title: 'Coping with Depression',
      description: 'Evidence-based approaches to manage depressive symptoms and build hope.',
      author: 'Dr. James Wilson',
      date: '12 Jan 2024',
      category: 'Depression Support',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      authorBio: 'Psychiatrist and researcher focused on depression treatment and mental health education.',
      readTime: '7 min read',
      tags: ['Depression', 'Mental Health', 'Treatment', 'Support'],
      relatedArticles: [1, 3, 5],
      content: `## Understanding Depression

Depression affects energy, sleep, appetite, and motivation—it's more than just sadness.

### Daily Structure

**Morning Routine**
- Consistent wake time
- Basic self-care
- Light physical activity

**Activity Planning**
- One small task daily
- Mix of easy/challenging
- Include enjoyment

### Mood Boosters

**Physical Activity**
- 10-minute walk
- Gentle stretching
- Outdoor time

**Social Connection**
- Reach out to one person
- Join community activities
- Pet interaction

### Professional Support

Therapy, medication, or combination treatment can be highly effective.`
    }
  ],
  'Self-Care': [
    {
      id: 5,
      title: 'The Importance of Self-Care',
      description: 'Creating sustainable self-care routines for long-term mental wellness.',
      author: 'Dr. Amanda Rodriguez',
      date: '10 Jan 2024',
      category: 'Self-Care',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      authorBio: 'Wellness expert and author focusing on sustainable self-care practices for mental health.',
      readTime: '6 min read',
      tags: ['Self-Care', 'Wellness', 'Routine', 'Mental Health'],
      relatedArticles: [1, 2],
      content: `## What is Self-Care?

Self-care is actively protecting your well-being and happiness during stress.

### Types of Self-Care

**Physical**
- Enjoyable exercise
- 7-9 hours sleep
- Balanced nutrition
- Proper hydration

**Emotional**
- Journaling
- Therapy when needed
- Self-compassion
- Healthy boundaries

**Mental**
- Reading/learning
- Mindfulness practice
- Media limits
- Mental health days

### Creating Routine

**Start Small**
- Choose 1-2 practices
- Focus on consistency
- Build gradually

**Schedule It**
- Treat as appointments
- Calendar integration
- Time protection

**Be Flexible**
- Adjust as needed
- Seasonal variations
- Listen to your body`
    }
  ]
};

// Helper function to find article by ID
export const findArticleById = (id) => {
  const articleId = parseInt(id);
  
  for (const category in articlesData) {
    const foundArticle = articlesData[category].find(article => article.id === articleId);
    if (foundArticle) {
      return foundArticle;
    }
  }
  
  // Return first article as fallback
  const firstCategory = Object.keys(articlesData)[0];
  return articlesData[firstCategory][0];
};

// Helper function to get all articles flattened
export const getAllArticles = () => {
  const allArticles = {};
  Object.values(articlesData).forEach(categoryArticles => {
    categoryArticles.forEach(article => {
      allArticles[article.id] = article;
    });
  });
  return allArticles;
};

// Get all categories
export const categories = [
  { name: 'General', color: 'bg-gray-400' },
  { name: 'Anxiety Management', color: 'bg-blue-500' },
  { name: 'Depression Support', color: 'bg-purple-500' },
  { name: 'Stress Relief', color: 'bg-green-500' },
  { name: 'Mindfulness & Meditation', color: 'bg-teal-500' },
  { name: 'Therapy & Counseling', color: 'bg-indigo-500' },
  { name: 'Self-Care', color: 'bg-pink-500' },
  { name: 'Sleep & Mental Health', color: 'bg-violet-500' },
  { name: 'Relationships', color: 'bg-orange-500' },
  { name: 'Trauma Recovery', color: 'bg-red-500' },
];