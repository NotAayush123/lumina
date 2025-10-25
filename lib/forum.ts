// lib/forum.js
export const users = [
  { id: 1, name: 'Sarah M.', initials: 'SM', color: 'bg-blue-500' },
  { id: 2, name: 'Michael K.', initials: 'MK', color: 'bg-green-500' },
  { id: 3, name: 'Jessica L.', initials: 'JL', color: 'bg-purple-500' },
  { id: 4, name: 'David R.', initials: 'DR', color: 'bg-orange-500' },
  { id: 5, name: 'Emma W.', initials: 'EW', color: 'bg-pink-500' },
  { id: 6, name: 'James T.', initials: 'JT', color: 'bg-indigo-500' },
  { id: 7, name: 'Lisa C.', initials: 'LC', color: 'bg-red-500' },
  { id: 8, name: 'Ryan P.', initials: 'RP', color: 'bg-teal-500' },
  { id: 9, name: 'Anna K.', initials: 'AK', color: 'bg-yellow-500' },
  { id: 10, name: 'Marcus J.', initials: 'MJ', color: 'bg-cyan-500' }
];

export const categories = [
  { name: 'View all', color: 'bg-gray-400' },
  { name: 'Anxiety Management', color: 'bg-blue-500' },
  { name: 'Depression Support', color: 'bg-purple-500' },
  { name: 'Stress Relief', color: 'bg-green-500' },
  { name: 'Mindfulness & Meditation', color: 'bg-teal-500' },
  { name: 'Therapy & Counseling', color: 'bg-indigo-500' },
  { name: 'Self-Care', color: 'bg-pink-500' },
  { name: 'Sleep & Mental Health', color: 'bg-violet-500' },
  { name: 'Relationships', color: 'bg-orange-500' },
  { name: 'Trauma Recovery', color: 'bg-red-500' },
  { name: 'Crisis Support', color: 'bg-rose-500' }
];

