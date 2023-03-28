import { ReactComponent as Logo } from '../../project/images/logo.svg';
import { ReactComponent as Hamburger } from '../../project/images/icon-hamburger.svg';

export function Navigation() {
  return (
    <div className="flex justify-between">
      <Logo />
      <Hamburger />
    </div>
  );
}
