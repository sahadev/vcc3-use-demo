((typeof self !== 'undefined' ? self : this)["webpackJsonpvcc3"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvcc3"] || []).push([[17],{

/***/ "63c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/map/style.index.js
/* harmony default export */ var style_index = ({
  ".container": "",
  ".row": "margin-bottom: 10px;",
  ".icon": "margin-right: 10px; margin-left: 10px; font-size: 18px;",
  ".el-header": "background-color: #b3c0d1; color: #333; text-align: center; line-height: 60px;",
  ".el-footer": "background-color: #b3c0d1; color: #333; text-align: center; line-height: 60px;",
  ".el-aside": "background-color: #d3dce6; color: #333; text-align: center; line-height: 200px;",
  ".el-main": "background-color: #e9eef3; color: #333; text-align: center; line-height: 160px;",
  "body > .el-container": "margin-bottom: 40px;",
  ".el-container:nth-child(5) .el-aside": "line-height: 260px;",
  ".el-container:nth-child(6) .el-aside": "line-height: 260px;",
  ".el-container:nth-child(7) .el-aside": "line-height: 320px;",
  ".avatar-uploader :v-deep(.el-upload)": "border: 1px dashed #d9d9d9; border-radius: 6px; cursor: pointer; position: relative; overflow: hidden;",
  ".avatar-uploader .el-upload:hover": "border-color: #409eff;",
  ".avatar-uploader-icon": "font-size: 28px; color: #8c939d; width: 178px; height: 178px; line-height: 178px; text-align: center;",
  ".avatar": "width: 178px; height: 178px; display: block;",
  ".demo-border": "border: 1px grey dashed; min-height: 1rem; border-radius: 5px;",
  "[label-lc-mark]": "display: inline-block; width: 200px; border: 1px grey dashed; min-height: 1rem; border-radius: 5px;",
  ".item": "margin-top: 10px; margin-right: 40px;",
  ".el-carousel__item h3": "color: #475669; font-size: 14px; opacity: 0.75; line-height: 150px; margin: 0;",
  ".el-carousel__item:nth-child(2n)": "background-color: #99a9bf;",
  ".el-carousel__item:nth-child(2n + 1)": "background-color: #d3dce6;",
  ".el-row": "margin-bottom: 20px;",
  ".el-row:last-child": "margin-bottom: 0;",
  ".el-col": "border-radius: 4px;",
  ".bg-purple-dark": "background: #99a9bf;",
  ".bg-purple": "background: #d3dce6 !important;",
  ".bg-purple-light": "background: #e5e9f2;",
  ".grid-content": "border-radius: 4px; min-height: 36px;",
  ".row-bg": "padding: 10px 0; background-color: #f9fafc;",
  ".icon1": "margin-left: 10px; margin-right: 10px;",
  ".layout": "border: 1px solid #d7dde4; background: #f5f7f9; position: relative; border-radius: 4px; overflow: hidden;",
  ".layout-logo": "width: 100px; height: 30px; background: #5b6270; border-radius: 3px; float: left; position: relative; top: 15px; left: 20px;",
  ".layout-nav": "width: 420px; margin: 0 auto; margin-right: 20px;",
  ".demonstration": "font-size: 12px; color: #1f2f3d; padding: 10px 0 0 0;",
  ".title": "width: 120px;",
  ".demonstration-raw": "padding: 10px 0;",
  "[div-lc-mark]": "border: 1px grey dashed; min-height: 1rem; border-radius: 5px;",
  "button + button": "margin-top: 10px;",
  "#vant-button > *": "margin: 0 5px 5px 0;",
  ".colon": "display: inline-block; margin: 0 4px; color: #ee0a24;",
  ".block": "display: inline-block; width: 22px; color: #fff; font-size: 12px; text-align: center; background-color: #ee0a24;",
  ".my-swipe .van-swipe-item": "color: #fff; font-size: 20px; line-height: 150px; text-align: center; background-color: #39a9ed;",
  ".icon-c": "margin-left: 10px; margin-right: 10px;",
  ":v-deep(.van-tabbar--fixed)": "position: initial;",
  ":v-deep(.van-address-list__bottom)": "position: relative;",
  ":v-deep(.van-submit-bar)": "position: initial;"
});
// CONCATENATED MODULE: ./src/map/method.index.js
/* harmony default export */ var method_index = ({
  "handleClose": "function (done) {\n    this.$confirm('确认关闭\\uFF1F').then(_ => {\n        done();\n    }).catch(_ => {\n    });\n}",
  "handleDrawerClose": "function (done) {\n    this.$confirm('确认关闭\\uFF1F').then(_ => {\n        done();\n    }).catch(_ => {\n    });\n}",
  "load": "function () {\n    this.count += 2;\n}",
  "handleChange": "function (value) {\n}",
  "handleRemove": "function (file, fileList) {\n    console.log(file, fileList);\n}",
  "handlePreview": "function (file) {\n    console.log(file);\n}",
  "handleExceed": "function (files, fileList) {\n    this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${ files.length } 个文件，共选择了 ${ files.length + fileList.length } 个文件`);\n}",
  "beforeRemove": "function (file, fileList) {\n    return this.$confirm(`确定移除 ${ file.name }？`);\n}",
  "handleAvatarSuccess": "function (res, file) {\n    this.imageUrl = URL.createObjectURL(file.raw);\n}",
  "beforeAvatarUpload": "function (file) {\n}",
  "next": "function () {\n}",
  "goBack": "function () {\n    console.log('go back');\n}",
  "onSubmit": "function () {\n    console.log('submit!');\n}",
  "onReset": "function () {\n    console.log('submit!');\n}",
  "submitForm": "function () {\n    console.log('submit!');\n}",
  "resetForm": "function () {\n    console.log('submit!');\n}",
  "format": "function (percentage) {\n    return percentage === 100 ? '满' : `${ percentage }%`;\n}",
  "handleNodeClick": "function () {\n}",
  "handleSelect": "function () {\n}",
  "handleClick": "function () {\n}",
  "goBack2": "function () {\n}",
  "handleChange3": "function (val) {\n    console.log(val);\n}",
  "handleSizeChange": "function () {\n}",
  "handleCurrentChange": "function () {\n}",
  "onLoad": "function () {\n}",
  "onSubmit6": "function (values) {\n    console.log('submit', values);\n}",
  "onConfirm": "function (value, index) {\n}",
  "onChange": "function (picker, value, index) {\n}",
  "onCancel": "function () {\n}",
  "afterRead": "function (file) {\n    console.log(file);\n}",
  "formatDate": "function (date) {\n    return `${ date.getMonth() + 1 }/${ date.getDate() }`;\n}",
  "onConfirm8": "function (date) {\n    this.show = false;\n    this.date = this.formatDate(date);\n}",
  "checkAll": "function () {\n    this.$refs.checkboxGroup.toggleAll(true);\n}",
  "toggleAll": "function () {\n    this.$refs.checkboxGroup.toggleAll();\n}",
  "onClickIcon": "function () {\n    Toast('点击图标');\n}",
  "onClickButton": "function () {\n    Toast('点击按钮');\n}",
  "onAdd": "function () {\n    Toast('新增地址');\n}",
  "onEdit": "function (item, index) {\n    Toast('编辑地址:' + index);\n}",
  "onClickLeft": "function () {\n    Toast('返回');\n}",
  "onClickRight": "function () {\n    Toast('按钮');\n}",
  "onSave": "function () {\n    Toast('save');\n}",
  "onDelete": "function () {\n    Toast('delete');\n}",
  "onChangeDetail": "function (val) {\n    if (val) {\n        this.searchResult = [{\n                name: '黄龙万科中心',\n                address: '杭州市西湖区'\n            }];\n    } else {\n        this.searchResult = [];\n    }\n}",
  "onSubmit11": "function () {\n}",
  "onClickEditAddress": "function () {\n}"
});
// CONCATENATED MODULE: ./src/map/data.index.js
/* harmony default export */ var data_index = ({
  "circleUrl": "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
  "squareUrl": "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
  "dialogVisible": false,
  "drawer": false,
  "direction": "rtl",
  "count": 0,
  "transferData": [{
    "key": 0,
    "label": "备选项 0"
  }, {
    "key": 1,
    "label": "备选项 1"
  }, {
    "key": 2,
    "label": "备选项 2"
  }, {
    "key": 3,
    "label": "备选项 3"
  }, {
    "key": 4,
    "label": "备选项 4"
  }],
  "transferValue": [1, 4],
  "textarea2": "",
  "value1": ["2016-10-10T00:40:00.000Z", "2016-10-10T01:40:00.000Z"],
  "dateValue1": "",
  "num": 1,
  "imageUrl": "",
  "color1": "#409EFF",
  "checkList": ["选中且禁用", "复选框 A"],
  "radio": 3,
  "input": "",
  "fileList": [{
    "name": "food.jpeg",
    "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
  }, {
    "name": "food2.jpeg",
    "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
  }],
  "options": [{
    "value": "选项1",
    "label": "黄金糕"
  }, {
    "value": "选项2",
    "label": "双皮奶"
  }, {
    "value": "选项3",
    "label": "蚵仔煎"
  }, {
    "value": "选项4",
    "label": "龙须面"
  }, {
    "value": "选项5",
    "label": "北京烤鸭"
  }],
  "value": 3,
  "value2": [],
  "options2": [{
    "value": "zhinan",
    "label": "指南",
    "children": [{
      "value": "shejiyuanze",
      "label": "设计原则",
      "children": [{
        "value": "yizhi",
        "label": "一致"
      }, {
        "value": "fankui",
        "label": "反馈"
      }, {
        "value": "xiaolv",
        "label": "效率"
      }, {
        "value": "kekong",
        "label": "可控"
      }]
    }, {
      "value": "daohang",
      "label": "导航",
      "children": [{
        "value": "cexiangdaohang",
        "label": "侧向导航"
      }, {
        "value": "dingbudaohang",
        "label": "顶部导航"
      }]
    }]
  }, {
    "value": "zujian",
    "label": "组件",
    "children": [{
      "value": "basic",
      "label": "Basic",
      "children": [{
        "value": "layout",
        "label": "Layout 布局"
      }, {
        "value": "color",
        "label": "Color 色彩"
      }, {
        "value": "typography",
        "label": "Typography 字体"
      }, {
        "value": "icon",
        "label": "Icon 图标"
      }, {
        "value": "button",
        "label": "Button 按钮"
      }]
    }, {
      "value": "form",
      "label": "Form",
      "children": [{
        "value": "radio",
        "label": "Radio 单选框"
      }, {
        "value": "checkbox",
        "label": "Checkbox 多选框"
      }, {
        "value": "input",
        "label": "Input 输入框"
      }, {
        "value": "input-number",
        "label": "InputNumber 计数器"
      }, {
        "value": "select",
        "label": "Select 选择器"
      }, {
        "value": "cascader",
        "label": "Cascader 级联选择器"
      }, {
        "value": "switch",
        "label": "Switch 开关"
      }, {
        "value": "slider",
        "label": "Slider 滑块"
      }, {
        "value": "time-picker",
        "label": "TimePicker 时间选择器"
      }, {
        "value": "date-picker",
        "label": "DatePicker 日期选择器"
      }, {
        "value": "datetime-picker",
        "label": "DateTimePicker 日期时间选择器"
      }, {
        "value": "upload",
        "label": "Upload 上传"
      }, {
        "value": "rate",
        "label": "Rate 评分"
      }, {
        "value": "form",
        "label": "Form 表单"
      }]
    }, {
      "value": "data",
      "label": "Data",
      "children": [{
        "value": "table",
        "label": "Table 表格"
      }, {
        "value": "tag",
        "label": "Tag 标签"
      }, {
        "value": "progress",
        "label": "Progress 进度条"
      }, {
        "value": "tree",
        "label": "Tree 树形控件"
      }, {
        "value": "pagination",
        "label": "Pagination 分页"
      }, {
        "value": "badge",
        "label": "Badge 标记"
      }]
    }, {
      "value": "notice",
      "label": "Notice",
      "children": [{
        "value": "alert",
        "label": "Alert 警告"
      }, {
        "value": "loading",
        "label": "Loading 加载"
      }, {
        "value": "message",
        "label": "Message 消息提示"
      }, {
        "value": "message-box",
        "label": "MessageBox 弹框"
      }, {
        "value": "notification",
        "label": "Notification 通知"
      }]
    }, {
      "value": "navigation",
      "label": "Navigation",
      "children": [{
        "value": "menu",
        "label": "NavMenu 导航菜单"
      }, {
        "value": "tabs",
        "label": "Tabs 标签页"
      }, {
        "value": "breadcrumb",
        "label": "Breadcrumb 面包屑"
      }, {
        "value": "dropdown",
        "label": "Dropdown 下拉菜单"
      }, {
        "value": "steps",
        "label": "Steps 步骤条"
      }]
    }, {
      "value": "others",
      "label": "Others",
      "children": [{
        "value": "dialog",
        "label": "Dialog 对话框"
      }, {
        "value": "tooltip",
        "label": "Tooltip 文字提示"
      }, {
        "value": "popover",
        "label": "Popover 弹出框"
      }, {
        "value": "card",
        "label": "Card 卡片"
      }, {
        "value": "carousel",
        "label": "Carousel 走马灯"
      }, {
        "value": "collapse",
        "label": "Collapse 折叠面板"
      }]
    }]
  }, {
    "value": "ziyuan",
    "label": "资源",
    "children": [{
      "value": "axure",
      "label": "Axure Components"
    }, {
      "value": "sketch",
      "label": "Sketch Templates"
    }, {
      "value": "jiaohu",
      "label": "组件交互文档"
    }]
  }],
  "value3": true,
  "value4": 28,
  "value5": "",
  "value6": "",
  "value7": 1,
  "radio1": 3,
  "ruleForm": {
    "name": "",
    "region": "",
    "date1": "",
    "date2": "",
    "delivery": false,
    "type": [],
    "resource": "",
    "desc": ""
  },
  "rules": {
    "name": [{
      "required": true,
      "message": "请输入活动名称",
      "trigger": "blur"
    }, {
      "min": 3,
      "max": 5,
      "message": "长度在 3 到 5 个字符",
      "trigger": "blur"
    }],
    "region": [{
      "required": true,
      "message": "请选择活动区域",
      "trigger": "change"
    }],
    "date1": [{
      "type": "date",
      "required": true,
      "message": "请选择日期",
      "trigger": "change"
    }],
    "date2": [{
      "type": "date",
      "required": true,
      "message": "请选择时间",
      "trigger": "change"
    }],
    "type": [{
      "type": "array",
      "required": true,
      "message": "请至少选择一个活动性质",
      "trigger": "change"
    }],
    "resource": [{
      "required": true,
      "message": "请选择活动资源",
      "trigger": "change"
    }],
    "desc": [{
      "required": true,
      "message": "请填写活动形式",
      "trigger": "blur"
    }]
  },
  "formInline": {
    "user": "",
    "region": ""
  },
  "url": "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  "calendarValue": "2022-01-28T09:38:30.231Z",
  "reverse": true,
  "activities": [{
    "content": "活动按期开始",
    "timestamp": "2018-04-15"
  }, {
    "content": "通过审核",
    "timestamp": "2018-04-13"
  }, {
    "content": "创建成功",
    "timestamp": "2018-04-11"
  }],
  "collapseActiveNames": ["1"],
  "active": 1,
  "activeName": "second",
  "activeIndex2": "1",
  "data": [{
    "label": "一级 1",
    "children": [{
      "label": "二级 1-1",
      "children": [{
        "label": "三级 1-1-1"
      }]
    }]
  }, {
    "label": "一级 2",
    "children": [{
      "label": "二级 2-1",
      "children": [{
        "label": "三级 2-1-1"
      }]
    }, {
      "label": "二级 2-2",
      "children": [{
        "label": "三级 2-2-1"
      }]
    }]
  }, {
    "label": "一级 3",
    "children": [{
      "label": "二级 3-1",
      "children": [{
        "label": "三级 3-1-1"
      }]
    }, {
      "label": "二级 3-2",
      "children": [{
        "label": "三级 3-2-1"
      }]
    }]
  }],
  "defaultProps": {
    "children": "children",
    "label": "label"
  },
  "url4": "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  "currentPage": 1,
  "tableData": [{
    "date": "2016-05-02",
    "name": "王小虎",
    "address": "上海市普陀区金沙江路 1518 弄"
  }, {
    "date": "2016-05-04",
    "name": "王小虎",
    "address": "上海市普陀区金沙江路 1517 弄"
  }, {
    "date": "2016-05-01",
    "name": "王小虎",
    "address": "上海市普陀区金沙江路 1519 弄"
  }, {
    "date": "2016-05-03",
    "name": "王小虎",
    "address": "上海市普陀区金沙江路 1516 弄"
  }],
  "propList": [{
    "label": "姓名",
    "prop": "name"
  }, {
    "label": "日期",
    "prop": "date"
  }, {
    "label": "地址",
    "prop": "address"
  }, {
    "label": "动态组件",
    "prop": "lc-component",
    "component": "el-switch"
  }],
  "time1": 1643362530301,
  "time2": 1643103510301,
  "currentRate": 0,
  "gradientColor": {
    "0%": "#3fecff",
    "100%": "#6149f6"
  },
  "activeNames": ["1"],
  "time": 108000000,
  "list": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "loading": false,
  "finished": false,
  "stepValue": 1,
  "username": "",
  "password": "",
  "slideValue": 30,
  "slideArrValue": [10, 60],
  "search": "",
  "show": false,
  "columns": ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
  "checked": true,
  "date": "",
  "checked9": true,
  "minDate": "2019-12-31T16:00:00.000Z",
  "maxDate": "2025-10-31T16:00:00.000Z",
  "currentDate": "2022-01-28T09:38:30.374Z",
  "tel": "",
  "text": "",
  "digit": "",
  "number": "",
  "result": [],
  "radio10": "1",
  "checked12": false,
  "currentPage13": 1,
  "activeKey": 0,
  "active14": 2,
  "areaList": {},
  "searchResult": [],
  "chosenAddressId": "1",
  "list15": [{
    "lc_id": "1",
    "name": "张三",
    "tel": "13000000000",
    "address": "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
    "isDefault": true
  }, {
    "lc_id": "2",
    "name": "李四",
    "tel": "1310000000",
    "address": "浙江省杭州市拱墅区莫干山路 50 号"
  }],
  "disabledList": [{
    "lc_id": "3",
    "name": "王五",
    "tel": "1320000000",
    "address": "浙江省杭州市滨江区江南大道 15 号"
  }]
});
// CONCATENATED MODULE: ./src/map/template.index.js
/* harmony default export */ var template_index = ({
  "pN7LcslOJR": {
    "div": {
      "lc_id": "pN7LcslOJR",
      "__children": [{
        "div": {
          "lc_id": "jr3zjZhDqz",
          "__children": [{
            "div": {
              "class": "demonstration-antd",
              "lc_id": "fRuphkeIKC",
              "__children": [],
              "__text__": "Button 按钮"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "k+t156NFRt",
              "__children": [{
                "a-button": {
                  "lc-mark": "",
                  "type": "primary",
                  "lc_id": "nAzBA7pWsh",
                  "__children": [],
                  "__text__": "Primary Button"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "lc_id": "rMeh8dMkYC",
                  "__children": [],
                  "__text__": "Default Button"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "type": "dashed",
                  "lc_id": "5+qgpMthx2",
                  "__children": [],
                  "__text__": "Dashed Button"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "type": "text",
                  "lc_id": "UoFnE3nJv9",
                  "__children": [],
                  "__text__": "Text Button"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "type": "link",
                  "lc_id": "kIu/utVuLA",
                  "__children": [],
                  "__text__": "Link Button"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "type": "primary",
                  "danger": "",
                  "lc_id": "BQ4AmOTe8D",
                  "__children": [],
                  "__text__": "Primary"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "danger": "",
                  "lc_id": "98eGo5RB7m",
                  "__children": [],
                  "__text__": "Default"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "O9JGjMpAKq",
          "__children": [{
            "div": {
              "class": "demonstration-antd",
              "lc_id": "4rqJIQ2Mzz",
              "__children": [],
              "__text__": "ButtonGroup 按钮组"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "pONPOBBNro",
              "__children": [{
                "a-button": {
                  "lc-mark": "",
                  "type": "primary",
                  "block": "",
                  "lc_id": "YmqXKUio63",
                  "__children": [],
                  "__text__": "Primary"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "block": "",
                  "lc_id": "ObahIU2Sa7",
                  "__children": [],
                  "__text__": "Default"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "type": "dashed",
                  "block": "",
                  "lc_id": "rqL+CH9y8P",
                  "__children": [],
                  "__text__": "Dashed"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "danger": "",
                  "block": "",
                  "lc_id": "97Yrk61JBe",
                  "__children": [],
                  "__text__": "Danger"
                },
                "__key__": "__children"
              }, {
                "a-button": {
                  "lc-mark": "",
                  "type": "link",
                  "block": "",
                  "lc_id": "P7LUIU1mZb",
                  "__children": [],
                  "__text__": "Link"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "jr3zjZhDqz": {
    "div": {
      "lc_id": "jr3zjZhDqz",
      "__children": [{
        "div": {
          "class": "demonstration-antd",
          "lc_id": "fRuphkeIKC",
          "__children": [],
          "__text__": "Button 按钮"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "k+t156NFRt",
          "__children": [{
            "a-button": {
              "lc-mark": "",
              "type": "primary",
              "lc_id": "nAzBA7pWsh",
              "__children": [],
              "__text__": "Primary Button"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "lc_id": "rMeh8dMkYC",
              "__children": [],
              "__text__": "Default Button"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "type": "dashed",
              "lc_id": "5+qgpMthx2",
              "__children": [],
              "__text__": "Dashed Button"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "type": "text",
              "lc_id": "UoFnE3nJv9",
              "__children": [],
              "__text__": "Text Button"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "type": "link",
              "lc_id": "kIu/utVuLA",
              "__children": [],
              "__text__": "Link Button"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "type": "primary",
              "danger": "",
              "lc_id": "BQ4AmOTe8D",
              "__children": [],
              "__text__": "Primary"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "danger": "",
              "lc_id": "98eGo5RB7m",
              "__children": [],
              "__text__": "Default"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "fRuphkeIKC": {
    "div": {
      "class": "demonstration-antd",
      "lc_id": "fRuphkeIKC",
      "__children": [],
      "__text__": "Button 按钮"
    }
  },
  "k+t156NFRt": {
    "div": {
      "lc_id": "k+t156NFRt",
      "__children": [{
        "a-button": {
          "lc-mark": "",
          "type": "primary",
          "lc_id": "nAzBA7pWsh",
          "__children": [],
          "__text__": "Primary Button"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "lc_id": "rMeh8dMkYC",
          "__children": [],
          "__text__": "Default Button"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "type": "dashed",
          "lc_id": "5+qgpMthx2",
          "__children": [],
          "__text__": "Dashed Button"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "type": "text",
          "lc_id": "UoFnE3nJv9",
          "__children": [],
          "__text__": "Text Button"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "type": "link",
          "lc_id": "kIu/utVuLA",
          "__children": [],
          "__text__": "Link Button"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "type": "primary",
          "danger": "",
          "lc_id": "BQ4AmOTe8D",
          "__children": [],
          "__text__": "Primary"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "danger": "",
          "lc_id": "98eGo5RB7m",
          "__children": [],
          "__text__": "Default"
        },
        "__key__": "__children"
      }]
    }
  },
  "nAzBA7pWsh": {
    "a-button": {
      "lc-mark": "",
      "type": "primary",
      "lc_id": "nAzBA7pWsh",
      "__children": [],
      "__text__": "Primary Button"
    }
  },
  "rMeh8dMkYC": {
    "a-button": {
      "lc-mark": "",
      "lc_id": "rMeh8dMkYC",
      "__children": [],
      "__text__": "Default Button"
    }
  },
  "5+qgpMthx2": {
    "a-button": {
      "lc-mark": "",
      "type": "dashed",
      "lc_id": "5+qgpMthx2",
      "__children": [],
      "__text__": "Dashed Button"
    }
  },
  "UoFnE3nJv9": {
    "a-button": {
      "lc-mark": "",
      "type": "text",
      "lc_id": "UoFnE3nJv9",
      "__children": [],
      "__text__": "Text Button"
    }
  },
  "kIu/utVuLA": {
    "a-button": {
      "lc-mark": "",
      "type": "link",
      "lc_id": "kIu/utVuLA",
      "__children": [],
      "__text__": "Link Button"
    }
  },
  "BQ4AmOTe8D": {
    "a-button": {
      "lc-mark": "",
      "type": "primary",
      "danger": "",
      "lc_id": "BQ4AmOTe8D",
      "__children": [],
      "__text__": "Primary"
    }
  },
  "98eGo5RB7m": {
    "a-button": {
      "lc-mark": "",
      "danger": "",
      "lc_id": "98eGo5RB7m",
      "__children": [],
      "__text__": "Default"
    }
  },
  "O9JGjMpAKq": {
    "div": {
      "lc_id": "O9JGjMpAKq",
      "__children": [{
        "div": {
          "class": "demonstration-antd",
          "lc_id": "4rqJIQ2Mzz",
          "__children": [],
          "__text__": "ButtonGroup 按钮组"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "pONPOBBNro",
          "__children": [{
            "a-button": {
              "lc-mark": "",
              "type": "primary",
              "block": "",
              "lc_id": "YmqXKUio63",
              "__children": [],
              "__text__": "Primary"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "block": "",
              "lc_id": "ObahIU2Sa7",
              "__children": [],
              "__text__": "Default"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "type": "dashed",
              "block": "",
              "lc_id": "rqL+CH9y8P",
              "__children": [],
              "__text__": "Dashed"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "danger": "",
              "block": "",
              "lc_id": "97Yrk61JBe",
              "__children": [],
              "__text__": "Danger"
            },
            "__key__": "__children"
          }, {
            "a-button": {
              "lc-mark": "",
              "type": "link",
              "block": "",
              "lc_id": "P7LUIU1mZb",
              "__children": [],
              "__text__": "Link"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "4rqJIQ2Mzz": {
    "div": {
      "class": "demonstration-antd",
      "lc_id": "4rqJIQ2Mzz",
      "__children": [],
      "__text__": "ButtonGroup 按钮组"
    }
  },
  "pONPOBBNro": {
    "div": {
      "lc_id": "pONPOBBNro",
      "__children": [{
        "a-button": {
          "lc-mark": "",
          "type": "primary",
          "block": "",
          "lc_id": "YmqXKUio63",
          "__children": [],
          "__text__": "Primary"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "block": "",
          "lc_id": "ObahIU2Sa7",
          "__children": [],
          "__text__": "Default"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "type": "dashed",
          "block": "",
          "lc_id": "rqL+CH9y8P",
          "__children": [],
          "__text__": "Dashed"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "danger": "",
          "block": "",
          "lc_id": "97Yrk61JBe",
          "__children": [],
          "__text__": "Danger"
        },
        "__key__": "__children"
      }, {
        "a-button": {
          "lc-mark": "",
          "type": "link",
          "block": "",
          "lc_id": "P7LUIU1mZb",
          "__children": [],
          "__text__": "Link"
        },
        "__key__": "__children"
      }]
    }
  },
  "YmqXKUio63": {
    "a-button": {
      "lc-mark": "",
      "type": "primary",
      "block": "",
      "lc_id": "YmqXKUio63",
      "__children": [],
      "__text__": "Primary"
    }
  },
  "ObahIU2Sa7": {
    "a-button": {
      "lc-mark": "",
      "block": "",
      "lc_id": "ObahIU2Sa7",
      "__children": [],
      "__text__": "Default"
    }
  },
  "rqL+CH9y8P": {
    "a-button": {
      "lc-mark": "",
      "type": "dashed",
      "block": "",
      "lc_id": "rqL+CH9y8P",
      "__children": [],
      "__text__": "Dashed"
    }
  },
  "97Yrk61JBe": {
    "a-button": {
      "lc-mark": "",
      "danger": "",
      "block": "",
      "lc_id": "97Yrk61JBe",
      "__children": [],
      "__text__": "Danger"
    }
  },
  "P7LUIU1mZb": {
    "a-button": {
      "lc-mark": "",
      "type": "link",
      "block": "",
      "lc_id": "P7LUIU1mZb",
      "__children": [],
      "__text__": "Link"
    }
  },
  "Wys3+gAG6o": {
    "div": {
      "lc_id": "Wys3+gAG6o",
      "__children": [{
        "div": {
          "lc_id": "xz+q4JsE0H",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "QOAgJcuNgl",
              "__children": [],
              "__text__": "Button 默认按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "lc_id": "CsCNd5VsAG",
              "__children": [],
              "__text__": "默认按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "primary",
              "lc_id": "86aZgUKBRW",
              "__children": [],
              "__text__": "主要按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "success",
              "lc_id": "i9rRR1vGUu",
              "__children": [],
              "__text__": "成功按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "info",
              "lc_id": "KNdblHt7v/",
              "__children": [],
              "__text__": "信息按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "warning",
              "lc_id": "6xzwRUzCpX",
              "__children": [],
              "__text__": "警告按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "danger",
              "lc_id": "n/gRbf1hnb",
              "__children": [],
              "__text__": "危险按钮"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "aS+4+fs63u",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "eZqzsVXDsz",
              "__children": [],
              "__text__": "Button 朴素按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "plain": "",
              "lc_id": "BC7OoDacJj",
              "__children": [],
              "__text__": "朴素按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "primary",
              "plain": "",
              "lc_id": "bWC9CeWjjY",
              "__children": [],
              "__text__": "主要按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "success",
              "plain": "",
              "lc_id": "sVBJspZDuU",
              "__children": [],
              "__text__": "成功按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "info",
              "plain": "",
              "lc_id": "YUbh6jGrjF",
              "__children": [],
              "__text__": "信息按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "warning",
              "plain": "",
              "lc_id": "LOykTx4Sf0",
              "__children": [],
              "__text__": "警告按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "danger",
              "plain": "",
              "lc_id": "0hBjU/hwbY",
              "__children": [],
              "__text__": "危险按钮"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "TIyAo1YWH2",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "ci4hr/TXbi",
              "__children": [],
              "__text__": "Button 圆角按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "round": "",
              "lc_id": "JGOxzRnIcl",
              "__children": [],
              "__text__": "圆角按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "primary",
              "round": "",
              "lc_id": "GOolXgPQ8i",
              "__children": [],
              "__text__": "主要按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "success",
              "round": "",
              "lc_id": "QpK7RbxSP1",
              "__children": [],
              "__text__": "成功按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "info",
              "round": "",
              "lc_id": "rPNRcyrUBY",
              "__children": [],
              "__text__": "信息按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "warning",
              "round": "",
              "lc_id": "MCBR6sxh+2",
              "__children": [],
              "__text__": "警告按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "danger",
              "round": "",
              "lc_id": "KCAVqthQwo",
              "__children": [],
              "__text__": "危险按钮"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "RdvVbD8tRt",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "MCe1tz7lec",
              "__children": [],
              "__text__": "Button 文字按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "text",
              "lc_id": "VzeBeEyMRU",
              "__children": [],
              "__text__": "文字按钮"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "lc-mark": "",
              "type": "text",
              "disabled": "",
              "lc_id": "gGBAHuLrE2",
              "__children": [],
              "__text__": "文字按钮"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "fiJ0b+a2C7",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "NadQOxXAQD",
              "__children": [],
              "__text__": "Button 按钮组"
            },
            "__key__": "__children"
          }, {
            "el-button-group": {
              "lc-mark": "",
              "lc_id": "zPylslsF8c",
              "__children": [{
                "el-button": {
                  "type": "primary",
                  "lc_id": "YcgENB34wv",
                  "__children": [],
                  "__text__": "上一页"
                },
                "__key__": "__children"
              }, {
                "el-button": {
                  "type": "primary",
                  "lc_id": "7ZtWxMoRg5",
                  "__children": [],
                  "__text__": "下一页"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "x1oSPpUpOu",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "uVL6JgP+Au",
              "__children": [],
              "__text__": "Link 文字链接"
            },
            "__key__": "__children"
          }, {
            "el-link": {
              "lc-mark": "",
              "lc_id": "dsEhJ0nNvP",
              "__children": [],
              "__text__": "默认链接"
            },
            "__key__": "__children"
          }, {
            "el-link": {
              "lc-mark": "",
              "type": "primary",
              "lc_id": "b0ksqSWND7",
              "__children": [],
              "__text__": "主要链接"
            },
            "__key__": "__children"
          }, {
            "el-link": {
              "lc-mark": "",
              "type": "success",
              "lc_id": "n0JFscE5rV",
              "__children": [],
              "__text__": "成功链接"
            },
            "__key__": "__children"
          }, {
            "el-link": {
              "lc-mark": "",
              "type": "warning",
              "lc_id": "xZ3qu7QdEE",
              "__children": [],
              "__text__": "警告链接"
            },
            "__key__": "__children"
          }, {
            "el-link": {
              "lc-mark": "",
              "type": "danger",
              "lc_id": "DxB6pyqUDJ",
              "__children": [],
              "__text__": "危险链接"
            },
            "__key__": "__children"
          }, {
            "el-link": {
              "lc-mark": "",
              "type": "info",
              "lc_id": "oWXSle5p3a",
              "__children": [],
              "__text__": "信息链接"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "XE215BO7ZG",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "dIss2fOIh1",
              "__children": [],
              "__text__": "Tag 标签"
            },
            "__key__": "__children"
          }, {
            "el-tag": {
              "lc-mark": "",
              "lc_id": "srSB/cYw2J",
              "__children": [],
              "__text__": "标签一"
            },
            "__key__": "__children"
          }, {
            "el-tag": {
              "lc-mark": "",
              "type": "success",
              "lc_id": "LRJZ1ZP4ZH",
              "__children": [],
              "__text__": "标签二"
            },
            "__key__": "__children"
          }, {
            "el-tag": {
              "lc-mark": "",
              "type": "info",
              "lc_id": "B+b33TM6FV",
              "__children": [],
              "__text__": "标签三"
            },
            "__key__": "__children"
          }, {
            "el-tag": {
              "lc-mark": "",
              "type": "warning",
              "lc_id": "VRus6unUUj",
              "__children": [],
              "__text__": "标签四"
            },
            "__key__": "__children"
          }, {
            "el-tag": {
              "lc-mark": "",
              "type": "danger",
              "lc_id": "7MofqTTFPE",
              "__children": [],
              "__text__": "标签五"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "MWF8TZpYmQ",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "ILdDu9StTB",
              "__children": [],
              "__text__": "Avatar 头像"
            },
            "__key__": "__children"
          }, {
            "el-avatar": {
              "lc-mark": "",
              ":size": "50",
              ":src": "circleUrl",
              "lc_id": "fRttsgKaqk",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-avatar": {
              "lc-mark": "",
              "shape": "square",
              ":size": "50",
              ":src": "squareUrl",
              "lc_id": "m8hK+IsKji",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "xz+q4JsE0H": {
    "div": {
      "lc_id": "xz+q4JsE0H",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "QOAgJcuNgl",
          "__children": [],
          "__text__": "Button 默认按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "lc_id": "CsCNd5VsAG",
          "__children": [],
          "__text__": "默认按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "primary",
          "lc_id": "86aZgUKBRW",
          "__children": [],
          "__text__": "主要按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "success",
          "lc_id": "i9rRR1vGUu",
          "__children": [],
          "__text__": "成功按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "info",
          "lc_id": "KNdblHt7v/",
          "__children": [],
          "__text__": "信息按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "warning",
          "lc_id": "6xzwRUzCpX",
          "__children": [],
          "__text__": "警告按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "danger",
          "lc_id": "n/gRbf1hnb",
          "__children": [],
          "__text__": "危险按钮"
        },
        "__key__": "__children"
      }]
    }
  },
  "QOAgJcuNgl": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "QOAgJcuNgl",
      "__children": [],
      "__text__": "Button 默认按钮"
    }
  },
  "CsCNd5VsAG": {
    "el-button": {
      "lc-mark": "",
      "lc_id": "CsCNd5VsAG",
      "__children": [],
      "__text__": "默认按钮"
    }
  },
  "86aZgUKBRW": {
    "el-button": {
      "lc-mark": "",
      "type": "primary",
      "lc_id": "86aZgUKBRW",
      "__children": [],
      "__text__": "主要按钮"
    }
  },
  "i9rRR1vGUu": {
    "el-button": {
      "lc-mark": "",
      "type": "success",
      "lc_id": "i9rRR1vGUu",
      "__children": [],
      "__text__": "成功按钮"
    }
  },
  "KNdblHt7v/": {
    "el-button": {
      "lc-mark": "",
      "type": "info",
      "lc_id": "KNdblHt7v/",
      "__children": [],
      "__text__": "信息按钮"
    }
  },
  "6xzwRUzCpX": {
    "el-button": {
      "lc-mark": "",
      "type": "warning",
      "lc_id": "6xzwRUzCpX",
      "__children": [],
      "__text__": "警告按钮"
    }
  },
  "n/gRbf1hnb": {
    "el-button": {
      "lc-mark": "",
      "type": "danger",
      "lc_id": "n/gRbf1hnb",
      "__children": [],
      "__text__": "危险按钮"
    }
  },
  "aS+4+fs63u": {
    "div": {
      "lc_id": "aS+4+fs63u",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "eZqzsVXDsz",
          "__children": [],
          "__text__": "Button 朴素按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "plain": "",
          "lc_id": "BC7OoDacJj",
          "__children": [],
          "__text__": "朴素按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "primary",
          "plain": "",
          "lc_id": "bWC9CeWjjY",
          "__children": [],
          "__text__": "主要按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "success",
          "plain": "",
          "lc_id": "sVBJspZDuU",
          "__children": [],
          "__text__": "成功按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "info",
          "plain": "",
          "lc_id": "YUbh6jGrjF",
          "__children": [],
          "__text__": "信息按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "warning",
          "plain": "",
          "lc_id": "LOykTx4Sf0",
          "__children": [],
          "__text__": "警告按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "danger",
          "plain": "",
          "lc_id": "0hBjU/hwbY",
          "__children": [],
          "__text__": "危险按钮"
        },
        "__key__": "__children"
      }]
    }
  },
  "eZqzsVXDsz": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "eZqzsVXDsz",
      "__children": [],
      "__text__": "Button 朴素按钮"
    }
  },
  "BC7OoDacJj": {
    "el-button": {
      "lc-mark": "",
      "plain": "",
      "lc_id": "BC7OoDacJj",
      "__children": [],
      "__text__": "朴素按钮"
    }
  },
  "bWC9CeWjjY": {
    "el-button": {
      "lc-mark": "",
      "type": "primary",
      "plain": "",
      "lc_id": "bWC9CeWjjY",
      "__children": [],
      "__text__": "主要按钮"
    }
  },
  "sVBJspZDuU": {
    "el-button": {
      "lc-mark": "",
      "type": "success",
      "plain": "",
      "lc_id": "sVBJspZDuU",
      "__children": [],
      "__text__": "成功按钮"
    }
  },
  "YUbh6jGrjF": {
    "el-button": {
      "lc-mark": "",
      "type": "info",
      "plain": "",
      "lc_id": "YUbh6jGrjF",
      "__children": [],
      "__text__": "信息按钮"
    }
  },
  "LOykTx4Sf0": {
    "el-button": {
      "lc-mark": "",
      "type": "warning",
      "plain": "",
      "lc_id": "LOykTx4Sf0",
      "__children": [],
      "__text__": "警告按钮"
    }
  },
  "0hBjU/hwbY": {
    "el-button": {
      "lc-mark": "",
      "type": "danger",
      "plain": "",
      "lc_id": "0hBjU/hwbY",
      "__children": [],
      "__text__": "危险按钮"
    }
  },
  "TIyAo1YWH2": {
    "div": {
      "lc_id": "TIyAo1YWH2",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "ci4hr/TXbi",
          "__children": [],
          "__text__": "Button 圆角按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "round": "",
          "lc_id": "JGOxzRnIcl",
          "__children": [],
          "__text__": "圆角按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "primary",
          "round": "",
          "lc_id": "GOolXgPQ8i",
          "__children": [],
          "__text__": "主要按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "success",
          "round": "",
          "lc_id": "QpK7RbxSP1",
          "__children": [],
          "__text__": "成功按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "info",
          "round": "",
          "lc_id": "rPNRcyrUBY",
          "__children": [],
          "__text__": "信息按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "warning",
          "round": "",
          "lc_id": "MCBR6sxh+2",
          "__children": [],
          "__text__": "警告按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "danger",
          "round": "",
          "lc_id": "KCAVqthQwo",
          "__children": [],
          "__text__": "危险按钮"
        },
        "__key__": "__children"
      }]
    }
  },
  "ci4hr/TXbi": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "ci4hr/TXbi",
      "__children": [],
      "__text__": "Button 圆角按钮"
    }
  },
  "JGOxzRnIcl": {
    "el-button": {
      "lc-mark": "",
      "round": "",
      "lc_id": "JGOxzRnIcl",
      "__children": [],
      "__text__": "圆角按钮"
    }
  },
  "GOolXgPQ8i": {
    "el-button": {
      "lc-mark": "",
      "type": "primary",
      "round": "",
      "lc_id": "GOolXgPQ8i",
      "__children": [],
      "__text__": "主要按钮"
    }
  },
  "QpK7RbxSP1": {
    "el-button": {
      "lc-mark": "",
      "type": "success",
      "round": "",
      "lc_id": "QpK7RbxSP1",
      "__children": [],
      "__text__": "成功按钮"
    }
  },
  "rPNRcyrUBY": {
    "el-button": {
      "lc-mark": "",
      "type": "info",
      "round": "",
      "lc_id": "rPNRcyrUBY",
      "__children": [],
      "__text__": "信息按钮"
    }
  },
  "MCBR6sxh+2": {
    "el-button": {
      "lc-mark": "",
      "type": "warning",
      "round": "",
      "lc_id": "MCBR6sxh+2",
      "__children": [],
      "__text__": "警告按钮"
    }
  },
  "KCAVqthQwo": {
    "el-button": {
      "lc-mark": "",
      "type": "danger",
      "round": "",
      "lc_id": "KCAVqthQwo",
      "__children": [],
      "__text__": "危险按钮"
    }
  },
  "RdvVbD8tRt": {
    "div": {
      "lc_id": "RdvVbD8tRt",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "MCe1tz7lec",
          "__children": [],
          "__text__": "Button 文字按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "text",
          "lc_id": "VzeBeEyMRU",
          "__children": [],
          "__text__": "文字按钮"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "lc-mark": "",
          "type": "text",
          "disabled": "",
          "lc_id": "gGBAHuLrE2",
          "__children": [],
          "__text__": "文字按钮"
        },
        "__key__": "__children"
      }]
    }
  },
  "MCe1tz7lec": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "MCe1tz7lec",
      "__children": [],
      "__text__": "Button 文字按钮"
    }
  },
  "VzeBeEyMRU": {
    "el-button": {
      "lc-mark": "",
      "type": "text",
      "lc_id": "VzeBeEyMRU",
      "__children": [],
      "__text__": "文字按钮"
    }
  },
  "gGBAHuLrE2": {
    "el-button": {
      "lc-mark": "",
      "type": "text",
      "disabled": "",
      "lc_id": "gGBAHuLrE2",
      "__children": [],
      "__text__": "文字按钮"
    }
  },
  "fiJ0b+a2C7": {
    "div": {
      "lc_id": "fiJ0b+a2C7",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "NadQOxXAQD",
          "__children": [],
          "__text__": "Button 按钮组"
        },
        "__key__": "__children"
      }, {
        "el-button-group": {
          "lc-mark": "",
          "lc_id": "zPylslsF8c",
          "__children": [{
            "el-button": {
              "type": "primary",
              "lc_id": "YcgENB34wv",
              "__children": [],
              "__text__": "上一页"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "type": "primary",
              "lc_id": "7ZtWxMoRg5",
              "__children": [],
              "__text__": "下一页"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "NadQOxXAQD": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "NadQOxXAQD",
      "__children": [],
      "__text__": "Button 按钮组"
    }
  },
  "zPylslsF8c": {
    "el-button-group": {
      "lc-mark": "",
      "lc_id": "zPylslsF8c",
      "__children": [{
        "el-button": {
          "type": "primary",
          "lc_id": "YcgENB34wv",
          "__children": [],
          "__text__": "上一页"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "type": "primary",
          "lc_id": "7ZtWxMoRg5",
          "__children": [],
          "__text__": "下一页"
        },
        "__key__": "__children"
      }]
    }
  },
  "YcgENB34wv": {
    "el-button": {
      "type": "primary",
      "lc_id": "YcgENB34wv",
      "__children": [],
      "__text__": "上一页"
    }
  },
  "7ZtWxMoRg5": {
    "el-button": {
      "type": "primary",
      "lc_id": "7ZtWxMoRg5",
      "__children": [],
      "__text__": "下一页"
    }
  },
  "x1oSPpUpOu": {
    "div": {
      "lc_id": "x1oSPpUpOu",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "uVL6JgP+Au",
          "__children": [],
          "__text__": "Link 文字链接"
        },
        "__key__": "__children"
      }, {
        "el-link": {
          "lc-mark": "",
          "lc_id": "dsEhJ0nNvP",
          "__children": [],
          "__text__": "默认链接"
        },
        "__key__": "__children"
      }, {
        "el-link": {
          "lc-mark": "",
          "type": "primary",
          "lc_id": "b0ksqSWND7",
          "__children": [],
          "__text__": "主要链接"
        },
        "__key__": "__children"
      }, {
        "el-link": {
          "lc-mark": "",
          "type": "success",
          "lc_id": "n0JFscE5rV",
          "__children": [],
          "__text__": "成功链接"
        },
        "__key__": "__children"
      }, {
        "el-link": {
          "lc-mark": "",
          "type": "warning",
          "lc_id": "xZ3qu7QdEE",
          "__children": [],
          "__text__": "警告链接"
        },
        "__key__": "__children"
      }, {
        "el-link": {
          "lc-mark": "",
          "type": "danger",
          "lc_id": "DxB6pyqUDJ",
          "__children": [],
          "__text__": "危险链接"
        },
        "__key__": "__children"
      }, {
        "el-link": {
          "lc-mark": "",
          "type": "info",
          "lc_id": "oWXSle5p3a",
          "__children": [],
          "__text__": "信息链接"
        },
        "__key__": "__children"
      }]
    }
  },
  "uVL6JgP+Au": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "uVL6JgP+Au",
      "__children": [],
      "__text__": "Link 文字链接"
    }
  },
  "dsEhJ0nNvP": {
    "el-link": {
      "lc-mark": "",
      "lc_id": "dsEhJ0nNvP",
      "__children": [],
      "__text__": "默认链接"
    }
  },
  "b0ksqSWND7": {
    "el-link": {
      "lc-mark": "",
      "type": "primary",
      "lc_id": "b0ksqSWND7",
      "__children": [],
      "__text__": "主要链接"
    }
  },
  "n0JFscE5rV": {
    "el-link": {
      "lc-mark": "",
      "type": "success",
      "lc_id": "n0JFscE5rV",
      "__children": [],
      "__text__": "成功链接"
    }
  },
  "xZ3qu7QdEE": {
    "el-link": {
      "lc-mark": "",
      "type": "warning",
      "lc_id": "xZ3qu7QdEE",
      "__children": [],
      "__text__": "警告链接"
    }
  },
  "DxB6pyqUDJ": {
    "el-link": {
      "lc-mark": "",
      "type": "danger",
      "lc_id": "DxB6pyqUDJ",
      "__children": [],
      "__text__": "危险链接"
    }
  },
  "oWXSle5p3a": {
    "el-link": {
      "lc-mark": "",
      "type": "info",
      "lc_id": "oWXSle5p3a",
      "__children": [],
      "__text__": "信息链接"
    }
  },
  "XE215BO7ZG": {
    "div": {
      "lc_id": "XE215BO7ZG",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "dIss2fOIh1",
          "__children": [],
          "__text__": "Tag 标签"
        },
        "__key__": "__children"
      }, {
        "el-tag": {
          "lc-mark": "",
          "lc_id": "srSB/cYw2J",
          "__children": [],
          "__text__": "标签一"
        },
        "__key__": "__children"
      }, {
        "el-tag": {
          "lc-mark": "",
          "type": "success",
          "lc_id": "LRJZ1ZP4ZH",
          "__children": [],
          "__text__": "标签二"
        },
        "__key__": "__children"
      }, {
        "el-tag": {
          "lc-mark": "",
          "type": "info",
          "lc_id": "B+b33TM6FV",
          "__children": [],
          "__text__": "标签三"
        },
        "__key__": "__children"
      }, {
        "el-tag": {
          "lc-mark": "",
          "type": "warning",
          "lc_id": "VRus6unUUj",
          "__children": [],
          "__text__": "标签四"
        },
        "__key__": "__children"
      }, {
        "el-tag": {
          "lc-mark": "",
          "type": "danger",
          "lc_id": "7MofqTTFPE",
          "__children": [],
          "__text__": "标签五"
        },
        "__key__": "__children"
      }]
    }
  },
  "dIss2fOIh1": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "dIss2fOIh1",
      "__children": [],
      "__text__": "Tag 标签"
    }
  },
  "srSB/cYw2J": {
    "el-tag": {
      "lc-mark": "",
      "lc_id": "srSB/cYw2J",
      "__children": [],
      "__text__": "标签一"
    }
  },
  "LRJZ1ZP4ZH": {
    "el-tag": {
      "lc-mark": "",
      "type": "success",
      "lc_id": "LRJZ1ZP4ZH",
      "__children": [],
      "__text__": "标签二"
    }
  },
  "B+b33TM6FV": {
    "el-tag": {
      "lc-mark": "",
      "type": "info",
      "lc_id": "B+b33TM6FV",
      "__children": [],
      "__text__": "标签三"
    }
  },
  "VRus6unUUj": {
    "el-tag": {
      "lc-mark": "",
      "type": "warning",
      "lc_id": "VRus6unUUj",
      "__children": [],
      "__text__": "标签四"
    }
  },
  "7MofqTTFPE": {
    "el-tag": {
      "lc-mark": "",
      "type": "danger",
      "lc_id": "7MofqTTFPE",
      "__children": [],
      "__text__": "标签五"
    }
  },
  "MWF8TZpYmQ": {
    "div": {
      "lc_id": "MWF8TZpYmQ",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "ILdDu9StTB",
          "__children": [],
          "__text__": "Avatar 头像"
        },
        "__key__": "__children"
      }, {
        "el-avatar": {
          "lc-mark": "",
          ":size": "50",
          ":src": "circleUrl",
          "lc_id": "fRttsgKaqk",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-avatar": {
          "lc-mark": "",
          "shape": "square",
          ":size": "50",
          ":src": "squareUrl",
          "lc_id": "m8hK+IsKji",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "ILdDu9StTB": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "ILdDu9StTB",
      "__children": [],
      "__text__": "Avatar 头像"
    }
  },
  "fRttsgKaqk": {
    "el-avatar": {
      "lc-mark": "",
      ":size": "50",
      ":src": "circleUrl",
      "lc_id": "fRttsgKaqk",
      "__children": []
    }
  },
  "m8hK+IsKji": {
    "el-avatar": {
      "lc-mark": "",
      "shape": "square",
      ":size": "50",
      ":src": "squareUrl",
      "lc_id": "m8hK+IsKji",
      "__children": []
    }
  },
  "svh5gymRbT": {
    "div": {
      "lc_id": "svh5gymRbT",
      "__children": [{
        "div": {
          "lc_id": "aklN6TcgSi",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "H9Bt++Jp23",
              "__children": [],
              "__text__": "Container 布局容器"
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc-mark": "",
              "lc_id": "skVZmFc8Z0",
              "__children": [{
                "el-header": {
                  "lc_id": "ReeksChIDL",
                  "__children": [],
                  "__text__": "Header"
                },
                "__key__": "__children"
              }, {
                "el-main": {
                  "lc_id": "RhO3CzVON+",
                  "__children": [],
                  "__text__": "Main"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc-mark": "",
              "lc_id": "OiFYUhn3lV",
              "__children": [{
                "el-header": {
                  "lc_id": "+FKCmp4cKF",
                  "__children": [],
                  "__text__": "Header"
                },
                "__key__": "__children"
              }, {
                "el-main": {
                  "lc_id": "YpteesQGLz",
                  "__children": [],
                  "__text__": "Main"
                },
                "__key__": "__children"
              }, {
                "el-footer": {
                  "lc_id": "KXY8exJPcM",
                  "__children": [],
                  "__text__": "Footer"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc-mark": "",
              "lc_id": "wk/2g93ahS",
              "__children": [{
                "el-aside": {
                  "width": "200px",
                  "lc_id": "l9E3pIb+2h",
                  "__children": [],
                  "__text__": "Aside"
                },
                "__key__": "__children"
              }, {
                "el-main": {
                  "lc_id": "bBKBRWXDOx",
                  "__children": [],
                  "__text__": "Main"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc-mark": "",
              "lc_id": "gbNSQP45GT",
              "__children": [{
                "el-header": {
                  "lc_id": "HF1qQoD4PL",
                  "__children": [],
                  "__text__": "Header"
                },
                "__key__": "__children"
              }, {
                "el-container": {
                  "lc_id": "ASkvJKvxcV",
                  "__children": [{
                    "el-aside": {
                      "width": "200px",
                      "lc_id": "9KXTLE0CeH",
                      "__children": [],
                      "__text__": "Aside"
                    },
                    "__key__": "__children"
                  }, {
                    "el-main": {
                      "lc_id": "7daXKj/Gvs",
                      "__children": [],
                      "__text__": "Main"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc-mark": "",
              "lc_id": "36KOMxGIdH",
              "__children": [{
                "el-header": {
                  "lc_id": "Sw6GvGV0eS",
                  "__children": [],
                  "__text__": "Header"
                },
                "__key__": "__children"
              }, {
                "el-container": {
                  "lc_id": "GHVYjFrX+h",
                  "__children": [{
                    "el-aside": {
                      "width": "200px",
                      "lc_id": "uw9FF7J6aL",
                      "__children": [],
                      "__text__": "Aside"
                    },
                    "__key__": "__children"
                  }, {
                    "el-container": {
                      "lc_id": "KvwMo2IxFx",
                      "__children": [{
                        "el-main": {
                          "lc_id": "Fk+eYCCPV2",
                          "__children": [],
                          "__text__": "Main"
                        },
                        "__key__": "__children"
                      }, {
                        "el-footer": {
                          "lc_id": "dUWCQrWVeT",
                          "__children": [],
                          "__text__": "Footer"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc-mark": "",
              "lc_id": "tL2ICEso4A",
              "__children": [{
                "el-aside": {
                  "width": "200px",
                  "lc_id": "csjsUzA+9Y",
                  "__children": [],
                  "__text__": "Aside"
                },
                "__key__": "__children"
              }, {
                "el-container": {
                  "lc_id": "iZYbDNFziC",
                  "__children": [{
                    "el-header": {
                      "lc_id": "vpuQLdTE6A",
                      "__children": [],
                      "__text__": "Header"
                    },
                    "__key__": "__children"
                  }, {
                    "el-main": {
                      "lc_id": "mgPG8ueRqA",
                      "__children": [],
                      "__text__": "Main"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc-mark": "",
              "lc_id": "SycDYJbUh8",
              "__children": [{
                "el-aside": {
                  "width": "200px",
                  "lc_id": "eCOdbsua/g",
                  "__children": [],
                  "__text__": "Aside"
                },
                "__key__": "__children"
              }, {
                "el-container": {
                  "lc_id": "RUKLeBxhhi",
                  "__children": [{
                    "el-header": {
                      "lc_id": "82WGwD/cl3",
                      "__children": [],
                      "__text__": "Header"
                    },
                    "__key__": "__children"
                  }, {
                    "el-main": {
                      "lc_id": "CtffCo/8Cy",
                      "__children": [],
                      "__text__": "Main"
                    },
                    "__key__": "__children"
                  }, {
                    "el-footer": {
                      "lc_id": "g0Jcmm2r+P",
                      "__children": [],
                      "__text__": "Footer"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "Lg787FEsDw",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "jlEgJZCE+i",
              "__children": [],
              "__text__": "Skeleton 骨架屏"
            },
            "__key__": "__children"
          }, {
            "el-skeleton": {
              "lc-mark": "",
              ":rows": "6",
              "animated": "",
              "lc_id": "4O9hfMet5s",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "D3MK6Iq3TG",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "D6xQ5qpO4B",
              "__children": [],
              "__text__": "Empty 空状态"
            },
            "__key__": "__children"
          }, {
            "el-empty": {
              "lc-mark": "",
              "description": "描述文字",
              "lc_id": "sFeXbcNwIE",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "tpbaaOn5XS",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "6Mnu6i7QPx",
              "__children": [],
              "__text__": "Result 结果"
            },
            "__key__": "__children"
          }, {
            "el-row": {
              "lc_id": "FMdEXTrYSx",
              "__children": [{
                "el-col": {
                  ":sm": "12",
                  ":lg": "6",
                  "lc_id": "deKtOM/g2K",
                  "__children": [{
                    "el-result": {
                      "icon": "success",
                      "lc-mark": "",
                      "title": "成功提示",
                      "subtitle": "请根据提示进行操作",
                      "lc_id": "iF6n6EUcmn",
                      "__children": [{
                        "template": {
                          "#extra": "",
                          "lc_id": "iJQp/8XeSP",
                          "__children": [{
                            "el-button": {
                              "type": "primary",
                              "size": "medium",
                              "lc_id": "UCFmR9EP+q",
                              "__children": [],
                              "__text__": "返回"
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":sm": "12",
                  ":lg": "6",
                  "lc_id": "1smWMRRuZr",
                  "__children": [{
                    "el-result": {
                      "icon": "warning",
                      "lc-mark": "",
                      "title": "警告提示",
                      "subtitle": "请根据提示进行操作",
                      "lc_id": "NIEZCy3gG0",
                      "__children": [{
                        "template": {
                          "#extra": "",
                          "lc_id": "c6Unj7eQIv",
                          "__children": [{
                            "el-button": {
                              "type": "primary",
                              "size": "medium",
                              "lc_id": "MDEtfbmEZd",
                              "__children": [],
                              "__text__": "返回"
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":sm": "12",
                  ":lg": "6",
                  "lc_id": "2zio5J9ljq",
                  "__children": [{
                    "el-result": {
                      "icon": "error",
                      "lc-mark": "",
                      "title": "错误提示",
                      "subtitle": "请根据提示进行操作",
                      "lc_id": "kLASzKidTD",
                      "__children": [{
                        "template": {
                          "#extra": "",
                          "lc_id": "rnIhJqKRjQ",
                          "__children": [{
                            "el-button": {
                              "type": "primary",
                              "size": "medium",
                              "lc_id": "MhrCBFBHlN",
                              "__children": [],
                              "__text__": "返回"
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":sm": "12",
                  ":lg": "6",
                  "lc_id": "h7xNXozZ0s",
                  "__children": [{
                    "el-result": {
                      "icon": "info",
                      "lc-mark": "",
                      "title": "信息提示",
                      "subtitle": "请根据提示进行操作",
                      "lc_id": "aDXqAjXsST",
                      "__children": [{
                        "template": {
                          "#extra": "",
                          "lc_id": "nHgp3LGSea",
                          "__children": [{
                            "el-button": {
                              "type": "primary",
                              "size": "medium",
                              "lc_id": "VURe3Zlhq0",
                              "__children": [],
                              "__text__": "返回"
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "aklN6TcgSi": {
    "div": {
      "lc_id": "aklN6TcgSi",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "H9Bt++Jp23",
          "__children": [],
          "__text__": "Container 布局容器"
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc-mark": "",
          "lc_id": "skVZmFc8Z0",
          "__children": [{
            "el-header": {
              "lc_id": "ReeksChIDL",
              "__children": [],
              "__text__": "Header"
            },
            "__key__": "__children"
          }, {
            "el-main": {
              "lc_id": "RhO3CzVON+",
              "__children": [],
              "__text__": "Main"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc-mark": "",
          "lc_id": "OiFYUhn3lV",
          "__children": [{
            "el-header": {
              "lc_id": "+FKCmp4cKF",
              "__children": [],
              "__text__": "Header"
            },
            "__key__": "__children"
          }, {
            "el-main": {
              "lc_id": "YpteesQGLz",
              "__children": [],
              "__text__": "Main"
            },
            "__key__": "__children"
          }, {
            "el-footer": {
              "lc_id": "KXY8exJPcM",
              "__children": [],
              "__text__": "Footer"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc-mark": "",
          "lc_id": "wk/2g93ahS",
          "__children": [{
            "el-aside": {
              "width": "200px",
              "lc_id": "l9E3pIb+2h",
              "__children": [],
              "__text__": "Aside"
            },
            "__key__": "__children"
          }, {
            "el-main": {
              "lc_id": "bBKBRWXDOx",
              "__children": [],
              "__text__": "Main"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc-mark": "",
          "lc_id": "gbNSQP45GT",
          "__children": [{
            "el-header": {
              "lc_id": "HF1qQoD4PL",
              "__children": [],
              "__text__": "Header"
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc_id": "ASkvJKvxcV",
              "__children": [{
                "el-aside": {
                  "width": "200px",
                  "lc_id": "9KXTLE0CeH",
                  "__children": [],
                  "__text__": "Aside"
                },
                "__key__": "__children"
              }, {
                "el-main": {
                  "lc_id": "7daXKj/Gvs",
                  "__children": [],
                  "__text__": "Main"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc-mark": "",
          "lc_id": "36KOMxGIdH",
          "__children": [{
            "el-header": {
              "lc_id": "Sw6GvGV0eS",
              "__children": [],
              "__text__": "Header"
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc_id": "GHVYjFrX+h",
              "__children": [{
                "el-aside": {
                  "width": "200px",
                  "lc_id": "uw9FF7J6aL",
                  "__children": [],
                  "__text__": "Aside"
                },
                "__key__": "__children"
              }, {
                "el-container": {
                  "lc_id": "KvwMo2IxFx",
                  "__children": [{
                    "el-main": {
                      "lc_id": "Fk+eYCCPV2",
                      "__children": [],
                      "__text__": "Main"
                    },
                    "__key__": "__children"
                  }, {
                    "el-footer": {
                      "lc_id": "dUWCQrWVeT",
                      "__children": [],
                      "__text__": "Footer"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc-mark": "",
          "lc_id": "tL2ICEso4A",
          "__children": [{
            "el-aside": {
              "width": "200px",
              "lc_id": "csjsUzA+9Y",
              "__children": [],
              "__text__": "Aside"
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc_id": "iZYbDNFziC",
              "__children": [{
                "el-header": {
                  "lc_id": "vpuQLdTE6A",
                  "__children": [],
                  "__text__": "Header"
                },
                "__key__": "__children"
              }, {
                "el-main": {
                  "lc_id": "mgPG8ueRqA",
                  "__children": [],
                  "__text__": "Main"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc-mark": "",
          "lc_id": "SycDYJbUh8",
          "__children": [{
            "el-aside": {
              "width": "200px",
              "lc_id": "eCOdbsua/g",
              "__children": [],
              "__text__": "Aside"
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc_id": "RUKLeBxhhi",
              "__children": [{
                "el-header": {
                  "lc_id": "82WGwD/cl3",
                  "__children": [],
                  "__text__": "Header"
                },
                "__key__": "__children"
              }, {
                "el-main": {
                  "lc_id": "CtffCo/8Cy",
                  "__children": [],
                  "__text__": "Main"
                },
                "__key__": "__children"
              }, {
                "el-footer": {
                  "lc_id": "g0Jcmm2r+P",
                  "__children": [],
                  "__text__": "Footer"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "H9Bt++Jp23": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "H9Bt++Jp23",
      "__children": [],
      "__text__": "Container 布局容器"
    }
  },
  "skVZmFc8Z0": {
    "el-container": {
      "lc-mark": "",
      "lc_id": "skVZmFc8Z0",
      "__children": [{
        "el-header": {
          "lc_id": "ReeksChIDL",
          "__children": [],
          "__text__": "Header"
        },
        "__key__": "__children"
      }, {
        "el-main": {
          "lc_id": "RhO3CzVON+",
          "__children": [],
          "__text__": "Main"
        },
        "__key__": "__children"
      }]
    }
  },
  "ReeksChIDL": {
    "el-header": {
      "lc_id": "ReeksChIDL",
      "__children": [],
      "__text__": "Header"
    }
  },
  "RhO3CzVON+": {
    "el-main": {
      "lc_id": "RhO3CzVON+",
      "__children": [],
      "__text__": "Main"
    }
  },
  "OiFYUhn3lV": {
    "el-container": {
      "lc-mark": "",
      "lc_id": "OiFYUhn3lV",
      "__children": [{
        "el-header": {
          "lc_id": "+FKCmp4cKF",
          "__children": [],
          "__text__": "Header"
        },
        "__key__": "__children"
      }, {
        "el-main": {
          "lc_id": "YpteesQGLz",
          "__children": [],
          "__text__": "Main"
        },
        "__key__": "__children"
      }, {
        "el-footer": {
          "lc_id": "KXY8exJPcM",
          "__children": [],
          "__text__": "Footer"
        },
        "__key__": "__children"
      }]
    }
  },
  "+FKCmp4cKF": {
    "el-header": {
      "lc_id": "+FKCmp4cKF",
      "__children": [],
      "__text__": "Header"
    }
  },
  "YpteesQGLz": {
    "el-main": {
      "lc_id": "YpteesQGLz",
      "__children": [],
      "__text__": "Main"
    }
  },
  "KXY8exJPcM": {
    "el-footer": {
      "lc_id": "KXY8exJPcM",
      "__children": [],
      "__text__": "Footer"
    }
  },
  "wk/2g93ahS": {
    "el-container": {
      "lc-mark": "",
      "lc_id": "wk/2g93ahS",
      "__children": [{
        "el-aside": {
          "width": "200px",
          "lc_id": "l9E3pIb+2h",
          "__children": [],
          "__text__": "Aside"
        },
        "__key__": "__children"
      }, {
        "el-main": {
          "lc_id": "bBKBRWXDOx",
          "__children": [],
          "__text__": "Main"
        },
        "__key__": "__children"
      }]
    }
  },
  "l9E3pIb+2h": {
    "el-aside": {
      "width": "200px",
      "lc_id": "l9E3pIb+2h",
      "__children": [],
      "__text__": "Aside"
    }
  },
  "bBKBRWXDOx": {
    "el-main": {
      "lc_id": "bBKBRWXDOx",
      "__children": [],
      "__text__": "Main"
    }
  },
  "gbNSQP45GT": {
    "el-container": {
      "lc-mark": "",
      "lc_id": "gbNSQP45GT",
      "__children": [{
        "el-header": {
          "lc_id": "HF1qQoD4PL",
          "__children": [],
          "__text__": "Header"
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc_id": "ASkvJKvxcV",
          "__children": [{
            "el-aside": {
              "width": "200px",
              "lc_id": "9KXTLE0CeH",
              "__children": [],
              "__text__": "Aside"
            },
            "__key__": "__children"
          }, {
            "el-main": {
              "lc_id": "7daXKj/Gvs",
              "__children": [],
              "__text__": "Main"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "HF1qQoD4PL": {
    "el-header": {
      "lc_id": "HF1qQoD4PL",
      "__children": [],
      "__text__": "Header"
    }
  },
  "ASkvJKvxcV": {
    "el-container": {
      "lc_id": "ASkvJKvxcV",
      "__children": [{
        "el-aside": {
          "width": "200px",
          "lc_id": "9KXTLE0CeH",
          "__children": [],
          "__text__": "Aside"
        },
        "__key__": "__children"
      }, {
        "el-main": {
          "lc_id": "7daXKj/Gvs",
          "__children": [],
          "__text__": "Main"
        },
        "__key__": "__children"
      }]
    }
  },
  "9KXTLE0CeH": {
    "el-aside": {
      "width": "200px",
      "lc_id": "9KXTLE0CeH",
      "__children": [],
      "__text__": "Aside"
    }
  },
  "7daXKj/Gvs": {
    "el-main": {
      "lc_id": "7daXKj/Gvs",
      "__children": [],
      "__text__": "Main"
    }
  },
  "36KOMxGIdH": {
    "el-container": {
      "lc-mark": "",
      "lc_id": "36KOMxGIdH",
      "__children": [{
        "el-header": {
          "lc_id": "Sw6GvGV0eS",
          "__children": [],
          "__text__": "Header"
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc_id": "GHVYjFrX+h",
          "__children": [{
            "el-aside": {
              "width": "200px",
              "lc_id": "uw9FF7J6aL",
              "__children": [],
              "__text__": "Aside"
            },
            "__key__": "__children"
          }, {
            "el-container": {
              "lc_id": "KvwMo2IxFx",
              "__children": [{
                "el-main": {
                  "lc_id": "Fk+eYCCPV2",
                  "__children": [],
                  "__text__": "Main"
                },
                "__key__": "__children"
              }, {
                "el-footer": {
                  "lc_id": "dUWCQrWVeT",
                  "__children": [],
                  "__text__": "Footer"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "Sw6GvGV0eS": {
    "el-header": {
      "lc_id": "Sw6GvGV0eS",
      "__children": [],
      "__text__": "Header"
    }
  },
  "GHVYjFrX+h": {
    "el-container": {
      "lc_id": "GHVYjFrX+h",
      "__children": [{
        "el-aside": {
          "width": "200px",
          "lc_id": "uw9FF7J6aL",
          "__children": [],
          "__text__": "Aside"
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc_id": "KvwMo2IxFx",
          "__children": [{
            "el-main": {
              "lc_id": "Fk+eYCCPV2",
              "__children": [],
              "__text__": "Main"
            },
            "__key__": "__children"
          }, {
            "el-footer": {
              "lc_id": "dUWCQrWVeT",
              "__children": [],
              "__text__": "Footer"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "uw9FF7J6aL": {
    "el-aside": {
      "width": "200px",
      "lc_id": "uw9FF7J6aL",
      "__children": [],
      "__text__": "Aside"
    }
  },
  "KvwMo2IxFx": {
    "el-container": {
      "lc_id": "KvwMo2IxFx",
      "__children": [{
        "el-main": {
          "lc_id": "Fk+eYCCPV2",
          "__children": [],
          "__text__": "Main"
        },
        "__key__": "__children"
      }, {
        "el-footer": {
          "lc_id": "dUWCQrWVeT",
          "__children": [],
          "__text__": "Footer"
        },
        "__key__": "__children"
      }]
    }
  },
  "Fk+eYCCPV2": {
    "el-main": {
      "lc_id": "Fk+eYCCPV2",
      "__children": [],
      "__text__": "Main"
    }
  },
  "dUWCQrWVeT": {
    "el-footer": {
      "lc_id": "dUWCQrWVeT",
      "__children": [],
      "__text__": "Footer"
    }
  },
  "tL2ICEso4A": {
    "el-container": {
      "lc-mark": "",
      "lc_id": "tL2ICEso4A",
      "__children": [{
        "el-aside": {
          "width": "200px",
          "lc_id": "csjsUzA+9Y",
          "__children": [],
          "__text__": "Aside"
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc_id": "iZYbDNFziC",
          "__children": [{
            "el-header": {
              "lc_id": "vpuQLdTE6A",
              "__children": [],
              "__text__": "Header"
            },
            "__key__": "__children"
          }, {
            "el-main": {
              "lc_id": "mgPG8ueRqA",
              "__children": [],
              "__text__": "Main"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "csjsUzA+9Y": {
    "el-aside": {
      "width": "200px",
      "lc_id": "csjsUzA+9Y",
      "__children": [],
      "__text__": "Aside"
    }
  },
  "iZYbDNFziC": {
    "el-container": {
      "lc_id": "iZYbDNFziC",
      "__children": [{
        "el-header": {
          "lc_id": "vpuQLdTE6A",
          "__children": [],
          "__text__": "Header"
        },
        "__key__": "__children"
      }, {
        "el-main": {
          "lc_id": "mgPG8ueRqA",
          "__children": [],
          "__text__": "Main"
        },
        "__key__": "__children"
      }]
    }
  },
  "vpuQLdTE6A": {
    "el-header": {
      "lc_id": "vpuQLdTE6A",
      "__children": [],
      "__text__": "Header"
    }
  },
  "mgPG8ueRqA": {
    "el-main": {
      "lc_id": "mgPG8ueRqA",
      "__children": [],
      "__text__": "Main"
    }
  },
  "SycDYJbUh8": {
    "el-container": {
      "lc-mark": "",
      "lc_id": "SycDYJbUh8",
      "__children": [{
        "el-aside": {
          "width": "200px",
          "lc_id": "eCOdbsua/g",
          "__children": [],
          "__text__": "Aside"
        },
        "__key__": "__children"
      }, {
        "el-container": {
          "lc_id": "RUKLeBxhhi",
          "__children": [{
            "el-header": {
              "lc_id": "82WGwD/cl3",
              "__children": [],
              "__text__": "Header"
            },
            "__key__": "__children"
          }, {
            "el-main": {
              "lc_id": "CtffCo/8Cy",
              "__children": [],
              "__text__": "Main"
            },
            "__key__": "__children"
          }, {
            "el-footer": {
              "lc_id": "g0Jcmm2r+P",
              "__children": [],
              "__text__": "Footer"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "eCOdbsua/g": {
    "el-aside": {
      "width": "200px",
      "lc_id": "eCOdbsua/g",
      "__children": [],
      "__text__": "Aside"
    }
  },
  "RUKLeBxhhi": {
    "el-container": {
      "lc_id": "RUKLeBxhhi",
      "__children": [{
        "el-header": {
          "lc_id": "82WGwD/cl3",
          "__children": [],
          "__text__": "Header"
        },
        "__key__": "__children"
      }, {
        "el-main": {
          "lc_id": "CtffCo/8Cy",
          "__children": [],
          "__text__": "Main"
        },
        "__key__": "__children"
      }, {
        "el-footer": {
          "lc_id": "g0Jcmm2r+P",
          "__children": [],
          "__text__": "Footer"
        },
        "__key__": "__children"
      }]
    }
  },
  "82WGwD/cl3": {
    "el-header": {
      "lc_id": "82WGwD/cl3",
      "__children": [],
      "__text__": "Header"
    }
  },
  "CtffCo/8Cy": {
    "el-main": {
      "lc_id": "CtffCo/8Cy",
      "__children": [],
      "__text__": "Main"
    }
  },
  "g0Jcmm2r+P": {
    "el-footer": {
      "lc_id": "g0Jcmm2r+P",
      "__children": [],
      "__text__": "Footer"
    }
  },
  "Lg787FEsDw": {
    "div": {
      "lc_id": "Lg787FEsDw",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "jlEgJZCE+i",
          "__children": [],
          "__text__": "Skeleton 骨架屏"
        },
        "__key__": "__children"
      }, {
        "el-skeleton": {
          "lc-mark": "",
          ":rows": "6",
          "animated": "",
          "lc_id": "4O9hfMet5s",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "jlEgJZCE+i": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "jlEgJZCE+i",
      "__children": [],
      "__text__": "Skeleton 骨架屏"
    }
  },
  "4O9hfMet5s": {
    "el-skeleton": {
      "lc-mark": "",
      ":rows": "6",
      "animated": "",
      "lc_id": "4O9hfMet5s",
      "__children": []
    }
  },
  "D3MK6Iq3TG": {
    "div": {
      "lc_id": "D3MK6Iq3TG",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "D6xQ5qpO4B",
          "__children": [],
          "__text__": "Empty 空状态"
        },
        "__key__": "__children"
      }, {
        "el-empty": {
          "lc-mark": "",
          "description": "描述文字",
          "lc_id": "sFeXbcNwIE",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "D6xQ5qpO4B": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "D6xQ5qpO4B",
      "__children": [],
      "__text__": "Empty 空状态"
    }
  },
  "sFeXbcNwIE": {
    "el-empty": {
      "lc-mark": "",
      "description": "描述文字",
      "lc_id": "sFeXbcNwIE",
      "__children": []
    }
  },
  "tpbaaOn5XS": {
    "div": {
      "lc_id": "tpbaaOn5XS",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "6Mnu6i7QPx",
          "__children": [],
          "__text__": "Result 结果"
        },
        "__key__": "__children"
      }, {
        "el-row": {
          "lc_id": "FMdEXTrYSx",
          "__children": [{
            "el-col": {
              ":sm": "12",
              ":lg": "6",
              "lc_id": "deKtOM/g2K",
              "__children": [{
                "el-result": {
                  "icon": "success",
                  "lc-mark": "",
                  "title": "成功提示",
                  "subtitle": "请根据提示进行操作",
                  "lc_id": "iF6n6EUcmn",
                  "__children": [{
                    "template": {
                      "#extra": "",
                      "lc_id": "iJQp/8XeSP",
                      "__children": [{
                        "el-button": {
                          "type": "primary",
                          "size": "medium",
                          "lc_id": "UCFmR9EP+q",
                          "__children": [],
                          "__text__": "返回"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":sm": "12",
              ":lg": "6",
              "lc_id": "1smWMRRuZr",
              "__children": [{
                "el-result": {
                  "icon": "warning",
                  "lc-mark": "",
                  "title": "警告提示",
                  "subtitle": "请根据提示进行操作",
                  "lc_id": "NIEZCy3gG0",
                  "__children": [{
                    "template": {
                      "#extra": "",
                      "lc_id": "c6Unj7eQIv",
                      "__children": [{
                        "el-button": {
                          "type": "primary",
                          "size": "medium",
                          "lc_id": "MDEtfbmEZd",
                          "__children": [],
                          "__text__": "返回"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":sm": "12",
              ":lg": "6",
              "lc_id": "2zio5J9ljq",
              "__children": [{
                "el-result": {
                  "icon": "error",
                  "lc-mark": "",
                  "title": "错误提示",
                  "subtitle": "请根据提示进行操作",
                  "lc_id": "kLASzKidTD",
                  "__children": [{
                    "template": {
                      "#extra": "",
                      "lc_id": "rnIhJqKRjQ",
                      "__children": [{
                        "el-button": {
                          "type": "primary",
                          "size": "medium",
                          "lc_id": "MhrCBFBHlN",
                          "__children": [],
                          "__text__": "返回"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":sm": "12",
              ":lg": "6",
              "lc_id": "h7xNXozZ0s",
              "__children": [{
                "el-result": {
                  "icon": "info",
                  "lc-mark": "",
                  "title": "信息提示",
                  "subtitle": "请根据提示进行操作",
                  "lc_id": "aDXqAjXsST",
                  "__children": [{
                    "template": {
                      "#extra": "",
                      "lc_id": "nHgp3LGSea",
                      "__children": [{
                        "el-button": {
                          "type": "primary",
                          "size": "medium",
                          "lc_id": "VURe3Zlhq0",
                          "__children": [],
                          "__text__": "返回"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "6Mnu6i7QPx": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "6Mnu6i7QPx",
      "__children": [],
      "__text__": "Result 结果"
    }
  },
  "FMdEXTrYSx": {
    "el-row": {
      "lc_id": "FMdEXTrYSx",
      "__children": [{
        "el-col": {
          ":sm": "12",
          ":lg": "6",
          "lc_id": "deKtOM/g2K",
          "__children": [{
            "el-result": {
              "icon": "success",
              "lc-mark": "",
              "title": "成功提示",
              "subtitle": "请根据提示进行操作",
              "lc_id": "iF6n6EUcmn",
              "__children": [{
                "template": {
                  "#extra": "",
                  "lc_id": "iJQp/8XeSP",
                  "__children": [{
                    "el-button": {
                      "type": "primary",
                      "size": "medium",
                      "lc_id": "UCFmR9EP+q",
                      "__children": [],
                      "__text__": "返回"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":sm": "12",
          ":lg": "6",
          "lc_id": "1smWMRRuZr",
          "__children": [{
            "el-result": {
              "icon": "warning",
              "lc-mark": "",
              "title": "警告提示",
              "subtitle": "请根据提示进行操作",
              "lc_id": "NIEZCy3gG0",
              "__children": [{
                "template": {
                  "#extra": "",
                  "lc_id": "c6Unj7eQIv",
                  "__children": [{
                    "el-button": {
                      "type": "primary",
                      "size": "medium",
                      "lc_id": "MDEtfbmEZd",
                      "__children": [],
                      "__text__": "返回"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":sm": "12",
          ":lg": "6",
          "lc_id": "2zio5J9ljq",
          "__children": [{
            "el-result": {
              "icon": "error",
              "lc-mark": "",
              "title": "错误提示",
              "subtitle": "请根据提示进行操作",
              "lc_id": "kLASzKidTD",
              "__children": [{
                "template": {
                  "#extra": "",
                  "lc_id": "rnIhJqKRjQ",
                  "__children": [{
                    "el-button": {
                      "type": "primary",
                      "size": "medium",
                      "lc_id": "MhrCBFBHlN",
                      "__children": [],
                      "__text__": "返回"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":sm": "12",
          ":lg": "6",
          "lc_id": "h7xNXozZ0s",
          "__children": [{
            "el-result": {
              "icon": "info",
              "lc-mark": "",
              "title": "信息提示",
              "subtitle": "请根据提示进行操作",
              "lc_id": "aDXqAjXsST",
              "__children": [{
                "template": {
                  "#extra": "",
                  "lc_id": "nHgp3LGSea",
                  "__children": [{
                    "el-button": {
                      "type": "primary",
                      "size": "medium",
                      "lc_id": "VURe3Zlhq0",
                      "__children": [],
                      "__text__": "返回"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "deKtOM/g2K": {
    "el-col": {
      ":sm": "12",
      ":lg": "6",
      "lc_id": "deKtOM/g2K",
      "__children": [{
        "el-result": {
          "icon": "success",
          "lc-mark": "",
          "title": "成功提示",
          "subtitle": "请根据提示进行操作",
          "lc_id": "iF6n6EUcmn",
          "__children": [{
            "template": {
              "#extra": "",
              "lc_id": "iJQp/8XeSP",
              "__children": [{
                "el-button": {
                  "type": "primary",
                  "size": "medium",
                  "lc_id": "UCFmR9EP+q",
                  "__children": [],
                  "__text__": "返回"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "iF6n6EUcmn": {
    "el-result": {
      "icon": "success",
      "lc-mark": "",
      "title": "成功提示",
      "subtitle": "请根据提示进行操作",
      "lc_id": "iF6n6EUcmn",
      "__children": [{
        "template": {
          "#extra": "",
          "lc_id": "iJQp/8XeSP",
          "__children": [{
            "el-button": {
              "type": "primary",
              "size": "medium",
              "lc_id": "UCFmR9EP+q",
              "__children": [],
              "__text__": "返回"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "iJQp/8XeSP": {
    "template": {
      "#extra": "",
      "lc_id": "iJQp/8XeSP",
      "__children": [{
        "el-button": {
          "type": "primary",
          "size": "medium",
          "lc_id": "UCFmR9EP+q",
          "__children": [],
          "__text__": "返回"
        },
        "__key__": "__children"
      }]
    }
  },
  "UCFmR9EP+q": {
    "el-button": {
      "type": "primary",
      "size": "medium",
      "lc_id": "UCFmR9EP+q",
      "__children": [],
      "__text__": "返回"
    }
  },
  "1smWMRRuZr": {
    "el-col": {
      ":sm": "12",
      ":lg": "6",
      "lc_id": "1smWMRRuZr",
      "__children": [{
        "el-result": {
          "icon": "warning",
          "lc-mark": "",
          "title": "警告提示",
          "subtitle": "请根据提示进行操作",
          "lc_id": "NIEZCy3gG0",
          "__children": [{
            "template": {
              "#extra": "",
              "lc_id": "c6Unj7eQIv",
              "__children": [{
                "el-button": {
                  "type": "primary",
                  "size": "medium",
                  "lc_id": "MDEtfbmEZd",
                  "__children": [],
                  "__text__": "返回"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "NIEZCy3gG0": {
    "el-result": {
      "icon": "warning",
      "lc-mark": "",
      "title": "警告提示",
      "subtitle": "请根据提示进行操作",
      "lc_id": "NIEZCy3gG0",
      "__children": [{
        "template": {
          "#extra": "",
          "lc_id": "c6Unj7eQIv",
          "__children": [{
            "el-button": {
              "type": "primary",
              "size": "medium",
              "lc_id": "MDEtfbmEZd",
              "__children": [],
              "__text__": "返回"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "c6Unj7eQIv": {
    "template": {
      "#extra": "",
      "lc_id": "c6Unj7eQIv",
      "__children": [{
        "el-button": {
          "type": "primary",
          "size": "medium",
          "lc_id": "MDEtfbmEZd",
          "__children": [],
          "__text__": "返回"
        },
        "__key__": "__children"
      }]
    }
  },
  "MDEtfbmEZd": {
    "el-button": {
      "type": "primary",
      "size": "medium",
      "lc_id": "MDEtfbmEZd",
      "__children": [],
      "__text__": "返回"
    }
  },
  "2zio5J9ljq": {
    "el-col": {
      ":sm": "12",
      ":lg": "6",
      "lc_id": "2zio5J9ljq",
      "__children": [{
        "el-result": {
          "icon": "error",
          "lc-mark": "",
          "title": "错误提示",
          "subtitle": "请根据提示进行操作",
          "lc_id": "kLASzKidTD",
          "__children": [{
            "template": {
              "#extra": "",
              "lc_id": "rnIhJqKRjQ",
              "__children": [{
                "el-button": {
                  "type": "primary",
                  "size": "medium",
                  "lc_id": "MhrCBFBHlN",
                  "__children": [],
                  "__text__": "返回"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "kLASzKidTD": {
    "el-result": {
      "icon": "error",
      "lc-mark": "",
      "title": "错误提示",
      "subtitle": "请根据提示进行操作",
      "lc_id": "kLASzKidTD",
      "__children": [{
        "template": {
          "#extra": "",
          "lc_id": "rnIhJqKRjQ",
          "__children": [{
            "el-button": {
              "type": "primary",
              "size": "medium",
              "lc_id": "MhrCBFBHlN",
              "__children": [],
              "__text__": "返回"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "rnIhJqKRjQ": {
    "template": {
      "#extra": "",
      "lc_id": "rnIhJqKRjQ",
      "__children": [{
        "el-button": {
          "type": "primary",
          "size": "medium",
          "lc_id": "MhrCBFBHlN",
          "__children": [],
          "__text__": "返回"
        },
        "__key__": "__children"
      }]
    }
  },
  "MhrCBFBHlN": {
    "el-button": {
      "type": "primary",
      "size": "medium",
      "lc_id": "MhrCBFBHlN",
      "__children": [],
      "__text__": "返回"
    }
  },
  "h7xNXozZ0s": {
    "el-col": {
      ":sm": "12",
      ":lg": "6",
      "lc_id": "h7xNXozZ0s",
      "__children": [{
        "el-result": {
          "icon": "info",
          "lc-mark": "",
          "title": "信息提示",
          "subtitle": "请根据提示进行操作",
          "lc_id": "aDXqAjXsST",
          "__children": [{
            "template": {
              "#extra": "",
              "lc_id": "nHgp3LGSea",
              "__children": [{
                "el-button": {
                  "type": "primary",
                  "size": "medium",
                  "lc_id": "VURe3Zlhq0",
                  "__children": [],
                  "__text__": "返回"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "aDXqAjXsST": {
    "el-result": {
      "icon": "info",
      "lc-mark": "",
      "title": "信息提示",
      "subtitle": "请根据提示进行操作",
      "lc_id": "aDXqAjXsST",
      "__children": [{
        "template": {
          "#extra": "",
          "lc_id": "nHgp3LGSea",
          "__children": [{
            "el-button": {
              "type": "primary",
              "size": "medium",
              "lc_id": "VURe3Zlhq0",
              "__children": [],
              "__text__": "返回"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "nHgp3LGSea": {
    "template": {
      "#extra": "",
      "lc_id": "nHgp3LGSea",
      "__children": [{
        "el-button": {
          "type": "primary",
          "size": "medium",
          "lc_id": "VURe3Zlhq0",
          "__children": [],
          "__text__": "返回"
        },
        "__key__": "__children"
      }]
    }
  },
  "VURe3Zlhq0": {
    "el-button": {
      "type": "primary",
      "size": "medium",
      "lc_id": "VURe3Zlhq0",
      "__children": [],
      "__text__": "返回"
    }
  },
  "vxLzr2xqjb": {
    "div": {
      "lc_id": "vxLzr2xqjb",
      "__children": [{
        "div": {
          "lc_id": "tWzGb0zt3I",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "@click": "dialogVisible = true",
              "lc_id": "cjFRJjmxCw",
              "__children": [],
              "__text__": "Dialog 对话框"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "lc_id": "dIDt4KsNEb",
              "__children": [{
                "el-button": {
                  "type": "text",
                  "lc_id": "cmG1+fI232",
                  "__children": [],
                  "__text__": "直接拖我看结果"
                },
                "__key__": "__children"
              }, {
                "el-dialog": {
                  "title": "提示",
                  "v-model": "dialogVisible",
                  "width": "30%",
                  ":before-close": "handleClose",
                  "lc_id": "W4ORswcE/n",
                  "__children": [{
                    "span": {
                      "lc_id": "8Sb2dnGlHq",
                      "__children": [],
                      "__text__": "这是一段信息"
                    },
                    "__key__": "__children"
                  }, {
                    "span": {
                      "footer": "",
                      "class": "dialog-footer",
                      "lc_id": "To3nLHp/kA",
                      "__children": [{
                        "el-button": {
                          "@click": "dialogVisible = false",
                          "lc_id": "gd7Fps6eIs",
                          "__children": [],
                          "__text__": "取 消"
                        },
                        "__key__": "__children"
                      }, {
                        "el-button": {
                          "type": "primary",
                          "@click": "dialogVisible = false",
                          "lc_id": "fXoFbUbf9l",
                          "__children": [],
                          "__text__": "确 定"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "tWzGb0zt3I": {
    "div": {
      "lc_id": "tWzGb0zt3I",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "@click": "dialogVisible = true",
          "lc_id": "cjFRJjmxCw",
          "__children": [],
          "__text__": "Dialog 对话框"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "lc_id": "dIDt4KsNEb",
          "__children": [{
            "el-button": {
              "type": "text",
              "lc_id": "cmG1+fI232",
              "__children": [],
              "__text__": "直接拖我看结果"
            },
            "__key__": "__children"
          }, {
            "el-dialog": {
              "title": "提示",
              "v-model": "dialogVisible",
              "width": "30%",
              ":before-close": "handleClose",
              "lc_id": "W4ORswcE/n",
              "__children": [{
                "span": {
                  "lc_id": "8Sb2dnGlHq",
                  "__children": [],
                  "__text__": "这是一段信息"
                },
                "__key__": "__children"
              }, {
                "span": {
                  "footer": "",
                  "class": "dialog-footer",
                  "lc_id": "To3nLHp/kA",
                  "__children": [{
                    "el-button": {
                      "@click": "dialogVisible = false",
                      "lc_id": "gd7Fps6eIs",
                      "__children": [],
                      "__text__": "取 消"
                    },
                    "__key__": "__children"
                  }, {
                    "el-button": {
                      "type": "primary",
                      "@click": "dialogVisible = false",
                      "lc_id": "fXoFbUbf9l",
                      "__children": [],
                      "__text__": "确 定"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "cjFRJjmxCw": {
    "div": {
      "class": "demonstration-element",
      "@click": "dialogVisible = true",
      "lc_id": "cjFRJjmxCw",
      "__children": [],
      "__text__": "Dialog 对话框"
    }
  },
  "dIDt4KsNEb": {
    "div": {
      "lc-mark": "",
      "lc_id": "dIDt4KsNEb",
      "__children": [{
        "el-button": {
          "type": "text",
          "lc_id": "cmG1+fI232",
          "__children": [],
          "__text__": "直接拖我看结果"
        },
        "__key__": "__children"
      }, {
        "el-dialog": {
          "title": "提示",
          "v-model": "dialogVisible",
          "width": "30%",
          ":before-close": "handleClose",
          "lc_id": "W4ORswcE/n",
          "__children": [{
            "span": {
              "lc_id": "8Sb2dnGlHq",
              "__children": [],
              "__text__": "这是一段信息"
            },
            "__key__": "__children"
          }, {
            "span": {
              "footer": "",
              "class": "dialog-footer",
              "lc_id": "To3nLHp/kA",
              "__children": [{
                "el-button": {
                  "@click": "dialogVisible = false",
                  "lc_id": "gd7Fps6eIs",
                  "__children": [],
                  "__text__": "取 消"
                },
                "__key__": "__children"
              }, {
                "el-button": {
                  "type": "primary",
                  "@click": "dialogVisible = false",
                  "lc_id": "fXoFbUbf9l",
                  "__children": [],
                  "__text__": "确 定"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "cmG1+fI232": {
    "el-button": {
      "type": "text",
      "lc_id": "cmG1+fI232",
      "__children": [],
      "__text__": "直接拖我看结果"
    }
  },
  "W4ORswcE/n": {
    "el-dialog": {
      "title": "提示",
      "v-model": "dialogVisible",
      "width": "30%",
      ":before-close": "handleClose",
      "lc_id": "W4ORswcE/n",
      "__children": [{
        "span": {
          "lc_id": "8Sb2dnGlHq",
          "__children": [],
          "__text__": "这是一段信息"
        },
        "__key__": "__children"
      }, {
        "span": {
          "footer": "",
          "class": "dialog-footer",
          "lc_id": "To3nLHp/kA",
          "__children": [{
            "el-button": {
              "@click": "dialogVisible = false",
              "lc_id": "gd7Fps6eIs",
              "__children": [],
              "__text__": "取 消"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "type": "primary",
              "@click": "dialogVisible = false",
              "lc_id": "fXoFbUbf9l",
              "__children": [],
              "__text__": "确 定"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "8Sb2dnGlHq": {
    "span": {
      "lc_id": "8Sb2dnGlHq",
      "__children": [],
      "__text__": "这是一段信息"
    }
  },
  "To3nLHp/kA": {
    "span": {
      "footer": "",
      "class": "dialog-footer",
      "lc_id": "To3nLHp/kA",
      "__children": [{
        "el-button": {
          "@click": "dialogVisible = false",
          "lc_id": "gd7Fps6eIs",
          "__children": [],
          "__text__": "取 消"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "type": "primary",
          "@click": "dialogVisible = false",
          "lc_id": "fXoFbUbf9l",
          "__children": [],
          "__text__": "确 定"
        },
        "__key__": "__children"
      }]
    }
  },
  "gd7Fps6eIs": {
    "el-button": {
      "@click": "dialogVisible = false",
      "lc_id": "gd7Fps6eIs",
      "__children": [],
      "__text__": "取 消"
    }
  },
  "fXoFbUbf9l": {
    "el-button": {
      "type": "primary",
      "@click": "dialogVisible = false",
      "lc_id": "fXoFbUbf9l",
      "__children": [],
      "__text__": "确 定"
    }
  },
  "qEWQVtO4HV": {
    "div": {
      "lc_id": "qEWQVtO4HV",
      "__children": [{
        "div": {
          "lc_id": "ryB2czrr/o",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "1XMeUcBuC6",
              "__children": [],
              "__text__": "Drawer 抽屉"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "lc_id": "iopQBcTsL/",
              "__children": [{
                "el-radio-group": {
                  "v-model": "direction",
                  "lc_id": "oBXOGHBjIr",
                  "__children": [{
                    "el-radio": {
                      "label": "ltr",
                      "lc_id": "sOtBkShpnA",
                      "__children": [],
                      "__text__": "从左往右开"
                    },
                    "__key__": "__children"
                  }, {
                    "el-radio": {
                      "label": "rtl",
                      "lc_id": "npclPhSAAr",
                      "__children": [],
                      "__text__": "从右往左开"
                    },
                    "__key__": "__children"
                  }, {
                    "el-radio": {
                      "label": "ttb",
                      "lc_id": "r21dYPRqlH",
                      "__children": [],
                      "__text__": "从上往下开"
                    },
                    "__key__": "__children"
                  }, {
                    "el-radio": {
                      "label": "btt",
                      "lc_id": "eNbrmYhimD",
                      "__children": [],
                      "__text__": "从下往上开"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-button": {
                  "@click": "drawer = true",
                  "type": "primary",
                  "style": "margin-left: 16px;",
                  "disabled": "",
                  "lc_id": "LKDidefo88",
                  "__children": [],
                  "__text__": "点我打开"
                },
                "__key__": "__children"
              }, {
                "el-drawer": {
                  "title": "我是标题",
                  "v-model": "drawer",
                  ":direction": "direction",
                  ":before-close": "handleDrawerClose",
                  "lc_id": "QMf8/82LI6",
                  "__children": [{
                    "span": {
                      "lc_id": "wtfxsNwyPw",
                      "__children": [],
                      "__text__": "我来啦!"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "VsANkPibgZ",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "61ILio7Yfy",
              "__children": [],
              "__text__": "Popconfirm 气泡确认框"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "lc_id": "tipD3v4v0E",
              "__children": [{
                "el-popconfirm": {
                  "title": "这是一段内容确定删除吗？",
                  "lc_id": "8wIQQ5fsm0",
                  "__children": [{
                    "template": {
                      "#reference": "",
                      "lc_id": "VRks4FGAp4",
                      "__children": [{
                        "el-button": {
                          "lc_id": "UfoVVwFlH8",
                          "__children": [],
                          "__text__": "删除"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "wLPA+POQar",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "ViuBm3mn/O",
              "__children": [],
              "__text__": "Popover 弹出框"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "lc_id": "tk2qy+nwU2",
              "__children": [{
                "el-popover": {
                  "placement": "bottom",
                  "title": "标题",
                  "width": "200",
                  "trigger": "click",
                  "content": "这是一段内容,这是一段内容,这是一段内容,这是一段内容。",
                  "lc_id": "E3FQnEvqcg",
                  "__children": [{
                    "template": {
                      "#reference": "",
                      "lc_id": "w1CDln4qFc",
                      "__children": [{
                        "el-button": {
                          "lc_id": "fuAYnHW69Y",
                          "__children": [],
                          "__text__": "click 激活"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "0PvfhG+ZYr",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "4K55zxXUgL",
              "__children": [],
              "__text__": "Tooltip 文字提示"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "lc_id": "hxejw7uzbB",
              "__children": [{
                "el-tooltip": {
                  "class": "item",
                  "effect": "dark",
                  "content": "Top Left 提示文字",
                  "placement": "top-start",
                  "lc_id": "XXoofblsAn",
                  "__children": [{
                    "el-button": {
                      "lc_id": "C27qPtyTjp",
                      "__children": [],
                      "__text__": "上左"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "kDLIM+qGMq",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "9LXwSf1r1p",
              "__children": [],
              "__text__": "Transfer 穿梭框"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "lc_id": "Mfn7m1Nz4k",
              "__children": [{
                "el-transfer": {
                  "v-model": "transferValue",
                  ":data": "transferData",
                  "lc_id": "FIK2q2sQGP",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "ryB2czrr/o": {
    "div": {
      "lc_id": "ryB2czrr/o",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "1XMeUcBuC6",
          "__children": [],
          "__text__": "Drawer 抽屉"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "lc_id": "iopQBcTsL/",
          "__children": [{
            "el-radio-group": {
              "v-model": "direction",
              "lc_id": "oBXOGHBjIr",
              "__children": [{
                "el-radio": {
                  "label": "ltr",
                  "lc_id": "sOtBkShpnA",
                  "__children": [],
                  "__text__": "从左往右开"
                },
                "__key__": "__children"
              }, {
                "el-radio": {
                  "label": "rtl",
                  "lc_id": "npclPhSAAr",
                  "__children": [],
                  "__text__": "从右往左开"
                },
                "__key__": "__children"
              }, {
                "el-radio": {
                  "label": "ttb",
                  "lc_id": "r21dYPRqlH",
                  "__children": [],
                  "__text__": "从上往下开"
                },
                "__key__": "__children"
              }, {
                "el-radio": {
                  "label": "btt",
                  "lc_id": "eNbrmYhimD",
                  "__children": [],
                  "__text__": "从下往上开"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "@click": "drawer = true",
              "type": "primary",
              "style": "margin-left: 16px;",
              "disabled": "",
              "lc_id": "LKDidefo88",
              "__children": [],
              "__text__": "点我打开"
            },
            "__key__": "__children"
          }, {
            "el-drawer": {
              "title": "我是标题",
              "v-model": "drawer",
              ":direction": "direction",
              ":before-close": "handleDrawerClose",
              "lc_id": "QMf8/82LI6",
              "__children": [{
                "span": {
                  "lc_id": "wtfxsNwyPw",
                  "__children": [],
                  "__text__": "我来啦!"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "1XMeUcBuC6": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "1XMeUcBuC6",
      "__children": [],
      "__text__": "Drawer 抽屉"
    }
  },
  "iopQBcTsL/": {
    "div": {
      "lc-mark": "",
      "lc_id": "iopQBcTsL/",
      "__children": [{
        "el-radio-group": {
          "v-model": "direction",
          "lc_id": "oBXOGHBjIr",
          "__children": [{
            "el-radio": {
              "label": "ltr",
              "lc_id": "sOtBkShpnA",
              "__children": [],
              "__text__": "从左往右开"
            },
            "__key__": "__children"
          }, {
            "el-radio": {
              "label": "rtl",
              "lc_id": "npclPhSAAr",
              "__children": [],
              "__text__": "从右往左开"
            },
            "__key__": "__children"
          }, {
            "el-radio": {
              "label": "ttb",
              "lc_id": "r21dYPRqlH",
              "__children": [],
              "__text__": "从上往下开"
            },
            "__key__": "__children"
          }, {
            "el-radio": {
              "label": "btt",
              "lc_id": "eNbrmYhimD",
              "__children": [],
              "__text__": "从下往上开"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "@click": "drawer = true",
          "type": "primary",
          "style": "margin-left: 16px;",
          "disabled": "",
          "lc_id": "LKDidefo88",
          "__children": [],
          "__text__": "点我打开"
        },
        "__key__": "__children"
      }, {
        "el-drawer": {
          "title": "我是标题",
          "v-model": "drawer",
          ":direction": "direction",
          ":before-close": "handleDrawerClose",
          "lc_id": "QMf8/82LI6",
          "__children": [{
            "span": {
              "lc_id": "wtfxsNwyPw",
              "__children": [],
              "__text__": "我来啦!"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "oBXOGHBjIr": {
    "el-radio-group": {
      "v-model": "direction",
      "lc_id": "oBXOGHBjIr",
      "__children": [{
        "el-radio": {
          "label": "ltr",
          "lc_id": "sOtBkShpnA",
          "__children": [],
          "__text__": "从左往右开"
        },
        "__key__": "__children"
      }, {
        "el-radio": {
          "label": "rtl",
          "lc_id": "npclPhSAAr",
          "__children": [],
          "__text__": "从右往左开"
        },
        "__key__": "__children"
      }, {
        "el-radio": {
          "label": "ttb",
          "lc_id": "r21dYPRqlH",
          "__children": [],
          "__text__": "从上往下开"
        },
        "__key__": "__children"
      }, {
        "el-radio": {
          "label": "btt",
          "lc_id": "eNbrmYhimD",
          "__children": [],
          "__text__": "从下往上开"
        },
        "__key__": "__children"
      }]
    }
  },
  "sOtBkShpnA": {
    "el-radio": {
      "label": "ltr",
      "lc_id": "sOtBkShpnA",
      "__children": [],
      "__text__": "从左往右开"
    }
  },
  "npclPhSAAr": {
    "el-radio": {
      "label": "rtl",
      "lc_id": "npclPhSAAr",
      "__children": [],
      "__text__": "从右往左开"
    }
  },
  "r21dYPRqlH": {
    "el-radio": {
      "label": "ttb",
      "lc_id": "r21dYPRqlH",
      "__children": [],
      "__text__": "从上往下开"
    }
  },
  "eNbrmYhimD": {
    "el-radio": {
      "label": "btt",
      "lc_id": "eNbrmYhimD",
      "__children": [],
      "__text__": "从下往上开"
    }
  },
  "LKDidefo88": {
    "el-button": {
      "@click": "drawer = true",
      "type": "primary",
      "style": "margin-left: 16px;",
      "disabled": "",
      "lc_id": "LKDidefo88",
      "__children": [],
      "__text__": "点我打开"
    }
  },
  "QMf8/82LI6": {
    "el-drawer": {
      "title": "我是标题",
      "v-model": "drawer",
      ":direction": "direction",
      ":before-close": "handleDrawerClose",
      "lc_id": "QMf8/82LI6",
      "__children": [{
        "span": {
          "lc_id": "wtfxsNwyPw",
          "__children": [],
          "__text__": "我来啦!"
        },
        "__key__": "__children"
      }]
    }
  },
  "wtfxsNwyPw": {
    "span": {
      "lc_id": "wtfxsNwyPw",
      "__children": [],
      "__text__": "我来啦!"
    }
  },
  "VsANkPibgZ": {
    "div": {
      "lc_id": "VsANkPibgZ",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "61ILio7Yfy",
          "__children": [],
          "__text__": "Popconfirm 气泡确认框"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "lc_id": "tipD3v4v0E",
          "__children": [{
            "el-popconfirm": {
              "title": "这是一段内容确定删除吗？",
              "lc_id": "8wIQQ5fsm0",
              "__children": [{
                "template": {
                  "#reference": "",
                  "lc_id": "VRks4FGAp4",
                  "__children": [{
                    "el-button": {
                      "lc_id": "UfoVVwFlH8",
                      "__children": [],
                      "__text__": "删除"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "61ILio7Yfy": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "61ILio7Yfy",
      "__children": [],
      "__text__": "Popconfirm 气泡确认框"
    }
  },
  "tipD3v4v0E": {
    "div": {
      "lc-mark": "",
      "lc_id": "tipD3v4v0E",
      "__children": [{
        "el-popconfirm": {
          "title": "这是一段内容确定删除吗？",
          "lc_id": "8wIQQ5fsm0",
          "__children": [{
            "template": {
              "#reference": "",
              "lc_id": "VRks4FGAp4",
              "__children": [{
                "el-button": {
                  "lc_id": "UfoVVwFlH8",
                  "__children": [],
                  "__text__": "删除"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "8wIQQ5fsm0": {
    "el-popconfirm": {
      "title": "这是一段内容确定删除吗？",
      "lc_id": "8wIQQ5fsm0",
      "__children": [{
        "template": {
          "#reference": "",
          "lc_id": "VRks4FGAp4",
          "__children": [{
            "el-button": {
              "lc_id": "UfoVVwFlH8",
              "__children": [],
              "__text__": "删除"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "VRks4FGAp4": {
    "template": {
      "#reference": "",
      "lc_id": "VRks4FGAp4",
      "__children": [{
        "el-button": {
          "lc_id": "UfoVVwFlH8",
          "__children": [],
          "__text__": "删除"
        },
        "__key__": "__children"
      }]
    }
  },
  "UfoVVwFlH8": {
    "el-button": {
      "lc_id": "UfoVVwFlH8",
      "__children": [],
      "__text__": "删除"
    }
  },
  "wLPA+POQar": {
    "div": {
      "lc_id": "wLPA+POQar",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "ViuBm3mn/O",
          "__children": [],
          "__text__": "Popover 弹出框"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "lc_id": "tk2qy+nwU2",
          "__children": [{
            "el-popover": {
              "placement": "bottom",
              "title": "标题",
              "width": "200",
              "trigger": "click",
              "content": "这是一段内容,这是一段内容,这是一段内容,这是一段内容。",
              "lc_id": "E3FQnEvqcg",
              "__children": [{
                "template": {
                  "#reference": "",
                  "lc_id": "w1CDln4qFc",
                  "__children": [{
                    "el-button": {
                      "lc_id": "fuAYnHW69Y",
                      "__children": [],
                      "__text__": "click 激活"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "ViuBm3mn/O": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "ViuBm3mn/O",
      "__children": [],
      "__text__": "Popover 弹出框"
    }
  },
  "tk2qy+nwU2": {
    "div": {
      "lc-mark": "",
      "lc_id": "tk2qy+nwU2",
      "__children": [{
        "el-popover": {
          "placement": "bottom",
          "title": "标题",
          "width": "200",
          "trigger": "click",
          "content": "这是一段内容,这是一段内容,这是一段内容,这是一段内容。",
          "lc_id": "E3FQnEvqcg",
          "__children": [{
            "template": {
              "#reference": "",
              "lc_id": "w1CDln4qFc",
              "__children": [{
                "el-button": {
                  "lc_id": "fuAYnHW69Y",
                  "__children": [],
                  "__text__": "click 激活"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "E3FQnEvqcg": {
    "el-popover": {
      "placement": "bottom",
      "title": "标题",
      "width": "200",
      "trigger": "click",
      "content": "这是一段内容,这是一段内容,这是一段内容,这是一段内容。",
      "lc_id": "E3FQnEvqcg",
      "__children": [{
        "template": {
          "#reference": "",
          "lc_id": "w1CDln4qFc",
          "__children": [{
            "el-button": {
              "lc_id": "fuAYnHW69Y",
              "__children": [],
              "__text__": "click 激活"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "w1CDln4qFc": {
    "template": {
      "#reference": "",
      "lc_id": "w1CDln4qFc",
      "__children": [{
        "el-button": {
          "lc_id": "fuAYnHW69Y",
          "__children": [],
          "__text__": "click 激活"
        },
        "__key__": "__children"
      }]
    }
  },
  "fuAYnHW69Y": {
    "el-button": {
      "lc_id": "fuAYnHW69Y",
      "__children": [],
      "__text__": "click 激活"
    }
  },
  "0PvfhG+ZYr": {
    "div": {
      "lc_id": "0PvfhG+ZYr",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "4K55zxXUgL",
          "__children": [],
          "__text__": "Tooltip 文字提示"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "lc_id": "hxejw7uzbB",
          "__children": [{
            "el-tooltip": {
              "class": "item",
              "effect": "dark",
              "content": "Top Left 提示文字",
              "placement": "top-start",
              "lc_id": "XXoofblsAn",
              "__children": [{
                "el-button": {
                  "lc_id": "C27qPtyTjp",
                  "__children": [],
                  "__text__": "上左"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "4K55zxXUgL": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "4K55zxXUgL",
      "__children": [],
      "__text__": "Tooltip 文字提示"
    }
  },
  "hxejw7uzbB": {
    "div": {
      "lc-mark": "",
      "lc_id": "hxejw7uzbB",
      "__children": [{
        "el-tooltip": {
          "class": "item",
          "effect": "dark",
          "content": "Top Left 提示文字",
          "placement": "top-start",
          "lc_id": "XXoofblsAn",
          "__children": [{
            "el-button": {
              "lc_id": "C27qPtyTjp",
              "__children": [],
              "__text__": "上左"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "XXoofblsAn": {
    "el-tooltip": {
      "class": "item",
      "effect": "dark",
      "content": "Top Left 提示文字",
      "placement": "top-start",
      "lc_id": "XXoofblsAn",
      "__children": [{
        "el-button": {
          "lc_id": "C27qPtyTjp",
          "__children": [],
          "__text__": "上左"
        },
        "__key__": "__children"
      }]
    }
  },
  "C27qPtyTjp": {
    "el-button": {
      "lc_id": "C27qPtyTjp",
      "__children": [],
      "__text__": "上左"
    }
  },
  "kDLIM+qGMq": {
    "div": {
      "lc_id": "kDLIM+qGMq",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "9LXwSf1r1p",
          "__children": [],
          "__text__": "Transfer 穿梭框"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "lc_id": "Mfn7m1Nz4k",
          "__children": [{
            "el-transfer": {
              "v-model": "transferValue",
              ":data": "transferData",
              "lc_id": "FIK2q2sQGP",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "9LXwSf1r1p": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "9LXwSf1r1p",
      "__children": [],
      "__text__": "Transfer 穿梭框"
    }
  },
  "Mfn7m1Nz4k": {
    "div": {
      "lc-mark": "",
      "lc_id": "Mfn7m1Nz4k",
      "__children": [{
        "el-transfer": {
          "v-model": "transferValue",
          ":data": "transferData",
          "lc_id": "FIK2q2sQGP",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "FIK2q2sQGP": {
    "el-transfer": {
      "v-model": "transferValue",
      ":data": "transferData",
      "lc_id": "FIK2q2sQGP",
      "__children": []
    }
  },
  "nqlS2COw0N": {
    "div": {
      "lc_id": "nqlS2COw0N",
      "__children": [{
        "div": {
          "lc_id": "D9kF2S4UlD",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "DH8WXyx5Hd",
              "__children": [],
              "__text__": "Radio 单选框"
            },
            "__key__": "__children"
          }, {
            "el-radio-group": {
              "v-model": "radio",
              "lc-mark": "",
              "lc_id": "f0v5GqbM8W",
              "__children": [{
                "el-radio": {
                  ":label": "3",
                  "lc_id": "iS/l/lS7uE",
                  "__children": [],
                  "__text__": "备选项"
                },
                "__key__": "__children"
              }, {
                "el-radio": {
                  ":label": "6",
                  "lc_id": "PwMXXlWapK",
                  "__children": [],
                  "__text__": "备选项"
                },
                "__key__": "__children"
              }, {
                "el-radio": {
                  ":label": "9",
                  "lc-mark": "",
                  "lc_id": "kgp2vfR6ti",
                  "__children": [],
                  "__text__": "备选项"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "wwgDyr1OR2",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "6KW/uZOTEM",
              "__children": [],
              "__text__": "Checkbox 多选框"
            },
            "__key__": "__children"
          }, {
            "el-checkbox-group": {
              "lc-mark": "",
              "v-model": "checkList",
              "lc_id": "Uen92zl/6G",
              "__children": [{
                "el-checkbox": {
                  "label": "复选框 A",
                  "lc_id": "FgCPjGEWNa",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-checkbox": {
                  "label": "复选框 B",
                  "lc_id": "FAGQbE5NjH",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-checkbox": {
                  "lc-mark": "",
                  "label": "复选框 C",
                  "lc_id": "vp/RVl8A/3",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "VEDRtauvNm",
          "__children": [{
            "el-input": {
              "v-model": "input",
              "placeholder": "请输入内容",
              "lc-mark": "",
              "lc_id": "ffFxjUysQl",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-input": {
              "type": "textarea",
              "lc-mark": "",
              ":autosize": "{ minRows: 2, maxRows: 4}",
              "placeholder": "请输入内容",
              "v-model": "textarea2",
              "lc_id": "l7XPAnIanl",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "4JbZ+JNrQw",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "qBSKct8boj",
              "__children": [],
              "__text__": "InputNumber 计数器"
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "display:inline-block;width:200px;",
              "lc-mark": "",
              "lc_id": "xBXsSYROtm",
              "__children": [{
                "el-input-number": {
                  "v-model": "num",
                  "@change": "handleChange",
                  ":min": "1",
                  ":max": "10",
                  "label": "描述文字",
                  "lc_id": "6UG1vTaWBN",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "display:inline-block;width:200px;",
              "lc-mark": "",
              "lc_id": "ma8NcOpTT7",
              "__children": [{
                "el-input-number": {
                  "v-model": "num",
                  "controls-position": "right",
                  "@change": "handleChange",
                  ":min": "1",
                  ":max": "10",
                  "lc_id": "UBHeHrcbVw",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "cug4WVKxu9",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "BkPeGYgetZ",
              "__children": [],
              "__text__": "Select 选择器"
            },
            "__key__": "__children"
          }, {
            "el-select": {
              "v-model": "value",
              "lc-mark": "",
              "placeholder": "请选择",
              "lc_id": "qB59tUf6Gc",
              "__children": [{
                "el-option": {
                  "v-for": "item in options",
                  ":key": "item.value",
                  ":label": "item.label",
                  ":value": "item.value",
                  "lc_id": "whLrgIdezr",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "nDNR0MoKZA",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "p4yqbL8QdC",
              "__children": [],
              "__text__": "Cascader 级联选择器"
            },
            "__key__": "__children"
          }, {
            "el-cascader": {
              "lc-mark": "",
              "v-model": "value2",
              ":options": "options2",
              "@change": "handleChange",
              "lc_id": "nMEiBnay+d",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "H/A6J6KXiY",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "1ly5rIkWVS",
              "__children": [],
              "__text__": "Switch 开关"
            },
            "__key__": "__children"
          }, {
            "el-switch": {
              "lc-mark": "",
              "v-model": "value3",
              "active-text": "按月付费",
              "inactive-text": "按年付费",
              "lc_id": "xKdVt8uBzg",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "PnI1SUBtFH",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "xEukfWny/6",
              "__children": [],
              "__text__": "Slider 滑块"
            },
            "__key__": "__children"
          }, {
            "el-slider": {
              "lc-mark": "",
              "v-model": "value4",
              "lc_id": "6y/Uiwq0ZN",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "5dyMzD3j06",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "ERiurnsreT",
              "__children": [],
              "__text__": "TimePicker 时间选择器"
            },
            "__key__": "__children"
          }, {
            "el-time-select": {
              "v-model": "value5",
              "lc-mark": "",
              ":picker-options": "{ start: '08:30', step: '00:15', end: '18:30' }",
              "placeholder": "选择时间",
              "lc_id": "Sz3vn5DAbX",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-time-picker": {
              "lc-mark": "",
              "is-range": "",
              "v-model": "value1",
              "range-separator": "至",
              "start-placeholder": "开始时间",
              "end-placeholder": "结束时间",
              "placeholder": "选择时间范围",
              "lc_id": "o2nM93CmIm",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "xWW1lIgrLe",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "Sm6zFTno79",
              "__children": [],
              "__text__": "DatePicker 日期选择器"
            },
            "__key__": "__children"
          }, {
            "el-date-picker": {
              "v-model": "value6",
              "lc-mark": "",
              "type": "date",
              "placeholder": "选择日期",
              "lc_id": "5S5Yzx2fXs",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-date-picker": {
              "v-model": "dateValue1",
              "lc-mark": "",
              "type": "daterange",
              "range-separator": "至",
              "start-placeholder": "开始日期",
              "end-placeholder": "结束日期",
              "lc_id": "3D+CY23B2Q",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "SFEe1Ua3f3",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "EDwU3s0SZ6",
              "__children": [],
              "__text__": "Upload 上传"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "Cco/MVefy1",
              "__children": [{
                "el-upload": {
                  "action": "https://jsonplaceholder.typicode.com/posts/",
                  ":on-preview": "handlePreview",
                  ":on-remove": "handleRemove",
                  ":before-remove": "beforeRemove",
                  "multiple": "",
                  "lc-mark": "",
                  ":limit": "3",
                  ":on-exceed": "handleExceed",
                  ":file-list": "fileList",
                  "lc_id": "7frE/pSrYE",
                  "__children": [{
                    "el-button": {
                      "size": "small",
                      "type": "primary",
                      "lc_id": "c/5KHeT+LU",
                      "__children": [],
                      "__text__": "点击上传"
                    },
                    "__key__": "__children"
                  }, {
                    "template": {
                      "#tip": "",
                      "lc_id": "cEzrM0eEXc",
                      "__children": [{
                        "div": {
                          "class": "el-upload__tip",
                          "lc_id": "Vh2iLMvT2c",
                          "__children": [],
                          "__text__": "只能上传jpg/png文件，且不超过500kb"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "style": "max-width:400px;font-size:12px;",
              "lc_id": "NwHRrU2JEM",
              "__children": [{
                "el-upload": {
                  "class": "upload-demo",
                  "action": "https://jsonplaceholder.typicode.com/posts/",
                  ":on-preview": "handlePreview",
                  ":on-remove": "handleRemove",
                  ":file-list": "fileList",
                  "list-type": "picture",
                  "lc_id": "+hJ7DSkPgT",
                  "__children": [{
                    "el-button": {
                      "size": "small",
                      "type": "primary",
                      "lc_id": "y3uZKsl9b/",
                      "__children": [],
                      "__text__": "点击上传"
                    },
                    "__key__": "__children"
                  }, {
                    "template": {
                      "#tip": "",
                      "lc_id": "0JB5ZbGk3I",
                      "__children": [{
                        "div": {
                          "class": "el-upload__tip",
                          "lc_id": "esyAhLLNGI",
                          "__children": [],
                          "__text__": "只能上传jpg/png文件，且不超过500kb"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }],
              "__text__": "图片列表缩略图:"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "g/E9ZNwP9E",
              "__children": [{
                "el-upload": {
                  "class": "upload-demo",
                  "lc-mark": "",
                  "drag": "",
                  "action": "https://jsonplaceholder.typicode.com/posts/",
                  "multiple": "",
                  "lc_id": "ADzwW/1hsX",
                  "__children": [{
                    "i": {
                      "class": "el-icon-upload",
                      "lc_id": "FsQAFizcWf",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "div": {
                      "class": "el-upload__text",
                      "lc_id": "CCys4DMWDP",
                      "__children": [{
                        "em": {
                          "lc_id": "TbbfPE9Hu+",
                          "__children": [],
                          "__text__": "点击上传"
                        },
                        "__key__": "__children"
                      }],
                      "__text__": "将文件拖到此处，或"
                    },
                    "__key__": "__children"
                  }, {
                    "template": {
                      "#tip": "",
                      "lc_id": "K65M529P0Z",
                      "__children": [{
                        "div": {
                          "class": "el-upload__tip",
                          "lc_id": "4GA0T+3HDL",
                          "__children": [],
                          "__text__": "只能上传jpg/png文件，且不超过500kb"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "X/f9Q6XT+l",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "7NKyW9NxNM",
              "__children": [],
              "__text__": "Rate 评分"
            },
            "__key__": "__children"
          }, {
            "el-rate": {
              "v-model": "value7",
              "lc-mark": "",
              "show-text": "",
              "lc_id": "gWm2+ckHWm",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "unZHE/lFYS",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "9gDxl8XOEm",
              "__children": [],
              "__text__": "ColorPicker 颜色选择器"
            },
            "__key__": "__children"
          }, {
            "el-color-picker": {
              "lc-mark": "",
              "v-model": "color1",
              "lc_id": "V+9zRMsjFK",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "D9kF2S4UlD": {
    "div": {
      "lc_id": "D9kF2S4UlD",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "DH8WXyx5Hd",
          "__children": [],
          "__text__": "Radio 单选框"
        },
        "__key__": "__children"
      }, {
        "el-radio-group": {
          "v-model": "radio",
          "lc-mark": "",
          "lc_id": "f0v5GqbM8W",
          "__children": [{
            "el-radio": {
              ":label": "3",
              "lc_id": "iS/l/lS7uE",
              "__children": [],
              "__text__": "备选项"
            },
            "__key__": "__children"
          }, {
            "el-radio": {
              ":label": "6",
              "lc_id": "PwMXXlWapK",
              "__children": [],
              "__text__": "备选项"
            },
            "__key__": "__children"
          }, {
            "el-radio": {
              ":label": "9",
              "lc-mark": "",
              "lc_id": "kgp2vfR6ti",
              "__children": [],
              "__text__": "备选项"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "DH8WXyx5Hd": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "DH8WXyx5Hd",
      "__children": [],
      "__text__": "Radio 单选框"
    }
  },
  "f0v5GqbM8W": {
    "el-radio-group": {
      "v-model": "radio",
      "lc-mark": "",
      "lc_id": "f0v5GqbM8W",
      "__children": [{
        "el-radio": {
          ":label": "3",
          "lc_id": "iS/l/lS7uE",
          "__children": [],
          "__text__": "备选项"
        },
        "__key__": "__children"
      }, {
        "el-radio": {
          ":label": "6",
          "lc_id": "PwMXXlWapK",
          "__children": [],
          "__text__": "备选项"
        },
        "__key__": "__children"
      }, {
        "el-radio": {
          ":label": "9",
          "lc-mark": "",
          "lc_id": "kgp2vfR6ti",
          "__children": [],
          "__text__": "备选项"
        },
        "__key__": "__children"
      }]
    }
  },
  "iS/l/lS7uE": {
    "el-radio": {
      ":label": "3",
      "lc_id": "iS/l/lS7uE",
      "__children": [],
      "__text__": "备选项"
    }
  },
  "PwMXXlWapK": {
    "el-radio": {
      ":label": "6",
      "lc_id": "PwMXXlWapK",
      "__children": [],
      "__text__": "备选项"
    }
  },
  "kgp2vfR6ti": {
    "el-radio": {
      ":label": "9",
      "lc-mark": "",
      "lc_id": "kgp2vfR6ti",
      "__children": [],
      "__text__": "备选项"
    }
  },
  "wwgDyr1OR2": {
    "div": {
      "lc_id": "wwgDyr1OR2",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "6KW/uZOTEM",
          "__children": [],
          "__text__": "Checkbox 多选框"
        },
        "__key__": "__children"
      }, {
        "el-checkbox-group": {
          "lc-mark": "",
          "v-model": "checkList",
          "lc_id": "Uen92zl/6G",
          "__children": [{
            "el-checkbox": {
              "label": "复选框 A",
              "lc_id": "FgCPjGEWNa",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-checkbox": {
              "label": "复选框 B",
              "lc_id": "FAGQbE5NjH",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-checkbox": {
              "lc-mark": "",
              "label": "复选框 C",
              "lc_id": "vp/RVl8A/3",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "6KW/uZOTEM": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "6KW/uZOTEM",
      "__children": [],
      "__text__": "Checkbox 多选框"
    }
  },
  "Uen92zl/6G": {
    "el-checkbox-group": {
      "lc-mark": "",
      "v-model": "checkList",
      "lc_id": "Uen92zl/6G",
      "__children": [{
        "el-checkbox": {
          "label": "复选框 A",
          "lc_id": "FgCPjGEWNa",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-checkbox": {
          "label": "复选框 B",
          "lc_id": "FAGQbE5NjH",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-checkbox": {
          "lc-mark": "",
          "label": "复选框 C",
          "lc_id": "vp/RVl8A/3",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "FgCPjGEWNa": {
    "el-checkbox": {
      "label": "复选框 A",
      "lc_id": "FgCPjGEWNa",
      "__children": []
    }
  },
  "FAGQbE5NjH": {
    "el-checkbox": {
      "label": "复选框 B",
      "lc_id": "FAGQbE5NjH",
      "__children": []
    }
  },
  "vp/RVl8A/3": {
    "el-checkbox": {
      "lc-mark": "",
      "label": "复选框 C",
      "lc_id": "vp/RVl8A/3",
      "__children": []
    }
  },
  "VEDRtauvNm": {
    "div": {
      "lc_id": "VEDRtauvNm",
      "__children": [{
        "el-input": {
          "v-model": "input",
          "placeholder": "请输入内容",
          "lc-mark": "",
          "lc_id": "ffFxjUysQl",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-input": {
          "type": "textarea",
          "lc-mark": "",
          ":autosize": "{ minRows: 2, maxRows: 4}",
          "placeholder": "请输入内容",
          "v-model": "textarea2",
          "lc_id": "l7XPAnIanl",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "ffFxjUysQl": {
    "el-input": {
      "v-model": "input",
      "placeholder": "请输入内容",
      "lc-mark": "",
      "lc_id": "ffFxjUysQl",
      "__children": []
    }
  },
  "l7XPAnIanl": {
    "el-input": {
      "type": "textarea",
      "lc-mark": "",
      ":autosize": "{ minRows: 2, maxRows: 4}",
      "placeholder": "请输入内容",
      "v-model": "textarea2",
      "lc_id": "l7XPAnIanl",
      "__children": []
    }
  },
  "4JbZ+JNrQw": {
    "div": {
      "lc_id": "4JbZ+JNrQw",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "qBSKct8boj",
          "__children": [],
          "__text__": "InputNumber 计数器"
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "display:inline-block;width:200px;",
          "lc-mark": "",
          "lc_id": "xBXsSYROtm",
          "__children": [{
            "el-input-number": {
              "v-model": "num",
              "@change": "handleChange",
              ":min": "1",
              ":max": "10",
              "label": "描述文字",
              "lc_id": "6UG1vTaWBN",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "display:inline-block;width:200px;",
          "lc-mark": "",
          "lc_id": "ma8NcOpTT7",
          "__children": [{
            "el-input-number": {
              "v-model": "num",
              "controls-position": "right",
              "@change": "handleChange",
              ":min": "1",
              ":max": "10",
              "lc_id": "UBHeHrcbVw",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "qBSKct8boj": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "qBSKct8boj",
      "__children": [],
      "__text__": "InputNumber 计数器"
    }
  },
  "xBXsSYROtm": {
    "div": {
      "style": "display:inline-block;width:200px;",
      "lc-mark": "",
      "lc_id": "xBXsSYROtm",
      "__children": [{
        "el-input-number": {
          "v-model": "num",
          "@change": "handleChange",
          ":min": "1",
          ":max": "10",
          "label": "描述文字",
          "lc_id": "6UG1vTaWBN",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "6UG1vTaWBN": {
    "el-input-number": {
      "v-model": "num",
      "@change": "handleChange",
      ":min": "1",
      ":max": "10",
      "label": "描述文字",
      "lc_id": "6UG1vTaWBN",
      "__children": []
    }
  },
  "ma8NcOpTT7": {
    "div": {
      "style": "display:inline-block;width:200px;",
      "lc-mark": "",
      "lc_id": "ma8NcOpTT7",
      "__children": [{
        "el-input-number": {
          "v-model": "num",
          "controls-position": "right",
          "@change": "handleChange",
          ":min": "1",
          ":max": "10",
          "lc_id": "UBHeHrcbVw",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "UBHeHrcbVw": {
    "el-input-number": {
      "v-model": "num",
      "controls-position": "right",
      "@change": "handleChange",
      ":min": "1",
      ":max": "10",
      "lc_id": "UBHeHrcbVw",
      "__children": []
    }
  },
  "cug4WVKxu9": {
    "div": {
      "lc_id": "cug4WVKxu9",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "BkPeGYgetZ",
          "__children": [],
          "__text__": "Select 选择器"
        },
        "__key__": "__children"
      }, {
        "el-select": {
          "v-model": "value",
          "lc-mark": "",
          "placeholder": "请选择",
          "lc_id": "qB59tUf6Gc",
          "__children": [{
            "el-option": {
              "v-for": "item in options",
              ":key": "item.value",
              ":label": "item.label",
              ":value": "item.value",
              "lc_id": "whLrgIdezr",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "BkPeGYgetZ": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "BkPeGYgetZ",
      "__children": [],
      "__text__": "Select 选择器"
    }
  },
  "qB59tUf6Gc": {
    "el-select": {
      "v-model": "value",
      "lc-mark": "",
      "placeholder": "请选择",
      "lc_id": "qB59tUf6Gc",
      "__children": [{
        "el-option": {
          "v-for": "item in options",
          ":key": "item.value",
          ":label": "item.label",
          ":value": "item.value",
          "lc_id": "whLrgIdezr",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "whLrgIdezr": {
    "el-option": {
      "v-for": "item in options",
      ":key": "item.value",
      ":label": "item.label",
      ":value": "item.value",
      "lc_id": "whLrgIdezr",
      "__children": []
    }
  },
  "nDNR0MoKZA": {
    "div": {
      "lc_id": "nDNR0MoKZA",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "p4yqbL8QdC",
          "__children": [],
          "__text__": "Cascader 级联选择器"
        },
        "__key__": "__children"
      }, {
        "el-cascader": {
          "lc-mark": "",
          "v-model": "value2",
          ":options": "options2",
          "@change": "handleChange",
          "lc_id": "nMEiBnay+d",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "p4yqbL8QdC": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "p4yqbL8QdC",
      "__children": [],
      "__text__": "Cascader 级联选择器"
    }
  },
  "nMEiBnay+d": {
    "el-cascader": {
      "lc-mark": "",
      "v-model": "value2",
      ":options": "options2",
      "@change": "handleChange",
      "lc_id": "nMEiBnay+d",
      "__children": []
    }
  },
  "H/A6J6KXiY": {
    "div": {
      "lc_id": "H/A6J6KXiY",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "1ly5rIkWVS",
          "__children": [],
          "__text__": "Switch 开关"
        },
        "__key__": "__children"
      }, {
        "el-switch": {
          "lc-mark": "",
          "v-model": "value3",
          "active-text": "按月付费",
          "inactive-text": "按年付费",
          "lc_id": "xKdVt8uBzg",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "1ly5rIkWVS": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "1ly5rIkWVS",
      "__children": [],
      "__text__": "Switch 开关"
    }
  },
  "xKdVt8uBzg": {
    "el-switch": {
      "lc-mark": "",
      "v-model": "value3",
      "active-text": "按月付费",
      "inactive-text": "按年付费",
      "lc_id": "xKdVt8uBzg",
      "__children": []
    }
  },
  "PnI1SUBtFH": {
    "div": {
      "lc_id": "PnI1SUBtFH",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "xEukfWny/6",
          "__children": [],
          "__text__": "Slider 滑块"
        },
        "__key__": "__children"
      }, {
        "el-slider": {
          "lc-mark": "",
          "v-model": "value4",
          "lc_id": "6y/Uiwq0ZN",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "xEukfWny/6": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "xEukfWny/6",
      "__children": [],
      "__text__": "Slider 滑块"
    }
  },
  "6y/Uiwq0ZN": {
    "el-slider": {
      "lc-mark": "",
      "v-model": "value4",
      "lc_id": "6y/Uiwq0ZN",
      "__children": []
    }
  },
  "5dyMzD3j06": {
    "div": {
      "lc_id": "5dyMzD3j06",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "ERiurnsreT",
          "__children": [],
          "__text__": "TimePicker 时间选择器"
        },
        "__key__": "__children"
      }, {
        "el-time-select": {
          "v-model": "value5",
          "lc-mark": "",
          ":picker-options": "{ start: '08:30', step: '00:15', end: '18:30' }",
          "placeholder": "选择时间",
          "lc_id": "Sz3vn5DAbX",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-time-picker": {
          "lc-mark": "",
          "is-range": "",
          "v-model": "value1",
          "range-separator": "至",
          "start-placeholder": "开始时间",
          "end-placeholder": "结束时间",
          "placeholder": "选择时间范围",
          "lc_id": "o2nM93CmIm",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "ERiurnsreT": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "ERiurnsreT",
      "__children": [],
      "__text__": "TimePicker 时间选择器"
    }
  },
  "Sz3vn5DAbX": {
    "el-time-select": {
      "v-model": "value5",
      "lc-mark": "",
      ":picker-options": "{ start: '08:30', step: '00:15', end: '18:30' }",
      "placeholder": "选择时间",
      "lc_id": "Sz3vn5DAbX",
      "__children": []
    }
  },
  "o2nM93CmIm": {
    "el-time-picker": {
      "lc-mark": "",
      "is-range": "",
      "v-model": "value1",
      "range-separator": "至",
      "start-placeholder": "开始时间",
      "end-placeholder": "结束时间",
      "placeholder": "选择时间范围",
      "lc_id": "o2nM93CmIm",
      "__children": []
    }
  },
  "xWW1lIgrLe": {
    "div": {
      "lc_id": "xWW1lIgrLe",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "Sm6zFTno79",
          "__children": [],
          "__text__": "DatePicker 日期选择器"
        },
        "__key__": "__children"
      }, {
        "el-date-picker": {
          "v-model": "value6",
          "lc-mark": "",
          "type": "date",
          "placeholder": "选择日期",
          "lc_id": "5S5Yzx2fXs",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-date-picker": {
          "v-model": "dateValue1",
          "lc-mark": "",
          "type": "daterange",
          "range-separator": "至",
          "start-placeholder": "开始日期",
          "end-placeholder": "结束日期",
          "lc_id": "3D+CY23B2Q",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "Sm6zFTno79": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "Sm6zFTno79",
      "__children": [],
      "__text__": "DatePicker 日期选择器"
    }
  },
  "5S5Yzx2fXs": {
    "el-date-picker": {
      "v-model": "value6",
      "lc-mark": "",
      "type": "date",
      "placeholder": "选择日期",
      "lc_id": "5S5Yzx2fXs",
      "__children": []
    }
  },
  "3D+CY23B2Q": {
    "el-date-picker": {
      "v-model": "dateValue1",
      "lc-mark": "",
      "type": "daterange",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期",
      "lc_id": "3D+CY23B2Q",
      "__children": []
    }
  },
  "SFEe1Ua3f3": {
    "div": {
      "lc_id": "SFEe1Ua3f3",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "EDwU3s0SZ6",
          "__children": [],
          "__text__": "Upload 上传"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "Cco/MVefy1",
          "__children": [{
            "el-upload": {
              "action": "https://jsonplaceholder.typicode.com/posts/",
              ":on-preview": "handlePreview",
              ":on-remove": "handleRemove",
              ":before-remove": "beforeRemove",
              "multiple": "",
              "lc-mark": "",
              ":limit": "3",
              ":on-exceed": "handleExceed",
              ":file-list": "fileList",
              "lc_id": "7frE/pSrYE",
              "__children": [{
                "el-button": {
                  "size": "small",
                  "type": "primary",
                  "lc_id": "c/5KHeT+LU",
                  "__children": [],
                  "__text__": "点击上传"
                },
                "__key__": "__children"
              }, {
                "template": {
                  "#tip": "",
                  "lc_id": "cEzrM0eEXc",
                  "__children": [{
                    "div": {
                      "class": "el-upload__tip",
                      "lc_id": "Vh2iLMvT2c",
                      "__children": [],
                      "__text__": "只能上传jpg/png文件，且不超过500kb"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "style": "max-width:400px;font-size:12px;",
          "lc_id": "NwHRrU2JEM",
          "__children": [{
            "el-upload": {
              "class": "upload-demo",
              "action": "https://jsonplaceholder.typicode.com/posts/",
              ":on-preview": "handlePreview",
              ":on-remove": "handleRemove",
              ":file-list": "fileList",
              "list-type": "picture",
              "lc_id": "+hJ7DSkPgT",
              "__children": [{
                "el-button": {
                  "size": "small",
                  "type": "primary",
                  "lc_id": "y3uZKsl9b/",
                  "__children": [],
                  "__text__": "点击上传"
                },
                "__key__": "__children"
              }, {
                "template": {
                  "#tip": "",
                  "lc_id": "0JB5ZbGk3I",
                  "__children": [{
                    "div": {
                      "class": "el-upload__tip",
                      "lc_id": "esyAhLLNGI",
                      "__children": [],
                      "__text__": "只能上传jpg/png文件，且不超过500kb"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }],
          "__text__": "图片列表缩略图:"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "g/E9ZNwP9E",
          "__children": [{
            "el-upload": {
              "class": "upload-demo",
              "lc-mark": "",
              "drag": "",
              "action": "https://jsonplaceholder.typicode.com/posts/",
              "multiple": "",
              "lc_id": "ADzwW/1hsX",
              "__children": [{
                "i": {
                  "class": "el-icon-upload",
                  "lc_id": "FsQAFizcWf",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "div": {
                  "class": "el-upload__text",
                  "lc_id": "CCys4DMWDP",
                  "__children": [{
                    "em": {
                      "lc_id": "TbbfPE9Hu+",
                      "__children": [],
                      "__text__": "点击上传"
                    },
                    "__key__": "__children"
                  }],
                  "__text__": "将文件拖到此处，或"
                },
                "__key__": "__children"
              }, {
                "template": {
                  "#tip": "",
                  "lc_id": "K65M529P0Z",
                  "__children": [{
                    "div": {
                      "class": "el-upload__tip",
                      "lc_id": "4GA0T+3HDL",
                      "__children": [],
                      "__text__": "只能上传jpg/png文件，且不超过500kb"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "EDwU3s0SZ6": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "EDwU3s0SZ6",
      "__children": [],
      "__text__": "Upload 上传"
    }
  },
  "Cco/MVefy1": {
    "div": {
      "lc_id": "Cco/MVefy1",
      "__children": [{
        "el-upload": {
          "action": "https://jsonplaceholder.typicode.com/posts/",
          ":on-preview": "handlePreview",
          ":on-remove": "handleRemove",
          ":before-remove": "beforeRemove",
          "multiple": "",
          "lc-mark": "",
          ":limit": "3",
          ":on-exceed": "handleExceed",
          ":file-list": "fileList",
          "lc_id": "7frE/pSrYE",
          "__children": [{
            "el-button": {
              "size": "small",
              "type": "primary",
              "lc_id": "c/5KHeT+LU",
              "__children": [],
              "__text__": "点击上传"
            },
            "__key__": "__children"
          }, {
            "template": {
              "#tip": "",
              "lc_id": "cEzrM0eEXc",
              "__children": [{
                "div": {
                  "class": "el-upload__tip",
                  "lc_id": "Vh2iLMvT2c",
                  "__children": [],
                  "__text__": "只能上传jpg/png文件，且不超过500kb"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "7frE/pSrYE": {
    "el-upload": {
      "action": "https://jsonplaceholder.typicode.com/posts/",
      ":on-preview": "handlePreview",
      ":on-remove": "handleRemove",
      ":before-remove": "beforeRemove",
      "multiple": "",
      "lc-mark": "",
      ":limit": "3",
      ":on-exceed": "handleExceed",
      ":file-list": "fileList",
      "lc_id": "7frE/pSrYE",
      "__children": [{
        "el-button": {
          "size": "small",
          "type": "primary",
          "lc_id": "c/5KHeT+LU",
          "__children": [],
          "__text__": "点击上传"
        },
        "__key__": "__children"
      }, {
        "template": {
          "#tip": "",
          "lc_id": "cEzrM0eEXc",
          "__children": [{
            "div": {
              "class": "el-upload__tip",
              "lc_id": "Vh2iLMvT2c",
              "__children": [],
              "__text__": "只能上传jpg/png文件，且不超过500kb"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "c/5KHeT+LU": {
    "el-button": {
      "size": "small",
      "type": "primary",
      "lc_id": "c/5KHeT+LU",
      "__children": [],
      "__text__": "点击上传"
    }
  },
  "cEzrM0eEXc": {
    "template": {
      "#tip": "",
      "lc_id": "cEzrM0eEXc",
      "__children": [{
        "div": {
          "class": "el-upload__tip",
          "lc_id": "Vh2iLMvT2c",
          "__children": [],
          "__text__": "只能上传jpg/png文件，且不超过500kb"
        },
        "__key__": "__children"
      }]
    }
  },
  "Vh2iLMvT2c": {
    "div": {
      "class": "el-upload__tip",
      "lc_id": "Vh2iLMvT2c",
      "__children": [],
      "__text__": "只能上传jpg/png文件，且不超过500kb"
    }
  },
  "NwHRrU2JEM": {
    "div": {
      "lc-mark": "",
      "style": "max-width:400px;font-size:12px;",
      "lc_id": "NwHRrU2JEM",
      "__children": [{
        "el-upload": {
          "class": "upload-demo",
          "action": "https://jsonplaceholder.typicode.com/posts/",
          ":on-preview": "handlePreview",
          ":on-remove": "handleRemove",
          ":file-list": "fileList",
          "list-type": "picture",
          "lc_id": "+hJ7DSkPgT",
          "__children": [{
            "el-button": {
              "size": "small",
              "type": "primary",
              "lc_id": "y3uZKsl9b/",
              "__children": [],
              "__text__": "点击上传"
            },
            "__key__": "__children"
          }, {
            "template": {
              "#tip": "",
              "lc_id": "0JB5ZbGk3I",
              "__children": [{
                "div": {
                  "class": "el-upload__tip",
                  "lc_id": "esyAhLLNGI",
                  "__children": [],
                  "__text__": "只能上传jpg/png文件，且不超过500kb"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }],
      "__text__": "图片列表缩略图:"
    }
  },
  "+hJ7DSkPgT": {
    "el-upload": {
      "class": "upload-demo",
      "action": "https://jsonplaceholder.typicode.com/posts/",
      ":on-preview": "handlePreview",
      ":on-remove": "handleRemove",
      ":file-list": "fileList",
      "list-type": "picture",
      "lc_id": "+hJ7DSkPgT",
      "__children": [{
        "el-button": {
          "size": "small",
          "type": "primary",
          "lc_id": "y3uZKsl9b/",
          "__children": [],
          "__text__": "点击上传"
        },
        "__key__": "__children"
      }, {
        "template": {
          "#tip": "",
          "lc_id": "0JB5ZbGk3I",
          "__children": [{
            "div": {
              "class": "el-upload__tip",
              "lc_id": "esyAhLLNGI",
              "__children": [],
              "__text__": "只能上传jpg/png文件，且不超过500kb"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "y3uZKsl9b/": {
    "el-button": {
      "size": "small",
      "type": "primary",
      "lc_id": "y3uZKsl9b/",
      "__children": [],
      "__text__": "点击上传"
    }
  },
  "0JB5ZbGk3I": {
    "template": {
      "#tip": "",
      "lc_id": "0JB5ZbGk3I",
      "__children": [{
        "div": {
          "class": "el-upload__tip",
          "lc_id": "esyAhLLNGI",
          "__children": [],
          "__text__": "只能上传jpg/png文件，且不超过500kb"
        },
        "__key__": "__children"
      }]
    }
  },
  "esyAhLLNGI": {
    "div": {
      "class": "el-upload__tip",
      "lc_id": "esyAhLLNGI",
      "__children": [],
      "__text__": "只能上传jpg/png文件，且不超过500kb"
    }
  },
  "g/E9ZNwP9E": {
    "div": {
      "lc_id": "g/E9ZNwP9E",
      "__children": [{
        "el-upload": {
          "class": "upload-demo",
          "lc-mark": "",
          "drag": "",
          "action": "https://jsonplaceholder.typicode.com/posts/",
          "multiple": "",
          "lc_id": "ADzwW/1hsX",
          "__children": [{
            "i": {
              "class": "el-icon-upload",
              "lc_id": "FsQAFizcWf",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "div": {
              "class": "el-upload__text",
              "lc_id": "CCys4DMWDP",
              "__children": [{
                "em": {
                  "lc_id": "TbbfPE9Hu+",
                  "__children": [],
                  "__text__": "点击上传"
                },
                "__key__": "__children"
              }],
              "__text__": "将文件拖到此处，或"
            },
            "__key__": "__children"
          }, {
            "template": {
              "#tip": "",
              "lc_id": "K65M529P0Z",
              "__children": [{
                "div": {
                  "class": "el-upload__tip",
                  "lc_id": "4GA0T+3HDL",
                  "__children": [],
                  "__text__": "只能上传jpg/png文件，且不超过500kb"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "ADzwW/1hsX": {
    "el-upload": {
      "class": "upload-demo",
      "lc-mark": "",
      "drag": "",
      "action": "https://jsonplaceholder.typicode.com/posts/",
      "multiple": "",
      "lc_id": "ADzwW/1hsX",
      "__children": [{
        "i": {
          "class": "el-icon-upload",
          "lc_id": "FsQAFizcWf",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "div": {
          "class": "el-upload__text",
          "lc_id": "CCys4DMWDP",
          "__children": [{
            "em": {
              "lc_id": "TbbfPE9Hu+",
              "__children": [],
              "__text__": "点击上传"
            },
            "__key__": "__children"
          }],
          "__text__": "将文件拖到此处，或"
        },
        "__key__": "__children"
      }, {
        "template": {
          "#tip": "",
          "lc_id": "K65M529P0Z",
          "__children": [{
            "div": {
              "class": "el-upload__tip",
              "lc_id": "4GA0T+3HDL",
              "__children": [],
              "__text__": "只能上传jpg/png文件，且不超过500kb"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "FsQAFizcWf": {
    "i": {
      "class": "el-icon-upload",
      "lc_id": "FsQAFizcWf",
      "__children": []
    }
  },
  "CCys4DMWDP": {
    "div": {
      "class": "el-upload__text",
      "lc_id": "CCys4DMWDP",
      "__children": [{
        "em": {
          "lc_id": "TbbfPE9Hu+",
          "__children": [],
          "__text__": "点击上传"
        },
        "__key__": "__children"
      }],
      "__text__": "将文件拖到此处，或"
    }
  },
  "TbbfPE9Hu+": {
    "em": {
      "lc_id": "TbbfPE9Hu+",
      "__children": [],
      "__text__": "点击上传"
    }
  },
  "K65M529P0Z": {
    "template": {
      "#tip": "",
      "lc_id": "K65M529P0Z",
      "__children": [{
        "div": {
          "class": "el-upload__tip",
          "lc_id": "4GA0T+3HDL",
          "__children": [],
          "__text__": "只能上传jpg/png文件，且不超过500kb"
        },
        "__key__": "__children"
      }]
    }
  },
  "4GA0T+3HDL": {
    "div": {
      "class": "el-upload__tip",
      "lc_id": "4GA0T+3HDL",
      "__children": [],
      "__text__": "只能上传jpg/png文件，且不超过500kb"
    }
  },
  "X/f9Q6XT+l": {
    "div": {
      "lc_id": "X/f9Q6XT+l",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "7NKyW9NxNM",
          "__children": [],
          "__text__": "Rate 评分"
        },
        "__key__": "__children"
      }, {
        "el-rate": {
          "v-model": "value7",
          "lc-mark": "",
          "show-text": "",
          "lc_id": "gWm2+ckHWm",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "7NKyW9NxNM": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "7NKyW9NxNM",
      "__children": [],
      "__text__": "Rate 评分"
    }
  },
  "gWm2+ckHWm": {
    "el-rate": {
      "v-model": "value7",
      "lc-mark": "",
      "show-text": "",
      "lc_id": "gWm2+ckHWm",
      "__children": []
    }
  },
  "unZHE/lFYS": {
    "div": {
      "lc_id": "unZHE/lFYS",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "9gDxl8XOEm",
          "__children": [],
          "__text__": "ColorPicker 颜色选择器"
        },
        "__key__": "__children"
      }, {
        "el-color-picker": {
          "lc-mark": "",
          "v-model": "color1",
          "lc_id": "V+9zRMsjFK",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "9gDxl8XOEm": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "9gDxl8XOEm",
      "__children": [],
      "__text__": "ColorPicker 颜色选择器"
    }
  },
  "V+9zRMsjFK": {
    "el-color-picker": {
      "lc-mark": "",
      "v-model": "color1",
      "lc_id": "V+9zRMsjFK",
      "__children": []
    }
  },
  "JoW6e9bEi+": {
    "div": {
      "lc_id": "JoW6e9bEi+",
      "__children": [{
        "div": {
          "lc_id": "VGGG5BzJK+",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "LgRs8iauTY",
              "__children": [],
              "__text__": "Form 行内表单"
            },
            "__key__": "__children"
          }, {
            "el-form": {
              "inline": "",
              "lc-mark": "",
              ":model": "formInline",
              "class": "demo-form-inline",
              "lc_id": "1WJLzNIqg/",
              "__children": [{
                "el-form-item": {
                  "label": "审批人",
                  "lc-mark": "",
                  "lc_id": "9iLdD7vRhd",
                  "__children": [{
                    "el-input": {
                      "v-model": "formInline.user",
                      "placeholder": "审批人",
                      "lc_id": "2N8NbmX1qy",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "label": "活动区域",
                  "lc-mark": "",
                  "lc_id": "cuShpTy+7P",
                  "__children": [{
                    "el-select": {
                      "v-model": "formInline.region",
                      "placeholder": "活动区域",
                      "lc_id": "fblnBhXD33",
                      "__children": [{
                        "el-option": {
                          "label": "区域一",
                          "value": "shanghai",
                          "lc_id": "xEcFlTO5pD",
                          "__children": []
                        },
                        "__key__": "__children"
                      }, {
                        "el-option": {
                          "label": "区域二",
                          "value": "beijing",
                          "lc_id": "PjVhPT7HZa",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "tY5UywhfnK",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "Efto0Pndua",
              "__children": [],
              "__text__": "Form 表单"
            },
            "__key__": "__children"
          }, {
            "span": {
              "lc-mark": "",
              "lc_id": "hqHTBq8YqG",
              "__children": [{
                "span": {
                  "lc_id": "EF8c2VPZRA",
                  "__children": [],
                  "__text__": "Key:"
                },
                "__key__": "__children"
              }, {
                "span": {
                  "lc_id": "lWbqzj2kHH",
                  "__children": [],
                  "__text__": "Value"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "span": {
              "lc-mark": "",
              "lc_id": "cjIUIdSSsS",
              "__children": [{
                "b": {
                  "lc_id": "ADps8bfr5O",
                  "__children": [],
                  "__text__": "Key:"
                },
                "__key__": "__children"
              }, {
                "span": {
                  "lc_id": "beSG8unZWU",
                  "__children": [],
                  "__text__": "Value"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "span": {
              "lc-mark": "",
              "lc_id": "y29nZqQNoJ",
              "__children": [{
                "b": {
                  "lc_id": "N9wWIaXqzx",
                  "__children": [],
                  "__text__": "Key:"
                },
                "__key__": "__children"
              }, {
                "div": {
                  "label-lc-mark": "",
                  "lc_id": "/ZBycQe5p/",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "PzuXdsu6kd",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "LdGjb6Df9M",
              "__children": [],
              "__text__": "Form 容器"
            },
            "__key__": "__children"
          }, {
            "el-form": {
              ":model": "ruleForm",
              ":rules": "rules",
              "ref": "ruleForm",
              "lc-mark": "",
              "label-width": "100px",
              "class": "demo-border",
              "lc_id": "Zzz06+mzkO",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "8ZewsTbRuD",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "cX5zh7f+RV",
              "__children": [],
              "__text__": "Form 典型表单"
            },
            "__key__": "__children"
          }, {
            "el-form": {
              ":model": "ruleForm",
              ":rules": "rules",
              "ref": "ruleForm",
              "lc-mark": "",
              "label-width": "100px",
              "class": "demo-border",
              "lc_id": "gx5EBJU9WS",
              "__children": [{
                "el-form-item": {
                  "label": "活动名称",
                  "prop": "name",
                  "lc-mark": "",
                  "lc_id": "6md1kDs8qa",
                  "__children": [{
                    "el-input": {
                      "v-model": "ruleForm.name",
                      "lc_id": "QG5eYYTCSB",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "label": "活动区域",
                  "prop": "region",
                  "lc-mark": "",
                  "lc_id": "tnJTgI76Kp",
                  "__children": [{
                    "el-select": {
                      "v-model": "ruleForm.region",
                      "placeholder": "请选择活动区域",
                      "lc_id": "nrTlsTbxPM",
                      "__children": [{
                        "el-option": {
                          "label": "区域一",
                          "value": "shanghai",
                          "lc_id": "mXsEEs0/z0",
                          "__children": []
                        },
                        "__key__": "__children"
                      }, {
                        "el-option": {
                          "label": "区域二",
                          "value": "beijing",
                          "lc_id": "2GzfZP1Cbx",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "label": "活动时间",
                  "required": "",
                  "lc-mark": "",
                  "lc_id": "fz4dTVUbEb",
                  "__children": [{
                    "el-col": {
                      ":span": "11",
                      "lc_id": "mmEYR54uQF",
                      "__children": [{
                        "el-form-item": {
                          "prop": "date1",
                          "lc_id": "QkTT/2WWLK",
                          "__children": [{
                            "el-date-picker": {
                              "type": "date",
                              "placeholder": "选择日期",
                              "v-model": "ruleForm.date1",
                              "style": "width: 100%",
                              "lc_id": "G3lxZTQsw5",
                              "__children": []
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }, {
                    "el-col": {
                      "class": "line",
                      ":span": "2",
                      "lc_id": "R2NmSO2FCi",
                      "__children": [],
                      "__text__": "-"
                    },
                    "__key__": "__children"
                  }, {
                    "el-col": {
                      ":span": "11",
                      "lc_id": "eOACIzQ+Dq",
                      "__children": [{
                        "el-form-item": {
                          "prop": "date2",
                          "lc_id": "Ub+QEqDUGN",
                          "__children": [{
                            "el-time-picker": {
                              "placeholder": "选择时间",
                              "v-model": "ruleForm.date2",
                              "style": "width: 100%",
                              "lc_id": "+tkG6VmYdM",
                              "__children": []
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "label": "即时配送",
                  "prop": "delivery",
                  "lc-mark": "",
                  "lc_id": "Lz8oPy38nU",
                  "__children": [{
                    "el-switch": {
                      "v-model": "ruleForm.delivery",
                      "lc_id": "COO1BlBrjF",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "label": "文件上传",
                  "prop": "delivery",
                  "lc-mark": "",
                  "lc_id": "eFNZ7B9jgX",
                  "__children": [{
                    "el-button": {
                      "type": "primary",
                      "size": "small",
                      "lc_id": "7ZjOmdz3Ur",
                      "__children": [{
                        "i": {
                          "class": "el-icon-upload el-icon--right",
                          "lc_id": "IOumsfqV0c",
                          "__children": []
                        },
                        "__key__": "__children"
                      }],
                      "__text__": "上传"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "label": "自定义form-item",
                  "prop": "delivery",
                  "lc-mark": "",
                  "lc_id": "g9ZQTRZogP",
                  "__children": [{
                    "div": {
                      "class": "demo-border",
                      "lc_id": "bICnUogCxE",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "label": "活动性质",
                  "prop": "type",
                  "lc-mark": "",
                  "lc_id": "u5e4jMDa0Z",
                  "__children": [{
                    "el-checkbox-group": {
                      "v-model": "ruleForm.type",
                      "lc_id": "4odzSgDoVc",
                      "__children": [{
                        "el-checkbox": {
                          "label": "美食/餐厅线上活动",
                          "name": "type",
                          "lc_id": "qRZK4l23q9",
                          "__children": []
                        },
                        "__key__": "__children"
                      }, {
                        "el-checkbox": {
                          "label": "地推活动",
                          "name": "type",
                          "lc_id": "WbtFV7IdQ0",
                          "__children": []
                        },
                        "__key__": "__children"
                      }, {
                        "el-checkbox": {
                          "label": "线下主题活动",
                          "name": "type",
                          "lc_id": "/fBZC9Wz76",
                          "__children": []
                        },
                        "__key__": "__children"
                      }, {
                        "el-checkbox": {
                          "label": "单纯品牌曝光",
                          "name": "type",
                          "lc_id": "V+qui3Km7r",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "label": "特殊资源",
                  "prop": "resource",
                  "lc-mark": "",
                  "lc_id": "EfEJRxIgMc",
                  "__children": [{
                    "el-radio-group": {
                      "v-model": "ruleForm.resource",
                      "lc_id": "UaAE0hW4YD",
                      "__children": [{
                        "el-radio": {
                          "label": "线上品牌商赞助",
                          "lc_id": "eVUn2fPBO0",
                          "__children": []
                        },
                        "__key__": "__children"
                      }, {
                        "el-radio": {
                          "label": "线下场地免费",
                          "lc_id": "OhNxMXrfFs",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "label": "活动形式",
                  "prop": "desc",
                  "lc-mark": "",
                  "lc_id": "1J3SXxTQjA",
                  "__children": [{
                    "el-input": {
                      "type": "textarea",
                      "v-model": "ruleForm.desc",
                      "lc_id": "KndAAF/3Mu",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-form-item": {
                  "lc_id": "wSyCEJYjUD",
                  "__children": [{
                    "el-button": {
                      "type": "primary",
                      "@click": "submitForm",
                      "lc_id": "wp2oC1qxYN",
                      "__children": [],
                      "__text__": "立即创建"
                    },
                    "__key__": "__children"
                  }, {
                    "el-button": {
                      "@click": "resetForm",
                      "lc_id": "nWgxJ6a9v+",
                      "__children": [],
                      "__text__": "重置"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "dyK4shOTgK",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "OPhwbT6T5C",
              "__children": [],
              "__text__": "Descriptions 描述列表"
            },
            "__key__": "__children"
          }, {
            "el-descriptions": {
              "title": "用户信息",
              "lc-mark": "",
              "lc_id": "UcepzqrI8T",
              "__children": [{
                "el-descriptions-item": {
                  "label": "用户名",
                  "lc-mark": "",
                  "lc_id": "61qM0Gdqq3",
                  "__children": [],
                  "__text__": "kooriookami"
                },
                "__key__": "__children"
              }, {
                "el-descriptions-item": {
                  "label": "手机号",
                  "lc_id": "p9NL7l0+yS",
                  "__children": [],
                  "__text__": "18100000000"
                },
                "__key__": "__children"
              }, {
                "el-descriptions-item": {
                  "label": "居住地",
                  "lc_id": "gA+SOSpqT1",
                  "__children": [],
                  "__text__": "苏州市"
                },
                "__key__": "__children"
              }, {
                "el-descriptions-item": {
                  "label": "备注",
                  "lc_id": "MpLSTs1V1a",
                  "__children": [{
                    "el-tag": {
                      "size": "small",
                      "lc_id": "x+3JGPZLjM",
                      "__children": [],
                      "__text__": "学校"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-descriptions-item": {
                  "label": "联系地址",
                  "lc_id": "P7eacW7mxC",
                  "__children": [],
                  "__text__": "江苏省苏州市吴中区吴中大道 1188 号"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-descriptions": {
              "title": "垂直带边框列表",
              "direction": "vertical",
              ":column": "4",
              "border": "",
              "lc-mark": "",
              "lc_id": "k4Y9MNzVZb",
              "__children": [{
                "el-descriptions-item": {
                  "label": "用户名",
                  "lc_id": "YTqOj5iy95",
                  "__children": [],
                  "__text__": "kooriookami"
                },
                "__key__": "__children"
              }, {
                "el-descriptions-item": {
                  "label": "手机号",
                  "lc_id": "qx7ONklayE",
                  "__children": [],
                  "__text__": "18100000000"
                },
                "__key__": "__children"
              }, {
                "el-descriptions-item": {
                  "label": "居住地",
                  ":span": "2",
                  "lc_id": "Gip/4MIafd",
                  "__children": [],
                  "__text__": "苏州市"
                },
                "__key__": "__children"
              }, {
                "el-descriptions-item": {
                  "label": "备注",
                  "lc_id": "4wYkIRcdbX",
                  "__children": [{
                    "el-tag": {
                      "size": "small",
                      "lc_id": "9iHUBLDbHY",
                      "__children": [],
                      "__text__": "学校"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-descriptions-item": {
                  "label": "联系地址",
                  "lc_id": "zfJtvesctl",
                  "__children": [],
                  "__text__": "江苏省苏州市吴中区吴中大道 1188 号"
                },
                "__key__": "__children"
              }],
              "__text__": ">"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "VGGG5BzJK+": {
    "div": {
      "lc_id": "VGGG5BzJK+",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "LgRs8iauTY",
          "__children": [],
          "__text__": "Form 行内表单"
        },
        "__key__": "__children"
      }, {
        "el-form": {
          "inline": "",
          "lc-mark": "",
          ":model": "formInline",
          "class": "demo-form-inline",
          "lc_id": "1WJLzNIqg/",
          "__children": [{
            "el-form-item": {
              "label": "审批人",
              "lc-mark": "",
              "lc_id": "9iLdD7vRhd",
              "__children": [{
                "el-input": {
                  "v-model": "formInline.user",
                  "placeholder": "审批人",
                  "lc_id": "2N8NbmX1qy",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "label": "活动区域",
              "lc-mark": "",
              "lc_id": "cuShpTy+7P",
              "__children": [{
                "el-select": {
                  "v-model": "formInline.region",
                  "placeholder": "活动区域",
                  "lc_id": "fblnBhXD33",
                  "__children": [{
                    "el-option": {
                      "label": "区域一",
                      "value": "shanghai",
                      "lc_id": "xEcFlTO5pD",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "el-option": {
                      "label": "区域二",
                      "value": "beijing",
                      "lc_id": "PjVhPT7HZa",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "LgRs8iauTY": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "LgRs8iauTY",
      "__children": [],
      "__text__": "Form 行内表单"
    }
  },
  "1WJLzNIqg/": {
    "el-form": {
      "inline": "",
      "lc-mark": "",
      ":model": "formInline",
      "class": "demo-form-inline",
      "lc_id": "1WJLzNIqg/",
      "__children": [{
        "el-form-item": {
          "label": "审批人",
          "lc-mark": "",
          "lc_id": "9iLdD7vRhd",
          "__children": [{
            "el-input": {
              "v-model": "formInline.user",
              "placeholder": "审批人",
              "lc_id": "2N8NbmX1qy",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "label": "活动区域",
          "lc-mark": "",
          "lc_id": "cuShpTy+7P",
          "__children": [{
            "el-select": {
              "v-model": "formInline.region",
              "placeholder": "活动区域",
              "lc_id": "fblnBhXD33",
              "__children": [{
                "el-option": {
                  "label": "区域一",
                  "value": "shanghai",
                  "lc_id": "xEcFlTO5pD",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-option": {
                  "label": "区域二",
                  "value": "beijing",
                  "lc_id": "PjVhPT7HZa",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "9iLdD7vRhd": {
    "el-form-item": {
      "label": "审批人",
      "lc-mark": "",
      "lc_id": "9iLdD7vRhd",
      "__children": [{
        "el-input": {
          "v-model": "formInline.user",
          "placeholder": "审批人",
          "lc_id": "2N8NbmX1qy",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "2N8NbmX1qy": {
    "el-input": {
      "v-model": "formInline.user",
      "placeholder": "审批人",
      "lc_id": "2N8NbmX1qy",
      "__children": []
    }
  },
  "cuShpTy+7P": {
    "el-form-item": {
      "label": "活动区域",
      "lc-mark": "",
      "lc_id": "cuShpTy+7P",
      "__children": [{
        "el-select": {
          "v-model": "formInline.region",
          "placeholder": "活动区域",
          "lc_id": "fblnBhXD33",
          "__children": [{
            "el-option": {
              "label": "区域一",
              "value": "shanghai",
              "lc_id": "xEcFlTO5pD",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-option": {
              "label": "区域二",
              "value": "beijing",
              "lc_id": "PjVhPT7HZa",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "fblnBhXD33": {
    "el-select": {
      "v-model": "formInline.region",
      "placeholder": "活动区域",
      "lc_id": "fblnBhXD33",
      "__children": [{
        "el-option": {
          "label": "区域一",
          "value": "shanghai",
          "lc_id": "xEcFlTO5pD",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-option": {
          "label": "区域二",
          "value": "beijing",
          "lc_id": "PjVhPT7HZa",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "xEcFlTO5pD": {
    "el-option": {
      "label": "区域一",
      "value": "shanghai",
      "lc_id": "xEcFlTO5pD",
      "__children": []
    }
  },
  "PjVhPT7HZa": {
    "el-option": {
      "label": "区域二",
      "value": "beijing",
      "lc_id": "PjVhPT7HZa",
      "__children": []
    }
  },
  "tY5UywhfnK": {
    "div": {
      "lc_id": "tY5UywhfnK",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "Efto0Pndua",
          "__children": [],
          "__text__": "Form 表单"
        },
        "__key__": "__children"
      }, {
        "span": {
          "lc-mark": "",
          "lc_id": "hqHTBq8YqG",
          "__children": [{
            "span": {
              "lc_id": "EF8c2VPZRA",
              "__children": [],
              "__text__": "Key:"
            },
            "__key__": "__children"
          }, {
            "span": {
              "lc_id": "lWbqzj2kHH",
              "__children": [],
              "__text__": "Value"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "span": {
          "lc-mark": "",
          "lc_id": "cjIUIdSSsS",
          "__children": [{
            "b": {
              "lc_id": "ADps8bfr5O",
              "__children": [],
              "__text__": "Key:"
            },
            "__key__": "__children"
          }, {
            "span": {
              "lc_id": "beSG8unZWU",
              "__children": [],
              "__text__": "Value"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "span": {
          "lc-mark": "",
          "lc_id": "y29nZqQNoJ",
          "__children": [{
            "b": {
              "lc_id": "N9wWIaXqzx",
              "__children": [],
              "__text__": "Key:"
            },
            "__key__": "__children"
          }, {
            "div": {
              "label-lc-mark": "",
              "lc_id": "/ZBycQe5p/",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "Efto0Pndua": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "Efto0Pndua",
      "__children": [],
      "__text__": "Form 表单"
    }
  },
  "hqHTBq8YqG": {
    "span": {
      "lc-mark": "",
      "lc_id": "hqHTBq8YqG",
      "__children": [{
        "span": {
          "lc_id": "EF8c2VPZRA",
          "__children": [],
          "__text__": "Key:"
        },
        "__key__": "__children"
      }, {
        "span": {
          "lc_id": "lWbqzj2kHH",
          "__children": [],
          "__text__": "Value"
        },
        "__key__": "__children"
      }]
    }
  },
  "EF8c2VPZRA": {
    "span": {
      "lc_id": "EF8c2VPZRA",
      "__children": [],
      "__text__": "Key:"
    }
  },
  "lWbqzj2kHH": {
    "span": {
      "lc_id": "lWbqzj2kHH",
      "__children": [],
      "__text__": "Value"
    }
  },
  "cjIUIdSSsS": {
    "span": {
      "lc-mark": "",
      "lc_id": "cjIUIdSSsS",
      "__children": [{
        "b": {
          "lc_id": "ADps8bfr5O",
          "__children": [],
          "__text__": "Key:"
        },
        "__key__": "__children"
      }, {
        "span": {
          "lc_id": "beSG8unZWU",
          "__children": [],
          "__text__": "Value"
        },
        "__key__": "__children"
      }]
    }
  },
  "ADps8bfr5O": {
    "b": {
      "lc_id": "ADps8bfr5O",
      "__children": [],
      "__text__": "Key:"
    }
  },
  "beSG8unZWU": {
    "span": {
      "lc_id": "beSG8unZWU",
      "__children": [],
      "__text__": "Value"
    }
  },
  "y29nZqQNoJ": {
    "span": {
      "lc-mark": "",
      "lc_id": "y29nZqQNoJ",
      "__children": [{
        "b": {
          "lc_id": "N9wWIaXqzx",
          "__children": [],
          "__text__": "Key:"
        },
        "__key__": "__children"
      }, {
        "div": {
          "label-lc-mark": "",
          "lc_id": "/ZBycQe5p/",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "N9wWIaXqzx": {
    "b": {
      "lc_id": "N9wWIaXqzx",
      "__children": [],
      "__text__": "Key:"
    }
  },
  "/ZBycQe5p/": {
    "div": {
      "label-lc-mark": "",
      "lc_id": "/ZBycQe5p/",
      "__children": []
    }
  },
  "PzuXdsu6kd": {
    "div": {
      "lc_id": "PzuXdsu6kd",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "LdGjb6Df9M",
          "__children": [],
          "__text__": "Form 容器"
        },
        "__key__": "__children"
      }, {
        "el-form": {
          ":model": "ruleForm",
          ":rules": "rules",
          "ref": "ruleForm",
          "lc-mark": "",
          "label-width": "100px",
          "class": "demo-border",
          "lc_id": "Zzz06+mzkO",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "LdGjb6Df9M": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "LdGjb6Df9M",
      "__children": [],
      "__text__": "Form 容器"
    }
  },
  "Zzz06+mzkO": {
    "el-form": {
      ":model": "ruleForm",
      ":rules": "rules",
      "ref": "ruleForm",
      "lc-mark": "",
      "label-width": "100px",
      "class": "demo-border",
      "lc_id": "Zzz06+mzkO",
      "__children": []
    }
  },
  "8ZewsTbRuD": {
    "div": {
      "lc_id": "8ZewsTbRuD",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "cX5zh7f+RV",
          "__children": [],
          "__text__": "Form 典型表单"
        },
        "__key__": "__children"
      }, {
        "el-form": {
          ":model": "ruleForm",
          ":rules": "rules",
          "ref": "ruleForm",
          "lc-mark": "",
          "label-width": "100px",
          "class": "demo-border",
          "lc_id": "gx5EBJU9WS",
          "__children": [{
            "el-form-item": {
              "label": "活动名称",
              "prop": "name",
              "lc-mark": "",
              "lc_id": "6md1kDs8qa",
              "__children": [{
                "el-input": {
                  "v-model": "ruleForm.name",
                  "lc_id": "QG5eYYTCSB",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "label": "活动区域",
              "prop": "region",
              "lc-mark": "",
              "lc_id": "tnJTgI76Kp",
              "__children": [{
                "el-select": {
                  "v-model": "ruleForm.region",
                  "placeholder": "请选择活动区域",
                  "lc_id": "nrTlsTbxPM",
                  "__children": [{
                    "el-option": {
                      "label": "区域一",
                      "value": "shanghai",
                      "lc_id": "mXsEEs0/z0",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "el-option": {
                      "label": "区域二",
                      "value": "beijing",
                      "lc_id": "2GzfZP1Cbx",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "label": "活动时间",
              "required": "",
              "lc-mark": "",
              "lc_id": "fz4dTVUbEb",
              "__children": [{
                "el-col": {
                  ":span": "11",
                  "lc_id": "mmEYR54uQF",
                  "__children": [{
                    "el-form-item": {
                      "prop": "date1",
                      "lc_id": "QkTT/2WWLK",
                      "__children": [{
                        "el-date-picker": {
                          "type": "date",
                          "placeholder": "选择日期",
                          "v-model": "ruleForm.date1",
                          "style": "width: 100%",
                          "lc_id": "G3lxZTQsw5",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  "class": "line",
                  ":span": "2",
                  "lc_id": "R2NmSO2FCi",
                  "__children": [],
                  "__text__": "-"
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "11",
                  "lc_id": "eOACIzQ+Dq",
                  "__children": [{
                    "el-form-item": {
                      "prop": "date2",
                      "lc_id": "Ub+QEqDUGN",
                      "__children": [{
                        "el-time-picker": {
                          "placeholder": "选择时间",
                          "v-model": "ruleForm.date2",
                          "style": "width: 100%",
                          "lc_id": "+tkG6VmYdM",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "label": "即时配送",
              "prop": "delivery",
              "lc-mark": "",
              "lc_id": "Lz8oPy38nU",
              "__children": [{
                "el-switch": {
                  "v-model": "ruleForm.delivery",
                  "lc_id": "COO1BlBrjF",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "label": "文件上传",
              "prop": "delivery",
              "lc-mark": "",
              "lc_id": "eFNZ7B9jgX",
              "__children": [{
                "el-button": {
                  "type": "primary",
                  "size": "small",
                  "lc_id": "7ZjOmdz3Ur",
                  "__children": [{
                    "i": {
                      "class": "el-icon-upload el-icon--right",
                      "lc_id": "IOumsfqV0c",
                      "__children": []
                    },
                    "__key__": "__children"
                  }],
                  "__text__": "上传"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "label": "自定义form-item",
              "prop": "delivery",
              "lc-mark": "",
              "lc_id": "g9ZQTRZogP",
              "__children": [{
                "div": {
                  "class": "demo-border",
                  "lc_id": "bICnUogCxE",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "label": "活动性质",
              "prop": "type",
              "lc-mark": "",
              "lc_id": "u5e4jMDa0Z",
              "__children": [{
                "el-checkbox-group": {
                  "v-model": "ruleForm.type",
                  "lc_id": "4odzSgDoVc",
                  "__children": [{
                    "el-checkbox": {
                      "label": "美食/餐厅线上活动",
                      "name": "type",
                      "lc_id": "qRZK4l23q9",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "el-checkbox": {
                      "label": "地推活动",
                      "name": "type",
                      "lc_id": "WbtFV7IdQ0",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "el-checkbox": {
                      "label": "线下主题活动",
                      "name": "type",
                      "lc_id": "/fBZC9Wz76",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "el-checkbox": {
                      "label": "单纯品牌曝光",
                      "name": "type",
                      "lc_id": "V+qui3Km7r",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "label": "特殊资源",
              "prop": "resource",
              "lc-mark": "",
              "lc_id": "EfEJRxIgMc",
              "__children": [{
                "el-radio-group": {
                  "v-model": "ruleForm.resource",
                  "lc_id": "UaAE0hW4YD",
                  "__children": [{
                    "el-radio": {
                      "label": "线上品牌商赞助",
                      "lc_id": "eVUn2fPBO0",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "el-radio": {
                      "label": "线下场地免费",
                      "lc_id": "OhNxMXrfFs",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "label": "活动形式",
              "prop": "desc",
              "lc-mark": "",
              "lc_id": "1J3SXxTQjA",
              "__children": [{
                "el-input": {
                  "type": "textarea",
                  "v-model": "ruleForm.desc",
                  "lc_id": "KndAAF/3Mu",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-form-item": {
              "lc_id": "wSyCEJYjUD",
              "__children": [{
                "el-button": {
                  "type": "primary",
                  "@click": "submitForm",
                  "lc_id": "wp2oC1qxYN",
                  "__children": [],
                  "__text__": "立即创建"
                },
                "__key__": "__children"
              }, {
                "el-button": {
                  "@click": "resetForm",
                  "lc_id": "nWgxJ6a9v+",
                  "__children": [],
                  "__text__": "重置"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "cX5zh7f+RV": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "cX5zh7f+RV",
      "__children": [],
      "__text__": "Form 典型表单"
    }
  },
  "gx5EBJU9WS": {
    "el-form": {
      ":model": "ruleForm",
      ":rules": "rules",
      "ref": "ruleForm",
      "lc-mark": "",
      "label-width": "100px",
      "class": "demo-border",
      "lc_id": "gx5EBJU9WS",
      "__children": [{
        "el-form-item": {
          "label": "活动名称",
          "prop": "name",
          "lc-mark": "",
          "lc_id": "6md1kDs8qa",
          "__children": [{
            "el-input": {
              "v-model": "ruleForm.name",
              "lc_id": "QG5eYYTCSB",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "label": "活动区域",
          "prop": "region",
          "lc-mark": "",
          "lc_id": "tnJTgI76Kp",
          "__children": [{
            "el-select": {
              "v-model": "ruleForm.region",
              "placeholder": "请选择活动区域",
              "lc_id": "nrTlsTbxPM",
              "__children": [{
                "el-option": {
                  "label": "区域一",
                  "value": "shanghai",
                  "lc_id": "mXsEEs0/z0",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-option": {
                  "label": "区域二",
                  "value": "beijing",
                  "lc_id": "2GzfZP1Cbx",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "label": "活动时间",
          "required": "",
          "lc-mark": "",
          "lc_id": "fz4dTVUbEb",
          "__children": [{
            "el-col": {
              ":span": "11",
              "lc_id": "mmEYR54uQF",
              "__children": [{
                "el-form-item": {
                  "prop": "date1",
                  "lc_id": "QkTT/2WWLK",
                  "__children": [{
                    "el-date-picker": {
                      "type": "date",
                      "placeholder": "选择日期",
                      "v-model": "ruleForm.date1",
                      "style": "width: 100%",
                      "lc_id": "G3lxZTQsw5",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              "class": "line",
              ":span": "2",
              "lc_id": "R2NmSO2FCi",
              "__children": [],
              "__text__": "-"
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "11",
              "lc_id": "eOACIzQ+Dq",
              "__children": [{
                "el-form-item": {
                  "prop": "date2",
                  "lc_id": "Ub+QEqDUGN",
                  "__children": [{
                    "el-time-picker": {
                      "placeholder": "选择时间",
                      "v-model": "ruleForm.date2",
                      "style": "width: 100%",
                      "lc_id": "+tkG6VmYdM",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "label": "即时配送",
          "prop": "delivery",
          "lc-mark": "",
          "lc_id": "Lz8oPy38nU",
          "__children": [{
            "el-switch": {
              "v-model": "ruleForm.delivery",
              "lc_id": "COO1BlBrjF",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "label": "文件上传",
          "prop": "delivery",
          "lc-mark": "",
          "lc_id": "eFNZ7B9jgX",
          "__children": [{
            "el-button": {
              "type": "primary",
              "size": "small",
              "lc_id": "7ZjOmdz3Ur",
              "__children": [{
                "i": {
                  "class": "el-icon-upload el-icon--right",
                  "lc_id": "IOumsfqV0c",
                  "__children": []
                },
                "__key__": "__children"
              }],
              "__text__": "上传"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "label": "自定义form-item",
          "prop": "delivery",
          "lc-mark": "",
          "lc_id": "g9ZQTRZogP",
          "__children": [{
            "div": {
              "class": "demo-border",
              "lc_id": "bICnUogCxE",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "label": "活动性质",
          "prop": "type",
          "lc-mark": "",
          "lc_id": "u5e4jMDa0Z",
          "__children": [{
            "el-checkbox-group": {
              "v-model": "ruleForm.type",
              "lc_id": "4odzSgDoVc",
              "__children": [{
                "el-checkbox": {
                  "label": "美食/餐厅线上活动",
                  "name": "type",
                  "lc_id": "qRZK4l23q9",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-checkbox": {
                  "label": "地推活动",
                  "name": "type",
                  "lc_id": "WbtFV7IdQ0",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-checkbox": {
                  "label": "线下主题活动",
                  "name": "type",
                  "lc_id": "/fBZC9Wz76",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-checkbox": {
                  "label": "单纯品牌曝光",
                  "name": "type",
                  "lc_id": "V+qui3Km7r",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "label": "特殊资源",
          "prop": "resource",
          "lc-mark": "",
          "lc_id": "EfEJRxIgMc",
          "__children": [{
            "el-radio-group": {
              "v-model": "ruleForm.resource",
              "lc_id": "UaAE0hW4YD",
              "__children": [{
                "el-radio": {
                  "label": "线上品牌商赞助",
                  "lc_id": "eVUn2fPBO0",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-radio": {
                  "label": "线下场地免费",
                  "lc_id": "OhNxMXrfFs",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "label": "活动形式",
          "prop": "desc",
          "lc-mark": "",
          "lc_id": "1J3SXxTQjA",
          "__children": [{
            "el-input": {
              "type": "textarea",
              "v-model": "ruleForm.desc",
              "lc_id": "KndAAF/3Mu",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-form-item": {
          "lc_id": "wSyCEJYjUD",
          "__children": [{
            "el-button": {
              "type": "primary",
              "@click": "submitForm",
              "lc_id": "wp2oC1qxYN",
              "__children": [],
              "__text__": "立即创建"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "@click": "resetForm",
              "lc_id": "nWgxJ6a9v+",
              "__children": [],
              "__text__": "重置"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "6md1kDs8qa": {
    "el-form-item": {
      "label": "活动名称",
      "prop": "name",
      "lc-mark": "",
      "lc_id": "6md1kDs8qa",
      "__children": [{
        "el-input": {
          "v-model": "ruleForm.name",
          "lc_id": "QG5eYYTCSB",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "QG5eYYTCSB": {
    "el-input": {
      "v-model": "ruleForm.name",
      "lc_id": "QG5eYYTCSB",
      "__children": []
    }
  },
  "tnJTgI76Kp": {
    "el-form-item": {
      "label": "活动区域",
      "prop": "region",
      "lc-mark": "",
      "lc_id": "tnJTgI76Kp",
      "__children": [{
        "el-select": {
          "v-model": "ruleForm.region",
          "placeholder": "请选择活动区域",
          "lc_id": "nrTlsTbxPM",
          "__children": [{
            "el-option": {
              "label": "区域一",
              "value": "shanghai",
              "lc_id": "mXsEEs0/z0",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-option": {
              "label": "区域二",
              "value": "beijing",
              "lc_id": "2GzfZP1Cbx",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "nrTlsTbxPM": {
    "el-select": {
      "v-model": "ruleForm.region",
      "placeholder": "请选择活动区域",
      "lc_id": "nrTlsTbxPM",
      "__children": [{
        "el-option": {
          "label": "区域一",
          "value": "shanghai",
          "lc_id": "mXsEEs0/z0",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-option": {
          "label": "区域二",
          "value": "beijing",
          "lc_id": "2GzfZP1Cbx",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "mXsEEs0/z0": {
    "el-option": {
      "label": "区域一",
      "value": "shanghai",
      "lc_id": "mXsEEs0/z0",
      "__children": []
    }
  },
  "2GzfZP1Cbx": {
    "el-option": {
      "label": "区域二",
      "value": "beijing",
      "lc_id": "2GzfZP1Cbx",
      "__children": []
    }
  },
  "fz4dTVUbEb": {
    "el-form-item": {
      "label": "活动时间",
      "required": "",
      "lc-mark": "",
      "lc_id": "fz4dTVUbEb",
      "__children": [{
        "el-col": {
          ":span": "11",
          "lc_id": "mmEYR54uQF",
          "__children": [{
            "el-form-item": {
              "prop": "date1",
              "lc_id": "QkTT/2WWLK",
              "__children": [{
                "el-date-picker": {
                  "type": "date",
                  "placeholder": "选择日期",
                  "v-model": "ruleForm.date1",
                  "style": "width: 100%",
                  "lc_id": "G3lxZTQsw5",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          "class": "line",
          ":span": "2",
          "lc_id": "R2NmSO2FCi",
          "__children": [],
          "__text__": "-"
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "11",
          "lc_id": "eOACIzQ+Dq",
          "__children": [{
            "el-form-item": {
              "prop": "date2",
              "lc_id": "Ub+QEqDUGN",
              "__children": [{
                "el-time-picker": {
                  "placeholder": "选择时间",
                  "v-model": "ruleForm.date2",
                  "style": "width: 100%",
                  "lc_id": "+tkG6VmYdM",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "mmEYR54uQF": {
    "el-col": {
      ":span": "11",
      "lc_id": "mmEYR54uQF",
      "__children": [{
        "el-form-item": {
          "prop": "date1",
          "lc_id": "QkTT/2WWLK",
          "__children": [{
            "el-date-picker": {
              "type": "date",
              "placeholder": "选择日期",
              "v-model": "ruleForm.date1",
              "style": "width: 100%",
              "lc_id": "G3lxZTQsw5",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "QkTT/2WWLK": {
    "el-form-item": {
      "prop": "date1",
      "lc_id": "QkTT/2WWLK",
      "__children": [{
        "el-date-picker": {
          "type": "date",
          "placeholder": "选择日期",
          "v-model": "ruleForm.date1",
          "style": "width: 100%",
          "lc_id": "G3lxZTQsw5",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "G3lxZTQsw5": {
    "el-date-picker": {
      "type": "date",
      "placeholder": "选择日期",
      "v-model": "ruleForm.date1",
      "style": "width: 100%",
      "lc_id": "G3lxZTQsw5",
      "__children": []
    }
  },
  "R2NmSO2FCi": {
    "el-col": {
      "class": "line",
      ":span": "2",
      "lc_id": "R2NmSO2FCi",
      "__children": [],
      "__text__": "-"
    }
  },
  "eOACIzQ+Dq": {
    "el-col": {
      ":span": "11",
      "lc_id": "eOACIzQ+Dq",
      "__children": [{
        "el-form-item": {
          "prop": "date2",
          "lc_id": "Ub+QEqDUGN",
          "__children": [{
            "el-time-picker": {
              "placeholder": "选择时间",
              "v-model": "ruleForm.date2",
              "style": "width: 100%",
              "lc_id": "+tkG6VmYdM",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "Ub+QEqDUGN": {
    "el-form-item": {
      "prop": "date2",
      "lc_id": "Ub+QEqDUGN",
      "__children": [{
        "el-time-picker": {
          "placeholder": "选择时间",
          "v-model": "ruleForm.date2",
          "style": "width: 100%",
          "lc_id": "+tkG6VmYdM",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "+tkG6VmYdM": {
    "el-time-picker": {
      "placeholder": "选择时间",
      "v-model": "ruleForm.date2",
      "style": "width: 100%",
      "lc_id": "+tkG6VmYdM",
      "__children": []
    }
  },
  "Lz8oPy38nU": {
    "el-form-item": {
      "label": "即时配送",
      "prop": "delivery",
      "lc-mark": "",
      "lc_id": "Lz8oPy38nU",
      "__children": [{
        "el-switch": {
          "v-model": "ruleForm.delivery",
          "lc_id": "COO1BlBrjF",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "COO1BlBrjF": {
    "el-switch": {
      "v-model": "ruleForm.delivery",
      "lc_id": "COO1BlBrjF",
      "__children": []
    }
  },
  "eFNZ7B9jgX": {
    "el-form-item": {
      "label": "文件上传",
      "prop": "delivery",
      "lc-mark": "",
      "lc_id": "eFNZ7B9jgX",
      "__children": [{
        "el-button": {
          "type": "primary",
          "size": "small",
          "lc_id": "7ZjOmdz3Ur",
          "__children": [{
            "i": {
              "class": "el-icon-upload el-icon--right",
              "lc_id": "IOumsfqV0c",
              "__children": []
            },
            "__key__": "__children"
          }],
          "__text__": "上传"
        },
        "__key__": "__children"
      }]
    }
  },
  "7ZjOmdz3Ur": {
    "el-button": {
      "type": "primary",
      "size": "small",
      "lc_id": "7ZjOmdz3Ur",
      "__children": [{
        "i": {
          "class": "el-icon-upload el-icon--right",
          "lc_id": "IOumsfqV0c",
          "__children": []
        },
        "__key__": "__children"
      }],
      "__text__": "上传"
    }
  },
  "IOumsfqV0c": {
    "i": {
      "class": "el-icon-upload el-icon--right",
      "lc_id": "IOumsfqV0c",
      "__children": []
    }
  },
  "g9ZQTRZogP": {
    "el-form-item": {
      "label": "自定义form-item",
      "prop": "delivery",
      "lc-mark": "",
      "lc_id": "g9ZQTRZogP",
      "__children": [{
        "div": {
          "class": "demo-border",
          "lc_id": "bICnUogCxE",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "bICnUogCxE": {
    "div": {
      "class": "demo-border",
      "lc_id": "bICnUogCxE",
      "__children": []
    }
  },
  "u5e4jMDa0Z": {
    "el-form-item": {
      "label": "活动性质",
      "prop": "type",
      "lc-mark": "",
      "lc_id": "u5e4jMDa0Z",
      "__children": [{
        "el-checkbox-group": {
          "v-model": "ruleForm.type",
          "lc_id": "4odzSgDoVc",
          "__children": [{
            "el-checkbox": {
              "label": "美食/餐厅线上活动",
              "name": "type",
              "lc_id": "qRZK4l23q9",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-checkbox": {
              "label": "地推活动",
              "name": "type",
              "lc_id": "WbtFV7IdQ0",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-checkbox": {
              "label": "线下主题活动",
              "name": "type",
              "lc_id": "/fBZC9Wz76",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-checkbox": {
              "label": "单纯品牌曝光",
              "name": "type",
              "lc_id": "V+qui3Km7r",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "4odzSgDoVc": {
    "el-checkbox-group": {
      "v-model": "ruleForm.type",
      "lc_id": "4odzSgDoVc",
      "__children": [{
        "el-checkbox": {
          "label": "美食/餐厅线上活动",
          "name": "type",
          "lc_id": "qRZK4l23q9",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-checkbox": {
          "label": "地推活动",
          "name": "type",
          "lc_id": "WbtFV7IdQ0",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-checkbox": {
          "label": "线下主题活动",
          "name": "type",
          "lc_id": "/fBZC9Wz76",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-checkbox": {
          "label": "单纯品牌曝光",
          "name": "type",
          "lc_id": "V+qui3Km7r",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "qRZK4l23q9": {
    "el-checkbox": {
      "label": "美食/餐厅线上活动",
      "name": "type",
      "lc_id": "qRZK4l23q9",
      "__children": []
    }
  },
  "WbtFV7IdQ0": {
    "el-checkbox": {
      "label": "地推活动",
      "name": "type",
      "lc_id": "WbtFV7IdQ0",
      "__children": []
    }
  },
  "/fBZC9Wz76": {
    "el-checkbox": {
      "label": "线下主题活动",
      "name": "type",
      "lc_id": "/fBZC9Wz76",
      "__children": []
    }
  },
  "V+qui3Km7r": {
    "el-checkbox": {
      "label": "单纯品牌曝光",
      "name": "type",
      "lc_id": "V+qui3Km7r",
      "__children": []
    }
  },
  "EfEJRxIgMc": {
    "el-form-item": {
      "label": "特殊资源",
      "prop": "resource",
      "lc-mark": "",
      "lc_id": "EfEJRxIgMc",
      "__children": [{
        "el-radio-group": {
          "v-model": "ruleForm.resource",
          "lc_id": "UaAE0hW4YD",
          "__children": [{
            "el-radio": {
              "label": "线上品牌商赞助",
              "lc_id": "eVUn2fPBO0",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-radio": {
              "label": "线下场地免费",
              "lc_id": "OhNxMXrfFs",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "UaAE0hW4YD": {
    "el-radio-group": {
      "v-model": "ruleForm.resource",
      "lc_id": "UaAE0hW4YD",
      "__children": [{
        "el-radio": {
          "label": "线上品牌商赞助",
          "lc_id": "eVUn2fPBO0",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-radio": {
          "label": "线下场地免费",
          "lc_id": "OhNxMXrfFs",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "eVUn2fPBO0": {
    "el-radio": {
      "label": "线上品牌商赞助",
      "lc_id": "eVUn2fPBO0",
      "__children": []
    }
  },
  "OhNxMXrfFs": {
    "el-radio": {
      "label": "线下场地免费",
      "lc_id": "OhNxMXrfFs",
      "__children": []
    }
  },
  "1J3SXxTQjA": {
    "el-form-item": {
      "label": "活动形式",
      "prop": "desc",
      "lc-mark": "",
      "lc_id": "1J3SXxTQjA",
      "__children": [{
        "el-input": {
          "type": "textarea",
          "v-model": "ruleForm.desc",
          "lc_id": "KndAAF/3Mu",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "KndAAF/3Mu": {
    "el-input": {
      "type": "textarea",
      "v-model": "ruleForm.desc",
      "lc_id": "KndAAF/3Mu",
      "__children": []
    }
  },
  "wSyCEJYjUD": {
    "el-form-item": {
      "lc_id": "wSyCEJYjUD",
      "__children": [{
        "el-button": {
          "type": "primary",
          "@click": "submitForm",
          "lc_id": "wp2oC1qxYN",
          "__children": [],
          "__text__": "立即创建"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "@click": "resetForm",
          "lc_id": "nWgxJ6a9v+",
          "__children": [],
          "__text__": "重置"
        },
        "__key__": "__children"
      }]
    }
  },
  "wp2oC1qxYN": {
    "el-button": {
      "type": "primary",
      "@click": "submitForm",
      "lc_id": "wp2oC1qxYN",
      "__children": [],
      "__text__": "立即创建"
    }
  },
  "nWgxJ6a9v+": {
    "el-button": {
      "@click": "resetForm",
      "lc_id": "nWgxJ6a9v+",
      "__children": [],
      "__text__": "重置"
    }
  },
  "dyK4shOTgK": {
    "div": {
      "lc_id": "dyK4shOTgK",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "OPhwbT6T5C",
          "__children": [],
          "__text__": "Descriptions 描述列表"
        },
        "__key__": "__children"
      }, {
        "el-descriptions": {
          "title": "用户信息",
          "lc-mark": "",
          "lc_id": "UcepzqrI8T",
          "__children": [{
            "el-descriptions-item": {
              "label": "用户名",
              "lc-mark": "",
              "lc_id": "61qM0Gdqq3",
              "__children": [],
              "__text__": "kooriookami"
            },
            "__key__": "__children"
          }, {
            "el-descriptions-item": {
              "label": "手机号",
              "lc_id": "p9NL7l0+yS",
              "__children": [],
              "__text__": "18100000000"
            },
            "__key__": "__children"
          }, {
            "el-descriptions-item": {
              "label": "居住地",
              "lc_id": "gA+SOSpqT1",
              "__children": [],
              "__text__": "苏州市"
            },
            "__key__": "__children"
          }, {
            "el-descriptions-item": {
              "label": "备注",
              "lc_id": "MpLSTs1V1a",
              "__children": [{
                "el-tag": {
                  "size": "small",
                  "lc_id": "x+3JGPZLjM",
                  "__children": [],
                  "__text__": "学校"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-descriptions-item": {
              "label": "联系地址",
              "lc_id": "P7eacW7mxC",
              "__children": [],
              "__text__": "江苏省苏州市吴中区吴中大道 1188 号"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-descriptions": {
          "title": "垂直带边框列表",
          "direction": "vertical",
          ":column": "4",
          "border": "",
          "lc-mark": "",
          "lc_id": "k4Y9MNzVZb",
          "__children": [{
            "el-descriptions-item": {
              "label": "用户名",
              "lc_id": "YTqOj5iy95",
              "__children": [],
              "__text__": "kooriookami"
            },
            "__key__": "__children"
          }, {
            "el-descriptions-item": {
              "label": "手机号",
              "lc_id": "qx7ONklayE",
              "__children": [],
              "__text__": "18100000000"
            },
            "__key__": "__children"
          }, {
            "el-descriptions-item": {
              "label": "居住地",
              ":span": "2",
              "lc_id": "Gip/4MIafd",
              "__children": [],
              "__text__": "苏州市"
            },
            "__key__": "__children"
          }, {
            "el-descriptions-item": {
              "label": "备注",
              "lc_id": "4wYkIRcdbX",
              "__children": [{
                "el-tag": {
                  "size": "small",
                  "lc_id": "9iHUBLDbHY",
                  "__children": [],
                  "__text__": "学校"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-descriptions-item": {
              "label": "联系地址",
              "lc_id": "zfJtvesctl",
              "__children": [],
              "__text__": "江苏省苏州市吴中区吴中大道 1188 号"
            },
            "__key__": "__children"
          }],
          "__text__": ">"
        },
        "__key__": "__children"
      }]
    }
  },
  "OPhwbT6T5C": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "OPhwbT6T5C",
      "__children": [],
      "__text__": "Descriptions 描述列表"
    }
  },
  "UcepzqrI8T": {
    "el-descriptions": {
      "title": "用户信息",
      "lc-mark": "",
      "lc_id": "UcepzqrI8T",
      "__children": [{
        "el-descriptions-item": {
          "label": "用户名",
          "lc-mark": "",
          "lc_id": "61qM0Gdqq3",
          "__children": [],
          "__text__": "kooriookami"
        },
        "__key__": "__children"
      }, {
        "el-descriptions-item": {
          "label": "手机号",
          "lc_id": "p9NL7l0+yS",
          "__children": [],
          "__text__": "18100000000"
        },
        "__key__": "__children"
      }, {
        "el-descriptions-item": {
          "label": "居住地",
          "lc_id": "gA+SOSpqT1",
          "__children": [],
          "__text__": "苏州市"
        },
        "__key__": "__children"
      }, {
        "el-descriptions-item": {
          "label": "备注",
          "lc_id": "MpLSTs1V1a",
          "__children": [{
            "el-tag": {
              "size": "small",
              "lc_id": "x+3JGPZLjM",
              "__children": [],
              "__text__": "学校"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-descriptions-item": {
          "label": "联系地址",
          "lc_id": "P7eacW7mxC",
          "__children": [],
          "__text__": "江苏省苏州市吴中区吴中大道 1188 号"
        },
        "__key__": "__children"
      }]
    }
  },
  "61qM0Gdqq3": {
    "el-descriptions-item": {
      "label": "用户名",
      "lc-mark": "",
      "lc_id": "61qM0Gdqq3",
      "__children": [],
      "__text__": "kooriookami"
    }
  },
  "p9NL7l0+yS": {
    "el-descriptions-item": {
      "label": "手机号",
      "lc_id": "p9NL7l0+yS",
      "__children": [],
      "__text__": "18100000000"
    }
  },
  "gA+SOSpqT1": {
    "el-descriptions-item": {
      "label": "居住地",
      "lc_id": "gA+SOSpqT1",
      "__children": [],
      "__text__": "苏州市"
    }
  },
  "MpLSTs1V1a": {
    "el-descriptions-item": {
      "label": "备注",
      "lc_id": "MpLSTs1V1a",
      "__children": [{
        "el-tag": {
          "size": "small",
          "lc_id": "x+3JGPZLjM",
          "__children": [],
          "__text__": "学校"
        },
        "__key__": "__children"
      }]
    }
  },
  "x+3JGPZLjM": {
    "el-tag": {
      "size": "small",
      "lc_id": "x+3JGPZLjM",
      "__children": [],
      "__text__": "学校"
    }
  },
  "P7eacW7mxC": {
    "el-descriptions-item": {
      "label": "联系地址",
      "lc_id": "P7eacW7mxC",
      "__children": [],
      "__text__": "江苏省苏州市吴中区吴中大道 1188 号"
    }
  },
  "k4Y9MNzVZb": {
    "el-descriptions": {
      "title": "垂直带边框列表",
      "direction": "vertical",
      ":column": "4",
      "border": "",
      "lc-mark": "",
      "lc_id": "k4Y9MNzVZb",
      "__children": [{
        "el-descriptions-item": {
          "label": "用户名",
          "lc_id": "YTqOj5iy95",
          "__children": [],
          "__text__": "kooriookami"
        },
        "__key__": "__children"
      }, {
        "el-descriptions-item": {
          "label": "手机号",
          "lc_id": "qx7ONklayE",
          "__children": [],
          "__text__": "18100000000"
        },
        "__key__": "__children"
      }, {
        "el-descriptions-item": {
          "label": "居住地",
          ":span": "2",
          "lc_id": "Gip/4MIafd",
          "__children": [],
          "__text__": "苏州市"
        },
        "__key__": "__children"
      }, {
        "el-descriptions-item": {
          "label": "备注",
          "lc_id": "4wYkIRcdbX",
          "__children": [{
            "el-tag": {
              "size": "small",
              "lc_id": "9iHUBLDbHY",
              "__children": [],
              "__text__": "学校"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-descriptions-item": {
          "label": "联系地址",
          "lc_id": "zfJtvesctl",
          "__children": [],
          "__text__": "江苏省苏州市吴中区吴中大道 1188 号"
        },
        "__key__": "__children"
      }],
      "__text__": ">"
    }
  },
  "YTqOj5iy95": {
    "el-descriptions-item": {
      "label": "用户名",
      "lc_id": "YTqOj5iy95",
      "__children": [],
      "__text__": "kooriookami"
    }
  },
  "qx7ONklayE": {
    "el-descriptions-item": {
      "label": "手机号",
      "lc_id": "qx7ONklayE",
      "__children": [],
      "__text__": "18100000000"
    }
  },
  "Gip/4MIafd": {
    "el-descriptions-item": {
      "label": "居住地",
      ":span": "2",
      "lc_id": "Gip/4MIafd",
      "__children": [],
      "__text__": "苏州市"
    }
  },
  "4wYkIRcdbX": {
    "el-descriptions-item": {
      "label": "备注",
      "lc_id": "4wYkIRcdbX",
      "__children": [{
        "el-tag": {
          "size": "small",
          "lc_id": "9iHUBLDbHY",
          "__children": [],
          "__text__": "学校"
        },
        "__key__": "__children"
      }]
    }
  },
  "9iHUBLDbHY": {
    "el-tag": {
      "size": "small",
      "lc_id": "9iHUBLDbHY",
      "__children": [],
      "__text__": "学校"
    }
  },
  "zfJtvesctl": {
    "el-descriptions-item": {
      "label": "联系地址",
      "lc_id": "zfJtvesctl",
      "__children": [],
      "__text__": "江苏省苏州市吴中区吴中大道 1188 号"
    }
  },
  "mhJfF7mAeh": {
    "div": {
      "lc_id": "mhJfF7mAeh",
      "__children": [{
        "div": {
          "lc_id": "OyEvjlhxKG",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "jS8CODuZ8w",
              "__children": [],
              "__text__": "Progress 进度条"
            },
            "__key__": "__children"
          }, {
            "el-progress": {
              "lc-mark": "",
              ":percentage": "50",
              "lc_id": "5KIZ/gMvgA",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-progress": {
              "lc-mark": "",
              ":percentage": "100",
              ":format": "format",
              "lc_id": "andEKznPJm",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-progress": {
              "lc-mark": "",
              ":percentage": "100",
              "status": "success",
              "lc_id": "+c55Mhr6qb",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-progress": {
              "lc-mark": "",
              ":percentage": "100",
              "status": "warning",
              "lc_id": "aVjnu79qzU",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-progress": {
              "lc-mark": "",
              ":percentage": "50",
              "status": "exception",
              "lc_id": "BxPH8oVBkr",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "NZyu36Hfnv",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "KlaxLO85mW",
              "__children": [],
              "__text__": "Tree 树形控件"
            },
            "__key__": "__children"
          }, {
            "el-tree": {
              "lc-mark": "",
              ":data": "data",
              ":props": "defaultProps",
              "@node-click": "handleNodeClick",
              "lc_id": "6tm3Um6sZv",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "EvD0rnh0sk",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "gunUjt4svK",
              "__children": [],
              "__text__": "Badge 标记"
            },
            "__key__": "__children"
          }, {
            "el-badge": {
              "lc-mark": "",
              ":value": "12",
              "class": "item",
              "lc_id": "64M0gaQZnd",
              "__children": [{
                "el-button": {
                  "size": "small",
                  "lc_id": "EwFjRB81yT",
                  "__children": [],
                  "__text__": "评论"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-badge": {
              "lc-mark": "",
              ":value": "3",
              "class": "item",
              "lc_id": "haDOmCEsNH",
              "__children": [{
                "el-button": {
                  "size": "small",
                  "lc_id": "iZtMs8mOnw",
                  "__children": [],
                  "__text__": "回复"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-badge": {
              "lc-mark": "",
              ":value": "1",
              "class": "item",
              "type": "primary",
              "lc_id": "yraq608Lcr",
              "__children": [{
                "el-button": {
                  "size": "small",
                  "lc_id": "B1N0ns/Uyn",
                  "__children": [],
                  "__text__": "评论"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-badge": {
              "lc-mark": "",
              ":value": "2",
              "class": "item",
              "type": "warning",
              "lc_id": "h8tv/EwcbE",
              "__children": [{
                "el-button": {
                  "size": "small",
                  "lc_id": "8NG966mGav",
                  "__children": [],
                  "__text__": "回复"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "sTqskem3tG",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "WP+GGVOxkS",
              "__children": [],
              "__text__": "Alert 警告"
            },
            "__key__": "__children"
          }, {
            "el-alert": {
              "lc-mark": "",
              "title": "成功提示的文案",
              "type": "success",
              "lc_id": "x1p2XMUWDM",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-alert": {
              "lc-mark": "",
              "title": "消息提示的文案",
              "type": "info",
              "lc_id": "gA2WmaOkII",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-alert": {
              "lc-mark": "",
              "title": "警告提示的文案",
              "type": "warning",
              "lc_id": "0oa8HxAIjm",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-alert": {
              "lc-mark": "",
              "title": "错误提示的文案",
              "type": "error",
              "lc_id": "okpJNZagox",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "U4YG27qq4s",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "tI02wMGVyX",
              "__children": [],
              "__text__": "NavMenu 导航菜单"
            },
            "__key__": "__children"
          }, {
            "el-menu": {
              "lc-mark": "",
              ":default-active": "activeIndex2",
              "class": "el-menu-demo",
              "mode": "horizontal",
              "background-color": "#545c64",
              "text-color": "#fff",
              "active-text-color": "#ffd04b",
              "@select": "handleSelect",
              "__children": [{
                "el-menu-item": {
                  "index": "1",
                  "__children": [],
                  "__text__": "Processing Center",
                  "lc_id": "VejVEahyRO"
                },
                "__key__": "__children"
              }, {
                "el-sub-menu": {
                  "index": "2",
                  "__children": [{
                    "template": {
                      "#title": "",
                      "__children": [],
                      "__text__": "Workspace",
                      "lc_id": "EOLCWq1ax8"
                    },
                    "__key__": "__children"
                  }, {
                    "el-menu-item": {
                      "index": "2-1",
                      "__children": [],
                      "__text__": "item one",
                      "lc_id": "waSAqnTnUK"
                    },
                    "__key__": "__children"
                  }, {
                    "el-menu-item": {
                      "index": "2-2",
                      "__children": [],
                      "__text__": "item two",
                      "lc_id": "x7OA9OoX9M"
                    },
                    "__key__": "__children"
                  }, {
                    "el-menu-item": {
                      "index": "2-3",
                      "__children": [],
                      "__text__": "item three",
                      "lc_id": "XoUxBjhh8r"
                    },
                    "__key__": "__children"
                  }, {
                    "el-sub-menu": {
                      "index": "2-4",
                      "__children": [{
                        "template": {
                          "#title": "",
                          "__children": [],
                          "__text__": "item four",
                          "lc_id": "TZAoib4i41"
                        },
                        "__key__": "__children"
                      }, {
                        "el-menu-item": {
                          "index": "2-4-1",
                          "__children": [],
                          "__text__": "item one",
                          "lc_id": "KPPi+2aCzR"
                        },
                        "__key__": "__children"
                      }, {
                        "el-menu-item": {
                          "index": "2-4-2",
                          "__children": [],
                          "__text__": "item two",
                          "lc_id": "9HsVuJIBXT"
                        },
                        "__key__": "__children"
                      }, {
                        "el-menu-item": {
                          "index": "2-4-3",
                          "__children": [],
                          "__text__": "item three",
                          "lc_id": "pb1fYeVfpT"
                        },
                        "__key__": "__children"
                      }],
                      "lc_id": "kVYGkptqy3"
                    },
                    "__key__": "__children"
                  }],
                  "lc_id": "b9dDZDEyzu"
                },
                "__key__": "__children"
              }, {
                "el-menu-item": {
                  "index": "3",
                  "disabled": "",
                  "__children": [],
                  "__text__": "Info",
                  "lc_id": "OYs/KISq4y"
                },
                "__key__": "__children"
              }, {
                "el-menu-item": {
                  "index": "4",
                  "__children": [],
                  "__text__": "Orders",
                  "lc_id": "POtcpYxQZ9"
                },
                "__key__": "__children"
              }],
              "lc_id": "ihtDhkfBO3"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "Hr+gUUgFTD",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "EAnxv9IwcJ",
              "__children": [],
              "__text__": "Tabs 标签页"
            },
            "__key__": "__children"
          }, {
            "el-tabs": {
              "lc-mark": "",
              "v-model": "activeName",
              "@tab-click": "handleClick",
              "lc_id": "7TSxFc1h/T",
              "__children": [{
                "el-tab-pane": {
                  "label": "用户管理",
                  "name": "first",
                  "lc_id": "nESAhjJD5+",
                  "__children": [],
                  "__text__": "用户管理"
                },
                "__key__": "__children"
              }, {
                "el-tab-pane": {
                  "label": "配置管理",
                  "name": "second",
                  "lc_id": "GS8HXVlmCM",
                  "__children": [],
                  "__text__": "配置管理"
                },
                "__key__": "__children"
              }, {
                "el-tab-pane": {
                  "label": "角色管理",
                  "name": "third",
                  "lc_id": "/jr8Mrluge",
                  "__children": [],
                  "__text__": "角色管理"
                },
                "__key__": "__children"
              }, {
                "el-tab-pane": {
                  "label": "定时任务补偿",
                  "name": "fourth",
                  "lc_id": "CYHnAsRUdX",
                  "__children": [],
                  "__text__": "定时任务补偿"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "0MpXv/hB5o",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "cXJHcFnFGI",
              "__children": [],
              "__text__": "Breadcrumb 面包屑"
            },
            "__key__": "__children"
          }, {
            "el-breadcrumb": {
              "separator": "/",
              "lc-mark": "",
              "lc_id": "2kbMFsaBlw",
              "__children": [{
                "el-breadcrumb-item": {
                  ":to": "{ path: '/' }",
                  "lc_id": "Y24a1lsayw",
                  "__children": [],
                  "__text__": "首页"
                },
                "__key__": "__children"
              }, {
                "el-breadcrumb-item": {
                  "lc_id": "e7mudUt3T2",
                  "__children": [{
                    "a": {
                      "href": "/",
                      "lc_id": "2fk4blwWt1",
                      "__children": [],
                      "__text__": "活动管理"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-breadcrumb-item": {
                  "lc_id": "0uAUe0LS1k",
                  "__children": [],
                  "__text__": "活动列表"
                },
                "__key__": "__children"
              }, {
                "el-breadcrumb-item": {
                  "lc_id": "vTAj15QynT",
                  "__children": [],
                  "__text__": "活动详情"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "VliPzBWiIr",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "URE6411ToF",
              "__children": [],
              "__text__": "PageHeader 页头"
            },
            "__key__": "__children"
          }, {
            "el-page-header": {
              "lc-mark": "",
              "@back": "goBack2",
              "content": "详情页面",
              "lc_id": "VeIIrZpasX",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "q1K7UjfQRh",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "QRo+LiBcqY",
              "__children": [],
              "__text__": "Dropdown 下拉菜单"
            },
            "__key__": "__children"
          }, {
            "el-dropdown": {
              "lc-mark": "",
              "lc_id": "eEugqtt2Ed",
              "__children": [{
                "span": {
                  "class": "el-dropdown-link",
                  "lc_id": "T9RXOuEAsg",
                  "__children": [],
                  "__text__": "下拉菜单"
                },
                "__key__": "__children"
              }, {
                "template": {
                  "#dropdown": "",
                  "lc_id": "Jgi+BtUZkP",
                  "__children": [{
                    "el-dropdown-menu": {
                      "lc_id": "fyNKB1+0hw",
                      "__children": [{
                        "el-dropdown-item": {
                          "lc_id": "nCNWPghXw7",
                          "__children": [],
                          "__text__": "黄金糕"
                        },
                        "__key__": "__children"
                      }, {
                        "el-dropdown-item": {
                          "lc_id": "3moaMHtIVR",
                          "__children": [],
                          "__text__": "狮子头"
                        },
                        "__key__": "__children"
                      }, {
                        "el-dropdown-item": {
                          "lc_id": "zeDetbgzeN",
                          "__children": [],
                          "__text__": "螺蛳粉"
                        },
                        "__key__": "__children"
                      }, {
                        "el-dropdown-item": {
                          "disabled": "",
                          "lc_id": "590JIX3HSV",
                          "__children": [],
                          "__text__": "双皮奶"
                        },
                        "__key__": "__children"
                      }, {
                        "el-dropdown-item": {
                          "divided": "",
                          "lc_id": "Svb2tOdBg/",
                          "__children": [],
                          "__text__": "蚵仔煎"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "qp0NNdlqXq",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "RGehF229fc",
              "__children": [],
              "__text__": "Steps 步骤条"
            },
            "__key__": "__children"
          }, {
            "el-steps": {
              "lc-mark": "",
              ":active": "active",
              "finish-status": "success",
              "lc_id": "2yxeEC6GkQ",
              "__children": [{
                "el-step": {
                  "title": "步骤 1",
                  "lc_id": "IA1KW5Gwpv",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-step": {
                  "title": "步骤 2",
                  "lc_id": "sGjhJUaXCP",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-step": {
                  "lc-mark": "",
                  "title": "步骤 3",
                  "lc_id": "gS1/xHiigS",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "EduDP6YT5B",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "5Ryo1lT9Ri",
              "__children": [],
              "__text__": "Card 卡片"
            },
            "__key__": "__children"
          }, {
            "el-card": {
              "lc-mark": "",
              "class": "box-card",
              "lc_id": "f7u3JZOXiY",
              "__children": [{
                "template": {
                  "#header": "",
                  "lc_id": "fcNx1E9u+l",
                  "__children": [{
                    "div": {
                      "class": "clearfix",
                      "lc_id": "JjiI6DiLa8",
                      "__children": [{
                        "span": {
                          "lc_id": "HyznGRyy1o",
                          "__children": [],
                          "__text__": "卡片名称"
                        },
                        "__key__": "__children"
                      }, {
                        "el-button": {
                          "style": "float: right; padding: 3px 0",
                          "type": "text",
                          "lc_id": "2BV+GEiJPf",
                          "__children": [],
                          "__text__": "操作按钮"
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }, {
                    "div": {
                      "v-for": "o in 4",
                      ":key": "o",
                      "class": "text item",
                      "lc_id": "WrqZOeR62/",
                      "__children": [],
                      "__text__": "{{ \"列表内容 \" + o }}"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "Ac3U6soq4v",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "yHQSJ5j0qr",
              "__children": [],
              "__text__": "Carousel 走马灯"
            },
            "__key__": "__children"
          }, {
            "el-carousel": {
              "height": "150px",
              "lc-mark": "",
              "lc_id": "pf7cTX05Pe",
              "__children": [{
                "el-carousel-item": {
                  "v-for": "item in 4",
                  ":key": "item",
                  "lc_id": "LWxEwOsKCc",
                  "__children": [{
                    "h3": {
                      "class": "small",
                      "lc_id": "rY5AkL9779",
                      "__children": [],
                      "__text__": "{{ item }}"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "h98mxV67rm",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "YCdpR3F66X",
              "__children": [],
              "__text__": "Collapse 折叠面板"
            },
            "__key__": "__children"
          }, {
            "el-collapse": {
              "lc-mark": "",
              "v-model": "collapseActiveNames",
              "@change": "handleChange3",
              "lc_id": "SxwGYgpIAH",
              "__children": [{
                "el-collapse-item": {
                  "title": "一致性 Consistency",
                  "name": "1",
                  "lc_id": "9tnnQx3Q6z",
                  "__children": [{
                    "div": {
                      "lc_id": "nEOQzKpL2r",
                      "__children": [],
                      "__text__": "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"
                    },
                    "__key__": "__children"
                  }, {
                    "div": {
                      "lc_id": "dAI8bwEYNq",
                      "__children": [],
                      "__text__": "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-collapse-item": {
                  "title": "反馈 Feedback",
                  "name": "2",
                  "lc_id": "B1Egey2IgT",
                  "__children": [{
                    "div": {
                      "lc_id": "XNb772hFlA",
                      "__children": [],
                      "__text__": "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"
                    },
                    "__key__": "__children"
                  }, {
                    "div": {
                      "lc_id": "p/6OnJUnHn",
                      "__children": [],
                      "__text__": "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-collapse-item": {
                  "title": "效率 Efficiency",
                  "name": "3",
                  "lc_id": "Xq2hL9btvR",
                  "__children": [{
                    "div": {
                      "lc_id": "fCqY57GW+o",
                      "__children": [],
                      "__text__": "简化流程：设计简洁直观的操作流程；"
                    },
                    "__key__": "__children"
                  }, {
                    "div": {
                      "lc_id": "O1v1vIbqMk",
                      "__children": [],
                      "__text__": "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"
                    },
                    "__key__": "__children"
                  }, {
                    "div": {
                      "lc_id": "oXshK9bC/I",
                      "__children": [],
                      "__text__": "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-collapse-item": {
                  "title": "可控 Controllability",
                  "name": "4",
                  "lc_id": "POyL7FoSe4",
                  "__children": [{
                    "div": {
                      "lc_id": "DR+xM6f78t",
                      "__children": [],
                      "__text__": "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"
                    },
                    "__key__": "__children"
                  }, {
                    "div": {
                      "lc_id": "2g+ldln/84",
                      "__children": [],
                      "__text__": "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "0kee2BlFsA",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "0EBCjFbCyA",
              "__children": [],
              "__text__": "Timeline 时间线"
            },
            "__key__": "__children"
          }, {
            "el-timeline": {
              ":reverse": "reverse",
              "lc-mark": "",
              "lc_id": "HcDb8BgA1w",
              "__children": [{
                "el-timeline-item": {
                  "v-for": "(activity, index) in activities",
                  ":key": "index",
                  ":timestamp": "activity.timestamp",
                  "lc_id": "lqCmZ7Zw9R",
                  "__children": [],
                  "__text__": "{{ activity.content }}"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "G64C6Q7euE",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "DnbJwJg18E",
              "__children": [],
              "__text__": "Calendar 日历"
            },
            "__key__": "__children"
          }, {
            "el-calendar": {
              "lc-mark": "",
              "v-model": "calendarValue",
              "lc_id": "yd4ddVWJ69",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "BHDMhfXQP4",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "OyEvjlhxKG": {
    "div": {
      "lc_id": "OyEvjlhxKG",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "jS8CODuZ8w",
          "__children": [],
          "__text__": "Progress 进度条"
        },
        "__key__": "__children"
      }, {
        "el-progress": {
          "lc-mark": "",
          ":percentage": "50",
          "lc_id": "5KIZ/gMvgA",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-progress": {
          "lc-mark": "",
          ":percentage": "100",
          ":format": "format",
          "lc_id": "andEKznPJm",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-progress": {
          "lc-mark": "",
          ":percentage": "100",
          "status": "success",
          "lc_id": "+c55Mhr6qb",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-progress": {
          "lc-mark": "",
          ":percentage": "100",
          "status": "warning",
          "lc_id": "aVjnu79qzU",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-progress": {
          "lc-mark": "",
          ":percentage": "50",
          "status": "exception",
          "lc_id": "BxPH8oVBkr",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "jS8CODuZ8w": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "jS8CODuZ8w",
      "__children": [],
      "__text__": "Progress 进度条"
    }
  },
  "5KIZ/gMvgA": {
    "el-progress": {
      "lc-mark": "",
      ":percentage": "50",
      "lc_id": "5KIZ/gMvgA",
      "__children": []
    }
  },
  "andEKznPJm": {
    "el-progress": {
      "lc-mark": "",
      ":percentage": "100",
      ":format": "format",
      "lc_id": "andEKznPJm",
      "__children": []
    }
  },
  "+c55Mhr6qb": {
    "el-progress": {
      "lc-mark": "",
      ":percentage": "100",
      "status": "success",
      "lc_id": "+c55Mhr6qb",
      "__children": []
    }
  },
  "aVjnu79qzU": {
    "el-progress": {
      "lc-mark": "",
      ":percentage": "100",
      "status": "warning",
      "lc_id": "aVjnu79qzU",
      "__children": []
    }
  },
  "BxPH8oVBkr": {
    "el-progress": {
      "lc-mark": "",
      ":percentage": "50",
      "status": "exception",
      "lc_id": "BxPH8oVBkr",
      "__children": []
    }
  },
  "NZyu36Hfnv": {
    "div": {
      "lc_id": "NZyu36Hfnv",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "KlaxLO85mW",
          "__children": [],
          "__text__": "Tree 树形控件"
        },
        "__key__": "__children"
      }, {
        "el-tree": {
          "lc-mark": "",
          ":data": "data",
          ":props": "defaultProps",
          "@node-click": "handleNodeClick",
          "lc_id": "6tm3Um6sZv",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "KlaxLO85mW": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "KlaxLO85mW",
      "__children": [],
      "__text__": "Tree 树形控件"
    }
  },
  "6tm3Um6sZv": {
    "el-tree": {
      "lc-mark": "",
      ":data": "data",
      ":props": "defaultProps",
      "@node-click": "handleNodeClick",
      "lc_id": "6tm3Um6sZv",
      "__children": []
    }
  },
  "EvD0rnh0sk": {
    "div": {
      "lc_id": "EvD0rnh0sk",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "gunUjt4svK",
          "__children": [],
          "__text__": "Badge 标记"
        },
        "__key__": "__children"
      }, {
        "el-badge": {
          "lc-mark": "",
          ":value": "12",
          "class": "item",
          "lc_id": "64M0gaQZnd",
          "__children": [{
            "el-button": {
              "size": "small",
              "lc_id": "EwFjRB81yT",
              "__children": [],
              "__text__": "评论"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-badge": {
          "lc-mark": "",
          ":value": "3",
          "class": "item",
          "lc_id": "haDOmCEsNH",
          "__children": [{
            "el-button": {
              "size": "small",
              "lc_id": "iZtMs8mOnw",
              "__children": [],
              "__text__": "回复"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-badge": {
          "lc-mark": "",
          ":value": "1",
          "class": "item",
          "type": "primary",
          "lc_id": "yraq608Lcr",
          "__children": [{
            "el-button": {
              "size": "small",
              "lc_id": "B1N0ns/Uyn",
              "__children": [],
              "__text__": "评论"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-badge": {
          "lc-mark": "",
          ":value": "2",
          "class": "item",
          "type": "warning",
          "lc_id": "h8tv/EwcbE",
          "__children": [{
            "el-button": {
              "size": "small",
              "lc_id": "8NG966mGav",
              "__children": [],
              "__text__": "回复"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "gunUjt4svK": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "gunUjt4svK",
      "__children": [],
      "__text__": "Badge 标记"
    }
  },
  "64M0gaQZnd": {
    "el-badge": {
      "lc-mark": "",
      ":value": "12",
      "class": "item",
      "lc_id": "64M0gaQZnd",
      "__children": [{
        "el-button": {
          "size": "small",
          "lc_id": "EwFjRB81yT",
          "__children": [],
          "__text__": "评论"
        },
        "__key__": "__children"
      }]
    }
  },
  "EwFjRB81yT": {
    "el-button": {
      "size": "small",
      "lc_id": "EwFjRB81yT",
      "__children": [],
      "__text__": "评论"
    }
  },
  "haDOmCEsNH": {
    "el-badge": {
      "lc-mark": "",
      ":value": "3",
      "class": "item",
      "lc_id": "haDOmCEsNH",
      "__children": [{
        "el-button": {
          "size": "small",
          "lc_id": "iZtMs8mOnw",
          "__children": [],
          "__text__": "回复"
        },
        "__key__": "__children"
      }]
    }
  },
  "iZtMs8mOnw": {
    "el-button": {
      "size": "small",
      "lc_id": "iZtMs8mOnw",
      "__children": [],
      "__text__": "回复"
    }
  },
  "yraq608Lcr": {
    "el-badge": {
      "lc-mark": "",
      ":value": "1",
      "class": "item",
      "type": "primary",
      "lc_id": "yraq608Lcr",
      "__children": [{
        "el-button": {
          "size": "small",
          "lc_id": "B1N0ns/Uyn",
          "__children": [],
          "__text__": "评论"
        },
        "__key__": "__children"
      }]
    }
  },
  "B1N0ns/Uyn": {
    "el-button": {
      "size": "small",
      "lc_id": "B1N0ns/Uyn",
      "__children": [],
      "__text__": "评论"
    }
  },
  "h8tv/EwcbE": {
    "el-badge": {
      "lc-mark": "",
      ":value": "2",
      "class": "item",
      "type": "warning",
      "lc_id": "h8tv/EwcbE",
      "__children": [{
        "el-button": {
          "size": "small",
          "lc_id": "8NG966mGav",
          "__children": [],
          "__text__": "回复"
        },
        "__key__": "__children"
      }]
    }
  },
  "8NG966mGav": {
    "el-button": {
      "size": "small",
      "lc_id": "8NG966mGav",
      "__children": [],
      "__text__": "回复"
    }
  },
  "sTqskem3tG": {
    "div": {
      "lc_id": "sTqskem3tG",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "WP+GGVOxkS",
          "__children": [],
          "__text__": "Alert 警告"
        },
        "__key__": "__children"
      }, {
        "el-alert": {
          "lc-mark": "",
          "title": "成功提示的文案",
          "type": "success",
          "lc_id": "x1p2XMUWDM",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-alert": {
          "lc-mark": "",
          "title": "消息提示的文案",
          "type": "info",
          "lc_id": "gA2WmaOkII",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-alert": {
          "lc-mark": "",
          "title": "警告提示的文案",
          "type": "warning",
          "lc_id": "0oa8HxAIjm",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-alert": {
          "lc-mark": "",
          "title": "错误提示的文案",
          "type": "error",
          "lc_id": "okpJNZagox",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "WP+GGVOxkS": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "WP+GGVOxkS",
      "__children": [],
      "__text__": "Alert 警告"
    }
  },
  "x1p2XMUWDM": {
    "el-alert": {
      "lc-mark": "",
      "title": "成功提示的文案",
      "type": "success",
      "lc_id": "x1p2XMUWDM",
      "__children": []
    }
  },
  "gA2WmaOkII": {
    "el-alert": {
      "lc-mark": "",
      "title": "消息提示的文案",
      "type": "info",
      "lc_id": "gA2WmaOkII",
      "__children": []
    }
  },
  "0oa8HxAIjm": {
    "el-alert": {
      "lc-mark": "",
      "title": "警告提示的文案",
      "type": "warning",
      "lc_id": "0oa8HxAIjm",
      "__children": []
    }
  },
  "okpJNZagox": {
    "el-alert": {
      "lc-mark": "",
      "title": "错误提示的文案",
      "type": "error",
      "lc_id": "okpJNZagox",
      "__children": []
    }
  },
  "U4YG27qq4s": {
    "div": {
      "lc_id": "U4YG27qq4s",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "tI02wMGVyX",
          "__children": [],
          "__text__": "NavMenu 导航菜单"
        },
        "__key__": "__children"
      }, {
        "el-menu": {
          "lc-mark": "",
          ":default-active": "activeIndex2",
          "class": "el-menu-demo",
          "mode": "horizontal",
          "background-color": "#545c64",
          "text-color": "#fff",
          "active-text-color": "#ffd04b",
          "@select": "handleSelect",
          "__children": [{
            "el-menu-item": {
              "index": "1",
              "__children": [],
              "__text__": "Processing Center",
              "lc_id": "VejVEahyRO"
            },
            "__key__": "__children"
          }, {
            "el-sub-menu": {
              "index": "2",
              "__children": [{
                "template": {
                  "#title": "",
                  "__children": [],
                  "__text__": "Workspace",
                  "lc_id": "EOLCWq1ax8"
                },
                "__key__": "__children"
              }, {
                "el-menu-item": {
                  "index": "2-1",
                  "__children": [],
                  "__text__": "item one",
                  "lc_id": "waSAqnTnUK"
                },
                "__key__": "__children"
              }, {
                "el-menu-item": {
                  "index": "2-2",
                  "__children": [],
                  "__text__": "item two",
                  "lc_id": "x7OA9OoX9M"
                },
                "__key__": "__children"
              }, {
                "el-menu-item": {
                  "index": "2-3",
                  "__children": [],
                  "__text__": "item three",
                  "lc_id": "XoUxBjhh8r"
                },
                "__key__": "__children"
              }, {
                "el-sub-menu": {
                  "index": "2-4",
                  "__children": [{
                    "template": {
                      "#title": "",
                      "__children": [],
                      "__text__": "item four",
                      "lc_id": "TZAoib4i41"
                    },
                    "__key__": "__children"
                  }, {
                    "el-menu-item": {
                      "index": "2-4-1",
                      "__children": [],
                      "__text__": "item one",
                      "lc_id": "KPPi+2aCzR"
                    },
                    "__key__": "__children"
                  }, {
                    "el-menu-item": {
                      "index": "2-4-2",
                      "__children": [],
                      "__text__": "item two",
                      "lc_id": "9HsVuJIBXT"
                    },
                    "__key__": "__children"
                  }, {
                    "el-menu-item": {
                      "index": "2-4-3",
                      "__children": [],
                      "__text__": "item three",
                      "lc_id": "pb1fYeVfpT"
                    },
                    "__key__": "__children"
                  }],
                  "lc_id": "kVYGkptqy3"
                },
                "__key__": "__children"
              }],
              "lc_id": "b9dDZDEyzu"
            },
            "__key__": "__children"
          }, {
            "el-menu-item": {
              "index": "3",
              "disabled": "",
              "__children": [],
              "__text__": "Info",
              "lc_id": "OYs/KISq4y"
            },
            "__key__": "__children"
          }, {
            "el-menu-item": {
              "index": "4",
              "__children": [],
              "__text__": "Orders",
              "lc_id": "POtcpYxQZ9"
            },
            "__key__": "__children"
          }],
          "lc_id": "ihtDhkfBO3"
        },
        "__key__": "__children"
      }]
    }
  },
  "tI02wMGVyX": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "tI02wMGVyX",
      "__children": [],
      "__text__": "NavMenu 导航菜单"
    }
  },
  "VejVEahyRO": {
    "el-menu-item": {
      "index": "1",
      "__children": [],
      "__text__": "Processing Center",
      "lc_id": "VejVEahyRO"
    }
  },
  "EOLCWq1ax8": {
    "template": {
      "#title": "",
      "__children": [],
      "__text__": "Workspace",
      "lc_id": "EOLCWq1ax8"
    }
  },
  "waSAqnTnUK": {
    "el-menu-item": {
      "index": "2-1",
      "__children": [],
      "__text__": "item one",
      "lc_id": "waSAqnTnUK"
    }
  },
  "x7OA9OoX9M": {
    "el-menu-item": {
      "index": "2-2",
      "__children": [],
      "__text__": "item two",
      "lc_id": "x7OA9OoX9M"
    }
  },
  "XoUxBjhh8r": {
    "el-menu-item": {
      "index": "2-3",
      "__children": [],
      "__text__": "item three",
      "lc_id": "XoUxBjhh8r"
    }
  },
  "TZAoib4i41": {
    "template": {
      "#title": "",
      "__children": [],
      "__text__": "item four",
      "lc_id": "TZAoib4i41"
    }
  },
  "KPPi+2aCzR": {
    "el-menu-item": {
      "index": "2-4-1",
      "__children": [],
      "__text__": "item one",
      "lc_id": "KPPi+2aCzR"
    }
  },
  "9HsVuJIBXT": {
    "el-menu-item": {
      "index": "2-4-2",
      "__children": [],
      "__text__": "item two",
      "lc_id": "9HsVuJIBXT"
    }
  },
  "pb1fYeVfpT": {
    "el-menu-item": {
      "index": "2-4-3",
      "__children": [],
      "__text__": "item three",
      "lc_id": "pb1fYeVfpT"
    }
  },
  "kVYGkptqy3": {
    "el-sub-menu": {
      "index": "2-4",
      "__children": [{
        "template": {
          "#title": "",
          "__children": [],
          "__text__": "item four",
          "lc_id": "TZAoib4i41"
        },
        "__key__": "__children"
      }, {
        "el-menu-item": {
          "index": "2-4-1",
          "__children": [],
          "__text__": "item one",
          "lc_id": "KPPi+2aCzR"
        },
        "__key__": "__children"
      }, {
        "el-menu-item": {
          "index": "2-4-2",
          "__children": [],
          "__text__": "item two",
          "lc_id": "9HsVuJIBXT"
        },
        "__key__": "__children"
      }, {
        "el-menu-item": {
          "index": "2-4-3",
          "__children": [],
          "__text__": "item three",
          "lc_id": "pb1fYeVfpT"
        },
        "__key__": "__children"
      }],
      "lc_id": "kVYGkptqy3"
    }
  },
  "b9dDZDEyzu": {
    "el-sub-menu": {
      "index": "2",
      "__children": [{
        "template": {
          "#title": "",
          "__children": [],
          "__text__": "Workspace",
          "lc_id": "EOLCWq1ax8"
        },
        "__key__": "__children"
      }, {
        "el-menu-item": {
          "index": "2-1",
          "__children": [],
          "__text__": "item one",
          "lc_id": "waSAqnTnUK"
        },
        "__key__": "__children"
      }, {
        "el-menu-item": {
          "index": "2-2",
          "__children": [],
          "__text__": "item two",
          "lc_id": "x7OA9OoX9M"
        },
        "__key__": "__children"
      }, {
        "el-menu-item": {
          "index": "2-3",
          "__children": [],
          "__text__": "item three",
          "lc_id": "XoUxBjhh8r"
        },
        "__key__": "__children"
      }, {
        "el-sub-menu": {
          "index": "2-4",
          "__children": [{
            "template": {
              "#title": "",
              "__children": [],
              "__text__": "item four",
              "lc_id": "TZAoib4i41"
            },
            "__key__": "__children"
          }, {
            "el-menu-item": {
              "index": "2-4-1",
              "__children": [],
              "__text__": "item one",
              "lc_id": "KPPi+2aCzR"
            },
            "__key__": "__children"
          }, {
            "el-menu-item": {
              "index": "2-4-2",
              "__children": [],
              "__text__": "item two",
              "lc_id": "9HsVuJIBXT"
            },
            "__key__": "__children"
          }, {
            "el-menu-item": {
              "index": "2-4-3",
              "__children": [],
              "__text__": "item three",
              "lc_id": "pb1fYeVfpT"
            },
            "__key__": "__children"
          }],
          "lc_id": "kVYGkptqy3"
        },
        "__key__": "__children"
      }],
      "lc_id": "b9dDZDEyzu"
    }
  },
  "OYs/KISq4y": {
    "el-menu-item": {
      "index": "3",
      "disabled": "",
      "__children": [],
      "__text__": "Info",
      "lc_id": "OYs/KISq4y"
    }
  },
  "POtcpYxQZ9": {
    "el-menu-item": {
      "index": "4",
      "__children": [],
      "__text__": "Orders",
      "lc_id": "POtcpYxQZ9"
    }
  },
  "ihtDhkfBO3": {
    "el-menu": {
      "lc-mark": "",
      ":default-active": "activeIndex2",
      "class": "el-menu-demo",
      "mode": "horizontal",
      "background-color": "#545c64",
      "text-color": "#fff",
      "active-text-color": "#ffd04b",
      "@select": "handleSelect",
      "__children": [{
        "el-menu-item": {
          "index": "1",
          "__children": [],
          "__text__": "Processing Center",
          "lc_id": "VejVEahyRO"
        },
        "__key__": "__children"
      }, {
        "el-sub-menu": {
          "index": "2",
          "__children": [{
            "template": {
              "#title": "",
              "__children": [],
              "__text__": "Workspace",
              "lc_id": "EOLCWq1ax8"
            },
            "__key__": "__children"
          }, {
            "el-menu-item": {
              "index": "2-1",
              "__children": [],
              "__text__": "item one",
              "lc_id": "waSAqnTnUK"
            },
            "__key__": "__children"
          }, {
            "el-menu-item": {
              "index": "2-2",
              "__children": [],
              "__text__": "item two",
              "lc_id": "x7OA9OoX9M"
            },
            "__key__": "__children"
          }, {
            "el-menu-item": {
              "index": "2-3",
              "__children": [],
              "__text__": "item three",
              "lc_id": "XoUxBjhh8r"
            },
            "__key__": "__children"
          }, {
            "el-sub-menu": {
              "index": "2-4",
              "__children": [{
                "template": {
                  "#title": "",
                  "__children": [],
                  "__text__": "item four",
                  "lc_id": "TZAoib4i41"
                },
                "__key__": "__children"
              }, {
                "el-menu-item": {
                  "index": "2-4-1",
                  "__children": [],
                  "__text__": "item one",
                  "lc_id": "KPPi+2aCzR"
                },
                "__key__": "__children"
              }, {
                "el-menu-item": {
                  "index": "2-4-2",
                  "__children": [],
                  "__text__": "item two",
                  "lc_id": "9HsVuJIBXT"
                },
                "__key__": "__children"
              }, {
                "el-menu-item": {
                  "index": "2-4-3",
                  "__children": [],
                  "__text__": "item three",
                  "lc_id": "pb1fYeVfpT"
                },
                "__key__": "__children"
              }],
              "lc_id": "kVYGkptqy3"
            },
            "__key__": "__children"
          }],
          "lc_id": "b9dDZDEyzu"
        },
        "__key__": "__children"
      }, {
        "el-menu-item": {
          "index": "3",
          "disabled": "",
          "__children": [],
          "__text__": "Info",
          "lc_id": "OYs/KISq4y"
        },
        "__key__": "__children"
      }, {
        "el-menu-item": {
          "index": "4",
          "__children": [],
          "__text__": "Orders",
          "lc_id": "POtcpYxQZ9"
        },
        "__key__": "__children"
      }],
      "lc_id": "ihtDhkfBO3"
    }
  },
  "Hr+gUUgFTD": {
    "div": {
      "lc_id": "Hr+gUUgFTD",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "EAnxv9IwcJ",
          "__children": [],
          "__text__": "Tabs 标签页"
        },
        "__key__": "__children"
      }, {
        "el-tabs": {
          "lc-mark": "",
          "v-model": "activeName",
          "@tab-click": "handleClick",
          "lc_id": "7TSxFc1h/T",
          "__children": [{
            "el-tab-pane": {
              "label": "用户管理",
              "name": "first",
              "lc_id": "nESAhjJD5+",
              "__children": [],
              "__text__": "用户管理"
            },
            "__key__": "__children"
          }, {
            "el-tab-pane": {
              "label": "配置管理",
              "name": "second",
              "lc_id": "GS8HXVlmCM",
              "__children": [],
              "__text__": "配置管理"
            },
            "__key__": "__children"
          }, {
            "el-tab-pane": {
              "label": "角色管理",
              "name": "third",
              "lc_id": "/jr8Mrluge",
              "__children": [],
              "__text__": "角色管理"
            },
            "__key__": "__children"
          }, {
            "el-tab-pane": {
              "label": "定时任务补偿",
              "name": "fourth",
              "lc_id": "CYHnAsRUdX",
              "__children": [],
              "__text__": "定时任务补偿"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "EAnxv9IwcJ": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "EAnxv9IwcJ",
      "__children": [],
      "__text__": "Tabs 标签页"
    }
  },
  "7TSxFc1h/T": {
    "el-tabs": {
      "lc-mark": "",
      "v-model": "activeName",
      "@tab-click": "handleClick",
      "lc_id": "7TSxFc1h/T",
      "__children": [{
        "el-tab-pane": {
          "label": "用户管理",
          "name": "first",
          "lc_id": "nESAhjJD5+",
          "__children": [],
          "__text__": "用户管理"
        },
        "__key__": "__children"
      }, {
        "el-tab-pane": {
          "label": "配置管理",
          "name": "second",
          "lc_id": "GS8HXVlmCM",
          "__children": [],
          "__text__": "配置管理"
        },
        "__key__": "__children"
      }, {
        "el-tab-pane": {
          "label": "角色管理",
          "name": "third",
          "lc_id": "/jr8Mrluge",
          "__children": [],
          "__text__": "角色管理"
        },
        "__key__": "__children"
      }, {
        "el-tab-pane": {
          "label": "定时任务补偿",
          "name": "fourth",
          "lc_id": "CYHnAsRUdX",
          "__children": [],
          "__text__": "定时任务补偿"
        },
        "__key__": "__children"
      }]
    }
  },
  "nESAhjJD5+": {
    "el-tab-pane": {
      "label": "用户管理",
      "name": "first",
      "lc_id": "nESAhjJD5+",
      "__children": [],
      "__text__": "用户管理"
    }
  },
  "GS8HXVlmCM": {
    "el-tab-pane": {
      "label": "配置管理",
      "name": "second",
      "lc_id": "GS8HXVlmCM",
      "__children": [],
      "__text__": "配置管理"
    }
  },
  "/jr8Mrluge": {
    "el-tab-pane": {
      "label": "角色管理",
      "name": "third",
      "lc_id": "/jr8Mrluge",
      "__children": [],
      "__text__": "角色管理"
    }
  },
  "CYHnAsRUdX": {
    "el-tab-pane": {
      "label": "定时任务补偿",
      "name": "fourth",
      "lc_id": "CYHnAsRUdX",
      "__children": [],
      "__text__": "定时任务补偿"
    }
  },
  "0MpXv/hB5o": {
    "div": {
      "lc_id": "0MpXv/hB5o",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "cXJHcFnFGI",
          "__children": [],
          "__text__": "Breadcrumb 面包屑"
        },
        "__key__": "__children"
      }, {
        "el-breadcrumb": {
          "separator": "/",
          "lc-mark": "",
          "lc_id": "2kbMFsaBlw",
          "__children": [{
            "el-breadcrumb-item": {
              ":to": "{ path: '/' }",
              "lc_id": "Y24a1lsayw",
              "__children": [],
              "__text__": "首页"
            },
            "__key__": "__children"
          }, {
            "el-breadcrumb-item": {
              "lc_id": "e7mudUt3T2",
              "__children": [{
                "a": {
                  "href": "/",
                  "lc_id": "2fk4blwWt1",
                  "__children": [],
                  "__text__": "活动管理"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-breadcrumb-item": {
              "lc_id": "0uAUe0LS1k",
              "__children": [],
              "__text__": "活动列表"
            },
            "__key__": "__children"
          }, {
            "el-breadcrumb-item": {
              "lc_id": "vTAj15QynT",
              "__children": [],
              "__text__": "活动详情"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "cXJHcFnFGI": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "cXJHcFnFGI",
      "__children": [],
      "__text__": "Breadcrumb 面包屑"
    }
  },
  "2kbMFsaBlw": {
    "el-breadcrumb": {
      "separator": "/",
      "lc-mark": "",
      "lc_id": "2kbMFsaBlw",
      "__children": [{
        "el-breadcrumb-item": {
          ":to": "{ path: '/' }",
          "lc_id": "Y24a1lsayw",
          "__children": [],
          "__text__": "首页"
        },
        "__key__": "__children"
      }, {
        "el-breadcrumb-item": {
          "lc_id": "e7mudUt3T2",
          "__children": [{
            "a": {
              "href": "/",
              "lc_id": "2fk4blwWt1",
              "__children": [],
              "__text__": "活动管理"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-breadcrumb-item": {
          "lc_id": "0uAUe0LS1k",
          "__children": [],
          "__text__": "活动列表"
        },
        "__key__": "__children"
      }, {
        "el-breadcrumb-item": {
          "lc_id": "vTAj15QynT",
          "__children": [],
          "__text__": "活动详情"
        },
        "__key__": "__children"
      }]
    }
  },
  "Y24a1lsayw": {
    "el-breadcrumb-item": {
      ":to": "{ path: '/' }",
      "lc_id": "Y24a1lsayw",
      "__children": [],
      "__text__": "首页"
    }
  },
  "e7mudUt3T2": {
    "el-breadcrumb-item": {
      "lc_id": "e7mudUt3T2",
      "__children": [{
        "a": {
          "href": "/",
          "lc_id": "2fk4blwWt1",
          "__children": [],
          "__text__": "活动管理"
        },
        "__key__": "__children"
      }]
    }
  },
  "2fk4blwWt1": {
    "a": {
      "href": "/",
      "lc_id": "2fk4blwWt1",
      "__children": [],
      "__text__": "活动管理"
    }
  },
  "0uAUe0LS1k": {
    "el-breadcrumb-item": {
      "lc_id": "0uAUe0LS1k",
      "__children": [],
      "__text__": "活动列表"
    }
  },
  "vTAj15QynT": {
    "el-breadcrumb-item": {
      "lc_id": "vTAj15QynT",
      "__children": [],
      "__text__": "活动详情"
    }
  },
  "VliPzBWiIr": {
    "div": {
      "lc_id": "VliPzBWiIr",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "URE6411ToF",
          "__children": [],
          "__text__": "PageHeader 页头"
        },
        "__key__": "__children"
      }, {
        "el-page-header": {
          "lc-mark": "",
          "@back": "goBack2",
          "content": "详情页面",
          "lc_id": "VeIIrZpasX",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "URE6411ToF": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "URE6411ToF",
      "__children": [],
      "__text__": "PageHeader 页头"
    }
  },
  "VeIIrZpasX": {
    "el-page-header": {
      "lc-mark": "",
      "@back": "goBack2",
      "content": "详情页面",
      "lc_id": "VeIIrZpasX",
      "__children": []
    }
  },
  "q1K7UjfQRh": {
    "div": {
      "lc_id": "q1K7UjfQRh",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "QRo+LiBcqY",
          "__children": [],
          "__text__": "Dropdown 下拉菜单"
        },
        "__key__": "__children"
      }, {
        "el-dropdown": {
          "lc-mark": "",
          "lc_id": "eEugqtt2Ed",
          "__children": [{
            "span": {
              "class": "el-dropdown-link",
              "lc_id": "T9RXOuEAsg",
              "__children": [],
              "__text__": "下拉菜单"
            },
            "__key__": "__children"
          }, {
            "template": {
              "#dropdown": "",
              "lc_id": "Jgi+BtUZkP",
              "__children": [{
                "el-dropdown-menu": {
                  "lc_id": "fyNKB1+0hw",
                  "__children": [{
                    "el-dropdown-item": {
                      "lc_id": "nCNWPghXw7",
                      "__children": [],
                      "__text__": "黄金糕"
                    },
                    "__key__": "__children"
                  }, {
                    "el-dropdown-item": {
                      "lc_id": "3moaMHtIVR",
                      "__children": [],
                      "__text__": "狮子头"
                    },
                    "__key__": "__children"
                  }, {
                    "el-dropdown-item": {
                      "lc_id": "zeDetbgzeN",
                      "__children": [],
                      "__text__": "螺蛳粉"
                    },
                    "__key__": "__children"
                  }, {
                    "el-dropdown-item": {
                      "disabled": "",
                      "lc_id": "590JIX3HSV",
                      "__children": [],
                      "__text__": "双皮奶"
                    },
                    "__key__": "__children"
                  }, {
                    "el-dropdown-item": {
                      "divided": "",
                      "lc_id": "Svb2tOdBg/",
                      "__children": [],
                      "__text__": "蚵仔煎"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "QRo+LiBcqY": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "QRo+LiBcqY",
      "__children": [],
      "__text__": "Dropdown 下拉菜单"
    }
  },
  "eEugqtt2Ed": {
    "el-dropdown": {
      "lc-mark": "",
      "lc_id": "eEugqtt2Ed",
      "__children": [{
        "span": {
          "class": "el-dropdown-link",
          "lc_id": "T9RXOuEAsg",
          "__children": [],
          "__text__": "下拉菜单"
        },
        "__key__": "__children"
      }, {
        "template": {
          "#dropdown": "",
          "lc_id": "Jgi+BtUZkP",
          "__children": [{
            "el-dropdown-menu": {
              "lc_id": "fyNKB1+0hw",
              "__children": [{
                "el-dropdown-item": {
                  "lc_id": "nCNWPghXw7",
                  "__children": [],
                  "__text__": "黄金糕"
                },
                "__key__": "__children"
              }, {
                "el-dropdown-item": {
                  "lc_id": "3moaMHtIVR",
                  "__children": [],
                  "__text__": "狮子头"
                },
                "__key__": "__children"
              }, {
                "el-dropdown-item": {
                  "lc_id": "zeDetbgzeN",
                  "__children": [],
                  "__text__": "螺蛳粉"
                },
                "__key__": "__children"
              }, {
                "el-dropdown-item": {
                  "disabled": "",
                  "lc_id": "590JIX3HSV",
                  "__children": [],
                  "__text__": "双皮奶"
                },
                "__key__": "__children"
              }, {
                "el-dropdown-item": {
                  "divided": "",
                  "lc_id": "Svb2tOdBg/",
                  "__children": [],
                  "__text__": "蚵仔煎"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "T9RXOuEAsg": {
    "span": {
      "class": "el-dropdown-link",
      "lc_id": "T9RXOuEAsg",
      "__children": [],
      "__text__": "下拉菜单"
    }
  },
  "Jgi+BtUZkP": {
    "template": {
      "#dropdown": "",
      "lc_id": "Jgi+BtUZkP",
      "__children": [{
        "el-dropdown-menu": {
          "lc_id": "fyNKB1+0hw",
          "__children": [{
            "el-dropdown-item": {
              "lc_id": "nCNWPghXw7",
              "__children": [],
              "__text__": "黄金糕"
            },
            "__key__": "__children"
          }, {
            "el-dropdown-item": {
              "lc_id": "3moaMHtIVR",
              "__children": [],
              "__text__": "狮子头"
            },
            "__key__": "__children"
          }, {
            "el-dropdown-item": {
              "lc_id": "zeDetbgzeN",
              "__children": [],
              "__text__": "螺蛳粉"
            },
            "__key__": "__children"
          }, {
            "el-dropdown-item": {
              "disabled": "",
              "lc_id": "590JIX3HSV",
              "__children": [],
              "__text__": "双皮奶"
            },
            "__key__": "__children"
          }, {
            "el-dropdown-item": {
              "divided": "",
              "lc_id": "Svb2tOdBg/",
              "__children": [],
              "__text__": "蚵仔煎"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "fyNKB1+0hw": {
    "el-dropdown-menu": {
      "lc_id": "fyNKB1+0hw",
      "__children": [{
        "el-dropdown-item": {
          "lc_id": "nCNWPghXw7",
          "__children": [],
          "__text__": "黄金糕"
        },
        "__key__": "__children"
      }, {
        "el-dropdown-item": {
          "lc_id": "3moaMHtIVR",
          "__children": [],
          "__text__": "狮子头"
        },
        "__key__": "__children"
      }, {
        "el-dropdown-item": {
          "lc_id": "zeDetbgzeN",
          "__children": [],
          "__text__": "螺蛳粉"
        },
        "__key__": "__children"
      }, {
        "el-dropdown-item": {
          "disabled": "",
          "lc_id": "590JIX3HSV",
          "__children": [],
          "__text__": "双皮奶"
        },
        "__key__": "__children"
      }, {
        "el-dropdown-item": {
          "divided": "",
          "lc_id": "Svb2tOdBg/",
          "__children": [],
          "__text__": "蚵仔煎"
        },
        "__key__": "__children"
      }]
    }
  },
  "nCNWPghXw7": {
    "el-dropdown-item": {
      "lc_id": "nCNWPghXw7",
      "__children": [],
      "__text__": "黄金糕"
    }
  },
  "3moaMHtIVR": {
    "el-dropdown-item": {
      "lc_id": "3moaMHtIVR",
      "__children": [],
      "__text__": "狮子头"
    }
  },
  "zeDetbgzeN": {
    "el-dropdown-item": {
      "lc_id": "zeDetbgzeN",
      "__children": [],
      "__text__": "螺蛳粉"
    }
  },
  "590JIX3HSV": {
    "el-dropdown-item": {
      "disabled": "",
      "lc_id": "590JIX3HSV",
      "__children": [],
      "__text__": "双皮奶"
    }
  },
  "Svb2tOdBg/": {
    "el-dropdown-item": {
      "divided": "",
      "lc_id": "Svb2tOdBg/",
      "__children": [],
      "__text__": "蚵仔煎"
    }
  },
  "qp0NNdlqXq": {
    "div": {
      "lc_id": "qp0NNdlqXq",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "RGehF229fc",
          "__children": [],
          "__text__": "Steps 步骤条"
        },
        "__key__": "__children"
      }, {
        "el-steps": {
          "lc-mark": "",
          ":active": "active",
          "finish-status": "success",
          "lc_id": "2yxeEC6GkQ",
          "__children": [{
            "el-step": {
              "title": "步骤 1",
              "lc_id": "IA1KW5Gwpv",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-step": {
              "title": "步骤 2",
              "lc_id": "sGjhJUaXCP",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-step": {
              "lc-mark": "",
              "title": "步骤 3",
              "lc_id": "gS1/xHiigS",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "RGehF229fc": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "RGehF229fc",
      "__children": [],
      "__text__": "Steps 步骤条"
    }
  },
  "2yxeEC6GkQ": {
    "el-steps": {
      "lc-mark": "",
      ":active": "active",
      "finish-status": "success",
      "lc_id": "2yxeEC6GkQ",
      "__children": [{
        "el-step": {
          "title": "步骤 1",
          "lc_id": "IA1KW5Gwpv",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-step": {
          "title": "步骤 2",
          "lc_id": "sGjhJUaXCP",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-step": {
          "lc-mark": "",
          "title": "步骤 3",
          "lc_id": "gS1/xHiigS",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "IA1KW5Gwpv": {
    "el-step": {
      "title": "步骤 1",
      "lc_id": "IA1KW5Gwpv",
      "__children": []
    }
  },
  "sGjhJUaXCP": {
    "el-step": {
      "title": "步骤 2",
      "lc_id": "sGjhJUaXCP",
      "__children": []
    }
  },
  "gS1/xHiigS": {
    "el-step": {
      "lc-mark": "",
      "title": "步骤 3",
      "lc_id": "gS1/xHiigS",
      "__children": []
    }
  },
  "EduDP6YT5B": {
    "div": {
      "lc_id": "EduDP6YT5B",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "5Ryo1lT9Ri",
          "__children": [],
          "__text__": "Card 卡片"
        },
        "__key__": "__children"
      }, {
        "el-card": {
          "lc-mark": "",
          "class": "box-card",
          "lc_id": "f7u3JZOXiY",
          "__children": [{
            "template": {
              "#header": "",
              "lc_id": "fcNx1E9u+l",
              "__children": [{
                "div": {
                  "class": "clearfix",
                  "lc_id": "JjiI6DiLa8",
                  "__children": [{
                    "span": {
                      "lc_id": "HyznGRyy1o",
                      "__children": [],
                      "__text__": "卡片名称"
                    },
                    "__key__": "__children"
                  }, {
                    "el-button": {
                      "style": "float: right; padding: 3px 0",
                      "type": "text",
                      "lc_id": "2BV+GEiJPf",
                      "__children": [],
                      "__text__": "操作按钮"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "div": {
                  "v-for": "o in 4",
                  ":key": "o",
                  "class": "text item",
                  "lc_id": "WrqZOeR62/",
                  "__children": [],
                  "__text__": "{{ \"列表内容 \" + o }}"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "5Ryo1lT9Ri": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "5Ryo1lT9Ri",
      "__children": [],
      "__text__": "Card 卡片"
    }
  },
  "f7u3JZOXiY": {
    "el-card": {
      "lc-mark": "",
      "class": "box-card",
      "lc_id": "f7u3JZOXiY",
      "__children": [{
        "template": {
          "#header": "",
          "lc_id": "fcNx1E9u+l",
          "__children": [{
            "div": {
              "class": "clearfix",
              "lc_id": "JjiI6DiLa8",
              "__children": [{
                "span": {
                  "lc_id": "HyznGRyy1o",
                  "__children": [],
                  "__text__": "卡片名称"
                },
                "__key__": "__children"
              }, {
                "el-button": {
                  "style": "float: right; padding: 3px 0",
                  "type": "text",
                  "lc_id": "2BV+GEiJPf",
                  "__children": [],
                  "__text__": "操作按钮"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "div": {
              "v-for": "o in 4",
              ":key": "o",
              "class": "text item",
              "lc_id": "WrqZOeR62/",
              "__children": [],
              "__text__": "{{ \"列表内容 \" + o }}"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "fcNx1E9u+l": {
    "template": {
      "#header": "",
      "lc_id": "fcNx1E9u+l",
      "__children": [{
        "div": {
          "class": "clearfix",
          "lc_id": "JjiI6DiLa8",
          "__children": [{
            "span": {
              "lc_id": "HyznGRyy1o",
              "__children": [],
              "__text__": "卡片名称"
            },
            "__key__": "__children"
          }, {
            "el-button": {
              "style": "float: right; padding: 3px 0",
              "type": "text",
              "lc_id": "2BV+GEiJPf",
              "__children": [],
              "__text__": "操作按钮"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "v-for": "o in 4",
          ":key": "o",
          "class": "text item",
          "lc_id": "WrqZOeR62/",
          "__children": [],
          "__text__": "{{ \"列表内容 \" + o }}"
        },
        "__key__": "__children"
      }]
    }
  },
  "JjiI6DiLa8": {
    "div": {
      "class": "clearfix",
      "lc_id": "JjiI6DiLa8",
      "__children": [{
        "span": {
          "lc_id": "HyznGRyy1o",
          "__children": [],
          "__text__": "卡片名称"
        },
        "__key__": "__children"
      }, {
        "el-button": {
          "style": "float: right; padding: 3px 0",
          "type": "text",
          "lc_id": "2BV+GEiJPf",
          "__children": [],
          "__text__": "操作按钮"
        },
        "__key__": "__children"
      }]
    }
  },
  "HyznGRyy1o": {
    "span": {
      "lc_id": "HyznGRyy1o",
      "__children": [],
      "__text__": "卡片名称"
    }
  },
  "2BV+GEiJPf": {
    "el-button": {
      "style": "float: right; padding: 3px 0",
      "type": "text",
      "lc_id": "2BV+GEiJPf",
      "__children": [],
      "__text__": "操作按钮"
    }
  },
  "WrqZOeR62/": {
    "div": {
      "v-for": "o in 4",
      ":key": "o",
      "class": "text item",
      "lc_id": "WrqZOeR62/",
      "__children": [],
      "__text__": "{{ \"列表内容 \" + o }}"
    }
  },
  "Ac3U6soq4v": {
    "div": {
      "lc_id": "Ac3U6soq4v",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "yHQSJ5j0qr",
          "__children": [],
          "__text__": "Carousel 走马灯"
        },
        "__key__": "__children"
      }, {
        "el-carousel": {
          "height": "150px",
          "lc-mark": "",
          "lc_id": "pf7cTX05Pe",
          "__children": [{
            "el-carousel-item": {
              "v-for": "item in 4",
              ":key": "item",
              "lc_id": "LWxEwOsKCc",
              "__children": [{
                "h3": {
                  "class": "small",
                  "lc_id": "rY5AkL9779",
                  "__children": [],
                  "__text__": "{{ item }}"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "yHQSJ5j0qr": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "yHQSJ5j0qr",
      "__children": [],
      "__text__": "Carousel 走马灯"
    }
  },
  "pf7cTX05Pe": {
    "el-carousel": {
      "height": "150px",
      "lc-mark": "",
      "lc_id": "pf7cTX05Pe",
      "__children": [{
        "el-carousel-item": {
          "v-for": "item in 4",
          ":key": "item",
          "lc_id": "LWxEwOsKCc",
          "__children": [{
            "h3": {
              "class": "small",
              "lc_id": "rY5AkL9779",
              "__children": [],
              "__text__": "{{ item }}"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "LWxEwOsKCc": {
    "el-carousel-item": {
      "v-for": "item in 4",
      ":key": "item",
      "lc_id": "LWxEwOsKCc",
      "__children": [{
        "h3": {
          "class": "small",
          "lc_id": "rY5AkL9779",
          "__children": [],
          "__text__": "{{ item }}"
        },
        "__key__": "__children"
      }]
    }
  },
  "rY5AkL9779": {
    "h3": {
      "class": "small",
      "lc_id": "rY5AkL9779",
      "__children": [],
      "__text__": "{{ item }}"
    }
  },
  "h98mxV67rm": {
    "div": {
      "lc_id": "h98mxV67rm",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "YCdpR3F66X",
          "__children": [],
          "__text__": "Collapse 折叠面板"
        },
        "__key__": "__children"
      }, {
        "el-collapse": {
          "lc-mark": "",
          "v-model": "collapseActiveNames",
          "@change": "handleChange3",
          "lc_id": "SxwGYgpIAH",
          "__children": [{
            "el-collapse-item": {
              "title": "一致性 Consistency",
              "name": "1",
              "lc_id": "9tnnQx3Q6z",
              "__children": [{
                "div": {
                  "lc_id": "nEOQzKpL2r",
                  "__children": [],
                  "__text__": "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"
                },
                "__key__": "__children"
              }, {
                "div": {
                  "lc_id": "dAI8bwEYNq",
                  "__children": [],
                  "__text__": "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-collapse-item": {
              "title": "反馈 Feedback",
              "name": "2",
              "lc_id": "B1Egey2IgT",
              "__children": [{
                "div": {
                  "lc_id": "XNb772hFlA",
                  "__children": [],
                  "__text__": "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"
                },
                "__key__": "__children"
              }, {
                "div": {
                  "lc_id": "p/6OnJUnHn",
                  "__children": [],
                  "__text__": "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-collapse-item": {
              "title": "效率 Efficiency",
              "name": "3",
              "lc_id": "Xq2hL9btvR",
              "__children": [{
                "div": {
                  "lc_id": "fCqY57GW+o",
                  "__children": [],
                  "__text__": "简化流程：设计简洁直观的操作流程；"
                },
                "__key__": "__children"
              }, {
                "div": {
                  "lc_id": "O1v1vIbqMk",
                  "__children": [],
                  "__text__": "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"
                },
                "__key__": "__children"
              }, {
                "div": {
                  "lc_id": "oXshK9bC/I",
                  "__children": [],
                  "__text__": "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-collapse-item": {
              "title": "可控 Controllability",
              "name": "4",
              "lc_id": "POyL7FoSe4",
              "__children": [{
                "div": {
                  "lc_id": "DR+xM6f78t",
                  "__children": [],
                  "__text__": "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"
                },
                "__key__": "__children"
              }, {
                "div": {
                  "lc_id": "2g+ldln/84",
                  "__children": [],
                  "__text__": "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "YCdpR3F66X": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "YCdpR3F66X",
      "__children": [],
      "__text__": "Collapse 折叠面板"
    }
  },
  "SxwGYgpIAH": {
    "el-collapse": {
      "lc-mark": "",
      "v-model": "collapseActiveNames",
      "@change": "handleChange3",
      "lc_id": "SxwGYgpIAH",
      "__children": [{
        "el-collapse-item": {
          "title": "一致性 Consistency",
          "name": "1",
          "lc_id": "9tnnQx3Q6z",
          "__children": [{
            "div": {
              "lc_id": "nEOQzKpL2r",
              "__children": [],
              "__text__": "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "dAI8bwEYNq",
              "__children": [],
              "__text__": "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-collapse-item": {
          "title": "反馈 Feedback",
          "name": "2",
          "lc_id": "B1Egey2IgT",
          "__children": [{
            "div": {
              "lc_id": "XNb772hFlA",
              "__children": [],
              "__text__": "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "p/6OnJUnHn",
              "__children": [],
              "__text__": "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-collapse-item": {
          "title": "效率 Efficiency",
          "name": "3",
          "lc_id": "Xq2hL9btvR",
          "__children": [{
            "div": {
              "lc_id": "fCqY57GW+o",
              "__children": [],
              "__text__": "简化流程：设计简洁直观的操作流程；"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "O1v1vIbqMk",
              "__children": [],
              "__text__": "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "oXshK9bC/I",
              "__children": [],
              "__text__": "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-collapse-item": {
          "title": "可控 Controllability",
          "name": "4",
          "lc_id": "POyL7FoSe4",
          "__children": [{
            "div": {
              "lc_id": "DR+xM6f78t",
              "__children": [],
              "__text__": "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "2g+ldln/84",
              "__children": [],
              "__text__": "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "9tnnQx3Q6z": {
    "el-collapse-item": {
      "title": "一致性 Consistency",
      "name": "1",
      "lc_id": "9tnnQx3Q6z",
      "__children": [{
        "div": {
          "lc_id": "nEOQzKpL2r",
          "__children": [],
          "__text__": "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "dAI8bwEYNq",
          "__children": [],
          "__text__": "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
        },
        "__key__": "__children"
      }]
    }
  },
  "nEOQzKpL2r": {
    "div": {
      "lc_id": "nEOQzKpL2r",
      "__children": [],
      "__text__": "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"
    }
  },
  "dAI8bwEYNq": {
    "div": {
      "lc_id": "dAI8bwEYNq",
      "__children": [],
      "__text__": "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
    }
  },
  "B1Egey2IgT": {
    "el-collapse-item": {
      "title": "反馈 Feedback",
      "name": "2",
      "lc_id": "B1Egey2IgT",
      "__children": [{
        "div": {
          "lc_id": "XNb772hFlA",
          "__children": [],
          "__text__": "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "p/6OnJUnHn",
          "__children": [],
          "__text__": "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
        },
        "__key__": "__children"
      }]
    }
  },
  "XNb772hFlA": {
    "div": {
      "lc_id": "XNb772hFlA",
      "__children": [],
      "__text__": "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"
    }
  },
  "p/6OnJUnHn": {
    "div": {
      "lc_id": "p/6OnJUnHn",
      "__children": [],
      "__text__": "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
    }
  },
  "Xq2hL9btvR": {
    "el-collapse-item": {
      "title": "效率 Efficiency",
      "name": "3",
      "lc_id": "Xq2hL9btvR",
      "__children": [{
        "div": {
          "lc_id": "fCqY57GW+o",
          "__children": [],
          "__text__": "简化流程：设计简洁直观的操作流程；"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "O1v1vIbqMk",
          "__children": [],
          "__text__": "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "oXshK9bC/I",
          "__children": [],
          "__text__": "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
        },
        "__key__": "__children"
      }]
    }
  },
  "fCqY57GW+o": {
    "div": {
      "lc_id": "fCqY57GW+o",
      "__children": [],
      "__text__": "简化流程：设计简洁直观的操作流程；"
    }
  },
  "O1v1vIbqMk": {
    "div": {
      "lc_id": "O1v1vIbqMk",
      "__children": [],
      "__text__": "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"
    }
  },
  "oXshK9bC/I": {
    "div": {
      "lc_id": "oXshK9bC/I",
      "__children": [],
      "__text__": "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
    }
  },
  "POyL7FoSe4": {
    "el-collapse-item": {
      "title": "可控 Controllability",
      "name": "4",
      "lc_id": "POyL7FoSe4",
      "__children": [{
        "div": {
          "lc_id": "DR+xM6f78t",
          "__children": [],
          "__text__": "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "2g+ldln/84",
          "__children": [],
          "__text__": "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
        },
        "__key__": "__children"
      }]
    }
  },
  "DR+xM6f78t": {
    "div": {
      "lc_id": "DR+xM6f78t",
      "__children": [],
      "__text__": "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"
    }
  },
  "2g+ldln/84": {
    "div": {
      "lc_id": "2g+ldln/84",
      "__children": [],
      "__text__": "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
    }
  },
  "0kee2BlFsA": {
    "div": {
      "lc_id": "0kee2BlFsA",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "0EBCjFbCyA",
          "__children": [],
          "__text__": "Timeline 时间线"
        },
        "__key__": "__children"
      }, {
        "el-timeline": {
          ":reverse": "reverse",
          "lc-mark": "",
          "lc_id": "HcDb8BgA1w",
          "__children": [{
            "el-timeline-item": {
              "v-for": "(activity, index) in activities",
              ":key": "index",
              ":timestamp": "activity.timestamp",
              "lc_id": "lqCmZ7Zw9R",
              "__children": [],
              "__text__": "{{ activity.content }}"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "0EBCjFbCyA": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "0EBCjFbCyA",
      "__children": [],
      "__text__": "Timeline 时间线"
    }
  },
  "HcDb8BgA1w": {
    "el-timeline": {
      ":reverse": "reverse",
      "lc-mark": "",
      "lc_id": "HcDb8BgA1w",
      "__children": [{
        "el-timeline-item": {
          "v-for": "(activity, index) in activities",
          ":key": "index",
          ":timestamp": "activity.timestamp",
          "lc_id": "lqCmZ7Zw9R",
          "__children": [],
          "__text__": "{{ activity.content }}"
        },
        "__key__": "__children"
      }]
    }
  },
  "lqCmZ7Zw9R": {
    "el-timeline-item": {
      "v-for": "(activity, index) in activities",
      ":key": "index",
      ":timestamp": "activity.timestamp",
      "lc_id": "lqCmZ7Zw9R",
      "__children": [],
      "__text__": "{{ activity.content }}"
    }
  },
  "G64C6Q7euE": {
    "div": {
      "lc_id": "G64C6Q7euE",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "DnbJwJg18E",
          "__children": [],
          "__text__": "Calendar 日历"
        },
        "__key__": "__children"
      }, {
        "el-calendar": {
          "lc-mark": "",
          "v-model": "calendarValue",
          "lc_id": "yd4ddVWJ69",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "DnbJwJg18E": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "DnbJwJg18E",
      "__children": [],
      "__text__": "Calendar 日历"
    }
  },
  "yd4ddVWJ69": {
    "el-calendar": {
      "lc-mark": "",
      "v-model": "calendarValue",
      "lc_id": "yd4ddVWJ69",
      "__children": []
    }
  },
  "BHDMhfXQP4": {
    "div": {
      "lc_id": "BHDMhfXQP4",
      "__children": []
    }
  },
  "sH9KziXOZQ": {
    "div": {
      "lc_id": "sH9KziXOZQ",
      "__children": [{
        "div": {
          "lc_id": "utFsoBQhKe",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "OWDlcZd3tn",
              "__children": [],
              "__text__": "Image 图片"
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "display: inline-block;",
              "lc-mark": "",
              "lc_id": "w68Klpv8Wr",
              "__children": [{
                "el-image": {
                  "style": "width: 100px; height: 100px;",
                  ":src": "url4",
                  "fit": "fill",
                  "lc_id": "RvayJfco9G",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "display: inline-block;",
              "lc-mark": "",
              "lc_id": "8L+gABRzhW",
              "__children": [{
                "el-image": {
                  "style": "width: 100px; height: 100px;",
                  ":src": "url4",
                  "fit": "contain",
                  "lc_id": "dInTMVYtvm",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "display: inline-block;",
              "lc-mark": "",
              "lc_id": "YKNPD/ANjR",
              "__children": [{
                "el-image": {
                  "style": "width: 100px; height: 100px;",
                  ":src": "url4",
                  "fit": "cover",
                  "lc_id": "PNKy3Vw9/D",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "display: inline-block;",
              "lc-mark": "",
              "lc_id": "/MMOV+luD/",
              "__children": [{
                "el-image": {
                  "style": "width: 100px; height: 100px;",
                  ":src": "url4",
                  "fit": "none",
                  "lc_id": "gvi3/VnpMI",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "display: inline-block;",
              "lc-mark": "",
              "lc_id": "xyur7jxP1x",
              "__children": [{
                "el-image": {
                  "style": "width: 100px; height: 100px;",
                  ":src": "url4",
                  "fit": "scale-down",
                  "lc_id": "7G2nDtcr5y",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "utFsoBQhKe": {
    "div": {
      "lc_id": "utFsoBQhKe",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "OWDlcZd3tn",
          "__children": [],
          "__text__": "Image 图片"
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "display: inline-block;",
          "lc-mark": "",
          "lc_id": "w68Klpv8Wr",
          "__children": [{
            "el-image": {
              "style": "width: 100px; height: 100px;",
              ":src": "url4",
              "fit": "fill",
              "lc_id": "RvayJfco9G",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "display: inline-block;",
          "lc-mark": "",
          "lc_id": "8L+gABRzhW",
          "__children": [{
            "el-image": {
              "style": "width: 100px; height: 100px;",
              ":src": "url4",
              "fit": "contain",
              "lc_id": "dInTMVYtvm",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "display: inline-block;",
          "lc-mark": "",
          "lc_id": "YKNPD/ANjR",
          "__children": [{
            "el-image": {
              "style": "width: 100px; height: 100px;",
              ":src": "url4",
              "fit": "cover",
              "lc_id": "PNKy3Vw9/D",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "display: inline-block;",
          "lc-mark": "",
          "lc_id": "/MMOV+luD/",
          "__children": [{
            "el-image": {
              "style": "width: 100px; height: 100px;",
              ":src": "url4",
              "fit": "none",
              "lc_id": "gvi3/VnpMI",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "display: inline-block;",
          "lc-mark": "",
          "lc_id": "xyur7jxP1x",
          "__children": [{
            "el-image": {
              "style": "width: 100px; height: 100px;",
              ":src": "url4",
              "fit": "scale-down",
              "lc_id": "7G2nDtcr5y",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "OWDlcZd3tn": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "OWDlcZd3tn",
      "__children": [],
      "__text__": "Image 图片"
    }
  },
  "w68Klpv8Wr": {
    "div": {
      "style": "display: inline-block;",
      "lc-mark": "",
      "lc_id": "w68Klpv8Wr",
      "__children": [{
        "el-image": {
          "style": "width: 100px; height: 100px;",
          ":src": "url4",
          "fit": "fill",
          "lc_id": "RvayJfco9G",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "RvayJfco9G": {
    "el-image": {
      "style": "width: 100px; height: 100px;",
      ":src": "url4",
      "fit": "fill",
      "lc_id": "RvayJfco9G",
      "__children": []
    }
  },
  "8L+gABRzhW": {
    "div": {
      "style": "display: inline-block;",
      "lc-mark": "",
      "lc_id": "8L+gABRzhW",
      "__children": [{
        "el-image": {
          "style": "width: 100px; height: 100px;",
          ":src": "url4",
          "fit": "contain",
          "lc_id": "dInTMVYtvm",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "dInTMVYtvm": {
    "el-image": {
      "style": "width: 100px; height: 100px;",
      ":src": "url4",
      "fit": "contain",
      "lc_id": "dInTMVYtvm",
      "__children": []
    }
  },
  "YKNPD/ANjR": {
    "div": {
      "style": "display: inline-block;",
      "lc-mark": "",
      "lc_id": "YKNPD/ANjR",
      "__children": [{
        "el-image": {
          "style": "width: 100px; height: 100px;",
          ":src": "url4",
          "fit": "cover",
          "lc_id": "PNKy3Vw9/D",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "PNKy3Vw9/D": {
    "el-image": {
      "style": "width: 100px; height: 100px;",
      ":src": "url4",
      "fit": "cover",
      "lc_id": "PNKy3Vw9/D",
      "__children": []
    }
  },
  "/MMOV+luD/": {
    "div": {
      "style": "display: inline-block;",
      "lc-mark": "",
      "lc_id": "/MMOV+luD/",
      "__children": [{
        "el-image": {
          "style": "width: 100px; height: 100px;",
          ":src": "url4",
          "fit": "none",
          "lc_id": "gvi3/VnpMI",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "gvi3/VnpMI": {
    "el-image": {
      "style": "width: 100px; height: 100px;",
      ":src": "url4",
      "fit": "none",
      "lc_id": "gvi3/VnpMI",
      "__children": []
    }
  },
  "xyur7jxP1x": {
    "div": {
      "style": "display: inline-block;",
      "lc-mark": "",
      "lc_id": "xyur7jxP1x",
      "__children": [{
        "el-image": {
          "style": "width: 100px; height: 100px;",
          ":src": "url4",
          "fit": "scale-down",
          "lc_id": "7G2nDtcr5y",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "7G2nDtcr5y": {
    "el-image": {
      "style": "width: 100px; height: 100px;",
      ":src": "url4",
      "fit": "scale-down",
      "lc_id": "7G2nDtcr5y",
      "__children": []
    }
  },
  "7QLt3BTntD": {
    "div": {
      "lc_id": "7QLt3BTntD",
      "__children": [{
        "div": {
          "lc_id": "MoDIFD9beY",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "P3YgnZ+f9L",
              "__children": [],
              "__text__": "Layout 布局"
            },
            "__key__": "__children"
          }, {
            "el-row": {
              "lc-mark": "",
              "lc_id": "NezszKss/U",
              "__children": [{
                "el-col": {
                  ":span": "24",
                  "lc_id": "TW/BDkcZrB",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple-dark",
                      "lc_id": "1Lsg2uMePE",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-row": {
              "lc-mark": "",
              "lc_id": "TPZKAPgQp1",
              "__children": [{
                "el-col": {
                  ":span": "12",
                  "lc_id": "iNHSLalTdq",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "euyIZziPqv",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "12",
                  "lc_id": "OVZhfCLYXt",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple-light",
                      "lc_id": "c7AXrVMer2",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-row": {
              "lc-mark": "",
              "lc_id": "tzvFqToSIx",
              "__children": [{
                "el-col": {
                  ":span": "8",
                  "lc_id": "gqZj2TfLb8",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "hU+oUAIchh",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "8",
                  "lc_id": "Ce0iiKHF1D",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple-light",
                      "lc_id": "dYm8Ds+7GU",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "8",
                  "lc_id": "jJwg57nJyc",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "WgFRKki5iV",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-row": {
              "lc-mark": "",
              "lc_id": "DISqSQIRuT",
              "__children": [{
                "el-col": {
                  ":span": "6",
                  "lc_id": "YzZ2AwSW6G",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "u5xd9+dh9V",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "6",
                  "lc_id": "LEPFDf8YYH",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple-light",
                      "lc_id": "D05FS4uRjs",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "6",
                  "lc_id": "BBCqvPJv/X",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "S42KNtBQFZ",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "6",
                  "lc_id": "DHblSwi+L7",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple-light",
                      "lc_id": "ivjjPVjjnr",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-row": {
              "lc-mark": "",
              "lc_id": "9mPg3N+4Qw",
              "__children": [{
                "el-col": {
                  ":span": "4",
                  "lc_id": "T8HazUYEOt",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "meZQqlUbyc",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "4",
                  "lc_id": "us0lyJqF9u",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple-light",
                      "lc_id": "Dg7zC5FRWM",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "4",
                  "lc_id": "Jg2zamD3Pm",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "pTHu7SCFdf",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "4",
                  "lc_id": "uFfJtyu3lO",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple-light",
                      "lc_id": "4Y1h471JWS",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "4",
                  "lc_id": "n2nFYPBVOv",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "oZwq90Bi+e",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "4",
                  "lc_id": "5+xwb7Y6SI",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple-light",
                      "lc_id": "bh/aoF+9ya",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "TYy/bOUMNr",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "trBMz5blKg",
              "__children": [],
              "__text__": "Layout 分栏间隔布局"
            },
            "__key__": "__children"
          }, {
            "el-row": {
              ":gutter": "20",
              "lc-mark": "",
              "lc_id": "gFfya4TxDk",
              "__children": [{
                "el-col": {
                  ":span": "6",
                  "lc_id": "ws0L3MK/Zd",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "Ubsbv5h8rG",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "6",
                  "lc_id": "JSzu5D9Sfk",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "O0Rgdk3cKz",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "6",
                  "lc_id": "QEAC8l6awc",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "N+YhMdOQVb",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "6",
                  "lc_id": "ojGD7eUbaa",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "cMouTO1yO7",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "xbQPgKUBIy",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "Bc2PY/ZYiU",
              "__children": [],
              "__text__": "Layout 混合布局"
            },
            "__key__": "__children"
          }, {
            "el-row": {
              ":gutter": "20",
              "lc-mark": "",
              "lc_id": "nYMpGdRSrq",
              "__children": [{
                "el-col": {
                  ":span": "16",
                  "lc_id": "eMrh2sYnKx",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "IC5Wm1Hn9n",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "8",
                  "lc_id": "Xs8VJkHelZ",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "ypg8TKxYh5",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-row": {
              ":gutter": "20",
              "lc-mark": "",
              "lc_id": "Gm4zSQrKoN",
              "__children": [{
                "el-col": {
                  ":span": "8",
                  "lc_id": "HBbcLaIE9m",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "BGPEKw0h4I",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "8",
                  "lc_id": "pK9Tw20FRI",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "ARxfz9lR3l",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "4",
                  "lc_id": "dRZMyvJPRM",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "XIKrToEQJd",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "4",
                  "lc_id": "0pIE7zGZUg",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "rW6P8kYrWR",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-row": {
              ":gutter": "20",
              "lc-mark": "",
              "lc_id": "jgi7BKYF+0",
              "__children": [{
                "el-col": {
                  ":span": "4",
                  "lc_id": "EZF3aOWMra",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "2HeQgzYeYn",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "16",
                  "lc_id": "2AVcBud9PA",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "6XvbIskPHD",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "el-col": {
                  ":span": "4",
                  "lc_id": "y4UEbmjim5",
                  "__children": [{
                    "div": {
                      "class": "grid-content bg-purple",
                      "lc_id": "m4yavM6CB5",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "MoDIFD9beY": {
    "div": {
      "lc_id": "MoDIFD9beY",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "P3YgnZ+f9L",
          "__children": [],
          "__text__": "Layout 布局"
        },
        "__key__": "__children"
      }, {
        "el-row": {
          "lc-mark": "",
          "lc_id": "NezszKss/U",
          "__children": [{
            "el-col": {
              ":span": "24",
              "lc_id": "TW/BDkcZrB",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple-dark",
                  "lc_id": "1Lsg2uMePE",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-row": {
          "lc-mark": "",
          "lc_id": "TPZKAPgQp1",
          "__children": [{
            "el-col": {
              ":span": "12",
              "lc_id": "iNHSLalTdq",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "euyIZziPqv",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "12",
              "lc_id": "OVZhfCLYXt",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple-light",
                  "lc_id": "c7AXrVMer2",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-row": {
          "lc-mark": "",
          "lc_id": "tzvFqToSIx",
          "__children": [{
            "el-col": {
              ":span": "8",
              "lc_id": "gqZj2TfLb8",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "hU+oUAIchh",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "8",
              "lc_id": "Ce0iiKHF1D",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple-light",
                  "lc_id": "dYm8Ds+7GU",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "8",
              "lc_id": "jJwg57nJyc",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "WgFRKki5iV",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-row": {
          "lc-mark": "",
          "lc_id": "DISqSQIRuT",
          "__children": [{
            "el-col": {
              ":span": "6",
              "lc_id": "YzZ2AwSW6G",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "u5xd9+dh9V",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "6",
              "lc_id": "LEPFDf8YYH",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple-light",
                  "lc_id": "D05FS4uRjs",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "6",
              "lc_id": "BBCqvPJv/X",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "S42KNtBQFZ",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "6",
              "lc_id": "DHblSwi+L7",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple-light",
                  "lc_id": "ivjjPVjjnr",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-row": {
          "lc-mark": "",
          "lc_id": "9mPg3N+4Qw",
          "__children": [{
            "el-col": {
              ":span": "4",
              "lc_id": "T8HazUYEOt",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "meZQqlUbyc",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "4",
              "lc_id": "us0lyJqF9u",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple-light",
                  "lc_id": "Dg7zC5FRWM",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "4",
              "lc_id": "Jg2zamD3Pm",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "pTHu7SCFdf",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "4",
              "lc_id": "uFfJtyu3lO",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple-light",
                  "lc_id": "4Y1h471JWS",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "4",
              "lc_id": "n2nFYPBVOv",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "oZwq90Bi+e",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "4",
              "lc_id": "5+xwb7Y6SI",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple-light",
                  "lc_id": "bh/aoF+9ya",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "P3YgnZ+f9L": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "P3YgnZ+f9L",
      "__children": [],
      "__text__": "Layout 布局"
    }
  },
  "NezszKss/U": {
    "el-row": {
      "lc-mark": "",
      "lc_id": "NezszKss/U",
      "__children": [{
        "el-col": {
          ":span": "24",
          "lc_id": "TW/BDkcZrB",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple-dark",
              "lc_id": "1Lsg2uMePE",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "TW/BDkcZrB": {
    "el-col": {
      ":span": "24",
      "lc_id": "TW/BDkcZrB",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple-dark",
          "lc_id": "1Lsg2uMePE",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "1Lsg2uMePE": {
    "div": {
      "class": "grid-content bg-purple-dark",
      "lc_id": "1Lsg2uMePE",
      "__children": []
    }
  },
  "TPZKAPgQp1": {
    "el-row": {
      "lc-mark": "",
      "lc_id": "TPZKAPgQp1",
      "__children": [{
        "el-col": {
          ":span": "12",
          "lc_id": "iNHSLalTdq",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "euyIZziPqv",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "12",
          "lc_id": "OVZhfCLYXt",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple-light",
              "lc_id": "c7AXrVMer2",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "iNHSLalTdq": {
    "el-col": {
      ":span": "12",
      "lc_id": "iNHSLalTdq",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "euyIZziPqv",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "euyIZziPqv": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "euyIZziPqv",
      "__children": []
    }
  },
  "OVZhfCLYXt": {
    "el-col": {
      ":span": "12",
      "lc_id": "OVZhfCLYXt",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple-light",
          "lc_id": "c7AXrVMer2",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "c7AXrVMer2": {
    "div": {
      "class": "grid-content bg-purple-light",
      "lc_id": "c7AXrVMer2",
      "__children": []
    }
  },
  "tzvFqToSIx": {
    "el-row": {
      "lc-mark": "",
      "lc_id": "tzvFqToSIx",
      "__children": [{
        "el-col": {
          ":span": "8",
          "lc_id": "gqZj2TfLb8",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "hU+oUAIchh",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "8",
          "lc_id": "Ce0iiKHF1D",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple-light",
              "lc_id": "dYm8Ds+7GU",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "8",
          "lc_id": "jJwg57nJyc",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "WgFRKki5iV",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "gqZj2TfLb8": {
    "el-col": {
      ":span": "8",
      "lc_id": "gqZj2TfLb8",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "hU+oUAIchh",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "hU+oUAIchh": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "hU+oUAIchh",
      "__children": []
    }
  },
  "Ce0iiKHF1D": {
    "el-col": {
      ":span": "8",
      "lc_id": "Ce0iiKHF1D",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple-light",
          "lc_id": "dYm8Ds+7GU",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "dYm8Ds+7GU": {
    "div": {
      "class": "grid-content bg-purple-light",
      "lc_id": "dYm8Ds+7GU",
      "__children": []
    }
  },
  "jJwg57nJyc": {
    "el-col": {
      ":span": "8",
      "lc_id": "jJwg57nJyc",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "WgFRKki5iV",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "WgFRKki5iV": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "WgFRKki5iV",
      "__children": []
    }
  },
  "DISqSQIRuT": {
    "el-row": {
      "lc-mark": "",
      "lc_id": "DISqSQIRuT",
      "__children": [{
        "el-col": {
          ":span": "6",
          "lc_id": "YzZ2AwSW6G",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "u5xd9+dh9V",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "6",
          "lc_id": "LEPFDf8YYH",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple-light",
              "lc_id": "D05FS4uRjs",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "6",
          "lc_id": "BBCqvPJv/X",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "S42KNtBQFZ",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "6",
          "lc_id": "DHblSwi+L7",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple-light",
              "lc_id": "ivjjPVjjnr",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "YzZ2AwSW6G": {
    "el-col": {
      ":span": "6",
      "lc_id": "YzZ2AwSW6G",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "u5xd9+dh9V",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "u5xd9+dh9V": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "u5xd9+dh9V",
      "__children": []
    }
  },
  "LEPFDf8YYH": {
    "el-col": {
      ":span": "6",
      "lc_id": "LEPFDf8YYH",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple-light",
          "lc_id": "D05FS4uRjs",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "D05FS4uRjs": {
    "div": {
      "class": "grid-content bg-purple-light",
      "lc_id": "D05FS4uRjs",
      "__children": []
    }
  },
  "BBCqvPJv/X": {
    "el-col": {
      ":span": "6",
      "lc_id": "BBCqvPJv/X",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "S42KNtBQFZ",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "S42KNtBQFZ": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "S42KNtBQFZ",
      "__children": []
    }
  },
  "DHblSwi+L7": {
    "el-col": {
      ":span": "6",
      "lc_id": "DHblSwi+L7",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple-light",
          "lc_id": "ivjjPVjjnr",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "ivjjPVjjnr": {
    "div": {
      "class": "grid-content bg-purple-light",
      "lc_id": "ivjjPVjjnr",
      "__children": []
    }
  },
  "9mPg3N+4Qw": {
    "el-row": {
      "lc-mark": "",
      "lc_id": "9mPg3N+4Qw",
      "__children": [{
        "el-col": {
          ":span": "4",
          "lc_id": "T8HazUYEOt",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "meZQqlUbyc",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "4",
          "lc_id": "us0lyJqF9u",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple-light",
              "lc_id": "Dg7zC5FRWM",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "4",
          "lc_id": "Jg2zamD3Pm",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "pTHu7SCFdf",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "4",
          "lc_id": "uFfJtyu3lO",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple-light",
              "lc_id": "4Y1h471JWS",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "4",
          "lc_id": "n2nFYPBVOv",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "oZwq90Bi+e",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "4",
          "lc_id": "5+xwb7Y6SI",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple-light",
              "lc_id": "bh/aoF+9ya",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "T8HazUYEOt": {
    "el-col": {
      ":span": "4",
      "lc_id": "T8HazUYEOt",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "meZQqlUbyc",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "meZQqlUbyc": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "meZQqlUbyc",
      "__children": []
    }
  },
  "us0lyJqF9u": {
    "el-col": {
      ":span": "4",
      "lc_id": "us0lyJqF9u",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple-light",
          "lc_id": "Dg7zC5FRWM",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "Dg7zC5FRWM": {
    "div": {
      "class": "grid-content bg-purple-light",
      "lc_id": "Dg7zC5FRWM",
      "__children": []
    }
  },
  "Jg2zamD3Pm": {
    "el-col": {
      ":span": "4",
      "lc_id": "Jg2zamD3Pm",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "pTHu7SCFdf",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "pTHu7SCFdf": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "pTHu7SCFdf",
      "__children": []
    }
  },
  "uFfJtyu3lO": {
    "el-col": {
      ":span": "4",
      "lc_id": "uFfJtyu3lO",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple-light",
          "lc_id": "4Y1h471JWS",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "4Y1h471JWS": {
    "div": {
      "class": "grid-content bg-purple-light",
      "lc_id": "4Y1h471JWS",
      "__children": []
    }
  },
  "n2nFYPBVOv": {
    "el-col": {
      ":span": "4",
      "lc_id": "n2nFYPBVOv",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "oZwq90Bi+e",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "oZwq90Bi+e": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "oZwq90Bi+e",
      "__children": []
    }
  },
  "5+xwb7Y6SI": {
    "el-col": {
      ":span": "4",
      "lc_id": "5+xwb7Y6SI",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple-light",
          "lc_id": "bh/aoF+9ya",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "bh/aoF+9ya": {
    "div": {
      "class": "grid-content bg-purple-light",
      "lc_id": "bh/aoF+9ya",
      "__children": []
    }
  },
  "TYy/bOUMNr": {
    "div": {
      "lc_id": "TYy/bOUMNr",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "trBMz5blKg",
          "__children": [],
          "__text__": "Layout 分栏间隔布局"
        },
        "__key__": "__children"
      }, {
        "el-row": {
          ":gutter": "20",
          "lc-mark": "",
          "lc_id": "gFfya4TxDk",
          "__children": [{
            "el-col": {
              ":span": "6",
              "lc_id": "ws0L3MK/Zd",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "Ubsbv5h8rG",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "6",
              "lc_id": "JSzu5D9Sfk",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "O0Rgdk3cKz",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "6",
              "lc_id": "QEAC8l6awc",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "N+YhMdOQVb",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "6",
              "lc_id": "ojGD7eUbaa",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "cMouTO1yO7",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "trBMz5blKg": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "trBMz5blKg",
      "__children": [],
      "__text__": "Layout 分栏间隔布局"
    }
  },
  "gFfya4TxDk": {
    "el-row": {
      ":gutter": "20",
      "lc-mark": "",
      "lc_id": "gFfya4TxDk",
      "__children": [{
        "el-col": {
          ":span": "6",
          "lc_id": "ws0L3MK/Zd",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "Ubsbv5h8rG",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "6",
          "lc_id": "JSzu5D9Sfk",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "O0Rgdk3cKz",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "6",
          "lc_id": "QEAC8l6awc",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "N+YhMdOQVb",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "6",
          "lc_id": "ojGD7eUbaa",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "cMouTO1yO7",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "ws0L3MK/Zd": {
    "el-col": {
      ":span": "6",
      "lc_id": "ws0L3MK/Zd",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "Ubsbv5h8rG",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "Ubsbv5h8rG": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "Ubsbv5h8rG",
      "__children": []
    }
  },
  "JSzu5D9Sfk": {
    "el-col": {
      ":span": "6",
      "lc_id": "JSzu5D9Sfk",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "O0Rgdk3cKz",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "O0Rgdk3cKz": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "O0Rgdk3cKz",
      "__children": []
    }
  },
  "QEAC8l6awc": {
    "el-col": {
      ":span": "6",
      "lc_id": "QEAC8l6awc",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "N+YhMdOQVb",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "N+YhMdOQVb": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "N+YhMdOQVb",
      "__children": []
    }
  },
  "ojGD7eUbaa": {
    "el-col": {
      ":span": "6",
      "lc_id": "ojGD7eUbaa",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "cMouTO1yO7",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "cMouTO1yO7": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "cMouTO1yO7",
      "__children": []
    }
  },
  "xbQPgKUBIy": {
    "div": {
      "lc_id": "xbQPgKUBIy",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "Bc2PY/ZYiU",
          "__children": [],
          "__text__": "Layout 混合布局"
        },
        "__key__": "__children"
      }, {
        "el-row": {
          ":gutter": "20",
          "lc-mark": "",
          "lc_id": "nYMpGdRSrq",
          "__children": [{
            "el-col": {
              ":span": "16",
              "lc_id": "eMrh2sYnKx",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "IC5Wm1Hn9n",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "8",
              "lc_id": "Xs8VJkHelZ",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "ypg8TKxYh5",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-row": {
          ":gutter": "20",
          "lc-mark": "",
          "lc_id": "Gm4zSQrKoN",
          "__children": [{
            "el-col": {
              ":span": "8",
              "lc_id": "HBbcLaIE9m",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "BGPEKw0h4I",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "8",
              "lc_id": "pK9Tw20FRI",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "ARxfz9lR3l",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "4",
              "lc_id": "dRZMyvJPRM",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "XIKrToEQJd",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "4",
              "lc_id": "0pIE7zGZUg",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "rW6P8kYrWR",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-row": {
          ":gutter": "20",
          "lc-mark": "",
          "lc_id": "jgi7BKYF+0",
          "__children": [{
            "el-col": {
              ":span": "4",
              "lc_id": "EZF3aOWMra",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "2HeQgzYeYn",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "16",
              "lc_id": "2AVcBud9PA",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "6XvbIskPHD",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "el-col": {
              ":span": "4",
              "lc_id": "y4UEbmjim5",
              "__children": [{
                "div": {
                  "class": "grid-content bg-purple",
                  "lc_id": "m4yavM6CB5",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "Bc2PY/ZYiU": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "Bc2PY/ZYiU",
      "__children": [],
      "__text__": "Layout 混合布局"
    }
  },
  "nYMpGdRSrq": {
    "el-row": {
      ":gutter": "20",
      "lc-mark": "",
      "lc_id": "nYMpGdRSrq",
      "__children": [{
        "el-col": {
          ":span": "16",
          "lc_id": "eMrh2sYnKx",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "IC5Wm1Hn9n",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "8",
          "lc_id": "Xs8VJkHelZ",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "ypg8TKxYh5",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "eMrh2sYnKx": {
    "el-col": {
      ":span": "16",
      "lc_id": "eMrh2sYnKx",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "IC5Wm1Hn9n",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "IC5Wm1Hn9n": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "IC5Wm1Hn9n",
      "__children": []
    }
  },
  "Xs8VJkHelZ": {
    "el-col": {
      ":span": "8",
      "lc_id": "Xs8VJkHelZ",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "ypg8TKxYh5",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "ypg8TKxYh5": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "ypg8TKxYh5",
      "__children": []
    }
  },
  "Gm4zSQrKoN": {
    "el-row": {
      ":gutter": "20",
      "lc-mark": "",
      "lc_id": "Gm4zSQrKoN",
      "__children": [{
        "el-col": {
          ":span": "8",
          "lc_id": "HBbcLaIE9m",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "BGPEKw0h4I",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "8",
          "lc_id": "pK9Tw20FRI",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "ARxfz9lR3l",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "4",
          "lc_id": "dRZMyvJPRM",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "XIKrToEQJd",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "4",
          "lc_id": "0pIE7zGZUg",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "rW6P8kYrWR",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "HBbcLaIE9m": {
    "el-col": {
      ":span": "8",
      "lc_id": "HBbcLaIE9m",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "BGPEKw0h4I",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "BGPEKw0h4I": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "BGPEKw0h4I",
      "__children": []
    }
  },
  "pK9Tw20FRI": {
    "el-col": {
      ":span": "8",
      "lc_id": "pK9Tw20FRI",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "ARxfz9lR3l",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "ARxfz9lR3l": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "ARxfz9lR3l",
      "__children": []
    }
  },
  "dRZMyvJPRM": {
    "el-col": {
      ":span": "4",
      "lc_id": "dRZMyvJPRM",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "XIKrToEQJd",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "XIKrToEQJd": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "XIKrToEQJd",
      "__children": []
    }
  },
  "0pIE7zGZUg": {
    "el-col": {
      ":span": "4",
      "lc_id": "0pIE7zGZUg",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "rW6P8kYrWR",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "rW6P8kYrWR": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "rW6P8kYrWR",
      "__children": []
    }
  },
  "jgi7BKYF+0": {
    "el-row": {
      ":gutter": "20",
      "lc-mark": "",
      "lc_id": "jgi7BKYF+0",
      "__children": [{
        "el-col": {
          ":span": "4",
          "lc_id": "EZF3aOWMra",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "2HeQgzYeYn",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "16",
          "lc_id": "2AVcBud9PA",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "6XvbIskPHD",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "el-col": {
          ":span": "4",
          "lc_id": "y4UEbmjim5",
          "__children": [{
            "div": {
              "class": "grid-content bg-purple",
              "lc_id": "m4yavM6CB5",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "EZF3aOWMra": {
    "el-col": {
      ":span": "4",
      "lc_id": "EZF3aOWMra",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "2HeQgzYeYn",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "2HeQgzYeYn": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "2HeQgzYeYn",
      "__children": []
    }
  },
  "2AVcBud9PA": {
    "el-col": {
      ":span": "16",
      "lc_id": "2AVcBud9PA",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "6XvbIskPHD",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "6XvbIskPHD": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "6XvbIskPHD",
      "__children": []
    }
  },
  "y4UEbmjim5": {
    "el-col": {
      ":span": "4",
      "lc_id": "y4UEbmjim5",
      "__children": [{
        "div": {
          "class": "grid-content bg-purple",
          "lc_id": "m4yavM6CB5",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "m4yavM6CB5": {
    "div": {
      "class": "grid-content bg-purple",
      "lc_id": "m4yavM6CB5",
      "__children": []
    }
  },
  "rC5FKIl93Q": {
    "div": {
      "lc_id": "rC5FKIl93Q",
      "__children": [{
        "div": {
          "lc_id": "5hZQP7chtb",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "yKAcBIB8ML",
              "__children": [],
              "__text__": "Table 表格"
            },
            "__key__": "__children"
          }, {
            "el-table": {
              ":data": "tableData",
              "style": "width: 100%",
              "lc-mark": "",
              "lc_id": "h1AxSuk1JX",
              "__children": [{
                "el-table-column": {
                  "prop": "date",
                  "label": "日期",
                  "width": "180",
                  "lc_id": "N5KOR7kGoN",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-table-column": {
                  "prop": "name",
                  "label": "姓名",
                  "width": "180",
                  "lc_id": "v3jApEZujz",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "el-table-column": {
                  "prop": "address",
                  "label": "地址",
                  "lc_id": "Ryei21Kxoy",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "FoIEdS4sgT",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "9MFKGxfvJ5",
              "__children": [],
              "__text__": "Table 动态表格👍"
            },
            "__key__": "__children"
          }, {
            "el-table": {
              ":data": "tableData",
              "style": "width: 100%",
              "lc-mark": "",
              "lc_id": "+5AJzAYChF",
              "__children": [{
                "el-table-column": {
                  ":prop": "propItem.prop",
                  ":label": "propItem.label",
                  "v-for": "propItem in propList",
                  ":key": "propItem.prop",
                  "lc_id": "gfwgFzB3gO",
                  "__children": [{
                    "template": {
                      "v-slot": "{ row }",
                      "lc_id": "WHqNxzDsFe",
                      "__children": [{
                        "span": {
                          "v-if": "!propItem.component",
                          "lc_id": "isWGW9SLlm",
                          "__children": [],
                          "__text__": "{{\n              row[propItem.prop]\n            }}"
                        },
                        "__key__": "__children"
                      }, {
                        "component": {
                          "v-else": "",
                          "v-bind:is": "propItem.component",
                          ":rowinfo": "row",
                          "lc_id": "DktA4JZ5fs",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "GHEnA/+R+x",
          "__children": [{
            "div": {
              "class": "demonstration-element",
              "lc_id": "LphVmiAWKZ",
              "__children": [],
              "__text__": "Pagination 分页"
            },
            "__key__": "__children"
          }, {
            "el-pagination": {
              "@size-change": "handleSizeChange",
              "@current-change": "handleCurrentChange",
              ":current-page": "currentPage",
              ":page-sizes": "[100, 200, 300, 400]",
              ":page-size": "100",
              "lc-mark": "",
              "layout": "prev, pager, next",
              ":total": "400",
              "lc_id": "V3nz0Q3sZA",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "5hZQP7chtb": {
    "div": {
      "lc_id": "5hZQP7chtb",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "yKAcBIB8ML",
          "__children": [],
          "__text__": "Table 表格"
        },
        "__key__": "__children"
      }, {
        "el-table": {
          ":data": "tableData",
          "style": "width: 100%",
          "lc-mark": "",
          "lc_id": "h1AxSuk1JX",
          "__children": [{
            "el-table-column": {
              "prop": "date",
              "label": "日期",
              "width": "180",
              "lc_id": "N5KOR7kGoN",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-table-column": {
              "prop": "name",
              "label": "姓名",
              "width": "180",
              "lc_id": "v3jApEZujz",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "el-table-column": {
              "prop": "address",
              "label": "地址",
              "lc_id": "Ryei21Kxoy",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "yKAcBIB8ML": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "yKAcBIB8ML",
      "__children": [],
      "__text__": "Table 表格"
    }
  },
  "h1AxSuk1JX": {
    "el-table": {
      ":data": "tableData",
      "style": "width: 100%",
      "lc-mark": "",
      "lc_id": "h1AxSuk1JX",
      "__children": [{
        "el-table-column": {
          "prop": "date",
          "label": "日期",
          "width": "180",
          "lc_id": "N5KOR7kGoN",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-table-column": {
          "prop": "name",
          "label": "姓名",
          "width": "180",
          "lc_id": "v3jApEZujz",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "el-table-column": {
          "prop": "address",
          "label": "地址",
          "lc_id": "Ryei21Kxoy",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "N5KOR7kGoN": {
    "el-table-column": {
      "prop": "date",
      "label": "日期",
      "width": "180",
      "lc_id": "N5KOR7kGoN",
      "__children": []
    }
  },
  "v3jApEZujz": {
    "el-table-column": {
      "prop": "name",
      "label": "姓名",
      "width": "180",
      "lc_id": "v3jApEZujz",
      "__children": []
    }
  },
  "Ryei21Kxoy": {
    "el-table-column": {
      "prop": "address",
      "label": "地址",
      "lc_id": "Ryei21Kxoy",
      "__children": []
    }
  },
  "FoIEdS4sgT": {
    "div": {
      "lc_id": "FoIEdS4sgT",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "9MFKGxfvJ5",
          "__children": [],
          "__text__": "Table 动态表格👍"
        },
        "__key__": "__children"
      }, {
        "el-table": {
          ":data": "tableData",
          "style": "width: 100%",
          "lc-mark": "",
          "lc_id": "+5AJzAYChF",
          "__children": [{
            "el-table-column": {
              ":prop": "propItem.prop",
              ":label": "propItem.label",
              "v-for": "propItem in propList",
              ":key": "propItem.prop",
              "lc_id": "gfwgFzB3gO",
              "__children": [{
                "template": {
                  "v-slot": "{ row }",
                  "lc_id": "WHqNxzDsFe",
                  "__children": [{
                    "span": {
                      "v-if": "!propItem.component",
                      "lc_id": "isWGW9SLlm",
                      "__children": [],
                      "__text__": "{{\n              row[propItem.prop]\n            }}"
                    },
                    "__key__": "__children"
                  }, {
                    "component": {
                      "v-else": "",
                      "v-bind:is": "propItem.component",
                      ":rowinfo": "row",
                      "lc_id": "DktA4JZ5fs",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "9MFKGxfvJ5": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "9MFKGxfvJ5",
      "__children": [],
      "__text__": "Table 动态表格👍"
    }
  },
  "+5AJzAYChF": {
    "el-table": {
      ":data": "tableData",
      "style": "width: 100%",
      "lc-mark": "",
      "lc_id": "+5AJzAYChF",
      "__children": [{
        "el-table-column": {
          ":prop": "propItem.prop",
          ":label": "propItem.label",
          "v-for": "propItem in propList",
          ":key": "propItem.prop",
          "lc_id": "gfwgFzB3gO",
          "__children": [{
            "template": {
              "v-slot": "{ row }",
              "lc_id": "WHqNxzDsFe",
              "__children": [{
                "span": {
                  "v-if": "!propItem.component",
                  "lc_id": "isWGW9SLlm",
                  "__children": [],
                  "__text__": "{{\n              row[propItem.prop]\n            }}"
                },
                "__key__": "__children"
              }, {
                "component": {
                  "v-else": "",
                  "v-bind:is": "propItem.component",
                  ":rowinfo": "row",
                  "lc_id": "DktA4JZ5fs",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "gfwgFzB3gO": {
    "el-table-column": {
      ":prop": "propItem.prop",
      ":label": "propItem.label",
      "v-for": "propItem in propList",
      ":key": "propItem.prop",
      "lc_id": "gfwgFzB3gO",
      "__children": [{
        "template": {
          "v-slot": "{ row }",
          "lc_id": "WHqNxzDsFe",
          "__children": [{
            "span": {
              "v-if": "!propItem.component",
              "lc_id": "isWGW9SLlm",
              "__children": [],
              "__text__": "{{\n              row[propItem.prop]\n            }}"
            },
            "__key__": "__children"
          }, {
            "component": {
              "v-else": "",
              "v-bind:is": "propItem.component",
              ":rowinfo": "row",
              "lc_id": "DktA4JZ5fs",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "WHqNxzDsFe": {
    "template": {
      "v-slot": "{ row }",
      "lc_id": "WHqNxzDsFe",
      "__children": [{
        "span": {
          "v-if": "!propItem.component",
          "lc_id": "isWGW9SLlm",
          "__children": [],
          "__text__": "{{\n              row[propItem.prop]\n            }}"
        },
        "__key__": "__children"
      }, {
        "component": {
          "v-else": "",
          "v-bind:is": "propItem.component",
          ":rowinfo": "row",
          "lc_id": "DktA4JZ5fs",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "isWGW9SLlm": {
    "span": {
      "v-if": "!propItem.component",
      "lc_id": "isWGW9SLlm",
      "__children": [],
      "__text__": "{{\n              row[propItem.prop]\n            }}"
    }
  },
  "DktA4JZ5fs": {
    "component": {
      "v-else": "",
      "v-bind:is": "propItem.component",
      ":rowinfo": "row",
      "lc_id": "DktA4JZ5fs",
      "__children": []
    }
  },
  "GHEnA/+R+x": {
    "div": {
      "lc_id": "GHEnA/+R+x",
      "__children": [{
        "div": {
          "class": "demonstration-element",
          "lc_id": "LphVmiAWKZ",
          "__children": [],
          "__text__": "Pagination 分页"
        },
        "__key__": "__children"
      }, {
        "el-pagination": {
          "@size-change": "handleSizeChange",
          "@current-change": "handleCurrentChange",
          ":current-page": "currentPage",
          ":page-sizes": "[100, 200, 300, 400]",
          ":page-size": "100",
          "lc-mark": "",
          "layout": "prev, pager, next",
          ":total": "400",
          "lc_id": "V3nz0Q3sZA",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "LphVmiAWKZ": {
    "div": {
      "class": "demonstration-element",
      "lc_id": "LphVmiAWKZ",
      "__children": [],
      "__text__": "Pagination 分页"
    }
  },
  "V3nz0Q3sZA": {
    "el-pagination": {
      "@size-change": "handleSizeChange",
      "@current-change": "handleCurrentChange",
      ":current-page": "currentPage",
      ":page-sizes": "[100, 200, 300, 400]",
      ":page-size": "100",
      "lc-mark": "",
      "layout": "prev, pager, next",
      ":total": "400",
      "lc_id": "V3nz0Q3sZA",
      "__children": []
    }
  },
  "XIdGTYGNJz": {
    "div": {
      "lc_id": "XIdGTYGNJz",
      "__children": [{
        "div": {
          "lc_id": "h0k0XHxqAs",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "3C9hoiztnz",
              "__children": [],
              "__text__": "Button 按钮:"
            },
            "__key__": "__children"
          }, {
            "button": {
              "lc-mark": "",
              "lc_id": "x3FZbZaIxW",
              "__children": [],
              "__text__": "Default"
            },
            "__key__": "__children"
          }, {
            "button": {
              "lc-mark": "",
              "type": "primary",
              "lc_id": "45rexSehQc",
              "__children": [],
              "__text__": "Primary"
            },
            "__key__": "__children"
          }, {
            "button": {
              "lc-mark": "",
              "type": "dashed",
              "lc_id": "fKbsFbKR2b",
              "__children": [],
              "__text__": "Dashed"
            },
            "__key__": "__children"
          }, {
            "button": {
              "lc-mark": "",
              "type": "text",
              "lc_id": "tFTgyHpo+y",
              "__children": [],
              "__text__": "Text"
            },
            "__key__": "__children"
          }, {
            "button": {
              "lc-mark": "",
              "type": "info",
              "lc_id": "hUGfSo7waH",
              "__children": [],
              "__text__": "Info"
            },
            "__key__": "__children"
          }, {
            "button": {
              "lc-mark": "",
              "type": "success",
              "lc_id": "BgKXbY5mGG",
              "__children": [],
              "__text__": "Success"
            },
            "__key__": "__children"
          }, {
            "button": {
              "lc-mark": "",
              "type": "warning",
              "lc_id": "X6QHL5F0XR",
              "__children": [],
              "__text__": "Warning"
            },
            "__key__": "__children"
          }, {
            "button": {
              "lc-mark": "",
              "type": "error",
              "lc_id": "G2qIN+fEra",
              "__children": [],
              "__text__": "Error"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "h0k0XHxqAs": {
    "div": {
      "lc_id": "h0k0XHxqAs",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "3C9hoiztnz",
          "__children": [],
          "__text__": "Button 按钮:"
        },
        "__key__": "__children"
      }, {
        "button": {
          "lc-mark": "",
          "lc_id": "x3FZbZaIxW",
          "__children": [],
          "__text__": "Default"
        },
        "__key__": "__children"
      }, {
        "button": {
          "lc-mark": "",
          "type": "primary",
          "lc_id": "45rexSehQc",
          "__children": [],
          "__text__": "Primary"
        },
        "__key__": "__children"
      }, {
        "button": {
          "lc-mark": "",
          "type": "dashed",
          "lc_id": "fKbsFbKR2b",
          "__children": [],
          "__text__": "Dashed"
        },
        "__key__": "__children"
      }, {
        "button": {
          "lc-mark": "",
          "type": "text",
          "lc_id": "tFTgyHpo+y",
          "__children": [],
          "__text__": "Text"
        },
        "__key__": "__children"
      }, {
        "button": {
          "lc-mark": "",
          "type": "info",
          "lc_id": "hUGfSo7waH",
          "__children": [],
          "__text__": "Info"
        },
        "__key__": "__children"
      }, {
        "button": {
          "lc-mark": "",
          "type": "success",
          "lc_id": "BgKXbY5mGG",
          "__children": [],
          "__text__": "Success"
        },
        "__key__": "__children"
      }, {
        "button": {
          "lc-mark": "",
          "type": "warning",
          "lc_id": "X6QHL5F0XR",
          "__children": [],
          "__text__": "Warning"
        },
        "__key__": "__children"
      }, {
        "button": {
          "lc-mark": "",
          "type": "error",
          "lc_id": "G2qIN+fEra",
          "__children": [],
          "__text__": "Error"
        },
        "__key__": "__children"
      }]
    }
  },
  "3C9hoiztnz": {
    "div": {
      "class": "demonstration",
      "lc_id": "3C9hoiztnz",
      "__children": [],
      "__text__": "Button 按钮:"
    }
  },
  "x3FZbZaIxW": {
    "button": {
      "lc-mark": "",
      "lc_id": "x3FZbZaIxW",
      "__children": [],
      "__text__": "Default"
    }
  },
  "45rexSehQc": {
    "button": {
      "lc-mark": "",
      "type": "primary",
      "lc_id": "45rexSehQc",
      "__children": [],
      "__text__": "Primary"
    }
  },
  "fKbsFbKR2b": {
    "button": {
      "lc-mark": "",
      "type": "dashed",
      "lc_id": "fKbsFbKR2b",
      "__children": [],
      "__text__": "Dashed"
    }
  },
  "tFTgyHpo+y": {
    "button": {
      "lc-mark": "",
      "type": "text",
      "lc_id": "tFTgyHpo+y",
      "__children": [],
      "__text__": "Text"
    }
  },
  "hUGfSo7waH": {
    "button": {
      "lc-mark": "",
      "type": "info",
      "lc_id": "hUGfSo7waH",
      "__children": [],
      "__text__": "Info"
    }
  },
  "BgKXbY5mGG": {
    "button": {
      "lc-mark": "",
      "type": "success",
      "lc_id": "BgKXbY5mGG",
      "__children": [],
      "__text__": "Success"
    }
  },
  "X6QHL5F0XR": {
    "button": {
      "lc-mark": "",
      "type": "warning",
      "lc_id": "X6QHL5F0XR",
      "__children": [],
      "__text__": "Warning"
    }
  },
  "G2qIN+fEra": {
    "button": {
      "lc-mark": "",
      "type": "error",
      "lc_id": "G2qIN+fEra",
      "__children": [],
      "__text__": "Error"
    }
  },
  "1y+CMepFUo": {
    "div": {
      "lc_id": "1y+CMepFUo",
      "__children": [{
        "div": {
          "lc_id": "r3qY7USaX8",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "NIxpxeFxoI",
              "__children": [],
              "__text__": "Icon 图标:"
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "md-jet",
              "lc_id": "EeHLVpeewI",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "logo-xbox",
              "lc_id": "4HEerLInDQ",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "logo-windows",
              "lc_id": "3A0amDKUlC",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "md-watch",
              "lc_id": "SxxtinALrD",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "ios-american-football",
              "lc_id": "yxHLQvUkL8",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "ios-analytics",
              "lc_id": "JQdN/GRD1x",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "logo-youtube",
              "lc_id": "l2GgGaqNUk",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "md-analytics",
              "lc_id": "pCHD8JKgoE",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "logo-angular",
              "lc_id": "Q9yIIYH0Xs",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "logo-android",
              "lc_id": "XeKcfpL0Ba",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "icon": {
              "size": "24",
              "lc-mark": "",
              "type": "logo-apple",
              "lc_id": "Cq1zC7YN2f",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "r3qY7USaX8": {
    "div": {
      "lc_id": "r3qY7USaX8",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "NIxpxeFxoI",
          "__children": [],
          "__text__": "Icon 图标:"
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "md-jet",
          "lc_id": "EeHLVpeewI",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "logo-xbox",
          "lc_id": "4HEerLInDQ",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "logo-windows",
          "lc_id": "3A0amDKUlC",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "md-watch",
          "lc_id": "SxxtinALrD",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "ios-american-football",
          "lc_id": "yxHLQvUkL8",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "ios-analytics",
          "lc_id": "JQdN/GRD1x",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "logo-youtube",
          "lc_id": "l2GgGaqNUk",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "md-analytics",
          "lc_id": "pCHD8JKgoE",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "logo-angular",
          "lc_id": "Q9yIIYH0Xs",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "logo-android",
          "lc_id": "XeKcfpL0Ba",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "icon": {
          "size": "24",
          "lc-mark": "",
          "type": "logo-apple",
          "lc_id": "Cq1zC7YN2f",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "NIxpxeFxoI": {
    "div": {
      "class": "demonstration",
      "lc_id": "NIxpxeFxoI",
      "__children": [],
      "__text__": "Icon 图标:"
    }
  },
  "EeHLVpeewI": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "md-jet",
      "lc_id": "EeHLVpeewI",
      "__children": []
    }
  },
  "4HEerLInDQ": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "logo-xbox",
      "lc_id": "4HEerLInDQ",
      "__children": []
    }
  },
  "3A0amDKUlC": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "logo-windows",
      "lc_id": "3A0amDKUlC",
      "__children": []
    }
  },
  "SxxtinALrD": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "md-watch",
      "lc_id": "SxxtinALrD",
      "__children": []
    }
  },
  "yxHLQvUkL8": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "ios-american-football",
      "lc_id": "yxHLQvUkL8",
      "__children": []
    }
  },
  "JQdN/GRD1x": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "ios-analytics",
      "lc_id": "JQdN/GRD1x",
      "__children": []
    }
  },
  "l2GgGaqNUk": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "logo-youtube",
      "lc_id": "l2GgGaqNUk",
      "__children": []
    }
  },
  "pCHD8JKgoE": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "md-analytics",
      "lc_id": "pCHD8JKgoE",
      "__children": []
    }
  },
  "Q9yIIYH0Xs": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "logo-angular",
      "lc_id": "Q9yIIYH0Xs",
      "__children": []
    }
  },
  "XeKcfpL0Ba": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "logo-android",
      "lc_id": "XeKcfpL0Ba",
      "__children": []
    }
  },
  "Cq1zC7YN2f": {
    "icon": {
      "size": "24",
      "lc-mark": "",
      "type": "logo-apple",
      "lc_id": "Cq1zC7YN2f",
      "__children": []
    }
  },
  "hDeJlV4Aht": {
    "div": {
      "lc_id": "hDeJlV4Aht",
      "__children": [{
        "div": {
          "lc_id": "TcZzK5OcZA",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "X5P8vx3FuD",
              "__children": [],
              "__text__": "Spin 加载中:"
            },
            "__key__": "__children"
          }, {
            "spin": {
              "lc-mark": "",
              "size": "large",
              "lc_id": "3zvDcghGr3",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "9JQripHWkU",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "yVCfd2SVQG",
              "__children": [],
              "__text__": "Timeline 时间轴:"
            },
            "__key__": "__children"
          }, {
            "timeline": {
              "lc-mark": "",
              "lc_id": "pnxm3z6PUG",
              "__children": [{
                "timelineitem": {
                  "color": "green",
                  "lc_id": "7rLMrLAVQu",
                  "__children": [],
                  "__text__": "发布1.0版本"
                },
                "__key__": "__children"
              }, {
                "timelineitem": {
                  "color": "green",
                  "lc_id": "BNFTR06XXk",
                  "__children": [],
                  "__text__": "发布2.0版本"
                },
                "__key__": "__children"
              }, {
                "timelineitem": {
                  "color": "red",
                  "lc_id": "lOroFKEXO1",
                  "__children": [],
                  "__text__": "严重故障"
                },
                "__key__": "__children"
              }, {
                "timelineitem": {
                  "color": "blue",
                  "lc_id": "/uRiQq2nN1",
                  "__children": [],
                  "__text__": "发布3.0版本"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "VT+ftm3OOc",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "PdMd3ZNZh+",
              "__children": [],
              "__text__": "Time 相对时间:"
            },
            "__key__": "__children"
          }, {
            "time": {
              ":time": "time1",
              "lc_id": "wmaefvQ6MN",
              "lc-mark": "",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "time": {
              ":time": "time2",
              "lc-mark": "",
              "lc_id": "hlPKHZk0FB",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "hcX1ZmduVG",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "8gaUbWiEwx",
              "__children": [],
              "__text__": "Circle 进度环:"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "style": "display: inline-block;",
              "lc_id": "uHKoZ2HJK/",
              "__children": [{
                "circle": {
                  ":percent": "80",
                  "lc_id": "jOLaht00x3",
                  "__children": [{
                    "span": {
                      "class": "demo-Circle-inner",
                      "style": "font-size:24px",
                      "lc_id": "QP+NrGuz4N",
                      "__children": [],
                      "__text__": "80%"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "style": "display: inline-block;",
              "lc_id": "o47Zo8FncN",
              "__children": [{
                "circle": {
                  ":percent": "100",
                  "stroke-color": "#5cb85c",
                  "lc_id": "mue2J1z5Bd",
                  "__children": [{
                    "icon": {
                      "type": "ios-checkmark",
                      "size": "60",
                      "style": "color:#5cb85c",
                      "lc_id": "vg7cORULOJ",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "style": "display: inline-block;",
              "lc_id": "Z/xNVoWyqf",
              "__children": [{
                "circle": {
                  ":percent": "35",
                  "stroke-color": "#ff5500",
                  "lc_id": "BIRqI/YS9P",
                  "__children": [{
                    "span": {
                      "class": "demo-Circle-inner",
                      "lc_id": "6G4CSIudJ9",
                      "__children": [{
                        "icon": {
                          "type": "ios-close",
                          "size": "50",
                          "style": "color:#ff5500",
                          "lc_id": "Rf2kfzAdZB",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "TcZzK5OcZA": {
    "div": {
      "lc_id": "TcZzK5OcZA",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "X5P8vx3FuD",
          "__children": [],
          "__text__": "Spin 加载中:"
        },
        "__key__": "__children"
      }, {
        "spin": {
          "lc-mark": "",
          "size": "large",
          "lc_id": "3zvDcghGr3",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "X5P8vx3FuD": {
    "div": {
      "class": "demonstration",
      "lc_id": "X5P8vx3FuD",
      "__children": [],
      "__text__": "Spin 加载中:"
    }
  },
  "3zvDcghGr3": {
    "spin": {
      "lc-mark": "",
      "size": "large",
      "lc_id": "3zvDcghGr3",
      "__children": []
    }
  },
  "9JQripHWkU": {
    "div": {
      "lc_id": "9JQripHWkU",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "yVCfd2SVQG",
          "__children": [],
          "__text__": "Timeline 时间轴:"
        },
        "__key__": "__children"
      }, {
        "timeline": {
          "lc-mark": "",
          "lc_id": "pnxm3z6PUG",
          "__children": [{
            "timelineitem": {
              "color": "green",
              "lc_id": "7rLMrLAVQu",
              "__children": [],
              "__text__": "发布1.0版本"
            },
            "__key__": "__children"
          }, {
            "timelineitem": {
              "color": "green",
              "lc_id": "BNFTR06XXk",
              "__children": [],
              "__text__": "发布2.0版本"
            },
            "__key__": "__children"
          }, {
            "timelineitem": {
              "color": "red",
              "lc_id": "lOroFKEXO1",
              "__children": [],
              "__text__": "严重故障"
            },
            "__key__": "__children"
          }, {
            "timelineitem": {
              "color": "blue",
              "lc_id": "/uRiQq2nN1",
              "__children": [],
              "__text__": "发布3.0版本"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "yVCfd2SVQG": {
    "div": {
      "class": "demonstration",
      "lc_id": "yVCfd2SVQG",
      "__children": [],
      "__text__": "Timeline 时间轴:"
    }
  },
  "pnxm3z6PUG": {
    "timeline": {
      "lc-mark": "",
      "lc_id": "pnxm3z6PUG",
      "__children": [{
        "timelineitem": {
          "color": "green",
          "lc_id": "7rLMrLAVQu",
          "__children": [],
          "__text__": "发布1.0版本"
        },
        "__key__": "__children"
      }, {
        "timelineitem": {
          "color": "green",
          "lc_id": "BNFTR06XXk",
          "__children": [],
          "__text__": "发布2.0版本"
        },
        "__key__": "__children"
      }, {
        "timelineitem": {
          "color": "red",
          "lc_id": "lOroFKEXO1",
          "__children": [],
          "__text__": "严重故障"
        },
        "__key__": "__children"
      }, {
        "timelineitem": {
          "color": "blue",
          "lc_id": "/uRiQq2nN1",
          "__children": [],
          "__text__": "发布3.0版本"
        },
        "__key__": "__children"
      }]
    }
  },
  "7rLMrLAVQu": {
    "timelineitem": {
      "color": "green",
      "lc_id": "7rLMrLAVQu",
      "__children": [],
      "__text__": "发布1.0版本"
    }
  },
  "BNFTR06XXk": {
    "timelineitem": {
      "color": "green",
      "lc_id": "BNFTR06XXk",
      "__children": [],
      "__text__": "发布2.0版本"
    }
  },
  "lOroFKEXO1": {
    "timelineitem": {
      "color": "red",
      "lc_id": "lOroFKEXO1",
      "__children": [],
      "__text__": "严重故障"
    }
  },
  "/uRiQq2nN1": {
    "timelineitem": {
      "color": "blue",
      "lc_id": "/uRiQq2nN1",
      "__children": [],
      "__text__": "发布3.0版本"
    }
  },
  "VT+ftm3OOc": {
    "div": {
      "lc_id": "VT+ftm3OOc",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "PdMd3ZNZh+",
          "__children": [],
          "__text__": "Time 相对时间:"
        },
        "__key__": "__children"
      }, {
        "time": {
          ":time": "time1",
          "lc_id": "wmaefvQ6MN",
          "lc-mark": "",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "time": {
          ":time": "time2",
          "lc-mark": "",
          "lc_id": "hlPKHZk0FB",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "PdMd3ZNZh+": {
    "div": {
      "class": "demonstration",
      "lc_id": "PdMd3ZNZh+",
      "__children": [],
      "__text__": "Time 相对时间:"
    }
  },
  "wmaefvQ6MN": {
    "time": {
      ":time": "time1",
      "lc_id": "wmaefvQ6MN",
      "lc-mark": "",
      "__children": []
    }
  },
  "hlPKHZk0FB": {
    "time": {
      ":time": "time2",
      "lc-mark": "",
      "lc_id": "hlPKHZk0FB",
      "__children": []
    }
  },
  "hcX1ZmduVG": {
    "div": {
      "lc_id": "hcX1ZmduVG",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "8gaUbWiEwx",
          "__children": [],
          "__text__": "Circle 进度环:"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "style": "display: inline-block;",
          "lc_id": "uHKoZ2HJK/",
          "__children": [{
            "circle": {
              ":percent": "80",
              "lc_id": "jOLaht00x3",
              "__children": [{
                "span": {
                  "class": "demo-Circle-inner",
                  "style": "font-size:24px",
                  "lc_id": "QP+NrGuz4N",
                  "__children": [],
                  "__text__": "80%"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "style": "display: inline-block;",
          "lc_id": "o47Zo8FncN",
          "__children": [{
            "circle": {
              ":percent": "100",
              "stroke-color": "#5cb85c",
              "lc_id": "mue2J1z5Bd",
              "__children": [{
                "icon": {
                  "type": "ios-checkmark",
                  "size": "60",
                  "style": "color:#5cb85c",
                  "lc_id": "vg7cORULOJ",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "style": "display: inline-block;",
          "lc_id": "Z/xNVoWyqf",
          "__children": [{
            "circle": {
              ":percent": "35",
              "stroke-color": "#ff5500",
              "lc_id": "BIRqI/YS9P",
              "__children": [{
                "span": {
                  "class": "demo-Circle-inner",
                  "lc_id": "6G4CSIudJ9",
                  "__children": [{
                    "icon": {
                      "type": "ios-close",
                      "size": "50",
                      "style": "color:#ff5500",
                      "lc_id": "Rf2kfzAdZB",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "8gaUbWiEwx": {
    "div": {
      "class": "demonstration",
      "lc_id": "8gaUbWiEwx",
      "__children": [],
      "__text__": "Circle 进度环:"
    }
  },
  "uHKoZ2HJK/": {
    "div": {
      "lc-mark": "",
      "style": "display: inline-block;",
      "lc_id": "uHKoZ2HJK/",
      "__children": [{
        "circle": {
          ":percent": "80",
          "lc_id": "jOLaht00x3",
          "__children": [{
            "span": {
              "class": "demo-Circle-inner",
              "style": "font-size:24px",
              "lc_id": "QP+NrGuz4N",
              "__children": [],
              "__text__": "80%"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "jOLaht00x3": {
    "circle": {
      ":percent": "80",
      "lc_id": "jOLaht00x3",
      "__children": [{
        "span": {
          "class": "demo-Circle-inner",
          "style": "font-size:24px",
          "lc_id": "QP+NrGuz4N",
          "__children": [],
          "__text__": "80%"
        },
        "__key__": "__children"
      }]
    }
  },
  "QP+NrGuz4N": {
    "span": {
      "class": "demo-Circle-inner",
      "style": "font-size:24px",
      "lc_id": "QP+NrGuz4N",
      "__children": [],
      "__text__": "80%"
    }
  },
  "o47Zo8FncN": {
    "div": {
      "lc-mark": "",
      "style": "display: inline-block;",
      "lc_id": "o47Zo8FncN",
      "__children": [{
        "circle": {
          ":percent": "100",
          "stroke-color": "#5cb85c",
          "lc_id": "mue2J1z5Bd",
          "__children": [{
            "icon": {
              "type": "ios-checkmark",
              "size": "60",
              "style": "color:#5cb85c",
              "lc_id": "vg7cORULOJ",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "mue2J1z5Bd": {
    "circle": {
      ":percent": "100",
      "stroke-color": "#5cb85c",
      "lc_id": "mue2J1z5Bd",
      "__children": [{
        "icon": {
          "type": "ios-checkmark",
          "size": "60",
          "style": "color:#5cb85c",
          "lc_id": "vg7cORULOJ",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "vg7cORULOJ": {
    "icon": {
      "type": "ios-checkmark",
      "size": "60",
      "style": "color:#5cb85c",
      "lc_id": "vg7cORULOJ",
      "__children": []
    }
  },
  "Z/xNVoWyqf": {
    "div": {
      "lc-mark": "",
      "style": "display: inline-block;",
      "lc_id": "Z/xNVoWyqf",
      "__children": [{
        "circle": {
          ":percent": "35",
          "stroke-color": "#ff5500",
          "lc_id": "BIRqI/YS9P",
          "__children": [{
            "span": {
              "class": "demo-Circle-inner",
              "lc_id": "6G4CSIudJ9",
              "__children": [{
                "icon": {
                  "type": "ios-close",
                  "size": "50",
                  "style": "color:#ff5500",
                  "lc_id": "Rf2kfzAdZB",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "BIRqI/YS9P": {
    "circle": {
      ":percent": "35",
      "stroke-color": "#ff5500",
      "lc_id": "BIRqI/YS9P",
      "__children": [{
        "span": {
          "class": "demo-Circle-inner",
          "lc_id": "6G4CSIudJ9",
          "__children": [{
            "icon": {
              "type": "ios-close",
              "size": "50",
              "style": "color:#ff5500",
              "lc_id": "Rf2kfzAdZB",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "6G4CSIudJ9": {
    "span": {
      "class": "demo-Circle-inner",
      "lc_id": "6G4CSIudJ9",
      "__children": [{
        "icon": {
          "type": "ios-close",
          "size": "50",
          "style": "color:#ff5500",
          "lc_id": "Rf2kfzAdZB",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "Rf2kfzAdZB": {
    "icon": {
      "type": "ios-close",
      "size": "50",
      "style": "color:#ff5500",
      "lc_id": "Rf2kfzAdZB",
      "__children": []
    }
  },
  "WaXVAQY9jn": {
    "div": {
      "lc_id": "WaXVAQY9jn",
      "__children": []
    }
  },
  "jGXHcHiq3e": {
    "div": {
      "lc_id": "jGXHcHiq3e",
      "__children": [{
        "div": {
          "lc_id": "91CnIXMNmu",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "21KL5PSw4l",
              "__children": [],
              "__text__": "Ajax请求状态栏:"
            },
            "__key__": "__children"
          }, {
            "q-ajax-bar": {
              "ref": "bar",
              "position": "bottom",
              "color": "accent",
              "size": "10px",
              "lc-mark": "",
              "skip-hijack": "",
              "lc_id": "JVlU6cP5TA",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "primary",
              "label": "试用",
              "@click": "trigger",
              "lc_id": "J2ht164ML6",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "XP6rQhp7oM",
          "__children": [{
            "q-avatar": {
              "color": "red",
              "text-color": "white",
              "icon": "directions",
              "lc_id": "pwj8GFBVQv",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-avatar": {
              "color": "primary",
              "text-color": "white",
              "lc_id": "0qf3+FbFs6",
              "__children": [],
              "__text__": "J"
            },
            "__key__": "__children"
          }, {
            "q-avatar": {
              "size": "24px",
              "color": "orange",
              "lc_id": "L8Q3j85Pyl",
              "__children": [],
              "__text__": "J"
            },
            "__key__": "__children"
          }, {
            "q-avatar": {
              "lc_id": "krL7LBFqr/",
              "__children": [{
                "img": {
                  "src": "https://cdn.quasar.dev/img/avatar.png",
                  "lc_id": "etxQu7jtza",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "91CnIXMNmu": {
    "div": {
      "lc_id": "91CnIXMNmu",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "21KL5PSw4l",
          "__children": [],
          "__text__": "Ajax请求状态栏:"
        },
        "__key__": "__children"
      }, {
        "q-ajax-bar": {
          "ref": "bar",
          "position": "bottom",
          "color": "accent",
          "size": "10px",
          "lc-mark": "",
          "skip-hijack": "",
          "lc_id": "JVlU6cP5TA",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "primary",
          "label": "试用",
          "@click": "trigger",
          "lc_id": "J2ht164ML6",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "21KL5PSw4l": {
    "div": {
      "class": "demonstration",
      "lc_id": "21KL5PSw4l",
      "__children": [],
      "__text__": "Ajax请求状态栏:"
    }
  },
  "JVlU6cP5TA": {
    "q-ajax-bar": {
      "ref": "bar",
      "position": "bottom",
      "color": "accent",
      "size": "10px",
      "lc-mark": "",
      "skip-hijack": "",
      "lc_id": "JVlU6cP5TA",
      "__children": []
    }
  },
  "J2ht164ML6": {
    "q-btn": {
      "color": "primary",
      "label": "试用",
      "@click": "trigger",
      "lc_id": "J2ht164ML6",
      "__children": []
    }
  },
  "XP6rQhp7oM": {
    "div": {
      "lc_id": "XP6rQhp7oM",
      "__children": [{
        "q-avatar": {
          "color": "red",
          "text-color": "white",
          "icon": "directions",
          "lc_id": "pwj8GFBVQv",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-avatar": {
          "color": "primary",
          "text-color": "white",
          "lc_id": "0qf3+FbFs6",
          "__children": [],
          "__text__": "J"
        },
        "__key__": "__children"
      }, {
        "q-avatar": {
          "size": "24px",
          "color": "orange",
          "lc_id": "L8Q3j85Pyl",
          "__children": [],
          "__text__": "J"
        },
        "__key__": "__children"
      }, {
        "q-avatar": {
          "lc_id": "krL7LBFqr/",
          "__children": [{
            "img": {
              "src": "https://cdn.quasar.dev/img/avatar.png",
              "lc_id": "etxQu7jtza",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "pwj8GFBVQv": {
    "q-avatar": {
      "color": "red",
      "text-color": "white",
      "icon": "directions",
      "lc_id": "pwj8GFBVQv",
      "__children": []
    }
  },
  "0qf3+FbFs6": {
    "q-avatar": {
      "color": "primary",
      "text-color": "white",
      "lc_id": "0qf3+FbFs6",
      "__children": [],
      "__text__": "J"
    }
  },
  "L8Q3j85Pyl": {
    "q-avatar": {
      "size": "24px",
      "color": "orange",
      "lc_id": "L8Q3j85Pyl",
      "__children": [],
      "__text__": "J"
    }
  },
  "krL7LBFqr/": {
    "q-avatar": {
      "lc_id": "krL7LBFqr/",
      "__children": [{
        "img": {
          "src": "https://cdn.quasar.dev/img/avatar.png",
          "lc_id": "etxQu7jtza",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "etxQu7jtza": {
    "img": {
      "src": "https://cdn.quasar.dev/img/avatar.png",
      "lc_id": "etxQu7jtza",
      "__children": []
    }
  },
  "t7HX+ziEvW": {
    "div": {
      "lc_id": "t7HX+ziEvW",
      "__children": [{
        "div": {
          "lc_id": "fMkCmtMc6J",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "kviwGtINqQ",
              "__children": [],
              "__text__": "按钮:"
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "white",
              "text-color": "black",
              "label": "Standard",
              "lc_id": "QJ5Sh1lw+E",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "primary",
              "label": "Primary",
              "lc_id": "nljLwbUpT3",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "secondary",
              "label": "Secondary",
              "lc_id": "wLzbQtWcYT",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "amber",
              "glossy": "",
              "label": "Amber",
              "lc_id": "Zi8Es29D6X",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "brown-5",
              "label": "Brown 5",
              "lc_id": "dyUZvw2vOz",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "deep-orange",
              "glossy": "",
              "label": "Deep Orange",
              "lc_id": "xxAm9SCeOu",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "purple",
              "label": "Purple",
              "lc_id": "yJwEGxSzEH",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "black",
              "label": "Black",
              "lc_id": "EbQUEguEAt",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "UI7h/ATDAJ",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "de3pGiXmqR",
              "__children": [],
              "__text__": "带图标:"
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "primary",
              "icon": "mail",
              "label": "On Left",
              "lc_id": "d5Ypq978Na",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "secondary",
              "icon-right": "mail",
              "label": "On Right",
              "lc_id": "aqNXdTvqTc",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "color": "red",
              "icon": "mail",
              "icon-right": "send",
              "label": "On Left and Right",
              "lc_id": "jklL6Wx9NJ",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "vQgqqvbohO",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "EeujCFZe44",
              "__children": [],
              "__text__": "圆形:"
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "round": "",
              "color": "primary",
              "icon": "shopping_cart",
              "lc_id": "O5u8XVl7AA",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "round": "",
              "color": "secondary",
              "icon": "navigation",
              "lc_id": "JOmKtm/rOG",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "round": "",
              "color": "amber",
              "glossy": "",
              "text-color": "black",
              "icon": "layers_clear",
              "lc_id": "v8Oa0jIUoU",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "round": "",
              "color": "brown-5",
              "icon": "directions",
              "lc_id": "+VmdrkepgL",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "round": "",
              "color": "deep-orange",
              "icon": "edit_location",
              "lc_id": "AIP2THitl8",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "round": "",
              "color": "purple",
              "glossy": "",
              "icon": "local_grocery_store",
              "lc_id": "e5x3x9Dk1m",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "q-btn": {
              "round": "",
              "color": "black",
              "icon": "my_location",
              "lc_id": "iS8fj8rp9F",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "qxNTsZ7gdH",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "2PmKLORJ0+",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "glEvGlsYzc",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "wEmZLgNgd8",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "bKFUlO7VHj",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "3PBIHV0UOY",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "WigME9yp38",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "IAwnCQDlNW",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "bWI0D140Pa",
          "__children": [{
            "div": {
              "class": "demonstration",
              "lc_id": "Asbu0R2XiF",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "fMkCmtMc6J": {
    "div": {
      "lc_id": "fMkCmtMc6J",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "kviwGtINqQ",
          "__children": [],
          "__text__": "按钮:"
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "white",
          "text-color": "black",
          "label": "Standard",
          "lc_id": "QJ5Sh1lw+E",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "primary",
          "label": "Primary",
          "lc_id": "nljLwbUpT3",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "secondary",
          "label": "Secondary",
          "lc_id": "wLzbQtWcYT",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "amber",
          "glossy": "",
          "label": "Amber",
          "lc_id": "Zi8Es29D6X",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "brown-5",
          "label": "Brown 5",
          "lc_id": "dyUZvw2vOz",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "deep-orange",
          "glossy": "",
          "label": "Deep Orange",
          "lc_id": "xxAm9SCeOu",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "purple",
          "label": "Purple",
          "lc_id": "yJwEGxSzEH",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "black",
          "label": "Black",
          "lc_id": "EbQUEguEAt",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "kviwGtINqQ": {
    "div": {
      "class": "demonstration",
      "lc_id": "kviwGtINqQ",
      "__children": [],
      "__text__": "按钮:"
    }
  },
  "QJ5Sh1lw+E": {
    "q-btn": {
      "color": "white",
      "text-color": "black",
      "label": "Standard",
      "lc_id": "QJ5Sh1lw+E",
      "__children": []
    }
  },
  "nljLwbUpT3": {
    "q-btn": {
      "color": "primary",
      "label": "Primary",
      "lc_id": "nljLwbUpT3",
      "__children": []
    }
  },
  "wLzbQtWcYT": {
    "q-btn": {
      "color": "secondary",
      "label": "Secondary",
      "lc_id": "wLzbQtWcYT",
      "__children": []
    }
  },
  "Zi8Es29D6X": {
    "q-btn": {
      "color": "amber",
      "glossy": "",
      "label": "Amber",
      "lc_id": "Zi8Es29D6X",
      "__children": []
    }
  },
  "dyUZvw2vOz": {
    "q-btn": {
      "color": "brown-5",
      "label": "Brown 5",
      "lc_id": "dyUZvw2vOz",
      "__children": []
    }
  },
  "xxAm9SCeOu": {
    "q-btn": {
      "color": "deep-orange",
      "glossy": "",
      "label": "Deep Orange",
      "lc_id": "xxAm9SCeOu",
      "__children": []
    }
  },
  "yJwEGxSzEH": {
    "q-btn": {
      "color": "purple",
      "label": "Purple",
      "lc_id": "yJwEGxSzEH",
      "__children": []
    }
  },
  "EbQUEguEAt": {
    "q-btn": {
      "color": "black",
      "label": "Black",
      "lc_id": "EbQUEguEAt",
      "__children": []
    }
  },
  "UI7h/ATDAJ": {
    "div": {
      "lc_id": "UI7h/ATDAJ",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "de3pGiXmqR",
          "__children": [],
          "__text__": "带图标:"
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "primary",
          "icon": "mail",
          "label": "On Left",
          "lc_id": "d5Ypq978Na",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "secondary",
          "icon-right": "mail",
          "label": "On Right",
          "lc_id": "aqNXdTvqTc",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "color": "red",
          "icon": "mail",
          "icon-right": "send",
          "label": "On Left and Right",
          "lc_id": "jklL6Wx9NJ",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "de3pGiXmqR": {
    "div": {
      "class": "demonstration",
      "lc_id": "de3pGiXmqR",
      "__children": [],
      "__text__": "带图标:"
    }
  },
  "d5Ypq978Na": {
    "q-btn": {
      "color": "primary",
      "icon": "mail",
      "label": "On Left",
      "lc_id": "d5Ypq978Na",
      "__children": []
    }
  },
  "aqNXdTvqTc": {
    "q-btn": {
      "color": "secondary",
      "icon-right": "mail",
      "label": "On Right",
      "lc_id": "aqNXdTvqTc",
      "__children": []
    }
  },
  "jklL6Wx9NJ": {
    "q-btn": {
      "color": "red",
      "icon": "mail",
      "icon-right": "send",
      "label": "On Left and Right",
      "lc_id": "jklL6Wx9NJ",
      "__children": []
    }
  },
  "vQgqqvbohO": {
    "div": {
      "lc_id": "vQgqqvbohO",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "EeujCFZe44",
          "__children": [],
          "__text__": "圆形:"
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "round": "",
          "color": "primary",
          "icon": "shopping_cart",
          "lc_id": "O5u8XVl7AA",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "round": "",
          "color": "secondary",
          "icon": "navigation",
          "lc_id": "JOmKtm/rOG",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "round": "",
          "color": "amber",
          "glossy": "",
          "text-color": "black",
          "icon": "layers_clear",
          "lc_id": "v8Oa0jIUoU",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "round": "",
          "color": "brown-5",
          "icon": "directions",
          "lc_id": "+VmdrkepgL",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "round": "",
          "color": "deep-orange",
          "icon": "edit_location",
          "lc_id": "AIP2THitl8",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "round": "",
          "color": "purple",
          "glossy": "",
          "icon": "local_grocery_store",
          "lc_id": "e5x3x9Dk1m",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "q-btn": {
          "round": "",
          "color": "black",
          "icon": "my_location",
          "lc_id": "iS8fj8rp9F",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "EeujCFZe44": {
    "div": {
      "class": "demonstration",
      "lc_id": "EeujCFZe44",
      "__children": [],
      "__text__": "圆形:"
    }
  },
  "O5u8XVl7AA": {
    "q-btn": {
      "round": "",
      "color": "primary",
      "icon": "shopping_cart",
      "lc_id": "O5u8XVl7AA",
      "__children": []
    }
  },
  "JOmKtm/rOG": {
    "q-btn": {
      "round": "",
      "color": "secondary",
      "icon": "navigation",
      "lc_id": "JOmKtm/rOG",
      "__children": []
    }
  },
  "v8Oa0jIUoU": {
    "q-btn": {
      "round": "",
      "color": "amber",
      "glossy": "",
      "text-color": "black",
      "icon": "layers_clear",
      "lc_id": "v8Oa0jIUoU",
      "__children": []
    }
  },
  "+VmdrkepgL": {
    "q-btn": {
      "round": "",
      "color": "brown-5",
      "icon": "directions",
      "lc_id": "+VmdrkepgL",
      "__children": []
    }
  },
  "AIP2THitl8": {
    "q-btn": {
      "round": "",
      "color": "deep-orange",
      "icon": "edit_location",
      "lc_id": "AIP2THitl8",
      "__children": []
    }
  },
  "e5x3x9Dk1m": {
    "q-btn": {
      "round": "",
      "color": "purple",
      "glossy": "",
      "icon": "local_grocery_store",
      "lc_id": "e5x3x9Dk1m",
      "__children": []
    }
  },
  "iS8fj8rp9F": {
    "q-btn": {
      "round": "",
      "color": "black",
      "icon": "my_location",
      "lc_id": "iS8fj8rp9F",
      "__children": []
    }
  },
  "qxNTsZ7gdH": {
    "div": {
      "lc_id": "qxNTsZ7gdH",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "2PmKLORJ0+",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "2PmKLORJ0+": {
    "div": {
      "class": "demonstration",
      "lc_id": "2PmKLORJ0+",
      "__children": []
    }
  },
  "glEvGlsYzc": {
    "div": {
      "lc_id": "glEvGlsYzc",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "wEmZLgNgd8",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "wEmZLgNgd8": {
    "div": {
      "class": "demonstration",
      "lc_id": "wEmZLgNgd8",
      "__children": []
    }
  },
  "bKFUlO7VHj": {
    "div": {
      "lc_id": "bKFUlO7VHj",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "3PBIHV0UOY",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "3PBIHV0UOY": {
    "div": {
      "class": "demonstration",
      "lc_id": "3PBIHV0UOY",
      "__children": []
    }
  },
  "WigME9yp38": {
    "div": {
      "lc_id": "WigME9yp38",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "IAwnCQDlNW",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "IAwnCQDlNW": {
    "div": {
      "class": "demonstration",
      "lc_id": "IAwnCQDlNW",
      "__children": []
    }
  },
  "bWI0D140Pa": {
    "div": {
      "lc_id": "bWI0D140Pa",
      "__children": [{
        "div": {
          "class": "demonstration",
          "lc_id": "Asbu0R2XiF",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "Asbu0R2XiF": {
    "div": {
      "class": "demonstration",
      "lc_id": "Asbu0R2XiF",
      "__children": []
    }
  },
  "bzP9tbPMKK": {
    "div": {
      "lc_id": "bzP9tbPMKK",
      "__children": [{
        "lc-base": {
          "lc_id": "sKdFJMkJkj",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "lc-button": {
          "lc_id": "u+PKLnOk8j",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "sKdFJMkJkj": {
    "lc-base": {
      "lc_id": "sKdFJMkJkj",
      "__children": []
    }
  },
  "u+PKLnOk8j": {
    "lc-button": {
      "lc_id": "u+PKLnOk8j",
      "__children": []
    }
  },
  "NahfEKxF68": {
    "div": {
      "lc_id": "NahfEKxF68",
      "class": "demonstration-raw",
      "__children": [{
        "table": {
          "border": "0",
          "lc_id": "RDLbKPIVyp",
          "__children": [{
            "tr": {
              "lc_id": "riqra/6H1d",
              "__children": [{
                "td": {
                  "lc_id": "RhfgQCKISj",
                  "__children": [{
                    "div": {
                      "class": "title",
                      "lc_id": "OnWMPOSYwo",
                      "__children": [],
                      "__text__": "div:"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "td": {
                  "lc_id": "ZOFUAuegZ7",
                  "__children": [{
                    "div": {
                      "lc_id": "jayChQGWVD",
                      "div-lc-mark": "",
                      "lc-mark": "",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "tr": {
              "lc_id": "i+v/R6TP05",
              "__children": [{
                "td": {
                  "lc_id": "wLL4oua+v6",
                  "__children": [{
                    "div": {
                      "class": "title",
                      "lc_id": "ySJLvpCtUj",
                      "__children": [],
                      "__text__": "span:"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "td": {
                  "lc_id": "Wg/gdfZ1hC",
                  "__children": [{
                    "span": {
                      "lc_id": "m+Oy7pHzNT",
                      "lc-mark": "",
                      "__children": [],
                      "__text__": "Span Element"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "tr": {
              "lc_id": "Ejan36KyM/",
              "__children": [{
                "td": {
                  "lc_id": "ke9QDthYso",
                  "__children": [{
                    "div": {
                      "class": "title",
                      "lc_id": "V2t1JzpJnA",
                      "__children": [],
                      "__text__": "a（超链接）:"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "td": {
                  "lc_id": "SUPSw5gtWC",
                  "__children": [{
                    "a": {
                      "lc-mark": "",
                      "lc_id": "MjGtLkly03",
                      "__children": [],
                      "__text__": "W3School"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "tr": {
              "lc_id": "bgvuIIHVqY",
              "__children": [{
                "td": {
                  "lc_id": "h0nRibffcF",
                  "__children": [{
                    "div": {
                      "class": "title",
                      "lc_id": "MxMSt/pxUC",
                      "__children": [],
                      "__text__": "abbr（标记缩写）:"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "td": {
                  "lc_id": "lX0P4NPEIk",
                  "__children": [{
                    "abbr": {
                      "lc-mark": "",
                      "title": "People's Republic of China",
                      "lc_id": "oFoyJEu70y",
                      "__children": [],
                      "__text__": "PRC"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "tr": {
              "lc_id": "inCzutb68I",
              "__children": [{
                "td": {
                  "lc_id": "mh8/q4jJAC",
                  "__children": [{
                    "div": {
                      "class": "title",
                      "lc_id": "Kl4zl6s4bN",
                      "__children": [],
                      "__text__": "article:"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "td": {
                  "lc_id": "ylNI9kdThf",
                  "__children": [{
                    "article": {
                      "lc_id": "p6pMF5D2hP",
                      "__children": [{
                        "h1": {
                          "lc-mark": "",
                          "lc_id": "GcMEfj/r8i",
                          "__children": [],
                          "__text__": "Internet Explorer 9"
                        },
                        "__key__": "__children"
                      }, {
                        "p": {
                          "lc-mark": "",
                          "lc_id": "odzwtRzLYd",
                          "__children": [],
                          "__text__": "Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月\n              14\n              日发布....."
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "tr": {
              "lc_id": "sQR/stqYia",
              "__children": [{
                "td": {
                  "lc_id": "cw8+279Hwb",
                  "__children": [{
                    "div": {
                      "class": "title",
                      "lc_id": "NpMarePQQF",
                      "__children": [],
                      "__text__": "aside:"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "td": {
                  "lc_id": "/RsZDrC6KZ",
                  "__children": [{
                    "aside": {
                      "lc-mark": "",
                      "lc_id": "65Oo0WGvvy",
                      "__children": [],
                      "__text__": "The Epcot Center is a theme park in Disney World, Florida."
                    },
                    "__key__": "__children"
                  }, {
                    "h4": {
                      "lc_id": "oSbd1PW0Nw",
                      "lc-mark": "",
                      "__children": [],
                      "__text__": "Epcot Center"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "tr": {
              "lc_id": "YpolLNtaim",
              "__children": [{
                "td": {
                  "lc_id": "0L0kRmNEHS",
                  "__children": [{
                    "div": {
                      "class": "title",
                      "lc_id": "lLb2wnV7cj",
                      "__children": [],
                      "__text__": "p:"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "td": {
                  "lc_id": "E3Kwwe8iVC",
                  "__children": [{
                    "p": {
                      "lc-mark": "",
                      "lc_id": "t5axePjnHi",
                      "__children": [],
                      "__text__": "这是普通文本"
                    },
                    "__key__": "__children"
                  }, {
                    "b": {
                      "lc-mark": "",
                      "lc_id": "MKNiVzEnZC",
                      "__children": [],
                      "__text__": "这是粗体文本"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "RDLbKPIVyp": {
    "table": {
      "border": "0",
      "lc_id": "RDLbKPIVyp",
      "__children": [{
        "tr": {
          "lc_id": "riqra/6H1d",
          "__children": [{
            "td": {
              "lc_id": "RhfgQCKISj",
              "__children": [{
                "div": {
                  "class": "title",
                  "lc_id": "OnWMPOSYwo",
                  "__children": [],
                  "__text__": "div:"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "td": {
              "lc_id": "ZOFUAuegZ7",
              "__children": [{
                "div": {
                  "lc_id": "jayChQGWVD",
                  "div-lc-mark": "",
                  "lc-mark": "",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "tr": {
          "lc_id": "i+v/R6TP05",
          "__children": [{
            "td": {
              "lc_id": "wLL4oua+v6",
              "__children": [{
                "div": {
                  "class": "title",
                  "lc_id": "ySJLvpCtUj",
                  "__children": [],
                  "__text__": "span:"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "td": {
              "lc_id": "Wg/gdfZ1hC",
              "__children": [{
                "span": {
                  "lc_id": "m+Oy7pHzNT",
                  "lc-mark": "",
                  "__children": [],
                  "__text__": "Span Element"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "tr": {
          "lc_id": "Ejan36KyM/",
          "__children": [{
            "td": {
              "lc_id": "ke9QDthYso",
              "__children": [{
                "div": {
                  "class": "title",
                  "lc_id": "V2t1JzpJnA",
                  "__children": [],
                  "__text__": "a（超链接）:"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "td": {
              "lc_id": "SUPSw5gtWC",
              "__children": [{
                "a": {
                  "lc-mark": "",
                  "lc_id": "MjGtLkly03",
                  "__children": [],
                  "__text__": "W3School"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "tr": {
          "lc_id": "bgvuIIHVqY",
          "__children": [{
            "td": {
              "lc_id": "h0nRibffcF",
              "__children": [{
                "div": {
                  "class": "title",
                  "lc_id": "MxMSt/pxUC",
                  "__children": [],
                  "__text__": "abbr（标记缩写）:"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "td": {
              "lc_id": "lX0P4NPEIk",
              "__children": [{
                "abbr": {
                  "lc-mark": "",
                  "title": "People's Republic of China",
                  "lc_id": "oFoyJEu70y",
                  "__children": [],
                  "__text__": "PRC"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "tr": {
          "lc_id": "inCzutb68I",
          "__children": [{
            "td": {
              "lc_id": "mh8/q4jJAC",
              "__children": [{
                "div": {
                  "class": "title",
                  "lc_id": "Kl4zl6s4bN",
                  "__children": [],
                  "__text__": "article:"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "td": {
              "lc_id": "ylNI9kdThf",
              "__children": [{
                "article": {
                  "lc_id": "p6pMF5D2hP",
                  "__children": [{
                    "h1": {
                      "lc-mark": "",
                      "lc_id": "GcMEfj/r8i",
                      "__children": [],
                      "__text__": "Internet Explorer 9"
                    },
                    "__key__": "__children"
                  }, {
                    "p": {
                      "lc-mark": "",
                      "lc_id": "odzwtRzLYd",
                      "__children": [],
                      "__text__": "Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月\n              14\n              日发布....."
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "tr": {
          "lc_id": "sQR/stqYia",
          "__children": [{
            "td": {
              "lc_id": "cw8+279Hwb",
              "__children": [{
                "div": {
                  "class": "title",
                  "lc_id": "NpMarePQQF",
                  "__children": [],
                  "__text__": "aside:"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "td": {
              "lc_id": "/RsZDrC6KZ",
              "__children": [{
                "aside": {
                  "lc-mark": "",
                  "lc_id": "65Oo0WGvvy",
                  "__children": [],
                  "__text__": "The Epcot Center is a theme park in Disney World, Florida."
                },
                "__key__": "__children"
              }, {
                "h4": {
                  "lc_id": "oSbd1PW0Nw",
                  "lc-mark": "",
                  "__children": [],
                  "__text__": "Epcot Center"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "tr": {
          "lc_id": "YpolLNtaim",
          "__children": [{
            "td": {
              "lc_id": "0L0kRmNEHS",
              "__children": [{
                "div": {
                  "class": "title",
                  "lc_id": "lLb2wnV7cj",
                  "__children": [],
                  "__text__": "p:"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "td": {
              "lc_id": "E3Kwwe8iVC",
              "__children": [{
                "p": {
                  "lc-mark": "",
                  "lc_id": "t5axePjnHi",
                  "__children": [],
                  "__text__": "这是普通文本"
                },
                "__key__": "__children"
              }, {
                "b": {
                  "lc-mark": "",
                  "lc_id": "MKNiVzEnZC",
                  "__children": [],
                  "__text__": "这是粗体文本"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "riqra/6H1d": {
    "tr": {
      "lc_id": "riqra/6H1d",
      "__children": [{
        "td": {
          "lc_id": "RhfgQCKISj",
          "__children": [{
            "div": {
              "class": "title",
              "lc_id": "OnWMPOSYwo",
              "__children": [],
              "__text__": "div:"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "td": {
          "lc_id": "ZOFUAuegZ7",
          "__children": [{
            "div": {
              "lc_id": "jayChQGWVD",
              "div-lc-mark": "",
              "lc-mark": "",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "RhfgQCKISj": {
    "td": {
      "lc_id": "RhfgQCKISj",
      "__children": [{
        "div": {
          "class": "title",
          "lc_id": "OnWMPOSYwo",
          "__children": [],
          "__text__": "div:"
        },
        "__key__": "__children"
      }]
    }
  },
  "OnWMPOSYwo": {
    "div": {
      "class": "title",
      "lc_id": "OnWMPOSYwo",
      "__children": [],
      "__text__": "div:"
    }
  },
  "ZOFUAuegZ7": {
    "td": {
      "lc_id": "ZOFUAuegZ7",
      "__children": [{
        "div": {
          "lc_id": "jayChQGWVD",
          "div-lc-mark": "",
          "lc-mark": "",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "jayChQGWVD": {
    "div": {
      "lc_id": "jayChQGWVD",
      "div-lc-mark": "",
      "lc-mark": "",
      "__children": []
    }
  },
  "i+v/R6TP05": {
    "tr": {
      "lc_id": "i+v/R6TP05",
      "__children": [{
        "td": {
          "lc_id": "wLL4oua+v6",
          "__children": [{
            "div": {
              "class": "title",
              "lc_id": "ySJLvpCtUj",
              "__children": [],
              "__text__": "span:"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "td": {
          "lc_id": "Wg/gdfZ1hC",
          "__children": [{
            "span": {
              "lc_id": "m+Oy7pHzNT",
              "lc-mark": "",
              "__children": [],
              "__text__": "Span Element"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "wLL4oua+v6": {
    "td": {
      "lc_id": "wLL4oua+v6",
      "__children": [{
        "div": {
          "class": "title",
          "lc_id": "ySJLvpCtUj",
          "__children": [],
          "__text__": "span:"
        },
        "__key__": "__children"
      }]
    }
  },
  "ySJLvpCtUj": {
    "div": {
      "class": "title",
      "lc_id": "ySJLvpCtUj",
      "__children": [],
      "__text__": "span:"
    }
  },
  "Wg/gdfZ1hC": {
    "td": {
      "lc_id": "Wg/gdfZ1hC",
      "__children": [{
        "span": {
          "lc_id": "m+Oy7pHzNT",
          "lc-mark": "",
          "__children": [],
          "__text__": "Span Element"
        },
        "__key__": "__children"
      }]
    }
  },
  "m+Oy7pHzNT": {
    "span": {
      "lc_id": "m+Oy7pHzNT",
      "lc-mark": "",
      "__children": [],
      "__text__": "Span Element"
    }
  },
  "Ejan36KyM/": {
    "tr": {
      "lc_id": "Ejan36KyM/",
      "__children": [{
        "td": {
          "lc_id": "ke9QDthYso",
          "__children": [{
            "div": {
              "class": "title",
              "lc_id": "V2t1JzpJnA",
              "__children": [],
              "__text__": "a（超链接）:"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "td": {
          "lc_id": "SUPSw5gtWC",
          "__children": [{
            "a": {
              "lc-mark": "",
              "lc_id": "MjGtLkly03",
              "__children": [],
              "__text__": "W3School"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "ke9QDthYso": {
    "td": {
      "lc_id": "ke9QDthYso",
      "__children": [{
        "div": {
          "class": "title",
          "lc_id": "V2t1JzpJnA",
          "__children": [],
          "__text__": "a（超链接）:"
        },
        "__key__": "__children"
      }]
    }
  },
  "V2t1JzpJnA": {
    "div": {
      "class": "title",
      "lc_id": "V2t1JzpJnA",
      "__children": [],
      "__text__": "a（超链接）:"
    }
  },
  "SUPSw5gtWC": {
    "td": {
      "lc_id": "SUPSw5gtWC",
      "__children": [{
        "a": {
          "lc-mark": "",
          "lc_id": "MjGtLkly03",
          "__children": [],
          "__text__": "W3School"
        },
        "__key__": "__children"
      }]
    }
  },
  "MjGtLkly03": {
    "a": {
      "lc-mark": "",
      "lc_id": "MjGtLkly03",
      "__children": [],
      "__text__": "W3School"
    }
  },
  "bgvuIIHVqY": {
    "tr": {
      "lc_id": "bgvuIIHVqY",
      "__children": [{
        "td": {
          "lc_id": "h0nRibffcF",
          "__children": [{
            "div": {
              "class": "title",
              "lc_id": "MxMSt/pxUC",
              "__children": [],
              "__text__": "abbr（标记缩写）:"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "td": {
          "lc_id": "lX0P4NPEIk",
          "__children": [{
            "abbr": {
              "lc-mark": "",
              "title": "People's Republic of China",
              "lc_id": "oFoyJEu70y",
              "__children": [],
              "__text__": "PRC"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "h0nRibffcF": {
    "td": {
      "lc_id": "h0nRibffcF",
      "__children": [{
        "div": {
          "class": "title",
          "lc_id": "MxMSt/pxUC",
          "__children": [],
          "__text__": "abbr（标记缩写）:"
        },
        "__key__": "__children"
      }]
    }
  },
  "MxMSt/pxUC": {
    "div": {
      "class": "title",
      "lc_id": "MxMSt/pxUC",
      "__children": [],
      "__text__": "abbr（标记缩写）:"
    }
  },
  "lX0P4NPEIk": {
    "td": {
      "lc_id": "lX0P4NPEIk",
      "__children": [{
        "abbr": {
          "lc-mark": "",
          "title": "People's Republic of China",
          "lc_id": "oFoyJEu70y",
          "__children": [],
          "__text__": "PRC"
        },
        "__key__": "__children"
      }]
    }
  },
  "oFoyJEu70y": {
    "abbr": {
      "lc-mark": "",
      "title": "People's Republic of China",
      "lc_id": "oFoyJEu70y",
      "__children": [],
      "__text__": "PRC"
    }
  },
  "inCzutb68I": {
    "tr": {
      "lc_id": "inCzutb68I",
      "__children": [{
        "td": {
          "lc_id": "mh8/q4jJAC",
          "__children": [{
            "div": {
              "class": "title",
              "lc_id": "Kl4zl6s4bN",
              "__children": [],
              "__text__": "article:"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "td": {
          "lc_id": "ylNI9kdThf",
          "__children": [{
            "article": {
              "lc_id": "p6pMF5D2hP",
              "__children": [{
                "h1": {
                  "lc-mark": "",
                  "lc_id": "GcMEfj/r8i",
                  "__children": [],
                  "__text__": "Internet Explorer 9"
                },
                "__key__": "__children"
              }, {
                "p": {
                  "lc-mark": "",
                  "lc_id": "odzwtRzLYd",
                  "__children": [],
                  "__text__": "Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月\n              14\n              日发布....."
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "mh8/q4jJAC": {
    "td": {
      "lc_id": "mh8/q4jJAC",
      "__children": [{
        "div": {
          "class": "title",
          "lc_id": "Kl4zl6s4bN",
          "__children": [],
          "__text__": "article:"
        },
        "__key__": "__children"
      }]
    }
  },
  "Kl4zl6s4bN": {
    "div": {
      "class": "title",
      "lc_id": "Kl4zl6s4bN",
      "__children": [],
      "__text__": "article:"
    }
  },
  "ylNI9kdThf": {
    "td": {
      "lc_id": "ylNI9kdThf",
      "__children": [{
        "article": {
          "lc_id": "p6pMF5D2hP",
          "__children": [{
            "h1": {
              "lc-mark": "",
              "lc_id": "GcMEfj/r8i",
              "__children": [],
              "__text__": "Internet Explorer 9"
            },
            "__key__": "__children"
          }, {
            "p": {
              "lc-mark": "",
              "lc_id": "odzwtRzLYd",
              "__children": [],
              "__text__": "Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月\n              14\n              日发布....."
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "p6pMF5D2hP": {
    "article": {
      "lc_id": "p6pMF5D2hP",
      "__children": [{
        "h1": {
          "lc-mark": "",
          "lc_id": "GcMEfj/r8i",
          "__children": [],
          "__text__": "Internet Explorer 9"
        },
        "__key__": "__children"
      }, {
        "p": {
          "lc-mark": "",
          "lc_id": "odzwtRzLYd",
          "__children": [],
          "__text__": "Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月\n              14\n              日发布....."
        },
        "__key__": "__children"
      }]
    }
  },
  "GcMEfj/r8i": {
    "h1": {
      "lc-mark": "",
      "lc_id": "GcMEfj/r8i",
      "__children": [],
      "__text__": "Internet Explorer 9"
    }
  },
  "odzwtRzLYd": {
    "p": {
      "lc-mark": "",
      "lc_id": "odzwtRzLYd",
      "__children": [],
      "__text__": "Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月\n              14\n              日发布....."
    }
  },
  "sQR/stqYia": {
    "tr": {
      "lc_id": "sQR/stqYia",
      "__children": [{
        "td": {
          "lc_id": "cw8+279Hwb",
          "__children": [{
            "div": {
              "class": "title",
              "lc_id": "NpMarePQQF",
              "__children": [],
              "__text__": "aside:"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "td": {
          "lc_id": "/RsZDrC6KZ",
          "__children": [{
            "aside": {
              "lc-mark": "",
              "lc_id": "65Oo0WGvvy",
              "__children": [],
              "__text__": "The Epcot Center is a theme park in Disney World, Florida."
            },
            "__key__": "__children"
          }, {
            "h4": {
              "lc_id": "oSbd1PW0Nw",
              "lc-mark": "",
              "__children": [],
              "__text__": "Epcot Center"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "cw8+279Hwb": {
    "td": {
      "lc_id": "cw8+279Hwb",
      "__children": [{
        "div": {
          "class": "title",
          "lc_id": "NpMarePQQF",
          "__children": [],
          "__text__": "aside:"
        },
        "__key__": "__children"
      }]
    }
  },
  "NpMarePQQF": {
    "div": {
      "class": "title",
      "lc_id": "NpMarePQQF",
      "__children": [],
      "__text__": "aside:"
    }
  },
  "/RsZDrC6KZ": {
    "td": {
      "lc_id": "/RsZDrC6KZ",
      "__children": [{
        "aside": {
          "lc-mark": "",
          "lc_id": "65Oo0WGvvy",
          "__children": [],
          "__text__": "The Epcot Center is a theme park in Disney World, Florida."
        },
        "__key__": "__children"
      }, {
        "h4": {
          "lc_id": "oSbd1PW0Nw",
          "lc-mark": "",
          "__children": [],
          "__text__": "Epcot Center"
        },
        "__key__": "__children"
      }]
    }
  },
  "65Oo0WGvvy": {
    "aside": {
      "lc-mark": "",
      "lc_id": "65Oo0WGvvy",
      "__children": [],
      "__text__": "The Epcot Center is a theme park in Disney World, Florida."
    }
  },
  "oSbd1PW0Nw": {
    "h4": {
      "lc_id": "oSbd1PW0Nw",
      "lc-mark": "",
      "__children": [],
      "__text__": "Epcot Center"
    }
  },
  "YpolLNtaim": {
    "tr": {
      "lc_id": "YpolLNtaim",
      "__children": [{
        "td": {
          "lc_id": "0L0kRmNEHS",
          "__children": [{
            "div": {
              "class": "title",
              "lc_id": "lLb2wnV7cj",
              "__children": [],
              "__text__": "p:"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "td": {
          "lc_id": "E3Kwwe8iVC",
          "__children": [{
            "p": {
              "lc-mark": "",
              "lc_id": "t5axePjnHi",
              "__children": [],
              "__text__": "这是普通文本"
            },
            "__key__": "__children"
          }, {
            "b": {
              "lc-mark": "",
              "lc_id": "MKNiVzEnZC",
              "__children": [],
              "__text__": "这是粗体文本"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "0L0kRmNEHS": {
    "td": {
      "lc_id": "0L0kRmNEHS",
      "__children": [{
        "div": {
          "class": "title",
          "lc_id": "lLb2wnV7cj",
          "__children": [],
          "__text__": "p:"
        },
        "__key__": "__children"
      }]
    }
  },
  "lLb2wnV7cj": {
    "div": {
      "class": "title",
      "lc_id": "lLb2wnV7cj",
      "__children": [],
      "__text__": "p:"
    }
  },
  "E3Kwwe8iVC": {
    "td": {
      "lc_id": "E3Kwwe8iVC",
      "__children": [{
        "p": {
          "lc-mark": "",
          "lc_id": "t5axePjnHi",
          "__children": [],
          "__text__": "这是普通文本"
        },
        "__key__": "__children"
      }, {
        "b": {
          "lc-mark": "",
          "lc_id": "MKNiVzEnZC",
          "__children": [],
          "__text__": "这是粗体文本"
        },
        "__key__": "__children"
      }]
    }
  },
  "t5axePjnHi": {
    "p": {
      "lc-mark": "",
      "lc_id": "t5axePjnHi",
      "__children": [],
      "__text__": "这是普通文本"
    }
  },
  "MKNiVzEnZC": {
    "b": {
      "lc-mark": "",
      "lc_id": "MKNiVzEnZC",
      "__children": [],
      "__text__": "这是粗体文本"
    }
  },
  "AacFAo8xlp": {
    "div": {
      "lc_id": "AacFAo8xlp",
      "__children": [{
        "div": {
          "lc_id": "H8AE6/LSfT",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "BW6xbV1Jkz",
              "__children": [],
              "__text__": "Button 按钮"
            },
            "__key__": "__children"
          }, {
            "div": {
              "id": "vant-button",
              "lc_id": "0xAc0+UTl0",
              "__children": [{
                "van-button": {
                  "lc-mark": "",
                  "type": "primary",
                  "lc_id": "O1Kc1IjqyA",
                  "__children": [],
                  "__text__": "主要按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "type": "success",
                  "lc_id": "LWUrTRjiN3",
                  "__children": [],
                  "__text__": "成功按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "type": "default",
                  "lc_id": "Lor6xJLyXO",
                  "__children": [],
                  "__text__": "默认按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "type": "warning",
                  "lc_id": "B2mwHpjnn4",
                  "__children": [],
                  "__text__": "警告按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "type": "danger",
                  "lc_id": "g8aJMV07tv",
                  "__children": [],
                  "__text__": "危险按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "plain": "",
                  "type": "primary",
                  "lc_id": "B6Z0HCAfII",
                  "__children": [],
                  "__text__": "朴素按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "square": "",
                  "type": "primary",
                  "lc_id": "S7BYt/eLuR",
                  "__children": [],
                  "__text__": "方形按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "round": "",
                  "type": "primary",
                  "lc_id": "xqEMwr1sRA",
                  "__children": [],
                  "__text__": "圆形按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "icon": "plus",
                  "type": "primary",
                  "lc_id": "XG3GYBBrEU",
                  "__children": [],
                  "__text__": "按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "icon": "https://img.yzcdn.cn/vant/user-active.png",
                  "type": "primary",
                  "lc_id": "X//pnSGqLF",
                  "__children": [],
                  "__text__": "按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "type": "primary",
                  "size": "large",
                  "lc_id": "pwjoF9kQPG",
                  "__children": [],
                  "__text__": "大号按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "type": "primary",
                  "size": "normal",
                  "lc_id": "1ShXXx6uM0",
                  "__children": [],
                  "__text__": "普通按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "type": "primary",
                  "size": "small",
                  "lc_id": "NJoWdzL3ps",
                  "__children": [],
                  "__text__": "小型按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "type": "primary",
                  "size": "mini",
                  "lc_id": "hOCsi5Nd7f",
                  "__children": [],
                  "__text__": "迷你按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "type": "primary",
                  "block": "",
                  "lc_id": "0MRQ5LCYcF",
                  "__children": [],
                  "__text__": "块级元素"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "color": "#7232dd",
                  "lc_id": "nrrWnpVDmN",
                  "__children": [],
                  "__text__": "单色按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "color": "#7232dd",
                  "plain": "",
                  "lc_id": "l0tFmVZGj9",
                  "__children": [],
                  "__text__": "单色按钮"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "lc-mark": "",
                  "color": "linear-gradient(to right, #ff6034, #ee0a24)",
                  "lc_id": "RXwG5PrfLY",
                  "__children": [],
                  "__text__": "渐变色按钮"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "an/3DkuLE6",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "w8jEqp6M5d",
              "__children": [],
              "__text__": "Cell 单元格"
            },
            "__key__": "__children"
          }, {
            "van-cell-group": {
              "lc-mark": "",
              "lc_id": "YIna8H61Ze",
              "__children": [{
                "van-cell": {
                  "title": "单元格",
                  "value": "内容",
                  "lc_id": "TFcKdvoBUi",
                  "__children": [{
                    "van-cell": {
                      "title": "单元格",
                      "value": "内容",
                      "label": "描述信息",
                      "lc_id": "wCy+AFO6oA",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "br": {
              "__children": [],
              "lc_id": "Bc72f94saa"
            },
            "__key__": "__children"
          }, {
            "van-cell-group": {
              "inset": "",
              "lc-mark": "",
              "lc_id": "GDUu8grqyq",
              "__children": [{
                "van-cell": {
                  "title": "单元格",
                  "value": "内容",
                  "lc_id": "R/yvDgWEzu",
                  "__children": [{
                    "van-cell": {
                      "title": "单元格",
                      "value": "内容",
                      "label": "描述信息",
                      "lc_id": "nH8Z1dpWkB",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "H8AE6/LSfT": {
    "div": {
      "lc_id": "H8AE6/LSfT",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "BW6xbV1Jkz",
          "__children": [],
          "__text__": "Button 按钮"
        },
        "__key__": "__children"
      }, {
        "div": {
          "id": "vant-button",
          "lc_id": "0xAc0+UTl0",
          "__children": [{
            "van-button": {
              "lc-mark": "",
              "type": "primary",
              "lc_id": "O1Kc1IjqyA",
              "__children": [],
              "__text__": "主要按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "type": "success",
              "lc_id": "LWUrTRjiN3",
              "__children": [],
              "__text__": "成功按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "type": "default",
              "lc_id": "Lor6xJLyXO",
              "__children": [],
              "__text__": "默认按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "type": "warning",
              "lc_id": "B2mwHpjnn4",
              "__children": [],
              "__text__": "警告按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "type": "danger",
              "lc_id": "g8aJMV07tv",
              "__children": [],
              "__text__": "危险按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "plain": "",
              "type": "primary",
              "lc_id": "B6Z0HCAfII",
              "__children": [],
              "__text__": "朴素按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "square": "",
              "type": "primary",
              "lc_id": "S7BYt/eLuR",
              "__children": [],
              "__text__": "方形按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "round": "",
              "type": "primary",
              "lc_id": "xqEMwr1sRA",
              "__children": [],
              "__text__": "圆形按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "icon": "plus",
              "type": "primary",
              "lc_id": "XG3GYBBrEU",
              "__children": [],
              "__text__": "按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "icon": "https://img.yzcdn.cn/vant/user-active.png",
              "type": "primary",
              "lc_id": "X//pnSGqLF",
              "__children": [],
              "__text__": "按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "type": "primary",
              "size": "large",
              "lc_id": "pwjoF9kQPG",
              "__children": [],
              "__text__": "大号按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "type": "primary",
              "size": "normal",
              "lc_id": "1ShXXx6uM0",
              "__children": [],
              "__text__": "普通按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "type": "primary",
              "size": "small",
              "lc_id": "NJoWdzL3ps",
              "__children": [],
              "__text__": "小型按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "type": "primary",
              "size": "mini",
              "lc_id": "hOCsi5Nd7f",
              "__children": [],
              "__text__": "迷你按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "type": "primary",
              "block": "",
              "lc_id": "0MRQ5LCYcF",
              "__children": [],
              "__text__": "块级元素"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "color": "#7232dd",
              "lc_id": "nrrWnpVDmN",
              "__children": [],
              "__text__": "单色按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "color": "#7232dd",
              "plain": "",
              "lc_id": "l0tFmVZGj9",
              "__children": [],
              "__text__": "单色按钮"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "lc-mark": "",
              "color": "linear-gradient(to right, #ff6034, #ee0a24)",
              "lc_id": "RXwG5PrfLY",
              "__children": [],
              "__text__": "渐变色按钮"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "BW6xbV1Jkz": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "BW6xbV1Jkz",
      "__children": [],
      "__text__": "Button 按钮"
    }
  },
  "0xAc0+UTl0": {
    "div": {
      "id": "vant-button",
      "lc_id": "0xAc0+UTl0",
      "__children": [{
        "van-button": {
          "lc-mark": "",
          "type": "primary",
          "lc_id": "O1Kc1IjqyA",
          "__children": [],
          "__text__": "主要按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "type": "success",
          "lc_id": "LWUrTRjiN3",
          "__children": [],
          "__text__": "成功按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "type": "default",
          "lc_id": "Lor6xJLyXO",
          "__children": [],
          "__text__": "默认按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "type": "warning",
          "lc_id": "B2mwHpjnn4",
          "__children": [],
          "__text__": "警告按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "type": "danger",
          "lc_id": "g8aJMV07tv",
          "__children": [],
          "__text__": "危险按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "plain": "",
          "type": "primary",
          "lc_id": "B6Z0HCAfII",
          "__children": [],
          "__text__": "朴素按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "square": "",
          "type": "primary",
          "lc_id": "S7BYt/eLuR",
          "__children": [],
          "__text__": "方形按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "round": "",
          "type": "primary",
          "lc_id": "xqEMwr1sRA",
          "__children": [],
          "__text__": "圆形按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "icon": "plus",
          "type": "primary",
          "lc_id": "XG3GYBBrEU",
          "__children": [],
          "__text__": "按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "icon": "https://img.yzcdn.cn/vant/user-active.png",
          "type": "primary",
          "lc_id": "X//pnSGqLF",
          "__children": [],
          "__text__": "按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "type": "primary",
          "size": "large",
          "lc_id": "pwjoF9kQPG",
          "__children": [],
          "__text__": "大号按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "type": "primary",
          "size": "normal",
          "lc_id": "1ShXXx6uM0",
          "__children": [],
          "__text__": "普通按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "type": "primary",
          "size": "small",
          "lc_id": "NJoWdzL3ps",
          "__children": [],
          "__text__": "小型按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "type": "primary",
          "size": "mini",
          "lc_id": "hOCsi5Nd7f",
          "__children": [],
          "__text__": "迷你按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "type": "primary",
          "block": "",
          "lc_id": "0MRQ5LCYcF",
          "__children": [],
          "__text__": "块级元素"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "color": "#7232dd",
          "lc_id": "nrrWnpVDmN",
          "__children": [],
          "__text__": "单色按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "color": "#7232dd",
          "plain": "",
          "lc_id": "l0tFmVZGj9",
          "__children": [],
          "__text__": "单色按钮"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "lc-mark": "",
          "color": "linear-gradient(to right, #ff6034, #ee0a24)",
          "lc_id": "RXwG5PrfLY",
          "__children": [],
          "__text__": "渐变色按钮"
        },
        "__key__": "__children"
      }]
    }
  },
  "O1Kc1IjqyA": {
    "van-button": {
      "lc-mark": "",
      "type": "primary",
      "lc_id": "O1Kc1IjqyA",
      "__children": [],
      "__text__": "主要按钮"
    }
  },
  "LWUrTRjiN3": {
    "van-button": {
      "lc-mark": "",
      "type": "success",
      "lc_id": "LWUrTRjiN3",
      "__children": [],
      "__text__": "成功按钮"
    }
  },
  "Lor6xJLyXO": {
    "van-button": {
      "lc-mark": "",
      "type": "default",
      "lc_id": "Lor6xJLyXO",
      "__children": [],
      "__text__": "默认按钮"
    }
  },
  "B2mwHpjnn4": {
    "van-button": {
      "lc-mark": "",
      "type": "warning",
      "lc_id": "B2mwHpjnn4",
      "__children": [],
      "__text__": "警告按钮"
    }
  },
  "g8aJMV07tv": {
    "van-button": {
      "lc-mark": "",
      "type": "danger",
      "lc_id": "g8aJMV07tv",
      "__children": [],
      "__text__": "危险按钮"
    }
  },
  "B6Z0HCAfII": {
    "van-button": {
      "lc-mark": "",
      "plain": "",
      "type": "primary",
      "lc_id": "B6Z0HCAfII",
      "__children": [],
      "__text__": "朴素按钮"
    }
  },
  "S7BYt/eLuR": {
    "van-button": {
      "lc-mark": "",
      "square": "",
      "type": "primary",
      "lc_id": "S7BYt/eLuR",
      "__children": [],
      "__text__": "方形按钮"
    }
  },
  "xqEMwr1sRA": {
    "van-button": {
      "lc-mark": "",
      "round": "",
      "type": "primary",
      "lc_id": "xqEMwr1sRA",
      "__children": [],
      "__text__": "圆形按钮"
    }
  },
  "XG3GYBBrEU": {
    "van-button": {
      "lc-mark": "",
      "icon": "plus",
      "type": "primary",
      "lc_id": "XG3GYBBrEU",
      "__children": [],
      "__text__": "按钮"
    }
  },
  "X//pnSGqLF": {
    "van-button": {
      "lc-mark": "",
      "icon": "https://img.yzcdn.cn/vant/user-active.png",
      "type": "primary",
      "lc_id": "X//pnSGqLF",
      "__children": [],
      "__text__": "按钮"
    }
  },
  "pwjoF9kQPG": {
    "van-button": {
      "lc-mark": "",
      "type": "primary",
      "size": "large",
      "lc_id": "pwjoF9kQPG",
      "__children": [],
      "__text__": "大号按钮"
    }
  },
  "1ShXXx6uM0": {
    "van-button": {
      "lc-mark": "",
      "type": "primary",
      "size": "normal",
      "lc_id": "1ShXXx6uM0",
      "__children": [],
      "__text__": "普通按钮"
    }
  },
  "NJoWdzL3ps": {
    "van-button": {
      "lc-mark": "",
      "type": "primary",
      "size": "small",
      "lc_id": "NJoWdzL3ps",
      "__children": [],
      "__text__": "小型按钮"
    }
  },
  "hOCsi5Nd7f": {
    "van-button": {
      "lc-mark": "",
      "type": "primary",
      "size": "mini",
      "lc_id": "hOCsi5Nd7f",
      "__children": [],
      "__text__": "迷你按钮"
    }
  },
  "0MRQ5LCYcF": {
    "van-button": {
      "lc-mark": "",
      "type": "primary",
      "block": "",
      "lc_id": "0MRQ5LCYcF",
      "__children": [],
      "__text__": "块级元素"
    }
  },
  "nrrWnpVDmN": {
    "van-button": {
      "lc-mark": "",
      "color": "#7232dd",
      "lc_id": "nrrWnpVDmN",
      "__children": [],
      "__text__": "单色按钮"
    }
  },
  "l0tFmVZGj9": {
    "van-button": {
      "lc-mark": "",
      "color": "#7232dd",
      "plain": "",
      "lc_id": "l0tFmVZGj9",
      "__children": [],
      "__text__": "单色按钮"
    }
  },
  "RXwG5PrfLY": {
    "van-button": {
      "lc-mark": "",
      "color": "linear-gradient(to right, #ff6034, #ee0a24)",
      "lc_id": "RXwG5PrfLY",
      "__children": [],
      "__text__": "渐变色按钮"
    }
  },
  "an/3DkuLE6": {
    "div": {
      "lc_id": "an/3DkuLE6",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "w8jEqp6M5d",
          "__children": [],
          "__text__": "Cell 单元格"
        },
        "__key__": "__children"
      }, {
        "van-cell-group": {
          "lc-mark": "",
          "lc_id": "YIna8H61Ze",
          "__children": [{
            "van-cell": {
              "title": "单元格",
              "value": "内容",
              "lc_id": "TFcKdvoBUi",
              "__children": [{
                "van-cell": {
                  "title": "单元格",
                  "value": "内容",
                  "label": "描述信息",
                  "lc_id": "wCy+AFO6oA",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "br": {
          "__children": [],
          "lc_id": "Bc72f94saa"
        },
        "__key__": "__children"
      }, {
        "van-cell-group": {
          "inset": "",
          "lc-mark": "",
          "lc_id": "GDUu8grqyq",
          "__children": [{
            "van-cell": {
              "title": "单元格",
              "value": "内容",
              "lc_id": "R/yvDgWEzu",
              "__children": [{
                "van-cell": {
                  "title": "单元格",
                  "value": "内容",
                  "label": "描述信息",
                  "lc_id": "nH8Z1dpWkB",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "w8jEqp6M5d": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "w8jEqp6M5d",
      "__children": [],
      "__text__": "Cell 单元格"
    }
  },
  "YIna8H61Ze": {
    "van-cell-group": {
      "lc-mark": "",
      "lc_id": "YIna8H61Ze",
      "__children": [{
        "van-cell": {
          "title": "单元格",
          "value": "内容",
          "lc_id": "TFcKdvoBUi",
          "__children": [{
            "van-cell": {
              "title": "单元格",
              "value": "内容",
              "label": "描述信息",
              "lc_id": "wCy+AFO6oA",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "TFcKdvoBUi": {
    "van-cell": {
      "title": "单元格",
      "value": "内容",
      "lc_id": "TFcKdvoBUi",
      "__children": [{
        "van-cell": {
          "title": "单元格",
          "value": "内容",
          "label": "描述信息",
          "lc_id": "wCy+AFO6oA",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "wCy+AFO6oA": {
    "van-cell": {
      "title": "单元格",
      "value": "内容",
      "label": "描述信息",
      "lc_id": "wCy+AFO6oA",
      "__children": []
    }
  },
  "Bc72f94saa": {
    "br": {
      "__children": [],
      "lc_id": "Bc72f94saa"
    }
  },
  "GDUu8grqyq": {
    "van-cell-group": {
      "inset": "",
      "lc-mark": "",
      "lc_id": "GDUu8grqyq",
      "__children": [{
        "van-cell": {
          "title": "单元格",
          "value": "内容",
          "lc_id": "R/yvDgWEzu",
          "__children": [{
            "van-cell": {
              "title": "单元格",
              "value": "内容",
              "label": "描述信息",
              "lc_id": "nH8Z1dpWkB",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "R/yvDgWEzu": {
    "van-cell": {
      "title": "单元格",
      "value": "内容",
      "lc_id": "R/yvDgWEzu",
      "__children": [{
        "van-cell": {
          "title": "单元格",
          "value": "内容",
          "label": "描述信息",
          "lc_id": "nH8Z1dpWkB",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "nH8Z1dpWkB": {
    "van-cell": {
      "title": "单元格",
      "value": "内容",
      "label": "描述信息",
      "lc_id": "nH8Z1dpWkB",
      "__children": []
    }
  },
  "SUq1dM6mx7": {
    "div": {
      "lc_id": "SUq1dM6mx7",
      "__children": [{
        "div": {
          "lc_id": "bVMFhQWWZi",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "aksDVgfMhj",
              "__children": [],
              "__text__": "Collapse 折叠面板"
            },
            "__key__": "__children"
          }, {
            "van-collapse": {
              "v-model": "activeNames",
              "lc-mark": "",
              "lc_id": "npKi1y5bk5",
              "__children": [{
                "van-collapse-item": {
                  "title": "标题1",
                  "name": "1",
                  "lc_id": "wlqZiTcBQn",
                  "__children": [],
                  "__text__": "内容"
                },
                "__key__": "__children"
              }, {
                "van-collapse-item": {
                  "title": "标题2",
                  "name": "2",
                  "lc_id": "lVEmjp4jgU",
                  "__children": [],
                  "__text__": "内容"
                },
                "__key__": "__children"
              }, {
                "van-collapse-item": {
                  "title": "标题3",
                  "name": "3",
                  "disabled": "",
                  "lc_id": "LJVFOApV8X",
                  "__children": [],
                  "__text__": "内容"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "C3lXrwAiNI",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "0boIDS47ol",
              "__children": [],
              "__text__": "CountDown 倒计时"
            },
            "__key__": "__children"
          }, {
            "van-count-down": {
              ":time": "time",
              "lc-mark": "",
              "lc_id": "/EaLzL88MM",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-count-down": {
              ":time": "time",
              "lc-mark": "",
              "format": "DD 天 HH 时 mm 分 ss 秒",
              "lc_id": "lagIK/uwCC",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-count-down": {
              ":time": "time",
              "lc-mark": "",
              "lc_id": "Xyg4NSoxBX",
              "__children": [{
                "template": {
                  "#default": "timeData",
                  "lc_id": "tPDMWuGJW6",
                  "__children": [{
                    "span": {
                      "class": "block",
                      "lc_id": "64ZZJDy0a/",
                      "__children": [],
                      "__text__": "{{ timeData.hours }}"
                    },
                    "__key__": "__children"
                  }, {
                    "span": {
                      "class": "colon",
                      "lc_id": "uOEZ/JgPc8",
                      "__children": [],
                      "__text__": ":"
                    },
                    "__key__": "__children"
                  }, {
                    "span": {
                      "class": "block",
                      "lc_id": "JqxW3i6P8w",
                      "__children": [],
                      "__text__": "{{ timeData.minutes }}"
                    },
                    "__key__": "__children"
                  }, {
                    "span": {
                      "class": "colon",
                      "lc_id": "S8yWEUqu8P",
                      "__children": [],
                      "__text__": ":"
                    },
                    "__key__": "__children"
                  }, {
                    "span": {
                      "class": "block",
                      "lc_id": "uCI9UGXbjM",
                      "__children": [],
                      "__text__": "{{ timeData.seconds }}"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "+TRSEJ64CC",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "uaaKUshda6",
              "__children": [],
              "__text__": "Divider 分割线"
            },
            "__key__": "__children"
          }, {
            "van-divider": {
              "lc-mark": "",
              "lc_id": "O+mmvHZU5g",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-divider": {
              "lc-mark": "",
              "lc_id": "ZFHen1KfO4",
              "__children": [],
              "__text__": "文字"
            },
            "__key__": "__children"
          }, {
            "van-divider": {
              "lc-mark": "",
              "content-position": "left",
              "lc_id": "2YAd2q9KCC",
              "__children": [],
              "__text__": "文字"
            },
            "__key__": "__children"
          }, {
            "van-divider": {
              "lc-mark": "",
              "content-position": "right",
              "lc_id": "07IIi1+FZz",
              "__children": [],
              "__text__": "文字"
            },
            "__key__": "__children"
          }, {
            "van-divider": {
              "lc-mark": "",
              ":style": "{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }",
              "lc_id": "UtOxHb5Qfg",
              "__children": [],
              "__text__": "文字"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "T6tvspYttI",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "tQEA1/gYgR",
              "__children": [],
              "__text__": "Empty 空状态"
            },
            "__key__": "__children"
          }, {
            "van-empty": {
              "image": "error",
              "lc-mark": "",
              "description": "描述文字",
              "lc_id": "LT8YsAR9bR",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-empty": {
              "image": "network",
              "lc-mark": "",
              "description": "描述文字",
              "lc_id": "4Y26THSVSF",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-empty": {
              "image": "search",
              "lc-mark": "",
              "description": "描述文字",
              "lc_id": "XG4M0i9r7v",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "7cp54ntFq/",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "NlDW984NIX",
              "__children": [],
              "__text__": "List 列表"
            },
            "__key__": "__children"
          }, {
            "van-list": {
              "v-model": "loading",
              ":finished": "finished",
              "lc-mark": "",
              "finished-text": "没有更多了",
              "@load": "onLoad",
              "lc_id": "lPqQztunQp",
              "__children": [{
                "van-cell": {
                  "v-for": "item in list",
                  ":key": "item",
                  ":title": "item",
                  "lc_id": "5KzyZuonQL",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "sl50gl586K",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "2fzVlX0csX",
              "__children": [],
              "__text__": "NoticeBar 通知栏"
            },
            "__key__": "__children"
          }, {
            "van-notice-bar": {
              "left-icon": "volume-o",
              "lc-mark": "",
              "text": "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
              "lc_id": "k61bYFFVQm",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-notice-bar": {
              "scrollable": "",
              "text": "技术是开发它的人的共同灵魂。",
              "lc-mark": "",
              "lc_id": "hVnGw6dGn5",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-notice-bar": {
              ":scrollable": "false",
              "text": "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
              "lc-mark": "",
              "lc_id": "xlMfxzUiEv",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "7E/zp4vYl5",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "Z0VWmNgtun",
              "__children": [],
              "__text__": "Progress 进度条"
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "margin: 20px 0",
              "lc_id": "ihlAnxtUTt",
              "__children": [{
                "van-progress": {
                  ":percentage": "50",
                  "lc-mark": "",
                  "lc_id": "iN1Pn4Vd84",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "mllWNtm7WD",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "XU1g37b7Bj",
              "__children": [],
              "__text__": "Skeleton 骨架屏"
            },
            "__key__": "__children"
          }, {
            "van-skeleton": {
              "title": "",
              ":row": "3",
              "lc-mark": "",
              "lc_id": "B9ypSupDLY",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "br": {
              "lc_id": "gJKqa1lhDD",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-skeleton": {
              "title": "",
              "avatar": "",
              ":row": "3",
              "lc-mark": "",
              "lc_id": "LH6oqOei+U",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "H2zy4AGqzd",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "f2BUM74AC2",
              "__children": [],
              "__text__": "Steps 步骤条"
            },
            "__key__": "__children"
          }, {
            "van-steps": {
              ":active": "active",
              "lc-mark": "",
              "lc_id": "wIsGLQipbg",
              "__children": [{
                "van-step": {
                  "lc_id": "wDpEEfwDFg",
                  "__children": [],
                  "__text__": "买家下单"
                },
                "__key__": "__children"
              }, {
                "van-step": {
                  "lc_id": "0uH+uG0y/J",
                  "__children": [],
                  "__text__": "商家接单"
                },
                "__key__": "__children"
              }, {
                "van-step": {
                  "lc_id": "7MxYVitFqU",
                  "__children": [],
                  "__text__": "买家提货"
                },
                "__key__": "__children"
              }, {
                "van-step": {
                  "lc_id": "zmTz+icNFP",
                  "__children": [],
                  "__text__": "交易完成"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "van-steps": {
              "direction": "vertical",
              ":active": "0",
              "lc-mark": "",
              "lc_id": "wfouplCxlS",
              "__children": [{
                "van-step": {
                  "lc_id": "IzJ4DePPuF",
                  "__children": [{
                    "h3": {
                      "lc_id": "fM4sXWg+61",
                      "__children": [],
                      "__text__": "【城市】物流状态1"
                    },
                    "__key__": "__children"
                  }, {
                    "p": {
                      "lc_id": "plNiYCktIK",
                      "__children": [],
                      "__text__": "2016-07-12 12:40"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "van-step": {
                  "lc_id": "EHQFSQQ7XN",
                  "__children": [{
                    "h3": {
                      "lc_id": "+coqZkw2U2",
                      "__children": [],
                      "__text__": "【城市】物流状态2"
                    },
                    "__key__": "__children"
                  }, {
                    "p": {
                      "lc_id": "lNLIsZhFdm",
                      "__children": [],
                      "__text__": "2016-07-11 10:00"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "van-step": {
                  "lc_id": "6L725lSdnl",
                  "__children": [{
                    "h3": {
                      "lc_id": "wYQrSnGkOm",
                      "__children": [],
                      "__text__": "快件已发货"
                    },
                    "__key__": "__children"
                  }, {
                    "p": {
                      "lc_id": "EAMHuHntXW",
                      "__children": [],
                      "__text__": "2016-07-10 09:30"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "ag50o0J0rJ",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "ZKGeQcO9+f",
              "__children": [],
              "__text__": "Swipe 轮播"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "hGMjfspfr6",
              "__children": [{
                "van-swipe": {
                  "lc-mark": "",
                  "class": "my-swipe",
                  ":autoplay": "3000",
                  "indicator-color": "white",
                  "lc_id": "vAbfSeM0cO",
                  "__children": [{
                    "van-swipe-item": {
                      "lc_id": "kO0d+y55zE",
                      "__children": [],
                      "__text__": "1"
                    },
                    "__key__": "__children"
                  }, {
                    "van-swipe-item": {
                      "lc_id": "WME2UWPHDF",
                      "__children": [],
                      "__text__": "2"
                    },
                    "__key__": "__children"
                  }, {
                    "van-swipe-item": {
                      "lc_id": "ze6m85Fe/y",
                      "__children": [],
                      "__text__": "3"
                    },
                    "__key__": "__children"
                  }, {
                    "van-swipe-item": {
                      "lc_id": "ugTofY2Spf",
                      "__children": [],
                      "__text__": "4"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "bVMFhQWWZi": {
    "div": {
      "lc_id": "bVMFhQWWZi",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "aksDVgfMhj",
          "__children": [],
          "__text__": "Collapse 折叠面板"
        },
        "__key__": "__children"
      }, {
        "van-collapse": {
          "v-model": "activeNames",
          "lc-mark": "",
          "lc_id": "npKi1y5bk5",
          "__children": [{
            "van-collapse-item": {
              "title": "标题1",
              "name": "1",
              "lc_id": "wlqZiTcBQn",
              "__children": [],
              "__text__": "内容"
            },
            "__key__": "__children"
          }, {
            "van-collapse-item": {
              "title": "标题2",
              "name": "2",
              "lc_id": "lVEmjp4jgU",
              "__children": [],
              "__text__": "内容"
            },
            "__key__": "__children"
          }, {
            "van-collapse-item": {
              "title": "标题3",
              "name": "3",
              "disabled": "",
              "lc_id": "LJVFOApV8X",
              "__children": [],
              "__text__": "内容"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "aksDVgfMhj": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "aksDVgfMhj",
      "__children": [],
      "__text__": "Collapse 折叠面板"
    }
  },
  "npKi1y5bk5": {
    "van-collapse": {
      "v-model": "activeNames",
      "lc-mark": "",
      "lc_id": "npKi1y5bk5",
      "__children": [{
        "van-collapse-item": {
          "title": "标题1",
          "name": "1",
          "lc_id": "wlqZiTcBQn",
          "__children": [],
          "__text__": "内容"
        },
        "__key__": "__children"
      }, {
        "van-collapse-item": {
          "title": "标题2",
          "name": "2",
          "lc_id": "lVEmjp4jgU",
          "__children": [],
          "__text__": "内容"
        },
        "__key__": "__children"
      }, {
        "van-collapse-item": {
          "title": "标题3",
          "name": "3",
          "disabled": "",
          "lc_id": "LJVFOApV8X",
          "__children": [],
          "__text__": "内容"
        },
        "__key__": "__children"
      }]
    }
  },
  "wlqZiTcBQn": {
    "van-collapse-item": {
      "title": "标题1",
      "name": "1",
      "lc_id": "wlqZiTcBQn",
      "__children": [],
      "__text__": "内容"
    }
  },
  "lVEmjp4jgU": {
    "van-collapse-item": {
      "title": "标题2",
      "name": "2",
      "lc_id": "lVEmjp4jgU",
      "__children": [],
      "__text__": "内容"
    }
  },
  "LJVFOApV8X": {
    "van-collapse-item": {
      "title": "标题3",
      "name": "3",
      "disabled": "",
      "lc_id": "LJVFOApV8X",
      "__children": [],
      "__text__": "内容"
    }
  },
  "C3lXrwAiNI": {
    "div": {
      "lc_id": "C3lXrwAiNI",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "0boIDS47ol",
          "__children": [],
          "__text__": "CountDown 倒计时"
        },
        "__key__": "__children"
      }, {
        "van-count-down": {
          ":time": "time",
          "lc-mark": "",
          "lc_id": "/EaLzL88MM",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-count-down": {
          ":time": "time",
          "lc-mark": "",
          "format": "DD 天 HH 时 mm 分 ss 秒",
          "lc_id": "lagIK/uwCC",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-count-down": {
          ":time": "time",
          "lc-mark": "",
          "lc_id": "Xyg4NSoxBX",
          "__children": [{
            "template": {
              "#default": "timeData",
              "lc_id": "tPDMWuGJW6",
              "__children": [{
                "span": {
                  "class": "block",
                  "lc_id": "64ZZJDy0a/",
                  "__children": [],
                  "__text__": "{{ timeData.hours }}"
                },
                "__key__": "__children"
              }, {
                "span": {
                  "class": "colon",
                  "lc_id": "uOEZ/JgPc8",
                  "__children": [],
                  "__text__": ":"
                },
                "__key__": "__children"
              }, {
                "span": {
                  "class": "block",
                  "lc_id": "JqxW3i6P8w",
                  "__children": [],
                  "__text__": "{{ timeData.minutes }}"
                },
                "__key__": "__children"
              }, {
                "span": {
                  "class": "colon",
                  "lc_id": "S8yWEUqu8P",
                  "__children": [],
                  "__text__": ":"
                },
                "__key__": "__children"
              }, {
                "span": {
                  "class": "block",
                  "lc_id": "uCI9UGXbjM",
                  "__children": [],
                  "__text__": "{{ timeData.seconds }}"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "0boIDS47ol": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "0boIDS47ol",
      "__children": [],
      "__text__": "CountDown 倒计时"
    }
  },
  "/EaLzL88MM": {
    "van-count-down": {
      ":time": "time",
      "lc-mark": "",
      "lc_id": "/EaLzL88MM",
      "__children": []
    }
  },
  "lagIK/uwCC": {
    "van-count-down": {
      ":time": "time",
      "lc-mark": "",
      "format": "DD 天 HH 时 mm 分 ss 秒",
      "lc_id": "lagIK/uwCC",
      "__children": []
    }
  },
  "Xyg4NSoxBX": {
    "van-count-down": {
      ":time": "time",
      "lc-mark": "",
      "lc_id": "Xyg4NSoxBX",
      "__children": [{
        "template": {
          "#default": "timeData",
          "lc_id": "tPDMWuGJW6",
          "__children": [{
            "span": {
              "class": "block",
              "lc_id": "64ZZJDy0a/",
              "__children": [],
              "__text__": "{{ timeData.hours }}"
            },
            "__key__": "__children"
          }, {
            "span": {
              "class": "colon",
              "lc_id": "uOEZ/JgPc8",
              "__children": [],
              "__text__": ":"
            },
            "__key__": "__children"
          }, {
            "span": {
              "class": "block",
              "lc_id": "JqxW3i6P8w",
              "__children": [],
              "__text__": "{{ timeData.minutes }}"
            },
            "__key__": "__children"
          }, {
            "span": {
              "class": "colon",
              "lc_id": "S8yWEUqu8P",
              "__children": [],
              "__text__": ":"
            },
            "__key__": "__children"
          }, {
            "span": {
              "class": "block",
              "lc_id": "uCI9UGXbjM",
              "__children": [],
              "__text__": "{{ timeData.seconds }}"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "tPDMWuGJW6": {
    "template": {
      "#default": "timeData",
      "lc_id": "tPDMWuGJW6",
      "__children": [{
        "span": {
          "class": "block",
          "lc_id": "64ZZJDy0a/",
          "__children": [],
          "__text__": "{{ timeData.hours }}"
        },
        "__key__": "__children"
      }, {
        "span": {
          "class": "colon",
          "lc_id": "uOEZ/JgPc8",
          "__children": [],
          "__text__": ":"
        },
        "__key__": "__children"
      }, {
        "span": {
          "class": "block",
          "lc_id": "JqxW3i6P8w",
          "__children": [],
          "__text__": "{{ timeData.minutes }}"
        },
        "__key__": "__children"
      }, {
        "span": {
          "class": "colon",
          "lc_id": "S8yWEUqu8P",
          "__children": [],
          "__text__": ":"
        },
        "__key__": "__children"
      }, {
        "span": {
          "class": "block",
          "lc_id": "uCI9UGXbjM",
          "__children": [],
          "__text__": "{{ timeData.seconds }}"
        },
        "__key__": "__children"
      }]
    }
  },
  "64ZZJDy0a/": {
    "span": {
      "class": "block",
      "lc_id": "64ZZJDy0a/",
      "__children": [],
      "__text__": "{{ timeData.hours }}"
    }
  },
  "uOEZ/JgPc8": {
    "span": {
      "class": "colon",
      "lc_id": "uOEZ/JgPc8",
      "__children": [],
      "__text__": ":"
    }
  },
  "JqxW3i6P8w": {
    "span": {
      "class": "block",
      "lc_id": "JqxW3i6P8w",
      "__children": [],
      "__text__": "{{ timeData.minutes }}"
    }
  },
  "S8yWEUqu8P": {
    "span": {
      "class": "colon",
      "lc_id": "S8yWEUqu8P",
      "__children": [],
      "__text__": ":"
    }
  },
  "uCI9UGXbjM": {
    "span": {
      "class": "block",
      "lc_id": "uCI9UGXbjM",
      "__children": [],
      "__text__": "{{ timeData.seconds }}"
    }
  },
  "+TRSEJ64CC": {
    "div": {
      "lc_id": "+TRSEJ64CC",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "uaaKUshda6",
          "__children": [],
          "__text__": "Divider 分割线"
        },
        "__key__": "__children"
      }, {
        "van-divider": {
          "lc-mark": "",
          "lc_id": "O+mmvHZU5g",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-divider": {
          "lc-mark": "",
          "lc_id": "ZFHen1KfO4",
          "__children": [],
          "__text__": "文字"
        },
        "__key__": "__children"
      }, {
        "van-divider": {
          "lc-mark": "",
          "content-position": "left",
          "lc_id": "2YAd2q9KCC",
          "__children": [],
          "__text__": "文字"
        },
        "__key__": "__children"
      }, {
        "van-divider": {
          "lc-mark": "",
          "content-position": "right",
          "lc_id": "07IIi1+FZz",
          "__children": [],
          "__text__": "文字"
        },
        "__key__": "__children"
      }, {
        "van-divider": {
          "lc-mark": "",
          ":style": "{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }",
          "lc_id": "UtOxHb5Qfg",
          "__children": [],
          "__text__": "文字"
        },
        "__key__": "__children"
      }]
    }
  },
  "uaaKUshda6": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "uaaKUshda6",
      "__children": [],
      "__text__": "Divider 分割线"
    }
  },
  "O+mmvHZU5g": {
    "van-divider": {
      "lc-mark": "",
      "lc_id": "O+mmvHZU5g",
      "__children": []
    }
  },
  "ZFHen1KfO4": {
    "van-divider": {
      "lc-mark": "",
      "lc_id": "ZFHen1KfO4",
      "__children": [],
      "__text__": "文字"
    }
  },
  "2YAd2q9KCC": {
    "van-divider": {
      "lc-mark": "",
      "content-position": "left",
      "lc_id": "2YAd2q9KCC",
      "__children": [],
      "__text__": "文字"
    }
  },
  "07IIi1+FZz": {
    "van-divider": {
      "lc-mark": "",
      "content-position": "right",
      "lc_id": "07IIi1+FZz",
      "__children": [],
      "__text__": "文字"
    }
  },
  "UtOxHb5Qfg": {
    "van-divider": {
      "lc-mark": "",
      ":style": "{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }",
      "lc_id": "UtOxHb5Qfg",
      "__children": [],
      "__text__": "文字"
    }
  },
  "T6tvspYttI": {
    "div": {
      "lc_id": "T6tvspYttI",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "tQEA1/gYgR",
          "__children": [],
          "__text__": "Empty 空状态"
        },
        "__key__": "__children"
      }, {
        "van-empty": {
          "image": "error",
          "lc-mark": "",
          "description": "描述文字",
          "lc_id": "LT8YsAR9bR",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-empty": {
          "image": "network",
          "lc-mark": "",
          "description": "描述文字",
          "lc_id": "4Y26THSVSF",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-empty": {
          "image": "search",
          "lc-mark": "",
          "description": "描述文字",
          "lc_id": "XG4M0i9r7v",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "tQEA1/gYgR": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "tQEA1/gYgR",
      "__children": [],
      "__text__": "Empty 空状态"
    }
  },
  "LT8YsAR9bR": {
    "van-empty": {
      "image": "error",
      "lc-mark": "",
      "description": "描述文字",
      "lc_id": "LT8YsAR9bR",
      "__children": []
    }
  },
  "4Y26THSVSF": {
    "van-empty": {
      "image": "network",
      "lc-mark": "",
      "description": "描述文字",
      "lc_id": "4Y26THSVSF",
      "__children": []
    }
  },
  "XG4M0i9r7v": {
    "van-empty": {
      "image": "search",
      "lc-mark": "",
      "description": "描述文字",
      "lc_id": "XG4M0i9r7v",
      "__children": []
    }
  },
  "7cp54ntFq/": {
    "div": {
      "lc_id": "7cp54ntFq/",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "NlDW984NIX",
          "__children": [],
          "__text__": "List 列表"
        },
        "__key__": "__children"
      }, {
        "van-list": {
          "v-model": "loading",
          ":finished": "finished",
          "lc-mark": "",
          "finished-text": "没有更多了",
          "@load": "onLoad",
          "lc_id": "lPqQztunQp",
          "__children": [{
            "van-cell": {
              "v-for": "item in list",
              ":key": "item",
              ":title": "item",
              "lc_id": "5KzyZuonQL",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "NlDW984NIX": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "NlDW984NIX",
      "__children": [],
      "__text__": "List 列表"
    }
  },
  "lPqQztunQp": {
    "van-list": {
      "v-model": "loading",
      ":finished": "finished",
      "lc-mark": "",
      "finished-text": "没有更多了",
      "@load": "onLoad",
      "lc_id": "lPqQztunQp",
      "__children": [{
        "van-cell": {
          "v-for": "item in list",
          ":key": "item",
          ":title": "item",
          "lc_id": "5KzyZuonQL",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "5KzyZuonQL": {
    "van-cell": {
      "v-for": "item in list",
      ":key": "item",
      ":title": "item",
      "lc_id": "5KzyZuonQL",
      "__children": []
    }
  },
  "sl50gl586K": {
    "div": {
      "lc_id": "sl50gl586K",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "2fzVlX0csX",
          "__children": [],
          "__text__": "NoticeBar 通知栏"
        },
        "__key__": "__children"
      }, {
        "van-notice-bar": {
          "left-icon": "volume-o",
          "lc-mark": "",
          "text": "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
          "lc_id": "k61bYFFVQm",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-notice-bar": {
          "scrollable": "",
          "text": "技术是开发它的人的共同灵魂。",
          "lc-mark": "",
          "lc_id": "hVnGw6dGn5",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-notice-bar": {
          ":scrollable": "false",
          "text": "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
          "lc-mark": "",
          "lc_id": "xlMfxzUiEv",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "2fzVlX0csX": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "2fzVlX0csX",
      "__children": [],
      "__text__": "NoticeBar 通知栏"
    }
  },
  "k61bYFFVQm": {
    "van-notice-bar": {
      "left-icon": "volume-o",
      "lc-mark": "",
      "text": "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
      "lc_id": "k61bYFFVQm",
      "__children": []
    }
  },
  "hVnGw6dGn5": {
    "van-notice-bar": {
      "scrollable": "",
      "text": "技术是开发它的人的共同灵魂。",
      "lc-mark": "",
      "lc_id": "hVnGw6dGn5",
      "__children": []
    }
  },
  "xlMfxzUiEv": {
    "van-notice-bar": {
      ":scrollable": "false",
      "text": "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
      "lc-mark": "",
      "lc_id": "xlMfxzUiEv",
      "__children": []
    }
  },
  "7E/zp4vYl5": {
    "div": {
      "lc_id": "7E/zp4vYl5",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "Z0VWmNgtun",
          "__children": [],
          "__text__": "Progress 进度条"
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "margin: 20px 0",
          "lc_id": "ihlAnxtUTt",
          "__children": [{
            "van-progress": {
              ":percentage": "50",
              "lc-mark": "",
              "lc_id": "iN1Pn4Vd84",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "Z0VWmNgtun": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "Z0VWmNgtun",
      "__children": [],
      "__text__": "Progress 进度条"
    }
  },
  "ihlAnxtUTt": {
    "div": {
      "style": "margin: 20px 0",
      "lc_id": "ihlAnxtUTt",
      "__children": [{
        "van-progress": {
          ":percentage": "50",
          "lc-mark": "",
          "lc_id": "iN1Pn4Vd84",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "iN1Pn4Vd84": {
    "van-progress": {
      ":percentage": "50",
      "lc-mark": "",
      "lc_id": "iN1Pn4Vd84",
      "__children": []
    }
  },
  "mllWNtm7WD": {
    "div": {
      "lc_id": "mllWNtm7WD",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "XU1g37b7Bj",
          "__children": [],
          "__text__": "Skeleton 骨架屏"
        },
        "__key__": "__children"
      }, {
        "van-skeleton": {
          "title": "",
          ":row": "3",
          "lc-mark": "",
          "lc_id": "B9ypSupDLY",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "br": {
          "lc_id": "gJKqa1lhDD",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-skeleton": {
          "title": "",
          "avatar": "",
          ":row": "3",
          "lc-mark": "",
          "lc_id": "LH6oqOei+U",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "XU1g37b7Bj": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "XU1g37b7Bj",
      "__children": [],
      "__text__": "Skeleton 骨架屏"
    }
  },
  "B9ypSupDLY": {
    "van-skeleton": {
      "title": "",
      ":row": "3",
      "lc-mark": "",
      "lc_id": "B9ypSupDLY",
      "__children": []
    }
  },
  "gJKqa1lhDD": {
    "br": {
      "lc_id": "gJKqa1lhDD",
      "__children": []
    }
  },
  "LH6oqOei+U": {
    "van-skeleton": {
      "title": "",
      "avatar": "",
      ":row": "3",
      "lc-mark": "",
      "lc_id": "LH6oqOei+U",
      "__children": []
    }
  },
  "H2zy4AGqzd": {
    "div": {
      "lc_id": "H2zy4AGqzd",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "f2BUM74AC2",
          "__children": [],
          "__text__": "Steps 步骤条"
        },
        "__key__": "__children"
      }, {
        "van-steps": {
          ":active": "active",
          "lc-mark": "",
          "lc_id": "wIsGLQipbg",
          "__children": [{
            "van-step": {
              "lc_id": "wDpEEfwDFg",
              "__children": [],
              "__text__": "买家下单"
            },
            "__key__": "__children"
          }, {
            "van-step": {
              "lc_id": "0uH+uG0y/J",
              "__children": [],
              "__text__": "商家接单"
            },
            "__key__": "__children"
          }, {
            "van-step": {
              "lc_id": "7MxYVitFqU",
              "__children": [],
              "__text__": "买家提货"
            },
            "__key__": "__children"
          }, {
            "van-step": {
              "lc_id": "zmTz+icNFP",
              "__children": [],
              "__text__": "交易完成"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "van-steps": {
          "direction": "vertical",
          ":active": "0",
          "lc-mark": "",
          "lc_id": "wfouplCxlS",
          "__children": [{
            "van-step": {
              "lc_id": "IzJ4DePPuF",
              "__children": [{
                "h3": {
                  "lc_id": "fM4sXWg+61",
                  "__children": [],
                  "__text__": "【城市】物流状态1"
                },
                "__key__": "__children"
              }, {
                "p": {
                  "lc_id": "plNiYCktIK",
                  "__children": [],
                  "__text__": "2016-07-12 12:40"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "van-step": {
              "lc_id": "EHQFSQQ7XN",
              "__children": [{
                "h3": {
                  "lc_id": "+coqZkw2U2",
                  "__children": [],
                  "__text__": "【城市】物流状态2"
                },
                "__key__": "__children"
              }, {
                "p": {
                  "lc_id": "lNLIsZhFdm",
                  "__children": [],
                  "__text__": "2016-07-11 10:00"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "van-step": {
              "lc_id": "6L725lSdnl",
              "__children": [{
                "h3": {
                  "lc_id": "wYQrSnGkOm",
                  "__children": [],
                  "__text__": "快件已发货"
                },
                "__key__": "__children"
              }, {
                "p": {
                  "lc_id": "EAMHuHntXW",
                  "__children": [],
                  "__text__": "2016-07-10 09:30"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "f2BUM74AC2": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "f2BUM74AC2",
      "__children": [],
      "__text__": "Steps 步骤条"
    }
  },
  "wIsGLQipbg": {
    "van-steps": {
      ":active": "active",
      "lc-mark": "",
      "lc_id": "wIsGLQipbg",
      "__children": [{
        "van-step": {
          "lc_id": "wDpEEfwDFg",
          "__children": [],
          "__text__": "买家下单"
        },
        "__key__": "__children"
      }, {
        "van-step": {
          "lc_id": "0uH+uG0y/J",
          "__children": [],
          "__text__": "商家接单"
        },
        "__key__": "__children"
      }, {
        "van-step": {
          "lc_id": "7MxYVitFqU",
          "__children": [],
          "__text__": "买家提货"
        },
        "__key__": "__children"
      }, {
        "van-step": {
          "lc_id": "zmTz+icNFP",
          "__children": [],
          "__text__": "交易完成"
        },
        "__key__": "__children"
      }]
    }
  },
  "wDpEEfwDFg": {
    "van-step": {
      "lc_id": "wDpEEfwDFg",
      "__children": [],
      "__text__": "买家下单"
    }
  },
  "0uH+uG0y/J": {
    "van-step": {
      "lc_id": "0uH+uG0y/J",
      "__children": [],
      "__text__": "商家接单"
    }
  },
  "7MxYVitFqU": {
    "van-step": {
      "lc_id": "7MxYVitFqU",
      "__children": [],
      "__text__": "买家提货"
    }
  },
  "zmTz+icNFP": {
    "van-step": {
      "lc_id": "zmTz+icNFP",
      "__children": [],
      "__text__": "交易完成"
    }
  },
  "wfouplCxlS": {
    "van-steps": {
      "direction": "vertical",
      ":active": "0",
      "lc-mark": "",
      "lc_id": "wfouplCxlS",
      "__children": [{
        "van-step": {
          "lc_id": "IzJ4DePPuF",
          "__children": [{
            "h3": {
              "lc_id": "fM4sXWg+61",
              "__children": [],
              "__text__": "【城市】物流状态1"
            },
            "__key__": "__children"
          }, {
            "p": {
              "lc_id": "plNiYCktIK",
              "__children": [],
              "__text__": "2016-07-12 12:40"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "van-step": {
          "lc_id": "EHQFSQQ7XN",
          "__children": [{
            "h3": {
              "lc_id": "+coqZkw2U2",
              "__children": [],
              "__text__": "【城市】物流状态2"
            },
            "__key__": "__children"
          }, {
            "p": {
              "lc_id": "lNLIsZhFdm",
              "__children": [],
              "__text__": "2016-07-11 10:00"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "van-step": {
          "lc_id": "6L725lSdnl",
          "__children": [{
            "h3": {
              "lc_id": "wYQrSnGkOm",
              "__children": [],
              "__text__": "快件已发货"
            },
            "__key__": "__children"
          }, {
            "p": {
              "lc_id": "EAMHuHntXW",
              "__children": [],
              "__text__": "2016-07-10 09:30"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "IzJ4DePPuF": {
    "van-step": {
      "lc_id": "IzJ4DePPuF",
      "__children": [{
        "h3": {
          "lc_id": "fM4sXWg+61",
          "__children": [],
          "__text__": "【城市】物流状态1"
        },
        "__key__": "__children"
      }, {
        "p": {
          "lc_id": "plNiYCktIK",
          "__children": [],
          "__text__": "2016-07-12 12:40"
        },
        "__key__": "__children"
      }]
    }
  },
  "fM4sXWg+61": {
    "h3": {
      "lc_id": "fM4sXWg+61",
      "__children": [],
      "__text__": "【城市】物流状态1"
    }
  },
  "plNiYCktIK": {
    "p": {
      "lc_id": "plNiYCktIK",
      "__children": [],
      "__text__": "2016-07-12 12:40"
    }
  },
  "EHQFSQQ7XN": {
    "van-step": {
      "lc_id": "EHQFSQQ7XN",
      "__children": [{
        "h3": {
          "lc_id": "+coqZkw2U2",
          "__children": [],
          "__text__": "【城市】物流状态2"
        },
        "__key__": "__children"
      }, {
        "p": {
          "lc_id": "lNLIsZhFdm",
          "__children": [],
          "__text__": "2016-07-11 10:00"
        },
        "__key__": "__children"
      }]
    }
  },
  "+coqZkw2U2": {
    "h3": {
      "lc_id": "+coqZkw2U2",
      "__children": [],
      "__text__": "【城市】物流状态2"
    }
  },
  "lNLIsZhFdm": {
    "p": {
      "lc_id": "lNLIsZhFdm",
      "__children": [],
      "__text__": "2016-07-11 10:00"
    }
  },
  "6L725lSdnl": {
    "van-step": {
      "lc_id": "6L725lSdnl",
      "__children": [{
        "h3": {
          "lc_id": "wYQrSnGkOm",
          "__children": [],
          "__text__": "快件已发货"
        },
        "__key__": "__children"
      }, {
        "p": {
          "lc_id": "EAMHuHntXW",
          "__children": [],
          "__text__": "2016-07-10 09:30"
        },
        "__key__": "__children"
      }]
    }
  },
  "wYQrSnGkOm": {
    "h3": {
      "lc_id": "wYQrSnGkOm",
      "__children": [],
      "__text__": "快件已发货"
    }
  },
  "EAMHuHntXW": {
    "p": {
      "lc_id": "EAMHuHntXW",
      "__children": [],
      "__text__": "2016-07-10 09:30"
    }
  },
  "ag50o0J0rJ": {
    "div": {
      "lc_id": "ag50o0J0rJ",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "ZKGeQcO9+f",
          "__children": [],
          "__text__": "Swipe 轮播"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "hGMjfspfr6",
          "__children": [{
            "van-swipe": {
              "lc-mark": "",
              "class": "my-swipe",
              ":autoplay": "3000",
              "indicator-color": "white",
              "lc_id": "vAbfSeM0cO",
              "__children": [{
                "van-swipe-item": {
                  "lc_id": "kO0d+y55zE",
                  "__children": [],
                  "__text__": "1"
                },
                "__key__": "__children"
              }, {
                "van-swipe-item": {
                  "lc_id": "WME2UWPHDF",
                  "__children": [],
                  "__text__": "2"
                },
                "__key__": "__children"
              }, {
                "van-swipe-item": {
                  "lc_id": "ze6m85Fe/y",
                  "__children": [],
                  "__text__": "3"
                },
                "__key__": "__children"
              }, {
                "van-swipe-item": {
                  "lc_id": "ugTofY2Spf",
                  "__children": [],
                  "__text__": "4"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "ZKGeQcO9+f": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "ZKGeQcO9+f",
      "__children": [],
      "__text__": "Swipe 轮播"
    }
  },
  "hGMjfspfr6": {
    "div": {
      "lc_id": "hGMjfspfr6",
      "__children": [{
        "van-swipe": {
          "lc-mark": "",
          "class": "my-swipe",
          ":autoplay": "3000",
          "indicator-color": "white",
          "lc_id": "vAbfSeM0cO",
          "__children": [{
            "van-swipe-item": {
              "lc_id": "kO0d+y55zE",
              "__children": [],
              "__text__": "1"
            },
            "__key__": "__children"
          }, {
            "van-swipe-item": {
              "lc_id": "WME2UWPHDF",
              "__children": [],
              "__text__": "2"
            },
            "__key__": "__children"
          }, {
            "van-swipe-item": {
              "lc_id": "ze6m85Fe/y",
              "__children": [],
              "__text__": "3"
            },
            "__key__": "__children"
          }, {
            "van-swipe-item": {
              "lc_id": "ugTofY2Spf",
              "__children": [],
              "__text__": "4"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "vAbfSeM0cO": {
    "van-swipe": {
      "lc-mark": "",
      "class": "my-swipe",
      ":autoplay": "3000",
      "indicator-color": "white",
      "lc_id": "vAbfSeM0cO",
      "__children": [{
        "van-swipe-item": {
          "lc_id": "kO0d+y55zE",
          "__children": [],
          "__text__": "1"
        },
        "__key__": "__children"
      }, {
        "van-swipe-item": {
          "lc_id": "WME2UWPHDF",
          "__children": [],
          "__text__": "2"
        },
        "__key__": "__children"
      }, {
        "van-swipe-item": {
          "lc_id": "ze6m85Fe/y",
          "__children": [],
          "__text__": "3"
        },
        "__key__": "__children"
      }, {
        "van-swipe-item": {
          "lc_id": "ugTofY2Spf",
          "__children": [],
          "__text__": "4"
        },
        "__key__": "__children"
      }]
    }
  },
  "kO0d+y55zE": {
    "van-swipe-item": {
      "lc_id": "kO0d+y55zE",
      "__children": [],
      "__text__": "1"
    }
  },
  "WME2UWPHDF": {
    "van-swipe-item": {
      "lc_id": "WME2UWPHDF",
      "__children": [],
      "__text__": "2"
    }
  },
  "ze6m85Fe/y": {
    "van-swipe-item": {
      "lc_id": "ze6m85Fe/y",
      "__children": [],
      "__text__": "3"
    }
  },
  "ugTofY2Spf": {
    "van-swipe-item": {
      "lc_id": "ugTofY2Spf",
      "__children": [],
      "__text__": "4"
    }
  },
  "/u9MrfDUSF": {
    "div": {
      "lc_id": "/u9MrfDUSF",
      "__children": [{
        "div": {
          "lc_id": "elcsTETZKP",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "J+JyznaSGx",
              "__children": [],
              "__text__": "Form 表单"
            },
            "__key__": "__children"
          }, {
            "van-form": {
              "@submit": "onSubmit6",
              "lc-mark": "",
              "lc_id": "Bb6KSvo7iV",
              "__children": [{
                "van-field": {
                  "v-model": "username",
                  "name": "用户名",
                  "label": "用户名",
                  "placeholder": "用户名",
                  ":rules": "[{ required: true, message: '请填写用户名' }]",
                  "lc_id": "cQHslSjUh0",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-field": {
                  "v-model": "password",
                  "type": "password",
                  "name": "密码",
                  "label": "密码",
                  "placeholder": "密码",
                  ":rules": "[{ required: true, message: '请填写密码' }]",
                  "lc_id": "Z62w8chtA6",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "div": {
                  "style": "margin: 16px",
                  "lc_id": "FTIfo2F7fb",
                  "__children": [{
                    "van-button": {
                      "round": "",
                      "block": "",
                      "plain": "",
                      "native-type": "submit",
                      "lc_id": "OnpChGM4FG",
                      "__children": [],
                      "__text__": "提交"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "a6J+tHBXfx",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "3UqmMJaGUs",
              "__children": [],
              "__text__": "Picker 选择器"
            },
            "__key__": "__children"
          }, {
            "van-picker": {
              "title": "标题",
              "show-toolbar": "",
              "lc-mark": "",
              ":columns": "columns",
              "@confirm": "onConfirm",
              "@cancel": "onCancel",
              "@change": "onChange",
              "lc_id": "FbUA+gwYwD",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "FqUz9WN+J4",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "x10zfQk8GP",
              "__children": [],
              "__text__": "Rate 评分"
            },
            "__key__": "__children"
          }, {
            "van-rate": {
              "v-model": "value",
              "lc-mark": "",
              "lc_id": "9Q2B165SWb",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-rate": {
              "v-model": "value",
              "lc-mark": "",
              "icon": "like",
              "void-icon": "like-o",
              "lc_id": "o25A/Nsm+q",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-rate": {
              "v-model": "value",
              ":size": "25",
              "lc-mark": "",
              "color": "#ffd21e",
              "void-icon": "star",
              "void-color": "#eee",
              "lc_id": "udpZtvnYaM",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "aYGRCZj0NF",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "beXwEGxE8d",
              "__children": [],
              "__text__": "Search 搜索"
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "padding: 10px 0",
              "lc_id": "X0fmlZxEoc",
              "__children": [{
                "van-search": {
                  "v-model": "search",
                  "lc-mark": "",
                  "placeholder": "请输入搜索关键词",
                  "lc_id": "fiUNBFaJfb",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "xACj+8KsPj",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "SZ2gOWJLtH",
              "__children": [],
              "__text__": "Slider 滑块"
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "margin: 10px",
              "lc_id": "3tMNXghyqk",
              "__children": [{
                "van-slider": {
                  "v-model": "slideValue",
                  "@change": "onChange",
                  "lc-mark": "",
                  "lc_id": "+KskhfWNet",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "yx9fIH6YT1",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "/DC9chV2f8",
              "__children": [],
              "__text__": "Stepper 步进器"
            },
            "__key__": "__children"
          }, {
            "van-stepper": {
              "lc-mark": "",
              "v-model": "stepValue",
              "lc_id": "dG2w3gK8iM",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "bRF7t/PiSs",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "p4NWwVwgEJ",
              "__children": [],
              "__text__": "Switch 开关"
            },
            "__key__": "__children"
          }, {
            "van-switch": {
              "v-model": "checked",
              "lc-mark": "",
              "lc_id": "Puwkg/BZL3",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "FLUufSgaoY",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "ljrW/4PCCr",
              "__children": [],
              "__text__": "Uploader 文件上传"
            },
            "__key__": "__children"
          }, {
            "van-uploader": {
              ":after-read": "afterRead",
              "lc-mark": "",
              "lc_id": "vfLysz9Um7",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "elcsTETZKP": {
    "div": {
      "lc_id": "elcsTETZKP",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "J+JyznaSGx",
          "__children": [],
          "__text__": "Form 表单"
        },
        "__key__": "__children"
      }, {
        "van-form": {
          "@submit": "onSubmit6",
          "lc-mark": "",
          "lc_id": "Bb6KSvo7iV",
          "__children": [{
            "van-field": {
              "v-model": "username",
              "name": "用户名",
              "label": "用户名",
              "placeholder": "用户名",
              ":rules": "[{ required: true, message: '请填写用户名' }]",
              "lc_id": "cQHslSjUh0",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-field": {
              "v-model": "password",
              "type": "password",
              "name": "密码",
              "label": "密码",
              "placeholder": "密码",
              ":rules": "[{ required: true, message: '请填写密码' }]",
              "lc_id": "Z62w8chtA6",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "margin: 16px",
              "lc_id": "FTIfo2F7fb",
              "__children": [{
                "van-button": {
                  "round": "",
                  "block": "",
                  "plain": "",
                  "native-type": "submit",
                  "lc_id": "OnpChGM4FG",
                  "__children": [],
                  "__text__": "提交"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "J+JyznaSGx": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "J+JyznaSGx",
      "__children": [],
      "__text__": "Form 表单"
    }
  },
  "Bb6KSvo7iV": {
    "van-form": {
      "@submit": "onSubmit6",
      "lc-mark": "",
      "lc_id": "Bb6KSvo7iV",
      "__children": [{
        "van-field": {
          "v-model": "username",
          "name": "用户名",
          "label": "用户名",
          "placeholder": "用户名",
          ":rules": "[{ required: true, message: '请填写用户名' }]",
          "lc_id": "cQHslSjUh0",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-field": {
          "v-model": "password",
          "type": "password",
          "name": "密码",
          "label": "密码",
          "placeholder": "密码",
          ":rules": "[{ required: true, message: '请填写密码' }]",
          "lc_id": "Z62w8chtA6",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "margin: 16px",
          "lc_id": "FTIfo2F7fb",
          "__children": [{
            "van-button": {
              "round": "",
              "block": "",
              "plain": "",
              "native-type": "submit",
              "lc_id": "OnpChGM4FG",
              "__children": [],
              "__text__": "提交"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "cQHslSjUh0": {
    "van-field": {
      "v-model": "username",
      "name": "用户名",
      "label": "用户名",
      "placeholder": "用户名",
      ":rules": "[{ required: true, message: '请填写用户名' }]",
      "lc_id": "cQHslSjUh0",
      "__children": []
    }
  },
  "Z62w8chtA6": {
    "van-field": {
      "v-model": "password",
      "type": "password",
      "name": "密码",
      "label": "密码",
      "placeholder": "密码",
      ":rules": "[{ required: true, message: '请填写密码' }]",
      "lc_id": "Z62w8chtA6",
      "__children": []
    }
  },
  "FTIfo2F7fb": {
    "div": {
      "style": "margin: 16px",
      "lc_id": "FTIfo2F7fb",
      "__children": [{
        "van-button": {
          "round": "",
          "block": "",
          "plain": "",
          "native-type": "submit",
          "lc_id": "OnpChGM4FG",
          "__children": [],
          "__text__": "提交"
        },
        "__key__": "__children"
      }]
    }
  },
  "OnpChGM4FG": {
    "van-button": {
      "round": "",
      "block": "",
      "plain": "",
      "native-type": "submit",
      "lc_id": "OnpChGM4FG",
      "__children": [],
      "__text__": "提交"
    }
  },
  "a6J+tHBXfx": {
    "div": {
      "lc_id": "a6J+tHBXfx",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "3UqmMJaGUs",
          "__children": [],
          "__text__": "Picker 选择器"
        },
        "__key__": "__children"
      }, {
        "van-picker": {
          "title": "标题",
          "show-toolbar": "",
          "lc-mark": "",
          ":columns": "columns",
          "@confirm": "onConfirm",
          "@cancel": "onCancel",
          "@change": "onChange",
          "lc_id": "FbUA+gwYwD",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "3UqmMJaGUs": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "3UqmMJaGUs",
      "__children": [],
      "__text__": "Picker 选择器"
    }
  },
  "FbUA+gwYwD": {
    "van-picker": {
      "title": "标题",
      "show-toolbar": "",
      "lc-mark": "",
      ":columns": "columns",
      "@confirm": "onConfirm",
      "@cancel": "onCancel",
      "@change": "onChange",
      "lc_id": "FbUA+gwYwD",
      "__children": []
    }
  },
  "FqUz9WN+J4": {
    "div": {
      "lc_id": "FqUz9WN+J4",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "x10zfQk8GP",
          "__children": [],
          "__text__": "Rate 评分"
        },
        "__key__": "__children"
      }, {
        "van-rate": {
          "v-model": "value",
          "lc-mark": "",
          "lc_id": "9Q2B165SWb",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-rate": {
          "v-model": "value",
          "lc-mark": "",
          "icon": "like",
          "void-icon": "like-o",
          "lc_id": "o25A/Nsm+q",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-rate": {
          "v-model": "value",
          ":size": "25",
          "lc-mark": "",
          "color": "#ffd21e",
          "void-icon": "star",
          "void-color": "#eee",
          "lc_id": "udpZtvnYaM",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "x10zfQk8GP": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "x10zfQk8GP",
      "__children": [],
      "__text__": "Rate 评分"
    }
  },
  "9Q2B165SWb": {
    "van-rate": {
      "v-model": "value",
      "lc-mark": "",
      "lc_id": "9Q2B165SWb",
      "__children": []
    }
  },
  "o25A/Nsm+q": {
    "van-rate": {
      "v-model": "value",
      "lc-mark": "",
      "icon": "like",
      "void-icon": "like-o",
      "lc_id": "o25A/Nsm+q",
      "__children": []
    }
  },
  "udpZtvnYaM": {
    "van-rate": {
      "v-model": "value",
      ":size": "25",
      "lc-mark": "",
      "color": "#ffd21e",
      "void-icon": "star",
      "void-color": "#eee",
      "lc_id": "udpZtvnYaM",
      "__children": []
    }
  },
  "aYGRCZj0NF": {
    "div": {
      "lc_id": "aYGRCZj0NF",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "beXwEGxE8d",
          "__children": [],
          "__text__": "Search 搜索"
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "padding: 10px 0",
          "lc_id": "X0fmlZxEoc",
          "__children": [{
            "van-search": {
              "v-model": "search",
              "lc-mark": "",
              "placeholder": "请输入搜索关键词",
              "lc_id": "fiUNBFaJfb",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "beXwEGxE8d": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "beXwEGxE8d",
      "__children": [],
      "__text__": "Search 搜索"
    }
  },
  "X0fmlZxEoc": {
    "div": {
      "style": "padding: 10px 0",
      "lc_id": "X0fmlZxEoc",
      "__children": [{
        "van-search": {
          "v-model": "search",
          "lc-mark": "",
          "placeholder": "请输入搜索关键词",
          "lc_id": "fiUNBFaJfb",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "fiUNBFaJfb": {
    "van-search": {
      "v-model": "search",
      "lc-mark": "",
      "placeholder": "请输入搜索关键词",
      "lc_id": "fiUNBFaJfb",
      "__children": []
    }
  },
  "xACj+8KsPj": {
    "div": {
      "lc_id": "xACj+8KsPj",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "SZ2gOWJLtH",
          "__children": [],
          "__text__": "Slider 滑块"
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "margin: 10px",
          "lc_id": "3tMNXghyqk",
          "__children": [{
            "van-slider": {
              "v-model": "slideValue",
              "@change": "onChange",
              "lc-mark": "",
              "lc_id": "+KskhfWNet",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "SZ2gOWJLtH": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "SZ2gOWJLtH",
      "__children": [],
      "__text__": "Slider 滑块"
    }
  },
  "3tMNXghyqk": {
    "div": {
      "style": "margin: 10px",
      "lc_id": "3tMNXghyqk",
      "__children": [{
        "van-slider": {
          "v-model": "slideValue",
          "@change": "onChange",
          "lc-mark": "",
          "lc_id": "+KskhfWNet",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "+KskhfWNet": {
    "van-slider": {
      "v-model": "slideValue",
      "@change": "onChange",
      "lc-mark": "",
      "lc_id": "+KskhfWNet",
      "__children": []
    }
  },
  "yx9fIH6YT1": {
    "div": {
      "lc_id": "yx9fIH6YT1",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "/DC9chV2f8",
          "__children": [],
          "__text__": "Stepper 步进器"
        },
        "__key__": "__children"
      }, {
        "van-stepper": {
          "lc-mark": "",
          "v-model": "stepValue",
          "lc_id": "dG2w3gK8iM",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "/DC9chV2f8": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "/DC9chV2f8",
      "__children": [],
      "__text__": "Stepper 步进器"
    }
  },
  "dG2w3gK8iM": {
    "van-stepper": {
      "lc-mark": "",
      "v-model": "stepValue",
      "lc_id": "dG2w3gK8iM",
      "__children": []
    }
  },
  "bRF7t/PiSs": {
    "div": {
      "lc_id": "bRF7t/PiSs",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "p4NWwVwgEJ",
          "__children": [],
          "__text__": "Switch 开关"
        },
        "__key__": "__children"
      }, {
        "van-switch": {
          "v-model": "checked",
          "lc-mark": "",
          "lc_id": "Puwkg/BZL3",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "p4NWwVwgEJ": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "p4NWwVwgEJ",
      "__children": [],
      "__text__": "Switch 开关"
    }
  },
  "Puwkg/BZL3": {
    "van-switch": {
      "v-model": "checked",
      "lc-mark": "",
      "lc_id": "Puwkg/BZL3",
      "__children": []
    }
  },
  "FLUufSgaoY": {
    "div": {
      "lc_id": "FLUufSgaoY",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "ljrW/4PCCr",
          "__children": [],
          "__text__": "Uploader 文件上传"
        },
        "__key__": "__children"
      }, {
        "van-uploader": {
          ":after-read": "afterRead",
          "lc-mark": "",
          "lc_id": "vfLysz9Um7",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "ljrW/4PCCr": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "ljrW/4PCCr",
      "__children": [],
      "__text__": "Uploader 文件上传"
    }
  },
  "vfLysz9Um7": {
    "van-uploader": {
      ":after-read": "afterRead",
      "lc-mark": "",
      "lc_id": "vfLysz9Um7",
      "__children": []
    }
  },
  "fQEAdgBTN1": {
    "div": {
      "lc_id": "fQEAdgBTN1",
      "__children": [{
        "div": {
          "lc_id": "m1u4gZJq0G",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "XkrSmnFhSd",
              "__children": [],
              "__text__": "Icon 图标"
            },
            "__key__": "__children"
          }, {
            "van-icon": {
              "lc-mark": "",
              "class": "icon-c",
              "name": "chat-o",
              "lc_id": "hAFJmwR+W5",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-icon": {
              "lc-mark": "",
              "class": "icon-c",
              "name": "https://b.yzcdn.cn/vant/icon-demo-1126.png",
              "lc_id": "LWUy/mK0g3",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-icon": {
              "lc-mark": "",
              "class": "icon-c",
              "name": "chat-o",
              "dot": "",
              "lc_id": "TLp3uMYtba",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-icon": {
              "lc-mark": "",
              "class": "icon-c",
              "name": "chat-o",
              "badge": "9",
              "lc_id": "mHZSrd9UI8",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-icon": {
              "lc-mark": "",
              "class": "icon-c",
              "name": "chat-o",
              "badge": "99+",
              "lc_id": "2fxRon5qER",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-icon": {
              "lc-mark": "",
              "class": "icon-c",
              "name": "chat-o",
              "color": "#1989fa",
              "lc_id": "Fnr+GiGmOd",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-icon": {
              "lc-mark": "",
              "class": "icon-c",
              "name": "chat-o",
              "color": "#07c160",
              "lc_id": "ZkMYCkbTSh",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-icon": {
              "lc-mark": "",
              "class": "icon-c",
              "name": "chat-o",
              "size": "40",
              "lc_id": "iaAB8jHgYk",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-icon": {
              "lc-mark": "",
              "class": "icon-c",
              "name": "chat-o",
              "size": "3rem",
              "lc_id": "lOFApDm4Xl",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "owULuWxte2",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "mDpsujAB1h",
              "__children": [],
              "__text__": "Image 图片"
            },
            "__key__": "__children"
          }, {
            "van-image": {
              "width": "100",
              "lc-mark": "",
              "height": "100",
              "src": "https://img.yzcdn.cn/vant/cat.jpeg",
              "lc_id": "5y86cWjjuo",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "m1u4gZJq0G": {
    "div": {
      "lc_id": "m1u4gZJq0G",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "XkrSmnFhSd",
          "__children": [],
          "__text__": "Icon 图标"
        },
        "__key__": "__children"
      }, {
        "van-icon": {
          "lc-mark": "",
          "class": "icon-c",
          "name": "chat-o",
          "lc_id": "hAFJmwR+W5",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-icon": {
          "lc-mark": "",
          "class": "icon-c",
          "name": "https://b.yzcdn.cn/vant/icon-demo-1126.png",
          "lc_id": "LWUy/mK0g3",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-icon": {
          "lc-mark": "",
          "class": "icon-c",
          "name": "chat-o",
          "dot": "",
          "lc_id": "TLp3uMYtba",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-icon": {
          "lc-mark": "",
          "class": "icon-c",
          "name": "chat-o",
          "badge": "9",
          "lc_id": "mHZSrd9UI8",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-icon": {
          "lc-mark": "",
          "class": "icon-c",
          "name": "chat-o",
          "badge": "99+",
          "lc_id": "2fxRon5qER",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-icon": {
          "lc-mark": "",
          "class": "icon-c",
          "name": "chat-o",
          "color": "#1989fa",
          "lc_id": "Fnr+GiGmOd",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-icon": {
          "lc-mark": "",
          "class": "icon-c",
          "name": "chat-o",
          "color": "#07c160",
          "lc_id": "ZkMYCkbTSh",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-icon": {
          "lc-mark": "",
          "class": "icon-c",
          "name": "chat-o",
          "size": "40",
          "lc_id": "iaAB8jHgYk",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-icon": {
          "lc-mark": "",
          "class": "icon-c",
          "name": "chat-o",
          "size": "3rem",
          "lc_id": "lOFApDm4Xl",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "XkrSmnFhSd": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "XkrSmnFhSd",
      "__children": [],
      "__text__": "Icon 图标"
    }
  },
  "hAFJmwR+W5": {
    "van-icon": {
      "lc-mark": "",
      "class": "icon-c",
      "name": "chat-o",
      "lc_id": "hAFJmwR+W5",
      "__children": []
    }
  },
  "LWUy/mK0g3": {
    "van-icon": {
      "lc-mark": "",
      "class": "icon-c",
      "name": "https://b.yzcdn.cn/vant/icon-demo-1126.png",
      "lc_id": "LWUy/mK0g3",
      "__children": []
    }
  },
  "TLp3uMYtba": {
    "van-icon": {
      "lc-mark": "",
      "class": "icon-c",
      "name": "chat-o",
      "dot": "",
      "lc_id": "TLp3uMYtba",
      "__children": []
    }
  },
  "mHZSrd9UI8": {
    "van-icon": {
      "lc-mark": "",
      "class": "icon-c",
      "name": "chat-o",
      "badge": "9",
      "lc_id": "mHZSrd9UI8",
      "__children": []
    }
  },
  "2fxRon5qER": {
    "van-icon": {
      "lc-mark": "",
      "class": "icon-c",
      "name": "chat-o",
      "badge": "99+",
      "lc_id": "2fxRon5qER",
      "__children": []
    }
  },
  "Fnr+GiGmOd": {
    "van-icon": {
      "lc-mark": "",
      "class": "icon-c",
      "name": "chat-o",
      "color": "#1989fa",
      "lc_id": "Fnr+GiGmOd",
      "__children": []
    }
  },
  "ZkMYCkbTSh": {
    "van-icon": {
      "lc-mark": "",
      "class": "icon-c",
      "name": "chat-o",
      "color": "#07c160",
      "lc_id": "ZkMYCkbTSh",
      "__children": []
    }
  },
  "iaAB8jHgYk": {
    "van-icon": {
      "lc-mark": "",
      "class": "icon-c",
      "name": "chat-o",
      "size": "40",
      "lc_id": "iaAB8jHgYk",
      "__children": []
    }
  },
  "lOFApDm4Xl": {
    "van-icon": {
      "lc-mark": "",
      "class": "icon-c",
      "name": "chat-o",
      "size": "3rem",
      "lc_id": "lOFApDm4Xl",
      "__children": []
    }
  },
  "owULuWxte2": {
    "div": {
      "lc_id": "owULuWxte2",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "mDpsujAB1h",
          "__children": [],
          "__text__": "Image 图片"
        },
        "__key__": "__children"
      }, {
        "van-image": {
          "width": "100",
          "lc-mark": "",
          "height": "100",
          "src": "https://img.yzcdn.cn/vant/cat.jpeg",
          "lc_id": "5y86cWjjuo",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "mDpsujAB1h": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "mDpsujAB1h",
      "__children": [],
      "__text__": "Image 图片"
    }
  },
  "5y86cWjjuo": {
    "van-image": {
      "width": "100",
      "lc-mark": "",
      "height": "100",
      "src": "https://img.yzcdn.cn/vant/cat.jpeg",
      "lc_id": "5y86cWjjuo",
      "__children": []
    }
  },
  "m5KY8rTxt1": {
    "div": {
      "lc_id": "m5KY8rTxt1",
      "__children": [{
        "div": {
          "lc_id": "5CmAJnEb1P",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "SM70eEXO+9",
              "__children": [],
              "__text__": "Field 输入框"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "style": "padding: 10px;",
              "lc_id": "f/reOjq1IJ",
              "__children": [{
                "van-field": {
                  "lc-mark": "",
                  "v-model": "text",
                  "label": "文本",
                  "lc_id": "DIxZNSoiax",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-field": {
                  "lc-mark": "",
                  "v-model": "tel",
                  "type": "tel",
                  "label": "手机号",
                  "lc_id": "mmGmLLyGW5",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-field": {
                  "lc-mark": "",
                  "v-model": "digit",
                  "type": "digit",
                  "label": "整数",
                  "lc_id": "T+vzBFNZhS",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-field": {
                  "lc-mark": "",
                  "v-model": "number",
                  "type": "number",
                  "label": "数字",
                  "lc_id": "O36q2Fx7Xv",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-field": {
                  "lc-mark": "",
                  "v-model": "password",
                  "type": "password",
                  "label": "密码",
                  "lc_id": "dk6ah1vXDq",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "L5fPGRqjYZ",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "3qMdltHE4i",
              "__children": [],
              "__text__": "DatetimePicker 时间选择 ❌"
            },
            "__key__": "__children"
          }, {
            "van-datetime-picker": {
              "v-model": "currentDate",
              "type": "date",
              "title": "选择年月日",
              "lc-mark": "",
              ":min-date": "minDate",
              ":max-date": "maxDate",
              "lc_id": "14vPN9ntBV",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "ODgqdaL6ED",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "hrPSBFZ6Hh",
              "__children": [],
              "__text__": "Checkbox 复选框"
            },
            "__key__": "__children"
          }, {
            "van-checkbox-group": {
              "lc-mark": "",
              "v-model": "result",
              "lc_id": "F2p5QIbo3W",
              "__children": [{
                "van-checkbox": {
                  "name": "a",
                  "lc_id": "90jCPURt8o",
                  "__children": [],
                  "__text__": "复选框 a"
                },
                "__key__": "__children"
              }, {
                "van-checkbox": {
                  "lc-mark": "",
                  "name": "b",
                  "lc_id": "bvtnBJfQnk",
                  "__children": [],
                  "__text__": "复选框 b"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "V9/vkUb/HX",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "hnZi6s2mpt",
              "__children": [],
              "__text__": "Checkbox 复选框(全选与反选)"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc-mark": "",
              "lc_id": "JHg6xi7Ws5",
              "__children": [{
                "van-checkbox-group": {
                  "v-model": "result",
                  "ref": "checkboxGroup",
                  "lc_id": "8EUt8S6cIj",
                  "__children": [{
                    "van-checkbox": {
                      "name": "a",
                      "lc_id": "vAZDx+cKaQ",
                      "__children": [],
                      "__text__": "复选框 a"
                    },
                    "__key__": "__children"
                  }, {
                    "van-checkbox": {
                      "name": "b",
                      "lc_id": "lNhFITM1W/",
                      "__children": [],
                      "__text__": "复选框 b"
                    },
                    "__key__": "__children"
                  }, {
                    "van-checkbox": {
                      "lc-mark": "",
                      "name": "c",
                      "lc_id": "BVLbIHoPpi",
                      "__children": [],
                      "__text__": "复选框 c"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "br": {
                  "lc_id": "lEi0tbIvkM",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "type": "primary",
                  "size": "small",
                  "@click": "checkAll",
                  "lc_id": "azfVg1jydO",
                  "__children": [],
                  "__text__": "全选"
                },
                "__key__": "__children"
              }, {
                "van-button": {
                  "plain": "",
                  "size": "small",
                  "@click": "toggleAll",
                  "lc_id": "FxjbFUMiWD",
                  "__children": [],
                  "__text__": "反选"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "jl0/Xq6pS6",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "5GzBrVy4XX",
              "__children": [],
              "__text__": "Radio 单选框"
            },
            "__key__": "__children"
          }, {
            "div": {
              "lc_id": "TT2Onqet2I",
              "__children": [{
                "van-radio-group": {
                  "lc-mark": "",
                  "v-model": "radio10",
                  "lc_id": "Fq7xqCU/Ul",
                  "__children": [{
                    "van-radio": {
                      "name": "1",
                      "lc_id": "eX5Wd5A8M+",
                      "__children": [],
                      "__text__": "单选框 1"
                    },
                    "__key__": "__children"
                  }, {
                    "van-radio": {
                      "lc-mark": "",
                      "name": "2",
                      "lc_id": "QN9H1HdL7S",
                      "__children": [],
                      "__text__": "单选框 2"
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "br": {
                  "lc_id": "5uaRLSgQ+B",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-radio-group": {
                  "lc-mark": "",
                  "v-model": "radio10",
                  "lc_id": "p/WdWJotYb",
                  "__children": [{
                    "van-cell-group": {
                      "lc_id": "7SU7k9W/RI",
                      "__children": [{
                        "van-cell": {
                          "title": "单选框 1",
                          "clickable": "",
                          "@click": "radio10 = '1'",
                          "lc-mark": "",
                          "lc_id": "cu2BQ/D1Gt",
                          "__children": [{
                            "template": {
                              "#right-icon": "",
                              "lc_id": "yLUfrpVFId",
                              "__children": [{
                                "van-radio": {
                                  "name": "1",
                                  "lc_id": "9sKStrXAMF",
                                  "__children": []
                                },
                                "__key__": "__children"
                              }]
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }, {
                        "van-cell": {
                          "title": "单选框 2",
                          "clickable": "",
                          "@click": "radio10 = '2'",
                          "lc_id": "KnbWE2AKwX",
                          "__children": [{
                            "template": {
                              "#right-icon": "",
                              "lc_id": "vSyCi55TWO",
                              "__children": [{
                                "van-radio": {
                                  "name": "2",
                                  "lc_id": "gDzRZVWQxz",
                                  "__children": []
                                },
                                "__key__": "__children"
                              }]
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "5CmAJnEb1P": {
    "div": {
      "lc_id": "5CmAJnEb1P",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "SM70eEXO+9",
          "__children": [],
          "__text__": "Field 输入框"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "style": "padding: 10px;",
          "lc_id": "f/reOjq1IJ",
          "__children": [{
            "van-field": {
              "lc-mark": "",
              "v-model": "text",
              "label": "文本",
              "lc_id": "DIxZNSoiax",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-field": {
              "lc-mark": "",
              "v-model": "tel",
              "type": "tel",
              "label": "手机号",
              "lc_id": "mmGmLLyGW5",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-field": {
              "lc-mark": "",
              "v-model": "digit",
              "type": "digit",
              "label": "整数",
              "lc_id": "T+vzBFNZhS",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-field": {
              "lc-mark": "",
              "v-model": "number",
              "type": "number",
              "label": "数字",
              "lc_id": "O36q2Fx7Xv",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-field": {
              "lc-mark": "",
              "v-model": "password",
              "type": "password",
              "label": "密码",
              "lc_id": "dk6ah1vXDq",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "SM70eEXO+9": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "SM70eEXO+9",
      "__children": [],
      "__text__": "Field 输入框"
    }
  },
  "f/reOjq1IJ": {
    "div": {
      "lc-mark": "",
      "style": "padding: 10px;",
      "lc_id": "f/reOjq1IJ",
      "__children": [{
        "van-field": {
          "lc-mark": "",
          "v-model": "text",
          "label": "文本",
          "lc_id": "DIxZNSoiax",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-field": {
          "lc-mark": "",
          "v-model": "tel",
          "type": "tel",
          "label": "手机号",
          "lc_id": "mmGmLLyGW5",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-field": {
          "lc-mark": "",
          "v-model": "digit",
          "type": "digit",
          "label": "整数",
          "lc_id": "T+vzBFNZhS",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-field": {
          "lc-mark": "",
          "v-model": "number",
          "type": "number",
          "label": "数字",
          "lc_id": "O36q2Fx7Xv",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-field": {
          "lc-mark": "",
          "v-model": "password",
          "type": "password",
          "label": "密码",
          "lc_id": "dk6ah1vXDq",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "DIxZNSoiax": {
    "van-field": {
      "lc-mark": "",
      "v-model": "text",
      "label": "文本",
      "lc_id": "DIxZNSoiax",
      "__children": []
    }
  },
  "mmGmLLyGW5": {
    "van-field": {
      "lc-mark": "",
      "v-model": "tel",
      "type": "tel",
      "label": "手机号",
      "lc_id": "mmGmLLyGW5",
      "__children": []
    }
  },
  "T+vzBFNZhS": {
    "van-field": {
      "lc-mark": "",
      "v-model": "digit",
      "type": "digit",
      "label": "整数",
      "lc_id": "T+vzBFNZhS",
      "__children": []
    }
  },
  "O36q2Fx7Xv": {
    "van-field": {
      "lc-mark": "",
      "v-model": "number",
      "type": "number",
      "label": "数字",
      "lc_id": "O36q2Fx7Xv",
      "__children": []
    }
  },
  "dk6ah1vXDq": {
    "van-field": {
      "lc-mark": "",
      "v-model": "password",
      "type": "password",
      "label": "密码",
      "lc_id": "dk6ah1vXDq",
      "__children": []
    }
  },
  "L5fPGRqjYZ": {
    "div": {
      "lc_id": "L5fPGRqjYZ",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "3qMdltHE4i",
          "__children": [],
          "__text__": "DatetimePicker 时间选择 ❌"
        },
        "__key__": "__children"
      }, {
        "van-datetime-picker": {
          "v-model": "currentDate",
          "type": "date",
          "title": "选择年月日",
          "lc-mark": "",
          ":min-date": "minDate",
          ":max-date": "maxDate",
          "lc_id": "14vPN9ntBV",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "3qMdltHE4i": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "3qMdltHE4i",
      "__children": [],
      "__text__": "DatetimePicker 时间选择 ❌"
    }
  },
  "14vPN9ntBV": {
    "van-datetime-picker": {
      "v-model": "currentDate",
      "type": "date",
      "title": "选择年月日",
      "lc-mark": "",
      ":min-date": "minDate",
      ":max-date": "maxDate",
      "lc_id": "14vPN9ntBV",
      "__children": []
    }
  },
  "ODgqdaL6ED": {
    "div": {
      "lc_id": "ODgqdaL6ED",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "hrPSBFZ6Hh",
          "__children": [],
          "__text__": "Checkbox 复选框"
        },
        "__key__": "__children"
      }, {
        "van-checkbox-group": {
          "lc-mark": "",
          "v-model": "result",
          "lc_id": "F2p5QIbo3W",
          "__children": [{
            "van-checkbox": {
              "name": "a",
              "lc_id": "90jCPURt8o",
              "__children": [],
              "__text__": "复选框 a"
            },
            "__key__": "__children"
          }, {
            "van-checkbox": {
              "lc-mark": "",
              "name": "b",
              "lc_id": "bvtnBJfQnk",
              "__children": [],
              "__text__": "复选框 b"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "hrPSBFZ6Hh": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "hrPSBFZ6Hh",
      "__children": [],
      "__text__": "Checkbox 复选框"
    }
  },
  "F2p5QIbo3W": {
    "van-checkbox-group": {
      "lc-mark": "",
      "v-model": "result",
      "lc_id": "F2p5QIbo3W",
      "__children": [{
        "van-checkbox": {
          "name": "a",
          "lc_id": "90jCPURt8o",
          "__children": [],
          "__text__": "复选框 a"
        },
        "__key__": "__children"
      }, {
        "van-checkbox": {
          "lc-mark": "",
          "name": "b",
          "lc_id": "bvtnBJfQnk",
          "__children": [],
          "__text__": "复选框 b"
        },
        "__key__": "__children"
      }]
    }
  },
  "90jCPURt8o": {
    "van-checkbox": {
      "name": "a",
      "lc_id": "90jCPURt8o",
      "__children": [],
      "__text__": "复选框 a"
    }
  },
  "bvtnBJfQnk": {
    "van-checkbox": {
      "lc-mark": "",
      "name": "b",
      "lc_id": "bvtnBJfQnk",
      "__children": [],
      "__text__": "复选框 b"
    }
  },
  "V9/vkUb/HX": {
    "div": {
      "lc_id": "V9/vkUb/HX",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "hnZi6s2mpt",
          "__children": [],
          "__text__": "Checkbox 复选框(全选与反选)"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc-mark": "",
          "lc_id": "JHg6xi7Ws5",
          "__children": [{
            "van-checkbox-group": {
              "v-model": "result",
              "ref": "checkboxGroup",
              "lc_id": "8EUt8S6cIj",
              "__children": [{
                "van-checkbox": {
                  "name": "a",
                  "lc_id": "vAZDx+cKaQ",
                  "__children": [],
                  "__text__": "复选框 a"
                },
                "__key__": "__children"
              }, {
                "van-checkbox": {
                  "name": "b",
                  "lc_id": "lNhFITM1W/",
                  "__children": [],
                  "__text__": "复选框 b"
                },
                "__key__": "__children"
              }, {
                "van-checkbox": {
                  "lc-mark": "",
                  "name": "c",
                  "lc_id": "BVLbIHoPpi",
                  "__children": [],
                  "__text__": "复选框 c"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "br": {
              "lc_id": "lEi0tbIvkM",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "type": "primary",
              "size": "small",
              "@click": "checkAll",
              "lc_id": "azfVg1jydO",
              "__children": [],
              "__text__": "全选"
            },
            "__key__": "__children"
          }, {
            "van-button": {
              "plain": "",
              "size": "small",
              "@click": "toggleAll",
              "lc_id": "FxjbFUMiWD",
              "__children": [],
              "__text__": "反选"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "hnZi6s2mpt": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "hnZi6s2mpt",
      "__children": [],
      "__text__": "Checkbox 复选框(全选与反选)"
    }
  },
  "JHg6xi7Ws5": {
    "div": {
      "lc-mark": "",
      "lc_id": "JHg6xi7Ws5",
      "__children": [{
        "van-checkbox-group": {
          "v-model": "result",
          "ref": "checkboxGroup",
          "lc_id": "8EUt8S6cIj",
          "__children": [{
            "van-checkbox": {
              "name": "a",
              "lc_id": "vAZDx+cKaQ",
              "__children": [],
              "__text__": "复选框 a"
            },
            "__key__": "__children"
          }, {
            "van-checkbox": {
              "name": "b",
              "lc_id": "lNhFITM1W/",
              "__children": [],
              "__text__": "复选框 b"
            },
            "__key__": "__children"
          }, {
            "van-checkbox": {
              "lc-mark": "",
              "name": "c",
              "lc_id": "BVLbIHoPpi",
              "__children": [],
              "__text__": "复选框 c"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "br": {
          "lc_id": "lEi0tbIvkM",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "type": "primary",
          "size": "small",
          "@click": "checkAll",
          "lc_id": "azfVg1jydO",
          "__children": [],
          "__text__": "全选"
        },
        "__key__": "__children"
      }, {
        "van-button": {
          "plain": "",
          "size": "small",
          "@click": "toggleAll",
          "lc_id": "FxjbFUMiWD",
          "__children": [],
          "__text__": "反选"
        },
        "__key__": "__children"
      }]
    }
  },
  "8EUt8S6cIj": {
    "van-checkbox-group": {
      "v-model": "result",
      "ref": "checkboxGroup",
      "lc_id": "8EUt8S6cIj",
      "__children": [{
        "van-checkbox": {
          "name": "a",
          "lc_id": "vAZDx+cKaQ",
          "__children": [],
          "__text__": "复选框 a"
        },
        "__key__": "__children"
      }, {
        "van-checkbox": {
          "name": "b",
          "lc_id": "lNhFITM1W/",
          "__children": [],
          "__text__": "复选框 b"
        },
        "__key__": "__children"
      }, {
        "van-checkbox": {
          "lc-mark": "",
          "name": "c",
          "lc_id": "BVLbIHoPpi",
          "__children": [],
          "__text__": "复选框 c"
        },
        "__key__": "__children"
      }]
    }
  },
  "vAZDx+cKaQ": {
    "van-checkbox": {
      "name": "a",
      "lc_id": "vAZDx+cKaQ",
      "__children": [],
      "__text__": "复选框 a"
    }
  },
  "lNhFITM1W/": {
    "van-checkbox": {
      "name": "b",
      "lc_id": "lNhFITM1W/",
      "__children": [],
      "__text__": "复选框 b"
    }
  },
  "BVLbIHoPpi": {
    "van-checkbox": {
      "lc-mark": "",
      "name": "c",
      "lc_id": "BVLbIHoPpi",
      "__children": [],
      "__text__": "复选框 c"
    }
  },
  "lEi0tbIvkM": {
    "br": {
      "lc_id": "lEi0tbIvkM",
      "__children": []
    }
  },
  "azfVg1jydO": {
    "van-button": {
      "type": "primary",
      "size": "small",
      "@click": "checkAll",
      "lc_id": "azfVg1jydO",
      "__children": [],
      "__text__": "全选"
    }
  },
  "FxjbFUMiWD": {
    "van-button": {
      "plain": "",
      "size": "small",
      "@click": "toggleAll",
      "lc_id": "FxjbFUMiWD",
      "__children": [],
      "__text__": "反选"
    }
  },
  "jl0/Xq6pS6": {
    "div": {
      "lc_id": "jl0/Xq6pS6",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "5GzBrVy4XX",
          "__children": [],
          "__text__": "Radio 单选框"
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "TT2Onqet2I",
          "__children": [{
            "van-radio-group": {
              "lc-mark": "",
              "v-model": "radio10",
              "lc_id": "Fq7xqCU/Ul",
              "__children": [{
                "van-radio": {
                  "name": "1",
                  "lc_id": "eX5Wd5A8M+",
                  "__children": [],
                  "__text__": "单选框 1"
                },
                "__key__": "__children"
              }, {
                "van-radio": {
                  "lc-mark": "",
                  "name": "2",
                  "lc_id": "QN9H1HdL7S",
                  "__children": [],
                  "__text__": "单选框 2"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "br": {
              "lc_id": "5uaRLSgQ+B",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-radio-group": {
              "lc-mark": "",
              "v-model": "radio10",
              "lc_id": "p/WdWJotYb",
              "__children": [{
                "van-cell-group": {
                  "lc_id": "7SU7k9W/RI",
                  "__children": [{
                    "van-cell": {
                      "title": "单选框 1",
                      "clickable": "",
                      "@click": "radio10 = '1'",
                      "lc-mark": "",
                      "lc_id": "cu2BQ/D1Gt",
                      "__children": [{
                        "template": {
                          "#right-icon": "",
                          "lc_id": "yLUfrpVFId",
                          "__children": [{
                            "van-radio": {
                              "name": "1",
                              "lc_id": "9sKStrXAMF",
                              "__children": []
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }, {
                    "van-cell": {
                      "title": "单选框 2",
                      "clickable": "",
                      "@click": "radio10 = '2'",
                      "lc_id": "KnbWE2AKwX",
                      "__children": [{
                        "template": {
                          "#right-icon": "",
                          "lc_id": "vSyCi55TWO",
                          "__children": [{
                            "van-radio": {
                              "name": "2",
                              "lc_id": "gDzRZVWQxz",
                              "__children": []
                            },
                            "__key__": "__children"
                          }]
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "5GzBrVy4XX": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "5GzBrVy4XX",
      "__children": [],
      "__text__": "Radio 单选框"
    }
  },
  "TT2Onqet2I": {
    "div": {
      "lc_id": "TT2Onqet2I",
      "__children": [{
        "van-radio-group": {
          "lc-mark": "",
          "v-model": "radio10",
          "lc_id": "Fq7xqCU/Ul",
          "__children": [{
            "van-radio": {
              "name": "1",
              "lc_id": "eX5Wd5A8M+",
              "__children": [],
              "__text__": "单选框 1"
            },
            "__key__": "__children"
          }, {
            "van-radio": {
              "lc-mark": "",
              "name": "2",
              "lc_id": "QN9H1HdL7S",
              "__children": [],
              "__text__": "单选框 2"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "br": {
          "lc_id": "5uaRLSgQ+B",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-radio-group": {
          "lc-mark": "",
          "v-model": "radio10",
          "lc_id": "p/WdWJotYb",
          "__children": [{
            "van-cell-group": {
              "lc_id": "7SU7k9W/RI",
              "__children": [{
                "van-cell": {
                  "title": "单选框 1",
                  "clickable": "",
                  "@click": "radio10 = '1'",
                  "lc-mark": "",
                  "lc_id": "cu2BQ/D1Gt",
                  "__children": [{
                    "template": {
                      "#right-icon": "",
                      "lc_id": "yLUfrpVFId",
                      "__children": [{
                        "van-radio": {
                          "name": "1",
                          "lc_id": "9sKStrXAMF",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }, {
                "van-cell": {
                  "title": "单选框 2",
                  "clickable": "",
                  "@click": "radio10 = '2'",
                  "lc_id": "KnbWE2AKwX",
                  "__children": [{
                    "template": {
                      "#right-icon": "",
                      "lc_id": "vSyCi55TWO",
                      "__children": [{
                        "van-radio": {
                          "name": "2",
                          "lc_id": "gDzRZVWQxz",
                          "__children": []
                        },
                        "__key__": "__children"
                      }]
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "Fq7xqCU/Ul": {
    "van-radio-group": {
      "lc-mark": "",
      "v-model": "radio10",
      "lc_id": "Fq7xqCU/Ul",
      "__children": [{
        "van-radio": {
          "name": "1",
          "lc_id": "eX5Wd5A8M+",
          "__children": [],
          "__text__": "单选框 1"
        },
        "__key__": "__children"
      }, {
        "van-radio": {
          "lc-mark": "",
          "name": "2",
          "lc_id": "QN9H1HdL7S",
          "__children": [],
          "__text__": "单选框 2"
        },
        "__key__": "__children"
      }]
    }
  },
  "eX5Wd5A8M+": {
    "van-radio": {
      "name": "1",
      "lc_id": "eX5Wd5A8M+",
      "__children": [],
      "__text__": "单选框 1"
    }
  },
  "QN9H1HdL7S": {
    "van-radio": {
      "lc-mark": "",
      "name": "2",
      "lc_id": "QN9H1HdL7S",
      "__children": [],
      "__text__": "单选框 2"
    }
  },
  "5uaRLSgQ+B": {
    "br": {
      "lc_id": "5uaRLSgQ+B",
      "__children": []
    }
  },
  "p/WdWJotYb": {
    "van-radio-group": {
      "lc-mark": "",
      "v-model": "radio10",
      "lc_id": "p/WdWJotYb",
      "__children": [{
        "van-cell-group": {
          "lc_id": "7SU7k9W/RI",
          "__children": [{
            "van-cell": {
              "title": "单选框 1",
              "clickable": "",
              "@click": "radio10 = '1'",
              "lc-mark": "",
              "lc_id": "cu2BQ/D1Gt",
              "__children": [{
                "template": {
                  "#right-icon": "",
                  "lc_id": "yLUfrpVFId",
                  "__children": [{
                    "van-radio": {
                      "name": "1",
                      "lc_id": "9sKStrXAMF",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }, {
            "van-cell": {
              "title": "单选框 2",
              "clickable": "",
              "@click": "radio10 = '2'",
              "lc_id": "KnbWE2AKwX",
              "__children": [{
                "template": {
                  "#right-icon": "",
                  "lc_id": "vSyCi55TWO",
                  "__children": [{
                    "van-radio": {
                      "name": "2",
                      "lc_id": "gDzRZVWQxz",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "7SU7k9W/RI": {
    "van-cell-group": {
      "lc_id": "7SU7k9W/RI",
      "__children": [{
        "van-cell": {
          "title": "单选框 1",
          "clickable": "",
          "@click": "radio10 = '1'",
          "lc-mark": "",
          "lc_id": "cu2BQ/D1Gt",
          "__children": [{
            "template": {
              "#right-icon": "",
              "lc_id": "yLUfrpVFId",
              "__children": [{
                "van-radio": {
                  "name": "1",
                  "lc_id": "9sKStrXAMF",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "van-cell": {
          "title": "单选框 2",
          "clickable": "",
          "@click": "radio10 = '2'",
          "lc_id": "KnbWE2AKwX",
          "__children": [{
            "template": {
              "#right-icon": "",
              "lc_id": "vSyCi55TWO",
              "__children": [{
                "van-radio": {
                  "name": "2",
                  "lc_id": "gDzRZVWQxz",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "cu2BQ/D1Gt": {
    "van-cell": {
      "title": "单选框 1",
      "clickable": "",
      "@click": "radio10 = '1'",
      "lc-mark": "",
      "lc_id": "cu2BQ/D1Gt",
      "__children": [{
        "template": {
          "#right-icon": "",
          "lc_id": "yLUfrpVFId",
          "__children": [{
            "van-radio": {
              "name": "1",
              "lc_id": "9sKStrXAMF",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "yLUfrpVFId": {
    "template": {
      "#right-icon": "",
      "lc_id": "yLUfrpVFId",
      "__children": [{
        "van-radio": {
          "name": "1",
          "lc_id": "9sKStrXAMF",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "9sKStrXAMF": {
    "van-radio": {
      "name": "1",
      "lc_id": "9sKStrXAMF",
      "__children": []
    }
  },
  "KnbWE2AKwX": {
    "van-cell": {
      "title": "单选框 2",
      "clickable": "",
      "@click": "radio10 = '2'",
      "lc_id": "KnbWE2AKwX",
      "__children": [{
        "template": {
          "#right-icon": "",
          "lc_id": "vSyCi55TWO",
          "__children": [{
            "van-radio": {
              "name": "2",
              "lc_id": "gDzRZVWQxz",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "vSyCi55TWO": {
    "template": {
      "#right-icon": "",
      "lc_id": "vSyCi55TWO",
      "__children": [{
        "van-radio": {
          "name": "2",
          "lc_id": "gDzRZVWQxz",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "gDzRZVWQxz": {
    "van-radio": {
      "name": "2",
      "lc_id": "gDzRZVWQxz",
      "__children": []
    }
  },
  "/ntrNy7wOc": {
    "div": {
      "lc_id": "/ntrNy7wOc",
      "__children": [{
        "div": {
          "lc_id": "ta6EIAh72H",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "ZMbTJO4efl",
              "__children": [],
              "__text__": "Grid 宫格"
            },
            "__key__": "__children"
          }, {
            "van-grid": {
              "lc-mark": "",
              "lc_id": "X08eZY9vTs",
              "__children": [{
                "van-grid-item": {
                  "icon": "photo-o",
                  "text": "文字",
                  "lc_id": "X7rCKONAIT",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-grid-item": {
                  "icon": "photo-o",
                  "text": "文字",
                  "lc_id": "LMykLYqUkC",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-grid-item": {
                  "icon": "photo-o",
                  "text": "文字",
                  "lc_id": "E2Hd160o5Q",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-grid-item": {
                  "icon": "photo-o",
                  "text": "文字",
                  "lc_id": "d34lSEesuk",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "dS3rIMgHEa",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "PMja4pIbgj",
              "__children": [],
              "__text__": "NavBar 导航栏"
            },
            "__key__": "__children"
          }, {
            "van-nav-bar": {
              "lc-mark": "",
              "title": "标题",
              "left-text": "返回",
              "right-text": "按钮",
              "left-arrow": "",
              "@click-left": "onClickLeft",
              "@click-right": "onClickRight",
              "lc_id": "REnoRWpVUY",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "UhV4g9qnPl",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "GEoGgaEQRn",
              "__children": [],
              "__text__": "Pagination 分页"
            },
            "__key__": "__children"
          }, {
            "van-pagination": {
              "lc-mark": "",
              "v-model": "currentPage13",
              ":total-items": "24",
              ":items-per-page": "5",
              "lc_id": "IOGXwSfLUN",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "DY3MQ06idt",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "Y/UGT4oFUC",
              "__children": [],
              "__text__": "Sidebar 侧边导航"
            },
            "__key__": "__children"
          }, {
            "van-sidebar": {
              "v-model": "activeKey",
              "lc-mark": "",
              "lc_id": "7AlKZZMGtG",
              "__children": [{
                "van-sidebar-item": {
                  "title": "标签名称",
                  "lc_id": "YGZitVPi4d",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-sidebar-item": {
                  "title": "标签名称",
                  "lc_id": "hWh5LOl2oL",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-sidebar-item": {
                  "title": "标签名称",
                  "lc_id": "TshkJd38qC",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "6QKkhZ8evV",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "U6vxh2loAk",
              "__children": [],
              "__text__": "Tab 标签页"
            },
            "__key__": "__children"
          }, {
            "van-tabs": {
              "v-model": "active14",
              "lc-mark": "",
              "lc_id": "rohxtUBk/l",
              "__children": [{
                "van-tab": {
                  "title": "标签 1",
                  "lc_id": "MSSxMZ2ebB",
                  "__children": [],
                  "__text__": "内容 1"
                },
                "__key__": "__children"
              }, {
                "van-tab": {
                  "title": "标签 2",
                  "lc_id": "f+cAezYPuU",
                  "__children": [],
                  "__text__": "内容 2"
                },
                "__key__": "__children"
              }, {
                "van-tab": {
                  "title": "标签 3",
                  "lc_id": "N36xJv03F6",
                  "__children": [],
                  "__text__": "内容 3"
                },
                "__key__": "__children"
              }, {
                "van-tab": {
                  "title": "标签 4",
                  "lc_id": "iy8oej8ecZ",
                  "__children": [],
                  "__text__": "内容 4"
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "HFSjLBSjr4",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "5zilvW7BTu",
              "__children": [],
              "__text__": "ActionBar 动作栏"
            },
            "__key__": "__children"
          }, {
            "div": {
              "style": "position: relative;",
              "lc-mark": "",
              "lc_id": "Pt76lmgRrB",
              "__children": [{
                "van-action-bar": {
                  "lc_id": "9ToRhiLix2",
                  "__children": [{
                    "van-action-bar-icon": {
                      "icon": "chat-o",
                      "text": "客服",
                      "@click": "onClickIcon",
                      "lc_id": "+KLvcHu+dq",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "van-action-bar-icon": {
                      "icon": "cart-o",
                      "text": "购物车",
                      "@click": "onClickIcon",
                      "lc_id": "jmPWsraNbw",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "van-action-bar-icon": {
                      "icon": "shop-o",
                      "text": "店铺",
                      "@click": "onClickIcon",
                      "lc_id": "9nvKcSlBKx",
                      "__children": []
                    },
                    "__key__": "__children"
                  }, {
                    "van-action-bar-button": {
                      "type": "danger",
                      "text": "立即购买",
                      "@click": "onClickButton",
                      "lc_id": "SxUbF/TzkY",
                      "__children": []
                    },
                    "__key__": "__children"
                  }]
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "kzIjwCrNnO",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "8dbio3vxQH",
              "__children": [],
              "__text__": "AddressEdit 地址编辑"
            },
            "__key__": "__children"
          }, {
            "van-address-edit": {
              ":area-list": "areaList",
              "show-postal": "",
              "lc-mark": "",
              "show-delete": "",
              "show-set-default": "",
              "show-search-result": "",
              ":search-result": "searchResult",
              ":area-columns-placeholder": "['请选择', '请选择', '请选择']",
              "@save": "onSave",
              "@delete": "onDelete",
              "@change-detail": "onChangeDetail",
              "lc_id": "Tn1/r0M9YC",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "wa8o497uS2",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "eUXBZScEN8",
              "__children": [],
              "__text__": "Card 商品卡片"
            },
            "__key__": "__children"
          }, {
            "van-card": {
              "num": "2",
              "lc-mark": "",
              "price": "2",
              "desc": "描述信息",
              "title": "商品标题",
              "thumb": "https://img.yzcdn.cn/vant/ipad.jpeg",
              "lc_id": "cBHYsOWBw2",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }, {
        "div": {
          "lc_id": "8m37ZW49xJ",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "WFfLIn2BMo",
              "__children": [],
              "__text__": "ActionBar 行动栏"
            },
            "__key__": "__children"
          }, {
            "van-submit-bar": {
              "style": "position: relative;",
              "lc-mark": "",
              ":price": "3050",
              "button-text": "提交订单",
              "@submit": "onSubmit",
              "lc_id": "iGAW34dMaI",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "ta6EIAh72H": {
    "div": {
      "lc_id": "ta6EIAh72H",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "ZMbTJO4efl",
          "__children": [],
          "__text__": "Grid 宫格"
        },
        "__key__": "__children"
      }, {
        "van-grid": {
          "lc-mark": "",
          "lc_id": "X08eZY9vTs",
          "__children": [{
            "van-grid-item": {
              "icon": "photo-o",
              "text": "文字",
              "lc_id": "X7rCKONAIT",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-grid-item": {
              "icon": "photo-o",
              "text": "文字",
              "lc_id": "LMykLYqUkC",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-grid-item": {
              "icon": "photo-o",
              "text": "文字",
              "lc_id": "E2Hd160o5Q",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-grid-item": {
              "icon": "photo-o",
              "text": "文字",
              "lc_id": "d34lSEesuk",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "ZMbTJO4efl": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "ZMbTJO4efl",
      "__children": [],
      "__text__": "Grid 宫格"
    }
  },
  "X08eZY9vTs": {
    "van-grid": {
      "lc-mark": "",
      "lc_id": "X08eZY9vTs",
      "__children": [{
        "van-grid-item": {
          "icon": "photo-o",
          "text": "文字",
          "lc_id": "X7rCKONAIT",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-grid-item": {
          "icon": "photo-o",
          "text": "文字",
          "lc_id": "LMykLYqUkC",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-grid-item": {
          "icon": "photo-o",
          "text": "文字",
          "lc_id": "E2Hd160o5Q",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-grid-item": {
          "icon": "photo-o",
          "text": "文字",
          "lc_id": "d34lSEesuk",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "X7rCKONAIT": {
    "van-grid-item": {
      "icon": "photo-o",
      "text": "文字",
      "lc_id": "X7rCKONAIT",
      "__children": []
    }
  },
  "LMykLYqUkC": {
    "van-grid-item": {
      "icon": "photo-o",
      "text": "文字",
      "lc_id": "LMykLYqUkC",
      "__children": []
    }
  },
  "E2Hd160o5Q": {
    "van-grid-item": {
      "icon": "photo-o",
      "text": "文字",
      "lc_id": "E2Hd160o5Q",
      "__children": []
    }
  },
  "d34lSEesuk": {
    "van-grid-item": {
      "icon": "photo-o",
      "text": "文字",
      "lc_id": "d34lSEesuk",
      "__children": []
    }
  },
  "dS3rIMgHEa": {
    "div": {
      "lc_id": "dS3rIMgHEa",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "PMja4pIbgj",
          "__children": [],
          "__text__": "NavBar 导航栏"
        },
        "__key__": "__children"
      }, {
        "van-nav-bar": {
          "lc-mark": "",
          "title": "标题",
          "left-text": "返回",
          "right-text": "按钮",
          "left-arrow": "",
          "@click-left": "onClickLeft",
          "@click-right": "onClickRight",
          "lc_id": "REnoRWpVUY",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "PMja4pIbgj": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "PMja4pIbgj",
      "__children": [],
      "__text__": "NavBar 导航栏"
    }
  },
  "REnoRWpVUY": {
    "van-nav-bar": {
      "lc-mark": "",
      "title": "标题",
      "left-text": "返回",
      "right-text": "按钮",
      "left-arrow": "",
      "@click-left": "onClickLeft",
      "@click-right": "onClickRight",
      "lc_id": "REnoRWpVUY",
      "__children": []
    }
  },
  "UhV4g9qnPl": {
    "div": {
      "lc_id": "UhV4g9qnPl",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "GEoGgaEQRn",
          "__children": [],
          "__text__": "Pagination 分页"
        },
        "__key__": "__children"
      }, {
        "van-pagination": {
          "lc-mark": "",
          "v-model": "currentPage13",
          ":total-items": "24",
          ":items-per-page": "5",
          "lc_id": "IOGXwSfLUN",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "GEoGgaEQRn": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "GEoGgaEQRn",
      "__children": [],
      "__text__": "Pagination 分页"
    }
  },
  "IOGXwSfLUN": {
    "van-pagination": {
      "lc-mark": "",
      "v-model": "currentPage13",
      ":total-items": "24",
      ":items-per-page": "5",
      "lc_id": "IOGXwSfLUN",
      "__children": []
    }
  },
  "DY3MQ06idt": {
    "div": {
      "lc_id": "DY3MQ06idt",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "Y/UGT4oFUC",
          "__children": [],
          "__text__": "Sidebar 侧边导航"
        },
        "__key__": "__children"
      }, {
        "van-sidebar": {
          "v-model": "activeKey",
          "lc-mark": "",
          "lc_id": "7AlKZZMGtG",
          "__children": [{
            "van-sidebar-item": {
              "title": "标签名称",
              "lc_id": "YGZitVPi4d",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-sidebar-item": {
              "title": "标签名称",
              "lc_id": "hWh5LOl2oL",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-sidebar-item": {
              "title": "标签名称",
              "lc_id": "TshkJd38qC",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "Y/UGT4oFUC": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "Y/UGT4oFUC",
      "__children": [],
      "__text__": "Sidebar 侧边导航"
    }
  },
  "7AlKZZMGtG": {
    "van-sidebar": {
      "v-model": "activeKey",
      "lc-mark": "",
      "lc_id": "7AlKZZMGtG",
      "__children": [{
        "van-sidebar-item": {
          "title": "标签名称",
          "lc_id": "YGZitVPi4d",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-sidebar-item": {
          "title": "标签名称",
          "lc_id": "hWh5LOl2oL",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-sidebar-item": {
          "title": "标签名称",
          "lc_id": "TshkJd38qC",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "YGZitVPi4d": {
    "van-sidebar-item": {
      "title": "标签名称",
      "lc_id": "YGZitVPi4d",
      "__children": []
    }
  },
  "hWh5LOl2oL": {
    "van-sidebar-item": {
      "title": "标签名称",
      "lc_id": "hWh5LOl2oL",
      "__children": []
    }
  },
  "TshkJd38qC": {
    "van-sidebar-item": {
      "title": "标签名称",
      "lc_id": "TshkJd38qC",
      "__children": []
    }
  },
  "6QKkhZ8evV": {
    "div": {
      "lc_id": "6QKkhZ8evV",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "U6vxh2loAk",
          "__children": [],
          "__text__": "Tab 标签页"
        },
        "__key__": "__children"
      }, {
        "van-tabs": {
          "v-model": "active14",
          "lc-mark": "",
          "lc_id": "rohxtUBk/l",
          "__children": [{
            "van-tab": {
              "title": "标签 1",
              "lc_id": "MSSxMZ2ebB",
              "__children": [],
              "__text__": "内容 1"
            },
            "__key__": "__children"
          }, {
            "van-tab": {
              "title": "标签 2",
              "lc_id": "f+cAezYPuU",
              "__children": [],
              "__text__": "内容 2"
            },
            "__key__": "__children"
          }, {
            "van-tab": {
              "title": "标签 3",
              "lc_id": "N36xJv03F6",
              "__children": [],
              "__text__": "内容 3"
            },
            "__key__": "__children"
          }, {
            "van-tab": {
              "title": "标签 4",
              "lc_id": "iy8oej8ecZ",
              "__children": [],
              "__text__": "内容 4"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "U6vxh2loAk": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "U6vxh2loAk",
      "__children": [],
      "__text__": "Tab 标签页"
    }
  },
  "rohxtUBk/l": {
    "van-tabs": {
      "v-model": "active14",
      "lc-mark": "",
      "lc_id": "rohxtUBk/l",
      "__children": [{
        "van-tab": {
          "title": "标签 1",
          "lc_id": "MSSxMZ2ebB",
          "__children": [],
          "__text__": "内容 1"
        },
        "__key__": "__children"
      }, {
        "van-tab": {
          "title": "标签 2",
          "lc_id": "f+cAezYPuU",
          "__children": [],
          "__text__": "内容 2"
        },
        "__key__": "__children"
      }, {
        "van-tab": {
          "title": "标签 3",
          "lc_id": "N36xJv03F6",
          "__children": [],
          "__text__": "内容 3"
        },
        "__key__": "__children"
      }, {
        "van-tab": {
          "title": "标签 4",
          "lc_id": "iy8oej8ecZ",
          "__children": [],
          "__text__": "内容 4"
        },
        "__key__": "__children"
      }]
    }
  },
  "MSSxMZ2ebB": {
    "van-tab": {
      "title": "标签 1",
      "lc_id": "MSSxMZ2ebB",
      "__children": [],
      "__text__": "内容 1"
    }
  },
  "f+cAezYPuU": {
    "van-tab": {
      "title": "标签 2",
      "lc_id": "f+cAezYPuU",
      "__children": [],
      "__text__": "内容 2"
    }
  },
  "N36xJv03F6": {
    "van-tab": {
      "title": "标签 3",
      "lc_id": "N36xJv03F6",
      "__children": [],
      "__text__": "内容 3"
    }
  },
  "iy8oej8ecZ": {
    "van-tab": {
      "title": "标签 4",
      "lc_id": "iy8oej8ecZ",
      "__children": [],
      "__text__": "内容 4"
    }
  },
  "HFSjLBSjr4": {
    "div": {
      "lc_id": "HFSjLBSjr4",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "5zilvW7BTu",
          "__children": [],
          "__text__": "ActionBar 动作栏"
        },
        "__key__": "__children"
      }, {
        "div": {
          "style": "position: relative;",
          "lc-mark": "",
          "lc_id": "Pt76lmgRrB",
          "__children": [{
            "van-action-bar": {
              "lc_id": "9ToRhiLix2",
              "__children": [{
                "van-action-bar-icon": {
                  "icon": "chat-o",
                  "text": "客服",
                  "@click": "onClickIcon",
                  "lc_id": "+KLvcHu+dq",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-action-bar-icon": {
                  "icon": "cart-o",
                  "text": "购物车",
                  "@click": "onClickIcon",
                  "lc_id": "jmPWsraNbw",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-action-bar-icon": {
                  "icon": "shop-o",
                  "text": "店铺",
                  "@click": "onClickIcon",
                  "lc_id": "9nvKcSlBKx",
                  "__children": []
                },
                "__key__": "__children"
              }, {
                "van-action-bar-button": {
                  "type": "danger",
                  "text": "立即购买",
                  "@click": "onClickButton",
                  "lc_id": "SxUbF/TzkY",
                  "__children": []
                },
                "__key__": "__children"
              }]
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "5zilvW7BTu": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "5zilvW7BTu",
      "__children": [],
      "__text__": "ActionBar 动作栏"
    }
  },
  "Pt76lmgRrB": {
    "div": {
      "style": "position: relative;",
      "lc-mark": "",
      "lc_id": "Pt76lmgRrB",
      "__children": [{
        "van-action-bar": {
          "lc_id": "9ToRhiLix2",
          "__children": [{
            "van-action-bar-icon": {
              "icon": "chat-o",
              "text": "客服",
              "@click": "onClickIcon",
              "lc_id": "+KLvcHu+dq",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-action-bar-icon": {
              "icon": "cart-o",
              "text": "购物车",
              "@click": "onClickIcon",
              "lc_id": "jmPWsraNbw",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-action-bar-icon": {
              "icon": "shop-o",
              "text": "店铺",
              "@click": "onClickIcon",
              "lc_id": "9nvKcSlBKx",
              "__children": []
            },
            "__key__": "__children"
          }, {
            "van-action-bar-button": {
              "type": "danger",
              "text": "立即购买",
              "@click": "onClickButton",
              "lc_id": "SxUbF/TzkY",
              "__children": []
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "9ToRhiLix2": {
    "van-action-bar": {
      "lc_id": "9ToRhiLix2",
      "__children": [{
        "van-action-bar-icon": {
          "icon": "chat-o",
          "text": "客服",
          "@click": "onClickIcon",
          "lc_id": "+KLvcHu+dq",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-action-bar-icon": {
          "icon": "cart-o",
          "text": "购物车",
          "@click": "onClickIcon",
          "lc_id": "jmPWsraNbw",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-action-bar-icon": {
          "icon": "shop-o",
          "text": "店铺",
          "@click": "onClickIcon",
          "lc_id": "9nvKcSlBKx",
          "__children": []
        },
        "__key__": "__children"
      }, {
        "van-action-bar-button": {
          "type": "danger",
          "text": "立即购买",
          "@click": "onClickButton",
          "lc_id": "SxUbF/TzkY",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "+KLvcHu+dq": {
    "van-action-bar-icon": {
      "icon": "chat-o",
      "text": "客服",
      "@click": "onClickIcon",
      "lc_id": "+KLvcHu+dq",
      "__children": []
    }
  },
  "jmPWsraNbw": {
    "van-action-bar-icon": {
      "icon": "cart-o",
      "text": "购物车",
      "@click": "onClickIcon",
      "lc_id": "jmPWsraNbw",
      "__children": []
    }
  },
  "9nvKcSlBKx": {
    "van-action-bar-icon": {
      "icon": "shop-o",
      "text": "店铺",
      "@click": "onClickIcon",
      "lc_id": "9nvKcSlBKx",
      "__children": []
    }
  },
  "SxUbF/TzkY": {
    "van-action-bar-button": {
      "type": "danger",
      "text": "立即购买",
      "@click": "onClickButton",
      "lc_id": "SxUbF/TzkY",
      "__children": []
    }
  },
  "kzIjwCrNnO": {
    "div": {
      "lc_id": "kzIjwCrNnO",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "8dbio3vxQH",
          "__children": [],
          "__text__": "AddressEdit 地址编辑"
        },
        "__key__": "__children"
      }, {
        "van-address-edit": {
          ":area-list": "areaList",
          "show-postal": "",
          "lc-mark": "",
          "show-delete": "",
          "show-set-default": "",
          "show-search-result": "",
          ":search-result": "searchResult",
          ":area-columns-placeholder": "['请选择', '请选择', '请选择']",
          "@save": "onSave",
          "@delete": "onDelete",
          "@change-detail": "onChangeDetail",
          "lc_id": "Tn1/r0M9YC",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "8dbio3vxQH": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "8dbio3vxQH",
      "__children": [],
      "__text__": "AddressEdit 地址编辑"
    }
  },
  "Tn1/r0M9YC": {
    "van-address-edit": {
      ":area-list": "areaList",
      "show-postal": "",
      "lc-mark": "",
      "show-delete": "",
      "show-set-default": "",
      "show-search-result": "",
      ":search-result": "searchResult",
      ":area-columns-placeholder": "['请选择', '请选择', '请选择']",
      "@save": "onSave",
      "@delete": "onDelete",
      "@change-detail": "onChangeDetail",
      "lc_id": "Tn1/r0M9YC",
      "__children": []
    }
  },
  "wa8o497uS2": {
    "div": {
      "lc_id": "wa8o497uS2",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "eUXBZScEN8",
          "__children": [],
          "__text__": "Card 商品卡片"
        },
        "__key__": "__children"
      }, {
        "van-card": {
          "num": "2",
          "lc-mark": "",
          "price": "2",
          "desc": "描述信息",
          "title": "商品标题",
          "thumb": "https://img.yzcdn.cn/vant/ipad.jpeg",
          "lc_id": "cBHYsOWBw2",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "eUXBZScEN8": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "eUXBZScEN8",
      "__children": [],
      "__text__": "Card 商品卡片"
    }
  },
  "cBHYsOWBw2": {
    "van-card": {
      "num": "2",
      "lc-mark": "",
      "price": "2",
      "desc": "描述信息",
      "title": "商品标题",
      "thumb": "https://img.yzcdn.cn/vant/ipad.jpeg",
      "lc_id": "cBHYsOWBw2",
      "__children": []
    }
  },
  "8m37ZW49xJ": {
    "div": {
      "lc_id": "8m37ZW49xJ",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "WFfLIn2BMo",
          "__children": [],
          "__text__": "ActionBar 行动栏"
        },
        "__key__": "__children"
      }, {
        "van-submit-bar": {
          "style": "position: relative;",
          "lc-mark": "",
          ":price": "3050",
          "button-text": "提交订单",
          "@submit": "onSubmit",
          "lc_id": "iGAW34dMaI",
          "__children": []
        },
        "__key__": "__children"
      }]
    }
  },
  "WFfLIn2BMo": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "WFfLIn2BMo",
      "__children": [],
      "__text__": "ActionBar 行动栏"
    }
  },
  "iGAW34dMaI": {
    "van-submit-bar": {
      "style": "position: relative;",
      "lc-mark": "",
      ":price": "3050",
      "button-text": "提交订单",
      "@submit": "onSubmit",
      "lc_id": "iGAW34dMaI",
      "__children": []
    }
  },
  "wkR/YrqIMn": {
    "div": {
      "lc_id": "wkR/YrqIMn",
      "__children": [{
        "div": {
          "lc_id": "LUgKBREHsr",
          "__children": [{
            "div": {
              "class": "demonstration-vant",
              "lc_id": "27vaAkZV0x",
              "__children": [],
              "__text__": "NumberKeyboard 数字键盘"
            },
            "__key__": "__children"
          }]
        },
        "__key__": "__children"
      }]
    }
  },
  "LUgKBREHsr": {
    "div": {
      "lc_id": "LUgKBREHsr",
      "__children": [{
        "div": {
          "class": "demonstration-vant",
          "lc_id": "27vaAkZV0x",
          "__children": [],
          "__text__": "NumberKeyboard 数字键盘"
        },
        "__key__": "__children"
      }]
    }
  },
  "27vaAkZV0x": {
    "div": {
      "class": "demonstration-vant",
      "lc_id": "27vaAkZV0x",
      "__children": [],
      "__text__": "NumberKeyboard 数字键盘"
    }
  }
});
// CONCATENATED MODULE: ./src/map/load.js
/**
 * 加载外部代码资源
 */




window.templateSourceMap = template_index;
window.dataSourceMap = data_index;
window.methodSourceMap = method_index;
window.styleSourceMap = style_index;

/***/ })

}]);