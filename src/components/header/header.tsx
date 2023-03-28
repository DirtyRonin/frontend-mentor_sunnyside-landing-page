import { GetPublicUrl } from '../../utils/get-public-url';
import { ImageCol } from '../image-col';
import { Navigation } from '../navigation';
import { ReactComponent as ArrowDown } from '../../project/images/icon-arrow-down.svg';

export function Header() {
  return (
    <div className="relative">
      <ImageCol imageUrlMobile={`${GetPublicUrl('img/mobile/image-header.jpg')}`} imageUrlDesktop={`${GetPublicUrl('img/mobile/image-header.jpg')}`} />
      <div className="absolute w-full top-0 text-white p-4">
        <Navigation />
      </div>
      <div className="flex flex-col items-center absolute top-[7.25rem]  text-center p-4 gap-[2.85rem]">
        <h1 className="uppercase text-white text-4xl tracking-[.5rem]">we are creatives</h1>
        <ArrowDown />
      </div>
    </div>
  );
}
