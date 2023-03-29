import React from 'react';
import { ImageCol } from '../image-col';

interface TwoColsImageTextProps {
  title: string;
  description: string;
  imageUrlMobile: string;
  imageUrlDesktop: string;
  linkColor: 'yellow' | 'soft-red';
  reverse?: boolean;
}

export function TwoColsImageText({ title, description, imageUrlMobile, imageUrlDesktop, linkColor, reverse = false }: TwoColsImageTextProps) {
  const [isActive, setActive] = React.useState(false);

  const getLinkColor = (color: 'yellow' | 'soft-red') => {
    switch (color) {
      case 'yellow':
        return { color: 'border-yellow-light', active: 'border-yellow' };
      case 'soft-red':
        return { color: 'border-soft-red-light', active: 'border-soft-red' };
      default:
        return { color: '', active: '' };
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <ImageCol imageUrlDesktop={imageUrlDesktop} imageUrlMobile={imageUrlMobile} />

      <div
        className={`flex flex-col text-center justify-center
      px-7 py-[3.6rem] gap-6 
      md:px-1 md:py-[.5rem] md:gap-4  
      lg:px-4  
      xl:pl-[9.2rem] xl:pr-[6rem] xl:text-left  xl:gap-8
      ${reverse ? 'md:order-first' : ''}`}
      >
        <h2 className="font-black text-[1.8rem] lg:text-[2.2rem] leading-8 lg:leading-[2.75rem]">{title}</h2>
        <p className="font-[Barlow] text-dark-grayish-blue text-ellipsis text-[.97rem] lg:text-[.9825rem] leading-[1.65rem] ">{description}</p>
        <div>
          <button className="" onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}>
            <p className="uppercase text-[.85rem] font-black px-2 letter tracking-widest z-[2000]">learn more</p>
            <div
              className={`mt-[-14px] w-full border-[5px] rounded bottom-0 z-[1] ${isActive ? getLinkColor(linkColor).active : getLinkColor(linkColor).color}`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
}
