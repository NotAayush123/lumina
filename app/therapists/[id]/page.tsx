// app/therapists/[id]/page.js
"use client";

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, MapPin, DollarSign, Clock, Award, CheckCircle } from 'lucide-react';
import { findTherapistById, getTherapistInitials } from '../../../lib/therapists';
import BackButton from '../../../components/BackButton';

const TherapistProfilePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [activeTab, setActiveTab] = useState('My Approach');
  const router = useRouter();

  // Unwrap the params Promise
  const resolvedParams = use(params);
  const therapist = findTherapistById(resolvedParams?.id || '1');

  const tabs = ['My Approach', 'My Practice', 'Fees', 'Location'];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-20 right-40 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-red-400 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 left-60 w-72 h-72 bg-gray-300 rounded-full opacity-20 blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <BackButton href="/therapists" label="Back to results" className="mb-8" />

        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-sm p-8 mb-6">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-start space-x-6">
              {therapist.image ? (
                <img 
                  src={therapist.image} 
                  alt={therapist.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">
                  {getTherapistInitials(therapist.name)}
                </div>
              )}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{therapist.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{therapist.credentials}</p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    {therapist.acceptingNew ? 'Accepting new clients' : 'Currently not accepting new clients'}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Request a Call
            </button>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Gender</h3>
              <p className="text-gray-900">{therapist.gender}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Type of Therapist</h3>
              <p className="text-gray-900">{therapist.type}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Languages Spoken</h3>
              <p className="text-gray-900">{therapist.languages?.join(', ') || 'English'}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Works with</h3>
              <ul className="space-y-1">
                {therapist.worksWith?.map((group, index) => (
                  <li key={index} className="text-gray-900">• {group}</li>
                )) || <li className="text-gray-900">• Adults (18+)</li>}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Experienced in</h3>
              <div className="flex flex-wrap gap-2">
                {therapist.experienced?.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {item}
                  </span>
                )) || therapist.specialty?.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-medium transition-colors relative ${
                    activeTab === tab
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'My Approach' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What are your top three learnings from working as a therapist?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {therapist.approachContent.learnings}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How would you describe your approach to therapy?</h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {therapist.approachContent.approach}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What can clients expect in sessions?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {therapist.approachContent.sessionExpectations}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'My Practice' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Credentials & Licenses</h3>
                        <p className="text-gray-700">{therapist.practiceInfo.credentials}</p>
                        <p className="text-gray-700">{therapist.practiceInfo.education}</p>
                        <p className="text-gray-700">{therapist.practiceInfo.experience}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Availability</h3>
                        <p className="text-gray-700">{therapist.practiceInfo.availability}</p>
                        <p className="text-gray-700">Offering both in-person and telehealth sessions</p>
                      </div>
                    </div>

                    {therapist.practiceInfo.modalities && (
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Treatment Modalities</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {therapist.practiceInfo.modalities.map((modality) => (
                              <span key={modality} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                {modality}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Fees' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Session Fees</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">Individual Therapy (50 min)</span>
                        <span className="text-lg font-bold text-gray-900">{therapist.fees.individual}</span>
                      </div>
                    </div>
                    {therapist.fees.couples && (
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">Couples Therapy (50 min)</span>
                          <span className="text-lg font-bold text-gray-900">{therapist.fees.couples}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance</h2>
                  <p className="text-gray-700 mb-4">
                    {therapist.fees.insurance?.length > 0 
                      ? 'I am in-network with the following insurance providers:' 
                      : 'I am an out-of-network provider and can provide superbills for reimbursement.'}
                  </p>
                  {therapist.fees.insurance?.length > 0 && (
                    <div className="grid grid-cols-2 gap-3">
                      {therapist.fees.insurance.map((insurance) => (
                        <div key={insurance} className="p-3 bg-green-50 text-green-700 rounded-lg font-medium">
                          {insurance}
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-gray-600 mt-4 text-sm">
                    Sliding scale fees available on a limited basis for those with financial need.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Methods</h2>
                  <p className="text-gray-700">I accept credit cards, debit cards, HSA/FSA cards, and checks. Payment is due at the time of service.</p>
                </div>
              </div>
            )}

            {activeTab === 'Location' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {therapist.locationInfo.telehealth ? 'Virtual & Office Location' : 'Office Location'}
                  </h2>
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{therapist.location}</p>
                      <p className="text-gray-700">{therapist.locationInfo.address}</p>
                    </div>
                  </div>
                  
                  {/* Mock Map - only show if not telehealth only */}
                  {!therapist.locationInfo.telehealth && (
                    <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Interactive map would be displayed here</p>
                      </div>
                    </div>
                  )}

                  {therapist.locationInfo && !therapist.locationInfo.telehealth && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <h3 className="font-semibold text-blue-900 mb-2">Getting Here</h3>
                      <p className="text-blue-800 text-sm">
                        <strong>Public Transit:</strong> {therapist.locationInfo.transit}<br />
                        <strong>Parking:</strong> {therapist.locationInfo.parking}<br />
                        <strong>Accessibility:</strong> {therapist.locationInfo.accessibility}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Telehealth Option</h2>
                  <p className="text-gray-700">
                    I offer secure video sessions for clients throughout California. Telehealth sessions are conducted through a HIPAA-compliant platform to ensure your privacy and confidentiality.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-blue-100 mb-6">Take the first step towards better mental health today.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Request a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfilePage;