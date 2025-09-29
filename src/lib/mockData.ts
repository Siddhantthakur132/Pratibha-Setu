// -----------------------------------------------------------------------------
// ADMIN DASHBOARD MOCK DATA
// -----------------------------------------------------------------------------

// Used in: /admin/user-management
export const mockUsers = [
  {
    id: "usr_001",
    name: "Kavya Nair",
    role: "Athlete",
    location: "Kerala",
    joined: "2 days ago",
    status: "Active",
    email: "kavya.n@example.com",
  },
  {
    id: "usr_002",
    name: "Rohan Sharma",
    role: "Coach",
    location: "Punjab",
    joined: "5 days ago",
    status: "Active",
    email: "rohan.s@example.com",
  },
  {
    id: "usr_003",
    name: "Siddhant Thakur",
    role: "Admin",
    location: "Madhya Pradesh",
    joined: "1 month ago",
    status: "Active",
    email: "siddhant.t@example.com",
  },
  {
    id: "usr_004",
    name: "Priya Singh",
    role: "Athlete",
    location: "Maharashtra",
    joined: "3 months ago",
    status: "Suspended",
    email: "priya.s@example.com",
  },
    {
    id: "usr_005",
    name: "Amit Kumar",
    role: "Coach",
    location: "Gujarat",
    joined: "1 year ago",
    status: "Pending",
    email: "amit.k@example.com",
  },
];

// Used in: /admin/analytics
export const mockUserActivity = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 450 },
  { name: "May", users: 600 },
  { name: "Jun", users: 800 },
];

export const mockTestDistribution = [
  { name: "Sprint", value: 400 },
  { name: "Vertical Jump", value: 300 },
  { name: "Sit-ups", value: 300 },
  { name: "Agility Ladder", value: 200 },
];

// Used in: /admin/ai-config
export const mockAIConfig = [
  {
    id: 'pose_detection',
    title: 'Pose Detection Engine',
    description: 'Controls the sensitivity and model for detecting human poses.',
    settings: [
      { id: 'model_type', label: 'Model Type', type: 'select', value: 'MoveNet_Thunder', options: ['MoveNet_Thunder', 'MoveNet_Lightning', 'PoseNet'] },
      { id: 'confidence_threshold', label: 'Confidence Threshold', type: 'slider', value: 85, min: 50, max: 100 },
      { id: 'enable_smoothing', label: 'Enable Frame Smoothing', type: 'switch', value: true },
    ],
  },
  {
    id: 'cheat_detection',
    title: 'Cheat Detection Algorithm',
    description: 'Flags unnatural movements, loops, or incomplete reps.',
      settings: [
      { id: 'anomaly_sensitivity', label: 'Anomaly Sensitivity', type: 'slider', value: 90, min: 60, max: 100 },
      { id: 'video_loop_detection', label: 'Video Loop Detection', type: 'switch', value: true },
    ],
  },
];

// Used in: /admin/settings
export const mockSystemSettings = {
  languages: [
    { id: 'en', name: 'English', active: true },
    { id: 'hi', name: 'Hindi (हिन्दी)', active: true },
    { id: 'mr', name: 'Marathi (मराठी)', active: false },
    { id: 'ta', name: 'Tamil (தமிழ்)', active: true },
    { id: 'te', name: 'Telugu (తెలుగు)', active: false },
  ],
  featureFlags: [
    { id: 'cognitive_games', name: 'Cognitive Games Module', active: true },
    { id: 'nutrition_suggestions', name: 'Nutrition Suggestions', active: true },
    { id: 'blockchain_certificates', name: 'Blockchain Certificates (Phase 2)', active: false },
  ],
};


// -----------------------------------------------------------------------------
// COACH DASHBOARD MOCK DATA
// -----------------------------------------------------------------------------

// Used in: /coach/review-queue
export const mockReviewQueue = [
  { 
    id: 'ath_02', 
    name: 'Sneha Reddy', 
    age: 16, 
    test: 'Vertical Jump', 
    reason: 'AI flagged unnatural movement during landing.', 
    tsi: 85,
    videoUrl: 'https://example.com/video2.mp4' // Placeholder
  },
  { 
    id: 'ath_05', 
    name: 'Vikram Singh', 
    age: 19, 
    test: '100m Sprint', 
    reason: 'Video loop detected between 3s and 5s.', 
    tsi: 88,
    videoUrl: 'https://example.com/video5.mp4' 
  },
];

// Used in: /coach/heatmap
export const mockTalentHotspots = [
  { id: 1, city: 'Mumbai', x: '40%', y: '55%', count: 128, sport: 'Cricket' },
  { id: 2, city: 'Delhi', x: '55%', y: '30%', count: 98, sport: 'Football' },
  { id: 3, city: 'Bengaluru', x: '58%', y: '75%', count: 112, sport: 'Athletics' },
  { id: 4, city: 'Chennai', x: '65%', y: '82%', count: 85, sport: 'Athletics' },
  { id: 5, city: 'Kolkata', x: '82%', y: '48%', count: 76, sport: 'Football' },
  { id: 6, city: 'Hyderabad', x: '60%', y: '65%', count: 91, sport: 'Badminton' },
  { id: 7, city: 'Pune', x: '45%', y: '60%', count: 82, sport: 'Cricket' },
];

