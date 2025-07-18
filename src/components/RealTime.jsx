import React from "react";
import { FiGithub, FiMusic, FiMic } from "react-icons/fi";

export const RealTime = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-16 md:py-24" id="realtime">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Real-Time Integrations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Spotify Integration */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <FiMusic size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Spotify Integration</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                See what I'm currently listening to with real-time Spotify updates.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="ml-3">
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-3 w-24 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
                <div className="mt-3 h-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-1/3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Integration */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <FiGithub size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">GitHub Activity</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Track my latest coding projects and contributions in real-time.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                  <div className="ml-2 h-3 w-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                <div className="flex mt-3">
                  <div className="h-4 w-4 bg-gray-200 dark:bg-gray-600 rounded-full mr-2"></div>
                  <div className="h-4 w-4 bg-gray-200 dark:bg-gray-600 rounded-full mr-3"></div>
                  <div className="h-3 w-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Web Speech API */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <FiMic size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Voice Interaction</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Try speaking to this section using your browser's speech recognition.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FiMic className="text-blue-500 dark:text-blue-400" size={20} />
                  </div>
                </div>
                <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
                  Start Listening
                </button>
                <div className="mt-3 h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTime;