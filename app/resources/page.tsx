"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

// ResourcePreviewCard with color cycling buttons and bottom alignment
const ResourcePreviewCard = ({ article, buttonColors = ['red', 'green', 'orange', 'blue', 'yellow'] }) => {
  const router = useRouter();
  const getButtonColor = (id, colors) => {
    const colorIndex = (id - 1) % colors.length;
    const color = colors[colorIndex];
  
    const colorMap = {
      red: 'bg-red-400 hover:bg-red-500',
      green: 'bg-green-400 hover:bg-green-500',
      orange: 'bg-orange-400 hover:bg-orange-500',
      blue: 'bg-blue-400 hover:bg-blue-500',
      yellow: 'bg-yellow-400 hover:bg-yellow-500',
      purple: 'bg-purple-400 hover:bg-purple-500',
      pink: 'bg-pink-400 hover:bg-pink-500',
      indigo: 'bg-indigo-400 hover:bg-indigo-500',
      gray: 'bg-gray-400 hover:bg-gray-500',
      teal: 'bg-teal-400 hover:bg-teal-500'
    };
    
    return colorMap[color] || 'bg-gray-400 hover:bg-gray-500';
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex-grow">
        {article.featured && (
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {article.author}</span>
          <span>{article.date}</span>
        </div>
        <div className="mt-3">
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            {article.category}
          </span>
        </div>
      </div>
      <button className={`mt-10 font-semibold w-full text-white rounded-full p-3 transition-colors hover:cursor-pointer ${getButtonColor(article.id, buttonColors)}`} onClick={() => router.push(`/resources/${article.id}`)}>
        Read
      </button>
    </div>
  );
};

const MentalHealthResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('View all');
  const buttonColors = ['red', 'green', 'orange', 'blue', 'yellow'];

  const categories = [
    'View all',
    'Anxiety Management', 
    'Depression Support',
    'Stress Relief',
    'Mindfulness & Meditation',
    'Therapy & Counseling',
    'Self-Care',
    'Sleep & Mental Health',
    'Relationships',
    'Trauma Recovery',
    'Crisis Support'
  ];

  // Mental health articles for each category
  const articles = {
    'View all': [
      {
        id: 1,
        title: 'Understanding Your Mental Health Journey',
        description: 'A comprehensive guide to recognizing mental health patterns and building resilience through evidence-based practices.',
        author: 'Dr. Sarah Mitchell',
        date: '18 Jan 2024',
        category: 'Therapy & Counseling',
        featured: true
      },
      {
        id: 2,
        title: 'Daily Mindfulness for Better Mental Health',
        description: 'Simple mindfulness exercises you can incorporate into your daily routine to reduce stress and improve emotional well-being.',
        author: 'Maria Santos',
        date: '16 Jan 2024',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 3,
        title: 'Building Healthy Relationships',
        description: 'How strong relationships support mental health and practical tips for nurturing meaningful connections.',
        author: 'Dr. James Wilson',
        date: '14 Jan 2024',
        category: 'Relationships'
      },
      {
        id: 4,
        title: 'Managing Anxiety in Daily Life',
        description: 'Practical strategies for identifying anxiety triggers and developing coping mechanisms that work.',
        author: 'Lisa Chen',
        date: '12 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 5,
        title: 'The Importance of Self-Care',
        description: 'Creating sustainable self-care routines that support long-term mental wellness and prevent burnout.',
        author: 'Dr. Amanda Rodriguez',
        date: '10 Jan 2024',
        category: 'Self-Care'
      }
    ],
    'Anxiety Management': [
      {
        id: 10,
        title: 'Understanding Different Types of Anxiety',
        description: 'Learn about generalized anxiety, social anxiety, panic disorder, and specific phobias to better understand your experiences.',
        author: 'Dr. Michael Thompson',
        date: '17 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 11,
        title: 'Breathing Techniques for Panic Attacks',
        description: 'Evidence-based breathing exercises that can help ground you during moments of intense anxiety or panic.',
        author: 'Emma Johnson',
        date: '15 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 12,
        title: 'Cognitive Behavioral Strategies for Anxiety',
        description: 'How to identify and challenge anxious thoughts using CBT techniques you can practice at home.',
        author: 'Dr. Rachel Kim',
        date: '13 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 13,
        title: 'Social Anxiety: Building Confidence',
        description: 'Gradual exposure techniques and confidence-building exercises for managing social anxiety.',
        author: 'Mark Davis',
        date: '11 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 14,
        title: 'Workplace Anxiety Management',
        description: 'Strategies for managing anxiety at work, including communication tips and stress reduction techniques.',
        author: 'Jennifer Lee',
        date: '9 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 15,
        title: 'Anxiety and Physical Symptoms',
        description: 'Understanding the mind-body connection and how anxiety manifests physically in your body.',
        author: 'Dr. Carlos Martinez',
        date: '7 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 16,
        title: 'Progressive Muscle Relaxation Guide',
        description: 'Step-by-step instructions for using progressive muscle relaxation to reduce anxiety and tension.',
        author: 'Sophie Brown',
        date: '5 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 17,
        title: 'Grounding Techniques for Anxiety',
        description: 'Five senses grounding exercises to help you stay present during anxious moments.',
        author: 'Dr. Nina Patel',
        date: '3 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 18,
        title: 'Creating an Anxiety Action Plan',
        description: 'How to develop a personalized plan for managing anxiety episodes and maintaining mental wellness.',
        author: 'Alex Thompson',
        date: '1 Jan 2024',
        category: 'Anxiety Management'
      },
      {
        id: 19,
        title: 'Anxiety Medication: What to Know',
        description: 'An overview of anxiety medications, side effects, and how to work with your healthcare provider.',
        author: 'Dr. Laura Johnson',
        date: '28 Dec 2023',
        category: 'Anxiety Management'
      }
    ],
    'Depression Support': [
      {
        id: 20,
        title: 'Recognizing Signs of Depression',
        description: 'Understanding the various symptoms of depression and when to seek professional help.',
        author: 'Dr. Robert Taylor',
        date: '16 Jan 2024',
        category: 'Depression Support'
      },
      {
        id: 21,
        title: 'Depression and Daily Routines',
        description: 'How to create structure and maintain daily activities when dealing with depression.',
        author: 'Maya Singh',
        date: '14 Jan 2024',
        category: 'Depression Support'
      },
      {
        id: 22,
        title: 'Exercise and Depression Recovery',
        description: 'The science behind exercise as a treatment for depression and practical ways to get started.',
        author: 'Chris Walker',
        date: '12 Jan 2024',
        category: 'Depression Support'
      },
      {
        id: 23,
        title: 'Nutrition for Mental Health',
        description: 'How diet affects mood and specific nutritional strategies for supporting mental wellness.',
        author: 'Dr. Priya Sharma',
        date: '10 Jan 2024',
        category: 'Depression Support'
      },
      {
        id: 24,
        title: 'Supporting a Loved One with Depression',
        description: 'Practical advice for family and friends on how to provide meaningful support.',
        author: 'Jake Morrison',
        date: '8 Jan 2024',
        category: 'Depression Support'
      },
      {
        id: 25,
        title: 'Depression in the Workplace',
        description: 'Managing depression while maintaining professional responsibilities and seeking accommodations.',
        author: 'Olivia Reed',
        date: '6 Jan 2024',
        category: 'Depression Support'
      },
      {
        id: 26,
        title: 'Seasonal Affective Disorder',
        description: 'Understanding and treating depression that occurs during specific seasons.',
        author: 'Dr. Mark Stevens',
        date: '4 Jan 2024',
        category: 'Depression Support'
      },
      {
        id: 27,
        title: 'Depression and Sleep Patterns',
        description: 'The relationship between depression and sleep, plus strategies for improving sleep hygiene.',
        author: 'Amy Liu',
        date: '2 Jan 2024',
        category: 'Depression Support'
      },
      {
        id: 28,
        title: 'Therapy Options for Depression',
        description: 'Overview of different therapeutic approaches including CBT, DBT, and interpersonal therapy.',
        author: 'Dr. Sam Rodriguez',
        date: '31 Dec 2023',
        category: 'Depression Support'
      },
      {
        id: 29,
        title: 'Building Hope During Depression',
        description: 'Strategies for maintaining hope and finding meaning during difficult periods of depression.',
        author: 'Elena Kowalski',
        date: '29 Dec 2023',
        category: 'Depression Support'
      }
    ],
    'Stress Relief': [
      {
        id: 30,
        title: 'Identifying Your Stress Triggers',
        description: 'Learn to recognize what causes stress in your life and develop personalized coping strategies.',
        author: 'Dr. Kevin Wong',
        date: '15 Jan 2024',
        category: 'Stress Relief'
      },
      {
        id: 31,
        title: 'Quick Stress Relief Techniques',
        description: 'Five-minute techniques you can use anywhere to immediately reduce stress and tension.',
        author: 'Laura Miller',
        date: '13 Jan 2024',
        category: 'Stress Relief'
      },
      {
        id: 32,
        title: 'Workplace Stress Management',
        description: 'Strategies for managing stress at work and creating healthier work-life boundaries.',
        author: 'Daniel Chen',
        date: '11 Jan 2024',
        category: 'Stress Relief'
      },
      {
        id: 33,
        title: 'Time Management for Stress Reduction',
        description: 'Effective time management techniques that reduce overwhelm and increase productivity.',
        author: 'Dr. Maya Foster',
        date: '9 Jan 2024',
        category: 'Stress Relief'
      },
      {
        id: 34,
        title: 'Physical Exercise for Stress Relief',
        description: 'How different types of physical activity can help reduce stress hormones and improve mood.',
        author: 'Tom Anderson',
        date: '7 Jan 2024',
        category: 'Stress Relief'
      },
      {
        id: 35,
        title: 'Chronic Stress and Health Impact',
        description: 'Understanding how long-term stress affects your body and mind, and prevention strategies.',
        author: 'Dr. Anna Wilson',
        date: '5 Jan 2024',
        category: 'Stress Relief'
      },
      {
        id: 36,
        title: 'Creating a Stress-Free Environment',
        description: 'How to organize your living and working spaces to minimize stress and promote calm.',
        author: 'Mike Davis',
        date: '3 Jan 2024',
        category: 'Stress Relief'
      },
      {
        id: 37,
        title: 'Stress and Relationships',
        description: 'How stress affects relationships and communication strategies for reducing interpersonal tension.',
        author: 'Dr. Lisa Chang',
        date: '1 Jan 2024',
        category: 'Stress Relief'
      },
      {
        id: 38,
        title: 'Financial Stress Management',
        description: 'Practical approaches to managing financial anxiety and creating financial wellness plans.',
        author: 'James Park',
        date: '30 Dec 2023',
        category: 'Stress Relief'
      },
      {
        id: 39,
        title: 'Technology Detox for Stress Relief',
        description: 'How constant connectivity contributes to stress and strategies for healthy technology use.',
        author: 'Dr. Rachel Martinez',
        date: '28 Dec 2023',
        category: 'Stress Relief'
      }
    ],
    'Mindfulness & Meditation': [
      {
        id: 40,
        title: 'Mindfulness for Beginners',
        description: 'Simple introduction to mindfulness practice with basic exercises you can start today.',
        author: 'Dr. David Park',
        date: '14 Jan 2024',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 41,
        title: 'Walking Meditation Techniques',
        description: 'How to turn your daily walks into mindful meditation practice for mental clarity.',
        author: 'Maria Rodriguez',
        date: '12 Jan 2024',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 42,
        title: 'Body Scan Meditation Guide',
        description: 'Step-by-step instructions for body scan meditation to increase body awareness and relaxation.',
        author: 'Dr. Alex Kim',
        date: '10 Jan 2024',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 43,
        title: 'Mindful Eating for Mental Health',
        description: 'Using mindfulness to develop a healthier relationship with food and eating habits.',
        author: 'Nina Thompson',
        date: '8 Jan 2024',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 44,
        title: 'Loving-Kindness Meditation',
        description: 'Cultivating compassion for yourself and others through loving-kindness meditation practice.',
        author: 'Dr. Carlos Lee',
        date: '6 Jan 2024',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 45,
        title: 'Mindfulness at Work',
        description: 'Incorporating mindfulness practices into your workday to reduce stress and increase focus.',
        author: 'Sophie Johnson',
        date: '4 Jan 2024',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 46,
        title: 'Meditation Apps and Tools',
        description: 'Review of popular meditation apps and tools to support your mindfulness practice.',
        author: 'Jake Wilson',
        date: '2 Jan 2024',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 47,
        title: 'Mindful Parenting Strategies',
        description: 'How to use mindfulness to become a more present and patient parent.',
        author: 'Dr. Emma Foster',
        date: '31 Dec 2023',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 48,
        title: 'Breathing Meditation Techniques',
        description: 'Various breathing meditation methods for different goals like relaxation, focus, and energy.',
        author: 'Mark Brown',
        date: '29 Dec 2023',
        category: 'Mindfulness & Meditation'
      },
      {
        id: 49,
        title: 'Creating a Meditation Space',
        description: 'How to set up a dedicated meditation space in your home to support regular practice.',
        author: 'Dr. Amy Chen',
        date: '27 Dec 2023',
        category: 'Mindfulness & Meditation'
      }
    ],
    'Therapy & Counseling': [
      {
        id: 50,
        title: 'Types of Therapy Explained',
        description: 'Overview of different therapeutic approaches including CBT, DBT, psychodynamic, and humanistic therapy.',
        author: 'Dr. Jennifer Lee',
        date: '13 Jan 2024',
        category: 'Therapy & Counseling'
      },
      {
        id: 51,
        title: 'Finding the Right Therapist',
        description: 'How to research, interview, and choose a therapist who is the right fit for your needs.',
        author: 'Robert Taylor',
        date: '11 Jan 2024',
        category: 'Therapy & Counseling'
      },
      {
        id: 52,
        title: 'Preparing for Your First Therapy Session',
        description: 'What to expect and how to make the most of your initial therapy appointment.',
        author: 'Dr. Maya Singh',
        date: '9 Jan 2024',
        category: 'Therapy & Counseling'
      },
      {
        id: 53,
        title: 'Online Therapy vs In-Person',
        description: 'Comparing the benefits and drawbacks of virtual and traditional in-person therapy.',
        author: 'Chris Walker',
        date: '7 Jan 2024',
        category: 'Therapy & Counseling'
      },
      {
        id: 54,
        title: 'Group Therapy Benefits',
        description: 'How group therapy sessions can provide unique support and healing opportunities.',
        author: 'Dr. Priya Sharma',
        date: '5 Jan 2024',
        category: 'Therapy & Counseling'
      },
      {
        id: 55,
        title: 'Therapy for Couples and Families',
        description: 'When and how relationship therapy can help improve family dynamics and communication.',
        author: 'Dr. Jake Morrison',
        date: '3 Jan 2024',
        category: 'Therapy & Counseling'
      },
      {
        id: 56,
        title: 'Making Progress in Therapy',
        description: 'How to track your therapeutic progress and communicate effectively with your therapist.',
        author: 'Olivia Reed',
        date: '1 Jan 2024',
        category: 'Therapy & Counseling'
      },
      {
        id: 57,
        title: 'Therapy Homework and Exercises',
        description: 'Understanding and completing therapeutic assignments to accelerate your healing journey.',
        author: 'Dr. Mark Stevens',
        date: '30 Dec 2023',
        category: 'Therapy & Counseling'
      },
      {
        id: 58,
        title: 'Insurance and Therapy Costs',
        description: 'Navigating insurance coverage for mental health services and finding affordable therapy options.',
        author: 'Amy Liu',
        date: '28 Dec 2023',
        category: 'Therapy & Counseling'
      },
      {
        id: 59,
        title: 'When to End Therapy',
        description: 'Recognizing when you have achieved your therapeutic goals and how to maintain progress.',
        author: 'Dr. Sam Rodriguez',
        date: '26 Dec 2023',
        category: 'Therapy & Counseling'
      }
    ],
    'Self-Care': [
      {
        id: 60,
        title: 'Building a Self-Care Routine',
        description: 'How to create sustainable daily and weekly self-care practices that fit your lifestyle.',
        author: 'Elena Kowalski',
        date: '12 Jan 2024',
        category: 'Self-Care'
      },
      {
        id: 61,
        title: 'Self-Care on a Budget',
        description: 'Free and low-cost self-care activities that can significantly impact your mental wellness.',
        author: 'Dr. Kevin Wong',
        date: '10 Jan 2024',
        category: 'Self-Care'
      },
      {
        id: 62,
        title: 'Boundary Setting for Mental Health',
        description: 'Learning to say no and establish healthy boundaries in relationships and work.',
        author: 'Laura Miller',
        date: '8 Jan 2024',
        category: 'Self-Care'
      },
      {
        id: 63,
        title: 'Digital Self-Care Strategies',
        description: 'Managing social media and screen time to protect your mental health and well-being.',
        author: 'Daniel Chen',
        date: '6 Jan 2024',
        category: 'Self-Care'
      },
      {
        id: 64,
        title: 'Self-Compassion Practices',
        description: 'Techniques for treating yourself with kindness and understanding during difficult times.',
        author: 'Dr. Maya Foster',
        date: '4 Jan 2024',
        category: 'Self-Care'
      },
      {
        id: 65,
        title: 'Physical Self-Care Basics',
        description: 'How proper nutrition, exercise, and sleep form the foundation of mental wellness.',
        author: 'Tom Anderson',
        date: '2 Jan 2024',
        category: 'Self-Care'
      },
      {
        id: 66,
        title: 'Creative Self-Care Activities',
        description: 'Using art, music, writing, and other creative outlets for emotional expression and healing.',
        author: 'Dr. Anna Wilson',
        date: '31 Dec 2023',
        category: 'Self-Care'
      },
      {
        id: 67,
        title: 'Nature and Mental Health',
        description: 'The therapeutic benefits of spending time in nature and outdoor self-care activities.',
        author: 'Mike Davis',
        date: '29 Dec 2023',
        category: 'Self-Care'
      },
      {
        id: 68,
        title: 'Self-Care for Busy People',
        description: 'Quick self-care strategies that can be incorporated into even the most hectic schedules.',
        author: 'Dr. Lisa Chang',
        date: '27 Dec 2023',
        category: 'Self-Care'
      },
      {
        id: 69,
        title: 'Emotional Self-Care Techniques',
        description: 'Tools for processing emotions healthily and building emotional resilience.',
        author: 'James Park',
        date: '25 Dec 2023',
        category: 'Self-Care'
      }
    ],
    'Sleep & Mental Health': [
      {
        id: 70,
        title: 'Sleep Hygiene for Better Mental Health',
        description: 'Essential sleep habits that support mental wellness and cognitive function.',
        author: 'Dr. Rachel Martinez',
        date: '11 Jan 2024',
        category: 'Sleep & Mental Health'
      },
      {
        id: 71,
        title: 'Insomnia and Anxiety Connection',
        description: 'Understanding how sleep problems and anxiety feed into each other and breaking the cycle.',
        author: 'Dr. David Park',
        date: '9 Jan 2024',
        category: 'Sleep & Mental Health'
      },
      {
        id: 72,
        title: 'Creating a Bedtime Routine',
        description: 'Step-by-step guide to developing evening rituals that promote restful sleep.',
        author: 'Maria Rodriguez',
        date: '7 Jan 2024',
        category: 'Sleep & Mental Health'
      },
      {
        id: 73,
        title: 'Sleep Environment Optimization',
        description: 'How to set up your bedroom for the best possible sleep quality and mental restoration.',
        author: 'Dr. Alex Kim',
        date: '5 Jan 2024',
        category: 'Sleep & Mental Health'
      },
      {
        id: 74,
        title: 'Dreams and Mental Processing',
        description: 'The role of dreams in emotional processing and what your sleep patterns reveal about mental health.',
        author: 'Nina Thompson',
        date: '3 Jan 2024',
        category: 'Sleep & Mental Health'
      },
      {
        id: 75,
        title: 'Napping and Mental Energy',
        description: 'Strategic napping techniques to boost mood and cognitive performance without disrupting nighttime sleep.',
        author: 'Dr. Carlos Lee',
        date: '1 Jan 2024',
        category: 'Sleep & Mental Health'
      },
      {
        id: 76,
        title: 'Sleep Disorders and Depression',
        description: 'How sleep apnea, restless leg syndrome, and other sleep disorders impact mental health.',
        author: 'Sophie Johnson',
        date: '30 Dec 2023',
        category: 'Sleep & Mental Health'
      },
      {
        id: 77,
        title: 'Technology and Sleep Quality',
        description: 'Managing blue light exposure and screen time to improve sleep and mental well-being.',
        author: 'Jake Wilson',
        date: '28 Dec 2023',
        category: 'Sleep & Mental Health'
      },
      {
        id: 78,
        title: 'Natural Sleep Aids for Mental Health',
        description: 'Herbal remedies, supplements, and natural approaches to improving sleep quality.',
        author: 'Dr. Emma Foster',
        date: '26 Dec 2023',
        category: 'Sleep & Mental Health'
      },
      {
        id: 79,
        title: 'Shift Work and Mental Health',
        description: 'Strategies for maintaining mental wellness when working non-traditional hours.',
        author: 'Mark Brown',
        date: '24 Dec 2023',
        category: 'Sleep & Mental Health'
      }
    ],
    'Relationships': [
      {
        id: 80,
        title: 'Healthy Communication in Relationships',
        description: 'Essential communication skills for building stronger, more supportive relationships.',
        author: 'Dr. Amy Chen',
        date: '10 Jan 2024',
        category: 'Relationships'
      },
      {
        id: 81,
        title: 'Setting Boundaries with Family',
        description: 'How to establish and maintain healthy boundaries with family members for better mental health.',
        author: 'Dr. Jennifer Lee',
        date: '8 Jan 2024',
        category: 'Relationships'
      },
      {
        id: 82,
        title: 'Supporting Friends with Mental Health Issues',
        description: 'How to be a helpful friend while maintaining your own mental wellness and boundaries.',
        author: 'Robert Taylor',
        date: '6 Jan 2024',
        category: 'Relationships'
      },
      {
        id: 83,
        title: 'Toxic Relationships and Mental Health',
        description: 'Identifying unhealthy relationship patterns and strategies for protecting your mental well-being.',
        author: 'Dr. Maya Singh',
        date: '4 Jan 2024',
        category: 'Relationships'
      },
      {
        id: 84,
        title: 'Building Social Connections',
        description: 'Overcoming social anxiety and loneliness to create meaningful friendships and community.',
        author: 'Chris Walker',
        date: '2 Jan 2024',
        category: 'Relationships'
      },
      {
        id: 85,
        title: 'Conflict Resolution Skills',
        description: 'Healthy ways to address disagreements and resolve conflicts in personal relationships.',
        author: 'Dr. Priya Sharma',
        date: '31 Dec 2023',
        category: 'Relationships'
      },
      {
        id: 86,
        title: 'Mental Health in Romantic Relationships',
        description: 'How to maintain individual mental wellness while building a healthy partnership.',
        author: 'Dr. Jake Morrison',
        date: '29 Dec 2023',
        category: 'Relationships'
      },
      {
        id: 87,
        title: 'Workplace Relationships and Mental Health',
        description: 'Navigating professional relationships and office dynamics for better workplace mental health.',
        author: 'Olivia Reed',
        date: '27 Dec 2023',
        category: 'Relationships'
      },
      {
        id: 88,
        title: 'Parenting and Mental Health',
        description: 'Maintaining your mental wellness while raising children and supporting their emotional development.',
        author: 'Dr. Mark Stevens',
        date: '25 Dec 2023',
        category: 'Relationships'
      },
      {
        id: 89,
        title: 'Long-Distance Relationships and Mental Health',
        description: 'Strategies for maintaining emotional connection and mental wellness in long-distance relationships.',
        author: 'Amy Liu',
        date: '23 Dec 2023',
        category: 'Relationships'
      }
    ],
    'Trauma Recovery': [
      {
        id: 90,
        title: 'Understanding Trauma Responses',
        description: 'Learning about fight, flight, freeze, and fawn responses to better understand your reactions.',
        author: 'Dr. Sam Rodriguez',
        date: '9 Jan 2024',
        category: 'Trauma Recovery'
      },
      {
        id: 91,
        title: 'EMDR Therapy for Trauma',
        description: 'How Eye Movement Desensitization and Reprocessing therapy helps process traumatic memories.',
        author: 'Elena Kowalski',
        date: '7 Jan 2024',
        category: 'Trauma Recovery'
      },
      {
        id: 92,
        title: 'Complex PTSD vs PTSD',
        description: 'Understanding the differences between single-incident trauma and complex trauma from repeated experiences.',
        author: 'Dr. Kevin Wong',
        date: '5 Jan 2024',
        category: 'Trauma Recovery'
      },
      {
        id: 93,
        title: 'Somatic Approaches to Trauma Healing',
        description: 'Body-based therapies and techniques for processing trauma stored in the nervous system.',
        author: 'Laura Miller',
        date: '3 Jan 2024',
        category: 'Trauma Recovery'
      },
      {
        id: 94,
        title: 'Building Safety After Trauma',
        description: 'Creating physical and emotional safety as the foundation for trauma recovery.',
        author: 'Daniel Chen',
        date: '1 Jan 2024',
        category: 'Trauma Recovery'
      },
      {
        id: 95,
        title: 'Childhood Trauma and Adult Mental Health',
        description: 'How adverse childhood experiences impact adult mental health and relationships.',
        author: 'Dr. Maya Foster',
        date: '30 Dec 2023',
        category: 'Trauma Recovery'
      },
      {
        id: 96,
        title: 'Trauma-Informed Self-Care',
        description: 'Self-care practices specifically designed for trauma survivors and their unique needs.',
        author: 'Tom Anderson',
        date: '28 Dec 2023',
        category: 'Trauma Recovery'
      },
      {
        id: 97,
        title: 'Secondary Trauma Prevention',
        description: 'Protecting mental health when supporting others who have experienced trauma.',
        author: 'Dr. Anna Wilson',
        date: '26 Dec 2023',
        category: 'Trauma Recovery'
      },
      {
        id: 98,
        title: 'Post-Traumatic Growth and Resilience',
        description: 'How trauma survivors can develop increased strength, deeper relationships, and new perspectives.',
        author: 'Mike Davis',
        date: '24 Dec 2023',
        category: 'Trauma Recovery'
      },
      {
        id: 99,
        title: 'Trauma and Addiction Recovery',
        description: 'Understanding the connection between trauma and substance use, and integrated treatment approaches.',
        author: 'Dr. Lisa Chang',
        date: '22 Dec 2023',
        category: 'Trauma Recovery'
      }
    ],
    'Crisis Support': [
      {
        id: 100,
        title: 'Recognizing Mental Health Emergencies',
        description: 'How to identify when someone needs immediate professional intervention and crisis support.',
        author: 'James Park',
        date: '8 Jan 2024',
        category: 'Crisis Support'
      },
      {
        id: 101,
        title: 'Suicide Prevention Strategies',
        description: 'Warning signs, risk factors, and how to help someone who may be considering suicide.',
        author: 'Dr. Rachel Martinez',
        date: '6 Jan 2024',
        category: 'Crisis Support'
      },
      {
        id: 102,
        title: 'Crisis Hotlines and Resources',
        description: 'Comprehensive list of crisis intervention services and how to access immediate help.',
        author: 'Dr. David Park',
        date: '4 Jan 2024',
        category: 'Crisis Support'
      },
      {
        id: 103,
        title: 'Supporting Someone in Crisis',
        description: 'Practical steps for helping a friend or family member during a mental health crisis.',
        author: 'Maria Rodriguez',
        date: '2 Jan 2024',
        category: 'Crisis Support'
      },
      {
        id: 104,
        title: 'Emergency Room vs Crisis Centers',
        description: 'When to go to the ER versus specialized mental health crisis facilities.',
        author: 'Dr. Alex Kim',
        date: '31 Dec 2023',
        category: 'Crisis Support'
      },
      {
        id: 105,
        title: 'Creating a Safety Plan',
        description: 'How to develop a personalized crisis intervention plan for mental health emergencies.',
        author: 'Nina Thompson',
        date: '29 Dec 2023',
        category: 'Crisis Support'
      },
      {
        id: 106,
        title: 'After a Mental Health Crisis',
        description: 'Recovery steps and follow-up care after experiencing a mental health emergency.',
        author: 'Dr. Carlos Lee',
        date: '27 Dec 2023',
        category: 'Crisis Support'
      },
      {
        id: 107,
        title: 'Crisis Text and Chat Support',
        description: 'How to access crisis support through text messaging and online chat platforms.',
        author: 'Sophie Johnson',
        date: '25 Dec 2023',
        category: 'Crisis Support'
      },
      {
        id: 108,
        title: 'Mental Health First Aid',
        description: 'Basic skills for helping someone experiencing a mental health or addiction crisis.',
        author: 'Jake Wilson',
        date: '23 Dec 2023',
        category: 'Crisis Support'
      },
      {
        id: 109,
        title: 'Involuntary Commitment Laws',
        description: 'Understanding when and how involuntary psychiatric hospitalization works.',
        author: 'Dr. Emma Foster',
        date: '21 Dec 2023',
        category: 'Crisis Support'
      }
    ]
  };

  const currentArticles = articles[activeCategory] || [];
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
        {/* Header Section */}
        <div className="mb-30">
          {/* Badge */}
          <div className="mb-6">
            <span className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 inline-flex items-center">
              New mental health resources available →
            </span>
          </div>

          <div className="flex justify-between items-start">
            {/* Left side - Title and description */}
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-black mb-6">
                Mental Health Resources
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Discover evidence-based strategies, expert insights, and practical tools to support your mental wellness journey.
              </p>
              
              {/* Email subscription */}
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="🔍 Search mental health topics"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center cursor-pointer">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex gap-8">
          {/* Left Sidebar - Sticky */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-8">
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors hover:cursor-pointer ${
                      activeCategory === category
                        ? 'text-gray-900 font-medium bg-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area - Scrollable */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              {currentArticles.map((article) => (
                <ResourcePreviewCard key={article.id} article={article} buttonColors={buttonColors} />
              ))}
            </div>

            {/* Show message if no articles */}
            {currentArticles.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center col-span-2">
                <p className="text-gray-500 text-lg">No articles found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthResourcesPage;