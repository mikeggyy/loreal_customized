function data() {
    return {
        // 桌機版手機版狀態
        pc_status: true,
        mobile_status: false,
        // 專案資料
        fixed_project_data: {
            // 專案類型 YSL GAB KLS
            type_project: window.localStorage.getItem('type_project') ? window.localStorage.getItem('type_project') : '',
            // 專案名稱 暫時沒路用
            name_project: '',
            // 資料夾名稱 影響圖片路徑
            name_folder: '',
            // 活動ID 影響送出GTM資料
            code_campaign: '',
            // 上線日期 影響送出GTM資料
            date_start: ''
        },
        f_name_project: "",
        f_name_folder: "",
        f_code_campaign: "",
        f_date_start: "",
        // 圖片區資料
        fixed_img_count: {
            display: false,
            img_file_name: "",
            pc_img_data: window.localStorage.getItem('pc_img_data') ? JSON.parse(window.localStorage.getItem('pc_img_data')) : [],
            mob_img_data: window.localStorage.getItem('mob_img_data') ? JSON.parse(window.localStorage.getItem('mob_img_data')) : [],
            pc_img_temporarily_data: [],
            mob_img_temporarily_data: []
        },
        f_img_width: "",
        f_img_border: "",
        f_img_backgroundColor: "",
        f_img_zIndex: "",
        f_img_top: "",
        f_img_left: "",
        f_img_srcset: "",
        f_img_src: "",
        f_img_className:'',
        f_img_id:'',
        // 文字區資料
        fixed_text_count: {
            display: false,
            pc_text_data: window.localStorage.getItem('pc_text_data') ? JSON.parse(window.localStorage.getItem('pc_text_data')) : [],
            mob_text_data: window.localStorage.getItem('mob_text_data') ? JSON.parse(window.localStorage.getItem('mob_text_data')) : [],
            pc_text_temporarily_data: [],
            mob_text_temporarily_data: []
        },
        f_text_content: "",
        f_text_width: "",
        f_text_height: "",
        f_text_paddingTop: "",
        f_text_paddingBottom: "",
        f_text_paddingLeft: "",
        f_text_paddingRight: "",
        f_text_border: "",
        f_text_color: "",
        f_text_backgroundColor: "",
        f_text_fontSize: "",
        f_text_zIndex: "",
        f_text_top: "",
        f_text_left: "",
        f_text_className:'',
        f_text_id:'',
        // 按鈕區資料
        fixed_btn_count: {
            display: false,
            pc_btn_data: window.localStorage.getItem('pc_btn_data') ? JSON.parse(window.localStorage.getItem('pc_btn_data')) : [],
            mob_btn_data: window.localStorage.getItem('mob_btn_data') ? JSON.parse(window.localStorage.getItem('mob_btn_data')) : [],
            pc_btn_temporarily_data: [],
            mob_btn_temporarily_data: [],
        },
        f_btn_content: '',
        f_btn_width: '',
        f_btn_height: '',
        f_btn_lineHeight: '',
        f_btn_paddingTop: '',
        f_btn_paddingBottom: '',
        f_btn_paddingLeft: '',
        f_btn_paddingRight: '',
        f_btn_border: '',
        f_btn_backgroundColor: '',
        f_btn_color: '',
        f_btn_fontSize: '',
        f_btn_zIndex: '',
        f_btn_top: '',
        f_btn_left: '',
        f_btn_href: '',
        f_btn_class:'',
        f_btn_className:'',
        f_btn_id:'',
        // popup視窗確定
        f_popup_check:false,
        // 錨點設定
        anchor_data:{
            pc_top:'',
            mob_top:'',
        },
        // 程式碼
        web_status: {
            pc_height: window.localStorage.getItem('pc_height') ? window.localStorage.getItem('pc_height') : '',
            mobile_height: window.localStorage.getItem('mobile_height') ? window.localStorage.getItem('mobile_height') : ''
        },
        // ysl尺寸選擇視窗
        ysl_light_box_check:{
            check:false,
            compile_rwd:false,
        },

        zone_code: ''
    }
}
export {
    data
};