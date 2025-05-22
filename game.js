// Enhanced game.js with all requested improvements
// Includes: multi-language support, lives system, tutorial mode, 
// accessibility features, patient history, and UI/UX improvements

// --- Language System ---
const LANGUAGES = {
    ru: {
        SCORE: 'СЧЁТ',
        TIME: 'ВРЕМЯ',
        LIVES: 'ЖИЗНИ',
        START_TEST: 'НАЧАТЬ ТЕСТ',
        TRAINING: 'ТРЕНИРОВКА',
        USE_WASD: 'Управление: WASD или стрелки — движение. Клик/тап — выстрел.',
        TEST_INSTRUCTIONS: 'Инструкция к тесту',
        INSTRUCTION_TEXT: 'Стреляйте по всем цветным объектам на экране.',
        BEGIN_TEST: 'Начать тест',
        PATIENT_INFO: 'Информация о пациенте',
        PATIENT_ID: 'ID пациента',
        PATIENT_NAME: 'Имя пациента',
        PATIENT_AGE: 'Возраст',
        TEST_MODE: 'Режим теста',
        STANDARD_MODE: 'Стандартный режим',
        PROTANOPIA_TEST: 'Тест на протанопию',
        DEUTERANOPIA_TEST: 'Тест на дейтеранопию',
        TRITANOPIA_TEST: 'Тест на тританопию',
        CUSTOM_TEST: 'Пользовательский тест',
        TEST_MODE_DESCRIPTION: 'Базовый тест с обычными цветами',
        ENEMY_SPEED: 'Скорость врагов',
        SPAWN_RATE: 'Частота появления (мс)',
        TEST_DURATION: 'Длительность теста (секунд)',
        TASK_TYPE: 'Тип задания',
        SHOOT_ALL: 'Стрелять по всем',
        SHOOT_SPECIFIC: 'Стрелять по определённым цветам',
        AVOID_SPECIFIC: 'Избегать определённых цветов',
        TARGET_COLORS: 'Целевые цвета',
        RESULTS: 'Результаты',
        VIEW_RESULTS: 'Показать результаты',
        EXPORT_RESULTS: 'Экспортировать результаты',
        FINAL_SCORE: 'Итоговый счёт',
        COLOR_ACCURACY: 'Точность по цветам',
        REACTION_TIMES: 'Время реакции (мс)',
        MISSED_TARGETS: 'Пропущенные цели',
        ANALYSIS: 'Анализ',
        ANALYSIS_STANDARD: 'Стандартный тест завершён. Проверьте результаты по цветам.',
        ANALYSIS_PROTAN: 'Результаты указывают на возможную протанопию (красная слепота).',
        ANALYSIS_DEUTER: 'Результаты указывают на возможную дейтеранопию (зелёная слепота).',
        ANALYSIS_TRITAN: 'Результаты указывают на возможную тританопию (синяя слепота).',
        PASS: 'ПРОЙДЕНО',
        FLAGGED: 'ПРОВЕРИТЬ',
        CLOSE: 'Закрыть',
        PRINT: 'Печать',
        NOTE: 'Заметка врача',
        HISTORY: 'История',
        NEXT_PATIENT: 'Следующий пациент',
        EASY: 'Легко',
        NORMAL: 'Средне',
        HARD: 'Сложно',
        TUTORIAL_TITLE: 'Режим тренировки',
        TUTORIAL_DESC: 'Здесь вы можете потренироваться без ограничений по времени и счёту.',
        TUTORIAL_BTN: 'Выйти из тренировки',
        AUTO_SHOOT: 'Автоматическая стрельба',
        DOCTOR_PANEL: 'Панель врача',
        GAME_SETTINGS: 'Параметры игры',
        DIFFICULTY: 'Сложность',
        HISTORY_TITLE: 'История тестов',
        NO_HISTORY: 'История тестов пуста',
        LOAD_PATIENT: 'Загрузить данные',
        DELETE_HISTORY: 'Удалить историю',
        HISTORY_DATE: 'Дата',
        HISTORY_ID: 'ID',
        HISTORY_NAME: 'Имя',
        HISTORY_SCORE: 'Счёт',
        HISTORY_MODE: 'Режим',
        PASS_MESSAGE: 'Явных нарушений не обнаружено',
        FLAG_MESSAGE: 'Обнаружены проблемы с восприятием некоторых цветов',
        RED: 'Красный',
        GREEN: 'Зелёный',
        BLUE: 'Синий',
        YELLOW: 'Жёлтый',
        PURPLE: 'Фиолетовый',
        ORANGE: 'Оранжевый',
        PINK: 'Розовый',
        BROWN: 'Коричневый',
        WHITE: 'Белый',
        BLACK: 'Чёрный',
        ACTIONS: 'Действия',
        NOT_PROVIDED: 'Не указано'
    },
    en: {
        SCORE: 'SCORE',
        TIME: 'TIME',
        LIVES: 'LIVES',
        START_TEST: 'START TEST',
        TRAINING: 'TRAINING',
        USE_WASD: 'Controls: WASD or arrows - movement. Click/tap - shoot.',
        TEST_INSTRUCTIONS: 'Test Instructions',
        INSTRUCTION_TEXT: 'Shoot all colored objects that appear on screen.',
        BEGIN_TEST: 'Begin Test',
        PATIENT_INFO: 'Patient Information',
        PATIENT_ID: 'Patient ID',
        PATIENT_NAME: 'Patient Name',
        PATIENT_AGE: 'Age',
        TEST_MODE: 'Test Mode',
        STANDARD_MODE: 'Standard Mode',
        PROTANOPIA_TEST: 'Protanopia Test',
        DEUTERANOPIA_TEST: 'Deuteranopia Test',
        TRITANOPIA_TEST: 'Tritanopia Test',
        CUSTOM_TEST: 'Custom Test',
        TEST_MODE_DESCRIPTION: 'Baseline test with normal colors',
        ENEMY_SPEED: 'Enemy Speed',
        SPAWN_RATE: 'Spawn Rate (ms)',
        TEST_DURATION: 'Test Duration (seconds)',
        TASK_TYPE: 'Task Type',
        SHOOT_ALL: 'Shoot All',
        SHOOT_SPECIFIC: 'Shoot Specific Colors',
        AVOID_SPECIFIC: 'Avoid Specific Colors',
        TARGET_COLORS: 'Target Colors',
        RESULTS: 'Results',
        VIEW_RESULTS: 'View Results',
        EXPORT_RESULTS: 'Export Results',
        FINAL_SCORE: 'Final Score',
        COLOR_ACCURACY: 'Color Accuracy',
        REACTION_TIMES: 'Reaction Times (ms)',
        MISSED_TARGETS: 'Missed Targets',
        ANALYSIS: 'Analysis',
        ANALYSIS_STANDARD: 'Standard test completed. Review color-specific performance.',
        ANALYSIS_PROTAN: 'Results suggest potential protanopia (red color blindness).',
        ANALYSIS_DEUTER: 'Results suggest potential deuteranopia (green color blindness).',
        ANALYSIS_TRITAN: 'Results suggest potential tritanopia (blue color blindness).',
        PASS: 'PASS',
        FLAGGED: 'CHECK',
        CLOSE: 'Close',
        PRINT: 'Print',
        NOTE: 'Doctor\'s Note',
        HISTORY: 'History',
        NEXT_PATIENT: 'Next Patient',
        EASY: 'Easy',
        NORMAL: 'Normal',
        HARD: 'Hard',
        TUTORIAL_TITLE: 'Training Mode',
        TUTORIAL_DESC: 'Here you can practice without time or score limits.',
        TUTORIAL_BTN: 'Exit Training',
        AUTO_SHOOT: 'Auto-Shoot',
        DOCTOR_PANEL: 'Doctor Panel',
        GAME_SETTINGS: 'Game Settings',
        DIFFICULTY: 'Difficulty',
        HISTORY_TITLE: 'Test History',
        NO_HISTORY: 'Test history is empty',
        LOAD_PATIENT: 'Load Data',
        DELETE_HISTORY: 'Delete History',
        HISTORY_DATE: 'Date',
        HISTORY_ID: 'ID',
        HISTORY_NAME: 'Name',
        HISTORY_SCORE: 'Score',
        HISTORY_MODE: 'Mode',
        PASS_MESSAGE: 'No significant abnormalities detected',
        FLAG_MESSAGE: 'Issues with color perception detected',
        RED: 'Red',
        GREEN: 'Green',
        BLUE: 'Blue',
        YELLOW: 'Yellow',
        PURPLE: 'Purple',
        ORANGE: 'Orange',
        PINK: 'Pink',
        BROWN: 'Brown',
        WHITE: 'White',
        BLACK: 'Black',
        ACTIONS: 'Actions',
        NOT_PROVIDED: 'Not provided'
    }
};

