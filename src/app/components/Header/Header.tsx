import { getAssetPath } from "@/app/utils";
import Button from "../Button/Button";

type THeaderProps = {
  className?: string;
}

const Header: React.FC<THeaderProps> = ({ className }) => (
  <div className={`bg-secondary text-white px-4 py-4 w-full flex justify-between items-center gap-2 ${className ?? ""}`}>
    <img className="header-logo" alt="site logo" src={getAssetPath("/assets/MJ-logo.png")} width={64} height={64}/>
    <nav className="flex gap-4">
      <a href="#skills-section">Skills</a>
      <a href="#experience-section">Experience</a>
    </nav>
    <a href="mailto:michaeldjansen35@gmail.com">
      <Button text="Contact Me"/>
    </a>
  </div>
);

export default Header;