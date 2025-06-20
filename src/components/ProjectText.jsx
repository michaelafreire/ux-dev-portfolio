import React from 'react'
import { useTranslation, Trans } from 'react-i18next';

function ProjectText(props) {
  const { t } = useTranslation();

  return (
    <p className="font-main sm:text-xl text-m"><Trans i18nKey={props.text} components={{ strong: <strong /> }} /></p>
  )
}

export default ProjectText