let currentLang = 'ru';
function t(key) { return LANGUAGES[currentLang][key] || key; }

// --- Main Variables & UI Elements ---
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

// UI elements
const scoreEL = document.getElementById("scoreEL");
const scoreTitle = document.getElementById("scoreTitle");
const livesIndicator = document.getElementById("livesIndicator");
const modalEL = document.getElementById("modalEL");
const bigScoreEl = document.getElementById("bigScoreEl");
const scoreLabel = document.getElementById("scoreLabel");
const testModeIndicator = document.getElementById("testModeIndicator");
const toggleControlPanel = document.getElementById("toggleControlPanel");
const doctorControlPanel = document.getElementById("doctorControlPanel");
const toggleMenuBtn = document.getElementById("toggleMenuBtn");
const resultsModal = document.getElementById("resultsModal");
const closeResultsBtn = document.getElementById("closeResultsBtn");
const colorLegend = document.getElementById("colorLegend");
const doctorNote = document.getElementById("doctorNote");
const doctorNoteLabel = document.getElementById("doctorNoteLabel");
const startGameBtn = document.getElementById("startGameBtn");
const startTutorialBtn = document.getElementById("startTutorialBtn");
const printBtn = document.getElementById("printBtn");
const showHistoryBtn = document.getElementById("showHistoryBtn");
const passFlagContainer = document.getElementById("passFlagContainer");
const controlsHint = document.getElementById("controlsHint");
const instructionsOverlay = document.getElementById("instructionsOverlay");
const instructionsTitle = document.getElementById("instructionsTitle");
const instructionsText = document.getElementById("instructionsText");
const beginTestBtn = document.getElementById("beginTestBtn");
const doctorPanelTitle = document.getElementById("doctorPanelTitle");
const patientInfoTitle = document.getElementById("patientInfoTitle");
const patientIdLabel = document.getElementById("patientIdLabel");
const patientNameLabel = document.getElementById("patientNameLabel");
const patientAgeLabel = document.getElementById("patientAgeLabel");
const testModeTitle = document.getElementById("testModeTitle");
const standardModeOption = document.getElementById("standardModeOption");
const protanopiaOption = document.getElementById("protanopiaOption");
const deuteranopiaOption = document.getElementById("deuteranopiaOption");
const tritanopiaOption = document.getElementById("tritanopiaOption");
const customOption = document.getElementById("customOption");
const difficultyTitle = document.getElementById("difficultyTitle");
const easyBtn = document.getElementById("easyBtn");
const normalBtn = document.getElementById("normalBtn");
const hardBtn = document.getElementById("hardBtn");
const gameSettingsTitle = document.getElementById("gameSettingsTitle");
const enemySpeedLabel = document.getElementById("enemySpeedLabel");
const spawnRateLabel = document.getElementById("spawnRateLabel");
const testDurationLabel = document.getElementById("testDurationLabel");
const autoShootLabel = document.getElementById("autoShootLabel");
const taskTypeTitle = document.getElementById("taskTypeTitle");
const shootAllOption = document.getElementById("shootAllOption");
const shootSpecificOption = document.getElementById("shootSpecificOption");
const avoidSpecificOption = document.getElementById("avoidSpecificOption");
const targetColorsTitle = document.getElementById("targetColorsTitle");
const startTestBtnPanel = document.getElementById("startTestBtnPanel");
const resultsTitle = document.getElementById("resultsTitle");
const viewResultsBtn = document.getElementById("viewResultsBtn");
const exportResultsBtn = document.getElementById("exportResultsBtn");
const resultsModalTitle = document.getElementById("resultsModalTitle");
const langToggleBtn = document.getElementById("langToggleBtn");
const autoShoot = document.getElementById("autoShoot");

let timerEl = document.createElement("span");
let timerContainer;

// --- Game State ---
let flagGameOver = true;
let animationId;
let score = 0;
let lives = 3;
let gameTimer = 0;
let colorAccuracyData = {};
let reactionTimeData = {};
let missedTargetsData = {};
let lastSpawnTime = 0;
let testActive = false;
let testStartTime = 0;
let testResults = {};
let tutorialMode = false;
let autoShootEnabled = false;
let autoShootTarget = null;
let autoShootCooldown = 0;
let historyData = [];

// --- Controls ---
let keys = { w: false, a: false, s: false, d: false, up: false, left: false, right: false, down: false };
let touchStartX = 0, touchStartY = 0, touchJoystickActive = false;
let virtualJoystickPos = { x: 0, y: 0 };
let lastTouchTime = 0, isShooting = false, shootingDirection = { x: 0, y: 0 };

// --- Game Settings (Configurable) ---
let gameSettings = {
    enemySpeed: 1,
    spawnRate: 1000,
    testDuration: 60,
    taskType: 'all',
    targetColors: [],
    colorBlindnessType: 'standard',
    showColorNames: false,
    lives: 3,
    autoShoot: false
};

// --- Color Palettes ---
const colorPalettes = {
    standard: [
        { name: t('RED'), hex: '#FF0000', rgb: '255,0,0' },
        { name: t('GREEN'), hex: '#00FF00', rgb: '0,255,0' },
        { name: t('BLUE'), hex: '#0000FF', rgb: '0,0,255' },
        { name: t('YELLOW'), hex: '#FFFF00', rgb: '255,255,0' }
    ],
    protanopia: [
        { name: t('BLUE'), hex: '#0000FF', rgb: '0,0,255' },
        { name: t('YELLOW'), hex: '#FFFF00', rgb: '255,255,0' },
        { name: t('BLACK'), hex: '#000000', rgb: '0,0,0' },
        { name: t('WHITE'), hex: '#FFFFFF', rgb: '255,255,255' }
    ],
    deuteranopia: [
        { name: t('BLUE'), hex: '#0000FF', rgb: '0,0,255' },
        { name: t('YELLOW'), hex: '#FFFF00', rgb: '255,255,0' },
        { name: t('PURPLE'), hex: '#800080', rgb: '128,0,128' },
        { name: t('ORANGE'), hex: '#FFA500', rgb: '255,165,0' }
    ],
    tritanopia: [
        { name: t('RED'), hex: '#FF0000', rgb: '255,0,0' },
        { name: t('GREEN'), hex: '#00FF00', rgb: '0,255,0' },
        { name: t('BLACK'), hex: '#000000', rgb: '0,0,0' },
        { name: t('WHITE'), hex: '#FFFFFF', rgb: '255,255,255' }
    ],
    custom: [
        { name: t('RED'), hex: '#FF0000', rgb: '255,0,0' },
        { name: t('GREEN'), hex: '#00FF00', rgb: '0,255,0' },
        { name: t('BLUE'), hex: '#0000FF', rgb: '0,0,255' },
        { name: t('YELLOW'), hex: '#FFFF00', rgb: '255,255,0' },
        { name: t('PURPLE'), hex: '#800080', rgb: '128,0,128' },
        { name: t('ORANGE'), hex: '#FFA500', rgb: '255,165,0' },
        { name: t('PINK'), hex: '#FFC0CB', rgb: '255,192,203' },
        { name: t('BROWN'), hex: '#A52A2A', rgb: '165,42,42' }
    ]
};

