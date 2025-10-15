// ----------------------------------------------------------------
// 博客文章数据
// ----------------------------------------------------------------
const blogPosts = [
    {
        id: 1,
        title: 'hiking and camping in Xinjiang',
        excerpt: '简介',
        author: '@李忠平',
        imageUrl: 'photos/7f934357d2f9a881d9ab3fe0ae86ae38.jpeg',
        publishDate: '2021-05-25',
        category: '背包徒步',
        url: 'posts/hikingandcampinginXinjiang.html',
        likes: 0,
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        id: 2,
        title: 'ZEAL Optics Product Shoot',
        excerpt: 'Landscape photography is my passion. I live for getting outside and finding the beauty in nature. It drives me and...',
        author: 'josephroybal',
        imageUrl: 'https://placehold.co/400x300/adb5bd/212529?text=Post+2',
        category: 'HDR',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        id: 3,
        title: 'Behind the Image: A Landscape Diary of How-To\'s; Lightning and the Grand...',
        excerpt: 'A behind the scenes explanation of this image and the efforts and thoughts that went into its creation.',
        author: 'josephroybal',
        imageUrl: 'https://placehold.co/400x300/6c757d/f8f9fa?text=Post+3',
        category: '背包徒步',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        id: 4,
        title: 'Behind the Image: A Landscape Diary of How-To\'s; Lightning and the Grand...',
        excerpt: 'A behind the scenes explanation of this image and the efforts and thoughts that went into its creation.',
        author: 'josephroybal',
        imageUrl: 'https://placehold.co/400x300/6c757d/f8f9fa?text=Post+3',
        category: 'FPV',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        id: 5,
        title: 'Behind the Image: A Landscape Diary of How-To\'s; Lightning and the Grand...',
        excerpt: 'A behind the scenes explanation of this image and the efforts and thoughts that went into its creation.',
        author: 'josephroybal',
        imageUrl: 'https://placehold.co/400x300/6c757d/f8f9fa?text=Post+3',
        category: '各种资料',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        id: 6,
        title: 'Behind the Image: A Landscape Diary of How-To\'s; Lightning and the Grand...',
        excerpt: 'A behind the scenes explanation of this image and the efforts and thoughts that went into its creation.',
        author: 'josephroybal',
        imageUrl: 'https://placehold.co/400x300/6c757d/f8f9fa?text=Post+3',
        category: '日志',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        id: 7,
        title: 'Behind the Image: A Landscape Diary of How-To\'s; Lightning and the Grand...',
        excerpt: 'A behind the scenes explanation of this image and the efforts and thoughts that went into its creation.',
        author: 'josephroybal',
        imageUrl: 'https://placehold.co/400x300/6c757d/f8f9fa?text=Post+3',
        category: '业余无线电',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },

];

