// ----------------------------------------------------------------
// 博客文章数据
// ----------------------------------------------------------------
const blogPosts = [
    {
        title: '旅居茂名，体验广东年例及游神习俗',
        excerpt: '记录2025年2月份在茂名年例期间的旅居生活，包含茂名年例的照片、游神习俗、活动和个人体验。',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/photo/茂名年例.jpeg',
        publishDate: '2024-02-20',
        category: '背包徒步',
        url:'posts/maomingnianli.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '再次返回东坪洲，海岛露营',
        excerpt: '在新疆受了情伤后厌恶生活和人类，于是逃到岛上模仿荒野求生般地待了三四天',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/东坪洲1.jpeg',
        publishDate: '2025-1-20',
        category: '背包徒步',
        url: 'posts/dongpingzhou.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '户外资料备查清单',
        excerpt: '这是一篇详尽的“户外百科全书”。包含详细的户外装备资料库与个人经验整理。我首先从实用的角度梳理了涵盖背负、睡眠、炊具、保暖服饰、数码装备等各大领域的数百个户外品牌，并附上基于2021年以来实际使用体验的评价与“避坑”指南。此外我还尝试了系统性地整理大量实用技巧，涵盖准备流程、野外应急知识、装备维护保养、在线工具推荐（路网、天气、装备统计等实用工具',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/outdoor1.jpeg',
        publishDate: '2021-05-25',
        category: ['背包徒步', '各种资料'],
        url: 'posts/outdoorlist.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '代码学习计划（已放弃）',
        excerpt: '这篇文章主要包含一些macOS上的一些小技巧和终端无GUI工具，例如aria2c、spotdl、lux、MPV、解析下载小红书无水印视频、绕过公证等等',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/code1.jpeg',
        publishDate: '2024-02-20',
        category: '日志',
        url:'posts/codelearning.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '为什么Garmin比Apple watch更适合户外，详解MIP半反射式屏幕',
        excerpt: '为Garmin工作期间写的文章。',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/Garmin.jpeg',
        publishDate: '2024-02-20',
        category: '背包徒步',
        url: 'posts/garminwork.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '通过jq命令行工具解析小红书无水印视频',
        excerpt: '一个非常好用的扒取小红书无水印视频的脚本',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/篝火.jpeg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url: 'posts/xiaohongshuvideodow.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '维吾尔语学习计划',
        excerpt: '包含：维吾尔语元音辅音转写为国语拼音和IPA国际音标的对照表、维吾尔基础短语和一些整理的维吾尔语演变资料、维吾尔族文学资料',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/uy.jpeg',
        publishDate: '2024-02-20',
        category: '日志',
        url: 'posts/uyghurqa.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '制作适用于web传播的多媒体（图片篇）',
        excerpt: '文中介绍了如何有效解决拍摄的照片明明很清晰，但上传到各大社交媒体平台就画质锐减变得模糊了的问题。',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/篝火.jpeg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url: 'posts/meitiphoto.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '主流社媒平台的内容技术标准与社媒运营资料',
        excerpt: '文中介绍了主流社交媒体平台的多媒体技术标准',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/weblist.jpeg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url: 'posts/meitiphoto2.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: 'HDR（高动态范围）图片制作的资料和工具快查表',
        excerpt: '我不是开发者，只是一个对HDR内容制作感兴趣的业余爱好者，部分概念和标准只是了解皮毛，一知半解，利用空闲时间收集了很多HDR相关信息和工具，并整理为本篇文章（或许应该叫大杂烩）。',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/HDR.jpeg',
        publishDate: '2024-02-20',
        category: 'HDR',
        url: 'posts/HDR.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '《FPV各种概念、品牌、型号与其通俗化解释》查备清单',
        excerpt: 'FPV入门爱好者所整理的资料。',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/篝火.jpeg',
        publishDate: '2024-02-20',
        category: 'FPV',
        url: 'posts/FPV.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '业余无线电｜工具和资料备查清单｜BD7PCI',
        excerpt: '包含FT8的解释、电台备案流程、天线制作、工具资源清单、概念/名词/缩写解释、字母解释法、摩斯电码（CW通信）、A证考试技巧和易错题熟记和B证考试技巧和易错题熟记',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/业余无线电.jpeg',
        publishDate: '2024-02-20',
        category: '业余无线电',
        url: 'posts/BD7PCI.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '自组单车计划',
        excerpt: '本文介绍了车架的分类和区别，还有作者自组的配置单以及选择思路，此外还有自行车领域相关阅读推荐。',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/单车.jpeg',
        publishDate: '2024-02-20',
        category: '日志',
        url: 'posts/bicycle.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '香港东平洲，受伤4个月后重启背包徒步',
        excerpt: '包含岛上的路网和我的行程计划、以及一些拍摄的照片',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/东坪洲.jpeg',
        publishDate: '2024-02-20',
        category: '背包徒步',
        url: 'posts/dongpingzhou1.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    /*{
        title: '硬件资料查备清单',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/sun.jpg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url:'posts/ssdlist.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '救援资料查备清单',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/sun.jpg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url:'posts/BSR.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '摩托车/汽车/单车/皮衣/资料查备清单',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/sun.jpg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url:'posts/moto.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },*/
    {
        title: '云与大气现象',
        excerpt: '包含我从《云与大气现象》《每天一朵云》等书中整理的，各个高度的云的照片、特征和所代表的气候现象',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/云与大气现象.jpeg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url:'posts/clouds.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '歌单迁移｜网易云歌单迁徙到Youtube music',
        excerpt: '文中介绍的工具是一款猴油脚本“Tune My Music”，非常好用，我用它把我的网易云歌单迁徙到了youtube music',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/tunemusic.jpeg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url:'posts/musicmove.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '自由下载、绘制、导出等高线地图',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/等高线地图.jpeg',
        publishDate: '2024-02-20',
        category: '背包徒步',
        url: 'https://www.lizhongping.eu.org/article/outdoor',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: 'BT/PT资源与资料查备清单',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/PTBT.jpeg',
        publishDate: '2024-02-20',
        category: '资源清单',
        url: 'https://www.lizhongping.eu.org/article/pt',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    /*{
        title: '解决战网卡45%、炉石匹配成功界面停滞、换外服报错代码2400三个问题',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/war3.jpeg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url: 'posts/games.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: 'AI工具快查清单｜prompt提示词词库和文生图词库',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/sun.jpg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url: 'https://www.lizhongping.eu.org/article/AIlist',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },*/
    {
        title: '多日背包徒步，准备流程、备忘录与打包建议',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/篝火.jpeg',
        publishDate: '2024-02-20',
        category: '背包徒步',
        url: 'https://www.lizhongping.eu.org/article/outdoor31',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    /*{
        title: '像植物学家一样认识植物',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/sun.jpg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url: 'https://www.lizhongping.eu.org/article/renshizhiwu',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '定期体检资料和记录',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/sun.jpg',
        publishDate: '2024-02-20',
        category: '日志',
        url: 'https://www.lizhongping.eu.org/article/healthy',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },*/
    {
        title: '摩旅G318四川前往西藏',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/G318去西藏.jpeg',
        publishDate: '2024-02-20',
        category: '日志',
        url: 'posts/motogoxizhang.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '摩旅G219西藏前往新疆',
        excerpt: '日志',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/G219去新疆.jpeg',
        publishDate: '2024-02-20',
        category: '摩托车旅行',
        url: 'posts/motogoxinjiang.html',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: 'NAS资料查备清单',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/篝火.jpeg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url: 'https://www.lizhongping.eu.org/article/NAS',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '🚀去广告模块资料快查表',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/篝火.jpeg',
        publishDate: '2024-02-20',
        category: '各种资料',
        url: 'https://www.lizhongping.eu.org/article/adfree',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '河源大峡谷露营溯溪（🚧施工中）',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/户外-大峡谷的清晨.jpg',
        publishDate: '2024-02-20',
        category: '背包徒步',
        url: 'posts/heyuan-canyon-wip',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '赛里木湖至托乎拉苏徒步（🚧施工中）',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/赛里木湖.jpeg',
        publishDate: '2024-02-20',
        category: '背包徒步',
        url: 'posts/sayram-lake-wip',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '三次登顶罗浮山（🚧施工中）',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/户外-低配版LA.jpeg',
        publishDate: '2024-02-20',
        category: '背包徒步',
        url: 'posts/luofu-mountain-wip',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '秦岭鹿角梁三日徒步（🚧施工中）',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/户外-秦岭.jpeg',
        publishDate: '2024-02-20',
        category: '背包徒步',
        url: 'posts/qinling-wip',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
    {
        title: '单车旅行，深圳骑行至汕头',
        excerpt: '简介',
        author: '@ScienceOutdoors_FPV',
        imageUrl: 'photos/fengmian/户外-长途骑行-sharpened.jpg',
        publishDate: '2024-02-20',
        category: '单车旅行',
        url: 'posts/shenzhen-shantou-bike',
        authorAvatarUrl: 'public/IMG_6959.jpeg'
    },
];

// ----------------------------------------------------------------
// 画廊数据
// ----------------------------------------------------------------
let galleryData = [];

// ----------------------------------------------------------------
// 全局变量和新增加的队列
// ----------------------------------------------------------------
let masonry;
let currentImageIndex = -1;
let currentLightboxSequence = [];
let currentLightboxPosition = -1;
let lazyImageObserver;
let loadQueue = []; // 新增：用于存储进入视口等待顺序加载的图片元素
let isProcessingQueue = false; // 新增：队列处理状态锁
let masonryLayoutRaf = null;
const preloadedLightboxImages = new Set();

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

function scheduleMasonryLayout() {
    if (!masonry || masonryLayoutRaf !== null) return;

    masonryLayoutRaf = requestAnimationFrame(() => {
        masonryLayoutRaf = null;
        masonry.layout();
    });
}

function ensureGalleryData() {
    if (galleryData.length === 0) {
        console.warn('画廊数据为空，请检查 gallery-source.js');
    }
}

function loadGalleryData() {
    const sourceData = Array.isArray(window.__GALLERY_SOURCE__) ? window.__GALLERY_SOURCE__ : [];
    const generatedData = Array.isArray(window.__GALLERY_MANIFEST__) ? window.__GALLERY_MANIFEST__ : [];
    const generatedBySource = new Map(generatedData.map((item) => [item.fullSrc || item.src || item.gallerySrc, item]));

    if (!Array.isArray(window.__GALLERY_SOURCE__)) {
        console.warn('无法读取 gallery-source.js；画廊不会回退到 public/generated，避免显示已删除的照片。');
        galleryData = [];
        return;
    }

    galleryData = sourceData.map((sourceItem, index) => {
        const fullSrc = sourceItem.fullSrc || sourceItem.src;
        const cachedItem = generatedBySource.get(fullSrc) || {};

        return {
            ...cachedItem,
            ...sourceItem,
            id: sourceItem.id || cachedItem.id || `gallery-${String(index + 1).padStart(3, '0')}`,
            fullSrc,
            previewSrc: sourceItem.previewSrc || cachedItem.previewSrc || fullSrc,
            gallerySrc: sourceItem.previewSrc || cachedItem.previewSrc || fullSrc,
            width: Number(sourceItem.width || cachedItem.width) || 1,
            height: Number(sourceItem.height || cachedItem.height) || 1,
            color: sourceItem.color || cachedItem.color,
            placeholderTop: sourceItem.placeholderTop || cachedItem.placeholderTop,
            placeholderBottom: sourceItem.placeholderBottom || cachedItem.placeholderBottom
        };
    }).filter((item) => item.fullSrc);
}

function getGalleryNavItem(category = 'All') {
    return [...navItems].find((item) =>
        item.getAttribute('data-target') === 'gallery-section' &&
        item.getAttribute('data-category') === category
    ) || [...navItems].find((item) =>
        item.getAttribute('data-target') === 'gallery-section' &&
        item.getAttribute('data-category') === 'All'
    ) || null;
}

function lightenHexColor(hexColor, amount = 0.5) {
    if (typeof hexColor !== 'string') {
        return '#e4e4e4';
    }

    const normalized = hexColor.trim().replace('#', '');
    if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
        return '#e4e4e4';
    }

    const red = parseInt(normalized.slice(0, 2), 16);
    const green = parseInt(normalized.slice(2, 4), 16);
    const blue = parseInt(normalized.slice(4, 6), 16);
    const mix = (value) => Math.round(value + (255 - value) * amount);

    return `#${[mix(red), mix(green), mix(blue)]
        .map((value) => value.toString(16).padStart(2, '0'))
        .join('')}`;
}

function getPlaceholderColor(item) {
    return lightenHexColor(item.color || item.placeholderTop || item.placeholderBottom || '#c9c9c9', 0.5);
}

const GALLERY_ORDER_SEED = 'gallery-order-v1';

function getGalleryOrderKey(item) {
    const value = `${GALLERY_ORDER_SEED}:${item.fullSrc || item.src || ''}`;
    let hash = 2166136261;

    for (let index = 0; index < value.length; index += 1) {
        hash ^= value.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }

    return hash >>> 0;
}

function orderGalleryItems(items) {
    if (!Array.isArray(items) || items.length <= 1) {
        return items;
    }

    // This is intentionally deterministic: the order is shuffled once by a
    // stable key, so reopening the page does not reshuffle the gallery.
    return [...items].sort((a, b) => {
        const keyDifference = getGalleryOrderKey(a) - getGalleryOrderKey(b);
        if (keyDifference !== 0) return keyDifference;
        return String(a.fullSrc || a.src || '').localeCompare(String(b.fullSrc || b.src || ''));
    });
}

function updateGalleryMediaDimensions(imgElement, loadedImage) {
    const galleryItem = imgElement.closest('.gallery-item');
    const media = galleryItem?.querySelector('.gallery-media');
    const width = loadedImage.naturalWidth;
    const height = loadedImage.naturalHeight;

    if (!media || !width || !height) return;

    // This is a safety net for a newly added photo before the build command
    // has regenerated its manifest entry.
    media.style.aspectRatio = `${width} / ${height}`;
    imgElement.width = width;
    imgElement.height = height;
}

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
            startLazyLoadingObservation(); // 重新开始懒加载观察
            setTimeout(() => scheduleMasonryLayout(), 100);
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
}

// ----------------------------------------------------------------
// 辅助函数
// ----------------------------------------------------------------
/**
 * 图片加载函数
 * @param {HTMLElement} imgElement 图片元素
 * @param {string} src 真实图片路径
 * @param {boolean} isModal 是否为模态框图片
 * @param {boolean} loadSequentially 是否是队列中的图片 (决定是否由 imagesLoaded 触发后续逻辑)
 */
function loadImage(imgElement, src, isModal = false, loadSequentially = false) {
    const galleryItem = imgElement.closest('.gallery-item');
    const spinnerEl = typeof spinner !== 'undefined' ? spinner : null;
    const fallbackSrc = 'https://placehold.co/400x300/ff6666/ffffff?text=加载失败';

    if (isModal) {
        // Lightbox模式：移除loaded类，显示spinner
        imgElement.classList.remove('loaded');
        if (spinnerEl) spinnerEl.style.display = 'block';
    } else {
        // 画廊模式：添加loading类
        if (galleryItem) galleryItem.classList.add('loading');
        imgElement.classList.remove('lazy'); // 移除懒加载类
        imgElement.classList.remove('loaded');
        if (galleryItem) galleryItem.classList.remove('is-loaded');
    }

    const tempImg = new Image();
    tempImg.decoding = 'async';
    tempImg.onload = async () => {
        try {
            if (typeof tempImg.decode === 'function') {
                await tempImg.decode();
            }
        } catch (error) {
            // decode 失败时直接继续显示，不阻塞图片渲染
        }

        updateGalleryMediaDimensions(imgElement, tempImg);

        // 加载成功：设置真实图片源
        imgElement.src = src;
        
        if (isModal) {
            // FIX: Lightbox模式必须重新添加 loaded 类才能显示图片
            if (spinnerEl) spinnerEl.style.display = 'none';
            requestAnimationFrame(() => {
                imgElement.classList.add('loaded');
            });
        } else {
            if (galleryItem) galleryItem.classList.remove('loading');
        }
        
        // 如果不是顺序加载（即非懒加载，例如 Lightbox），则立即触发淡入和布局更新
        // Lightbox (isModal=true) 走上面 if (isModal) 的逻辑。
        if (!isModal && !loadSequentially) {
             requestAnimationFrame(() => {
                 imgElement.classList.add('loaded');
                 if (galleryItem) galleryItem.classList.add('is-loaded');
                 scheduleMasonryLayout();
             });
        }
        // 顺序加载（loadSequentially = true）的后续逻辑完全交给 processQueue 中的 imagesLoaded 处理
    };

    tempImg.onerror = () => {
        console.error('图片加载失败:', src);
        
        imgElement.src = fallbackSrc;

        if (isModal) {
            if (spinnerEl) spinnerEl.style.display = 'none';
            imgElement.classList.add('loaded'); // 失败也显示占位图
        } else {
            if (galleryItem) galleryItem.classList.remove('loading');
            imgElement.classList.add('loaded');
            if (galleryItem) galleryItem.classList.add('is-loaded');
        }

        // 如果是顺序加载的图片，即使失败也要触发 imagesLoaded 的回调，以确保队列继续
        if (loadSequentially) {
             const galleryItem = imgElement.closest('.gallery-item');
             if (galleryItem) {
                imagesLoaded(galleryItem, function() {
                    scheduleMasonryLayout();
                    requestAnimationFrame(() => {
                        galleryItem.classList.add('is-revealed');
                    });
                    // 继续队列
                    setTimeout(() => {
                        isProcessingQueue = false;
                        processQueue();
                    }, 90);
                });
            }
        }
        // 如果不是顺序加载，立即更新布局以防占位图尺寸导致混乱
        else if (!loadSequentially) {
             scheduleMasonryLayout();
        }
    };

    // 触发浏览器开始加载
    tempImg.src = src;
}


// ----------------------------------------------------------------
// 瀑布流队列处理函数（使用 imagesLoaded 解决卡顿问题，并实现顺序显示）
// ----------------------------------------------------------------
/**
 * 按顺序处理 loadQueue 中的图片，控制每张图片的加载和显示速度。
 */
function processQueue() {
    // 检查队列是否为空或是否正在处理
    if (loadQueue.length === 0 || isProcessingQueue) {
        isProcessingQueue = false;
        return;
    }
    
    isProcessingQueue = true; // 锁定状态

    // 取出队列中第一个元素
    const imgElement = loadQueue.shift();
    if (!imgElement) {
        isProcessingQueue = false;
        return;
    }

    const itemIndex = imgElement.getAttribute('data-index');
    const itemData = galleryData[itemIndex];

    if (!itemData) {
        isProcessingQueue = false;
        return;
    }

    // 1. 触发当前图片的加载，并标记为顺序加载 (loadSequentially = true)
    loadImage(imgElement, itemData.gallerySrc || itemData.fullSrc, false, true);

    // 2. 使用 imagesLoaded 确保图片尺寸已确定，解决布局卡顿
    const galleryItem = imgElement.closest('.gallery-item');
    if (galleryItem) {
        // 使用 imagesLoaded 监控当前这一项中的图片
        imagesLoaded(galleryItem, function() {
            
            // 确保 Masonry 布局更新基于最终尺寸
            scheduleMasonryLayout();
            
            // 触发图片淡入动画
            // 延迟触发动画，给予浏览器重排时间
            requestAnimationFrame(() => {
                imgElement.classList.add('loaded');
                if (galleryItem) {
                    galleryItem.classList.add('is-loaded');
                    galleryItem.classList.add('is-revealed');
                }
            });


            // 3. 控制下一个加载延迟 (保持顺序出现效果)
            // 在布局更新完成后，才启动下一个图片的加载
            setTimeout(() => {
                isProcessingQueue = false;
                processQueue(); // 递归调用，处理下一张
            }, 90); // 轻微交错，让瀑布流出现更顺滑
        });
    } else {
        // 如果找不到 galleryItem，直接处理下一个，并设置延迟
        // 释放锁，继续处理下一个
        setTimeout(() => {
            isProcessingQueue = false;
            processQueue();
        }, 50);
    }
}


// ----------------------------------------------------------------
// 瀑布流画廊懒加载回调函数
// ----------------------------------------------------------------
function onLazyLoad(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imgElement = entry.target;
            observer.unobserve(imgElement); // 停止观察已进入视口的图片
            
            // 关键：将图片元素添加到队列中
            loadQueue.push(imgElement);
            
            // 如果队列处理器未运行，则启动它
            if (!isProcessingQueue) {
                processQueue();
            }
        }
    });
}

