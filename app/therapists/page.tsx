"use client";

import React, { useState } from 'react';

const TherapistDirectory = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [selectedApproach, setSelectedApproach] = useState('All Approaches');

  const therapists = [
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
      acceptingNew: true
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
      acceptingNew: true
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
      acceptingNew: true
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
      acceptingNew: false
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
      acceptingNew: true
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
      acceptingNew: true
    },
    {
      id: 7,
      name: 'Dr. James Foster',
      credentials: 'MD, Psychiatrist',
      specialty: ['Medication Management', 'Bipolar Disorder', 'Depression'],
      approach: 'Integrative Psychiatry',
      yearsExperience: 18,
      languages: ['English', 'French'],
      availability: 'Limited',
      bio: 'Combining medication management with therapeutic support for comprehensive mental health care.',
      acceptingNew: true
    },
    {
      id: 8,
      name: 'Nina Patel',
      credentials: 'LMHC, Licensed Mental Health Counselor',
      specialty: ['Eating Disorders', 'Body Image', 'Anxiety'],
      approach: 'Dialectical Behavior Therapy (DBT)',
      yearsExperience: 6,
      languages: ['English', 'Hindi'],
      availability: 'Available',
      bio: 'Specialized in eating disorder recovery and body image work using DBT and mindfulness techniques.',
      acceptingNew: true
    },
    {
      id: 9,
      name: 'Dr. Michael Harris',
      credentials: 'PhD, Clinical Psychologist',
      specialty: ['ADHD', 'Executive Functioning', 'Career Counseling'],
      approach: 'Cognitive Behavioral Therapy (CBT)',
      yearsExperience: 11,
      languages: ['English'],
      availability: 'Available',
      bio: 'Helping adults with ADHD develop organizational skills and navigate career challenges.',
      acceptingNew: true
    },
    {
      id: 10,
      name: 'Elena Kowalski',
      credentials: 'LCSW, Clinical Social Worker',
      specialty: ['Grief', 'Loss', 'Life Transitions'],
      approach: 'Person-Centered Therapy',
      yearsExperience: 14,
      languages: ['English', 'Polish'],
      availability: 'Waitlist',
      bio: 'Compassionate support through grief and major life transitions, honoring each person\'s unique journey.',
      acceptingNew: false
    },
    {
      id: 11,
      name: 'Dr. Amanda Brooks',
      credentials: 'PsyD, Licensed Psychologist',
      specialty: ['Chronic Pain', 'Health Psychology', 'Stress'],
      approach: 'Acceptance and Commitment Therapy (ACT)',
      yearsExperience: 10,
      languages: ['English'],
      availability: 'Available',
      bio: 'Specializing in the intersection of physical and mental health, helping clients manage chronic conditions.',
      acceptingNew: true
    },
    {
      id: 12,
      name: 'Carlos Martinez',
      credentials: 'LMFT, Marriage and Family Therapist',
      specialty: ['Teen Counseling', 'Family Conflict', 'Behavioral Issues'],
      approach: 'Family Systems Therapy',
      yearsExperience: 13,
      languages: ['English', 'Spanish'],
      availability: 'Limited',
      bio: 'Working with adolescents and their families to improve communication and resolve conflicts.',
      acceptingNew: true
    }
  ];

  const specialties = ['All Specialties', 'Anxiety', 'Depression', 'Trauma', 'Relationship Issues', 'PTSD', 'OCD'];
  const approaches = ['All Approaches', 'CBT', 'EMDR', 'DBT', 'Psychodynamic Therapy', 'ACT'];

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || therapist.specialty.includes(selectedSpecialty);
    const matchesApproach = selectedApproach === 'All Approaches' || therapist.approach.includes(selectedApproach);
    return matchesSpecialty && matchesApproach;
  });

  const getAvailabilityColor = (availability) => {
    switch(availability) {
      case 'Available': return 'bg-green-100 text-green-700';
      case 'Limited': return 'bg-yellow-100 text-yellow-700';
      case 'Waitlist': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    
           <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
    <div className="min-h-screen">
        <div className="mb-30">
          {/* Badge */}
          <div className="mb-6">
            <span className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 inline-flex items-center">
              New mental health discussions →
            </span>
          </div>

          <div className="flex justify-between items-start">
            {/* Left side - Title and description */}
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-black mb-6">
                Find Your Therapist
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Connect with experienced mental health professionals who can support your journey to wellness.
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

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
              <select 
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Therapy Approach</label>
              <select 
                value={selectedApproach}
                onChange={(e) => setSelectedApproach(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {approaches.map(approach => (
                  <option key={approach} value={approach}>{approach}</option>
                ))}
              </select>
            </div>

            {(selectedSpecialty !== 'All Specialties' || selectedApproach !== 'All Approaches') && (
              <button 
                onClick={() => {
                  setSelectedSpecialty('All Specialties');
                  setSelectedApproach('All Approaches');
                }}
                className="self-end px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Clear Filters
              </button>
            )}
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Showing {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Therapist Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTherapists.map(therapist => (
            <div key={therapist.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              {/* Avatar */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {therapist.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(therapist.availability)}`}>
                  {therapist.availability}
                </span>
              </div>

              {/* Name & Credentials */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{therapist.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{therapist.credentials}</p>

              {/* Specialty Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {therapist.specialty.map((spec, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                    {spec}
                  </span>
                ))}
              </div>

              {/* Approach */}
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Approach:</span> {therapist.approach}
                </p>
              </div>

              {/* Bio */}
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">{therapist.bio}</p>

              {/* Details */}
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{therapist.yearsExperience} years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span>{therapist.languages.join(', ')}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {therapist.acceptingNew ? (
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 mt-5 rounded-lg font-medium hover:bg-blue-700 transition-colors" onClick={() => window.location.href = `/therapists/${therapist.id}`}>
                    Book Consultation
                  </button>
                ) : (
                  <button className="flex-1 bg-gray-300 text-gray-600 px-4 py-2 rounded-lg font-medium cursor-not-allowed">
                    Join Waitlist
                  </button>
                )}
               
              </div>
            </div>
          ))}
        </div>

        {filteredTherapists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No therapists found matching your criteria.</p>
            <button 
              onClick={() => {
                setSelectedSpecialty('All Specialties');
                setSelectedApproach('All Approaches');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-blue-50 border-t border-blue-100 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Browse Therapists</h3>
              <p className="text-gray-600">Review profiles, specialties, and approaches to find the right fit for you.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Book Consultation</h3>
              <p className="text-gray-600">Schedule a free 15-minute consultation to see if it's a good match.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Start Your Journey</h3>
              <p className="text-gray-600">Begin working together towards your mental health goals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default TherapistDirectory;