// Used in: /coach/comparison-tool
export const mockComparisonAthletes = [
  { id: '1', name: 'Arjun Patel' },
  { id: '2', name: 'Sneha Reddy' },
  { id: '3', name: 'Rohit Singh' },
  { id: '4', name: 'Kavya Nair' },
];

// *********************************************************************************
// >> UPDATED SECTION <<
// Used in: /coach/athlete/:id (Athlete Profile Page) & Comparison Tool
// *********************************************************************************
export const mockAthleteProfiles = [
  {
    id: "1",
    name: "Arjun Patel",
    age: 17,
    location: "Gujarat",
    sport: "Cricket",
    talentScore: 89,
    badges: ["Fast Bowler", "Consistent", "Team Leader"],
    physical: {
      sprint_100m: { value: 11.5, rank: "Top 10%" },
      vertical_jump: { value: 81, rank: "Top 5%" }, // in cm
      agility_run: { value: 4.8, rank: "Top 15%" },
    },
    cognitive: {
      reaction_time: { value: 180, rank: "Top 20%" }, // in ms
      decision_making: { value: 92, rank: "Top 8%" },
    },
    chartData: [
      { subject: 'Speed', A: 88, fullMark: 100 },
      { subject: 'Power', A: 91, fullMark: 100 },
      { subject: 'Agility', A: 85, fullMark: 100 },
      { subject: 'Endurance', A: 82, fullMark: 100 },
      { subject: 'Cognition', A: 92, fullMark: 100 },
    ],
    performanceHistory: [
      { month: "Jan", tsi: 78 },
      { month: "Feb", tsi: 80 },
      { month: "Mar", tsi: 82 },
      { month: "Apr", tsi: 85 },
      { month: "May", tsi: 87 },
      { month: "Jun", tsi: 89 },
    ],
  },
  {
    id: "2",
    name: "Sneha Reddy",
    age: 16,
    location: "Telangana",
    sport: "Badminton",
    talentScore: 85,
    badges: ["Quick Reflexes", "Endurance", "Perfect Technique"],
    physical: {
      sprint_100m: { value: 12.8, rank: "Top 30%" },
      vertical_jump: { value: 71, rank: "Top 15%" },
      agility_run: { value: 4.5, rank: "Top 8%" },
    },
    cognitive: {
      reaction_time: { value: 150, rank: "Top 5%" },
      decision_making: { value: 95, rank: "Top 3%" },
    },
    chartData: [
      { subject: 'Speed', A: 75, fullMark: 100 },
      { subject: 'Power', A: 80, fullMark: 100 },
      { subject: 'Agility', A: 94, fullMark: 100 },
      { subject: 'Endurance', A: 88, fullMark: 100 },
      { subject: 'Cognition', A: 97, fullMark: 100 },
    ],
    performanceHistory: [
      { month: "Jan", tsi: 75 },
      { month: "Feb", tsi: 76 },
      { month: "Mar", tsi: 79 },
      { month: "Apr", tsi: 81 },
      { month: "May", tsi: 83 },
      { month: "Jun", tsi: 85 },
    ],
  },
  {
    id: "3",
    name: "Rohit Singh",
    age: 18,
    location: "Punjab",
    sport: "Football",
    talentScore: 82,
    badges: ["Goal Scorer", "Sprint Speed", "Field Vision"],
    physical: {
      sprint_100m: { value: 11.9, rank: "Top 18%" },
      vertical_jump: { value: 76, rank: "Top 10%" },
      agility_run: { value: 4.9, rank: "Top 20%" },
    },
    cognitive: {
      reaction_time: { value: 190, rank: "Top 25%" },
      decision_making: { value: 89, rank: "Top 15%" },
    },
    chartData: [
      { subject: 'Speed', A: 84, fullMark: 100 },
      { subject: 'Power', A: 86, fullMark: 100 },
      { subject: 'Agility', A: 81, fullMark: 100 },
      { subject: 'Endurance', A: 90, fullMark: 100 },
      { subject: 'Cognition', A: 89, fullMark: 100 },
    ],
    performanceHistory: [
      { month: "Jan", tsi: 72 },
      { month: "Feb", tsi: 75 },
      { month: "Mar", tsi: 77 },
      { month: "Apr", tsi: 78 },
      { month: "May", tsi: 80 },
      { month: "Jun", tsi: 82 },
    ],
  },
  {
    id: "4",
    name: "Kavya Nair",
    age: 15,
    location: "Kerala",
    sport: "Athletics",
    talentScore: 78,
    badges: ["Sprinter", "Dedication", "Rising Star"],
    physical: {
      sprint_100m: { value: 12.1, rank: "Top 12%" },
      vertical_jump: { value: 65, rank: "Top 25%" },
      agility_run: { value: 5.1, rank: "Top 30%" },
    },
    cognitive: {
      reaction_time: { value: 175, rank: "Top 18%" },
      decision_making: { value: 85, rank: "Top 20%" },
    },
    chartData: [
      { subject: 'Speed', A: 92, fullMark: 100 },
      { subject: 'Power', A: 75, fullMark: 100 },
      { subject: 'Agility', A: 78, fullMark: 100 },
      { subject: 'Endurance', A: 70, fullMark: 100 },
      { subject: 'Cognition', A: 85, fullMark: 100 },
    ],
    performanceHistory: [
      { month: "Jan", tsi: 68 },
      { month: "Feb", tsi: 70 },
      { month: "Mar", tsi: 72 },
      { month: "Apr", tsi: 74 },
      { month: "May", tsi: 77 },
      { month: "Jun", tsi: 78 },
    ],
  },
];

