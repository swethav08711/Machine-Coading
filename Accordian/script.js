const accordianData = [
  {
    id: "accordion1",
    title: "Accordion 1",
    content: "Accordion 1 content",
  },
  {
    id: "accordion2",
    title: "Accordion 2",
    content: "Accordion 2 content",
  },
  {
    id: "accordion3",
    title: "Accordion 3",
    content: "Accordion 3 content",
  },
  {
    id: "accordion4",
    title: "Accordion 4",
    content: "Accordion 4 content",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const accordianContainer = document.querySelector("#accordian");

  accordianData.forEach((ele, index) => {
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("accordian-list");

    const sectionHeader = document.createElement("div");
    sectionHeader.textContent = ele.title;
    sectionHeader.classList.add("accordian-header");

    const sectionContent = document.createElement("div");
    sectionContent.innerHTML = `<p>${ele.content}</p>`;
    sectionContent.classList.add("accordian-content");

    sectionContainer.appendChild(sectionHeader);
    sectionContainer.appendChild(sectionContent);

    accordianContainer.appendChild(sectionContainer);

    console.log(index, sectionHeader.classList, );

    if (index === 0) {
      sectionContainer.classList.add("active");
      sectionContainer.style.display = "block";
    }
  });

  accordianContainer.addEventListener("click", function (event) {
    const header = event.target.closest(".accordian-header");
    if (!header) return;

    const sectionItem = header.parentNode;

    const content = sectionItem.querySelector(".accordian-content");
    const isActive = sectionItem.classList.contains("active");

    document.querySelectorAll(".accordian-list").forEach((ele) => {
      ele.classList.remove("active");
      ele.querySelector(".accordian-content").style.display = "none";
    });

    if (!isActive) {
      sectionItem.classList.add("active");
      content.style.display = "block";
    }
  });
});
