const observeTarget = (target, cb, threshold = 0.2, root = null) => {
    const observerConfig = {
        root,
        margin: 0,
        threshold
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cb(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerConfig);
    observer.observe(target);
};

export default observeTarget;