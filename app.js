/* ==========================================================================
   ANURAJ BHAWARLAL JANGID PORTFOLIO - CORE ENGINE
   ========================================================================== */

// DATA STRUCTURES
const PORTFOLIO_DATA = {
    stats: {
        trading: [
            { label: "Portfolio Yield", value: "+1,337.80%" },
            { label: "Risk Coefficient", value: "Beta 1.42 (Aggressive)" },
            { label: "Execution Speed", value: "99.98% / <5ms" }
        ],
        anime: [
            { label: "Adventurer Class", value: "Full-Stack Sorcerer" },
            { label: "Mana Capacity", value: "995 / 995 MP" },
            { label: "Threat Rank", value: "S-Rank Automator" }
        ]
    },
    skills: {
        languages: [
            { name: "Python", value: 92, nodeName: "Py-Alchemy", level: "Lvl 92" },
            { name: "Java", value: 85, nodeName: "Java-Shield", level: "Lvl 85" },
            { name: "C++", value: 80, nodeName: "C-Saber", level: "Lvl 80" },
            { name: "SQL & DBMS", value: 88, nodeName: "Oracle-Sight", level: "Lvl 88" },
            { name: "JavaScript / React", value: 84, nodeName: "Script-Conjure", level: "Lvl 84" },
            { name: "HTML / CSS", value: 90, nodeName: "Aura-Shape", level: "Lvl 90" }
        ],
        frameworks: [
            { name: "Python Flask", value: 88, nodeName: "Flask-Brew", level: "Lvl 88" },
            { name: "PySide6 (Desktop)", value: 82, nodeName: "GUI-Telekinesis", level: "Lvl 82" },
            { name: "PEFT Library (AI)", value: 75, nodeName: "LoRA-Enchantment", level: "Lvl 75" },
            { name: "Git / GitHub", value: 90, nodeName: "Time-Weave", level: "Lvl 90" }
        ],
        specialized: [
            { name: "AI Image/Video Gen", value: 86, nodeName: "Phantom-Summon", level: "Lvl 86" },
            { name: "Augmented Reality (AR)", value: 78, nodeName: "Illusion-Mirage", level: "Lvl 78" },
            { name: "Embedded Systems & IoT", value: 80, nodeName: "Golem-Spark", level: "Lvl 80" },
            { name: "RTOS & DBMS", value: 75, nodeName: "Core-Sync", level: "Lvl 75" }
        ]
    },
    projects: [
        {
            id: "safeher",
            title: "SafeHer – Women’s Safety System",
            date: "Feb 2026",
            techs: ["Python", "Backend APIs", "Git"],
            desc: "Developed a real-time women’s safety backend infrastructure, building secure and low-latency API endpoints for instant communication.",
            trading: { rank: "ACTIVE POSITION", stat1_label: "PROJ ROI", stat1_val: "+380%", stat2_label: "LIQUIDITY STATUS", stat2_val: "HIGH YIELD" },
            anime: { rank: "S-RANK QUEST", stat1_label: "QUEST REWARD", stat1_val: "3,800 Gold", stat2_label: "COMPANIONS REQUIRED", stat2_val: "Solo Clear" },
            image: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80')",
            repoUrl: "https://github.com/heyanuraj0805/SafeHer"
        },
        {
            id: "arshoe",
            title: "AR Shoe Measurement & Customization",
            date: "Dec 2025 - Jan 2026",
            techs: ["React", "HTML/CSS", "Computer Vision"],
            desc: "Designed and developed an augmented reality interface using device cameras for accurate shoe measurement and real-time visualization customization.",
            trading: { rank: "MERGER & ACQ", stat1_label: "MARKET CAP", stat1_val: "$12.4M", stat2_label: "ASSET CLASS", stat2_val: "COMPUTER VISION" },
            anime: { rank: "SS-RANK QUEST", stat1_label: "LOOT CHANCE", stat1_val: "98% Rare Drop", stat2_label: "MANA USED", stat2_val: "420 MP" },
            image: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80')",
            repoUrl: "https://github.com/heyanuraj0805/AR-Based-Shoe-Measurement-Customization"
        },
        {
            id: "expense",
            title: "Cross-Platform Expense Tracker",
            date: "Oct 2025",
            techs: ["Python", "PySide6", "SQL/DBMS"],
            desc: "Created a desktop management application featuring optimized SQL operations (DDL/DML), real-time budget forecasting, and automated categories.",
            trading: { rank: "HOLDING", stat1_label: "NAV DIVIDEND", stat1_val: "+12.5%", stat2_label: "RISK TOLERANCE", stat2_val: "LOW VOLATILITY" },
            anime: { rank: "A-RANK QUEST", stat1_label: "EXPERIENCE REWARD", stat1_val: "+1,200 EXP", stat2_label: "THREAT LEVEL", stat2_val: "Low Hazard" },
            image: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80')",
            repoUrl: "https://github.com/heyanuraj0805/Expense-Tracker-Application"
        },
        {
            id: "finosafe",
            title: "FinoSafe – Secure Finance Suite",
            date: "Sep 2025",
            techs: ["Finance Workflows", "Security", "Tracking"],
            desc: "Developed a secure, finance-focused workflow tracking application for budget planning, efficient ledger management, and risk minimization.",
            trading: { rank: "SECURED BOND", stat1_label: "ANNUAL COUPON", stat1_val: "8.50% FIXED", stat2_label: "LEVERAGE LIMIT", stat2_val: "1.25x Ratio" },
            anime: { rank: "A-RANK QUEST", stat1_label: "GUILD MERIT", stat1_val: "+20 Merits", stat2_label: "REPUTATION GAIN", stat2_val: "Parbhani Alliance" },
            image: "url('https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=500&q=80')",
            repoUrl: "https://github.com/heyanuraj0805/FinoSafe"
        }
    ],
    experience: [
        {
            role: "AI Deployment & Automation Intern",
            org: "EduSkills Foundation",
            date: "Dec 2025 - Mar 2026",
            bullets: [
                "Developed, optimized, and automated AI-driven workflows and deployment pipelines.",
                "Worked with automation tools to streamline system integrations and improve efficiency.",
                "Successfully completed a 10-week intensive internship program with official certification."
            ],
            trading: { icon: "📈", action: "ACQUIRED INTEL" },
            anime: { icon: "🧙‍♂️", action: "ARCH-MAGE ASSISTANT" }
        },
        {
            role: "FPGA & IoT Architect certifications",
            org: "e-Yantra IIT Bombay & NPTEL",
            date: "2025 - 2026",
            bullets: [
                "FPGA for Beginners - e-Yantra, IIT Bombay (2025).",
                "Advanced NPTEL Certifications: Machine Learning, Modern C++, Data Science for Engineers, IoT, and DBMS (IIT Kharagpur).",
                "Built and integrated robust hardware-software bridges and automated control loops."
            ],
            trading: { icon: "🏛️", action: "QUALIFIED STOCK" },
            anime: { icon: "📜", action: "SACRED SCROLLS MASTER" }
        },
        {
            role: "National Competition Finalist & Leader",
            org: "IIT Kharagpur & Hackathons",
            date: "Jan 2026 - Feb 2026",
            bullets: [
                "Selected for advanced rounds at IIT Kharagpur (Jan 2026).",
                "Led technical stack planning and architecture for a 5-member team in a 2026 Hackathon.",
                "Presented system mockups at CII Industry Academia Conclave 2.0 (Jul 2025)."
            ],
            trading: { icon: "🏆", action: "TOP OUTPERFORMER" },
            anime: { icon: "⚔️", action: "HERO GUILD LEADER" }
        }
    ],
    ticker: {
        trading: [
            { text: "$ANURJ", trend: "up", val: "▲ +1,337.8%" },
            { text: "PYTHON", trend: "up", val: "▲ +4.62%" },
            { text: "JAVA", trend: "up", val: "▲ +1.89%" },
            { text: "C++", trend: "down", val: "▼ -0.34%" },
            { text: "REACT", trend: "up", val: "▲ +8.15%" },
            { text: "SQL_DBMS", trend: "up", val: "▲ +2.45%" },
            { text: "AI_AUTOMATE", trend: "up", val: "▲ +24.1%" },
            { text: "EMBEDDED_IoT", trend: "up", val: "▲ +7.30%" }
        ],
        anime: [
            { text: "[CHRONICLE]", trend: "up", val: "Anuraj integrated SafeHer AI Pipeline!" },
            { text: "[LEVEL UP]", trend: "up", val: "Learned LoRA and PEFT spells! +100 INT" },
            { text: "[RAID REPORT]", trend: "up", val: "e-Yantra IIT Bombay quest conquered!" },
            { text: "[GUILD ORDER]", trend: "down", val: "C++ dragon successfully tamed!" },
            { text: "[WORLD EVENT]", trend: "up", val: "Hackathon 5-member party formed!" }
        ]
    },
    vocab: {
        trading: {
            "nav-home": "Market Overview",
            "nav-skills": "Asset Allocation",
            "nav-projects": "Active Positions",
            "nav-experience": "Trade History",
            "nav-contact": "Place Order",
            "nav-resume-text": "Download Resume",
            "hero-badge-text": "LIVE TRADING ACTIVE",
            "hero-greeting": "EXECUTE_INIT:",
            "hero-subtitle": "AI DEPLOYMENT & AUTOMATION QUANT",
            "hero-bio": "Undergraduate B.Tech CSE student (Graduating 2027). Specializing in AI-driven workflows, augmented reality, embedded systems, and robust full-stack automations. Building high-performance software at the intersection of intelligence and efficiency.",
            "hero-primary-text": "View Assets",
            "hero-secondary-text": "Download Resume",
            "visual-panel-title": "PORTFOLIO_LIVE_FEED",
            "visual-panel-status": "ONLINE",
            "skills-tag": "ANALYSIS",
            "skills-title": "Asset Allocation",
            "projects-tag": "HOLDINGS",
            "projects-title": "Active Positions",
            "experience-tag": "LEDGER",
            "experience-title": "Transaction History",
            "contact-tag": "ORDER DESK",
            "contact-title": "Place Order",
            "form-terminal-title": "ORDER TRANSACTION SHEET",
            "label-name": "Client Name",
            "label-email": "Client Email Address",
            "label-subject": "Order Scope / Subject",
            "label-message": "Contract Details",
            "form-submit-text": "Execute Contract",
            "game-terminal-title": "MARKET CAPITALIZATION TOOL",
            "clicker-label": "ANURAJ VALUATION:",
            "clicker-sub": "▲ Market Cap USD",
            "clicker-btn-text": "BUY SHARES",
            "clicker-instruction": "Click the terminal button to purchase equity and increase market liquidity!",
            "footer-tagline": "Automating reality, one block at a time."
        },
        anime: {
            "nav-home": "Guild Hall",
            "nav-skills": "Skill Tree",
            "nav-projects": "S-Rank Quests",
            "nav-experience": "Chronicles",
            "nav-contact": "Summon Guild",
            "nav-resume-text": "Obtain Grimoire",
            "hero-badge-text": "GUILD CAMPAIGN ACTIVE",
            "hero-greeting": "SPELL_CAST:",
            "hero-subtitle": "S-RANK FULL-STACK SORCERER",
            "hero-bio": "A level 21 wizard specializing in automation mechanics, computer vision illusions, and embedded magical devices. Leveling up daily by forging high-performance systems and defeating bugs across modern digital realms.",
            "hero-primary-text": "Quest Board",
            "hero-secondary-text": "Obtain Grimoire",
            "visual-panel-title": "MANA_GENERATION_SIGIL",
            "visual-panel-status": "CHARGED",
            "skills-tag": "GRIMOIRE",
            "skills-title": "Class Skill Tree",
            "projects-tag": "GUILD BOARD",
            "projects-title": "S-Rank Quests",
            "experience-tag": "QUEST LOG",
            "experience-title": "Adventurer Chronicles",
            "contact-tag": "SUMMONING PARCHMENT",
            "contact-title": "Summon Mage",
            "form-terminal-title": "GUILD SUMMON CONTRACT",
            "label-name": "Adventurer Name",
            "label-email": "Guild Owl Email Address",
            "label-subject": "Quest Scope / Danger Level",
            "label-message": "Quest Description & Loot Offering",
            "form-submit-text": "Cast Summon Spell",
            "game-terminal-title": "MANA CHARGE CRYSTAL",
            "clicker-label": "ANURAJ MANA FLOW:",
            "clicker-sub": "⚡ Current Spell Power",
            "clicker-btn-text": "CHARGE MANA",
            "clicker-instruction": "Tap the crystal sigil to feed mana into the system and enhance spell multipliers!",
            "footer-tagline": "Scribing high-performance sigils across digital horizons."
        }
    }
};

