// eslint-disable-next-line arrow-body-style
export const parseId = (url: string) => {
  return url.split('/').pop();
};
