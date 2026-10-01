import React, { useState } from 'react';
import { Sprout, TrendingUp, CloudSun, ShieldCheck, PhoneCall, UploadCloud } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [cropResult, setCropResult] = useState(null);

  const handleAiScan = (e) => {
    e.preventDefault();
    setCropResult({
      crop: 'Wheat',
      healthStatus: 'Moderate Stress Detected',
      disease: 'Yellow Rust',
      treatment: 'Apply Propiconazole 25% EC fungicide immediately.'
    });
  };

  return }