// ----------------------------------------------------------------
// 画廊数据 - 修复ID重复问题
// ----------------------------------------------------------------
const galleryData = [
    // 真实图片数据示例 (假设它们在服务器上的路径是可访问的)
    { id: 1, src: 'photos/photo/20140606_102418_IMGP0297_hdr_rec2020_pq_yuv444_full_cq10.avif', title: 'HDR示例', width: 400, height: 600, color: '#a0b0c0' },
    { id: 2, src: 'photos/photo/lyy的手sRGB10SDR.jpg', title: 'SDR', width: 600, height: 450, color: '#c0a0b0' },
    { id: 3, src: 'photos/photo/lyy的手P3HDR.avif', title: 'HDR', width: 400, height: 500, color: '#b0c0a0' },
    { id: 4, src: 'photos/photo/梦幻-树.jpg', title: '乌鲁木齐', width: 600, height: 800, color: '#a0c0c0' },
    { id: 5, src: 'photos/photo/梦幻-草地.jpg', title: '乌鲁木齐', width: 300, height: 400, color: '#c0b0a0' },
    { id: 6, src: 'photos/photo/雪乡禾木SDRsRGB8k.jpg', title: '禾木 2025', width: 500, height: 650, color: '#b0a0c0' },
    { id: 7, src: 'photos/photo/_DSC0883-已锐化.jpg', title: 'G318 2024', width: 450, height: 350, color: '#a0a0c0' },
    { id: 8, src: 'photos/photo/禾木桥已经锐化.jpg', title: '禾木 2025', width: 350, height: 450, color: '#c0c0a0' },
    { id: 9, src: 'photos/photo/禾木河边.jpg', title: '禾木 2025', width: 600, height: 850, color: '#a0b0a0' },
    { id: 10, src: 'photos/photo/冈仁波齐星野srgbsdr10-1.jpg', title: '冈仁波齐 2024', width: 400, height: 500, color: '#b0c0b0' },
    { id: 11, src: 'photos/photo/在禾木失败的长曝光.jpg', title: '禾木 2025', width: 300, height: 480, color: '#4f5b66' },
    { id: 12, src: 'photos/photo/冈仁波齐蓝调1.jpg', title: '冈仁波齐 2024', width: 300, height: 320, color: '#998877' },
    { id: 13, src: 'photos/photo/在赛里木湖遇见的女孩.jpg', title: '赛里木湖 2021', width: 300, height: 620, color: '#6a7b8c' },
    { id: 14, src: 'photos/photo/树枝剪影SDRP3101.jpg', title: '深圳 2021', width: 300, height: 410, color: '#556677' },
    { id: 15, src: 'photos/photo/布达拉宫sRGBJPG10.JPG', title: '拉萨 2024', width: 300, height: 550, color: '#8899aa' },
    { id: 17, src: 'photos/photo/雪山徒步.jpg', title: '赛里木湖 2021', width: 300, height: 550, color: '#8899aa' },
    { id: 18, src: 'photos/photo/60岁哈族牧民究极锐化.jpg', title: '赛里木湖 2021', width: 300, height: 550, color: '#8899aa' },
    { id: 19, src: 'photos/photo/牧民房究极锐化.jpg', title: '赛里木湖2021', width: 300, height: 550, color: '#8899aa' },
    { id: 20, src: 'photos/photo/阳光与树木锐化了的.jpg', title: '赛里木湖2021 SDR', width: 300, height: 550, color: '#8899aa' },
    { id: 21, src: 'photos/photo/禾木SDRsRGB10.jpg', title: '禾木 2025', width: 300, height: 550, color: '#8899aa' },
    { id: 22, src: 'photos/photo/G219新藏线往新疆方向（暖）sRGBJPG10.JPG', title: 'G219 2024', width: 300, height: 550, color: '#8899aa' },
    { id: 23, src: 'photos/photo/摩托车公路电影色调.jpeg', title: 'G219 2024', width: 300, height: 550, color: '#8899aa' },
    { id: 24, src: 'photos/photo/白沙湖2原图.jpg', title: '白沙湖 2024', width: 300, height: 550, color: '#8899aa' },
    { id: 25, src: 'photos/photo/马儿究极锐化.jpg', title: '赛里木湖2021', width: 300, height: 550, color: '#8899aa' },
    { id: 26, src: 'photos/photo/腿.jpg', title: 'lyy 2025', width: 300, height: 550, color: '#8899aa' },
    { id: 27, src: 'photos/photo/lyysRGBJPG10.JPG', title: 'lyy 2025', width: 300, height: 550, color: '#8899aa' },
    { id: 28, src: 'photos/photo/梁莹莹副本.jpg', title: 'lyy 2025', width: 300, height: 550, color: '#8899aa' },
    { id: 29, src: 'photos/photo/lyy4-已锐化.jpg', title: 'lyy 2025', width: 300, height: 550, color: '#8899aa' },
    { id: 30, src: 'photos/photo/东坪洲SDRp32.jpg', title: '东坪洲 2025', width: 300, height: 550, color: '#8899aa' },
    { id: 31, src: 'photos/photo/冈仁波齐星空大广角2-已锐化1.jpg', title: '冈仁波齐 2024', width: 300, height: 550, color: '#8899aa' },
    
];

// 全局变量
let masonry;
let currentImageIndex = -1;
let lazyImageObserver; // <-- 新增：Intersection Observer 实例

// 模态框元素
const modal = document.getElementById('lightbox-modal');
const modalImage = document.getElementById('lightbox-image');
const modalTitle = document.getElementById('lightbox-title');
const viewOriginalLink = document.getElementById('view-original');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const spinner = document.querySelector('.spinner');