// STATE ENGINE
let currentTheme = 'trading'; // 'trading' or 'anime'
let clickerValue = 1000000;  // Trading shares valuation or Anime mana count
let scrollTriggeredReveal = false;

// DOM ELEMENT REFERENCES
const elements = {
    body: document.body,
    toggleBtn: document.getElementById('dimension-toggle-btn'),
    toggleLabel: document.getElementById('toggle-label-text'),
    portalWipe: document.getElementById('portal-wipe'),
    logoModeIcon: document.querySelector('.logo-mode-icon'),
    customCursor: document.getElementById('custom-cursor'),
    customCursorDot: document.getElementById('custom-cursor-dot'),
    tickerContent: document.getElementById('ticker-content'),
    heroStatsPanel: document.getElementById('hero-stats-panel'),
    skillsGrid: document.getElementById('skills-grid'),
    projectsGrid: document.getElementById('projects-grid'),
    experienceTimeline: document.getElementById('experience-timeline'),
    contactForm: document.getElementById('contact-form'),
    clickerValue: document.getElementById('clicker-value'),
    clickerBtn: document.getElementById('clicker-btn'),
    clickerBtnText: document.getElementById('clicker-btn-text'),
    interactiveCanvas: document.getElementById('interactive-canvas')
};

// INITIALIZE APP
window.addEventListener('DOMContentLoaded', () => {
    initCursor();
    renderThemeDependentUI();
    initThemeSwitch();
    initClickerGame();
    initInteractiveCanvas();
    lucide.createIcons();
    observeElementsForAnimation();
    
    // Smooth scrolling active state
    window.addEventListener('scroll', handleActiveNavLink);
});

