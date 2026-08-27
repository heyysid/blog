/*
 * Shared head assets for article pages.
 *
 * This file intentionally writes the same blocking tags that the pages used
 * before. Keeping the order preserves Tailwind's configuration timing while
 * allowing every article to maintain one short include.
 */
(function writeSharedPostAssets() {
    const includeSiteStyle = document.currentScript?.dataset.siteStyle !== 'false';

    document.write('<script src="https://cdn.tailwindcss.com"></script>');
    document.write(`
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        fontFamily: {
                            sans: ['Inter', 'Verdana', 'sans-serif'],
                        },
                        colors: {
                            'primary-blue': '#007bff',
                            'dark-gray': '#333333',
                            'light-bg': '#f5f5f5',
                        }
                    }
                }
            };
        </script>
    `);
    document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js"></script>');
    document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">');
    if (includeSiteStyle) {
        document.write('<link rel="stylesheet" href="../style.css">');
    }
}());
