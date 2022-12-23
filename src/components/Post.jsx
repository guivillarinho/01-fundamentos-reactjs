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
        <p className={styles.link}>👉 jane.design/doctorcare </p>
        <br />
        <p className={styles.hashtag}>#novoprojeto #nlw #rocketseat </p>
      </div>
      <footer>
        <strong>Deixe seu feedback</strong>
        <input
          type="text"
          maxLength={200}
          placeholder="Escreva um comentário..."
        />
        <button type="submit" className={styles.publish}>
          Publicar
        </button>
      </footer>
    </article>
  );
}