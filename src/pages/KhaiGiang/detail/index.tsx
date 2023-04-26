import React from "react";
import { Accordion } from "react-bootstrap";
import "./index.style.scss";

const PageKhaiGiangChiTiet: React.FC = () => {
    return (
        <div className='Trangchitiet'>
            <div>
                <h1 className='page-title'>Agile in Practice Crash Course</h1>
                <div className='section-content'>
                    <em>
                        Nếu bạn muốn biết thêm thông tin về khoá học. Hãy liên
                        hệ với chúng tôi.
                    </em>
                    <div className='icon-box'>
                        <div className='icon-box-img'>
                            <img
                                className='image-icon'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/08/depositphotos_112592806-stock-illustration-female-call-centre-operator-with-01-768x768.jpg'></img>
                        </div>
                        <div className='icon-box-text'>
                            <ul>
                                <li>
                                    <strong>Email</strong>:{" "}
                                    <a
                                        href='mailto:FA@fsoft.com.vn'
                                        className='link-custom'>
                                        FA@fsoft.com.vn
                                    </a>
                                </li>
                                <li>
                                    <strong className='color-span'>
                                        Số điện thoại:{" "}
                                    </strong>
                                    <span className='color-span'>
                                        0969125248
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tai sao lai hoc */}
                <div className='content'>
                    <div className='box-post-content'>
                        <h2 className='custom-h2'>
                            TẠI SAO NÊN HỌC AGILE PROJECT MANAGEMNET?
                        </h2>
                    </div>
                    <div className='box-content'>
                        <p className='format-word'>
                            Ngày nay, Agile đã trở thành một phương pháp quản lý
                            dự án đem lại hiệu quả cao và được sử dụng phổ biến
                            trong hầu hết các dự án phần mềm. Tuy nhiên, việc áp
                            dụng Agile không hề dễ dàng, nó phụ thuộc rất nhiều
                            vào sự linh hoạt của chính nhà lãnh đạo, cũng như sự
                            phối hợp của các thành viên trong dự án.
                        </p>
                        <p className='format-word'>
                            Với nhiều năm kinh nghiệm thực chiến trong hàng ngàn
                            dự án trong nước và quốc tế tại FPT Software, chúng
                            tôi thấu hiểu khó khăn của các bạn khi tham gia các
                            dự án vận hành theo mô hình Agile, cũng như những
                            bạn chưa có nhiều kinh nghiệm, mong muốn tìm hiểu,
                            thực hành và áp dụng Agile một cách hiệu quả.
                        </p>
                        <p className='format-word'>
                            Vì vậy, FPT Software Academy xây dựng chương trình{" "}
                            <strong>Agile in Practice Crash Course </strong>
                            dựa trên giáo trình chuẩn chứng chỉ quốc tế PMI-ACP
                            của Project Management Institute, kết hợp với kinh
                            nghiệm thực chiến tại dự án, cung cấp kiến thức cốt
                            lõi về quản trị dự án theo mô hình Agile chỉ trong
                            12h đào tạo workshop, cùng với đó là các phương pháp
                            thực hành triển khai dự án hiệu quả với sự dẫn dắt
                            của các chuyên gia giàu kinh nghiệm tại FPT
                            Software.
                        </p>
                    </div>
                </div>

                {/* Danh cho ai */}
                <div className='content'>
                    <div className='box-post-content'>
                        <h2 className='custom-h2'>KHÓA HỌC NÀY DÀNH CHO AI?</h2>
                    </div>
                    <div className='box-content'>
                        <ul>
                            <li className='format-word'>
                                Các bạn sinh viên khoa CNTT các trường Trung
                                cấp, Cao đẳng, Đại học hoặc những bạn đang đi
                                làm ở các dự án chạy với mô hình Agile.
                            </li>
                            <li className='format-word'>
                                Người đi làm hoặc sinh viên đang và sẽ làm việc
                                trong lĩnh vực CNTT, muốn hiểu cách vận hành và
                                tương tác của các roles trong dự án chạy theo mô
                                hình Agile
                            </li>
                            <li className='format-word'>
                                Tiếng Anh tốt là một lợi thế.
                            </li>
                            <li className='format-word'>
                                Dành cho tất cả vị trí trong 1 nhóm dự án phát
                                triển phần mềm
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Tai sao lai tham gia */}
                <div className='content'>
                    <div className='box-post-content'>
                        <h2 className='custom-h2'>
                            TẠI SAO BẠN NÊN THAM GIA KHÓA HỌC NÀY?
                        </h2>
                    </div>
                    <div className='box-content'>
                        <ul>
                            <li className='format-word'>
                                Trang bị{" "}
                                <strong>đầy đủ các kiến thức cốt lõi</strong>{" "}
                                của quản trị dự án Agile và tính ứng dụng trong
                                các framework của Agile chỉ trong{" "}
                                <strong>12 giờ học</strong>
                            </li>
                            <li className='format-word'>
                                <strong>Đào tạo để làm việc:</strong> chương
                                trình đào tạo sát với yêu cầu thực tế trong các
                                dự án vận hành theo mô hình Agile, kết hợp giữa
                                giáo trình chuẩn quốc tế và kinh nghiệm thực
                                chiến tại FPT Software, giúp học viên tự tin áp
                                dụng ngay các kiến thức đã học vào công việc sau
                                này.
                            </li>
                            <li className='format-word'>
                                <strong>
                                    Hình thức đào tạo offline theo mô hình
                                    Workshop,
                                </strong>{" "}
                                nâng cao hiệu quả học và ghi nhớ kiến thức thông
                                qua các games tương tác, bài tập nhóm tập trung
                                vào kỹ năng thực hành. Học viên sẽ đóng vai trò
                                như các thành viên trong dự án, giải quyết các
                                tình huống thực tế cùng giảng viên ngay tại lớp.
                            </li>
                            <li className='format-word'>
                                <strong>
                                    Giảng viên hỗ trợ xuyên suốt trong và sau
                                    giờ học:
                                </strong>{" "}
                                ngoài giờ học Offline, học viên sẽ được hỗ trợ
                                trả lời câu hỏi, tư vấn bởi giảng viên là những
                                người có chứng chỉ chuyên môn quốc tế
                                PMI-ACP/PMP và kinh nghiệm làm việc lâu năm tại
                                FPT Software.
                            </li>
                            <li className='format-word'>
                                <strong>Real-world case study:</strong> Các bài
                                thực hành dựa trên kịch bản của các bài toán
                                thực tế giúp người học nắm vững lý thuyết, nhanh
                                chóng làm quen với công việc trong dự án ngay
                                sau khoá học.
                            </li>
                            <li className='format-word'>
                                <strong>
                                    Chứng chỉ hoàn thành khóa học do FPT
                                    Software Academy cấp{" "}
                                </strong>
                                – bảo chứng về năng lực chuyên môn của học viên
                                sau khi tốt nghiệp khóa học thành công.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Muc Tieu cua Chuong Trinh */}
                <div className='content'>
                    <div className='box-post-content'>
                        <h2 className='custom-h2'>MỤC TIÊU CỦA CHƯƠNG TRÌNH</h2>
                    </div>
                    <div className='box-content'>
                        <p className='format-word'>
                            Học viên hoàn thành khóa học sẽ có khả năng:
                        </p>
                        <p className='format-word'>
                            <strong>a. Về kiến thức</strong>
                        </p>
                        <ul>
                            <li className='format-word'>
                                Nắm chắc được nguồn gốc của Agile, lý do ra đời
                                và tính ưu việt của nó và vì sao nó trở nên phổ
                                biến trong lĩnh vực quản lý dự án phần mềm
                            </li>
                            <li className='format-word'>
                                Hiểu được các giá trị cốt lõi, nguyên lý cơ bản
                                của Agile và tính ứng dụng trong các framework
                                của Agile
                            </li>
                            <li className='format-word'>
                                Hiểu và thực hành Scrum, một framework phổ biến
                                được áp dụng nhiều hiện nay
                            </li>
                            <li className='format-word'>
                                Nắm được và thực hành được những tool hay dùng
                                trong Agile và có thể ứng dụng vào thực thế
                            </li>
                        </ul>
                        <p className='format-word'>
                            <strong>b. Về kỹ năng</strong>
                        </p>
                        <ul>
                            <li className='format-word'>
                                <strong>
                                    Problem solving and logical thinking:{" "}
                                </strong>
                                Có tư duy mở, growth mindset khi học và hiểu về
                                những giá trị Agile hướng tới.
                            </li>
                            <li className='format-word'>
                                Các kỹ năng mềm được cải thiện và nâng cao, bao
                                gồm: <strong>teamwork, communication,…</strong>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Lo Trinh khoa hoc */}
                <div className='content'>
                    <div className='box-post-content'>
                        <h2 className='custom-h2'>LỘ TRÌNH KHOÁ HỌC</h2>
                    </div>
                    <div className='box-content'>
                        <Accordion defaultActiveKey='0'>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    <b>
                                        Session 1: Introduction to Agile
                                        methodology and frameworks
                                    </b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <span>
                                                {" "}
                                                Agile và tính thực tiễn trong
                                                thời kì cách mạng số{" "}
                                            </span>
                                        </li>
                                        <li>
                                            <span> 4 giá trị </span>{" "}
                                        </li>
                                        <li>
                                            <span> 12 nguyên lý Agil </span>
                                        </li>
                                        <li>
                                            <span>
                                                {" "}
                                                4 mô hình Agile phổ biến{" "}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                {" "}
                                                Làm quiz và chữa câu hỏi{" "}
                                            </span>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    <b>
                                        Session 2: Scrum framework in Agile
                                        project
                                    </b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <span>
                                                {" "}
                                                Kiểm tra hiểu biết chung về các
                                                framework của Agile{" "}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                {" "}
                                                Scrum team và các vai trò nhiệm
                                                vụ chính{" "}
                                            </span>{" "}
                                        </li>
                                        <li>
                                            <span>
                                                {" "}
                                                Tổng quát về các sự kiện trong
                                                Scrum và ý nghĩa của nó{" "}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                {" "}
                                                Thực hành chạy thử Scrum{" "}
                                            </span>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    <b>Session 3: Agile tool and techniques</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <span>
                                                {" "}
                                                Process and value mgmt. tools{" "}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                {" "}
                                                Engaging stakeholder tools{" "}
                                            </span>{" "}
                                        </li>
                                        <li>
                                            <span>
                                                {" "}
                                                Building agile team and team
                                                performance{" "}
                                            </span>
                                        </li>
                                        <li>
                                            <span> Planning tools </span>
                                        </li>
                                        <li>
                                            <span>
                                                {" "}
                                                Detective and Resolution tool{" "}
                                            </span>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='23'>
                                <Accordion.Header>
                                    <b>Final Exam</b>
                                </Accordion.Header>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

                {/* Uu dai hoc bong */}

                <div className='content'>
                    <div className='box-post-content'>
                        <h2 className='custom-h2'>ƯU ĐÃI HỌC BỔNG</h2>
                    </div>
                    <div className='box-content'>
                        <ul>
                            <li className='format-word'>
                                Giảm 5% học phí toàn khóa học cho học viên đăng
                                ký sớm và đóng phí ghi danh tham gia khóa học
                                sớm.
                            </li>
                            <li className='format-word'>
                                Giảm 5% học phí toàn khóa học cho học viên đăng
                                ký sớm theo nhóm từ 3 người trở lên.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container_detail'>
                <div className='sidebar_box_item'>
                    <div className='sidebar_box_image'>
                        <img
                            className='image_box'
                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2023/04/Agile-in-Practice-Crash-Course-360x190.jpg'></img>
                    </div>
                    <div className='sidebar_box_content'>
                        <div className='price_title'>
                            3.900.000<small> VND</small>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            className='icon_table'
                                            src='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/assets/images/icon-clock.svg'></img>
                                    </td>
                                    <td>
                                        <h6 className='content_fit'>
                                            Thời lượng
                                        </h6>
                                        12 giờ
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            className='icon_table'
                                            src='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/assets/images/icon-user.svg'></img>
                                    </td>
                                    <td>
                                        <h6 className='content_fit'>
                                            Số lượng học viên
                                        </h6>
                                        15 - 20 học viên/lớp
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            className='icon_table'
                                            src='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/assets/images/icon-location.svg'></img>
                                    </td>
                                    <td>
                                        <h6 className='content_fit'>
                                            Địa điểm
                                        </h6>
                                        Hà Nội
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href='' className='button btn_colorbg_top'>
                        Nhận tư vấn
                    </a>
                    <div></div>
                    <div>
                        <a
                            href='https://fsoft-academy.edu.vn/lich-khai-giang/'
                            className='button btn_colorbg_bot'>
                            Lịch khai giảng
                        </a>
                    </div>
                </div>

                {/* Khoa hoc noi bat */}
                <div className='item-sidebar'>
                    <div className='item-sidebar-title'>Khoá học nổi bật</div>
                    <div className='sidebar'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/course/agile-project-management/'>
                                <img
                                    className='imageBar'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2023/04/Agile-in-Practice-Crash-Course-400x400.jpg'></img>
                            </a>
                        </div>
                        <div className='content-sidebar'>
                            <p>
                                <a
                                    className='wordBar'
                                    href='https://fsoft-academy.edu.vn/course/agile-project-management/'>
                                    Agile in Practice Crash Course
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='sidebar'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/course/web-applications-testing/'>
                                <img
                                    className='imageBar'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/11/Khoa-hoc-PE-400x400.jpg'></img>
                            </a>
                        </div>
                        <div className='content-sidebar'>
                            <p>
                                <a
                                    className='wordBar'
                                    href='https://fsoft-academy.edu.vn/course/agile-project-management/'>
                                    Python Essentials
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='sidebar'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/course/agile-project-management/'>
                                <img
                                    className='imageBar'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/BA-400x400.png'></img>
                            </a>
                        </div>
                        <div className='content-sidebar'>
                            <p>
                                <a
                                    className='wordBar'
                                    href='https://fsoft-academy.edu.vn/course/it-business-analyst-foundation/'>
                                    IT – Business Analyst Foundation
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='sidebar'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/course/fullstack-java-web-developer/'>
                                <img
                                    className='imageBar'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/FS.Java_-400x400.png'></img>
                            </a>
                        </div>
                        <div className='content-sidebar'>
                            <p>
                                <a
                                    className='wordBar'
                                    href='https://fsoft-academy.edu.vn/course/fullstack-java-web-developer/'>
                                    Fullstack Java Web Developer
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='sidebar'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/course/fullstack-java-web-developer/'>
                                <img
                                    className='imageBar'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/10/Untitled-1-01-2-250x250.png'></img>
                            </a>
                        </div>
                        <div className='content-sidebar'>
                            <p>
                                <a
                                    className='wordBar'
                                    href='https://fsoft-academy.edu.vn/course/fullstack-java-web-developer/'>
                                    Easy Coding(for kid)
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='sidebar'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/course/front-end-developer/'>
                                <img
                                    className='imageBar'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/FE-400x400.png'></img>
                            </a>
                        </div>
                        <div className='content-sidebar'>
                            <p>
                                <a
                                    className='wordBar'
                                    href='https://fsoft-academy.edu.vn/course/front-end-developer/'>
                                    Front-end Developer
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <script type='text/javascript'></script>
        </div>
    );
};

export default PageKhaiGiangChiTiet;
