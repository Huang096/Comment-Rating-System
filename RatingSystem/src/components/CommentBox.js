import React, { useState } from 'react';

function CommentBox() {
  const [value, setValue] = useState('');

  const style = {
    width:'500px',
    height: '100px',
    //position: 'absolute',
    margin: '30px 0px'

  }

  return (
    <textarea
    style = {style}
      value={value}
      onChange={e => setValue(e.target.value)}  // 当用户输入时，更新输入框的值
      placeholder="What did you like or dislike? What did you use this product for?"  // 设置提示文字
    />
  );
}

export default CommentBox;