// Player class
class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 5;
        this.lives = gameSettings.lives;
        this.invulnerable = false;
        this.invulnerableTime = 0;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        
        // Flash when invulnerable
        if (this.invulnerable) {
            const flashRate = 100; // ms
            if (Math.floor(Date.now() / flashRate) % 2 === 0) {
                c.fillStyle = this.color;
            } else {
                c.fillStyle = 'rgba(255, 255, 255, 0.5)';
            }
        } else {
            c.fillStyle = this.color;
        }
        
        c.shadowColor = "";
        c.shadowBlur = 0;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fill();
    }

    update() {
        this.draw();
        
        // Update invulnerability
        if (this.invulnerable) {
            if (Date.now() - this.invulnerableTime > 2000) { // 2 seconds of invulnerability
                this.invulnerable = false;
            }
        }
        
        // Handle keyboard movement
        const speed = this.speed;
        if (keys.w || keys.up) this.y -= speed;
        if (keys.a || keys.left) this.x -= speed;
        if (keys.s || keys.down) this.y += speed;
        if (keys.d || keys.right) this.x += speed;
        
        // Handle touch joystick movement
        if (touchJoystickActive) {
            this.x += virtualJoystickPos.x * speed;
            this.y += virtualJoystickPos.y * speed;
        }
        
        // Keep player within bounds
        this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
        this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));
    }
    
    loseLife() {
        if (!this.invulnerable) {
            this.lives--;
            updateLivesDisplay();
            
            // Make player invulnerable for a short time
            this.invulnerable = true;
            this.invulnerableTime = Date.now();
            
            // Create visual feedback
            for (let i = 0; i < 20; i++) {
                particles.push(
                    new Particle(
                        this.x,
                        this.y,
                        Math.random() * 3,
                        'red',
                        {
                            x: (Math.random() - 0.5) * 5,
                            y: (Math.random() - 0.5) * 5,
                        }
                    )
                );
            }
            
            return this.lives <= 0; // Return true if game over
        }
        return false;
    }
}

// Projectile class
class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.creationTime = Date.now();
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.shadowColor = "red";
        c.shadowBlur = 15;
        c.shadowOffsetX = 3;
        c.shadowOffsetY = 3;
        c.fillStyle = this.color;
        c.fill();
    }

    update() {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}

// Enemy class with enhanced properties for color blindness testing
class Enemy {
    constructor(x, y, radius, colorInfo, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colorInfo = colorInfo; // Object with name, hex, rgb
        this.color = colorInfo.hex;
        this.velocity = velocity;
        this.creationTime = Date.now();
        this.pattern = Math.random() > 0.7 ? 'ishihara' : 'solid'; // Sometimes use Ishihara-like patterns
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        
        // Apply different patterns based on enemy type
        if (this.pattern === 'ishihara') {
            // Create Ishihara-like pattern
            const gradient = c.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.radius
            );
            
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(0.5, this.color);
            gradient.addColorStop(0.7, 'rgba(' + this.colorInfo.rgb + ',0.7)');
            gradient.addColorStop(1, 'rgba(' + this.colorInfo.rgb + ',0.9)');
            
            c.fillStyle = gradient;
            
            // Add dots to simulate Ishihara test
            for (let i = 0; i < 8; i++) {
                const dotRadius = this.radius / 10;
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * (this.radius - dotRadius);
                
                c.beginPath();
                c.arc(
                    this.x + Math.cos(angle) * distance,
                    this.y + Math.sin(angle) * distance,
                    dotRadius,
                    0, Math.PI * 2, false
                );
                c.fillStyle = 'rgba(255,255,255,0.8)';
                c.fill();
            }
        } else {
            // Solid color
            c.fillStyle = this.color;
        }
        
        c.shadowColor = "";
        c.shadowBlur = 0;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fill();
        
        // Add color name for testing purposes if enabled
        if (gameSettings.showColorNames) {
            c.fillStyle = 'white';
            c.font = '10px Arial';
            c.textAlign = 'center';
            c.fillText(this.colorInfo.name, this.x, this.y);
        }
    }

    update() {
        this.draw();
        
        // Apply game speed multiplier
        const speedMultiplier = gameSettings.enemySpeed;
        this.x = this.x + this.velocity.x * speedMultiplier;
        this.y = this.y + this.velocity.y * speedMultiplier;
    }
}

// Particle effects
const friction = 0.98;
class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
    }

    draw() {
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.restore();
    }

    update() {
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
        this.alpha -= 0.01;
    }
}

// Mobile UI Controls
class TouchButton {
    constructor(x, y, radius, text, action) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.text = text;
        this.action = action;
        this.pressed = false;
    }
    
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.pressed ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.3)';
        c.fill();
        c.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        c.lineWidth = 2;
        c.stroke();
        
        c.fillStyle = 'white';
        c.font = '16px Arial';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText(this.text, this.x, this.y);
    }
    
    isPointInside(x, y) {
        const distance = Math.hypot(this.x - x, this.y - y);
        return distance <= this.radius;
    }
}

// Initialize game objects
const x = canvas.width / 2;
const y = canvas.height / 2;

let player = new Player(x, y, 10, "white");
let projectiles = [];
let enemies = [];
let particles = [];
let touchButtons = [];

// Initialize game state
function init() {
    player = new Player(x, y, 10, "white");
    player.lives = gameSettings.lives;
    projectiles = [];
    enemies = [];
    particles = [];
    score = 0;
    gameTimer = 0;
    testStartTime = Date.now();
    
    // Reset data collection
    colorAccuracyData = {};
    reactionTimeData = {};
    missedTargetsData = {};
    
    // Initialize data structures for each color
    const currentPalette = colorPalettes[gameSettings.colorBlindnessType || 'standard'];
    currentPalette.forEach(color => {
        colorAccuracyData[color.name] = { hits: 0, total: 0 };
        reactionTimeData[color.name] = [];
        missedTargetsData[color.name] = 0;
    });
    
    // Update UI
    scoreEL.innerHTML = score;
    bigScoreEl.innerHTML = score;
    if (timerEl) timerEl.innerHTML = gameSettings.testDuration;
    updateLivesDisplay();
    
    testActive = true;
    autoShootEnabled = gameSettings.autoShoot;
}

// Update lives display
function updateLivesDisplay() {
    livesIndicator.innerHTML = `${t('LIVES')}: ${player.lives}`;
}