// Used in: /coach/analytics
export const mockCoachAnalytics = {
  averageTSI: 83.5,
  mostImproved: {
    name: "Kavya Nair",
    improvement: "+10 TSI in 6 months"
  },
  sportDistribution: [
    { name: 'Cricket', value: 1 },
    { name: 'Badminton', value: 1 },
    { name: 'Football', value: 1 },
    { name: 'Athletics', value: 1 },
  ],
  improvementList: [
    { id: '4', name: 'Kavya Nair', change: 10, currentTSI: 78, sport: 'Athletics' },
    { id: '3', name: 'Rohit Singh', change: 10, currentTSI: 82, sport: 'Football' },
    { id: '2', name: 'Sneha Reddy', change: 10, currentTSI: 85, sport: 'Badminton' },
    { id: '1', name: 'Arjun Patel', change: 11, currentTSI: 89, sport: 'Cricket' },
  ]
};

// -----------------------------------------------------------------------------
// ATHLETE DASHBOARD MOCK DATA
// -----------------------------------------------------------------------------

// Used in: /athlete/fitness-tests
export const mockFitnessTests = [
  {
    id: 'sprint_100m',
    title: '100m Sprint',
    description: 'Measure your maximum running speed over 100 meters.',
    category: 'Speed',
    icon: 'Wind',
    status: 'completed',
    bestScore: '12.1s'
  },
  {
    id: 'vertical_jump',
    title: 'Vertical Jump',
    description: 'Test your explosive lower body power.',
    category: 'Power',
    icon: 'ChevronsUp',
    status: 'ready',
    bestScore: '30 inches'
  },
  {
    id: 'push_ups',
    title: 'Push-ups Challenge',
    description: 'Test your upper body muscular endurance in 1 minute.',
    category: 'Endurance',
    icon: 'Activity',
    status: 'ready',
    bestScore: '40 reps'
  },
    {
    id: 'agility_ladder',
    title: 'Agility Ladder Drill',
    description: 'Assess your coordination, speed, and agility.',
    category: 'Agility',
    icon: 'Grid',
    status: 'locked',
    bestScore: 'N/A'
  }
];

// Used in: /athlete/cognitive-games
export const mockCognitiveGames = [
  {
    id: 'reflex_tap',
    title: 'Reflex Tapping Game',
    description: 'Tap the targets as they appear. The faster, the better!',
    measures: 'Reaction Time (ms)',
    icon: 'MousePointerClick',
    status: 'completed',
    bestScore: '162ms avg'
  },
  {
    id: 'stroop_test',
    title: 'Stroop Test',
    description: 'Test your focus by selecting the color of the word, not the word itself.',
    measures: 'Focus & Cognitive Flexibility',
    icon: 'Palette',
    status: 'ready',
    bestScore: '95% accuracy'
  },
  {
    id: 'memory_flip',
    title: 'Memory Flip Game',
    description: 'Match the pairs of cards in the fewest moves possible.',
    measures: 'Short-Term Memory',
    icon: 'MemoryStick',
    status: 'ready',
    bestScore: '12 moves'
  },
  {
    id: 'decision_split',
    title: 'Decision Split Test',
    description: 'Make quick decisions under pressure as objects fly across the screen.',
    measures: 'Decision Making',
    icon: 'GitFork',
    status: 'locked',
    bestScore: 'N/A'
  }
];

// Used in: /athlete/training-plan
export const mockTrainingPlan = {
  focus: 'Endurance and Agility',
  duration: '4 Weeks',
  coachNotes: "Priya, your sprint times are improving! This month, let's focus on maintaining that speed over longer distances and improving your change-of-direction speed.",
  dailyPlan: [
    { day: 'Monday', workout: '3km Run, 20x Shuttle Run', nutrition: 'High-protein breakfast (Eggs, Chana).', status: 'completed' },
    { day: 'Tuesday', workout: 'Rest or light stretching', nutrition: 'Stay hydrated, include fruits.', status: 'completed' },
    { day: 'Wednesday', workout: '50x Sit-ups, 30x Push-ups', nutrition: 'Post-workout banana and milk.', status: 'upcoming' },
    { day: 'Thursday', workout: 'Agility Ladder Drills (15 mins)', nutrition: 'Complex carbs for lunch (Roti, Brown Rice).', status: 'upcoming' },
    { day: 'Friday', workout: '5km Long Distance Run (Steady Pace)', nutrition: 'Light dinner, focus on vegetables.', status: 'upcoming' },
  ]
};