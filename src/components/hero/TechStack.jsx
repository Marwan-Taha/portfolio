import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiExpress, SiCplusplus } from 'react-icons/si';

export default function TechStack() {
    return (
        <div className="tech-stack">

            <div className="tech-icons-container">
                <FaReact size={50} />
                <FaJava />
                <FaNodeJs size={50} />
                <SiPostgresql size={50} />
                <SiMysql size={50} />
                <SiCplusplus />
                <FaHtml5 size={50} />
                <FaCss3Alt size={50} />
                <FaJs size={50} />
                <FaBootstrap size={50} />
                <FaGitAlt size={50} />
                <SiExpress size={50} />
                
            </div>
        </div>
    );
}
