import React from 'react';
import { HealthMetrics } from './components/HealthMetrics';
import { AlertsSection } from './components/alerts/AlertsSection';
import { en } from './i18n/en';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-100">
            {en.welcome.title}, John Doe
          </h1>
          <p className="mt-1 text-gray-400">
            {en.welcome.subtitle}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <AlertsSection />
        </div>
        <HealthMetrics />
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-400">
          © 2024 Health Monitor. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;