export const discussionsData = [
  {
    id: 1,
    title: 'Share Your Self-Care Routine',
    author: users[0],
    timeAgo: '5 minutes ago',
    preview: 'Hey everyone, new member here! I wanted to start by sharing what helps me and hearing what works for you. My routine includes morning meditation, journaling, and a short walk outside...',
    category: 'Self-Care',
    categoryColor: 'bg-pink-500',
    participants: [users[0], users[2], users[4], users[6]],
    comments: 23,
    views: 342,
    featured: true,
    content: `Hey everyone, new member here! 

I wanted to start by sharing what helps me and hearing what works for you. My routine includes:

1. **Morning meditation** (10 minutes) - I use the Calm app
2. **Journaling** - Just 3 things I'm grateful for
3. **Short walk outside** - Even 15 minutes helps clear my head
4. **Evening wind-down** - No screens 30 min before bed

I've been doing this for about 2 months and I'm noticing a real difference in my anxiety levels. Some days I skip things and that's okay too - progress not perfection!

What does your self-care routine look like? I'd love to hear what works for you all.`
  },
  {
    id: 2,
    title: 'Coping strategies for anxiety attacks',
    author: users[1],
    timeAgo: '2 hours ago',
    preview: "I've been working with my therapist on grounding techniques. The 5-4-3-2-1 method has been really helpful - can anyone share what works for them during panic attacks?",
    category: 'Anxiety Management',
    categoryColor: 'bg-blue-500',
    participants: [users[1], users[3], users[5], users[7]],
    comments: 16,
    views: 289,
    featured: false,
    content: `I've been working with my therapist on grounding techniques for anxiety attacks, and I wanted to share what's been helping me while also learning from your experiences.

**The 5-4-3-2-1 method** has been a game-changer for me:
- **5** things you can see
- **4** things you can touch  
- **3** things you can hear
- **2** things you can smell
- **1** thing you can taste

This really helps bring me back to the present moment when I feel an attack coming on.

Other techniques that help:
- **Breathing exercises**: 4-7-8 breathing (inhale 4, hold 7, exhale 8)
- **Cold sensation**: Holding ice cubes or splashing cold water on my face
- **Movement**: Gentle stretching or walking

What coping strategies work best for you during panic attacks? I'm always looking to add more tools to my toolkit.`
  },
  {
    id: 3,
    title: 'Finding a therapist that fits',
    author: users[2],
    timeAgo: '1 hour ago',
    preview: 'Just now starting to look for a therapist and feeling overwhelmed. What websites or resources did you use? How did you know when you found the right fit?',
    category: 'Therapy & Counseling',
    categoryColor: 'bg-indigo-500',
    participants: [users[2], users[4], users[6], users[8]],
    comments: 8,
    views: 156,
    featured: false,
    content: `I'm taking the first steps to find a therapist and honestly, it feels overwhelming. There are so many options and I don't know where to start.

**My main questions:**
- What websites or directories did you use to find therapists?
- How many therapists did you try before finding the right one?
- What questions should I ask in a first session?
- How did you know when you found the right fit?

I'm specifically looking for someone who specializes in anxiety and uses CBT techniques, but I'm open to learning about different approaches.

Any advice would be greatly appreciated!`
  },
  {
    id: 4,
    title: 'Managing work stress and burnout',
    author: users[3],
    timeAgo: '3 hours ago',
    preview: 'Has anyone dealt with burnout while trying to maintain their job? Looking for advice on setting boundaries and taking care of mental health at work without sacrificing career...',
    category: 'Stress Relief',
    categoryColor: 'bg-green-500',
    participants: [users[3], users[5], users[7], users[9]],
    comments: 12,
    views: 234,
    featured: false,
    content: `I've been struggling with work-related burnout for the past few months. The constant pressure, long hours, and blurred work-life boundaries are really taking a toll on my mental health.

**My current challenges:**
- Working 50-60 hour weeks regularly
- Difficulty disconnecting after work
- Feeling guilty when I take breaks
- Physical symptoms like headaches and fatigue

**What I've tried:**
- Setting "no work email" hours after 7 PM
- Taking short walks during the day
- Using the Pomodoro technique for focus

Has anyone successfully navigated burnout while maintaining their career? How did you set boundaries without jeopardizing your job? Looking for practical advice that actually works in the real world.`
  },
  {
    id: 5,
    title: 'Meditation apps that actually work',
    author: users[4],
    timeAgo: '4 hours ago',
    preview: "I've tried Headspace and Calm but looking for other recommendations. What meditation or mindfulness apps have genuinely helped your mental health journey?",
    category: 'Mindfulness & Meditation',
    categoryColor: 'bg-teal-500',
    participants: [users[4], users[6], users[8], users[0]],
    comments: 19,
    views: 198,
    featured: false,
    content: `I've been using meditation apps on and off for about a year, but I'm struggling to find one that really clicks with me.

**What I've tried:**
- **Headspace**: Liked the structure but found it a bit repetitive
- **Calm**: Great sleep stories but the daily meditations didn't resonate
- **Insight Timer**: So many options it felt overwhelming

**What I'm looking for:**
- Guided meditations for anxiety
- Short sessions (5-10 minutes)
- Progress tracking
- Affordable pricing (or good free version)

What apps have genuinely helped you build a consistent meditation practice? I'm particularly interested in apps that are good for beginners who struggle with consistency.`
  }
];

// Additional discussions for more content
export const additionalDiscussions = [
  {
    id: 6,
    title: 'Dealing with seasonal depression',
    author: users[5],
    timeAgo: '5 hours ago',
    preview: 'Every winter I struggle more with my depression. Does anyone have tips for managing seasonal affective disorder? Considering a light therapy lamp...',
    category: 'Depression Support',
    categoryColor: 'bg-purple-500',
    participants: [users[5], users[7], users[9], users[1]],
    comments: 14,
    views: 167,
    featured: false,
    content: `Every winter, like clockwork, my depression gets significantly worse. I've been diagnosed with Seasonal Affective Disorder (SAD) and I'm looking for practical ways to manage it.

**Symptoms I experience:**
- Low energy and fatigue
- Difficulty waking up in the morning
- Increased appetite, especially for carbs
- Social withdrawal

**What I'm considering:**
- Light therapy lamp (any recommendations?)
- Vitamin D supplements
- Trying to maintain exercise routine
- Planning social activities in advance

Has anyone found effective strategies for managing seasonal depression? I'd love to hear what's worked for you, especially during these dark winter months.`
  },
  {
    id: 7,
    title: 'Sleep schedule completely disrupted',
    author: users[6],
    timeAgo: '6 hours ago',
    preview: "Can't fall asleep until 3am and then can't wake up. My mental health is suffering from this cycle. What has helped you regulate your sleep?",
    category: 'Sleep & Mental Health',
    categoryColor: 'bg-violet-500',
    participants: [users[6], users[8], users[0], users[2]],
    comments: 21,
    views: 278,
    featured: false,
    content: `My sleep schedule has been completely off for weeks. I can't fall asleep until 3-4 AM, then I struggle to wake up before noon. This is really impacting my mental health and daily functioning.

**What I've tried:**
- No screens 1 hour before bed
- Reading instead of phone scrolling
- Consistent wake-up time (even on weekends)
- Melatonin supplements

**Current challenges:**
- Racing thoughts when trying to sleep
- Anxiety about not being able to sleep
- Daytime fatigue affecting work
- Missing morning appointments

What sleep strategies have actually worked for you when dealing with severe sleep schedule disruptions? I'm open to any suggestions at this point.`
  }
];