// Spawn enemies with colors based on test mode
function spawnEnemies() {
    lastSpawnTime = Date.now();
    
    // Use the spawn rate from game settings
    const spawnInterval = setInterval(() => {
        // Stop spawning if game is over
        if (flagGameOver || !testActive) {
            clearInterval(spawnInterval);
            return;
        }
        
        const now = Date.now();
        if (now - lastSpawnTime < gameSettings.spawnRate) return;
        lastSpawnTime = now;
        
        const radius = Math.random() * (30 - 10) + 10;

        // Position enemy outside the canvas
        let x, y;
        if (Math.random() > 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
            y = Math.random() * canvas.height;
        } else {
            x = Math.random() * canvas.width;
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
        }

        // Select color based on test mode
        const currentPalette = colorPalettes[gameSettings.colorBlindnessType || 'standard'];
        const colorInfo = currentPalette[Math.floor(Math.random() * currentPalette.length)];
        
        // Track spawned enemy for accuracy calculation
        if (colorAccuracyData[colorInfo.name]) {
            colorAccuracyData[colorInfo.name].total++;
        }

        // Calculate angle and velocity toward player
        const angle = Math.atan2(player.y - y, player.x - x);
        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle),
        };

        enemies.push(new Enemy(x, y, radius, colorInfo, velocity));
    }, 1000 / 60); // Check every frame, but only spawn based on spawnRate
}

// Find nearest enemy for auto-shoot
function findNearestEnemy() {
    if (enemies.length === 0) return null;
    
    let nearestEnemy = null;
    let minDistance = Infinity;
    
    enemies.forEach(enemy => {
        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        if (dist < minDistance) {
            minDistance = dist;
            nearestEnemy = enemy;
        }
    });
    
    return nearestEnemy;
}

// Auto-shoot at target
function autoShootAtTarget() {
    if (!autoShootEnabled || autoShootCooldown > 0) return;
    
    const target = findNearestEnemy();
    if (!target) return;
    
    const angle = Math.atan2(target.y - player.y, target.x - player.x);
    const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5,
    };
    
    projectiles.push(
        new Projectile(player.x, player.y, 4, "white", velocity)
    );
    
    autoShootCooldown = 20; // Frames between auto-shots
}

// Main game loop
function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Clear screen with trail effect
    c.shadowColor = "";
    c.shadowBlur = 0;
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
    c.fillStyle = "rgba(0,0,0,.1)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update player
    player.update();
    
    // Draw touch controls if on mobile
    if ('ontouchstart' in window) {
        touchButtons.forEach(button => button.draw());
    }
    
    // Update timer if test is active
    if (testActive && !tutorialMode) {
        const elapsedSeconds = Math.floor((Date.now() - testStartTime) / 1000);
        const remainingTime = Math.max(0, gameSettings.testDuration - elapsedSeconds);
        
        if (timerEl) timerEl.innerHTML = remainingTime;
        
        // End test when time is up
        if (remainingTime <= 0 && gameSettings.testDuration > 0) {
            endTest();
        }
    }
    
    // Auto-shoot if enabled
    if (autoShootEnabled) {
        if (autoShootCooldown > 0) {
            autoShootCooldown--;
        } else {
            autoShootAtTarget();
        }
    }
    
    // Manual touch shooting
    if (isShooting && Date.now() - lastTouchTime > 200) {
        lastTouchTime = Date.now();
        
        const velocity = {
            x: shootingDirection.x * 5,
            y: shootingDirection.y * 5,
        };
        
        projectiles.push(
            new Projectile(player.x, player.y, 4, "white", velocity)
        );
    }
    
    // Update particles
    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
        }
    });
    
    // Update projectiles
    projectiles.forEach((projectile, index) => {
        projectile.update();
        
        // Remove projectiles that go off screen
        if (
            projectile.x + projectile.radius < 0 ||
            projectile.x - projectile.radius > canvas.width ||
            projectile.y + projectile.radius < 0 ||
            projectile.y - projectile.radius > canvas.height
        ) {
            setTimeout(() => {
                projectiles.splice(index, 1);
            }, 0);
        }
    });

    // Update enemies
    enemies.forEach((enemy, index) => {
        // Update enemy direction toward player
        const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
        enemy.velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        };
        
        enemy.update();

        // Check for collision with player
        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        if (dist - enemy.radius - player.radius < 1) {
            // Track missed target
            if (missedTargetsData[enemy.colorInfo.name]) {
                missedTargetsData[enemy.colorInfo.name]++;
            }
            
            // Remove the enemy
            setTimeout(() => {
                enemies.splice(index, 1);
            }, 0);
            
            // Player loses a life
            const gameOver = player.loseLife();
            if (gameOver && !tutorialMode) {
                endTest();
                return;
            }
        }

        // Check for collision with projectiles
        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);

            if (dist - enemy.radius - projectile.radius < 1) {
                // Create explosion particles
                for (let i = 0; i < enemy.radius * 2; i++) {
                    particles.push(
                        new Particle(
                            projectile.x,
                            projectile.y,
                            Math.random() * 2,
                            enemy.color,
                            {
                                x: (Math.random() - 0.5) * (Math.random() * 5),
                                y: (Math.random() - 0.5) * (Math.random() * 5),
                            }
                        )
                    );
                }
                
                // Track hit accuracy and reaction time
                if (colorAccuracyData[enemy.colorInfo.name]) {
                    colorAccuracyData[enemy.colorInfo.name].hits++;
                    
                    // Calculate reaction time
                    const reactionTime = projectile.creationTime - enemy.creationTime;
                    reactionTimeData[enemy.colorInfo.name].push(reactionTime);
                }
                
                // Handle enemy hit
                if (enemy.radius - 10 > 5) {
                    // Reduce enemy size
                    score += 100;
                    scoreEL.innerHTML = score;

                    gsap.to(enemy, {
                        radius: enemy.radius - 10,
                    });
                    
                    setTimeout(() => {
                        projectiles.splice(projectileIndex, 1);
                    }, 0);
                } else {
                    // Destroy enemy
                    score += 250;
                    scoreEL.innerHTML = score;
                    
                    setTimeout(() => {
                        enemies.splice(index, 1);
                        projectiles.splice(projectileIndex, 1);
                    }, 0);
                }
            }
        });
    });
}

// End the test and calculate results
function endTest() {
    cancelAnimationFrame(animationId);
    flagGameOver = true;
    testActive = false;
    
    // Hide the start game modal
    modalEL.style.display = "none";
    
    // Calculate final results
    testResults = {
        patientData: {
            id: document.getElementById('patientId').value,
            name: document.getElementById('patientName').value,
            age: document.getElementById('patientAge').value
        },
        testMode: gameSettings.colorBlindnessType || 'standard',
        taskType: gameSettings.taskType || 'all',
        score: score,
        duration: Math.floor((Date.now() - testStartTime) / 1000),
        colorAccuracy: {},
        averageReactionTimes: {},
        missedTargets: missedTargetsData,
        date: new Date().toISOString(),
        doctorNote: ''
    };
    
    // Calculate accuracy percentages
    Object.keys(colorAccuracyData).forEach(color => {
        const data = colorAccuracyData[color];
        testResults.colorAccuracy[color] = data.total > 0 ? 
            (data.hits / data.total) * 100 : 0;
    });
    
    // Calculate average reaction times
    Object.keys(reactionTimeData).forEach(color => {
        const times = reactionTimeData[color];
        testResults.averageReactionTimes[color] = times.length > 0 ? 
            times.reduce((sum, time) => sum + time, 0) / times.length : 0;
    });
    
    // Show results
    showResults();
    
    bigScoreEl.innerHTML = score;
}

