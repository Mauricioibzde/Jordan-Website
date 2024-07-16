document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.item');
    const indicators = document.querySelectorAll('.indicators ul li');
    const numberIndicator = document.querySelector('.indicators .number');
    let activeIndex = 0;

    function setActiveItem(index, direction) {
        items.forEach((item, i) => {
            item.classList.remove('active', 'animate-in-left', 'animate-in-right', 'animate-out-left', 'animate-out-right');
            if (i === index) {
                item.classList.add('active');
                item.classList.add(direction === 'right' ? 'animate-in-right' : 'animate-in-left');
            } else if (i === activeIndex) {
                item.classList.add(direction === 'right' ? 'animate-out-left' : 'animate-out-right');
            }
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === index) {
                indicator.classList.add('active');
            }
        });

        numberIndicator.textContent = (index + 1).toString().padStart(2, '0');
        activeIndex = index;
    }

    document.querySelector('.left-arrow').addEventListener('click', () => {
        const newIndex = (activeIndex > 0) ? activeIndex - 1 : items.length - 1;
        setActiveItem(newIndex, 'left');
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        const newIndex = (activeIndex < items.length - 1) ? activeIndex + 1 : 0;
        setActiveItem(newIndex, 'right');
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            const direction = index > activeIndex ? 'right' : 'left';
            setActiveItem(index, direction);
        });
    });
});