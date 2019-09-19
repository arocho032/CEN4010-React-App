/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This page is not on the website, or is still under development.',
  },
  return: {
  	id: `${scope}.return`,
  	defaultMessage: 'Go back home.',
  },
});
