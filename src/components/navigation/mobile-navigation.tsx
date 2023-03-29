import { ReactComponent as Logo } from '../../project/images/logo.svg';
import { ReactComponent as Hamburger } from '../../project/images/icon-hamburger.svg';

interface MobileNavigationProps {
  toggleMenu: () => void;
}

export function MobileNavigation({ toggleMenu }: MobileNavigationProps) {
  return (
    <div className="flex justify-between">
      <Logo />
      <button onClick={toggleMenu}>
        <Hamburger />
      </button>
    </div>
  );
}
