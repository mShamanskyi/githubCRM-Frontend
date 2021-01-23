import isLength from 'validator/lib/isLength';

import { generateMessage } from '../generateMessage';
import { MESSAGES_ERROR_LABELS } from '../../../configuration/constants';

const { LENGTH, REQUIRED } = MESSAGES_ERROR_LABELS;

const limit = {
  min: 3,
  max: 200
};

export default function repoPath({ field = "repoPath", value }) {
  const errors = {};
  const message = generateMessage({ field, ...limit });

  if (!value) {
    errors[field] = message[REQUIRED];
  } else if (!isLength(value, limit)) {
    errors[field] = message[LENGTH];
  }

  return errors;
}