import classes from "./header.module.css";
import avatar from '../icons/profile-circle-svgrepo-com.svg';
import drop from '../icons/dropdown-arrow-svgrepo-com.svg';

export default function Header() {
  return(
    <header className={classes.header}>
      <div className={classes.profile}>
        <img src={avatar} alt="your profile picture" />
        <img src={drop}/>
        <p>نام و نام خانوادگی</p>
        <p>خوش آمدید!</p>
      </div>
      <div className={classes.options}></div>
    </header>
  );
}