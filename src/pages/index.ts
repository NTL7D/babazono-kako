//public routes
import PageKhaiGiangChiTiet from './KhaiGiang/detail/index';
export { default as HomePage } from "./Home";


//Login Authentication routes
export { default as LoginPage } from "./auth/login";
export { default as ForgetPasswordPage } from "../pages/auth/forget-password/forgor";
export { default as CodeConfirmPage } from "./auth/forget-password/confirm";
export { default as ResetPasswordPage } from "./auth/forget-password/reset";

//Public routes
//intro
export { default as PageGioiThieu } from "./GioiThieu";
//news
export { default as PageTinTuc } from "./TinTuc";

//recuit
export { default as PageTuyenDung } from './TuyenDung';

//JPA
export { default as JPAcademyPage } from "./JPA";

//Advance Course
export { default as AdvanceEduPage } from './DaoTaoMoRong';

//Contact
export { default as ContactPage } from './LienHe';

//Internship
export { default as InternshipPage } from "./internship";

//Khai Giảng
export { default as PageKhaiGiang } from "./KhaiGiang"
export { default as PageKhaiGiangChiTiet } from "./KhaiGiang/detail"

//Admin routes (private)
export { default as AdminHomePage } from "./admin/home";

//news
export { default as AdminNewPage } from "./admin/new";
export { default as AdminCreateNewPage } from "./admin/new/new";

//courses
export { default as AdminCoursesPage } from "./admin/courses";

//jobs
export { default as AdminJobPage } from "./admin/job";
export { default as CreateNewJobApplicationPage } from "./admin/job/new";

//errors
export { default as NotFoundPage } from "./error/notfound"

//test
export { default as MyComponent } from "./test"