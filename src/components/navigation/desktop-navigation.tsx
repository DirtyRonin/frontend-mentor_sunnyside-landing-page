import { menuOptions } from '../../models/menuOptions';
import { ReactComponent as Logo } from '../../project/images/logo.svg';

export function DesktopNavigation() {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <div className="flex gap-4">
        <div className="font-[Barlow]">
          <ul>
            {menuOptions.map((x) => (
              <li key={`desktop-navigation-${x}`} className="float-left py-3 px-5  ">
                <a className="active:text-sky-200 " href="#">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button className="text-black bg-white px-6 rounded-[5rem] active:text-white active:bg-sky-300">
          <p className="uppercase text-sm">contact</p>
        </button>
      </div>
    </div>
  );
}
