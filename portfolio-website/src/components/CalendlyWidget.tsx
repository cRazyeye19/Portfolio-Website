import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url }) => {
  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      console.error('Calendly script not loaded.');
    }
  }, [url]);

  return null;
};

export default CalendlyWidget;