// 1. CUSTOM CURSOR LOGIC
function initCursor() {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Cursor circle delay interpolation
        const easeCircle = 0.15;
        cursorX += (mouseX - cursorX) * easeCircle;
        cursorY += (mouseY - cursorY) * easeCircle;
        
        elements.customCursor.style.left = `${cursorX}px`;
        elements.customCursor.style.top = `${cursorY}px`;

        // Cursor inner dot speed
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;
        elements.customCursorDot.style.left = `${dotX}px`;
        elements.customCursorDot.style.top = `${dotY}px`;

        requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Expand cursor hover animations
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .clicker-btn, .skill-tree-node');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            elements.customCursor.style.width = '55px';
            elements.customCursor.style.height = '55px';
            elements.customCursor.style.borderColor = 'rgba(var(--accent-rgb), 0.8)';
            elements.customCursor.style.backgroundColor = 'rgba(var(--accent-rgb), 0.05)';
        });
        el.addEventListener('mouseleave', () => {
            elements.customCursor.style.width = '32px';
            elements.customCursor.style.height = '32px';
            elements.customCursor.style.borderColor = 'var(--accent)';
            elements.customCursor.style.backgroundColor = 'transparent';
        });
    });
}

// 2. DIMENSION SHIFT SWAP SYSTEM
function initThemeSwitch() {
    elements.toggleBtn.addEventListener('click', () => {
        // Trigger sound effects (using low-latency synthesis so it requires no audio files!)
        playDimensionShiftSound();
        
        // Circular clip-path wipe animation from center
        elements.portalWipe.style.transition = 'none';
        elements.portalWipe.style.clipPath = 'circle(0% at 50% 50%)';
        
        // Force reflow
        elements.portalWipe.offsetHeight;
        
        elements.portalWipe.style.transition = 'clip-path 0.75s cubic-bezier(0.85, 0, 0.15, 1)';
        elements.portalWipe.style.clipPath = 'circle(150% at 50% 50%)';
        
        setTimeout(() => {
            // Halfway transition: swap styles & vocabulary terms
            currentTheme = currentTheme === 'trading' ? 'anime' : 'trading';
            
            if (currentTheme === 'trading') {
                elements.body.classList.remove('theme-anime');
                elements.body.classList.add('theme-trading');
                elements.logoModeIcon.textContent = '🗠';
                clickerValue = 1250000;
            } else {
                elements.body.classList.remove('theme-trading');
                elements.body.classList.add('theme-anime');
                elements.logoModeIcon.textContent = '⚔';
                clickerValue = 9450;
            }
            
            // Re-render elements that depend on the active theme
            renderThemeDependentUI();
            
            // Reset Lucide icons
            lucide.createIcons();
            
            // Reset canvas state
            resetCanvasState();

            // Setup proper cursor animations on new elements
            initCursor();
            
        }, 375); // Halfway of 750ms

        // Pull back wipe portal
        setTimeout(() => {
            elements.portalWipe.style.transition = 'clip-path 0.5s cubic-bezier(0.85, 0, 0.15, 1)';
            elements.portalWipe.style.clipPath = 'circle(0% at 50% 50%)';
        }, 750);
    });
}

