const router = require('express').Router();

// Simulated AI Disease & Stress Diagnosis Endpoint
router.post('/diagnose', async (req, res) => {
  try {
    // In production, connect this to your Python / OpenCV / PyTorch model or external AI API
    const { cropName } = req.body;
    
    const mockDiagnosis = {
      crop: cropName || 'Wheat',
      healthStatus: 'Moderate Stress',
      diseaseDetected: 'Yellow Rust (Puccinia striiformis)',
      confidence: '94.2%',
      treatment: 'Apply Propiconazole 25% EC @ 200ml per acre in 200 liters of water. Ensure proper field drainage.'
    };

    res.json(mockDiagnosis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;