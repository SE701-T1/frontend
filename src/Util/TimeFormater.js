/*
  From https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
 */
export default function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 50) {
    return '';
  }

  if (interval > 1) {
    return `${Math.floor(interval)} y`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return `${Math.floor(interval)} m`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return `${Math.floor(interval)} d`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return `${Math.floor(interval)} h`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return `${Math.floor(interval)} m`;
  }
  return `${Math.floor(seconds)} s`;
}