// Low-latency web audio synth for game/toggle retro sound effect
function playDimensionShiftSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Oscillator 1: Sweeping pitch
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = currentTheme === 'trading' ? 'sawtooth' : 'sine';
        osc.frequency.setValueAtTime(currentTheme === 'trading' ? 120 : 440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(currentTheme === 'trading' ? 880 : 220, audioCtx.currentTime + 0.3);
        
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {
        // Fallback silently if WebAudio is blocked
    }
}

// 3. RENDER CORE THEMATIC UI DETAILS
function renderThemeDependentUI() {
    const vocab = PORTFOLIO_DATA.vocab[currentTheme];
    
    // A. Dynamic text substitution based on dictionary
    for (const [id, value] of Object.entries(vocab)) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = value;
    }
    
    // Also update navbar elements based on data attributes
    document.querySelectorAll('[data-term]').forEach(el => {
        const key = el.getAttribute('data-term');
        if (vocab[key]) el.textContent = vocab[key];
    });

    // B. Render Ticker Tape Text
    const tickerItems = PORTFOLIO_DATA.ticker[currentTheme];
    let tickerHtml = '';
    // Duplicate arrays to make seamless scrolling ticker looping
    const doubledTicker = [...tickerItems, ...tickerItems, ...tickerItems];
    doubledTicker.forEach(item => {
        const isUp = item.trend === 'up';
        const colorClass = isUp ? 'ticker-up' : 'ticker-down';
        const icon = isUp ? '▲' : '▼';
        tickerHtml += `
            <div class="ticker-item">
                <span>${item.text}</span>
                <span class="${colorClass}">${item.val}</span>
            </div>
        `;
    });
    elements.tickerContent.innerHTML = tickerHtml;

    // C. Render Hero Stats Grid
    const heroStats = PORTFOLIO_DATA.stats[currentTheme];
    let statsHtml = '';
    if (currentTheme === 'trading') {
        heroStats.forEach(stat => {
            statsHtml += `
                <div class="stat-item">
                    <span class="stat-label">${stat.label}</span>
                    <span class="stat-value pulse-element">${stat.value}</span>
                </div>
            `;
        });
    } else {
        // Render beautiful RPG gauges for Anime
        statsHtml = `
            <div class="rpg-stat-bar-group">
                <div class="rpg-stat">
                    <span class="rpg-label">HP [Health]</span>
                    <div class="rpg-bar-wrapper">
                        <div class="rpg-bar-fill" style="width: 100%"></div>
                    </div>
                    <span class="rpg-value">2,750 / 2,750</span>
                </div>
                <div class="rpg-stat">
                    <span class="rpg-label">MP [Mana]</span>
                    <div class="rpg-bar-wrapper">
                        <div class="rpg-bar-fill" style="width: 95%; background: linear-gradient(90deg, #00ffff, #7f00ff);"></div>
                    </div>
                    <span class="rpg-value">950 / 999</span>
                </div>
                <div class="rpg-stat">
                    <span class="rpg-label">XP [Exp]</span>
                    <div class="rpg-bar-wrapper">
                        <div class="rpg-bar-fill" style="width: 84%; background: linear-gradient(90deg, #ffc107, #ff9800);"></div>
                    </div>
                    <span class="rpg-value">Level 21 (84%)</span>
                </div>
            </div>
        `;
    }
    elements.heroStatsPanel.innerHTML = statsHtml;

    // D. Render Skills section
    let skillsHtml = '';
    if (currentTheme === 'trading') {
        // Trading mode renders clean asset gauge cards
        for (const [catName, list] of Object.entries(PORTFOLIO_DATA.skills)) {
            const displayCat = catName.toUpperCase();
            let subListHtml = '';
            list.forEach(skill => {
                subListHtml += `
                    <div class="skill-bar-item" onclick="triggerSkillNodeClick('${skill.name}', 'Asset Allocation', ${skill.value})" style="cursor: pointer;">
                        <div class="skill-name-row">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-perf-val">${skill.value}% Holding</span>
                        </div>
                        <div class="skill-track">
                            <div class="skill-fill" data-percent="${skill.value}" style="width: 0%"></div>
                        </div>
                    </div>
                `;
            });
            skillsHtml += `
                <div class="skill-category-card">
                    <h3 class="skill-cat-title">
                        <i data-lucide="bar-chart-2"></i>
                        <span>${displayCat} LIQUIDITY</span>
                    </h3>
                    <div class="skill-bars-list">
                        ${subListHtml}
                    </div>
                </div>
            `;
        }
    } else {
        // Anime mode renders magic spell skills
        for (const [catName, list] of Object.entries(PORTFOLIO_DATA.skills)) {
            const displayCat = catName === 'languages' ? 'Spell Languages' : catName === 'frameworks' ? 'Magic Matrices' : 'Mystic Specialities';
            let subListHtml = '';
            list.forEach(skill => {
                subListHtml += `
                    <div class="skill-tree-node" onclick="triggerSkillNodeClick('${skill.name}', '${skill.nodeName}', ${skill.value})">
                        <span class="node-icon">✨</span>
                        <div class="node-info">
                            <div class="node-title">${skill.nodeName} (${skill.name})</div>
                            <div class="node-level">${skill.level} • Power Rating: ${skill.value * 10} pts</div>
                        </div>
                    </div>
                `;
            });
            skillsHtml += `
                <div class="skill-category-card">
                    <h3 class="skill-cat-title">
                        <i data-lucide="book-open"></i>
                        <span>${displayCat}</span>
                    </h3>
                    <div class="skill-tree-container">
                        ${subListHtml}
                    </div>
                </div>
            `;
        }
    }
    elements.skillsGrid.innerHTML = skillsHtml;

    // Trigger skills fill bar expand animation
    setTimeout(() => {
        document.querySelectorAll('.skill-fill').forEach(fill => {
            const targetWidth = fill.getAttribute('data-percent');
            fill.style.width = `${targetWidth}%`;
        });
    }, 100);

    // E. Render Project Cards Grid
    let projHtml = '';
    PORTFOLIO_DATA.projects.forEach(proj => {
        const themeStats = currentTheme === 'trading' ? proj.trading : proj.anime;
        const badges = proj.techs.map(t => `<span class="tech-badge">${t}</span>`).join('');
        
        const btnText = currentTheme === 'trading' ? 'ACCESS LIQUIDITY CODE' : 'RAID QUEST REPO';
        
        projHtml += `
            <div class="project-card">
                <div class="project-card-image">
                    <div class="project-cover-placeholder" style="background-image: ${proj.image}"></div>
                    <span class="project-rank-overlay">${themeStats.rank}</span>
                </div>
                <div class="project-card-content">
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-desc">${proj.desc}</p>
                    <div class="project-tech-list">
                        ${badges}
                    </div>
                    
                    <a href="${proj.repoUrl}" target="_blank" class="btn btn-secondary project-repo-link" style="margin-top: 1rem; width: 100%; font-size: 0.75rem; padding: 0.6rem 1rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <i data-lucide="${currentTheme === 'trading' ? 'code' : 'swords'}" style="width: 14px; height: 14px;"></i>
                        <span>${btnText}</span>
                    </a>

                    <div class="project-stats-block" style="border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: 1.25rem;">
                        <div class="proj-stat">
                            <span class="proj-label">${themeStats.stat1_label}</span>
                            <span class="proj-val positive">${themeStats.stat1_val}</span>
                        </div>
                        <div class="proj-stat">
                            <span class="proj-label">${themeStats.stat2_label}</span>
                            <span class="proj-val">${themeStats.stat2_val}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    elements.projectsGrid.innerHTML = projHtml;

    // F. Render Timeline Events
    let timeHtml = '';
    PORTFOLIO_DATA.experience.forEach(exp => {
        const modeExp = currentTheme === 'trading' ? exp.trading : exp.anime;
        const bulletsHtml = exp.bullets.map(bullet => `<li>${bullet}</li>`).join('');
        
        timeHtml += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-header">
                        <div>
                            <h3 class="timeline-role">${exp.role}</h3>
                            <div class="timeline-org">${modeExp.icon} ${exp.org}</div>
                        </div>
                        <span class="timeline-date">${exp.date}</span>
                    </div>
                    <div class="timeline-body">
                        <ul>
                            ${bulletsHtml}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
    elements.experienceTimeline.innerHTML = timeHtml;

    // G. Form Submission Override Setup
    elements.contactForm.onsubmit = handleFormSubmission;

    // H. Adjust Clicker mini-game output numbers
    updateClickerWidgetText();
}

// 4. ACTIVE PORTFOLIO FORM SUBMISSION
function handleFormSubmission(e) {
    e.preventDefault();
    playDimensionShiftSound();
    
    const clientName = document.getElementById('form-name').value;
    const clientEmail = document.getElementById('form-email').value;
    
    // Create custom success notification overlay
    const overlay = document.createElement('div');
    overlay.className = 'custom-cursor';
    overlay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--bg-secondary);
        border: 2px solid var(--accent);
        border-radius: var(--border-radius-lg);
        padding: 3rem;
        z-index: 10005;
        text-align: center;
        max-width: 450px;
        width: 90%;
        box-shadow: var(--neon-glow), 0 10px 40px rgba(0,0,0,0.8);
        backdrop-filter: blur(15px);
        animation: form-success-reveal 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    `;
    
    const titleText = currentTheme === 'trading' ? 'BUY ORDER EXECUTED! 📈' : 'CONTRACT SUMMONED! 📜';
    const bodyText = currentTheme === 'trading' 
        ? `Transaction pending clearance. Anuraj will verify terms for client <strong>${clientName}</strong> and reply directly to <strong>${clientEmail}</strong>.`
        : `Guild messages successfully sent! Anuraj the Automator has received your quest offering and will reply to <strong>${clientEmail}</strong> within 1 solar day!`;
        
    overlay.innerHTML = `
        <h2 style="font-family: var(--font-display); color: var(--accent); margin-bottom: 1.5rem;">${titleText}</h2>
        <p style="color: var(--text-primary); line-height: 1.6; margin-bottom: 2rem;">${bodyText}</p>
        <button class="btn btn-primary" id="success-close-btn">Confirm Contract</button>
    `;
    
    document.body.appendChild(overlay);
    
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    
    document.getElementById('success-close-btn').addEventListener('click', () => {
        overlay.remove();
        document.body.style.overflow = 'auto';
        elements.contactForm.reset();
    });
}

// 5. THE MINI-GAME WIDGET Engine
function initClickerGame() {
    elements.clickerBtn.addEventListener('click', (e) => {
        playClickGameSynth();
        
        // Spawn text bubble floating particles
        const rect = elements.clickerBtn.getBoundingClientRect();
        const spawnX = rect.left + rect.width / 2;
        const spawnY = rect.top;
        
        const floatBubble = document.createElement('div');
        floatBubble.className = 'click-particle';
        
        // Flying directions
        const randomX = (Math.random() - 0.5) * 60;
        floatBubble.style.setProperty('--fly-x', `${randomX}px`);
        floatBubble.style.left = `${e.clientX}px`;
        floatBubble.style.top = `${e.clientY}px`;
        
        if (currentTheme === 'trading') {
            const addedValue = Math.floor(Math.random() * 25000) + 10000;
            clickerValue += addedValue;
            floatBubble.textContent = `+$${(addedValue / 1000).toFixed(0)}K`;
            floatBubble.style.color = '#00ff66';
        } else {
            const addedMana = Math.floor(Math.random() * 80) + 30;
            clickerValue += addedMana;
            // Spawn flowers or mana spark texts
            const particlesIcons = ['🌸', '✨', '⚡', '+90 XP', '+15 MP'];
            floatBubble.textContent = particlesIcons[Math.floor(Math.random() * particlesIcons.length)];
            floatBubble.style.color = '#ff007f';
        }
        
        document.body.appendChild(floatBubble);
        setTimeout(() => floatBubble.remove(), 800);
        
        // Add direct impact shrink animation to button
        elements.clickerValue.style.transform = 'scale(1.15)';
        setTimeout(() => {
            elements.clickerValue.style.transform = 'scale(1)';
        }, 100);

        updateClickerWidgetText();
    });
}

function updateClickerWidgetText() {
    if (currentTheme === 'trading') {
        elements.clickerValue.textContent = `$${clickerValue.toLocaleString()}`;
    } else {
        elements.clickerValue.textContent = `${clickerValue.toLocaleString()} MP`;
    }
}

// Synthesize clean retro click sound
function playClickGameSynth() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(currentTheme === 'trading' ? 650 : 880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(currentTheme === 'trading' ? 950 : 1320, audioCtx.currentTime + 0.1);
        
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {}
}

// 6. INTERACTIVE DUAL CANVAS RENDER (Trading: Candlesticks, Anime: Sorcery Circle)
let canvasCtx = null;
let canvasWidth = 0;
let canvasHeight = 0;
let canvasAnimationId = null;
let candles = [];
let sigilAngle = 0;
let mouseCanvasX = 0;
let mouseCanvasY = 0;

function initInteractiveCanvas() {
    const canvas = elements.interactiveCanvas;
    canvasCtx = canvas.getContext('2d');
    
    // Set responsive pixel ratio
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseCanvasX = (e.clientX - rect.left) * (canvas.width / rect.width);
        mouseCanvasY = (e.clientY - rect.top) * (canvas.height / rect.height);
    });

    resetCanvasState();
    animateCanvasLoop();
}

