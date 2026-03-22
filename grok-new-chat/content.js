chrome.runtime.onMessage.addListener((message) => {
  const cmd = message.action;

  const config = {
    "action-1": {  selector: 'button[aria-label="新聊天"]' },
    "action-2": {  selector: 'button[aria-label="聊天历史记录"]' },
    // 复制上面任意一行的内容到下一行,只需要修改为
	// "action-2": {  selector: 'button[]' }, 
	// 上面的button[]的方框中填入你之前复制的选择器,比如aria-label="新聊天"这种
	// 不需要改动任何其他代码
    // =========================================================
    "action-10": {selector: '' }
  };

  const current = config[cmd];
  if (!current || !current.selector) {
    console.log('配置未找到或缺少 selector:', cmd);
    return;
  }

  const btn = document.querySelector(current.selector);
  if (btn) {
    btn.click();
    console.log('点击成功:', cmd);
  } else {
    console.log('没找到按钮:', current.selector);
  }
});
