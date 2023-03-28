export function GetPublicUrl(url?: string) {
  return `${process.env.PUBLIC_URL}/${url || ''}`;
}
