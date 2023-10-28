import * as yup from 'yup';

export const roleValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
});
