import { ImageCol } from '../image-col';

interface OneColImageTextProps {
  title: string;
  description: string;
  imageUrlMobile: string;
  imageUrlDesktop: string;
  textColor: string;
}

export function OneColImageText({ title, description, imageUrlMobile, imageUrlDesktop, textColor }: OneColImageTextProps) {
  return (
    <div className="relative gap-4">
      <ImageCol imageUrlDesktop={imageUrlDesktop} imageUrlMobile={imageUrlMobile} />
      <div className={`absolute bottom-0 flex flex-col text-center px-2 pb-[3rem] font-black gap-6 ${textColor}`}>
        <h2 className={`text-[1.6rem] capitalize font-black leading-8 ${textColor}`}>{title}</h2>
        <p className="font-[Barlow]  text-[.9rem] leading-[1.65rem]">{description}</p>
      </div>
    </div>
  );
}