function resizeCanvas() {
    const canvas = elements.interactiveCanvas;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvasWidth = rect.width;
    canvasHeight = rect.height;
    
    canvas.width = canvasWidth * window.devicePixelRatio;
    canvas.height = canvasHeight * window.devicePixelRatio;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    
    if (canvasCtx) {
        canvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
}

function resetCanvasState() {
    candles = [];
    // Pre-populate 20 stock candles
    let currentPrice = 150;
    for (let i = 0; i < 24; i++) {
        const open = currentPrice + (Math.random() - 0.5) * 15;
        const close = open + (Math.random() - 0.5) * 20;
        const high = Math.max(open, close) + Math.random() * 8;
        const low = Math.min(open, close) - Math.random() * 8;
        candles.push({ open, close, high, low });
        currentPrice = close;
    }
}

function animateCanvasLoop() {
    if (!canvasCtx) return;
    
    // Clear canvas
    canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    if (currentTheme === 'trading') {
        drawTradingCandlestickChart();
    } else {
        drawAnimeMagicSigil();
    }
    
    canvasAnimationId = requestAnimationFrame(animateCanvasLoop);
}

// Draw realistic moving candlestick stock graph
function drawTradingCandlestickChart() {
    const ctx = canvasCtx;
    const padding = 35;
    const chartW = canvasWidth - padding * 2;
    const chartH = canvasHeight - padding * 2;
    
    // Draw background grid lines
    ctx.strokeStyle = 'rgba(0, 255, 102, 0.05)';
    ctx.lineWidth = 1;
    for (let x = padding; x <= padding + chartW; x += chartW / 5) {
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartH);
        ctx.stroke();
    }
    for (let y = padding; y <= padding + chartH; y += chartH / 4) {
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartW, y);
        ctx.stroke();
    }
    
    // Generate real-time ticks for the active candlestick
    const lastIdx = candles.length - 1;
    if (Math.random() > 0.94) {
        // Form a new candle, push left
        candles.shift();
        const open = candles[candles.length - 1].close;
        const close = open + (Math.random() - 0.5) * 12;
        candles.push({ open, close, high: Math.max(open, close), low: Math.min(open, close) });
    } else {
        // Ticking movement
        const candle = candles[lastIdx];
        candle.close += (Math.random() - 0.5) * 2.5;
        if (candle.close > candle.high) candle.high = candle.close;
        if (candle.close < candle.low) candle.low = candle.close;
    }
    
    // Find limits for scaling
    let minVal = Infinity, maxVal = -Infinity;
    candles.forEach(c => {
        if (c.low < minVal) minVal = c.low;
        if (c.high > maxVal) maxVal = c.high;
    });
    
    const padVal = (maxVal - minVal) * 0.1;
    minVal -= padVal;
    maxVal += padVal;
    
    const scaleY = (val) => padding + chartH - ((val - minVal) / (maxVal - minVal)) * chartH;
    const stepX = chartW / candles.length;
    
    // Plot candlesticks
    candles.forEach((c, idx) => {
        const x = padding + idx * stepX + stepX / 2;
        const yOpen = scaleY(c.open);
        const yClose = scaleY(c.close);
        const yHigh = scaleY(c.high);
        const yLow = scaleY(c.low);
        
        const bullish = c.close >= c.open;
        const strokeColor = bullish ? '#00ff66' : '#ff334b';
        
        // Draw wick
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, yHigh);
        ctx.lineTo(x, yLow);
        ctx.stroke();
        
        // Draw body block
        ctx.fillStyle = bullish ? 'rgba(0, 255, 102, 0.25)' : 'rgba(255, 51, 75, 0.25)';
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.5;
        const rectW = stepX * 0.6;
        ctx.beginPath();
        ctx.rect(x - rectW / 2, Math.min(yOpen, yClose), rectW, Math.abs(yClose - yOpen));
        ctx.fill();
        ctx.stroke();
    });
    
    // Draw Moving Average Line overlay
    ctx.strokeStyle = '#00e5ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    candles.forEach((c, idx) => {
        const x = padding + idx * stepX + stepX / 2;
        // Simple MA logic
        let sum = 0;
        let count = 0;
        for (let j = Math.max(0, idx - 4); j <= idx; j++) {
            sum += candles[j].close;
            count++;
        }
        const ma = sum / count;
        if (idx === 0) ctx.moveTo(x, scaleY(ma));
        else ctx.lineTo(x, scaleY(ma));
    });
    ctx.stroke();

    // Hover interactive stock tooltip line
    if (mouseCanvasX > padding && mouseCanvasX < padding + chartW) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        
        ctx.beginPath();
        ctx.moveTo(mouseCanvasX, padding);
        ctx.lineTo(mouseCanvasX, padding + chartH);
        ctx.stroke();
        
        ctx.setLineDash([]);
    }
}

