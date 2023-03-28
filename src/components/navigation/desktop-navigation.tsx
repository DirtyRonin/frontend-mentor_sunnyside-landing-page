import { ReactComponent as Logo } from '../../project/images/logo.svg';

export function DesktopNavigation() {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <div className="flex gap-4">
        <div className="font-[Barlow]">
          <ul>
            <li className="float-left py-3 px-5">
              <a href="#">About</a>
            </li>
            <li className="float-left py-3 px-5">
              <a href="#">Services</a>
            </li>
            <li className="float-left py-3 px-5">
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
        <button className="text-black bg-white px-6 rounded-[5rem]">
          <p className="uppercase text-sm">contact</p>
        </button>
      </div>
    </div>
  );
}
