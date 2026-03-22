chrome.runtime.onMessage.addListener((message) => {
  const cmd = message.action;

  const config = {
    "action-1": {  selector: 'button[aria-label="新聊天"]' },
    "action-2": {  selector: 'button[aria-label="聊天历史记录"]' },
    // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
    // 这里继续往下加就行了！例子：
    // "action-3": { urls: ["example.com", "baidu.com"], selector: 'button#my-button' },
    // "action-4": { urls: ["youtube.com"], selector: 'button[aria-label="Like"]' },
	/*
	"action-1": { 
		urls: [],                    // ← 空数组 = 所有页面都尝试
		selector: 'button[aria-label="新聊天"]' 
	}
	"action-1": { 
		selector: 'button[aria-label="新聊天"]'   // 完全不写 urls 也行
	}
	*/
    // =========================================================
    "action-10": { urls: [], selector: '' }
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