const handleSmoothScroll = (event) => {
    event.preventDefault();
    window.scrollTo({ behavior: 'smooth', top: 0 });
};

export default handleSmoothScroll;