// Show test results
function showResults() {
    const resultsContent = document.getElementById('resultsContent');
    
    // Create results HTML
    let resultsHTML = `
        <div class="mb-4">
            <h3 class="font-bold">${t('PATIENT_INFO')}</h3>
            <p>ID: ${testResults.patientData.id || t('NOT_PROVIDED')}</p>
            <p>${t('PATIENT_NAME')}: ${testResults.patientData.name || t('NOT_PROVIDED')}</p>
            <p>${t('PATIENT_AGE')}: ${testResults.patientData.age || t('NOT_PROVIDED')}</p>
        </div>
        
        <div class="mb-4">
            <h3 class="font-bold">${t('TEST_MODE')}</h3>
            <p>${t('TEST_MODE')}: ${testResults.testMode}</p>
            <p>${t('TASK_TYPE')}: ${testResults.taskType}</p>
            <p>${t('FINAL_SCORE')}: ${testResults.score}</p>
        </div>
        
        <div class="mb-4">
            <h3 class="font-bold">${t('COLOR_ACCURACY')}</h3>
            <div class="h-40">
                <canvas id="accuracyChart"></canvas>
            </div>
        </div>
        
        <div class="mb-4">
            <h3 class="font-bold">${t('REACTION_TIMES')}</h3>
            <div class="h-40">
                <canvas id="reactionChart"></canvas>
            </div>
        </div>
        
        <div class="mb-4">
            <h3 class="font-bold">${t('MISSED_TARGETS')}</h3>
            <div class="h-40">
                <canvas id="missedChart"></canvas>
            </div>
        </div>
        
        <div class="mb-4">
            <h3 class="font-bold">${t('ANALYSIS')}</h3>
            <p>${generateAnalysis()}</p>
        </div>
    `;
    
    resultsContent.innerHTML = resultsHTML;
    
    // Add pass/flag indicator
    let hasIssue = false;
    Object.keys(testResults.colorAccuracy).forEach(color => {
        if (testResults.colorAccuracy[color] < 60) {
            hasIssue = true;
        }
    });
    
    if (hasIssue) {
        passFlagContainer.innerHTML = `
            <div class="bg-yellow-300 text-black font-bold p-2 rounded mb-2">
                ${t('FLAGGED')}: ${t('FLAG_MESSAGE')}
            </div>
        `;
    } else {
        passFlagContainer.innerHTML = `
            <div class="bg-green-300 text-black font-bold p-2 rounded mb-2">
                ${t('PASS')}: ${t('PASS_MESSAGE')}
            </div>
        `;
    }
    
    // Show the results modal
    resultsModal.classList.add('visible');
    
    // Create charts
    createResultCharts();
    
    // Save to history
    saveToHistory();
}

// Save test results to history
function saveToHistory() {
    // Get existing history
    historyData = JSON.parse(localStorage.getItem('colorVisionTestHistory') || '[]');
    
    // Add current test
    testResults.doctorNote = doctorNote.value;
    historyData.push(testResults);
    
    // Save back to localStorage
    localStorage.setItem('colorVisionTestHistory', JSON.stringify(historyData));
}

// Show history
function showHistory() {
    // Get history data
    historyData = JSON.parse(localStorage.getItem('colorVisionTestHistory') || '[]');
    
    // Create modal for history
    const historyModal = document.createElement('div');
    historyModal.className = 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-200';
    
    let historyContent = '';
    
    if (historyData.length === 0) {
        historyContent = `
            <div class="bg-white p-6 rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                <h2 class="text-2xl font-bold mb-4">${t('HISTORY_TITLE')}</h2>
                <p>${t('NO_HISTORY')}</p>
                <button id="closeHistoryBtn" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">${t('CLOSE')}</button>
            </div>
        `;
    } else {
        historyContent = `
            <div class="bg-white p-6 rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                <h2 class="text-2xl font-bold mb-4">${t('HISTORY_TITLE')}</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">${t('HISTORY_DATE')}</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">${t('HISTORY_ID')}</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">${t('HISTORY_NAME')}</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">${t('HISTORY_SCORE')}</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">${t('HISTORY_MODE')}</th>
                                <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">${t('ACTIONS')}</th>
                            </tr>
                        </thead>
                        <tbody>
        `;
        
        historyData.forEach((item, index) => {
            const date = new Date(item.date);
            const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
            
            historyContent += `
                <tr>
                    <td class="py-2 px-4 border-b border-gray-200">${formattedDate}</td>
                    <td class="py-2 px-4 border-b border-gray-200">${item.patientData.id || '-'}</td>
                    <td class="py-2 px-4 border-b border-gray-200">${item.patientData.name || '-'}</td>
                    <td class="py-2 px-4 border-b border-gray-200">${item.score}</td>
                    <td class="py-2 px-4 border-b border-gray-200">${item.testMode}</td>
                    <td class="py-2 px-4 border-b border-gray-200">
                        <button class="bg-blue-500 text-white px-2 py-1 rounded text-sm load-patient" data-index="${index}">${t('LOAD_PATIENT')}</button>
                    </td>
                </tr>
            `;
        });
        
        historyContent += `
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between mt-4">
                    <button id="closeHistoryBtn" class="bg-red-500 text-white px-4 py-2 rounded">${t('CLOSE')}</button>
                    <button id="clearHistoryBtn" class="bg-yellow-500 text-white px-4 py-2 rounded">${t('DELETE_HISTORY')}</button>
                </div>
            </div>
        `;
    }
    
    historyModal.innerHTML = historyContent;
    document.body.appendChild(historyModal);
    
    // Add event listeners
    document.getElementById('closeHistoryBtn').addEventListener('click', () => {
        document.body.removeChild(historyModal);
    });
    
    if (historyData.length > 0) {
        document.getElementById('clearHistoryBtn').addEventListener('click', () => {
            if (confirm('Are you sure you want to delete all history?')) {
                localStorage.removeItem('colorVisionTestHistory');
                document.body.removeChild(historyModal);
            }
        });
        
        document.querySelectorAll('.load-patient').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                loadPatientData(index);
                document.body.removeChild(historyModal);
            });
        });
    }
}

// Load patient data from history
function loadPatientData(index) {
    const patient = historyData[index];
    
    document.getElementById('patientId').value = patient.patientData.id || '';
    document.getElementById('patientName').value = patient.patientData.name || '';
    document.getElementById('patientAge').value = patient.patientData.age || '';
    
    // Open doctor panel
    toggleDoctorPanel(true);
}