// ----------------------------------------------------------------
// 开启懒加载观察
// ----------------------------------------------------------------
function startLazyLoadingObservation() {
    // 确保 Masonry 布局已经存在
    if (!masonry) return;

    if (lazyImageObserver) {
        // 重新观察所有尚未加载的图片
        document.querySelectorAll('img.lazy').forEach(img => {
            lazyImageObserver.unobserve(img); // 先取消旧的观察，防止重复
            lazyImageObserver.observe(img);
        });
        return;
    }

    // 观察器选项：图片进入视口上边界 300px 时即开始加载
    const observerOptions = {
        root: null, // 视口作为根
        rootMargin: '900px 0px', // 提前加载，让卡片在进入视口前完成解码
        threshold: 0.01 // 元素最小可见度
    };

    lazyImageObserver = new IntersectionObserver(onLazyLoad, observerOptions);

    document.querySelectorAll('img.lazy').forEach(img => {
        lazyImageObserver.observe(img);
    });
}


// ----------------------------------------------------------------
// 渲染画廊
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// 渲染画廊 - 【已修改】增加 category 参数用于筛选
// ----------------------------------------------------------------
function renderGallery(category = 'All') {
    ensureGalleryData();
    const container = document.getElementById('masonry-gallery');
    if (!container) {
        console.error('找不到瀑布流容器');
        return;
    }

    if (masonry) {
        masonry.destroy();
        masonry = null;
    }

    if (lazyImageObserver) {
        lazyImageObserver.disconnect();
        lazyImageObserver = null;
    }

    loadQueue = [];
    isProcessingQueue = false;
    
    // 1. 筛选逻辑
    const filteredGallery = galleryData.filter(item => {
        if (category === 'All') return true;
        // 筛选出 category 字段匹配的图片
        return item.category === category;
    });
    const orderedGallery = orderGalleryItems(filteredGallery);
    const visibleGalleryIndexes = orderedGallery.map((item) => galleryData.indexOf(item));
    
    container.innerHTML = '';

    // 2. 渲染筛选后的图片
    orderedGallery.forEach((item, visibleIndex) => {
        const originalIndex = visibleGalleryIndexes[visibleIndex];

        const galleryItem = document.createElement('article');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = originalIndex; // 存入原始索引用于 Lightbox
        galleryItem.setAttribute('data-title', item.title || '');
        galleryItem.style.setProperty('--placeholder-color', getPlaceholderColor(item));

        const media = document.createElement('div');
        media.className = 'gallery-media';
        media.style.aspectRatio = `${item.width} / ${item.height}`;

        const placeholder = document.createElement('div');
        placeholder.className = 'gallery-placeholder';

        const img = document.createElement('img');
        // 初始 src 设置为占位图，真实路径存入 data-src
        img.setAttribute('src', `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${item.width}' height='${item.height}'%3E%3C/svg%3E`);
        img.setAttribute('data-src', item.gallerySrc || item.fullSrc); // 存储画廊实际显示路径
        img.setAttribute('data-full-src', item.fullSrc);
        img.setAttribute('alt', item.title || '图片');
        img.setAttribute('data-index', originalIndex); // 存入原始索引用于队列处理
        img.width = item.width;
        img.height = item.height;
        img.decoding = 'async';
        img.loading = 'lazy';
        img.classList.add('lazy'); // 保留 lazy 类用于 Intersection Observer

        const info = document.createElement('div');
        info.className = 'photo-info';
        info.textContent = item.title || '';

        media.appendChild(placeholder);
        media.appendChild(img);
        media.appendChild(info);
        galleryItem.appendChild(media);
        container.appendChild(galleryItem);

        galleryItem.addEventListener('click', () => openLightbox(originalIndex, visibleGalleryIndexes));
    });

    // 3. 重置 Masonry 和懒加载
    setTimeout(() => {
        masonry = new Masonry(container, {
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-item',
            gutter: 10,
            percentPosition: false,
            transitionDuration: 0,
            fitWidth: true,
            // Let Masonry place each item in the currently shortest column.
            // horizontalOrder would force row-based placement and create the
            // large empty gaps visible in the previous layout.
            horizontalOrder: false
        });
        
        // 第一次布局，基于占位图尺寸
        masonry.layout();
        
        // 初始化 Masonry 布局后，开始懒加载观察
        startLazyLoadingObservation();

    }, 100);
    
    // 确保 resize 监听只注册一次
    if (!window.masonryResizeHandler) {
        window.masonryResizeHandler = () => {
             if (masonry) {
                setTimeout(() => scheduleMasonryLayout(), 100);
            }
        };
        window.addEventListener('resize', window.masonryResizeHandler);
    }
}


