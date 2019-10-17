var app = new Vue({
  el: "#app",
  data: {
    // 專案資料
    fixed_project_data: {
      name_project: "",
      name_folder: "",
      code_campaign: "",
      date_start: ""
    },
    f_name_project: "",
    f_name_folder: "",
    f_code_campaign: "",
    f_date_start: "",
    // 圖片區資料
    fixed_img_count: {
      display: false,
      img_data: []
    },
    f_img_width: "",
    f_img_border: "",
    f_img_backgroundColor: "",
    f_img_zIndex: "",
    f_img_top: "",
    f_img_left: "",
    f_img_srcset: "",
    f_img_src: "",
    // 文字區資料
    fixed_text_count: {
      display: false,
      text_data: []
    },
    f_text_content: "",
    f_text_width: "",
    f_text_heigth: "",
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
    // 按鈕區資料
    fixed_btn_count: {
      display: false,
      btn_data: []
    },
    f_btn_content: "",
    f_btn_width: "",
    f_btn_paddingTop: "",
    f_btn_paddingBottom: "",
    f_btn_paddingLeft: "",
    f_btn_paddingRight: "",
    f_btn_border: "",
    f_btn_backgroundColor: "",
    f_btn_color: "",
    f_btn_fontSize: "",
    f_btn_zIndex: "",
    f_btn_top: "",
    f_btn_left: "",
    f_btn_href: "",
    // 程式碼
    zone_code: ""
  },
  watch: {
    // 專案資料數值改變
    f_name_project: function () {
      this.fixed_project_data.name_project = this.f_name_project;
    },
    f_name_folder: function () {
      this.fixed_project_data.name_folder = this.f_name_folder;
    },
    f_code_campaign: function () {
      this.fixed_project_data.code_campaign = this.f_code_campaign;
    },
    f_date_start: function () {
      this.fixed_project_data.date_start = this.f_date_start;
    },
    // 圖片區數值改變
    f_img_width: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.width = this.f_img_width;
      }
    },
    f_img_left: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.left = this.f_img_left;
      }
    },
    f_img_top: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.top = this.f_img_top;
      }
    },
    f_img_zIndex: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.zIndex = this.f_img_zIndex;
      }
    },
    f_img_backgroundColor: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.backgroundColor = this.f_img_backgroundColor;
      }
    },
    f_img_srcset: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.srcset = this.f_img_srcset;
      }
    },
    f_img_src: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.src = this.f_img_src;
      }
    },
    // 文字區數值改變
    f_text_content: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.content = this.f_text_content;
      }
    },

    f_text_width: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        this.fixed_text_count.text_data.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = this.fixed_text_count.text_data.find(function (
          item,
          index,
          array
        ) {
          return item.foucs == true;
        });
        target.width = this.f_text_width;
      }
    },

    f_text_heigth: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.heigth = this.f_text_heigth;
      }
    },

    f_text_paddingTop: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.paddingTop = this.f_text_paddingTop;
      }
    },

    f_text_paddingBottom: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.paddingBottom = this.f_text_paddingBottom;
      }
    },

    f_text_paddingLeft: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.paddingLeft = this.f_text_paddingLeft;
      }
    },

    f_text_paddingRight: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.paddingRight = this.f_text_paddingRight;
      }
    },

    f_text_border: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.border = this.f_text_border;
      }
    },

    f_text_color: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.color = this.f_text_color;
      }
    },

    f_text_backgroundColor: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.backgroundColor = this.f_text_backgroundColor;
      }
    },

    f_text_fontSize: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.fontSize = this.f_text_fontSize;
      }
    },

    f_text_zIndex: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.zIndex = this.f_text_zIndex;
      }
    },

    f_text_top: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.top = this.f_text_top;
      }
    },

    f_text_left: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.left = this.f_text_left;
      }
    },
    // 圖片區數值改變
    f_btn_content: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.content = this.f_btn_content;
      }
    },
    f_btn_href: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.href = this.f_btn_href;
      }
    },
    f_btn_width: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.width = this.f_btn_width;
      }
    },
    f_btn_zIndex: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.zIndex = this.f_btn_zIndex;
      }
    },
    f_btn_border: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.border = this.f_btn_border;
      }
    },
    f_btn_backgroundColor: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.backgroundColor = this.f_btn_backgroundColor;
      }
    },
    f_btn_fontSize: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.fontSize = this.f_btn_fontSize;
      }
    },
    f_btn_color: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.color = this.f_btn_color;
      }
    },
    f_btn_paddingTop: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.paddingTop = this.f_btn_paddingTop;
      }
    },
    f_btn_paddingRight: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.paddingRight = this.f_btn_paddingRight;
      }
    },
    f_btn_paddingBottom: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.paddingBottom = this.f_btn_paddingBottom;
      }
    },
    f_btn_paddingLeft: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.paddingLeft = this.f_btn_paddingLeft;
      }
    },
    f_btn_left: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.left = this.f_btn_left;
      }
    },
    f_btn_top: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let target = ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        });
        target.top = this.f_btn_top;
      }
    },

  },
  methods: {
    // 圖片區面板顯示
    ImgZoneDisplayOpen: function () {
      this.fixed_img_count.display = true;
    },
    ImgZoneDisplayClose: function () {
      this.fixed_img_count.display = false;
    },
    // 文字區面板顯示
    TextZoneDisplayOpen: function () {
      this.fixed_text_count.display = true;
    },
    TextZoneDisplayClose: function () {
      this.fixed_text_count.display = false;
    },
    // 按鈕區面板顯示
    BtnZoneDisplayOpen: function () {
      this.fixed_btn_count.display = true;
    },
    BtnZoneDisplayClose: function () {
      this.fixed_btn_count.display = false;
    },
    // 創建的新圖片資料傳入input值
    ImgInsertIntoInput: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      this.f_img_width = ZONE_DATA[ZONE_DATA.length - 1].width;
      this.f_img_border = ZONE_DATA[ZONE_DATA.length - 1].border;
      this.f_img_backgroundColor =
        ZONE_DATA[ZONE_DATA.length - 1].backgroundColor;
      this.f_img_fontSize = ZONE_DATA[ZONE_DATA.length - 1].fontSize;
      this.f_img_zIndex = ZONE_DATA[ZONE_DATA.length - 1].zIndex;
      this.f_img_top = ZONE_DATA[ZONE_DATA.length - 1].top;
      this.f_img_left = ZONE_DATA[ZONE_DATA.length - 1].left;
      this.f_img_srcset = ZONE_DATA[ZONE_DATA.length - 1].srcset;
      this.f_img_src = ZONE_DATA[ZONE_DATA.length - 1].src;
    },
    // 創建的新文字資料傳入input值
    TextInsertIntoInput: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      this.f_text_content = ZONE_DATA[ZONE_DATA.length - 1].content;
      this.f_text_width = ZONE_DATA[ZONE_DATA.length - 1].width;
      this.f_text_heigth = ZONE_DATA[ZONE_DATA.length - 1].heigth;
      this.f_text_paddingTop = ZONE_DATA[ZONE_DATA.length - 1].paddingTop;
      this.f_text_paddingBottom = ZONE_DATA[ZONE_DATA.length - 1].paddingBottom;
      this.f_text_paddingLeft = ZONE_DATA[ZONE_DATA.length - 1].paddingLeft;
      this.f_text_paddingRight = ZONE_DATA[ZONE_DATA.length - 1].paddingRight;
      this.f_text_border = ZONE_DATA[ZONE_DATA.length - 1].border;
      this.f_text_color = ZONE_DATA[ZONE_DATA.length - 1].color;
      this.f_text_backgroundColor =
        ZONE_DATA[ZONE_DATA.length - 1].backgroundColor;
      this.f_text_fontSize = ZONE_DATA[ZONE_DATA.length - 1].fontSize;
      this.f_text_zIndex = ZONE_DATA[ZONE_DATA.length - 1].zIndex;
      this.f_text_top = ZONE_DATA[ZONE_DATA.length - 1].top;
      this.f_text_left = ZONE_DATA[ZONE_DATA.length - 1].left;
    },
    // 創建的新按鈕資料傳入input值
    BtnInsertIntoInput: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      this.f_btn_content = ZONE_DATA[ZONE_DATA.length - 1].content;
      this.f_btn_width = ZONE_DATA[ZONE_DATA.length - 1].width;
      this.f_btn_paddingTop = ZONE_DATA[ZONE_DATA.length - 1].paddingTop;
      this.f_btn_paddingBottom = ZONE_DATA[ZONE_DATA.length - 1].paddingBottom;
      this.f_btn_paddingLeft = ZONE_DATA[ZONE_DATA.length - 1].paddingLeft;
      this.f_btn_paddingRight = ZONE_DATA[ZONE_DATA.length - 1].paddingRight;
      this.f_btn_border = ZONE_DATA[ZONE_DATA.length - 1].border;
      this.f_btn_backgroundColor =
        ZONE_DATA[ZONE_DATA.length - 1].backgroundColor;
      this.f_btn_color = ZONE_DATA[ZONE_DATA.length - 1].color;
      this.f_btn_fontSize = ZONE_DATA[ZONE_DATA.length - 1].fontSize;
      this.f_btn_zIndex = ZONE_DATA[ZONE_DATA.length - 1].zIndex;
      this.f_btn_top = ZONE_DATA[ZONE_DATA.length - 1].top;
      this.f_btn_left = ZONE_DATA[ZONE_DATA.length - 1].left;
      this.f_btn_href = ZONE_DATA[ZONE_DATA.length - 1].href;
    },
    // 圖片表單值輸入到資料中
    ImgInputInsertIntoData: function (index) {
      const ZONE_DATA = this.fixed_img_count.img_data;
      this.f_img_width = ZONE_DATA[index].width;
      this.f_img_border = ZONE_DATA[index].border;
      this.f_img_backgroundColor = ZONE_DATA[index].backgroundColor;
      this.f_img_fontSize = ZONE_DATA[index].fontSize;
      this.f_img_zIndex = ZONE_DATA[index].zIndex;
      this.f_img_top = ZONE_DATA[index].top;
      this.f_img_left = ZONE_DATA[index].left;
      this.f_img_srcset = ZONE_DATA[index].srcset;
      this.f_img_src = ZONE_DATA[index].src;
    },
    // 文字表單值輸入到資料中
    TextInputInsertIntoData: function (index) {
      const ZONE_DATA = this.fixed_text_count.text_data;
      this.f_text_content = ZONE_DATA[index].content;
      this.f_text_width = ZONE_DATA[index].width;
      this.f_text_heigth = ZONE_DATA[index].heigth;
      this.f_text_paddingTop = ZONE_DATA[index].paddingTop;
      this.f_text_paddingBottom = ZONE_DATA[index].paddingBottom;
      this.f_text_paddingLeft = ZONE_DATA[index].paddingLeft;
      this.f_text_paddingRight = ZONE_DATA[index].paddingRight;
      this.f_text_border = ZONE_DATA[index].border;
      this.f_text_color = ZONE_DATA[index].color;
      this.f_text_backgroundColor = ZONE_DATA[index].backgroundColor;
      this.f_text_fontSize = ZONE_DATA[index].fontSize;
      this.f_text_zIndex = ZONE_DATA[index].zIndex;
      this.f_text_top = ZONE_DATA[index].top;
      this.f_text_left = ZONE_DATA[index].left;
    },
    // 按鈕表單值輸入到資料中
    BtnInputInsertIntoData: function (index) {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      this.f_btn_content = ZONE_DATA[index].content;
      this.f_btn_width = ZONE_DATA[index].width;
      this.f_btn_paddingTop = ZONE_DATA[index].paddingTop;
      this.f_btn_paddingBottom = ZONE_DATA[index].paddingBottom;
      this.f_btn_paddingLeft = ZONE_DATA[index].paddingLeft;
      this.f_btn_paddingRight = ZONE_DATA[index].paddingRight;
      this.f_btn_border = ZONE_DATA[index].border;
      this.f_btn_backgroundColor = ZONE_DATA[index].backgroundColor;
      this.f_btn_color = ZONE_DATA[index].color;
      this.f_btn_fontSize = ZONE_DATA[index].fontSize;
      this.f_btn_zIndex = ZONE_DATA[index].zIndex;
      this.f_btn_top = ZONE_DATA[index].top;
      this.f_btn_left = ZONE_DATA[index].left;
      this.f_btn_href = ZONE_DATA[index].href;
    },
    // 關掉所有圖片foucs
    CloseImgFocus: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      ZONE_DATA.forEach((item, array) => {
        ZONE_DATA[array].outline = "0px transparent solid";
        ZONE_DATA[array].foucs = "false";
      });
    },
    // 關掉所有文字foucs
    CloseTextFocus: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      ZONE_DATA.forEach((item, array) => {
        ZONE_DATA[array].outline = "0px transparent solid";
        ZONE_DATA[array].foucs = "false";
      });
    },
    // 關掉所有按鈕foucs
    CloseBtnFocus: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      ZONE_DATA.forEach((item, array) => {
        ZONE_DATA[array].outline = "0px transparent solid";
        ZONE_DATA[array].foucs = "false";
      });
    },
    // 打開新增的圖片outline
    OpenImgFocus: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      ZONE_DATA[ZONE_DATA.length - 1].outline = "1px #aaa dashed";
      ZONE_DATA[ZONE_DATA.length - 1].foucs = true;
    },
    // 打開新增的文字outline
    OpenTextFocus: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      ZONE_DATA[ZONE_DATA.length - 1].outline = "1px #aaa dashed";
      ZONE_DATA[ZONE_DATA.length - 1].foucs = true;
    },
    // 打開新增的按鈕outline
    OpenBtnFocus: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      ZONE_DATA[ZONE_DATA.length - 1].outline = "1px #aaa dashed";
      ZONE_DATA[ZONE_DATA.length - 1].foucs = true;
    },
    // 打開被選取的圖片outline
    OpenImgClickFocus: function (index) {
      const ZONE_DATA = this.fixed_img_count.img_data;
      ZONE_DATA[index].outline = "1px #aaa dashed";
      ZONE_DATA[index].foucs = true;
    },
    // 打開被選取的文字outline
    OpenTextClickFocus: function (index) {
      const ZONE_DATA = this.fixed_text_count.text_data;
      ZONE_DATA[index].outline = "1px #aaa dashed";
      ZONE_DATA[index].foucs = true;
    },
    // 打開被選取的按鈕outline
    OpenBtnClickFocus: function (index) {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      ZONE_DATA[index].outline = "1px #aaa dashed";
      ZONE_DATA[index].foucs = true;
    },
    // 清空圖片input值
    ClearImgInputValue: function () {
      this.f_img_width = "";
      this.f_img_heigth = "";
      this.f_img_border = "";
      this.f_img_backgroundColor = "";
      this.f_img_fontSize = "";
      this.f_img_zIndex = "";
      this.f_img_top = "";
      this.f_img_left = "";
    }, // 清空文字input值
    ClearTextInputValue: function () {
      this.f_text_content = "";
      this.f_text_width = "";
      this.f_text_heigth = "";
      this.f_text_paddingTop = "";
      this.f_text_paddingBottom = "";
      this.f_text_paddingLeft = "";
      this.f_text_paddingRight = "";
      this.f_text_border = "";
      this.f_text_color = "";
      this.f_text_backgroundColor = "";
      this.f_text_fontSize = "";
      this.f_text_zIndex = "";
      this.f_text_top = "";
      this.f_text_left = "";
    },
    // 清空按鈕input值
    ClearBtnInputValue: function () {
      this.f_btn_content = "";
      this.f_btn_width = "";
      this.f_btn_paddingTop = "";
      this.f_btn_paddingBottom = "";
      this.f_btn_paddingLeft = "";
      this.f_btn_paddingRight = "";
      this.f_btn_border = "";
      this.f_btn_backgroundColor = "";
      this.f_btn_color = "";
      this.f_btn_fontSize = "";
      this.f_btn_zIndex = "";
      this.f_btn_top = "";
      this.f_btn_left = "";
      this.f_btn_href = "";
    },
    // 圖片區鍵盤上下改變數值
    KeyDownChangInt_ImgLeft: function () {
      if (event.keyCode == 38) {
        this.f_img_left = parseInt(this.f_img_left) + 1 + "px";
      } else if (event.keyCode == 40) {
        this.f_img_left = parseInt(this.f_img_left) - 1 + "px";
      }
    },
    KeyDownChangInt_ImgTop: function () {
      if (event.keyCode == 38) {
        this.f_img_top = parseInt(this.f_img_top) + 1 + "px";
      } else if (event.keyCode == 40) {
        this.f_img_top = parseInt(this.f_img_top) - 1 + "px";
      }
    },
    KeyDownChangInt_ImgWidth: function () {
      if (this.f_img_width == "auto") {
        this.f_img_width = "100px";
      }
      if (event.keyCode == 38) {
        this.f_img_width = parseInt(this.f_img_width) + 1 + "px";
      } else if (event.keyCode == 40) {
        this.f_img_width = parseInt(this.f_img_width) - 1 + "px";
      }
    },
    // 文字區鍵盤上下改變數值
    KeyDownChangInt_TextLeft: function () {
      if (event.keyCode == 38) {
        this.f_text_left = parseInt(this.f_text_left) + 1 + "px";
      } else if (event.keyCode == 40) {
        this.f_text_left = parseInt(this.f_text_left) - 1 + "px";
      }
    },
    KeyDownChangInt_TextTop: function () {
      if (event.keyCode == 38) {
        this.f_text_top = parseInt(this.f_text_top) + 1 + "px";
      } else if (event.keyCode == 40) {
        this.f_text_top = parseInt(this.f_text_top) - 1 + "px";
      }
    },
    // 按鈕區鍵盤上下改變數值
    KeyDownChangInt_BtnLeft: function () {
      if (event.keyCode == 38) {
        this.f_btn_left = parseInt(this.f_btn_left) + 1 + "px";
      } else if (event.keyCode == 40) {
        this.f_btn_left = parseInt(this.f_btn_left) - 1 + "px";
      }
    },
    KeyDownChangInt_BtnTop: function () {
      if (event.keyCode == 38) {
        this.f_btn_top = parseInt(this.f_btn_top) + 1 + "px";
      } else if (event.keyCode == 40) {
        this.f_btn_top = parseInt(this.f_btn_top) - 1 + "px";
      }
    },
    // 圖片區滑鼠移動抓取x,y事件
    ImgMouseMoveGetXY: function () {
      let e = event;
      const ZONE_DATA = this.fixed_img_count.img_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let zone_target = document.querySelector("#scene");
        let left_scene =
          parseInt(
            window.getComputedStyle(document.querySelector("#scene")).marginLeft
          ) +
          parseInt(
            window.getComputedStyle(document.querySelector("#scene"))
            .paddingLeft
          );
        let self = this;
        let flag = true;
        let initX = e.offsetX,
          initY = e.offsetY;
        zone_target.addEventListener("mousemove", function () {
          if (flag == true) {
            let e = event || window.event;
            let x = e.pageX - initX - left_scene;
            let y = e.pageY - initY;
            self.f_img_left = x + "px";
            self.f_img_top = y + "px";
          }
        });
        zone_target.addEventListener("mouseup", function () {
          flag = false;
        });
      }
    },
    // 文字區滑鼠移動抓取x,y事件
    TextMouseMoveGetXY: function () {
      let e = event;
      const ZONE_DATA = this.fixed_text_count.text_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let zone_target = document.querySelector("#scene");
        let left_scene =
          parseInt(
            window.getComputedStyle(document.querySelector("#scene")).marginLeft
          ) +
          parseInt(
            window.getComputedStyle(document.querySelector("#scene"))
            .paddingLeft
          );
        let self = this;
        let flag = true;
        let initX = e.offsetX,
          initY = e.offsetY;
        zone_target.addEventListener("mousemove", function () {
          if (flag == true) {
            let e = event || window.event;
            let x = e.pageX - initX - left_scene;
            let y = e.pageY - initY;
            self.f_text_left = x + "px";
            self.f_text_top = y + "px";
          }
        });
        zone_target.addEventListener("mouseup", function () {
          flag = false;
        });
      }
    },
    // 按鈕區滑鼠移動抓取x,y事件
    BtnMouseMoveGetXY: function () {
      let e = event;
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      if (
        ZONE_DATA.find(function (item, index, array) {
          return item.foucs == true;
        })
      ) {
        let zone_target = document.querySelector("#scene");
        let left_scene =
          parseInt(
            window.getComputedStyle(document.querySelector("#scene")).marginLeft
          ) +
          parseInt(
            window.getComputedStyle(document.querySelector("#scene"))
            .paddingLeft
          );
        let self = this;
        let flag = true;
        let initX = e.offsetX,
          initY = e.offsetY;
        zone_target.addEventListener("mousemove", function () {
          if (flag == true) {
            let e = event || window.event;
            let x = e.pageX - initX - left_scene;
            let y = e.pageY - initY;
            self.f_btn_left = x + "px";
            self.f_btn_top = y + "px";
          }
        });
        zone_target.addEventListener("mouseup", function () {
          flag = false;
        });
      }
    },
    // 新增圖片按鈕
    ImgAddImg: function () {
      const ZONE_DATA = this.fixed_img_count.img_data;
      // 送資料進去陣列
      let style = {
        content: "預設文字",
        foucs: false,
        display: "block",
        outline: "0px transparent solid",
        width: "auto", // auto會導致拖曳到右邊時縮小
        heigth: "auto",
        border: "0px #000 solid",
        backgroundColor: "transparent",
        fontSize: "0",
        zIndex: "1",
        position: "absolute",
        top: 0,
        left: 0,
        media: "(min-width:992px)",
        srcset: "./images/pc/bg_01.jpg",
        src: "./images/xs/bg_01.jpg"
      };
      ZONE_DATA.push(style);
      this.CloseImgFocus();
      this.OpenImgFocus();
      this.ImgInsertIntoInput();
      this.ImgZoneDisplayOpen();
    },
    // 新增文字按鈕
    TextAddText: function () {
      const ZONE_DATA = this.fixed_text_count.text_data;
      // 送資料進去陣列
      let style = {
        content: "文字",
        foucs: false,
        display: "block",
        outline: "0px transparent solid",
        width: "auto",
        heigth: "auto",
        paddingTop: "auto",
        paddingBottom: "auto",
        paddingLeft: "auto",
        paddingRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        border: "0px #000 solid",
        color: "black",
        backgroundColor: "transparent",
        fontSize: "16px",
        zIndex: "2",
        position: "absolute",
        top: 0,
        left: 0
      };
      ZONE_DATA.push(style);
      this.CloseTextFocus();
      this.OpenTextFocus();
      this.TextInsertIntoInput();
      this.TextZoneDisplayOpen();
    },
    // 新增按鈕的按鈕
    BtnAddBtn: function () {
      const ZONE_DATA = this.fixed_btn_count.btn_data;
      // 送資料進去陣列
      let style = {
        content: "按鈕",
        foucs: false,
        display: "block",
        outline: "0px transparent solid",
        width: "auto",
        heigth: "auto",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
        border: "0px #000 solid",
        color: "black",
        backgroundColor: "transparent",
        fontSize: "16px",
        zIndex: "2",
        position: "absolute",
        top: 0,
        left: 0,
        href: "javascript:;"
      };
      ZONE_DATA.push(style);
      this.CloseBtnFocus();
      this.OpenBtnFocus();
      this.BtnInsertIntoInput();
      this.BtnZoneDisplayOpen();
    },
    // 打開圖片外框
    ImgOutlineOpen: function (index) {
      this.CloseImgFocus();
      this.OpenImgClickFocus(index);
      this.ImgInputInsertIntoData(index);
      this.ImgZoneDisplayOpen();
    },
    // 打開文字外框
    TextOutlineOpen: function (index) {
      this.CloseTextFocus();
      this.OpenTextClickFocus(index);
      this.TextInputInsertIntoData(index);
      this.TextZoneDisplayOpen();
    },
    // 打開按鈕外框
    BtnOutlineOpen: function (index) {
      this.CloseBtnFocus();
      this.OpenBtnClickFocus(index);
      this.BtnInputInsertIntoData(index);
      this.BtnZoneDisplayOpen();
    },
    // 圖片區確定按鈕
    ImgCheckBtn: function (index) {
      this.CloseImgFocus();
      this.ClearImgInputValue();
      this.ImgZoneDisplayClose();
    },
    // 文字區確定按鈕
    TextCheckBtn: function (index) {
      this.CloseTextFocus();
      this.ClearTextInputValue();
      this.TextZoneDisplayClose();
    },
    // 按鈕區確定按鈕
    BtnCheckBtn: function (index) {
      this.CloseBtnFocus();
      this.ClearBtnInputValue();
      this.BtnZoneDisplayClose();
    },
    // 印出程式碼
    PrintCode: function () {
      const folder_name = this.fixed_project_data.name_folder;
      console.log(folder_name)
      let code = document.querySelector("#scene").innerHTML;
      document.querySelector("#code").style.display = "block";
      let textChang = code.replace(new RegExp('.png', 'g'), '.png?$staticlink$').replace(new RegExp('.jpg', 'g'), '.jpg?$staticlink$').replace(new RegExp('.gif', 'g'), '.gif?$staticlink$').replace(new RegExp('./images', 'g'), 'event-o2o-page/' + folder_name + '/images');
      this.zone_code = textChang;
    },
    CloseCode: function () {
      let code = document.querySelector("#code");
      code.style.display = "none";
    },
    // panel trigger
    TogglePanel: function () {
      let panel = document.querySelector(".panel");
      let scene = document.querySelector(".scene");

      if (panel.classList.contains("moveLeft")) {
        panel.classList.remove("moveLeft");
        scene.classList.remove("moveLeft");
      } else {
        panel.classList.add("moveLeft");
        scene.classList.add("moveLeft");
      }
    }
  }
});