import styles from '../styles/Home.module.css';


export default function Headerzada() {
    return(
        
      <div className={styles.main}>

        <section className="section">
        <a href="/" className="heitor">heitor kenzou</a>
          <div className="spacer"></div>
          <div className="disintegration">
            <ul className="list">
              <li><a className="sim" href="/projetos">Projects</a></li>
              <li><a className="sim" href="/contact-for">Contact me</a></li>
            </ul>
          </div>  
        </section>
      </div>
      
    )
}