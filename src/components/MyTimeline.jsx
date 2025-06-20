import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Timeline from '@mui/lab/Timeline';
import { useTranslation } from 'react-i18next';
import TimelineEntry from './TimelineEntry';
import SchoolIcon from '@mui/icons-material/School';

const theme = createTheme({
  typography: {
    fontFamily: `"Space Grotesk", sans-serif`,
  },
});

function MyTimeline() {
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const { t, i18n } = useTranslation();
  const timelineData = [
    ['timeline-ii', 'timeline-iii', 'timeline-company-1'],
    ['timeline-iv', 'timeline-v', 'timeline-company-2'],
    ['timeline-vi', 'timeline-vii', 'timeline-company-3'],
    ['timeline-viii', 'timeline-ix', 'timeline-company-4'],
    ['timeline-xi', 'timeline-xii', 'timeline-company-5'],
    ['timeline-xiii', 'timeline-xiv', 'timeline-company-6'],
    ['timeline-xv', 'timeline-xvi', 'timeline-company-7'],
    ['timeline-xvii', 'timeline-xviii', 'timeline-company-8'],
    ['timeline-xix', 'timeline-xx', 'timeline-company-9'],
    ['timeline-xxi', 'timeline-xxii', 'timeline-company-10'],
    ['timeline-xxiii', 'timeline-xxiv', 'timeline-company-11'],
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Timeline position="right">
      <TimelineEntry
        titleKey="timeline-ii"
        dateKey="timeline-date-ii"
        companyKey="timeline-company-ii"
      />
      <TimelineEntry
        titleKey="timeline-study-i"
        dateKey="timeline-study-date-i"
        companyKey="timeline-study-org-i"
        icon={<SchoolIcon fontSize="small"/>}
      />
      <TimelineEntry
        titleKey="timeline-iv"
        dateKey="timeline-date-iv"
        companyKey="timeline-company-iv"
      />
      <TimelineEntry
        titleKey="timeline-vi"
        dateKey="timeline-date-vi"
        companyKey="timeline-company-vi"
      />
      <TimelineEntry
        titleKey="timeline-study-ii"
        dateKey="timeline-study-date-ii"
        companyKey="timeline-study-org-ii"
        icon={<SchoolIcon fontSize="small"/>}
      />
      <TimelineEntry
        titleKey="timeline-viii"
        dateKey="timeline-date-viii"
        companyKey="timeline-company-viii"
      />
      <TimelineEntry
        titleKey="timeline-xi"
        dateKey="timeline-date-xi"
        companyKey="timeline-company-xi"
      />
      <TimelineEntry
        titleKey="timeline-xiii"
        dateKey="timeline-date-xiii"
        companyKey="timeline-company-xiii"
      />
      <TimelineEntry
        titleKey="timeline-xv"
        dateKey="timeline-date-xv"
        companyKey="timeline-company-xv"
      />
      <TimelineEntry
        titleKey="timeline-xvii"
        dateKey="timeline-date-xvii"
        companyKey="timeline-company-xvii"
      />
      <TimelineEntry
        titleKey="timeline-xix"
        dateKey="timeline-date-xix"
        companyKey="timeline-company-xix"
      />
      <TimelineEntry
        titleKey="timeline-xxi"
        dateKey="timeline-date-xxi"
        companyKey="timeline-company-xxi"
      />
      <TimelineEntry
        titleKey="timeline-study-iii"
        dateKey="timeline-study-date-iii"
        companyKey="timeline-study-org-iii"
        icon={<SchoolIcon fontSize="small"/>}
      />
      <TimelineEntry
        titleKey="timeline-xxiii"
        dateKey="timeline-date-xxiii"
        companyKey="timeline-company-xxiii"
      />
    </Timeline>
    </ThemeProvider>
  )
}

export default MyTimeline
