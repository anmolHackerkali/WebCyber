/* ==================================================
   APK Hub – Advanced JavaScript
   ================================================== */

// ========== SAMPLE APPS DATA ==========
let appsData = [
    {
        id: 1,
        name: 'SnapEdit Pro',
        category: 'tools',
        description: 'Professional photo editor with AI-powered background removal, filters, and batch processing. Supports 50+ formats.',
        version: '4.2.1',
        size: '24.8',
        icon: 'fa-solid fa-wand-magic-sparkles',
        downloads: 12450,
        file: 'snapedit-pro-v4.2.1.apk',
        date: '2026-07-10'
    },
    {
        id: 2,
        name: 'Shadow Strike',
        category: 'games',
        description: 'Multiplayer battle royale with 100 players. Ultra graphics, real-time strategy, and clan wars.',
        version: '3.8.0',
        size: '156.2',
        icon: 'fa-solid fa-crosshairs',
        downloads: 45200,
        file: 'shadow-strike-v3.8.0.apk',
        date: '2026-07-12'
    },
    {
        id: 3,
        name: 'ChatWave',
        category: 'social',
        description: 'Encrypted messaging app with voice/video calls, stories, and group chats. End-to-end encryption.',
        version: '2.1.5',
        size: '42.3',
        icon: 'fa-solid fa-comments',
        downloads: 28100,
        file: 'chatwave-v2.1.5.apk',
        date: '2026-07-11'
    },
    {
        id: 4,
        name: 'QuickScan',
        category: 'tools',
        description: 'PDF scanner with OCR, QR code reader, barcode scanner, and document merging. Fast & accurate.',
        version: '1.9.3',
        size: '18.6',
        icon: 'fa-solid fa-qrcode',
        downloads: 8900,
        file: 'quickscan-v1.9.3.apk',
        date: '2026-07-09'
    },
    {
        id: 5,
        name: 'StreamFlix',
        category: 'media',
        description: 'Watch movies, TV shows, and live TV. Supports 4K, HDR, offline downloads, and subtitles.',
        version: '5.0.2',
        size: '68.4',
        icon: 'fa-solid fa-film',
        downloads: 63200,
        file: 'streamflix-v5.0.2.apk',
        date: '2026-07-12'
    },
    {
        id: 6,
        name: 'TaskFlow',
        category: 'productivity',
        description: 'Project management tool with Kanban boards, Gantt charts, time tracking, and team collaboration.',
        version: '3.2.0',
        size: '32.1',
        icon: 'fa-solid fa-list-check',
        downloads: 16700,
        file: 'taskflow-v3.2.0.apk',
        date: '2026-07-08'
    }
];

// ========== DOM REFS ==========
const appGrid = document.getElementById('appGrid');
const uploadForm = document.getElementById('uploadForm');
const fileDrop = document.getElementById('fileDrop');
const apkFile = document.getElementById('apkFile');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const categoryCards = document.querySelectorAll('.category-card');

// ========== TOAST SYSTEM ==========
function showToast(message, type = 'success') {
    const container = document.querySelector('.toast-container');
    if (!container) {
        const div = document.createElement('div');
        div.className = 'toast-container';
        document.body.appendChild(div);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    document.querySelector('.toast-container').appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(30px)';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ========== RENDER APPS ==========
function renderApps(apps = appsData) {
    if (!appGrid) return;
    appGrid.innerHTML = apps.map(app => `
        <div class="app-card" data-category="${app.category}">
            <div class="app-card-header">
                <div class="app-icon">
                    <i class="${app.icon}"></i>
                </div>
                <div class="app-meta">
                    <h3>${app.name}</h3>
                    <span class="category-tag">${app.category}</span>
                </div>
            </div>
            <p class="app-description">${app.description}</p>
            <div class="app-details">
                <span><i class="fas fa-code-branch"></i> v${app.version}</span>
                <span><i class="fas fa-weight"></i> ${app.size} MB</span>
                <span><i class="fas fa-download"></i> ${app.downloads.toLocaleString()}</span>
            </div>
            <div class="app-card-footer">
                <a href="#" class="btn-download" data-id="${app.id}">
                    <i class="fas fa-download"></i> Download APK
                </a>
                <button class="btn-details" data-id="${app.id}">
                    <i class="fas fa-info-circle"></i>
                </button>
            </div>
        </div>
    `).join('');

    // Attach download events
    document.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(btn.dataset.id);
            const app = appsData.find(a => a.id === id);
            if (app) {
                showToast(`Downloading ${app.name} v${app.version}...`, 'success');
                // Simulate download – in real scenario, serve the actual .apk file
                const link = document.createElement('a');
                link.href = `/${app.file}`;
                link.download = app.file;
                link.click();
            }
        });
    });

    // Attach details events
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const app = appsData.find(a => a.id === id);
            if (app) showAppModal(app);
        });
    });
}