// 区域元素
const gallerySection = document.getElementById('gallery-section');
const blogSection = document.getElementById('blog-section');
const navItems = document.querySelectorAll('.nav-item');

// ----------------------------------------------------------------
// 页面/视图切换逻辑
// ----------------------------------------------------------------
function switchView(targetId, activeElement) {
    // 1. 切换显示区域
    if (targetId === 'blog-section') {
        gallerySection.classList.add('hidden');
        blogSection.classList.remove('hidden');
    } else {
        gallerySection.classList.remove('hidden');
        blogSection.classList.add('hidden');
        // 确保 Masonry 在切换回画廊时进行重新布局
        if (masonry) {
            // 切换回画廊后，重新开始观察懒加载元素
            startLazyLoadingObservation();
            setTimeout(() => masonry.layout(), 100);
        }
    }

    // 2. 切换导航栏的 active 状态
    navItems.forEach(item => item.classList.remove('active'));
    // activeElement可能是category link，也可能是main nav item
    if (activeElement) {
        // 确保只有主要的导航栏项目获取 active 状态，分类链接由 restoreViewState 处理
        const isMainNavItem = activeElement.hasAttribute('data-target');
        if (isMainNavItem) {
            activeElement.classList.add('active');
        } else {
            // 如果是分类链接，找到主导航的 blog 链接并激活
            const blogNavItem = document.querySelector('a[data-target="blog-section"]');
            if (blogNavItem) blogNavItem.classList.add('active');
        }
    }
    

    // 3. 保存状态到 URL
    saveViewState(targetId);
}

// ----------------------------------------------------------------
// 辅助函数
// ----------------------------------------------------------------
function loadImage(imgElement, src, placeholderColor, isModal = false) {
    const galleryItem = imgElement.parentElement;
    
    if (isModal) {
        imgElement.classList.remove('loaded');
        spinner.style.display = 'block';
    } else {
        // 确保懒加载元素被正确标记
        if (galleryItem) galleryItem.classList.add('loading');
        imgElement.classList.remove('lazy');
    }
    
    if (placeholderColor && galleryItem) {
        galleryItem.style.backgroundColor = placeholderColor;
    }
    
    const tempImg = new Image();
    tempImg.onload = () => {
        imgElement.src = src;
        if (isModal) {
            spinner.style.display = 'none';
        } else {
            if (galleryItem) galleryItem.classList.remove('loading');
        }
        setTimeout(() => {
            imgElement.classList.add('loaded');
            if (!isModal && masonry) {
                masonry.layout();
            }
        }, 50);
    };
    
    tempImg.onerror = () => {
        console.error('图片加载失败:', src);
        if (isModal) {
            spinner.style.display = 'none';
            imgElement.src = 'https://placehold.co/400x300/ff6666/ffffff?text=加载失败';
            imgElement.classList.add('loaded');
        } else {
            if (galleryItem) galleryItem.classList.remove('loading');
            imgElement.src = 'https://placehold.co/400x300/ff6666/ffffff?text=加载失败';
            imgElement.classList.add('loaded');
        }
    };
    
    tempImg.src = src;
}