// Draw premium rotating cyber-sorcery summoning matrix
function drawAnimeMagicSigil() {
    const ctx = canvasCtx;
    const cx = canvasWidth / 2;
    const cy = canvasHeight / 2;
    const radius = Math.min(canvasWidth, canvasHeight) * 0.38;
    
    sigilAngle += 0.007; // Rotate speed
    
    // Draw glowing circles
    ctx.strokeStyle = 'rgba(255, 0, 127, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.08, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.strokeStyle = 'rgba(255, 0, 127, 0.7)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(0, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.85, 0, Math.PI * 2);
    ctx.stroke();
    
    // Draw rotating stars/sigils
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(sigilAngle);
    
    // Draw Triangle 1
    ctx.strokeStyle = 'rgba(255, 0, 127, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
    
    // Draw Triangle 2 (inverted for hexagram)
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3 + Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();

    // Draw inner circles and details
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.4, 0, Math.PI * 2);
    ctx.stroke();

    // Inner Square
    ctx.beginPath();
    ctx.rect(-radius*0.25, -radius*0.25, radius*0.5, radius*0.5);
    ctx.stroke();

    // Draw small nodes on outer edges
    for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        ctx.fillStyle = '#ff007f';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.stroke();
    }
    ctx.restore();

    // Draw particles pulling to mouse inside sigil
    const distToMouse = Math.hypot(cx - mouseCanvasX, cy - mouseCanvasY);
    if (distToMouse < radius * 1.5) {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(mouseCanvasX, mouseCanvasY);
        ctx.stroke();
        
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(mouseCanvasX, mouseCanvasY, 4, 0, Math.PI * 2);
        ctx.fill();
    }
}

