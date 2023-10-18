let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
    filter_btn[i].addEventListener('click', function () {
        for (let j = 0; j < filter_btn.length; j++) {
            filter_btn[j].classList.remove('active');
        }
        let select_tab = filter_btn[i].getAttribute('data-tab');
        filter_btn[i].classList.add('active');
        for (let t = 0; t < tab_items.length; t++) {
            document.querySelector('.tab-filter-item-container').style.height =
                tab_items[t].scrollHeight + 'px';
            if (tab_items[t].classList.contains(select_tab)) {
                tab_items[t].classList.add('select_tab');
            } else {
                tab_items[t].classList.remove('select_tab');
            }
        }
    });
}

for (let th = 0; th < tab_items.length; th++) {
    document.querySelector('.tab-filter-item-container').style.height =
        tab_items[th].scrollHeight + 'px';
}


let filter_btn2 = document.querySelectorAll('.filter-btn2');
let tab_items2 = document.querySelectorAll('.tab-item2');

for (let i = 0; i < filter_btn2.length; i++) {
    filter_btn2[i].addEventListener('click', function () {
        for (let j = 0; j < filter_btn2.length; j++) {
            filter_btn2[j].classList.remove('active');
        }
        let select_tab = filter_btn2[i].getAttribute('data-tab');
        filter_btn2[i].classList.add('active');
        for (let t = 0; t < tab_items2.length; t++) {
            document.querySelector('.tab-filter-item-container2').style.height =
                tab_items2[t].scrollHeight + 'px';
            if (tab_items2[t].classList.contains(select_tab)) {
                tab_items2[t].classList.add('select_tab');
            } else {
                tab_items2[t].classList.remove('select_tab');
            }
        }
    });
}

for (let th = 0; th < tab_items2.length; th++) {
    document.querySelector('.tab-filter-item-container2').style.height =
        tab_items2[th].scrollHeight + 'px';
}


const tabsBtns = Array.from(document.querySelectorAll("[data-tab-id]"));
const tabs = Array.from(document.querySelectorAll("[data-tab]"));

let selectedTab = tabsBtns[0].dataset.tabId;

const hideTabs = () => {
    tabs
        .filter((tab) => tab.dataset.tab !== selectedTab)
        .forEach((tab) => {
            tab.classList.add("tabs__tab--hide");
        });

    tabsBtns
        .filter((tab) => tab.dataset.tabId !== selectedTab)
        .forEach((tab) => {
            tab.classList.add("tabs__tab-btn--not-selected");
        });
};
hideTabs();

const handleSelectTab = (e) => {
    selectedTab = e.target.dataset.tabId;

    tabs.forEach((tab) => {
        tab.classList.remove("tabs__tab--hide");
    });

    tabsBtns.forEach((tab) => {
        tab.classList.remove("tabs__tab-btn--not-selected");
    });

    hideTabs();
};

tabsBtns.forEach((btn) => {
    btn.addEventListener("click", handleSelectTab);
});
