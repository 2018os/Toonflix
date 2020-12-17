type ActionOnScrolledToBottom = () => any;

const handleOnScroll = (action: ActionOnScrolledToBottom) => {
  const { document, window } = global;
  const scrollTop =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;
  const scrollHeight =
    (document.documentElement && document.documentElement.scrollHeight) ||
    document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;
  const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
  if (scrolledToBottom) {
    action();
  }
};

export default handleOnScroll;
