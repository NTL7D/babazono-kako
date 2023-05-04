import React from "react";
import "./table.style.scss";

const Table: React.FC = () => {
    return (
        <div className='container'>
            <div className='table'>
                <table>
                    <thead className='tdhead'>
                        <tr>
                            <td className='text_bold'>Khóa học</td>
                            <td className='text_bold'>Ngày khai giảng</td>
                            <td className='text_bold'>Khu vực</td>
                            <td className='text_bold'>Lịch học</td>
                            <td className='text_bold'>Thời lượng</td>
                            <td className='text_bold'>Chổ trống</td>
                            <td className='text_bold'>Đăng kí</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a
                                    className='text_bold hover-text-table'
                                    href='https://fsoft-academy.edu.vn/course/full-stack-java-web-for-beginner/'>
                                    [ĐN] Fullstack Java Web for Beginner
                                </a>
                            </td>
                            <td>21-04-2023</td>
                            <td>Hà Nội</td>
                            <td>08h00 - 17h30 thứ 6 08h00 - 12h00 thứ 7</td>
                            <td>12 giờ</td>
                            <td>5/15</td>
                            <td>
                                <a className='button_submit' href=''>
                                    Đăng ký
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    className='text_bold hover-text-table'
                                    href='https://fsoft-academy.edu.vn/course/full-stack-java-web-for-beginner/'>
                                    [ĐN] Fullstack Java Web for Beginner
                                </a>
                            </td>
                            <td>23-04-2023</td>
                            <td>Đà Nẵng</td>
                            <td>Fulltime (thứ 2,3,4,5,6 hàng tuần)</td>
                            <td>335 giờ</td>
                            <td>6/20</td>
                            <td>
                                <a className='button_submit' href=''>
                                    Đăng ký
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    className='text_bold hover-text-table'
                                    href='https://fsoft-academy.edu.vn/course/professional-react-developer/'>
                                    [HN] Professional React Developer
                                </a>
                            </td>
                            <td>23-04-2023</td>
                            <td>Hà Nội</td>
                            <td>18h-21h thứ 3,5 8h30-11h30 thứ 7</td>
                            <td>162 giờ</td>
                            <td>10/15</td>
                            <td>
                                <a className='button_submit' href=''>
                                    Đăng ký
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    className='text_bold'
                                    href='https://fsoft-academy.edu.vn/course/it-business-analyst-foundation/'>
                                    [Online - Virtual Training] IT - Business
                                    Analyst Foundation
                                </a>
                            </td>
                            <td>23-4-2023</td>
                            <td>Toàn Quốc</td>
                            <td>18h-21h thứ 3,5</td>
                            <td>70 giờ</td>
                            <td>2/20</td>
                            <td>
                                <a className='button_submit' href=''>
                                    Đăng ký
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    className='text_bold hover-text-table'
                                    href='https://fsoft-academy.edu.vn/course/fullstack-java-web-developer/'>
                                    [HN] Fullstack Java Web Developer
                                </a>
                            </td>
                            <td>23-04-2023</td>
                            <td>Toàn Quốc</td>
                            <td>18h-20h Thứ 2,4,6</td>
                            <td>216 giờ</td>
                            <td>10/15</td>
                            <td>
                                <a className='button_submit' href=''>
                                    Đăng ký
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    className='text_bold hover-text-table'
                                    href='https://fsoft-academy.edu.vn/course/automation-testing/'>
                                    [HN] Automation Testing
                                </a>
                            </td>
                            <td>23-04-2023</td>
                            <td>Hà Nội</td>
                            <td>18h-21h Thứ 2,4,6</td>
                            <td>108 giờ</td>
                            <td>3/20</td>
                            <td>
                                <a className='button_submit' href=''>
                                    Đăng ký
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
