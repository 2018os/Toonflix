export const { GA_TRACKING_ID } = process.env;

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const pageview = (url: URL) => {
  if (process.env.NODE_ENV === 'production' && GA_TRACKING_ID)
    global.window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    });
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  global.window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
};
