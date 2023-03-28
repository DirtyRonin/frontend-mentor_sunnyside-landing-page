import { ReactComponent as Logo } from '../../project/images/logo.svg';
import { ReactComponent as Facebook } from '../../project/images/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../project/images/icon-instagram.svg';
import { ReactComponent as Pinterest } from '../../project/images/icon-pinterest.svg';
import { ReactComponent as Twitter } from '../../project/images/icon-twitter.svg';

export function Footer() {
  const menuOptions = ['About', 'Services', 'Projects'] as const;
  const socialOptions = [<Facebook />, <Instagram />, <Twitter />, <Pinterest />] as const;

  return (
    <div className="text-dark-desaturated-cyan text-center font-[Barlow] bg-[hsl(168_44%_71%)]">
      <div className="flex items-center justify-center pt-12">
        <Logo className="text-[hsl(167_40%_30%)]" />
      </div>
      <div className="flex justify-center pt-8 text-[hsl(168_40%_40%)]">
        <ul>
          {menuOptions.map((x) => (
            <li key={`footer-${x}`} className="float-left p-4 active:text-white cursor-pointer">
              {x}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center pt-16 pb-[75px] text-[hsl(167_40%_30%)] ">
        <ul>
          {socialOptions.map((x, index) => (
            <li key={`footer-social-${index}`} className="float-left px-3  active:text-white cursor-pointer">
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