// Create charts for results visualization
function createResultCharts() {
    // Prepare data for charts
    const colors = Object.keys(testResults.colorAccuracy);
    const accuracyValues = colors.map(color => testResults.colorAccuracy[color]);
    const reactionValues = colors.map(color => testResults.averageReactionTimes[color]);
    const missedValues = colors.map(color => testResults.missedTargets[color] || 0);
    
    // Create accuracy chart
    const accuracyCtx = document.getElementById('accuracyChart').getContext('2d');
    new Chart(accuracyCtx, {
        type: 'bar',
        data: {
            labels: colors,
            datasets: [{
                label: t('COLOR_ACCURACY'),
                data: accuracyValues,
                backgroundColor: colors.map(color => {
                    const colorInfo = findColorByName(color);
                    return colorInfo ? colorInfo.hex : '#888888';
                }),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
    
    // Create reaction time chart
    const reactionCtx = document.getElementById('reactionChart').getContext('2d');
    new Chart(reactionCtx, {
        type: 'bar',
        data: {
            labels: colors,
            datasets: [{
                label: t('REACTION_TIMES'),
                data: reactionValues,
                backgroundColor: colors.map(color => {
                    const colorInfo = findColorByName(color);
                    return colorInfo ? colorInfo.hex : '#888888';
                }),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Create missed targets chart
    const missedCtx = document.getElementById('missedChart').getContext('2d');
    new Chart(missedCtx, {
        type: 'bar',
        data: {
            labels: colors,
            datasets: [{
                label: t('MISSED_TARGETS'),
                data: missedValues,
                backgroundColor: colors.map(color => {
                    const colorInfo = findColorByName(color);
                    return colorInfo ? colorInfo.hex : '#888888';
                }),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Find color info by name
function findColorByName(name) {
    const palette = colorPalettes[gameSettings.colorBlindnessType || 'standard'];
    return palette.find(color => color.name === name);
}

// Generate analysis based on results
function generateAnalysis() {
    let analysis = '';
    
    switch (gameSettings.colorBlindnessType) {
        case 'protanopia':
            const redAccuracy = testResults.colorAccuracy[t('RED')] || 0;
            if (redAccuracy < 60) {
                analysis = t('ANALYSIS_PROTAN');
            } else {
                analysis = t('ANALYSIS_STANDARD');
            }
            break;
        case 'deuteranopia':
            const greenAccuracy = testResults.colorAccuracy[t('GREEN')] || 0;
            if (greenAccuracy < 60) {
                analysis = t('ANALYSIS_DEUTER');
            } else {
                analysis = t('ANALYSIS_STANDARD');
            }
            break;
        case 'tritanopia':
            const blueAccuracy = testResults.colorAccuracy[t('BLUE')] || 0;
            if (blueAccuracy < 60) {
                analysis = t('ANALYSIS_TRITAN');
            } else {
                analysis = t('ANALYSIS_STANDARD');
            }
            break;
        default:
            analysis = t('ANALYSIS_STANDARD');
    }
    
    return analysis;
}

// Export results as CSV
function exportResults() {
    // Add doctor's note to results
    testResults.doctorNote = doctorNote.value;
    
    const csvContent = generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `color_vision_test_${testResults.patientData.id || 'patient'}_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Update history with note
    saveToHistory();
}

// Generate CSV content from results
function generateCSV() {
    let csv = `Patient ID,Patient Name,Patient Age,Test Mode,Task Type,Score,Date,Doctor Note\n`;
    csv += `${testResults.patientData.id || 'Not provided'},${testResults.patientData.name || 'Not provided'},${testResults.patientData.age || 'Not provided'},${testResults.testMode},${testResults.taskType},${testResults.score},${new Date(testResults.date).toLocaleString()},"${testResults.doctorNote}"\n\n`;
    
    csv += 'Color,Accuracy (%),Reaction Time (ms),Missed Targets\n';
    
    for (const color in testResults.colorAccuracy) {
        csv += `${color},${testResults.colorAccuracy[color].toFixed(2)},${testResults.averageReactionTimes[color].toFixed(2)},${testResults.missedTargets[color] || 0}\n`;
    }
    
    return csv;
}

// Apply color blindness filter based on test mode
function applyColorBlindnessFilter() {
    // Remove any existing filters
    document.body.style.filter = '';
    
    // Apply filter based on test mode
    switch (gameSettings.colorBlindnessType) {
        case 'protanopia':
            // Simulate protanopia (red-blind)
            document.body.style.filter = 'url(#protanopia-filter)';
            break;
        case 'deuteranopia':
            // Simulate deuteranopia (green-blind)
            document.body.style.filter = 'url(#deuteranopia-filter)';
            break;
        case 'tritanopia':
            // Simulate tritanopia (blue-blind)
            document.body.style.filter = 'url(#tritanopia-filter)';
            break;
    }
}

// Update color options based on selected test mode
function updateColorOptions() {
    const colorSelection = document.getElementById('colorSelection');
    colorSelection.innerHTML = '';
    
    let colors = colorPalettes[gameSettings.colorBlindnessType || 'standard'];
    
    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-option';
        colorBox.innerHTML = `
            <label class="flex items-center">
                <input type="checkbox" value="${color.hex}" class="mr-1">
                <span class="w-4 h-4 inline-block mr-1" style="background-color: ${color.hex};"></span>
                ${color.name}
            </label>
        `;
        colorSelection.appendChild(colorBox);
    });
    
    // Add event listeners to checkboxes
    const checkboxes = document.querySelectorAll('.color-option input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateTargetColors();
        });
    });
}

// Update target colors based on checkbox selection
function updateTargetColors() {
    const checkboxes = document.querySelectorAll('.color-option input[type="checkbox"]:checked');
    gameSettings.targetColors = Array.from(checkboxes).map(cb => cb.value);
}

// Set difficulty presets
function setDifficulty(level) {
    if (level === 'easy') {
        gameSettings.enemySpeed = 0.7;
        gameSettings.spawnRate = 1600;
        gameSettings.testDuration = 60;
        gameSettings.lives = 5;
    } else if (level === 'normal') {
        gameSettings.enemySpeed = 1;
        gameSettings.spawnRate = 1000;
        gameSettings.testDuration = 60;
        gameSettings.lives = 3;
    } else if (level === 'hard') {
        gameSettings.enemySpeed = 1.5;
        gameSettings.spawnRate = 700;
        gameSettings.testDuration = 90;
        gameSettings.lives = 1;
    }
    
    // Update UI
    document.getElementById('enemySpeedRange').value = gameSettings.enemySpeed;
    document.getElementById('spawnRateRange').value = gameSettings.spawnRate;
    document.getElementById('testDuration').value = gameSettings.testDuration;
    document.getElementById('enemySpeedValue').textContent = `${gameSettings.enemySpeed}x`;
    document.getElementById('spawnRateValue').textContent = `${gameSettings.spawnRate}ms`;
}

// Start tutorial mode
function startTutorial() {
    tutorialMode = true;
    
    // Set tutorial settings
    gameSettings.enemySpeed = 0.5;
    gameSettings.spawnRate = 2000;
    gameSettings.testDuration = 0; // Infinite
    gameSettings.lives = 999; // Unlimited lives
    
    // Show instructions
    instructionsTitle.textContent = t('TUTORIAL_TITLE');
    instructionsText.textContent = t('TUTORIAL_DESC');
    beginTestBtn.textContent = t('TUTORIAL_BTN');
    instructionsOverlay.style.display = 'block';
    
    // Start game when user clicks begin
    beginTestBtn.onclick = () => {
        instructionsOverlay.style.display = 'none';
        
        // Start the game
        init();
        animate();
        spawnEnemies();
        modalEL.style.display = "none";
        flagGameOver = false;
    };
}

// Start the test with current settings
function startTest() {
    tutorialMode = false;
    
    // Apply settings to game
    applyColorBlindnessFilter();
    
    // Update test mode indicator
    testModeIndicator.textContent = document.getElementById('testModeSelect').options[document.getElementById('testModeSelect').selectedIndex].text;
    
    // Get auto-shoot setting
    gameSettings.autoShoot = document.getElementById('autoShoot').checked;
    
    // Close the doctor control panel
    toggleDoctorPanel(false);
    
    // Start the game
    if (flagGameOver) {
        init();
        animate();
        spawnEnemies();
        modalEL.style.display = "none";
        flagGameOver = false;
    }
}

// Toggle doctor control panel
function toggleDoctorPanel(show) {
    if (show === undefined) {
        doctorControlPanel.classList.toggle('open');
    } else if (show) {
        doctorControlPanel.classList.add('open');
    } else {
        doctorControlPanel.classList.remove('open');
    }
}

// Initialize virtual joystick UI for touch devices
function initTouchControls() {
    // Only create if on touch device
    if (!('ontouchstart' in window)) return;
    
    // Create touch buttons for mobile
    const buttonSize = Math.min(canvas.width, canvas.height) * 0.08;
    const margin = buttonSize * 0.5;
    
    // Up button
    touchButtons.push(new TouchButton(
        canvas.width - buttonSize * 2.5,
        canvas.height - buttonSize * 4,
        buttonSize,
        '↑',
        () => { keys.up = true; }
    ));
    
    // Left button
    touchButtons.push(new TouchButton(
        canvas.width - buttonSize * 4,
        canvas.height - buttonSize * 2.5,
        buttonSize,
        '←',
        () => { keys.left = true; }
    ));
    
    // Right button
    touchButtons.push(new TouchButton(
        canvas.width - buttonSize,
        canvas.height - buttonSize * 2.5,
        buttonSize,
        '→',
        () => { keys.right = true; }
    ));
    
    // Down button
    touchButtons.push(new TouchButton(
        canvas.width - buttonSize * 2.5,
        canvas.height - buttonSize,
        buttonSize,
        '↓',
        () => { keys.down = true; }
    ));
    
    // Shoot button
    touchButtons.push(new TouchButton(
        canvas.width - buttonSize * 2.5,
        canvas.height - buttonSize * 2.5,
        buttonSize * 1.2,
        '🔫',
        () => {
            const angle = Math.atan2(
                canvas.height / 2 - player.y,
                canvas.width / 2 - player.x
            );
            
            const velocity = {
                x: Math.cos(angle) * 5,
                y: Math.sin(angle) * 5,
            };
            
            projectiles.push(
                new Projectile(player.x, player.y, 4, "white", velocity)
            );
        }
    ));
    
    // Handle touch events for buttons
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        
        const rect = canvas.getBoundingClientRect();
        const touches = e.changedTouches;
        
        for (let i = 0; i < touches.length; i++) {
            const touch = touches[i];
            const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
            const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
            
            touchButtons.forEach(button => {
                if (button.isPointInside(x, y)) {
                    button.pressed = true;
                    button.action();
                }
            });
        }
    });
    
    canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        
        const rect = canvas.getBoundingClientRect();
        const touches = e.changedTouches;
        
        for (let i = 0; i < touches.length; i++) {
            const touch = touches[i];
            const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
            const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
            
            touchButtons.forEach(button => {
                if (button.isPointInside(x, y)) {
                    button.pressed = false;
                    
                    // Reset keys
                    if (button.text === '↑') keys.up = false;
                    if (button.text === '←') keys.left = false;
                    if (button.text === '→') keys.right = false;
                    if (button.text === '↓') keys.down = false;
                }
            });
        }
    });
}

// Initialize color legend
function initColorLegend() {
    // Update color legend based on current palette
    function updateColorLegend() {
        colorLegend.innerHTML = '';
        
        const currentPalette = colorPalettes[gameSettings.colorBlindnessType || 'standard'];
        currentPalette.forEach(color => {
            const colorItem = document.createElement('div');
            colorItem.className = 'color-item';
            colorItem.innerHTML = `
                <div class="color-box" style="background-color: ${color.hex};"></div>
                <span class="text-white text-xs">${color.name}</span>
            `;
            colorLegend.appendChild(colorItem);
        });
    }
    
    // Initial update
    updateColorLegend();
    
    // Update when test mode changes
    document.getElementById('testModeSelect').addEventListener('change', updateColorLegend);
}

// Add timer to UI
function initTimer() {
    timerContainer = document.createElement('div');
    timerContainer.className = 'fixed text-white text-base mr-2 mt-1 select-none';
    timerContainer.style.right = '100px';
    timerContainer.style.top = '10px';
    timerContainer.style.zIndex = '51';
    timerContainer.innerHTML = `<span id="timerTitle">${t('TIME')}: </span>`;
    timerContainer.appendChild(timerEl);
    timerEl.textContent = gameSettings.testDuration;
    document.body.appendChild(timerContainer);
}

// Switch language
function switchLanguage() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    updateAllText();
}

// Update all UI text based on current language
function updateAllText() {
    // Main UI
    scoreTitle.textContent = `${t('SCORE')}:`;
    scoreLabel.textContent = t('SCORE');
    startGameBtn.textContent = t('START_TEST');
    startTutorialBtn.textContent = t('TRAINING');
    controlsHint.textContent = t('USE_WASD');
    
    // Doctor panel
    doctorPanelTitle.textContent = t('DOCTOR_PANEL');
    patientInfoTitle.textContent = t('PATIENT_INFO');
    patientIdLabel.textContent = t('PATIENT_ID');
    patientNameLabel.textContent = t('PATIENT_NAME');
    patientAgeLabel.textContent = t('PATIENT_AGE');
    testModeTitle.textContent = t('TEST_MODE');
    standardModeOption.textContent = t('STANDARD_MODE');
    protanopiaOption.textContent = t('PROTANOPIA_TEST');
    deuteranopiaOption.textContent = t('DEUTERANOPIA_TEST');
    tritanopiaOption.textContent = t('TRITANOPIA_TEST');
    customOption.textContent = t('CUSTOM_TEST');
    difficultyTitle.textContent = t('DIFFICULTY');
    easyBtn.textContent = t('EASY');
    normalBtn.textContent = t('NORMAL');
    hardBtn.textContent = t('HARD');
    gameSettingsTitle.textContent = t('GAME_SETTINGS');
    enemySpeedLabel.textContent = t('ENEMY_SPEED');
    spawnRateLabel.textContent = t('SPAWN_RATE');
    testDurationLabel.textContent = t('TEST_DURATION');
    autoShootLabel.textContent = t('AUTO_SHOOT');
    taskTypeTitle.textContent = t('TASK_TYPE');
    shootAllOption.textContent = t('SHOOT_ALL');
    shootSpecificOption.textContent = t('SHOOT_SPECIFIC');
    avoidSpecificOption.textContent = t('AVOID_SPECIFIC');
    targetColorsTitle.textContent = t('TARGET_COLORS');
    startTestBtnPanel.textContent = t('START_TEST');
    resultsTitle.textContent = t('RESULTS');
    viewResultsBtn.textContent = t('VIEW_RESULTS');
    exportResultsBtn.textContent = t('EXPORT_RESULTS');
    showHistoryBtn.textContent = t('HISTORY');
    
    // Results modal
    resultsModalTitle.textContent = t('RESULTS');
    doctorNoteLabel.textContent = t('NOTE');
    closeResultsBtn.textContent = t('CLOSE');
    printBtn.textContent = t('PRINT');
    
    // Timer
    if (timerContainer) {
        timerContainer.querySelector('#timerTitle').textContent = `${t('TIME')}: `;
    }
    
    // Lives indicator
    updateLivesDisplay();
    
    // Test mode indicator
    const testModeSelect = document.getElementById('testModeSelect');
    if (testModeSelect.selectedIndex >= 0) {
        testModeIndicator.textContent = testModeSelect.options[testModeSelect.selectedIndex].text;
    }
    
    // Update color palettes
    Object.keys(colorPalettes).forEach(key => {
        colorPalettes[key].forEach(color => {
            if (color.name.includes('Red') || color.name.includes('Красный')) color.name = t('RED');
            if (color.name.includes('Green') || color.name.includes('Зелёный')) color.name = t('GREEN');
            if (color.name.includes('Blue') || color.name.includes('Синий')) color.name = t('BLUE');
            if (color.name.includes('Yellow') || color.name.includes('Жёлтый')) color.name = t('YELLOW');
            if (color.name.includes('Purple') || color.name.includes('Фиолетовый')) color.name = t('PURPLE');
            if (color.name.includes('Orange') || color.name.includes('Оранжевый')) color.name = t('ORANGE');
            if (color.name.includes('Pink') || color.name.includes('Розовый')) color.name = t('PINK');
            if (color.name.includes('Brown') || color.name.includes('Коричневый')) color.name = t('BROWN');
            if (color.name.includes('White') || color.name.includes('Белый')) color.name = t('WHITE');
            if (color.name.includes('Black') || color.name.includes('Чёрный')) color.name = t('BLACK');
        });
    });
    
    // Update color legend
    initColorLegend();
    
    // Update color options
    updateColorOptions();
}

// Generate auto patient ID
function generatePatientId() {
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 12);
    return `P${timestamp}`;
}

// Event listeners for keyboard controls
addEventListener('keydown', (event) => {
    switch (event.key.toLowerCase()) {
        case 'w': keys.w = true; break;
        case 'a': keys.a = true; break;
        case 's': keys.s = true; break;
        case 'd': keys.d = true; break;
        case 'arrowup': keys.up = true; break;
        case 'arrowleft': keys.left = true; break;
        case 'arrowdown': keys.down = true; break;
        case 'arrowright': keys.right = true; break;
    }
});

addEventListener('keyup', (event) => {
    switch (event.key.toLowerCase()) {
        case 'w': keys.w = false; break;
        case 'a': keys.a = false; break;
        case 's': keys.s = false; break;
        case 'd': keys.d = false; break;
        case 'arrowup': keys.up = false; break;
        case 'arrowleft': keys.left = false; break;
        case 'arrowdown': keys.down = false; break;
        case 'arrowright': keys.right = false; break;
    }
});

// Mouse click for shooting
addEventListener("click", (event) => {
    if (flagGameOver) return;
    
    const angle = Math.atan2(
        event.clientY - player.y,
        event.clientX - player.x
    );
    
    const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5,
    };
    
    projectiles.push(
        new Projectile(player.x, player.y, 4, "white", velocity)
    );
});

// Touch controls for mobile devices
addEventListener("touchstart", (event) => {
    event.preventDefault();
    
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    
    // If touch is on the right side of screen, it's for shooting
    if (touch.clientX > canvas.width / 2) {
        const angle = Math.atan2(
            touch.clientY - player.y,
            touch.clientX - player.x
        );
        
        shootingDirection = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        };
        
        isShooting = true;
        lastTouchTime = Date.now();
        
        // Create a projectile immediately
        const velocity = {
            x: shootingDirection.x * 5,
            y: shootingDirection.y * 5,
        };
        
        projectiles.push(
            new Projectile(player.x, player.y, 4, "white", velocity)
        );
    } 
    // If touch is on the left side, it's for movement
    else {
        touchJoystickActive = true;
    }
});

addEventListener("touchmove", (event) => {
    event.preventDefault();
    
    const touch = event.touches[0];
    
    // If touch is on the right side of screen, update shooting direction
    if (touch.clientX > canvas.width / 2) {
        const angle = Math.atan2(
            touch.clientY - player.y,
            touch.clientX - player.x
        );
        
        shootingDirection = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        };
    } 
    // If touch is on the left side, update joystick
    else if (touchJoystickActive) {
        // Calculate joystick vector (normalized)
        const dx = touch.clientX - touchStartX;
        const dy = touch.clientY - touchStartY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
            const maxDistance = 50; // Maximum joystick distance
            const normalizedDistance = Math.min(distance, maxDistance) / maxDistance;
            
            virtualJoystickPos = {
                x: (dx / distance) * normalizedDistance,
                y: (dy / distance) * normalizedDistance
            };
        }
    }
});

addEventListener("touchend", (event) => {
    event.preventDefault();
    
    // Check if this was the shooting touch
    if (isShooting) {
        isShooting = false;
    }
    
    // Check if this was the movement touch
    if (touchJoystickActive) {
        touchJoystickActive = false;
        virtualJoystickPos = { x: 0, y: 0 };
    }
});

// Handle window resize
addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    // Recreate touch buttons for new size
    touchButtons = [];
    initTouchControls();
});

// Initialize game
function initGame() {
    // Initialize UI components
    initTimer();
    initTouchControls();
    initColorLegend();
    
    // Load history data
    historyData = JSON.parse(localStorage.getItem('colorVisionTestHistory') || '[]');
    
    // Set up event listeners for doctor control panel
    document.getElementById('testModeSelect').addEventListener('change', (e) => {
        gameSettings.colorBlindnessType = e.target.value;
        document.getElementById('testModeDescription').textContent = 
            e.target.options[e.target.selectedIndex].text;
        updateColorOptions();
    });
    
    document.getElementById('taskTypeSelect').addEventListener('change', (e) => {
        gameSettings.taskType = e.target.value;
        const colorSelectionContainer = document.getElementById('colorSelectionContainer');
        if (e.target.value === 'all') {
            colorSelectionContainer.classList.add('hidden');
        } else {
            colorSelectionContainer.classList.remove('hidden');
            updateColorOptions();
        }
    });
    
    document.getElementById('enemySpeedRange').addEventListener('input', (e) => {
        gameSettings.enemySpeed = parseFloat(e.target.value);
        document.getElementById('enemySpeedValue').textContent = `${gameSettings.enemySpeed}x`;
    });
    
    document.getElementById('spawnRateRange').addEventListener('input', (e) => {
        gameSettings.spawnRate = parseInt(e.target.value);
        document.getElementById('spawnRateValue').textContent = `${gameSettings.spawnRate}ms`;
    });
    
    document.getElementById('testDuration').addEventListener('change', (e) => {
        gameSettings.testDuration = parseInt(e.target.value);
    });
    
    document.getElementById('autoShoot').addEventListener('change', (e) => {
        gameSettings.autoShoot = e.target.checked;
    });
    
    // Difficulty buttons
    document.getElementById('easyBtn').addEventListener('click', () => setDifficulty('easy'));
    document.getElementById('normalBtn').addEventListener('click', () => setDifficulty('normal'));
    document.getElementById('hardBtn').addEventListener('click', () => setDifficulty('hard'));
    
    // Toggle control panel buttons
    toggleControlPanel.addEventListener('click', () => toggleDoctorPanel());
    toggleMenuBtn.addEventListener('click', () => toggleDoctorPanel());
    
    // Start test button in doctor panel
    document.getElementById('startTestBtnPanel').addEventListener('click', startTest);
    
    // Results buttons
    document.getElementById('viewResultsBtn').addEventListener('click', showResults);
    document.getElementById('exportResultsBtn').addEventListener('click', exportResults);
    document.getElementById('showHistoryBtn').addEventListener('click', showHistory);
    closeResultsBtn.addEventListener('click', () => {
        resultsModal.classList.remove('visible');
        modalEL.style.display = "flex";
    });
    
    // Print button
    printBtn.addEventListener('click', () => {
        window.print();
    });
    
    // Language toggle
    langToggleBtn.addEventListener('click', switchLanguage);
    
    // Start game button in main modal
    startGameBtn.addEventListener('click', () => {
        startTest();
    });
    
    // Start tutorial button
    startTutorialBtn.addEventListener('click', () => {
        startTutorial();
    });
    
    // Auto-generate patient ID
    document.getElementById('patientId').value = generatePatientId();
    
    // Initialize color options
    updateColorOptions();
    
    // Update all text based on current language
    updateAllText();
}

// Initialize game when window loads
window.addEventListener('load', initGame);
