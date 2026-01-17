// app/therapists/page.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  getAllTherapists, 
  specialties, 
  approaches, 
  filterTherapists,
  getAvailabilityColor 
} from '@/lib/therapists';
import BackButton from '@/components/BackButton';

const TherapistDirectory = () => {
  const router = useRouter();
  const allTherapists = getAllTherapists();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [selectedApproach, setSelectedApproach] = useState('All Approaches');

  // filter therapists based on selections & search
  const getFilteredTherapists = () => {
    let filtered = filterTherapists(allTherapists, selectedSpecialty, selectedApproach);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(therapist => 
        therapist.name.toLowerCase().includes(query) ||
        therapist.credentials.toLowerCase().includes(query) ||
        therapist.specialty.some(spec => spec.toLowerCase().includes(query)) ||
        therapist.approach.toLowerCase().includes(query) ||
        therapist.bio.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  };

  const filteredTherapists = getFilteredTherapists();

  const handleTherapistClick = (therapistId) => {
    router.push(`/therapists/${therapistId}`);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 mt-20 sm:mt-24">
        {/* back btn */}
        <BackButton href="/" label="Back to Home" className="mb-6 sm:mb-8" />
        {/* header section */}
        <div className="mb-24 sm:mb-30">
          {/* badge */}
          <div className="mb-4 sm:mb-6">
            <span className="bg-white border border-gray-300 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 inline-flex items-center">
              Find your perfect therapist match →
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0">
            {/* left - title & desc */}
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
                Find Your Therapist
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Connect with experienced mental health professionals who can support your journey to wellness.
              </p>
              
              {/* search */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input 
                  type="text" 
                  placeholder="🔍 Search by name, specialty, or approach..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center cursor-pointer text-sm sm:text-base">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* filters */}
        <div className="bg-white border-b border-gray-200 mb-6 sm:mb-8 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="py-4 sm:py-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="w-full sm:w-auto">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Specialty</label>
                <select 
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

              {(selectedSpecialty !== 'All Specialties' || selectedApproach !== 'All Approaches' || searchQuery) && (
                <button 
                  onClick={() => {
                    setSelectedSpecialty('All Specialties');
                    setSelectedApproach('All Approaches');
                    setSearchQuery('');
                  }}
                  className="self-end px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Clear Filters
                </button>
              )}
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Showing {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''}
              {(selectedSpecialty !== 'All Specialties' || selectedApproach !== 'All Approaches') && (
                <span> matching your criteria</span>
              )}
            </p>
          </div>
        </div>

        {/* therapist grid */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTherapists.map(therapist => (
              <div 
                key={therapist.id} 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:cursor-pointer"
                onClick={() => handleTherapistClick(therapist.id)}
              >
                {/* avatar */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {therapist.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(therapist.availability)}`}>
                    {therapist.availability}
                  </span>
                </div>

                {/* name & credentials */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{therapist.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{therapist.credentials}</p>

                {/* specialty tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {therapist.specialty.map((spec, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* approach */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Approach:</span> {therapist.approach}
                  </p>
                </div>

                {/* bio */}
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{therapist.bio}</p>

                {/* details */}
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

                {/* actions */}
                <div className="flex gap-2">
                  {therapist.acceptingNew ? (
                    <button 
                      onClick={() => handleTherapistClick(therapist.id)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 mt-5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
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
                  setSearchQuery('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* info section */}
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