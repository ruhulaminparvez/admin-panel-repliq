const options = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  resetProgress: false,
  arrows: true,
  pagination: true,
  lazyLoad: 'nearby',
  width: '100%',
  height: '100%',
  breakpoints: {
    640: {
      perPage: 1,
      perMove: 1,
      width: '100%',
      height: '100%',
    },
    768: {
      perPage: 1,
      perMove: 1,
      width: '100%',
      height: '100%',
    },
    1024: {
      perPage: 1,
      perMove: 1,
      width: '100%',
      height: '100%',
    },
  },
};

export default options;