// Comments data for discussions
export const commentsData = {
  1: [
    {
      id: 1,
      author: users[2], // Jessica L.
      timeAgo: '3 minutes ago',
      content: 'This is so helpful! I love the **"progress not perfection"** mindset. I struggle with being too hard on myself when I miss a day. Your morning routine sounds really doable - I think I\'ll try adding just 5 minutes of meditation to start.',
      likes: 5
    },
    {
      id: 2,
      author: users[1], // Michael K.
      timeAgo: '15 minutes ago',
      content: 'Welcome! My therapist recommended the gratitude journal too. I do mine at night before bed. Also started using the Headspace app for guided meditations - highly recommend if you want to try something different from Calm.',
      likes: 8
    },
    {
      id: 3,
      author: users[4], // Emma W.
      timeAgo: '1 hour ago',
      content: 'The evening wind-down is so important! I used to scroll on my phone right before bed and my sleep was terrible. Now I read or do some light stretching instead. Game changer for my mental health.',
      likes: 12
    },
    {
      id: 4,
      author: users[3], // David R.
      timeAgo: '2 hours ago',
      content: `Great routine! Here's mine:
- Morning: 20 min yoga + breathing exercises
- Lunch break: Walk around the block (helps with work stress)
- Evening: Cook a proper meal (therapeutic for me)
- Night: Read for 30 min

The key for me was starting small. I began with just 5 min of yoga and built from there.`,
      likes: 15
    },
    {
      id: 5,
      author: users[6], // Lisa C.
      timeAgo: '3 hours ago',
      content: 'Does anyone else find it hard to stick to routines when depression hits? I have a routine I love but some weeks I can barely get out of bed. Any tips for maintaining self-care during the really tough days?',
      likes: 9
    },
    {
      id: 6,
      author: users[7], // Ryan P.
      timeAgo: '4 hours ago',
      content: 'I love this thread! My routine includes:\n\n1. **Morning pages** (3 pages of stream-of-consciousness writing)\n2. **10-minute walk** with my dog\n3. **Evening reflection** - what went well today?\n\nIt\'s amazing how small consistent actions add up!',
      likes: 7
    },
    {
      id: 7,
      author: users[8], // Anna K.
      timeAgo: '5 hours ago',
      content: 'Thank you for sharing! I\'ve been struggling with consistency but your approach of "progress not perfection" really resonates. Starting with just 5 minutes of meditation tomorrow morning!',
      likes: 4
    }
  ],
  2: [
    {
      id: 1,
      author: users[0],
      timeAgo: '30 minutes ago',
      content: 'The **5-4-3-2-1 method** saved me during my last panic attack. Another thing that helps me is naming things by color in the room - "blue chair, red book, green plant" etc.',
      likes: 7
    },
    {
      id: 2,
      author: users[7],
      timeAgo: '1 hour ago',
      content: 'I carry a small sensory kit with me: a smooth stone, something textured, and a strong mint. Having physical objects to focus on really helps ground me.',
      likes: 11
    },
    {
      id: 3,
      author: users[3],
      timeAgo: '2 hours ago',
      content: 'The **4-7-8 breathing** technique has been a game changer for me. I learned it from my therapist and it really helps calm my nervous system during anxiety attacks.',
      likes: 9
    },
    {
      id: 4,
      author: users[5],
      timeAgo: '3 hours ago',
      content: 'I use the **"54321" grounding technique** but I also add temperature - holding something cold like an ice cube really helps bring me back to the present moment.',
      likes: 6
    },
    {
      id: 5,
      author: users[9],
      timeAgo: '4 hours ago',
      content: 'Thank you for sharing these techniques! I\'ve been struggling with anxiety for months and these practical tools are exactly what I needed. Going to try the sensory kit idea.',
      likes: 8
    }
  ],
  3: [
    {
      id: 1,
      author: users[4],
      timeAgo: '45 minutes ago',
      content: 'I used **Psychology Today\'s therapist finder** and found my current therapist there. It took me 3 tries to find the right fit, but it was worth the search!',
      likes: 5
    },
    {
      id: 2,
      author: users[6],
      timeAgo: '1 hour ago',
      content: '**Questions I asked in my first session:**\n- What\'s your approach to therapy?\n- How do you handle crisis situations?\n- What can I expect from our sessions?\n\nTrust your gut - you\'ll know if it\'s a good fit!',
      likes: 12
    },
    {
      id: 3,
      author: users[1],
      timeAgo: '2 hours ago',
      content: 'I tried 4 different therapists before finding the right one. Don\'t give up! Each one taught me something about what I needed in a therapeutic relationship.',
      likes: 8
    }
  ],
  4: [
    {
      id: 1,
      author: users[2],
      timeAgo: '1 hour ago',
      content: 'I\'ve been there! **Setting boundaries** was crucial for me. I now have "no work emails after 6 PM" and "no weekend work" rules. It was scary at first but my mental health improved dramatically.',
      likes: 15
    },
    {
      id: 2,
      author: users[8],
      timeAgo: '2 hours ago',
      content: '**Micro-breaks** throughout the day help me a lot. Even just 2-3 minutes of deep breathing between meetings makes a huge difference in my stress levels.',
      likes: 7
    },
    {
      id: 3,
      author: users[0],
      timeAgo: '3 hours ago',
      content: 'I started using the **Pomodoro technique** and it\'s been a game changer! 25 minutes of focused work, then 5 minutes of rest. It helps me feel more in control of my time.',
      likes: 10
    }
  ],
  5: [
    {
      id: 1,
      author: users[3],
      timeAgo: '1 hour ago',
      content: 'I love **Insight Timer**! It\'s free and has thousands of guided meditations. The community aspect is really nice too - you can see how many people are meditating with you.',
      likes: 9
    },
    {
      id: 2,
      author: users[7],
      timeAgo: '2 hours ago',
      content: '**Waking Up** by Sam Harris is excellent for beginners. It has a 28-day introductory course that really helped me build a consistent practice.',
      likes: 6
    },
    {
      id: 3,
      author: users[1],
      timeAgo: '3 hours ago',
      content: 'I use **Ten Percent Happier** - it\'s specifically designed for skeptics and beginners. The app has a great balance of education and practice.',
      likes: 8
    }
  ],
  6: [
    {
      id: 1,
      author: users[4],
      timeAgo: '2 hours ago',
      content: 'I use a **light therapy lamp** every morning for 30 minutes and it\'s made a huge difference! I got mine from Amazon for about $50. It really helps with the winter blues.',
      likes: 12
    },
    {
      id: 2,
      author: users[2],
      timeAgo: '3 hours ago',
      content: '**Vitamin D supplements** have been crucial for me during winter months. I also try to get outside during daylight hours, even if it\'s just for 10 minutes.',
      likes: 7
    }
  ],
  7: [
    {
      id: 1,
      author: users[1],
      timeAgo: '1 hour ago',
      content: 'I had the same issue! **Sleep restriction therapy** helped me reset my schedule. I only allowed myself to sleep during a 6-hour window until my body adjusted.',
      likes: 8
    },
    {
      id: 2,
      author: users[5],
      timeAgo: '2 hours ago',
      content: '**Blue light blocking glasses** in the evening really helped me fall asleep earlier. I wear them starting at 8 PM and it made a noticeable difference.',
      likes: 6
    },
    {
      id: 3,
      author: users[9],
      timeAgo: '3 hours ago',
      content: '**Magnesium supplements** before bed have been a game changer for my sleep quality. I also use a weighted blanket which helps with anxiety.',
      likes: 9
    }
  ]
};

// Helper function to find discussion by ID
export const findDiscussionById = (id: string | number) => {
  const discussionId = parseInt(id.toString());
  const allDiscussions = [...discussionsData, ...additionalDiscussions];
  const discussion = allDiscussions.find(d => d.id === discussionId);
  
  if (discussion) {
    // Safely access commentsData with proper error handling
    const discussionComments = commentsData[discussionId as keyof typeof commentsData];
    return {
      ...discussion,
      commentsData: discussionComments || []
    };
  }
  
  // Return first discussion as fallback with safe comment access
  const fallbackComments = commentsData[1 as keyof typeof commentsData];
  return {
    ...discussionsData[0],
    commentsData: fallbackComments || []
  };
};

// Helper function to get all discussions
export const getAllDiscussions = () => {
  return [...discussionsData, ...additionalDiscussions];
};

// Helper function to get category color
export const getCategoryColor = (categoryName: string) => {
  const category = categories.find(cat => cat.name === categoryName);
  return category ? category.color : 'bg-gray-400';
};