import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Villarinho-Gui.png"
            alt="Foto de perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Villarinho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 de dezembro às 08:32h" dateTime="2022-12-23 08:32:30">
          Publicado há 1 hora
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <br />
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <br />
        <p>
          <a>👉 jane.design/doctorcare </a>
        </p>
        <br />
        <p>
          <a href="#">#novoprojeto </a> <a href="#">#nlw </a>{" "}
          <a href="#">#rocketseat </a>{" "}
        </p>
      </div>
      <footer>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea 
            placeholder="deixe um comentário legal!"
          />
          <button type="submit" className={styles.publish}>
            Comentar
          </button>
        </form>
      </footer>
    </article>
  );
}