// ----------------------------------------------------------------
// Lightbox 功能 (保持不变)
// ----------------------------------------------------------------
function openLightbox(index, sequence = galleryData.map((_, itemIndex) => itemIndex)) {
    currentLightboxSequence = Array.isArray(sequence) && sequence.length > 0 ? [...sequence] : [index];
    currentLightboxPosition = currentLightboxSequence.indexOf(index);
    if (currentLightboxPosition === -1) {
        currentLightboxSequence = [index];
        currentLightboxPosition = 0;
    }

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
    currentLightboxSequence = [];
    currentLightboxPosition = -1;
    preloadedLightboxImages.clear();
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
    currentLightboxPosition = currentLightboxSequence.indexOf(index);
    const item = galleryData[index];
    
    // 确保 loadImage 使用新数据
    loadImage(modalImage, item.fullSrc, true); // <--- isModal=true
    preloadAdjacentLightboxImages();
    
    modalImage.alt = item.title || '';
    modalTitle.textContent = item.title || '';
    viewOriginalLink.href = item.fullSrc;

    prevButton.disabled = currentLightboxPosition <= 0;
    nextButton.disabled = currentLightboxPosition === -1 || currentLightboxPosition >= currentLightboxSequence.length - 1;
}

function preloadAdjacentLightboxImages() {
    const neighborPositions = [currentLightboxPosition - 1, currentLightboxPosition + 1];

    neighborPositions.forEach((position) => {
        const neighborIndex = currentLightboxSequence[position];
        const neighbor = galleryData[neighborIndex];
        const src = neighbor?.fullSrc;

        if (!src || preloadedLightboxImages.has(src)) return;

        preloadedLightboxImages.add(src);
        const image = new Image();
        image.decoding = 'async';
        image.src = src;
    });
}

