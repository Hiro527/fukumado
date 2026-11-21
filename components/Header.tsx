import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import StreamController from "./StreamController";

const Header = () => {
    return (
        <div className="w-full h-12 flex bg-slate-800 items-center px-4 text-white">
            <div className="font-black">fukumado</div>
            <StreamController />
            <div className="ml-auto flex gap-4">
                <a
                    href="https://x.com/hirx527"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaXTwitter />
                </a>
                <a
                    href="https://github.com/Hiro527/fukumado"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default Header;