// ----------------------------------------------------------------
// 博客文章渲染 (已修改为支持分类和动态头像)
// ----------------------------------------------------------------
function renderBlogPosts(category = 'All') {
    const grid = document.querySelector('.blog-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    // 1. 筛选逻辑
    const filteredPosts = blogPosts.filter(post => {
        // 'All' 显示所有文章
        if (category === 'All') return true;
        // 否则匹配文章的 category 字段
        return post.category === category;
    });

    // 2. 渲染筛选后的文章
    filteredPosts.forEach(post => {
        // ⚠️ 关键修改：使用 post.authorAvatarUrl
        const avatarSrc = post.authorAvatarUrl || 'images/avatar_default.jpg';
        const avatarOnError = `this.src='images/avatar_default.jpg'`;

        const cardHtml = `
            <div class="post-card">
                <a href="${post.url}">
                    <img src="${post.imageUrl}" alt="${post.title}" loading="lazy" 
                         onerror="this.src='https://placehold.co/400x300/e9ecef/212529?text=封面图'">
                </a>
                <div class="post-info">
                    <div>
                        <div class="post-meta">
                            <div class="author-info">
                                
                                <img src="${avatarSrc}" alt="${post.author} avatar" class="author-avatar"
                                     onerror="${avatarOnError}">
                                     
                                <span>${post.author}</span>
                            </div>
                            <div>
                                <span>${post.readTime} 分钟阅读</span>
                                <span class="ml-2 cursor-pointer text-gray-400 hover:text-gray-600">
                                    <i class="fas fa-ellipsis-h"></i>
                                </span>
                            </div>
                        </div>
                        <div class="post-category">
                            <span class="category-tag">${post.category || '未分类'}</span>
                            <span class="publish-date">${post.publishDate}</span>
                        </div>
                        <h3 class="post-title">
                            <a href="${post.url}">${post.title}</a>
                        </h3>
                        <p class="post-excerpt">${post.excerpt}</p>
                    </div>
                    <div class="read-more">
                        <span class="likes cursor-pointer hover:text-red-600">
                            <i class="fas fa-heart"></i> ${post.likes || 0}
                        </span>
                        <a href="${post.url}" class="read-more-link">阅读全文 →</a>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}

/**
 * 瀑布流画廊懒加载回调函数
 * @param {IntersectionObserverEntry[]} entries
 * @param {IntersectionObserver} observer
 */
function onLazyLoad(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imgElement = entry.target;
            const trueSrc = imgElement.getAttribute('data-src');
            const placeholderColor = imgElement.parentElement.getAttribute('data-color');
            
            // 检查 imgElement 是否未加载过
            if (trueSrc && !imgElement.classList.contains('loaded')) {
                 loadImage(imgElement, trueSrc, placeholderColor);
            }
            
            // 停止观察已加载的图片
            observer.unobserve(imgElement);
        }
    });
}

function startLazyLoadingObservation() {
    // 停止旧的观察者（如果有）
    if (lazyImageObserver) {
        lazyImageObserver.disconnect();
    }
    
    // 重新创建 Intersection Observer
    // rootMargin: '0px 0px 200px 0px' 意味着提前 200px 加载图片，优化用户体验
    lazyImageObserver = new IntersectionObserver(onLazyLoad, {
        rootMargin: '0px 0px 200px 0px',
    });
    
    // 找到所有待加载的图片元素并开始观察
    document.querySelectorAll('#masonry-gallery img.lazy').forEach(img => {
        lazyImageObserver.observe(img);
    });
}


function renderGallery() {
    const container = document.getElementById('masonry-gallery');
    if (!container) {
        console.error('找不到瀑布流容器');
        return;
    }
    container.innerHTML = '';
    const gridSizer = document.createElement('div');
    gridSizer.className = 'grid-sizer';
    container.appendChild(gridSizer);

    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = index;
        galleryItem.setAttribute('data-title', item.title || '');
        galleryItem.setAttribute('data-color', item.color || '#f0f0f0'); // <-- 存储颜色用于占位符

        const img = document.createElement('img');
        // ⚠️ 关键修改 1：初始 src 设置为空白占位图，真实路径存入 data-src
        img.setAttribute('src', `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${item.width}' height='${item.height}'%3E%3C/svg%3E`);
        img.setAttribute('data-src', item.src);
        img.setAttribute('alt', item.title || '图片');
        img.setAttribute('data-index', index);
        img.classList.add('lazy'); // <-- 关键修改 2：添加 'lazy' 类，用于观察

        const info = document.createElement('div');
        info.className = 'photo-info';
        info.textContent = item.title || '';

        galleryItem.appendChild(img);
        galleryItem.appendChild(info);
        container.appendChild(galleryItem);
        
        // 初始设置占位符颜色
        galleryItem.style.backgroundColor = item.color || '#f0f0f0';

        // ⚠️ 关键修改 3：移除立即调用 loadImage(img, item.src, item.color);
        // 加载将在 Intersection Observer 中触发

        galleryItem.addEventListener('click', () => openLightbox(index));
    });

    setTimeout(() => {
        masonry = new Masonry(container, {
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-item',
            gutter: 10,
            percentPosition: false,
            transitionDuration: '0.4s',
            fitWidth: true,
            horizontalOrder: true
        });
        
        masonry.layout();
        
        // ⚠️ 关键修改 4：初始化 Masonry 布局后，开始观察懒加载元素
        startLazyLoadingObservation();

    }, 100);
    
    window.addEventListener('resize', () => {
        if (masonry) {
            setTimeout(() => masonry.layout(), 100);
        }
    });
}

// ----------------------------------------------------------------
// Lightbox 功能 (保持不变)
// ----------------------------------------------------------------
function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxContent(index);
    modal.classList.add('visible-modal');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    document.addEventListener('keydown', handleKeyDown);
}

