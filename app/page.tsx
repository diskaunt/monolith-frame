import Home from './components/Home';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div>
      <main className={styles.main}>
				<Home/>
			</main>
      <footer className=''></footer>
    </div>
  );
}
