# Kahoot Cheat Mode

This script provides a "cheat mode" for Kahoot games, allowing users to visually see which answers are correct or incorrect.

## Usage

### Bookmarklet Setup

1. **Create Bookmark:**
   - Open your web browser and create a new bookmark. 
   - Name it something like "Kahoot Cheat Mode".
   - In the URL or location field of the bookmark, paste the following script:

     ```javascript
     javascript:(function(){let t=document.createElement('div');t.style='position:fixed;bottom:10px;right:10px;z-index:10000';let c=document.createElement('input');c.type='checkbox',c.id='cheatModeToggle',c.onchange=function(){let q=document.querySelectorAll('.question');q.forEach(q=>{let a=q.querySelectorAll('.option');a.forEach(a=>{a.style.backgroundColor=this.checked?(a.getAttribute('data-correct')==='true'?'rgba(0,255,0,0.2)':'rgba(255,0,0,0.2)'):'',a.style.color=''})})};let l=document.createElement('label');l.htmlFor='cheatModeToggle',l.appendChild(document.createTextNode('Cheat Mode')),t.appendChild(c),t.appendChild(l),document.body.appendChild(t);const o=new MutationObserver(m=>{m.forEach(m=>{m.addedNodes&&m.addedNodes.length>0&&Array.from(m.addedNodes).forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&n.classList.contains('question')&&c.onchange()})})});o.observe(document.body,{childList:!0,subtree:!0}),document.addEventListener('keydown',e=>{e.key==='c'&&e.ctrlKey&&(c.checked=!c.checked,c.onchange(),e.preventDefault())})})();
     ```

2. **Using the Bookmarklet:**
   - Navigate to a Kahoot quiz in your browser.
   - Click the bookmark you just created to run the script. 

### Interaction

- **Toggle Cheat Mode:** After running the script, a "Cheat Mode" checkbox will appear in the bottom-right corner of your screen. Check this box to highlight correct (green) and incorrect (red) answers or uncheck it to disable highlighting.
- **Keyboard Shortcut:** You can toggle the cheat mode on/off by pressing `Ctrl + C` on your keyboard.

### Notes

- This script is meant for personal use only.
- The script relies on Kahoot's current DOM structure. If Kahoot changes this, the script might need updating.
- The script uses semi-transparent colors to not obscure the text of the answers.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### Acknowledgments

- Thanks to the Kahoot platform for providing engaging educational content.
- Thanks to the JavaScript community for the inspiration and resources to create this tool.

---

Feel free to contribute, suggest improvements, or report issues by opening an issue on this GitHub repository.
