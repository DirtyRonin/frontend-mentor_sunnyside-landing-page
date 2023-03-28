import { GetPublicUrl } from '../../utils/get-public-url';

interface ImageColProps {
  imageUrlDesktop: string;
  imageUrlMobile: string;
  alt?: string;
  mediaDesktop?: string;
  mediaMobile?: string;
}

export function ImageCol({ imageUrlDesktop, imageUrlMobile, alt, mediaDesktop = '(min-width:768px)', mediaMobile = '(min-width:350px)' }: ImageColProps) {
  return (
    <picture>
      <source media={mediaDesktop} srcSet={`${GetPublicUrl(imageUrlDesktop)}`} />
      <source media={mediaMobile} srcSet={`${GetPublicUrl(imageUrlMobile)}`} />
      <img src={`${GetPublicUrl(imageUrlMobile)}`} alt={alt || ''} />
    </picture>
  );
}
