interface ImageColProps {
  imageUrlDesktop: string;
  imageUrlMobile: string;
  alt?: string;
}

export function ImageCol({ imageUrlDesktop, imageUrlMobile, alt }: ImageColProps) {
  return (
    <picture>
      <source media="(min-width:1040px)" srcSet={imageUrlDesktop} />
      <source media="(min-width:350px)" srcSet={imageUrlMobile} />
      <img src={imageUrlMobile} alt={alt || ''} />
    </picture>
  );
}
