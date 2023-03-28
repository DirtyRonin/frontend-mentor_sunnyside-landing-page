import { ImageCol } from '../image-col';
import { DesktopNavigation, MobileNavigation } from '../navigation';
import { ReactComponent as ArrowDown } from '../../project/images/icon-arrow-down.svg';
import React from 'react';
import { UseBrowserSize } from '../../hooks/use-browser-size';

export function Header() {
  const [state, dispatch] = React.useState({
    theme: 'desktop',
    showMenu: false,
    breakpoint: 768,
  });

  const { width } = UseBrowserSize();

  // switch theme on breakpoint
  React.useEffect(() => {
    if (width >= state.breakpoint && state.theme === 'mobile') {
      dispatch((prev) => ({ ...prev, theme: 'desktop', showMenu: false }));
    }

    if (width < state.breakpoint && state.theme === 'desktop') {
      dispatch((prev) => ({ ...prev, theme: 'mobile' }));
    }
  }, [width]);

  return (
    <div className="relative">
      <ImageCol imageUrlMobile="img/mobile/image-header.jpg" imageUrlDesktop="img/desktop/image-header.jpg" />
      {state.theme === 'desktop' ? (
        <div className="absolute w-full top-0 text-white pt-8 px-8 pb-4">
          <DesktopNavigation />
        </div>
      ) : (
        <div className="absolute w-full top-0 text-white pt-8 px-6 pb-4">
          <MobileNavigation />
        </div>
      )}
      <div className="absolute flex flex-col items-center bottom-[6.5rem] xl:top-[11.35rem]  md:top-[6rem] right-0 left-0 text-center p-4 gap-[2.85rem] lg:gap-[6.5rem] md:gap-[2rem]">
        {/* <div className="absolute flex flex-col items-center bottom-[6.5rem]  xl:top-[11.35rem] lg:top-[8rem] md:top-[4rem] right-0 left-0 text-center p-4 gap-[2.85rem] md:gap-[6.5rem]"> */}
        <h1 className="uppercase text-white text-4xl tracking-[.5rem] md:text-[3rem] md:leading-[1rem]">we are creatives</h1>
        <ArrowDown />
      </div>
    </div>
  );
}
