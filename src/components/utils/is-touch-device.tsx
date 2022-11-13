const isTouchDevice = () => {
  return typeof window !== 'undefined'
    ? window.matchMedia('(hover: none) and (pointer: coarse)').matches
    : undefined;
};

export default isTouchDevice;
