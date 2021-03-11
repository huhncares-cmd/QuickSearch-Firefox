var searchContextMenu = {
    "id": "search",
    "title": "Search with QuickSearch™",
    "contexts": [
        "selection"
    ]
};
browser.contextMenus.create(searchContextMenu);

browser.contextMenus.onClicked.addListener(searchContextMenuAction);

function searchContextMenuAction(info, tab){
    if(localStorage.getItem("defaultEngine") == "" || localStorage.getItem("defaultEngine") == null || localStorage.getItem("defaultEngine") == undefined || localStorage.getItem("defaultEngine") == 0){
        const url = "https://www.google.com/search?q=" + info.selectionText;
        browser.tabs.create({url: url});
    } else {
        const url = localStorage.getItem("defaultEngine") + info.selectionText;
        browser.tabs.create({url: url});
    }
}