function showPrevImage() {
    if (currentLightboxPosition > 0) {
        updateLightboxContent(currentLightboxSequence[currentLightboxPosition - 1]);
    }
}

function showNextImage() {
    if (currentLightboxPosition >= 0 && currentLightboxPosition < currentLightboxSequence.length - 1) {
        updateLightboxContent(currentLightboxSequence[currentLightboxPosition + 1]);
    }
}

// ----------------------------------------------------------------
// 博客文章渲染 (保持不变)
// ----------------------------------------------------------------
function renderBlogPosts(category = 'All') {
    const grid = document.querySelector('.blog-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    // 1. 筛选逻辑
    const filteredPosts = blogPosts.filter(post => {
        if (category === 'All') return true;

        // 兼容旧数据：如果是字符串，转成数组再判断
        const categories = Array.isArray(post.category) ? post.category : [post.category];
        return categories.includes(category);
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
                    <div>
                        <a href="${post.url}" class="read-more-link">阅读全文 →</a>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}


// ----------------------------------------------------------------
// 事件绑定和初始化 (保持不变)
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// 事件绑定和初始化 - 【已修改】增加画廊分类点击事件
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// 事件绑定和初始化 - 【已修改】处理跨页面导航
// ----------------------------------------------------------------
function initApp() {
    console.log('初始化应用...');
    
    // 主导航栏点击事件
    navItems.forEach(item => {
        if (item.hasAttribute('data-target')) {
            item.addEventListener('click', (e) => {
                // 检查是否在当前页面（首页）
                const isOnHomePage = window.location.pathname.endsWith('index.html') ||
                                   window.location.pathname.endsWith('/') ||
                                   window.location.pathname === '';
                
                if (!isOnHomePage) {
                    // 不在首页，让浏览器正常跳转（不阻止默认行为）
                    // href 已经是绝对路径，会跳转到首页对应分类
                    return;
                }
                
                // 在首页，阻止默认行为，使用 JavaScript 切换视图
                e.preventDefault();
                const targetId = item.getAttribute('data-target');
                const category = item.getAttribute('data-category');
                
                // 确保视图切换
                switchView(targetId, item);
                
                // 根据目标更新 hash
                if (targetId === 'blog-section') {
                    window.location.hash = 'blog';
                } else if (targetId === 'gallery-section') {
                    if (category && category !== 'All') {
                        window.location.hash = `gallery/${category}`;
                    } else {
                        window.location.hash = ''; // 首页不带 hash
                    }
                }
            });
        }
    });

    // 分类链接点击事件
    document.querySelectorAll('.blog-categories-list a').forEach(link => {
        link.addEventListener('click', (e) => {
            // 检查是否在当前页面（首页）
            const isOnHomePage = window.location.pathname.endsWith('index.html') ||
                               window.location.pathname.endsWith('/') ||
                               window.location.pathname === '';
            
            if (!isOnHomePage) {
                // 不在首页，让浏览器正常跳转
                // 链接已经是绝对路径，会跳转到首页对应分类
                return;
            }
            
            // 在首页，阻止默认行为，使用 JavaScript 处理
            e.preventDefault();
            const category = link.getAttribute('data-category');
            
            // 更新 hash 以触发 restoreViewState
            if (category === 'All') {
                window.location.hash = 'blog';
            } else {
                window.location.hash = `blog/${encodeURIComponent(category)}`;
            }
        });
    });

    restoreViewState(); // 首次加载时调用
    
    // 其他事件绑定保持不变...
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

function restoreViewState() {
    const hash = window.location.hash;
    const categoryLinks = document.querySelectorAll('.blog-categories-list a');
    const navItems = document.querySelectorAll('.nav-item[data-target]');
    
    let targetView = 'gallery-section'; // 默认视图
    let contentCategory = 'All'; // 默认内容分类

    if (hash.startsWith('#blog/')) {
        // 博客分类：#blog/分类名称
        contentCategory = decodeURIComponent(hash.substring(6));
        targetView = 'blog-section';
    } else if (hash === '#blog') {
        // 博客主页：#blog
        contentCategory = 'All';
        targetView = 'blog-section';
    } else if (hash.startsWith('#gallery/')) {
        // 画廊分类：#gallery/分类名称
        contentCategory = decodeURIComponent(hash.substring(9));
        targetView = 'gallery-section';
    } else {
        // 默认首页（画廊）：# 或空
        contentCategory = 'All';
        targetView = 'gallery-section';
    }
    
    // 检查是否在首页
    const isOnHomePage = window.location.pathname.endsWith('index.html') ||
                       window.location.pathname.endsWith('/') ||
                       window.location.pathname === '';
    
    if (isOnHomePage) {
        // 在首页：切换视图和渲染内容
        const activeNavItem = targetView === 'gallery-section'
            ? getGalleryNavItem(contentCategory)
            : document.querySelector(`a[data-target="${targetView}"]`);
        if (activeNavItem && ((targetView === 'blog-section' && blogSection.classList.contains('hidden')) || (targetView === 'gallery-section' && gallerySection.classList.contains('hidden')))) {
            switchView(targetView, activeNavItem);
        } else if (activeNavItem) {
            // 仅激活导航栏
            navItems.forEach(item => item.classList.remove('active'));
            activeNavItem.classList.add('active');
        }

        // 渲染内容
        if (targetView === 'blog-section') {
            // 更新博客分类链接的 active 状态
            categoryLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-category') === contentCategory) {
                    link.classList.add('active');
                }
            });
            renderBlogPosts(contentCategory);
        } else {
            // 渲染画廊
            renderGallery(contentCategory);
        }
    }
    // 如果不在首页，但通过链接跳转过来，页面会自动刷新到首页并带有正确的 hash
    // 此时会重新执行 restoreViewState
}

document.addEventListener('DOMContentLoaded', () => {
    loadGalleryData();
    initApp();
});
