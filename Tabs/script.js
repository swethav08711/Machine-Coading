const tabsData = [
  {
    id: "tab1",
    title: "Tab 1",
    content: "Tab 1 content",
  },
  {
    id: "tab2",
    title: "Tab 2",
    content: "Tab 2 content",
  },
  {
    id: "tab3",
    title: "Tab 3",
    content: "Tab 3 content",
  },
  {
    id: "tab4",
    title: "Tab 4",
    content: "Tab 4 content",
  }
];

document.addEventListener("DOMContentLoaded", function () {
  let activeTab = tabsData[0].id;

  function renderTabs() {
    const tabContainer = document.querySelector("#tabContainer");
    const tabContentContainer = document.querySelector("#tabContentContainer");

    tabsData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.title;
      tabButton.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabButton);

      const tabContentdiv = document.createElement("div");
      tabContentdiv.id = tab.id;
      tabContentdiv.className = "tabContent";
      tabContentdiv.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      tabContentContainer.appendChild(tabContentdiv);
    });

    tabContainer.addEventListener("click", function (event) {
      if (event.target.matches(".tabLinks")) {
        const tabId = event.target.getAttribute("data-tab");

        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
    });
  }

  function openTab(tabId) {
    const tabContents = document.querySelectorAll(".tabContent");
    const tabLinks = document.querySelectorAll(".tabLinks");

    tabContents.forEach((tab) => tab.classList.remove("active"));
    tabLinks.forEach((tab) => tab.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    document
      .querySelector(`button[data-tab="${tabId}"]`)
      .classList.add("active");
  }
  renderTabs();

  document.getElementById(activeTab).classList.add("active");
  document
    .querySelector(`button[data-tab="${activeTab}"]`)
    .classList.add("active");
});
