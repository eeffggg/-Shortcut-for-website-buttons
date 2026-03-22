# -Shortcut-for-website-buttons
原版作者：eeffggg
GitHub：[仓库链接](https://github.com/eeffggg/-Shortcut-for-website-buttons/)
许可证：GPL-3.0

类型:浏览器插件
适用:Chrome浏览器
用处:为网站上没有快捷方式的按钮添加快捷方式

下载文件夹grok-new-chat到桌面;

具体使用方法:
一:找到按钮的选择器(通俗讲选择器就是选中这个按钮元素的信息)
  1: 找到你要添加快捷方式的按钮,右键后点击"检查",就会打开开发者模式中的elements页面并且光标会跳到你选中的按钮的"附近"(注意这一点非常重要!是附近!)
  2: 随后你就可以在上下段落中寻找一个叫button的东西.一般而言,它长这样:
    "<button aria-label="聊天历史记录" role="button" 
    class="css-175oi2r r-1phboty r-rs99b7 r-lrvibr 
    r-1q9bdsx r-15ysp7h r-4wgw6l r-3pj75a r-1loqt21 
    r-o7ynqc r-6416eg r-1ny4l3l" type="button"...... "
  3: 然后把button后面的这个:
      某属性="值"
    复制下来, 比如上文就是: 
      aria-label="聊天历史记录"
    这就是选择器(注意: 实际情况千变万化,很可能"<button"后是其他的: 属性="值", 复制它就可以)
  4: 实在有困难复制带button的整段,喂给ai让它给你找合适的选择器

二:修改文件内容,增加你想要的网址
  1: 打开你桌面上下载的文件夹,里面有三个文件(你需要修改两个)
  2: 打开content.js,在const config = {处按照注释复制行 并 粘贴选择器(错误的选择器,会导致失败)
  3: 打开manifest.json: 你会看到有一行提示:"示例,不要改动此行,只需要复制上面的任意一行,
     然后将双引号内内容修改为 "你要添加的快捷方式的名字" 记得保存.

三:将插件导入到chrome:
  1: 在chrome中点击右上角三个点,然后找到扩展程序,点击管理扩展程序;
  2: 打开右上角的开发者模式
  3: 点击左上角的加载未打包的扩展程序,选中桌面的grok-new-chat文件夹,在管理插件的页面看到此插件即为成功
  4: 在左侧,"我的扩展程序"下有"键盘快捷键",点击"键盘快捷键", 找到"Grok 多快捷键增强版", 
     你应该能看到之前在manifest.json增加的"你要添加的快捷方式的名字" 点击它右侧的铅笔按钮,自定义它的快捷方式
  5:刷新页面, 此时你的快捷方式应该能用了


# -Shortcut-for-website-buttons
Original Author: eeffggg
GitHub: [Repository Link](https://github.com/eeffggg/-Shortcut-for-website-buttons/)
License: GPL-3.0

Type: Browser Extension
For: Chrome
Purpose: Add keyboard shortcuts to website buttons that do not have one by default.

Download the folder `grok-new-chat` to your desktop.

Usage Instructions:
1. Find the selector for the button (simply put, a selector is the information that identifies this button element)
   1. Locate the button you want to assign a shortcut to, right-click it and select **Inspect**. This will open the Elements panel in DevTools, with the cursor near the selected button (important: it will be near the button, not exactly on it).
   2. Look up and down the code for a `<button>` tag. It usually looks like this:
      `<button aria-label="Chat History" role="button"
      class="css-175oi2r r-1phboty r-rs99b7 r-lrvibr
      r-1q9bdsx r-15ysp7h r-4wgw6l r-3pj75a r-1loqt21
      r-o7ynqc r-6416eg r-1ny4l3l" type="button"......>`
   3. Copy one `attribute="value"` pair right after `<button>`.
      In the example above, that would be:
      `aria-label="Chat History"`
      This is your selector.
      Note: Real-world cases vary greatly — there may be a different `attribute="value"` after `<button>`. Just copy that one.
   4. If you have trouble, copy the entire `<button>` line and ask an AI to find a proper selector for you.

2. Modify the files to add your desired URL and shortcut
   1. Open the `grok-new-chat` folder on your desktop. There are three files; you need to edit two.
   2. Open `content.js`, find `const config = {`, then follow the comments to duplicate a line and paste your selector (an incorrect selector will cause the shortcut to fail).
   3. Open `manifest.json`: You will see a note saying "Example, do not modify this line. Just duplicate any line above it,
      then change the text inside the double quotes to the name of your shortcut." Remember to save.

3. Load the extension into Chrome
   1. In Chrome, click the three dots in the top-right corner, go to **Extensions**, then **Manage Extensions**.
   2. Enable **Developer mode** in the top-right corner.
   3. Click **Load unpacked** in the top-left, select the `grok-new-chat` folder on your desktop. The extension appearing in the list means success.
   4. On the left, under “My Extensions”, find **Keyboard shortcuts**. Click it, locate “Grok Multi-Shortcut Enhanced”,
      and you should see the shortcut name you added in `manifest.json`. Click the pencil icon next to it to set your custom key combination.
   5. Refresh the page. Your shortcut should now work.

