import queryString from 'query-string';

interface gaEventArgs {
  category: string;
  action: string;
  label: string;
  value?: number;
}

/**
 * Prevents events being tracked in production by appending url with ?testing
 **/
let gaTestingMode = false;
if (typeof window !== 'undefined') {
  const {
    query: { testing },
  } = queryString.parseUrl(location.href);
  // Returns null when present, or undefined when not set
  if (testing === null) {
    gaTestingMode = true;
  }
}

const gaEvent = ({ category, action, label, value }: gaEventArgs) => {
  // Might be undefined in local environment
  if (typeof gtag !== 'undefined' && gaTestingMode === false) {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      event_value: value,
    });
  }
};

export default gaEvent;