// 7. OBSERVE ELEMENTS FOR ENTRY ANIMATION (Intersection Observer)
function observeElementsForAnimation() {
    const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-element');
                // Trigger specific anims if needed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fading trigger css on cards and blocks
    const animatedSelectors = '.skill-category-card, .project-card, .timeline-item, .contact-card';
    document.querySelectorAll(animatedSelectors).forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
}

// 8. ACTIVE NAV BAR SELECTION HIGHLIGHT
function handleActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSecId = 'hero';
    
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            currentSecId = id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSecId}`) {
            link.classList.add('active');
        }
    });
}

// Additional styles for scroll revealing injected dynamically
const styleTag = document.createElement('style');
styleTag.textContent = `
    .reveal-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .visible-element {
        opacity: 1;
        transform: translateY(0);
    }
    @keyframes form-success-reveal {
        from { transform: translate(-50%, -40%) scale(0.9); opacity: 0; }
        to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
`;
document.head.appendChild(styleTag);

// 9. ACTIVE SKILL DETAILED POPUPS
const SKILL_EXPLANATIONS = {
    "Python": "Anuraj's primary language for AI workflow automations, custom PEFT fine-tuning, and robust backends (SafeHer).",
    "Java": "Leveraged for enterprise object-oriented design and data structures built through Apna College masteries.",
    "C++": "Utilized for embedded firmware register controls, FPGA boards, and real-time kernel synchronizations.",
    "SQL & DBMS": "Applied to construct transaction tables, budgeting forecasting layers, and optimize secure DB tables.",
    "JavaScript / React": "Powers modern user interfaces, device camera integrations, and glassmorphic responsive designs.",
    "HTML / CSS": "Used to craft sleek, responsive components, glowing typography, and high-performance animations.",
    "Python Flask": "Deploys lightweight REST endpoints, microservice routing, and rapid API bridges.",
    "PySide6 (Desktop)": "Used to craft multi-threaded cross-platform desktop graphical apps and budgeting suites.",
    "PEFT Library (AI)": "Deployed for Parameter-Efficient LLM alignments and customized LoRA matrix injections.",
    "Git / GitHub": "Supports standard repository branching, automated pipelines, and continuous deployment logs.",
    "AI Image/Video Gen": "Controls generative media diffusion parameters, weights, and automated graphic synthesis.",
    "Augmented Reality (AR)": "Deploys computer vision camera grids for accurate scale measurements and visualizations.",
    "Embedded Systems & IoT": "Forges secure bridges between physical sensors, actuators, and cloud platforms.",
    "RTOS & DBMS": "Optimizes task preemptions, mutex locks, and guarantees low-latency response times."
};

function triggerSkillNodeClick(skillName, displayName, ratingValue) {
    playClickGameSynth();
    
    // Spawn floating energy particles
    for (let i = 0; i < 8; i++) {
        const floatBubble = document.createElement('div');
        floatBubble.className = 'click-particle';
        const randomX = (Math.random() - 0.5) * 150;
        const randomY = (Math.random() - 0.5) * 150;
        floatBubble.style.setProperty('--fly-x', `${randomX}px`);
        floatBubble.style.left = `${window.innerWidth / 2 + randomX}px`;
        floatBubble.style.top = `${window.innerHeight / 2 + randomY}px`;
        floatBubble.textContent = currentTheme === 'trading' ? '▲' : '✨';
        floatBubble.style.color = currentTheme === 'trading' ? '#00ff66' : '#ff007f';
        document.body.appendChild(floatBubble);
        setTimeout(() => floatBubble.remove(), 800);
    }

    const explanation = SKILL_EXPLANATIONS[skillName] || "Highly proficient implementation across active systems and frameworks.";
    
    // Create immersive modal
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--bg-secondary);
        border: 2px solid var(--accent);
        border-radius: var(--border-radius-lg);
        padding: 2.5rem;
        z-index: 10005;
        text-align: center;
        max-width: 450px;
        width: 90%;
        box-shadow: var(--neon-glow), 0 10px 40px rgba(0,0,0,0.8);
        backdrop-filter: blur(15px);
        animation: form-success-reveal 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    `;
    
    const titleText = currentTheme === 'trading' 
        ? `QUANT ASSET: ${skillName.toUpperCase()} 📊` 
        : `MYSTIC SPELL: ${displayName.toUpperCase()} 🌟`;
        
    const bodyText = currentTheme === 'trading'
        ? `Liquidity Allocation: <strong>${ratingValue}% Holding</strong>.<br><br>${explanation}`
        : `Grimoire Rank: <strong>Level ${ratingValue} Master</strong>.<br><br>${explanation}`;
        
    overlay.innerHTML = `
        <h2 style="font-family: var(--font-display); color: var(--accent); margin-bottom: 1.25rem; font-size: 1.35rem; text-transform: uppercase;">${titleText}</h2>
        <p style="color: var(--text-primary); line-height: 1.6; margin-bottom: 2rem; font-family: var(--font-main);">${bodyText}</p>
        <button class="btn btn-primary" id="skill-modal-close-btn" style="padding: 0.6rem 1.5rem; font-size: 0.75rem;">Close Analysis</button>
    `;
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    document.getElementById('skill-modal-close-btn').addEventListener('click', () => {
        overlay.remove();
        document.body.style.overflow = 'auto';
    });
}
