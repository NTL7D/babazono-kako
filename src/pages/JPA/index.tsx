import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Table from "./table";
import Section from "./section";
import image10 from "../../assets/FPT Japan Source-10.png";
import image8 from "../../assets/FPT_Japan_Source-08.png";
import image7 from "../../assets/FPT_Japan_Source-07.png";
import image6 from "../../assets/FPT_Japan_Source-06.png";
import iconhoa from "../../assets/icon_hoa.png";
import footer from "../../assets/LogoFooter.png"
import gif from "../../assets/FPT-japan-Source-GIF.gif";

import "./index.style.scss";

const JPAcademyPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Du học Nhật Bản</title>
            </Helmet>
            <div className='body'>
                <section className='section_1'>
                    <div className='banner'>
                        <div className='boxContent'>
                            <h3 className='title_content'>
                                HỌC VIỆN NHẬT NGỮ FPT JAPAN
                            </h3>
                            <ul className='list'>
                                <div className='box_text_content'>
                                    <img
                                        className='icon_hoa'
                                        src={iconhoa}
                                        alt='icon-hoa'
                                    />
                                    <span className='text_content'>
                                        Cơ hội nhận học bổng lên đến{" "}
                                        <strong className='text_bold'>
                                            100% học phí
                                        </strong>
                                    </span>
                                </div>
                                <div className='box_text_content'>
                                    <img
                                        className='icon_hoa'
                                        src={iconhoa}
                                        alt='icon-hoa'
                                    />
                                    <span className='text_content'>
                                        Hỗ trợ học lên đại học/cao đẳng và{" "}
                                        <strong className='text_bold'>
                                            hỗ trợ việc làm
                                        </strong>{" "}
                                        sau tốt nghiệp tại Nhật Bản
                                    </span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='section_2'>
                    <div className='boxInformation'>
                        <h3 className='boxHeading'>
                            Tại sao nên đi du học Nhật Bản 2021 ?
                        </h3>
                        <Container className='boxContent'>
                            <Row className='flex_row_reverse_jpa'>
                                <Col className='col_3'>
                                    <div className='item'>
                                        <div className='box_bottom'>
                                            <div className='box_content_4'>
                                                <div className='title'>
                                                    Trải nghiệm, mở rộng tầm
                                                    nhìn, mang lại cơ hội cho
                                                    bản thân
                                                </div>
                                                <div className='sumary'>
                                                    Nổi tiếng với nền ẩm thực,
                                                    văn hóa phong phú, chất
                                                    lượng giáo dục vượt trội,
                                                    khi đến Nhật, bạn có thể học
                                                    và nâng cao kiến thức, kinh
                                                    nghiệm để có cơ hội học tập,
                                                    làm việc lâu dài ở Nhật với
                                                    mức lương cao và chế độ đãi
                                                    ngộ rất tốt
                                                </div>
                                            </div>
                                            <div className='box_img'>
                                                <img
                                                    className='last_img'
                                                    src={image8}
                                                    alt=''
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className='col_3'>
                                    <div className='item'>
                                        <div className='box_top'>
                                            <div className='box_img'>
                                                <img
                                                    className='img'
                                                    src={image7}
                                                    alt=''
                                                />
                                            </div>
                                            <div className='box_content_3'>
                                                <div className='title'>
                                                    Cơ hội nhận học bổng cực
                                                    nhiều
                                                </div>
                                                <div className='sumary'>
                                                    Các trường hiện nay đang rất
                                                    "khan hiếm" du học sinh, do
                                                    đó khi dịch ổn định, sẽ có
                                                    một lượng lớn học bổng từ
                                                    các trường dành cho Việt Nam
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className='col_3'>
                                    <div className='item'>
                                        <div className='box_bottom'>
                                            <div className='box_content_2'>
                                                <div className='title'>
                                                    Không gián đoạn thời gian
                                                    học tập
                                                </div>
                                                <div className='sumary'>
                                                    Việc chuẩn bị hồ sơ từ bây
                                                    giờ cho bạn lợi thế xuất
                                                    phát trước, vì nhiều người
                                                    tâm lý lo ngại dịch mà chưa
                                                    có sự chuẩn bị, không nộp hồ
                                                    sơ kịp năm 2021 =&gt; ít tỷ
                                                    lệ cạnh tranh hơn so với mọi
                                                    khi
                                                </div>
                                            </div>
                                            <div className='box_img'>
                                                <img
                                                    className='img'
                                                    src={image6}
                                                    alt=''
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className='col_3'>
                                    <div className='item'>
                                        <div className='box_top'>
                                            <div className='box_img'>
                                                <img
                                                    className='img'
                                                    src={image7}
                                                    alt=''
                                                />
                                            </div>
                                            <div className='box_content_1'>
                                                <div className='title'>
                                                    Cơ hội việc làm rộng mở
                                                </div>
                                                <div className='sumary'>
                                                    Khi nước Nhật phục hồi sau
                                                    dịch, sẽ có nguồn nhu cầu
                                                    lao động rất lớn ở rất nhiều
                                                    vị trí để phục hồi nền kinh
                                                    tế và thị trường nhật bản
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>

                <section className='section_3'>
                    <Container className='boxContent'>
                        <div className='boxSection'>
                            <a href='#section_7'>
                                <img
                                    className='gif_section_3'
                                    src={gif}
                                    alt=''
                                />
                            </a>
                        </div>
                    </Container>
                </section>
                <section className='section_4'>
                    <Container className='tableContent'>
                        <Table />
                    </Container>
                </section>
                <section className='section_5'>
                    <Container className='tableContent'>
                        <div className='boxSection'>
                            <table className='tuition'>
                                <thead>
                                    <tr className='row1'>
                                        <th
                                            className='title text-center'
                                            rowSpan={Number(2)}>
                                            Danh mục học phí
                                        </th>
                                        <th
                                            className='bgBlue'
                                            colSpan={Number(2)}>
                                            Kỳ nhập học tháng 4
                                        </th>
                                        <th
                                            className='bgBlue'
                                            colSpan={Number(2)}>
                                            Kỳ nhập học tháng 10
                                        </th>
                                    </tr>
                                    <tr className='row2'>
                                        <th className='bgBlue_bottom'>Năm 1</th>
                                        <th className='bgBlue_bottom '>
                                            Năm 2 <br />
                                            (0.5 năm )
                                        </th>
                                        <th className='bgBlue_bottom'>Năm 1</th>
                                        <th className='bgBlue_bottom'>Năm 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='title'>Xét tuyển</td>
                                        <td>¥20,000</td>
                                        <td>-</td>
                                        <td>¥20,000</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td className='title'>Nhập học</td>
                                        <td>¥60,000</td>
                                        <td>-</td>
                                        <td>¥60,000</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td className='title'>Học phí</td>
                                        <td>¥642,000</td>
                                        <td>¥321,000</td>
                                        <td>¥642,000</td>
                                        <td>¥642,000</td>
                                    </tr>
                                    <tr>
                                        <td className='title'>
                                            Cơ sở vật chất/ bảo hiểm
                                        </td>
                                        <td>¥72,000</td>
                                        <td>¥36,000</td>
                                        <td>¥72,000</td>
                                        <td>¥72,000</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th className='title'>Tổng</th>
                                        <th className='bgBlue'>¥794,000</th>
                                        <th className='bgBlue'>¥357,000</th>
                                        <th className='bgBlue'>¥794,000</th>
                                        <th className='bgBlue'>¥792,000</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Container>
                </section>
                <section className='section_6'>
                    <div className='box-section'>
                        <div className='box-title'>
                            <h2 className='title'>Học viện Nhật ngữ FPT</h2>
                            <h4 className='subtitle'>
                                Thương hiệu giáo dục chất lượng cao mang tên FPT
                            </h4>
                        </div>
                        <div className='box-content'>
                            <div className='alignment-div'>
                                <div className='left col'>
                                    <div className='justtify'>
                                        <div className='item item-1'>
                                            <div className='title'>
                                                FPT là Tập đoàn phần mềm số 1
                                                Việt Nam
                                            </div>
                                            <div className='content'>
                                                Công ty FPT Japan với khoảng
                                                1500 nhân sự tại Nhật Bản & 300
                                                khách hàng là các công ty hàng
                                                đầu Nhật Bản, đã và đang nhận
                                                được sự tin tưởng của khách hàng
                                                tại thị trường Việt Nam và thế
                                                giới
                                            </div>
                                        </div>
                                        <div className='item item-2'>
                                            <div className='smoll-title'>
                                                Kỹ Năng Giảng Dạy
                                            </div>
                                            <div className='content'>
                                                Được đào tạo bởi đội ngũ giảng
                                                viên người Nhật với bề dày kinh
                                                nghiệm đào tạo từ những trường
                                                đại học danh tiếng về ngôn ngữ
                                                Nhật Bản
                                            </div>
                                        </div>
                                        <div className='item item-3'>
                                            <div className='smoll-title'>
                                                Cam kết hỗ trợ việc làm
                                            </div>
                                            <div className='content'>
                                                Cam kết hỗ trợ việc làm miễn phí
                                                trước, trong và sau khi tốt
                                                nghiệp tại FJA trong khắp các
                                                tỉnh thành tại Nhật Bản từ mạng
                                                lưới 15 văn phòng hỗ trợ việc
                                                làm của FPT trên toàn quốc
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='right col'>
                                    <div className='justtify-right'>
                                        <div className='item item-1'>
                                            <div className='smoll-title'>
                                                Học bổng hấp dẫn
                                            </div>
                                            <div className='content'>
                                                Học viên có cơ hội nhiều học
                                                bổng khuyến học từ quỹ "Học bổng
                                                đào tạo nguồn nhân lực FPT" với
                                                tổng trị giá trên 10 tỷ đồng
                                            </div>
                                        </div>
                                        <div className='item item-2'>
                                            <div className='smoll-title'>
                                                Giàu Kinh Nghiệm
                                            </div>
                                            <div className='content'>
                                                FPT đang vận hành trường Đại học
                                                FPT Việt Nam với nhiều kinh
                                                nghiệm trong hoạt động giáo dục.
                                                Chương trình 10K - 10.000 kỹ sư
                                                cầu nối cung cấp nguồn nhân lực
                                                IT đang thiếu hụt lớn cho thị
                                                trường Nhật Bản
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box-footer'>
                            <div className='banner'>
                                <div className='banner-image'>
                                    <img
                                        className='image-10'
                                        src={image10}
                                        alt='Fpt banner box'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='section_7'>
                    <Section />
                </section>
                <section className='footer-jpa'>
                    <Container className='boxFooter'>
                        <div className='row-footer-jpa'>
                            <div className='col-8'>
                                <div className='boxLeft'>
                                    <div className='logo'></div>
                                    <img
                                        className='maxW100'
                                        src={footer}
                                        alt=''></img>
                                    <div className='title'>
                                        Học viện Nhật ngữ FPT - FPT Japan
                                        Academy
                                    </div>
                                    <div className='sumary'>
                                        FPT Japan với khoảng 1500 nhân sự tại
                                        Nhật Bản và 300 khách hàng là các công
                                        ty hàng đầu Nhật Bản đã và đang nhận
                                        được sự tin tưởng của khách hàng tại thị
                                        trường Việt Nam và thế giới.
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='boxRight'>
                                    <div className='title'>Liên hệ</div>
                                    <ul className='list'>
                                        <li>
                                            <span className='icon-footer-jpa'>
                                                <FontAwesomeIcon
                                                    icon={faGlobe}
                                                    size='sm'
                                                />{" "}
                                                https://fjpacademy.com/
                                            </span>
                                        </li>
                                        <li>
                                            <span className='icon-footer-jpa'>
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    size='xs'
                                                />{" "}
                                                FA.HN@fsoft.com.vn
                                            </span>
                                        </li>
                                        <li>
                                            <span className='icon-footer-jpa'>
                                                <FontAwesomeIcon
                                                    icon={faLocationDot}
                                                    size='sm'
                                                />{" "}
                                                17 Duy Tân, Cầu Giấy, Hà Nội
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    );
};

export default JPAcademyPage;
