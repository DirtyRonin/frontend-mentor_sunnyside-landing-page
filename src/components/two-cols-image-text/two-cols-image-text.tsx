import { ImageCol } from '../image-col';

interface TwoColsImageTextProps {
  title: string;
  description: string;
  imageUrlMobile: string;
  imageUrlDesktop: string;
  borderColor: string;
}

export function TwoColsImageText({ title, description, imageUrlMobile, imageUrlDesktop, borderColor: linkColor }: TwoColsImageTextProps) {
  return (
    <>
      <ImageCol imageUrlDesktop={imageUrlDesktop} imageUrlMobile={imageUrlMobile} />
      <div className="flex flex-col text-center px-7 py-[3.6rem] gap-6">
        <h2 className="text-[1.8rem] font-black leading-8">{title}</h2>
        <p className="font-[Barlow] text-dark-grayish-blue text-[.97rem] leading-[1.65rem]">{description}</p>
        <div>
          <button className="relative">
            <p className="uppercase text-[.85rem] font-black px-2 letter tracking-widest">learn more</p>
            <div className={`absolute w-full border-[5px] rounded bottom-0 z-[-1000] ${linkColor}`}> </div>
          </button>
        </div>
      </div>
    </>
  );
}
