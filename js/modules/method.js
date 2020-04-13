function method() {
    return {
        // 清空資料
        ClearData: function () {
            this.fixed_project_data.type_project = '';
            this.fixed_img_count.pc_img_data = [];
            this.fixed_img_count.mob_img_data = [];
            this.fixed_text_count.pc_text_data = [];
            this.fixed_text_count.mob_text_data = [];
            this.fixed_btn_count.pc_btn_data = [];
            this.fixed_btn_count.mob_btn_data = [];
            this.web_status.pc_height = 0;
            this.web_status.mobile_height = 0;
            this.anchor_data.attributes = [];
            this.ImgZoneDisplayClose();
            this.TextZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.AnchorZoneDisplayClose();
            this.LocalStorage();
        },
        // localStorage
        LocalStorage: function () {
            localStorage.setItem('type_project', this.fixed_project_data.type_project);
            localStorage.setItem('name_folder', this.fixed_project_data.name_folder);
            localStorage.setItem('pc_img_data', JSON.stringify(this.fixed_img_count.pc_img_data));
            localStorage.setItem('mob_img_data', JSON.stringify(this.fixed_img_count.mob_img_data));
            localStorage.setItem('pc_text_data', JSON.stringify(this.fixed_text_count.pc_text_data));
            localStorage.setItem('mob_text_data', JSON.stringify(this.fixed_text_count.mob_text_data));
            localStorage.setItem('pc_btn_data', JSON.stringify(this.fixed_btn_count.pc_btn_data));
            localStorage.setItem('mob_btn_data', JSON.stringify(this.fixed_btn_count.mob_btn_data));
            localStorage.setItem('pc_height', this.web_status.pc_height);
            localStorage.setItem('mobile_height', this.web_status.mobile_height);
            localStorage.setItem('anchor_data', JSON.stringify(this.anchor_data.attributes));
        },

        // 資料拷貝
        CopyData: function () {
            this.fixed_img_count.pc_img_temporarily_data = JSON.parse(
                JSON.stringify(this.fixed_img_count.pc_img_data)
            );
            this.fixed_img_count.mob_img_temporarily_data = JSON.parse(
                JSON.stringify(this.fixed_img_count.mob_img_data)
            );
            this.fixed_text_count.pc_text_temporarily_data = JSON.parse(
                JSON.stringify(this.fixed_text_count.pc_text_data)
            );
            this.fixed_text_count.mob_text_temporarily_data = JSON.parse(
                JSON.stringify(this.fixed_text_count.mob_text_data)
            );
            this.fixed_btn_count.pc_btn_temporarily_data = JSON.parse(
                JSON.stringify(this.fixed_btn_count.pc_btn_data)
            );
            this.fixed_btn_count.mob_btn_temporarily_data = JSON.parse(
                JSON.stringify(this.fixed_btn_count.mob_btn_data)
            );
            this.anchor_data.attributes_temporarily = JSON.parse(
                JSON.stringify(this.anchor_data.attributes)
            );
            this.web_status.pc_height = this.web_status.pc_height;
            this.web_status.mobile_height = this.web_status.mobile_height;
        },
        // 單位轉換
        ChangeUnit: function () {
            let pc_height = this.web_status.pc_height;
            let font_init = 6.2222;
            if (this.fixed_project_data.type_project == "YSL" && this.ysl_light_box_check.compile_rwd == true) {
                // 桌機版單位轉換
                let pc_img_left = this.fixed_img_count.pc_img_temporarily_data.map(
                    item => {
                        item.left = (parseInt(item.left) / 950) * 100 + "%";
                        return item.left;
                    }
                );
                let pc_img_top = this.fixed_img_count.pc_img_temporarily_data.map(
                    item => {
                        item.top = (parseInt(item.top) / pc_height) * 100 + "%";
                        return item.top;
                    }
                );
                let pc_img_width = this.fixed_img_count.pc_img_temporarily_data.map(
                    item => {
                        item.width = (parseInt(item.width) / 950) * 100 + "%";
                        return item.width;
                    }
                );
                let pc_text_left = this.fixed_text_count.pc_text_temporarily_data.map(
                    item => {
                        item.left = (parseInt(item.left) / 950) * 100 + "%";
                        return item.left;
                    }
                );
                let pc_text_top = this.fixed_text_count.pc_text_temporarily_data.map(
                    item => {
                        item.top = (parseInt(item.top) / pc_height) * 100 + "%";
                        return item.top;
                    }
                );
                let pc_text_font = this.fixed_text_count.pc_text_temporarily_data.map(
                    item => {
                        item.fontSize =
                            "calc(" + (parseInt(item.fontSize)) * font_init + "%)";
                        return item.fontSize;
                    }
                );
                let pc_btn_left = this.fixed_btn_count.pc_btn_temporarily_data.map(
                    item => {
                        item.left = (parseInt(item.left) / 950) * 100 + "%";
                        return item.left;
                    }
                );
                let pc_btn_top = this.fixed_btn_count.pc_btn_temporarily_data.map(
                    item => {
                        item.top = (parseInt(item.top) / pc_height) * 100 + "%";
                        return item.top;
                    }
                );
                let pc_btn_width = this.fixed_btn_count.pc_btn_temporarily_data.map(
                    item => {
                        item.width = (parseInt(item.width) / 950) * 100 + "%";
                        return item.width;
                    }
                );
                let pc_btn_height = this.fixed_btn_count.pc_btn_temporarily_data.map(
                    item => {
                        item.height = (parseInt(item.height) / pc_height) * 100 + "%";
                        return item.height;
                    }
                );
                let pc_btn_fontSize = this.fixed_btn_count.pc_btn_temporarily_data.map(
                    item => {
                        item.fontSize =
                            'calc(' + (parseInt(item.fontSize)) * font_init + '%)';
                        return item.fontSize;
                    }
                );
                let attributes_temporarily_pc_top = this.anchor_data.attributes_temporarily.map(
                    item => {
                        item.pc_top = (parseInt(item.pc_top) / pc_height) * 100 + "%";
                        return item.pc_top;
                    });
            }
            // 手機版單位轉換
            let mob_img_left = this.fixed_img_count.mob_img_temporarily_data.map(
                item => {
                    item.left = (parseInt(item.left) / 375) * 100 + "vw";
                    return item.left;
                }
            );
            let mob_img_top = this.fixed_img_count.mob_img_temporarily_data.map(
                item => {
                    item.top = (parseInt(item.top) / 375) * 100 + "vw";
                    return item.top;
                }
            );
            let mob_img_width = this.fixed_img_count.mob_img_temporarily_data.map(
                item => {
                    item.width = (parseInt(item.width) / 375) * 100 + "vw";
                    return item.width;
                }
            );
            let mob_text_left = this.fixed_text_count.mob_text_temporarily_data.map(
                item => {
                    item.left = (parseInt(item.left) / 375) * 100 + "vw";
                    return item.left;
                }
            );
            let mob_text_top = this.fixed_text_count.mob_text_temporarily_data.map(
                item => {
                    item.top = (parseInt(item.top) / 375) * 100 + "vw";
                    return item.top;
                }
            );
            let mob_text_font = this.fixed_text_count.mob_text_temporarily_data.map(
                item => {
                    item.fontSize =
                        "calc(" + (parseInt(item.fontSize) / 375) * 100 + "vw)";
                    return item.fontSize;
                }
            );
            let mob_btn_left = this.fixed_btn_count.mob_btn_temporarily_data.map(
                item => {
                    item.left = (parseInt(item.left) / 375) * 100 + "vw";
                    return item.left;
                }
            );
            let mob_btn_top = this.fixed_btn_count.mob_btn_temporarily_data.map(
                item => {
                    item.top = (parseInt(item.top) / 375) * 100 + "vw";
                    return item.top;
                }
            );
            let mob_btn_width = this.fixed_btn_count.mob_btn_temporarily_data.map(
                item => {
                    item.width = (parseInt(item.width) / 375) * 100 + "vw";
                    return item.width;
                }
            );
            let mob_btn_height = this.fixed_btn_count.mob_btn_temporarily_data.map(
                item => {
                    item.height = (parseInt(item.height) / 375) * 100 + "vw";
                    return item.height;
                }
            );
            let mob_btn_fontSize = this.fixed_btn_count.mob_btn_temporarily_data.map(
                item => {
                    item.fontSize =
                        "calc(" + (parseInt(item.fontSize) / 375) * 100 + "vw)";
                    return item.fontSize;
                }
            );
            let attributes_temporarily_mob_top = this.anchor_data.attributes_temporarily.map(
                item => {
                    item.mob_top = (parseInt(item.mob_top) / 375) * 100 + "vw";
                    return item.mob_top;
                });
        },
        // 改變外框寬度
        ChangeFrameWidth: function () {
            if (this.fixed_project_data.type_project == "YSL" || this.ysl_light_box_check.compile_rwd == true) {
                document
                    .querySelector("#scene_ysl")
                    .querySelector(".display_zone_destop").style.width = "100%";
            }
        },
        //視窗置頂
        GoScrollTop: function () {
            document.querySelector("html").scrollTop = 0;
        },
        // 給予桌機手機節點高度
        BodyHeight: function () {
            let pc_banner_width = 950;
            let mb_banner_width = 375;
            let body_height = document.body.scrollHeight;
            let self = this;
            if (this.pc_status == true) {
                document.querySelectorAll(".display_zone_destop")[0].style.height = 'auto';
                document.querySelectorAll(".display_zone_destop")[1].style.height = 'auto';
                setTimeout(() => {
                    document.querySelectorAll(".display_zone_destop")[0].style.height =
                        body_height + "px";
                    if (self.fixed_project_data.type_project == "YSL" && self.ysl_light_box_check.compile_rwd == true) {
                        document.querySelectorAll(".display_zone_destop")[1].style.height =
                            (body_height / pc_banner_width) * 100 + "vw";
                    } else {
                        document.querySelectorAll(".display_zone_destop")[1].style.height = body_height + "px";
                    }

                    this.web_status.pc_height = body_height;
                }, 100);

            } else if (this.mobile_status == true) {
                document.querySelectorAll(".display_zone_mobile")[0].style.height = 'auto';
                document.querySelectorAll(".display_zone_mobile")[1].style.height = 'auto';
                setTimeout(() => {
                    document.querySelectorAll(".display_zone_mobile")[0].style.height =
                        body_height + "px";

                    document.querySelectorAll(".display_zone_mobile")[1].style.height =
                        (body_height / mb_banner_width) * 100 + "vw";
                    this.web_status.mobile_height = body_height;
                }, 100);
            }
        },
        // 上傳圖片路徑
        ImgPcFileName: function () {
            const FILE_NAME = document.querySelector("#pc_file_name").files[0].name;
            let self = this;
            if (FILE_NAME == "") {
                return;
            } else if (FILE_NAME != "") {
                let url = document.location.href;
                const SUB_URL = url.substring(0, url.length - 10);
                let ZONE_DATA;
                if (this.pc_status == true) {
                    ZONE_DATA = this.fixed_img_count.pc_img_data;
                } else if (this.mobile_status == true) {
                    ZONE_DATA = this.fixed_img_count.mob_img_data;
                }
                if (
                    ZONE_DATA.find(function (item, index, array) {
                        return item.foucs == true;
                    })
                ) {
                    let target = ZONE_DATA.find(function (item, index, array) {
                        return item.foucs == true;
                    });
                    this.f_img_srcset = "./images/pc/" + FILE_NAME;
                    target.srcset = "./images/pc/" + FILE_NAME;
                }
            }
        },
        ImgXsFileName: function () {
            const FILE_NAME = document.querySelector("#xs_file_name").files[0].name;
            if (FILE_NAME == "") {
                return;
            } else if (FILE_NAME != "") {
                let ZONE_DATA;
                if (this.pc_status == true) {
                    ZONE_DATA = this.fixed_img_count.pc_img_data;
                } else if (this.mobile_status == true) {
                    ZONE_DATA = this.fixed_img_count.mob_img_data;
                }
                if (
                    ZONE_DATA.find(function (item, index, array) {
                        return item.foucs == true;
                    })
                ) {
                    let target = ZONE_DATA.find(function (item, index, array) {
                        return item.foucs == true;
                    });
                    this.f_img_src = "./images/xs/" + FILE_NAME;
                    target.src = "./images/xs/" + FILE_NAME;
                }
            }
        },
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
        // 錨點區面板顯示
        AnchorZoneDisplayOpen: function () {
            this.anchor_data.display = true;
        },
        AnchorZoneDisplayClose: function () {
            this.anchor_data.display = false;
        },
        // 創建的新圖片資料傳入input值
        ImgInsertIntoInput: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_img_count.pc_img_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_img_count.mob_img_data;
            }
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
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_text_count.pc_text_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_text_count.mob_text_data;
            }
            this.f_text_content = ZONE_DATA[ZONE_DATA.length - 1].content;
            this.f_text_width = ZONE_DATA[ZONE_DATA.length - 1].width;
            this.f_text_height = ZONE_DATA[ZONE_DATA.length - 1].height;
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
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_btn_count.pc_btn_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_btn_count.mob_btn_data;
            }
            this.f_btn_content = ZONE_DATA[ZONE_DATA.length - 1].content;
            this.f_btn_width = ZONE_DATA[ZONE_DATA.length - 1].width;
            this.f_btn_height = ZONE_DATA[ZONE_DATA.length - 1].height;
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
        // 創建的新錨點資料傳入input值
        AnchorInsertIntoInput: function () {
            let ZONE_DATA;
            ZONE_DATA = this.anchor_data.attributes;
            this.f_anchor_id = ZONE_DATA[ZONE_DATA.length - 1].id;
            this.f_anchor_zIndex = ZONE_DATA[ZONE_DATA.length - 1].zIndex;
            this.f_anchor_pc_top = ZONE_DATA[ZONE_DATA.length - 1].pc_top;
            this.f_anchor_mob_top = ZONE_DATA[ZONE_DATA.length - 1].mob_top;
        },
        // 圖片表單值輸入到資料中
        ImgInputInsertIntoData: function (index) {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_img_count.pc_img_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_img_count.mob_img_data;
            }
            this.f_img_width = ZONE_DATA[index].width;
            this.f_img_border = ZONE_DATA[index].border;
            this.f_img_backgroundColor = ZONE_DATA[index].backgroundColor;
            this.f_img_fontSize = ZONE_DATA[index].fontSize;
            this.f_img_zIndex = ZONE_DATA[index].zIndex;
            this.f_img_top = ZONE_DATA[index].top;
            this.f_img_left = ZONE_DATA[index].left;
            this.f_img_srcset = ZONE_DATA[index].srcset;
            this.f_img_src = ZONE_DATA[index].src;
            this.f_img_id = ZONE_DATA[index].id;
            this.f_img_className = ZONE_DATA[index].className;
        },
        // 文字表單值輸入到資料中
        TextInputInsertIntoData: function (index) {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_text_count.pc_text_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_text_count.mob_text_data;
            }
            this.f_text_content = ZONE_DATA[index].content;
            this.f_text_width = ZONE_DATA[index].width;
            this.f_text_height = ZONE_DATA[index].height;
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
            this.f_text_id = ZONE_DATA[index].id;
            this.f_text_className = ZONE_DATA[index].className;
        },
        // 按鈕表單值輸入到資料中
        BtnInputInsertIntoData: function (index) {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_btn_count.pc_btn_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_btn_count.mob_btn_data;
            }
            this.f_btn_content = ZONE_DATA[index].content;
            this.f_btn_width = ZONE_DATA[index].width;
            this.f_btn_height = ZONE_DATA[index].height;
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
            this.f_btn_id = ZONE_DATA[index].id;
            this.f_btn_className = ZONE_DATA[index].className;
            if (ZONE_DATA[index].class == 'js_quickshoppopin' || ZONE_DATA[index].class == 'js_quickviewbutton') {
                this.f_popup_check = true;
            } else {
                this.f_popup_check = false;
            }
        },
        // 錨點表單值輸入到資料中
        AnchorInputInsertIntoData: function (index) {
            let ZONE_DATA;
            ZONE_DATA = this.anchor_data.attributes;
            this.f_anchor_id = ZONE_DATA[index].id;
            this.f_anchor_zIndex = ZONE_DATA[index].zIndex;
            this.f_anchor_pc_top = ZONE_DATA[index].pc_top;
            this.f_anchor_mob_top = ZONE_DATA[index].mob_top;
        },
        // 關掉所有圖片foucs
        CloseImgFocus: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_img_count.pc_img_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_img_count.mob_img_data;
            }
            ZONE_DATA.forEach((item, array) => {
                ZONE_DATA[array].outline = "0px transparent solid";
                ZONE_DATA[array].foucs = "false";
            });
        },
        // 關掉所有文字foucs
        CloseTextFocus: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_text_count.pc_text_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_text_count.mob_text_data;
            }
            ZONE_DATA.forEach((item, array) => {
                ZONE_DATA[array].outline = "0px transparent solid";
                ZONE_DATA[array].foucs = "false";
            });
        },
        // 關掉所有按鈕foucs
        CloseBtnFocus: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_btn_count.pc_btn_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_btn_count.mob_btn_data;
            }
            ZONE_DATA.forEach((item, array) => {
                ZONE_DATA[array].outline = "0px transparent solid";
                ZONE_DATA[array].foucs = "false";
            });
        },
        // 關掉新增的錨點foucs
        CloseAnchorFocus: function () {
            let ZONE_DATA;
            ZONE_DATA = this.anchor_data.attributes;
            ZONE_DATA.forEach((item, array) => {
                ZONE_DATA[array].outline = "0px transparent solid";
                ZONE_DATA[array].foucs = "false";
            });
        },
        // 打開新增的圖片outline
        OpenImgFocus: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_img_count.pc_img_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_img_count.mob_img_data;
            }
            ZONE_DATA[ZONE_DATA.length - 1].outline = "1px #aaa dashed";
            ZONE_DATA[ZONE_DATA.length - 1].foucs = true;
        },
        // 打開新增的文字outline
        OpenTextFocus: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_text_count.pc_text_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_text_count.mob_text_data;
            }
            ZONE_DATA[ZONE_DATA.length - 1].outline = "1px #aaa dashed";
            ZONE_DATA[ZONE_DATA.length - 1].foucs = true;
        },
        // 打開新增的按鈕outline
        OpenBtnFocus: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_btn_count.pc_btn_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_btn_count.mob_btn_data;
            }
            ZONE_DATA[ZONE_DATA.length - 1].outline = "1px #aaa dashed";
            ZONE_DATA[ZONE_DATA.length - 1].foucs = true;
        },
        // 打開新增的錨點outline
        OpenAnchorFocus: function () {
            let ZONE_DATA;
            ZONE_DATA = this.anchor_data.attributes;
            ZONE_DATA[ZONE_DATA.length - 1].outline = "1px red dashed";
            ZONE_DATA[ZONE_DATA.length - 1].foucs = true;
        },
        // 打開被選取的圖片outline
        OpenImgClickFocus: function (index) {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_img_count.pc_img_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_img_count.mob_img_data;
            }
            ZONE_DATA[index].outline = "1px #aaa dashed";
            ZONE_DATA[index].foucs = true;
        },
        // 打開被選取的文字outline
        OpenTextClickFocus: function (index) {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_text_count.pc_text_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_text_count.mob_text_data;
            }
            ZONE_DATA[index].outline = "1px #aaa dashed";
            ZONE_DATA[index].foucs = true;
        },
        // 打開被選取的按鈕outline
        OpenBtnClickFocus: function (index) {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_btn_count.pc_btn_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_btn_count.mob_btn_data;
            }
            ZONE_DATA[index].outline = "1px #aaa dashed";
            ZONE_DATA[index].foucs = true;
        },
        // 打開被選取的錨點outline
        OpenAnchorClickFocus: function (index) {
            let ZONE_DATA;
            ZONE_DATA = this.anchor_data.attributes;
            ZONE_DATA[index].outline = "1px #aaa dashed";
            ZONE_DATA[index].foucs = true;
        },
        // 清空圖片input值
        ClearImgInputValue: function () {
            this.f_img_width = "";
            this.f_img_height = "";
            this.f_img_border = "";
            this.f_img_backgroundColor = "";
            this.f_img_fontSize = "";
            this.f_img_zIndex = "";
            this.f_img_top = "";
            this.f_img_left = "";
            this.f_img_id = "";
            this.f_img_className = "";
        }, // 清空文字input值
        ClearTextInputValue: function () {
            this.f_text_content = "";
            this.f_text_width = "";
            this.f_text_height = "";
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
            this.f_text_id = "";
            this.f_text_className = "";
        },
        // 清空按鈕input值
        ClearBtnInputValue: function () {
            this.f_btn_content = "";
            this.f_btn_width = "";
            this.f_btn_height = "";
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
            this.f_btn_id = "";
            this.f_btn_className = "";
        },
        // 清空錨點input值
        ClearAnchorInputValue: function () {
            this.f_anchor_id = "";
            this.f_anchor_zIndex = "";
            this.f_anchor_pc_top = "";
            this.f_anchor_mob_top = "";
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
            this.TextZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.CloseTextFocus();
            this.ClearTextInputValue();
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_img_count.pc_img_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_img_count.mob_img_data;
            }
            if (
                ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                })
            ) {
                let e = event;
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
                    self.BodyHeight();
                    flag = false;
                });
                zone_target.addEventListener("mouseover", function () {
                    self.BodyHeight();
                    flag = false;
                });
            }
        },
        // 文字區滑鼠移動抓取x,y事件
        TextMouseMoveGetXY: function () {
            this.ImgZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            let e = event;
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_text_count.pc_text_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_text_count.mob_text_data;
            }
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
            this.ImgZoneDisplayClose();
            this.TextZoneDisplayClose();
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.CloseTextFocus();
            this.ClearTextInputValue();
            let e = event;
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_btn_count.pc_btn_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_btn_count.mob_btn_data;
            }
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
        // PC錨點區滑鼠移動抓取y事件
        AnchorPcMouseMoveGetY: function () {
            this.ImgZoneDisplayClose();
            this.TextZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.CloseTextFocus();
            this.ClearTextInputValue();
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            let e = event;
            let ZONE_DATA;
            ZONE_DATA = this.anchor_data.attributes;
            if (
                ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                })
            ) {
                let zone_target = document.querySelector("#scene");
                let self = this;
                let flag = true;
                let initY = e.offsetY;

                zone_target.addEventListener("mousemove", function () {
                    if (flag == true) {
                        let e = event || window.event;
                        let y = e.pageY - initY;
                        self.f_anchor_pc_top = y + "px";
                    }

                });
                zone_target.addEventListener("mouseup", function () {
                    flag = false;
                });

            }
        },
        // 手機錨點區滑鼠移動抓取y事件
        AnchorMobMouseMoveGetY: function () {
            this.ImgZoneDisplayClose();
            this.TextZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.CloseTextFocus();
            this.ClearTextInputValue();
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            let e = event;
            let ZONE_DATA;
            ZONE_DATA = this.anchor_data.attributes;
            if (
                ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                })
            ) {
                let zone_target = document.querySelector("#scene");
                let self = this;
                let flag = true;
                let initY = e.offsetY;

                zone_target.addEventListener("mousemove", function () {
                    if (flag == true) {
                        let e = event || window.event;
                        let y = e.pageY - initY;
                        self.f_anchor_mob_top = y + "px";
                    }
                });
                zone_target.addEventListener("mouseup", function () {
                    flag = false;
                });
            }
        },
        // 新增圖片按鈕
        ImgAddImg: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_img_count.pc_img_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_img_count.mob_img_data;
            }
            // 送資料進去陣列
            let style;
            if (this.pc_status == true) {
                style = {
                    id: '',
                    className: '',
                    content: "文字",
                    foucs: false,
                    display: "block",
                    outline: "0px transparent solid",
                    width: "950px", // auto會導致拖曳到右邊時縮小
                    height: "auto",
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
            } else if (this.mobile_status == true) {
                style = {
                    id: '',
                    className: '',
                    content: "文字",
                    foucs: false,
                    display: "block",
                    outline: "0px transparent solid",
                    width: "375px", // auto會導致拖曳到右邊時縮小
                    height: "auto",
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
            }

            ZONE_DATA.push(style);
            this.TextZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.CloseTextFocus();
            this.ClearTextInputValue();
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            this.CloseImgFocus();
            this.OpenImgFocus();
            this.ImgInsertIntoInput();
            this.ImgZoneDisplayOpen();
            this.GoScrollTop();
            this.LocalStorage();
        },
        // 新增文字按鈕
        TextAddText: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_text_count.pc_text_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_text_count.mob_text_data;
            }
            // 送資料進去陣列
            let style = {
                id: '',
                className: '',
                content: "新增文字",
                foucs: false,
                display: "block",
                outline: "0px transparent solid",
                width: "auto",
                height: "auto",
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
                fontSize: "22px",
                zIndex: "2",
                position: "absolute",
                top: 0,
                left: 0
            };
            ZONE_DATA.push(style);
            this.ImgZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            this.CloseTextFocus();
            this.OpenTextFocus();
            this.TextInsertIntoInput();
            this.TextZoneDisplayOpen();
            this.GoScrollTop();
            this.LocalStorage();
        },
        // 新增按鈕的按鈕
        BtnAddBtn: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_btn_count.pc_btn_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_btn_count.mob_btn_data;
            }
            // 送資料進去陣列
            let style = {
                id: '',
                className: '',
                content: '新增連結',
                foucs: false,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: '0px transparent solid',
                width: '150px',
                height: '50px',
                paddingTop: 'auto',
                paddingBottom: 'auto',
                paddingLeft: 'auto',
                paddingRight: 'auto',
                border: '0px #000 solid',
                color: 'black',
                backgroundColor: 'transparent',
                fontSize: '22px',
                zIndex: '2',
                position: 'absolute',
                top: 0,
                left: 0,
                href: 'javascript:;',
                class: '',
                pref_class: ''
            };
            ZONE_DATA.push(style);
            this.ImgZoneDisplayClose();
            this.TextZoneDisplayClose();
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.CloseTextFocus();
            this.ClearTextInputValue();
            this.CloseBtnFocus();
            this.OpenBtnFocus();
            this.BtnInsertIntoInput();
            this.BtnZoneDisplayOpen();
            this.GoScrollTop();
            this.LocalStorage();
        },
        // 新增錨點的按鈕
        AnchorAddBtn: function () {
            let ZONE_DATA;
            ZONE_DATA = this.anchor_data.attributes;
            let style = {
                foucs: false,
                id: '',
                zIndex: '99',
                pc_top: 0,
                mob_top: 0
            }
            ZONE_DATA.push(style);
            this.ImgZoneDisplayClose();
            this.TextZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.CloseTextFocus();
            this.ClearTextInputValue();
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            this.CloseAnchorFocus();
            this.OpenAnchorFocus();
            this.AnchorInsertIntoInput();
            this.AnchorZoneDisplayOpen();
            this.GoScrollTop();
            this.LocalStorage();
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
        // 打開錨點外框
        AnchorOutlineOpen: function (index) {
            this.CloseAnchorFocus();
            this.OpenAnchorClickFocus(index);
            this.AnchorInputInsertIntoData(index);
            this.AnchorZoneDisplayOpen();
        },
        // 圖片區確定按鈕
        ImgCheckBtn: function (index) {
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.ImgZoneDisplayClose();
            this.BodyHeight();
            this.LocalStorage();
        },
        // 文字區確定按鈕
        TextCheckBtn: function (index) {
            this.CloseTextFocus();
            this.ClearTextInputValue();
            this.TextZoneDisplayClose();
            this.BodyHeight();
            this.LocalStorage();
        },
        // 按鈕區確定按鈕
        BtnCheckBtn: function (index) {
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            this.BtnZoneDisplayClose();
            this.BodyHeight();
            this.LocalStorage();
        },
        // 錨點區確定按鈕
        AnchorCheckBtn: function (index) {
            this.CloseAnchorFocus();
            this.ClearAnchorInputValue();
            this.AnchorZoneDisplayClose();
            this.BodyHeight();
            this.LocalStorage();
        },
        // 圖片區取消按鈕
        ImgRemoveBtn: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_img_count.pc_img_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_img_count.mob_img_data;
            }
            let i = ZONE_DATA.findIndex(function (item) {
                return item.foucs == true;
            });
            ZONE_DATA.splice(i, 1);
            this.ClearImgInputValue();
            this.ImgZoneDisplayClose();
            this.BodyHeight();
            this.LocalStorage();
        },
        // 文字區取消按鈕
        TextRemoveBtn: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_text_count.pc_text_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_text_count.mob_text_data;
            }
            let i = ZONE_DATA.findIndex(function (item) {
                return item.foucs == true;
            });
            ZONE_DATA.splice(i, 1);
            this.ClearTextInputValue();
            this.TextZoneDisplayClose();
            this.BodyHeight();
            this.LocalStorage();
        },
        // 按鈕區取消按鈕
        BtnRemoveBtn: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_btn_count.pc_btn_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_btn_count.mob_btn_data;
            }
            let i = ZONE_DATA.findIndex(function (item) {
                return item.foucs == true;
            });
            ZONE_DATA.splice(i, 1);
            this.ClearBtnInputValue();
            this.BtnZoneDisplayClose();
            this.BodyHeight();
            this.LocalStorage();
        },
        // 錨點區取消按鈕
        AnchorRemoveBtn: function () {
            let ZONE_DATA;
            ZONE_DATA = this.anchor_data.attributes;

            let i = ZONE_DATA.findIndex(function (item) {
                return item.foucs == true;
            });
            ZONE_DATA.splice(i, 1);
            this.ClearAnchorInputValue();
            this.AnchorZoneDisplayClose();
            this.BodyHeight();
            this.LocalStorage();
        },
        CloseCode: function () {
            if (document.querySelector("#add_size") != null) {
                document.querySelector("#add_size").media = "(min-width:2000px)";
            }
            let code = document.querySelector("#code");
            code.style.display = "none";
        },
        // panel trigger
        TogglePanel: function () {
            let panel_tigger = document.querySelector(".panel-trigger");
            let panel = document.querySelector(".panel");
            let zone = document.querySelector("#zone_desktop");
            let panelSide = document.querySelector(".panelside");
            let scene = document.querySelector(".scene");
            if (panel.classList.contains("moveRight")) {
                panel.classList.remove("moveRight");
                zone.classList.remove("moveRight");
                panelSide.classList.remove("moveRight");
                // scene.classList.remove("moveRight");
            } else {
                panel.classList.add("moveRight");
                zone.classList.add("moveRight");
                panelSide.classList.add("moveRight");
                // scene.classList.add("moveRight");
            }
        },
        ToggleBlock: function () {
            let block_tigger = document.querySelector("#projectElement .trigger");
            let block = document.querySelector("#projectElement");
            let projectBlock = document.querySelector("#project-setting");

            if (block.classList.contains("active")) {
                block.classList.remove("active");
            } else {
                block.classList.add("active");
            }
        },
        ToggleDestop: function () {
            this.BodyHeight();
            let toggle_destop_moblie = document.querySelector(
                ".toggle-destop-moblie"
            );
            toggle_destop_moblie.classList = "toggle-destop-moblie is-desktop";
            // toggle_destop_moblie.querySelectorAll("div")[1].style.backgroundColor ="transparent";
            this.CloseImgFocus();
            this.CloseTextFocus();
            this.CloseBtnFocus();
            this.pc_status = true;
            this.mobile_status = false;
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.ImgZoneDisplayClose();
            this.CloseTextFocus();
            this.ClearTextInputValue();
            this.TextZoneDisplayClose();
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            this.BtnZoneDisplayClose();
            this.LocalStorage();
        },
        ToggleMobile: function () {
            this.BodyHeight();
            let toggle_destop_moblie = document.querySelector(
                ".toggle-destop-moblie"
            );
            toggle_destop_moblie.classList = "toggle-destop-moblie is-mobile";
            // toggle_destop_moblie.querySelectorAll("div")[0].style.backgroundColor = "transparent";
            // toggle_destop_moblie.querySelectorAll("div")[1].style.backgroundColor = "rgb(231, 187, 187)";
            // toggle_destop_moblie.querySelectorAll("div")[1].style.backgroundColor ="transparent";
            this.CloseImgFocus();
            this.CloseTextFocus();
            this.CloseBtnFocus();
            this.pc_status = false;
            this.mobile_status = true;
            this.CloseImgFocus();
            this.ClearImgInputValue();
            this.ImgZoneDisplayClose();
            this.CloseTextFocus();
            this.ClearTextInputValue();
            this.TextZoneDisplayClose();
            this.CloseBtnFocus();
            this.ClearBtnInputValue();
            this.BtnZoneDisplayClose();
            this.LocalStorage();
        },
        // 印出程式碼
        PrintCode: function () {
            if (this.fixed_project_data.type_project == 'YSL') {
                this.ysl_light_box_check.check = true;
                return;
            }
            this.ImgZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.TextZoneDisplayClose();
            this.LocalStorage();
            this.BodyHeight();
            this.CloseImgFocus();
            this.CloseTextFocus();
            this.CloseBtnFocus();
            this.CopyData();
            this.ChangeUnit();
            let self = this;
            let code;
            let execute = () => {
                document.querySelector('#scene_ysl').querySelector('.display_zone_destop').style.width = '950px';
                let data = self.anchor_data.attributes_temporarily;
                let data_pc_top = data.map(function (value, index, array) {
                    return `document.querySelectorAll('.anchor__list')[${index}].style.top='${value.pc_top}';`
                });
                let data_mob_top = data.map(function (value, index, array) {
                    return `document.querySelectorAll('.anchor__list')[${index}].style.top='${value.mob_top}';`
                });
                let js = `<script>
                if (document.body.clientWidth > 992) {
                    ${data_pc_top}
                } else {
                    ${data_mob_top}
                }
                </script>`;
                js = js.replace(new RegExp(";,", "g"), ";")
                let folder_name = self.fixed_project_data.name_folder;
                code = document.querySelector(".loreal-compaign_new").innerHTML;
                document.querySelector("#code").style.display = "block";
                let textChang = code
                    .replace(new RegExp(".png", "g"), ".png?$staticlink$")
                    .replace(new RegExp(".jpg", "g"), ".jpg?$staticlink$")
                    .replace(new RegExp(".gif", "g"), ".gif?$staticlink$")
                    .replace(
                        new RegExp("./images", "g"),
                        "event-o2o-page/" + folder_name + "/images"
                    )
                    .replace(new RegExp("margin: initial;", "g"), "margin: 0 auto;")
                    .replace(new RegExp('onclick="return false;"', "g"), '""')
                    .replace(new RegExp("display: none;", "g"), "display:block")
                    .replace(new RegExp("min-width:2000px", "g"), "min-width:992px");
                let css = `<style>
                        #loreal-compaign{
                            position: relative;
                        }
                        #loreal-compaign_new{
                            position: relative;
                        }
                        #loreal-compaign_new .anchor__list{
                            position: absolute;
                            left:0;
                            width:100%;
                        }
                        .g-wrapper_inner-main_content{
                            padding-left: 0;
                            padding-right: 0;
                        }
                        body .main .content{
                            padding-left: 0;
                            padding-right: 0;
                        }
                        @media (min-width:992px){
                            body {-ms-overflow-style: none;}
                            ::-webkit-scrollbar{width: 0px;}
                            .display_zone_mobile {display: none !important;margin:0 auto;}
                        }
                        @media (max-width:991.9px) {
                            html,body{overflow-x: hidden;}
                                .display_zone_destop {display: none !important;}
                            }
                                </style>`;
                self.zone_code = css + textChang + js;
            };
            setTimeout(function () {
                execute();
            }, 300);
        },
        // 轉成YSL_RWD
        BtnYslRwd: function () {
            this.ysl_light_box_check.check = false;
            this.ysl_light_box_check.compile_rwd = true;
            this.ImgZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.TextZoneDisplayClose();
            this.LocalStorage();
            this.BodyHeight();
            this.CloseImgFocus();
            this.CloseTextFocus();
            this.CloseBtnFocus();
            this.CopyData();
            this.ChangeUnit();
            let self = this;
            let code;
            let execute = () => {
                document.querySelector('#scene_ysl').querySelector('.display_zone_destop').style.width = '100%';
                let data = self.anchor_data.attributes_temporarily;
                let data_pc_top = data.map(function (value, index, array) {
                    return `document.querySelectorAll('.anchor__list')[${index}].style.top='${value.pc_top}';`
                });
                let data_mob_top = data.map(function (value, index, array) {
                    return `document.querySelectorAll('.anchor__list')[${index}].style.top='${value.mob_top}';`
                });
                let js = `<script>
                if (document.body.clientWidth > 992) {
                    ${data_pc_top}
                } else {
                    ${data_mob_top}
                }
                </script>`;
                js = js.replace(new RegExp(";,", "g"), ";")
                let folder_name = self.fixed_project_data.name_folder;
                code = document.querySelector(".loreal-compaign_new").innerHTML;
                self.ChangeFrameWidth();
                document.querySelector("#code").style.display = "block";
                let textChang = code
                    .replace(new RegExp(".png", "g"), ".png?$staticlink$")
                    .replace(new RegExp(".jpg", "g"), ".jpg?$staticlink$")
                    .replace(new RegExp(".gif", "g"), ".gif?$staticlink$")
                    .replace(
                        new RegExp("./images", "g"),
                        "event-o2o-page/" + folder_name + "/images"
                    )
                    .replace(new RegExp("margin: initial;", "g"), "margin: 0 auto;")
                    .replace(new RegExp('onclick="return false;"', "g"), '""')
                    .replace(new RegExp("display: none;", "g"), "display:block")
                    .replace(new RegExp("min-width:2000px", "g"), "min-width:992px");
                let css = `<style>
                    #loreal-compaign{
                        position: relative;
                    }
                    #loreal-compaign_new{
                        position: relative;
                    }
                    #loreal-compaign_new .anchor__list{
                        position: absolute;
                        left:0;
                        width:100%;
                    }
                    .g-wrapper_inner-main_content{
                        padding-left: 0;
                        padding-right: 0;
                    }
                    body .main .content{
                        padding-left: 0;
                        padding-right: 0;
                    }
                    @media (min-width:992px){
                        body {-ms-overflow-style: none;}
                        ::-webkit-scrollbar{width: 0px;}
                        .display_zone_mobile {display: none !important;margin:0 auto;}
                    }
                    @media (max-width:991.9px) {
                        html,body{overflow-x: hidden;}
                            .display_zone_destop {display: none !important;}
                        }
                            </style>`;
                self.zone_code =
                    css + textChang + js;
            };
            setTimeout(function () {
                execute();
            }, 300);
        },
        // 轉成YSL_Fixed
        BtnYslFixed: function () {
            this.ysl_light_box_check.check = false;
            this.ysl_light_box_check.compile_rwd = false;
            this.ImgZoneDisplayClose();
            this.BtnZoneDisplayClose();
            this.TextZoneDisplayClose();
            this.LocalStorage();
            this.BodyHeight();
            this.CloseImgFocus();
            this.CloseTextFocus();
            this.CloseBtnFocus();
            this.CopyData();
            this.ChangeUnit();
            let self = this;
            let code;
            let execute = () => {
                document.querySelector('#scene_ysl').querySelector('.display_zone_destop').style.width = '950px';
                let data = self.anchor_data.attributes_temporarily;
                let data_pc_top = data.map(function (value, index, array) {
                    return `document.querySelectorAll('.anchor__list')[${index}].style.top='${value.pc_top}';`
                });
                let data_mob_top = data.map(function (value, index, array) {
                    return `document.querySelectorAll('.anchor__list')[${index}].style.top='${value.mob_top}';`
                });
                let js = `<script>
                if (document.body.clientWidth > 992) {
                    ${data_pc_top}
                } else {
                    ${data_mob_top}
                }
                </script>`;
                js = js.replace(new RegExp(";,", "g"), ";")
                let folder_name = self.fixed_project_data.name_folder;
                code = document.querySelector(".loreal-compaign_new").innerHTML;
                document.querySelector("#code").style.display = "block";
                let textChang = code
                    .replace(new RegExp(".png", "g"), ".png?$staticlink$")
                    .replace(new RegExp(".jpg", "g"), ".jpg?$staticlink$")
                    .replace(new RegExp(".gif", "g"), ".gif?$staticlink$")
                    .replace(
                        new RegExp("./images", "g"),
                        "event-o2o-page/" + folder_name + "/images"
                    )
                    .replace(new RegExp("margin: initial;", "g"), "margin: 0 auto;")
                    .replace(new RegExp('onclick="return false;"', "g"), '""')
                    .replace(new RegExp("display: none;", "g"), "display:block")
                    .replace(new RegExp("min-width:2000px", "g"), "min-width:992px");
                let css = `<style>
                    #loreal-compaign{
                        position: relative;
                    }
                    #loreal-compaign_new{
                        position: relative;
                    }
                    #loreal-compaign_new .anchor__list{
                        position: absolute;
                        left:0;
                        width:100%;
                    }
                    .g-wrapper_inner-main_content{
                        padding-left: 0;
                        padding-right: 0;
                    }
                    body .main .content{
                        padding-left: 0;
                        padding-right: 0;
                    }
                    @media (min-width:992px){
                        body {-ms-overflow-style: none;}
                        ::-webkit-scrollbar{width: 0px;}
                        .display_zone_mobile {display: none !important;margin:0 auto;}
                    }
                    @media (max-width:991.9px) {
                        html,body{overflow-x: hidden;}
                            .display_zone_destop {display: none !important;}
                        }
                            </style>`;
                self.zone_code =
                    css + textChang + js;
            };
            setTimeout(function () {
                execute();
            }, 300);
        }
    }
}
// 輸出
export {
    method
};