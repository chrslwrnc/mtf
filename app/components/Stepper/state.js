export const setCurrent = (current) => (state) => {
  if (current > (state.current + 1)) return { current: state.current + 1 };
  return { current };
};

export const resetCurrent = () => ({ current: 0 });