function closeLightbox() {
    modal.classList.remove('visible-modal');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
    document.body.style.overflow = '';
    
    document.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(e) {
    if (!modal.classList.contains('visible-modal')) return;
    
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            showPrevImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
    }
}

function updateLightboxContent(index) {
    if (index < 0 || index >= galleryData.length) {
        return;
    }
    
    currentImageIndex = index;
    const item = galleryData[index];
    
    // 修复：确保 loadImage 使用新数据
    loadImage(modalImage, item.src, item.color, true);
    
    modalImage.alt = item.title || '';
    modalTitle.textContent = item.title || '';
    viewOriginalLink.href = item.src;

    prevButton.disabled = index === 0;
    nextButton.disabled = index === galleryData.length - 1;
}

function showPrevImage() {
    if (currentImageIndex > 0) {
        updateLightboxContent(currentImageIndex - 1);
    }
}

function showNextImage() {
    if (currentImageIndex < galleryData.length - 1) {
        updateLightboxContent(currentImageIndex + 1);
    }
}

// ----------------------------------------------------------------
// 事件绑定和初始化 (保持不变)
// ----------------------------------------------------------------
function initApp() {
    console.log('初始化应用...');
    
    renderGallery();

    // 主导航栏点击事件
    navItems.forEach(item => {
        if (item.hasAttribute('data-target')) {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('data-target');
                switchView(targetId, item);
            });
        }
    });

    // 新增：分类链接点击事件
    document.querySelectorAll('.blog-categories-list a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            
            // 更新 hash 以触发 restoreViewState
            if (category === 'All') {
                window.location.hash = 'blog';
            } else {
                // 使用 encodeURIComponent 处理中文分类名
                window.location.hash = `blog/${encodeURIComponent(category)}`;
            }
        });
    });


    restoreViewState(); // 首次加载时调用
    
    const closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', (e) => {
            e.stopPropagation();
            showPrevImage();
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }
    
    if (viewOriginalLink) {
        viewOriginalLink.setAttribute('target', '_blank');
        viewOriginalLink.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    console.log('应用初始化完成');
}

window.addEventListener('hashchange', restoreViewState);

// ----------------------------------------------------------------
// 状态管理函数 (保持不变)
// ----------------------------------------------------------------
function saveViewState(targetId) {
    if (targetId === 'blog-section') {
        // 当通过主导航点击时，将 hash 设置为 #blog，由 restoreViewState 处理分类
        window.location.hash = 'blog';
    } else {
        window.location.hash = '';
    }
}

function restoreViewState() {
    const hash = window.location.hash;
    const categoryLinks = document.querySelectorAll('.blog-categories-list a');
    
    let category = 'All'; // 默认分类
    let shouldSwitchToBlog = false;

    if (hash.startsWith('#blog/')) {
        // 从 #blog/分类名称 中提取分类名称
        category = decodeURIComponent(hash.substring(6));
        shouldSwitchToBlog = true;
    } else if (hash === '#blog') {
        category = 'All';
        shouldSwitchToBlog = true;
    }
    
    // 1. 切换视图到博客区
    if (shouldSwitchToBlog) {
        const blogNavItem = document.querySelector('a[data-target="blog-section"]');
        if (blogNavItem && blogSection.classList.contains('hidden')) {
            // 使用 null 作为 activeElement 避免 switchView 再次重置 hash
            switchView('blog-section', blogNavItem);
        }
    }

    // 2. 更新分类链接的 active 状态
    categoryLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        }
    });
    
    // 3. 渲染文章列表
    if (shouldSwitchToBlog) {
        renderBlogPosts(category);
    }
}

document.addEventListener('DOMContentLoaded', initApp);
