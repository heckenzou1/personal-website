import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Meio() {
  return (
    <div className="social">
      <div class="rrrrr">
        <Image className="imagem" src="/347641.jpg" width={100} height={140} />
      </div>
      <div className="text">
        <p>
          Desenvolvedor full stack <br />
          <br />
          Conhecimentos em: ReactJS, NEXTjs e nodejs{" "}
        </p>
      </div>
    </div>
  );
}
