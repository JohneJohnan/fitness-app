import classes from "./sideBar.module.css";
import logo from "../icons/arm-8501.svg";
import im1 from "../icons/apps_FILL0_wght400_GRAD0_opsz24.svg";
import im2 from "../icons/assistant_navigation_FILL0_wght400_GRAD0_opsz24.svg";
import im3 from "../icons/browse_activity_FILL0_wght400_GRAD0_opsz24.svg";
import im4 from "../icons/home_FILL0_wght400_GRAD0_opsz24.svg";
import im5 from "../icons/logout_FILL0_wght400_GRAD0_opsz24.svg";
import im6 from "../icons/select_all_FILL0_wght400_GRAD0_opsz24.svg";

export default function SideBar() {
  return (
    <aside className={classes["sideBar"]}>
      <div className={classes.logo}>
        <div>
          <div>فیتنس</div>
          <img src={logo} alt="fitness logo" />
        </div>
      </div>
      {/* <hr></hr> */}
      <div className={classes.pages}>
        <div>
          <img src={im1} alt="" />
          <div>مدیریت</div>
        </div>
        <div>
          <img src={im2} alt="" />
          <div>برنامه ها</div>
        </div>
        <div>
          <img src={im3} alt="" />
          <div>تاریخچه</div>
        </div>
        <div>
          <img src={im4} alt="" />
          <div>تمرین جدید</div>
        </div>
        <div>
          <img src={im5} alt="" />
          <div>مربی</div>
        </div>
        <div>
          <img src={im6} alt="" />
          <div>چالش ها</div>
        </div>
      </div>
    </aside>
  );
}
