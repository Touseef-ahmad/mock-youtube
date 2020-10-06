import { object, shape } from 'prop-types';

export const propTypes = {
  match: shape({
    params: object.isRequired,
  }),
};
