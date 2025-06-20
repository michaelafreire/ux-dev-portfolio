import React from 'react';
import { useTranslation } from 'react-i18next';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const TimelineEntry = ({
  titleKey,
  dateKey,
  companyKey,
  dotColor = '#d42e75',
  icon = null,
}) => {
  const { t } = useTranslation();
  const isOutlined = !icon;

  return (
    <TimelineItem>
      {/* Left: Title and Date */}
      <TimelineOppositeContent sx={{ m: 'auto 0' }}>
        <Typography variant="body1" fontWeight="bold">{t(titleKey)}</Typography>
        <Typography variant="body2" color="text.secondary">
          {t(dateKey)}
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot
          variant={isOutlined ? 'outlined' : undefined}
          sx={
            isOutlined
              ? {
                borderColor: dotColor,
                borderWidth: 2,
                color: dotColor,
              }
              : {
                bgcolor: dotColor,
                color: '#fff',
              }
          }
        >
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      {/* Right: Company */}
      <TimelineContent sx={{ py: '12px', px: 2, textAlign: 'left' }}>
        <Typography variant="body2" color="text.primary">
          {t(companyKey)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineEntry;
