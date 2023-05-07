import React, { useState } from "react";
import "./table.style.scss";

const Table: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("tab-1");

    const toggleTab = (tab: string) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
        <div className='table-tab'>
            <div className='tab-btn-group'>
                <span
                    className={`tab-btn_1 ${
                        activeTab === "tab-1" ? "active" : ""
                    }`}
                    onClick={() => toggleTab("tab-1")}>
                    CHƯƠNG TRÌNH HƯỚNG NGHIỆP
                </span>
                <span
                    className={`tab-btn_2 ${
                        activeTab === "tab-2" ? "active" : ""
                    }`}
                    onClick={() => toggleTab("tab-2")}>
                    CHƯƠNG TRÌNH DU HỌC
                </span>
            </div>
            <div className='table-container'>
                <table
                    className={`table ${activeTab === "tab-1" ? "show" : ""}`}>
                    <tbody>
                        <tr>
                            <td className='title'>Đối tượng</td>
                            <td className='tab'>
                                Học viên đã tốt nghiệp Đại học, trình độ tiếng
                                Nhật N4-N3 có nguyện vọng tìm kiếm cơ hội làm
                                việc tại Nhật. (Có chương trình học cấp tốc
                                tiếng Nhật tại Việt Nam cho học viên chưa đủ
                                trình độ )
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Điều kiện</td>
                            <td className='tab'>
                                Điều kiện tuyển sinh có thay đổi với từng trường
                                hợp và ngành học khác nhau, xin vui lòng liên hệ
                                với chúng tôi để biết thêm chi tiết
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Mục đích</td>
                            <td className='tab'>
                                Nâng cao trình độ tiếng Nhật và kỹ năng giao
                                tiếp trong công việc và chuẩn bị xin việc, làm
                                việc tại công ty Nhật Bản
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Chương trình học</td>
                            <td className='tab'>
                                Học Tiếng Nhật đạt trình độ N2+, Giao tiếp B2,
                                tiếng Nhật chuyên ngành và Kỹ nãng ứng tuyển,
                                phỏng vấn & làm việc tại công ty Nhật Bản
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Quy trình</td>
                            <td className='tab'>
                                Xét hồ sơ · Thi viết · Phỏng vấn
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Hạn nộp hồ sơ</td>
                            <td className='tab'>15/5</td>
                        </tr>
                        <tr>
                            <td className='title'>Kỳ nhập học</td>
                            <td className='tab'>Tháng 4, Tháng 10</td>
                        </tr>
                        <tr>
                            <td className='title'>Thời gian khóa học</td>
                            <td className='tab'>1,5 - 2 năm</td>
                        </tr>
                        <tr>
                            <td className='title'>Thời gian cư trú</td>
                            <td className='tab'>Du học</td>
                        </tr>
                    </tbody>
                </table>
                <table
                    className={`table ${activeTab === "tab-2" ? "show" : ""}`}>
                    <tbody>
                        <tr>
                            <td className='title'>Đối tượng</td>
                            <td className='tab'>
                                Học viên tốt nghiệp THPT, Đại học, Cao đẳng có
                                nguyện vọng học tập lên bậc cao hơn tại Nhật Bản
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Điều kiện</td>
                            <td className='tab'>
                                Điều kiện tuyển sinh có thay đổi với từng trường
                                hợp và ngành học khác nhau, xin vui lòng liên hệ
                                với chúng tôi để biết thêm chi tiết
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Mục đích</td>
                            <td className='tab'>
                                Mục tiêu đạt tiếng Nhật N2+ & Giao tiếp B2 và
                                thi đỗ vào các truờng Cao học/Ðại học/Cao
                                đẳng/Chuyên môn (chuyên ngành – dạy nghề) tại
                                Nhật.
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Chương trình học</td>
                            <td className='tab'>
                                Học Tiếng Nhật & Ôn luyện thi Kỳ thi du học Nhật
                                Bản EJU
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Quy trình</td>
                            <td className='tab'>
                                Xét hồ sơ · Thi viết · Phỏng vấn
                            </td>
                        </tr>
                        <tr>
                            <td className='title'>Hạn nộp hồ sơ</td>
                            <td className='tab'>15/5</td>
                        </tr>
                        <tr>
                            <td className='title'>Kỳ nhập học</td>
                            <td className='tab'>Tháng 4, Tháng 10</td>
                        </tr>
                        <tr>
                            <td className='title'>Thời gian khóa học</td>
                            <td className='tab'>1,5 - 2 năm</td>
                        </tr>
                        <tr>
                            <td className='title'>Thời gian cư trú</td>
                            <td className='tab'>Du học</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
