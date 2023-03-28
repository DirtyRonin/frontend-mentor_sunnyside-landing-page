import { ReactComponent as Logo } from '../../project/images/logo.svg';
import { ReactComponent as Facebook } from '../../project/images/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../project/images/icon-instagram.svg';
import { ReactComponent as Pinterest } from '../../project/images/icon-pinterest.svg';
import { ReactComponent as Twitter } from '../../project/images/icon-twitter.svg';

export function Footer() {
  return (
    <div className="text-dark-desaturated-cyan text-center font-[Barlow] bg-[hsl(168_44%_71%)]">
      <div className="flex items-center justify-center pt-12">
        <Logo className="text-[hsl(167_40%_30%)]" />
      </div>
      <div className="flex justify-center pt-8 text-[hsl(168_40%_40%)]">
        <ul>
          <li className="float-left p-4">About</li>
          <li className="float-left p-4">Services</li>
          <li className="float-left p-4">Projects</li>
        </ul>
      </div>
      <div className="flex justify-center pt-16 pb-[75px]">
        <ul>
          <li className="float-left px-3">
            <Facebook className="text-[hsl(167_40%_30%)]" />
          </li>
          <li className="float-left px-3">
            <Instagram className="text-[hsl(167_40%_30%)]" />
          </li>
          <li className="float-left px-3">
            <Twitter className="text-[hsl(167_40%_30%)]" />
          </li>
          <li className="float-left px-3">
            <Pinterest className="text-[hsl(167_40%_30%)]" />
          </li>
        </ul>
      </div>
    </div>
  );
}
