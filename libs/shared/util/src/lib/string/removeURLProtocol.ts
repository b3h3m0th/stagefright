export function removeURLProtocol(url: string): string {
  return url.replace(/(^\w+:|^)\/\//, '');
}
