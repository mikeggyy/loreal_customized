function watch() {
    return {
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
                target.width = this.f_img_width;
            }
        },
        f_img_left: function () {
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
                target.left = this.f_img_left;
            }
        },
        f_img_top: function () {
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
                target.top = this.f_img_top;
            }
        },
        f_img_zIndex: function () {
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
                target.zIndex = this.f_img_zIndex;
            }
        },
        f_img_backgroundColor: function () {
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
                target.backgroundColor = this.f_img_backgroundColor;
            }
        },
        f_img_srcset: function () {
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
                target.srcset = this.f_img_srcset;
            }
        },
        f_img_src: function () {
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
                target.src = this.f_img_src;
            }
        },
        // 文字區數值改變
        f_text_content: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.content = this.f_text_content;
            }
        },

        f_text_width: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_text_count.pc_text_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_text_count.mob_text_data;
            }
            if (
                this.fixed_text_count.pc_text_data.find(function (item, index, array) {
                    return item.foucs == true;
                })
            ) {
                let target = this.fixed_text_count.pc_text_data.find(function (
                    item,
                    index,
                    array
                ) {
                    return item.foucs == true;
                });
                target.width = this.f_text_width;
            }
        },

        f_text_height: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.height = this.f_text_height;
            }
        },

        f_text_paddingTop: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.paddingTop = this.f_text_paddingTop;
            }
        },

        f_text_paddingBottom: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.paddingBottom = this.f_text_paddingBottom;
            }
        },

        f_text_paddingLeft: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.paddingLeft = this.f_text_paddingLeft;
            }
        },

        f_text_paddingRight: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.paddingRight = this.f_text_paddingRight;
            }
        },

        f_text_border: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.border = this.f_text_border;
            }
        },

        f_text_color: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.color = this.f_text_color;
            }
        },

        f_text_backgroundColor: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.backgroundColor = this.f_text_backgroundColor;
            }
        },

        f_text_fontSize: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.fontSize = this.f_text_fontSize;
            }
        },

        f_text_zIndex: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.zIndex = this.f_text_zIndex;
            }
        },

        f_text_top: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.top = this.f_text_top;
            }
        },

        f_text_left: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.left = this.f_text_left;
            }
        },
        // 圖片區數值改變
        f_btn_content: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.content = this.f_btn_content;
            }
        },
        f_btn_href: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.href = this.f_btn_href;
            }
        },
        f_btn_width: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.width = this.f_btn_width;
            }
        },
        f_btn_height: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.height = this.f_btn_height;
            }
        },
        f_btn_zIndex: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.zIndex = this.f_btn_zIndex;
            }
        },
        f_btn_border: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.border = this.f_btn_border;
            }
        },
        f_btn_backgroundColor: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.backgroundColor = this.f_btn_backgroundColor;
            }
        },
        f_btn_fontSize: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.fontSize = this.f_btn_fontSize;
            }
        },
        f_btn_color: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.color = this.f_btn_color;
            }
        },
        f_btn_paddingTop: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.paddingTop = this.f_btn_paddingTop;
            }
        },
        f_btn_paddingRight: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.paddingRight = this.f_btn_paddingRight;
            }
        },
        f_btn_paddingBottom: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.paddingBottom = this.f_btn_paddingBottom;
            }
        },
        f_btn_paddingLeft: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.paddingLeft = this.f_btn_paddingLeft;
            }
        },
        f_btn_left: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.left = this.f_btn_left;
            }
        },
        f_btn_top: function () {
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
                let target = ZONE_DATA.find(function (item, index, array) {
                    return item.foucs == true;
                });
                target.top = this.f_btn_top;
            }
        },
        // popup值改變
        f_popup_check: function () {
            let ZONE_DATA;
            if (this.pc_status == true) {
                ZONE_DATA = this.fixed_btn_count.pc_btn_data;
            } else if (this.mobile_status == true) {
                ZONE_DATA = this.fixed_btn_count.mob_btn_data;
            }
            if(this.f_popup_check==true){
                if(this.fixed_project_data.type_project=="GAB"){
                    if (
                        ZONE_DATA.find(function (item, index, array) {
                            return item.foucs == true;
                        })
                    ) {
                        let target = ZONE_DATA.find(function (item, index, array) {
                            return item.foucs == true;
                        });
                        target.class = 'js_quickshoppopin';
                    }
                }else if(this.fixed_project_data.type_project=="YSL"){
                    if (
                        ZONE_DATA.find(function (item, index, array) {
                            return item.foucs == true;
                        })
                    ) {
                        let target = ZONE_DATA.find(function (item, index, array) {
                            return item.foucs == true;
                        });
                        target.class = 'js_quickviewbutton';
                        target.pref_class = 'contentcarousel_list';
                    }
                }
            }else{
                return;
            }

        }
    }
}
export {
    watch
};