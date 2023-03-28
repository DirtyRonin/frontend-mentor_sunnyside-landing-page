import { ImageCol } from '../image-col';
import { DesktopNavigation, MobileNavigation } from '../navigation';
import { ReactComponent as ArrowDown } from '../../project/images/icon-arrow-down.svg';
import React from 'react';
import { UseBrowserSize } from '../../hooks/use-browser-size';
import { menuOptions } from '../../models/menuOptions';
import './header.css';

export function Header() {
  const [state, dispatch] = React.useState({
    theme: 'desktop',
    showMenu: false,
    breakpoint: 768,
  });

  const { width } = UseBrowserSize();

  // switch theme on breakpoint
  React.useEffect(() => {
    if (!width) return;

    if (width >= state.breakpoint && state.theme === 'mobile') {
      dispatch((prev) => ({ ...prev, theme: 'desktop', showMenu: false }));
    }

    if (width < state.breakpoint && state.theme === 'desktop') {
      dispatch((prev) => ({ ...prev, theme: 'mobile' }));
    }
  }, [width]);

  const toggleMenu = () => dispatch((prev) => ({ ...prev, showMenu: !prev.showMenu }));

  return (
    <div className="relative">
      <ImageCol imageUrlMobile="img/mobile/image-header.jpg" imageUrlDesktop="img/desktop/image-header.jpg" />
      {state.theme === 'desktop' ? (
        <div className="absolute w-full top-0 text-white pt-8 px-8 pb-4">
          <DesktopNavigation />
        </div>
      ) : (
        <div className="absolute w-full top-0 text-white pt-8 px-6 pb-4">
          <MobileNavigation toggleMenu={toggleMenu} />
        </div>
      )}

      {state.theme === 'desktop' || !state.showMenu ? (
        <div className="absolute flex flex-col items-center bottom-[6.5rem] xl:top-[11.35rem]  md:top-[6rem] right-0 left-0 text-center p-4 gap-[2.85rem] lg:gap-[6.5rem] md:gap-[2rem]">
          <h1 className="uppercase text-white text-4xl tracking-[.5rem] md:text-[3rem] md:leading-[1rem]">we are creatives</h1>
          <ArrowDown />
        </div>
      ) : (
        <div className="absolute grid bg-white top-[6.25rem] left-6 right-6 py-6">
          <div className="absolute rectangle top-[-25px] right-0"></div>
          <ul>
            {menuOptions.map((x) => (
              <li key={`header-mobile-navigation-${x}`} className="py-3 px-5 text-center text-dark-grayish-blue font-[Barlow] ">
                <a className="active:text-sky-200" href="#">
                  {x}
                </a>
              </li>
            ))}
          </ul>
          <div className="text-center py-3 px-5">
            <button className=" text-black bg-yellow px-[1.65rem] py-[1rem] rounded-[5rem] active:text-white active:bg-sky-300">
              <p className="uppercase text-sm">contact</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
