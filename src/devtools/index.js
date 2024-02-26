chrome.devtools.panels.create('demo panel', 'icon.png', 'devtools/panel.html', () => {
    console.log('user switched to this panel');
});