const getScrolledToBottom = () => {
  const { document, window } = global;
  const scrollTop =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;
  const scrollHeight =
    (document.documentElement && document.documentElement.scrollHeight) ||
    document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;
  return Math.ceil(scrollTop + clientHeight) >= scrollHeight;
};

export default getScrolledToBottom;
