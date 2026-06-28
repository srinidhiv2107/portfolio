import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initializeAnalytics = () => {
    ReactGA.initialize(measurementId);
};

export const trackPageView = () => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
    });
};

export const trackSectionView = (sectionName) => {
    ReactGA.event("section_view", {
        section_name: sectionName,
    });
};

export default ReactGA;
