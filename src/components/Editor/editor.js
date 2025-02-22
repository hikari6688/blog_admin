import React from 'react';
import E from 'wangeditor'; //富文本编辑器
import { inject, observer, action } from 'mobx-react';
import './editor.css'
@inject('store')
@observer
class Editorx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: '',
      articalParams: {}
    };
  }
  //修改数据的方法
  setParams = (setKey, value) => {
    this.setState({ articalParams: { ...this.state.articalParams, [setKey]: value } });
  };
  //下拉框的回调
  onChange = value => {
    this.setParams('type', value);
  };
  //点击发布
  getSubmit = () => {
    console.log(this.state.articalParams);
  };
  //填写标题
  setArtical = e => {
    this.setParams('artical', e.target.value);
  };
  changeState = () => {
    console.log(store.title);
  };
  componentDidMount = value => {
    const  { store }= this.props;
    const elemMenu = this.refs.editorElemMenu;
    const elemBody = this.refs.editorElemBody;
    const editor = new E(elemMenu, elemBody);
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setParams('content', editor.txt.html());
      this.props.parent.getMessage(this.state.articalParams.content)
    };
    editor.customConfig.menus = [
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'video', // 插入视频
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ];
    editor.customConfig.uploadImgShowBase64 = true;
    editor.customConfig.uploadImgServer = store.config.uploadUrl; // 上传图片到服务器
    // 3M
    editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
    // 限制一次最多上传 5 张图片
    editor.customConfig.uploadImgMaxLength = 1;
    // 自定义文件名
    editor.customConfig.uploadFileName = 'file';
    // 将 timeout 时间改为 3s
    editor.customConfig.uploadImgTimeout = 5000;

    editor.customConfig.uploadImgHooks = {
      before: function(xhr, editor, files) {
        // 图片上传之前触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        // return {
        //     prevent: true,
        //     msg: '放弃上传'
        // }
        // alert("前奏");
      },
      success: function(xhr, editor, result) {
        console.log(result)
        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        var url = result.data.imgurl;
        editor.txt.append(`<img src="${ url }" style="display: block;"  alt="">`);
        // alert("成功");
      },
      fail: function(xhr, editor, result) {
        // 图片上传并返回结果，但图片插入错误时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        alert('失败');
      },
      error: function(xhr, editor) {
        // 图片上传出错时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        // alert("错误");
      },
      // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
      // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
      customInsert: function(insertImg, result, editor) {
        console.log(2333)
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        var url = result.data[0];
        insertImg(url);
        // result 必须是一个 JSON 格式字符串！！！否则报错
      }
    };    editor.create();
  };
  render() {
    return (
      <div className="text-area">
        <div ref="editorElemMenu" style={{ backgroundColor: '#f1f1f1', border: '1px solid #ccc' }} className="editorElem-menu"></div>
        <div
          style={{
            padding: '0 10px',
            overflowY: 'scroll',
            height: 300,
            border: '1px solid #ccc',
            borderTop: 'none'
          }}
          ref="editorElemBody"
          className="editorElem-body"
        ></div>
      </div>
    );
  }
}

export default Editorx;