// ========== APP MODAL ==========
function showAppModal(app) {
    // Remove existing modal
    const existing = document.querySelector('.modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.innerHTML = `
        <div class="modal">
            <button class="modal-close"><i class="fas fa-times"></i></button>
            <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
                <div class="app-icon" style="width:64px;height:64px;font-size:2rem;">
                    <i class="${app.icon}"></i>
                </div>
                <div>
                    <h2 style="font-size:1.6rem;font-weight:800;">${app.name}</h2>
                    <span class="category-tag">${app.category}</span>
                </div>
            </div>
            <p style="color:var(--text-secondary);margin-bottom:20px;line-height:1.7;">${app.description}</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
                <div style="background:var(--bg-primary);padding:14px;border-radius:10px;">
                    <small style="color:var(--text-secondary);">Version</small>
                    <p style="font-weight:700;font-size:1.1rem;">${app.version}</p>
                </div>
                <div style="background:var(--bg-primary);padding:14px;border-radius:10px;">
                    <small style="color:var(--text-secondary);">Size</small>
                    <p style="font-weight:700;font-size:1.1rem;">${app.size} MB</p>
                </div>
                <div style="background:var(--bg-primary);padding:14px;border-radius:10px;">
                    <small style="color:var(--text-secondary);">Downloads</small>
                    <p style="font-weight:700;font-size:1.1rem;">${app.downloads.toLocaleString()}</p>
                </div>
                <div style="background:var(--bg-primary);padding:14px;border-radius:10px;">
                    <small style="color:var(--text-secondary);">Released</small>
                    <p style="font-weight:700;font-size:1.1rem;">${app.date}</p>
                </div>
            </div>
            <a href="#" class="btn-download" style="display:flex;align-items:center;justify-content:center;gap:10px;padding:16px;border-radius:12px;background:var(--gradient-1);color:#fff;font-weight:600;text-decoration:none;">
                <i class="fas fa-download"></i> Download Now
            </a>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('.modal-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
}

// ========== CATEGORY FILTER ==========
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        categoryCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const cat = card.dataset.category;
        const filtered = cat === 'all'
            ? appsData
            : appsData.filter(a => a.category === cat);
        renderApps(filtered);
    });
});

// ========== SEARCH ==========
searchToggle.addEventListener('click', () => {
    searchOverlay.classList.toggle('active');
    if (searchOverlay.classList.contains('active')) {
        setTimeout(() => searchInput.focus(), 100);
    }
});

searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
        renderApps(appsData);
        return;
    }
    const filtered = appsData.filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );
    renderApps(filtered);
});

// ========== MOBILE MENU ==========
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ========== FILE DRAG & DROP ==========
fileDrop.addEventListener('click', () => apkFile.click());

fileDrop.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileDrop.style.borderColor = '#6c5ce7';
    fileDrop.style.background = 'rgba(108, 92, 231, 0.05)';
});

fileDrop.addEventListener('dragleave', () => {
    fileDrop.style.borderColor = 'rgba(108, 92, 231, 0.3)';
    fileDrop.style.background = 'var(--bg-primary)';
});

fileDrop.addEventListener('drop', (e) => {
    e.preventDefault();
    fileDrop.style.borderColor = 'rgba(108, 92, 231, 0.3)';
    fileDrop.style.background = 'var(--bg-primary)';
    if (e.dataTransfer.files.length) {
        apkFile.files = e.dataTransfer.files;
        handleFileSelect(e.dataTransfer.files[0]);
    }
});

apkFile.addEventListener('change', () => {
    if (apkFile.files.length) handleFileSelect(apkFile.files[0]);
});

function handleFileSelect(file) {
    if (!file.name.endsWith('.apk')) {
        showToast('Please select a valid .apk file', 'error');
        apkFile.value = '';
        return;
    }
    fileInfo.style.display = 'flex';
    fileName.textContent = `${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB)`;
}

// ========== UPLOAD FORM ==========
uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('appName').value.trim();
    const category = document.getElementById('appCategory').value;
    const description = document.getElementById('appDescription').value.trim();
    const iconUrl = document.getElementById('appIcon').value.trim();
    const version = document.getElementById('appVersion').value.trim() || '1.0.0';
    const size = document.getElementById('appSize').value.trim() || '0';

    if (!name || !category || !description) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    if (!apkFile.files.length) {
        showToast('Please select an APK file', 'error');
        return;
    }

    // Create new app object
    const newApp = {
        id: appsData.length + 1,
        name,
        category,
        description,
        version,
        size,
        icon: iconUrl ? null : 'fa-solid fa-mobile-screen',
        iconUrl: iconUrl || null,
        downloads: 0,
        file: apkFile.files[0].name,
        date: new Date().toISOString().split('T')[0]
    };

    appsData.unshift(newApp);
    renderApps(appsData);
    uploadForm.reset();
    fileInfo.style.display = 'none';
    document.querySelector('.category-card[data-category="all"]').click();

    showToast(`${name} uploaded successfully!`, 'success');
});

// ========== COUNTER ANIMATION ==========
function animateCounters() {
    document.querySelectorAll('.num').forEach(el => {
        const target = parseInt(el.dataset.target);
        const increment = target / 60;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current).toLocaleString();
            }
        }, 25);
    });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    renderApps();
    animateCounters();
});