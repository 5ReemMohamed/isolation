document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const navLinks = document.querySelectorAll(".nav-link-custom");
  const sections = document.querySelectorAll("main section[id]");

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }

  function openMenu() {
    mobileMenu.classList.add("open");
    mobileOverlay.classList.add("open");
    document.body.classList.add("menu-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "إغلاق القائمة");
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    mobileOverlay.classList.remove("open");
    document.body.classList.remove("menu-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "فتح القائمة");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }

  function updateActiveLink() {
    let currentId = "home";
    const scrollPosition = window.scrollY + 150;

    sections.forEach(function (section) {
      if (scrollPosition >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      const isActive = link.getAttribute("href") === "#" + currentId;
      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  menuToggle.addEventListener("click", function () {
    if (mobileMenu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuClose.addEventListener("click", closeMenu);
  mobileOverlay.addEventListener("click", closeMenu);

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener(
    "scroll",
    function () {
      updateHeader();
      updateActiveLink();
    },
    { passive: true },
  );

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) {
      closeMenu();
    }
  });

  updateHeader();
  updateActiveLink();
  const revealElements = document.querySelectorAll(
    ".about-reveal, .services-reveal",
  );
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
  }
  const whatsappNumber = "966556449337";
  const serviceButtons = document.querySelectorAll("[data-service]");
  serviceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const serviceName = button.getAttribute("data-service");
      const message =
        "مرحباً، أرغب في الاستفسار عن خدمة " +
        serviceName +
        ". أرجو التواصل معي لمعرفة التفاصيل.";
      const whatsappUrl =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  });
  const WHY_CHOOSE = [
    {
      icon: "fa-shield-halved",
      title: "حماية متكاملة",
      description:
        "حلول عزل تساعد على حماية المبنى من تسربات المياه والرطوبة والعوامل الجوية.",
    },
    {
      icon: "fa-award",
      title: "جودة في التنفيذ",
      description:
        "الاهتمام بتفاصيل العمل واختيار مواد العزل المناسبة لتحقيق أفضل نتيجة ممكنة.",
    },
    {
      icon: "fa-temperature-half",
      title: "عزل حراري فعّال",
      description:
        "حلول تساعد على تقليل انتقال الحرارة وتحسين الراحة داخل المبنى.",
    },
    {
      icon: "fa-magnifying-glass",
      title: "معاينة وتقييم",
      description:
        "تحديد احتياجات الموقع وفحص المشكلة قبل اختيار طريقة العزل المناسبة.",
    },
    {
      icon: "fa-house",
      title: "مناسب لمختلف المباني",
      description:
        "خدمات عزل للأسطح والخزانات والمسابح والمنازل والمنشآت المختلفة.",
    },
    {
      icon: "fa-headset",
      title: "تواصل سهل",
      description:
        "يمكنك التواصل معنا للاستفسار عن خدمات العزل وتحديد احتياجات مشروعك.",
    },
  ];
  const cardsContainer = document.getElementById("why-cards");
  cardsContainer.innerHTML = WHY_CHOOSE.map(
    (item, idx) =>
      ` <div class="col-12 col-sm-6 col-lg-4"> <article class="why-card reveal reveal-delay-${Math.min(idx + 1, 5)}"> <div class="why-card-content"> <div class="why-icon"> <i class="fa-solid ${item.icon}" aria-hidden="true"></i> </div> <div class="flex-grow-1"> <h3>${item.title}</h3> <p>${item.description}</p> </div> </div> </article> </div> `,
  ).join("");
  const PROCESS_STEPS = [
    {
      number: "01",
      icon: "fa-phone-volume",
      title: "التواصل والاستفسار",
      description: "نتعرف على احتياجاتك ونوع المشكلة التي تحتاج إلى حل.",
    },
    {
      number: "02",
      icon: "fa-magnifying-glass",
      title: "المعاينة والتقييم",
      description: "نفحص الموقع ونحدد حالة السطح أو الخزان واحتياجات العزل.",
    },
    {
      number: "03",
      icon: "fa-clipboard-check",
      title: "تحديد الحل المناسب",
      description: "نختار نظام العزل والمواد المناسبة لطبيعة المشروع.",
    },
    {
      number: "04",
      icon: "fa-person-digging",
      title: "تنفيذ أعمال العزل",
      description: "ننفذ الأعمال مع الاهتمام بتجهيز الأسطح والتفاصيل المهمة.",
    },
    {
      number: "05",
      icon: "fa-circle-check",
      title: "الفحص والتسليم",
      description: "نراجع العمل المنفذ ونتأكد من إتمام الخطوات المطلوبة.",
    },
  ];
  const desktopSteps = document.getElementById("process-desktop-steps");
  const mobileSteps = document.getElementById("process-mobile-steps");
  desktopSteps.innerHTML = PROCESS_STEPS.map(
    (step, idx) =>
      ` <div class="col"> <article class="process-step-desktop reveal reveal-delay-${Math.min(idx + 1, 5)}"> <div class="process-icon-wrap"> <div class="process-pulse" style="animation-delay:${idx * 0.3}s"></div> <div class="process-icon-circle"> <i class="fa-solid ${step.icon}" aria-hidden="true"></i> </div> <span class="process-number">${step.number}</span> </div> <h3 class="process-step-title">${step.title}</h3> <p class="process-step-description">${step.description}</p> </article> </div> `,
  ).join("");
  mobileSteps.innerHTML = PROCESS_STEPS.map(
    (step, idx) =>
      ` <article class="process-mobile-step reveal reveal-delay-${Math.min(idx + 1, 5)}"> <div class="process-mobile-icon"> <i class="fa-solid ${step.icon}" aria-hidden="true"></i> <span class="process-mobile-number">${idx + 1}</span> </div> <div class="process-mobile-content"> <h3>${step.title}</h3> <p>${step.description}</p> </div> </article> `,
  ).join("");
  const SERVICE_AREAS = [
    {
      name: "أبها",
      description:
        "خدمات عزل وحماية للمنازل والمنشآت في أبها، مع اختيار الحل المناسب لطبيعة المبنى.",
      serviceLinks: [
        "عزل الأسطح من تسربات المياه",
        "العزل الحراري للأسطح",
        "عزل خزانات المياه",
      ],
    },
    {
      name: "خميس مشيط",
      description:
        "حلول عزل للأسطح والخزانات والمسابح، للمساعدة في حماية المباني من التسربات والرطوبة.",
      serviceLinks: [
        "العزل المائي للأسطح",
        "عزل المسابح والخزانات",
        "معالجة تسربات المياه",
      ],
    },
    {
      name: "جازان",
      description:
        "خدمات عزل مناسبة للمباني السكنية والتجارية، مع مراعاة احتياجات كل مشروع.",
      serviceLinks: [
        "عزل الأسطح",
        "العزل الحراري والمائي",
        "صيانة ومعالجة العزل",
      ],
    },
    {
      name: "محايل عسير",
      description:
        "خدمات عزل للمنازل والمنشآت للمساعدة في تقليل آثار الرطوبة وتسربات المياه.",
      serviceLinks: ["عزل الأسطح", "عزل خزانات المياه", "كشف ومعالجة التسربات"],
    },
    {
      name: "الدرب",
      description:
        "حلول عزل للمشاريع السكنية والمنشآت مع تقييم الاحتياجات واختيار نظام العزل الملائم.",
      serviceLinks: [
        "عزل الأسطح المائي",
        "العزل الحراري",
        "معالجة مشكلات العزل",
      ],
    },
  ];
  const areasGrid = document.getElementById("areas-grid");
  const areaCards = SERVICE_AREAS.map(
    (area, idx) =>
      ` <div class="col-12 col-sm-6 col-lg-4"> <article class="area-card reveal reveal-delay-${Math.min(idx + 1, 5)}"> <div class="area-card-heading"> <div class="area-icon"> <i class="fa-solid fa-location-dot" aria-hidden="true"></i> </div> <h3>${area.name}</h3> </div> <p class="area-description">${area.description}</p> <ul class="area-services"> ${area.serviceLinks.map((link) => ` <li> <a href="#contact"> <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> <span>${link}</span> </a> </li> `).join("")} </ul> </article> </div> `,
  ).join("");
  const contactCard = ` <div class="col-12 col-sm-6 col-lg-4"> <div class="area-cta-card reveal reveal-delay-5"> <div class="area-cta-icon"> <i class="fa-solid fa-map-location-dot" aria-hidden="true"></i> </div> <h3>لا تجد منطقتك؟</h3> <p>تواصل معنا للتأكد من تغطية منطقتك بخدمات العزل لدينا.</p> <a class="area-cta-button" href="https://wa.me/966556449337?text=${encodeURIComponent("مرحباً، أرغب في الاستفسار عن توفر خدمات العزل في منطقتي.")} " target="_blank" rel="noopener noreferrer" > <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> تواصل معنا </a> </div> </div> `;
  areasGrid.innerHTML = areaCards + contactCard;
  const FAQ_ITEMS = [
    {
      question: "ما أنواع خدمات العزل التي تقدمونها؟",
      answer:
        "نقدم خدمات العزل المائي والحراري للأسطح، وعزل خزانات المياه والمسابح، بالإضافة إلى معالجة تسربات المياه وصيانة العزل حسب احتياجات الموقع.",
    },
    {
      question: "هل تقدمون عزلًا مائيًا وحراريًا للأسطح؟",
      answer:
        "نعم، يمكن تنفيذ العزل المائي للحماية من تسربات المياه، والعزل الحراري للمساعدة في تقليل انتقال الحرارة، وفقًا لحالة السطح ونوع المبنى.",
    },
    {
      question: "هل تشمل خدماتكم عزل خزانات المياه والمسابح؟",
      answer:
        "نعم، تشمل الخدمات عزل الخزانات والمسابح باستخدام نظام عزل مناسب لطبيعة الاستخدام وحالة السطح، بعد تقييم متطلبات المشروع.",
    },
    {
      question: "ما المناطق التي تغطيها خدماتكم؟",
      answer:
        "نستهدف تقديم خدمات العزل في مناطق عسير وجازان، ومنها أبها وخميس مشيط ومحايل عسير والدرب وجازان. يُرجى التواصل معنا للتأكد من توفر الخدمة في موقعك.",
    },
    {
      question: "كيف أعرف نوع العزل المناسب لمبناي؟",
      answer:
        "يعتمد اختيار العزل على طبيعة المكان، ومصدر التسرب أو الحرارة، وحالة السطح، ونوع الاستخدام. تساعد المعاينة وتقييم الحالة على تحديد الحل الأنسب.",
    },
    {
      question: "هل يمكن معالجة تسربات المياه الموجودة بالفعل؟",
      answer:
        "نعم، يمكن تقييم مصدر التسرب وتحديد سبب المشكلة ثم اقتراح طريقة المعالجة المناسبة. تعتمد النتيجة على حالة الموقع ومصدر التسرب.",
    },
    {
      question: "كيف يمكنني طلب الخدمة أو الاستفسار عن التكلفة؟",
      answer:
        "يمكنك التواصل معنا لتوضيح نوع الخدمة وموقع المشروع وتفاصيل المشكلة، ثم الاستفسار عن المعاينة والتكلفة المتوقعة.",
    },
  ];
  const faqList = document.getElementById("faq-list");
  faqList.innerHTML = FAQ_ITEMS.map(
    (item, idx) =>
      ` <article class="faq-item ${idx === 0 ? "active" : ""}"> <button type="button" class="faq-question" id="faq-question-${idx}" aria-expanded="${idx === 0 ? "true" : "false"}" aria-controls="faq-answer-${idx}" > <span>${item.question}</span> <span class="faq-chevron" aria-hidden="true"> <i class="fa-solid fa-chevron-down"></i> </span> </button> <div class="faq-answer" id="faq-answer-${idx}" role="region" aria-labelledby="faq-question-${idx}" ${idx === 0 ? "" : "inert"} > <div class="faq-answer-inner"> <p>${item.answer}</p> </div> </div> </article> `,
  ).join("");
  const faqItems = [...faqList.querySelectorAll(".faq-item")];
  faqItems.forEach((item, idx) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    button.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("active");
      faqItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector(".faq-question");
        const otherAnswer = otherItem.querySelector(".faq-answer");
        otherItem.classList.remove("active");
        otherButton.setAttribute("aria-expanded", "false");
        otherAnswer.setAttribute("inert", "");
      });
      if (shouldOpen) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
        answer.removeAttribute("inert");
      }
    });
  });
  const CONTACT_INFO = {
    phone: "0556449337",
    phoneIntl: "+966556449337",
    whatsapp: "966556449337",
    areas: ["أبها", "خميس مشيط", "جازان", "محايل عسير", "الدرب"],
  };
  const SERVICE_OPTIONS = [
    { value: "عزل الأسطح", label: "عزل الأسطح" },
    { value: "عزل الخزانات", label: "عزل الخزانات" },
    { value: "عزل الحمامات", label: "عزل الحمامات" },
    { value: "العزل المائي", label: "العزل المائي" },
    { value: "العزل الحراري", label: "العزل الحراري" },
    { value: "عزل المسابح", label: "عزل المسابح" },
    { value: "كشف ومعالجة التسربات", label: "كشف ومعالجة التسربات" },
    { value: "خدمات عزل أخرى", label: "خدمات عزل أخرى" },
  ];
  const CITY_OPTIONS = [
    { value: "أبها", label: "أبها" },
    { value: "خميس مشيط", label: "خميس مشيط" },
    { value: "جازان", label: "جازان" },
    { value: "محايل عسير", label: "محايل عسير" },
    { value: "الدرب", label: "الدرب" },
    { value: "أحد رفيدة", label: "أحد رفيدة" },
    { value: "بيش", label: "بيش" },
    { value: "مدينة أخرى", label: "مدينة أخرى" },
  ];
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("contactName");
  const phoneInput = document.getElementById("contactPhone");
  const serviceInput = document.getElementById("contactService");
  const cityInput = document.getElementById("contactCity");
  const detailsInput = document.getElementById("contactDetails");
  const successMessage = document.getElementById("contactSuccess");
  const failureMessage = document.getElementById("contactFailure");
  const serviceNotice = document.getElementById("selectedServiceNotice");
  document.getElementById("contactPhoneText").textContent = CONTACT_INFO.phone;
  document.querySelectorAll("#contact .contact-btn").forEach((link) => {
    link.href = "tel:" + CONTACT_INFO.phoneIntl;
  });
  document.getElementById("contactAreas").innerHTML = CONTACT_INFO.areas
    .map((area) => `<span class="area-tag">${area}</span>`)
    .join("");
  const params = new URLSearchParams(window.location.search);
  const selectedService = params.get("service");
  if (selectedService) {
    const normalizedService = selectedService.trim().toLowerCase();
    const matchedService = SERVICE_OPTIONS.find(
      (option) =>
        option.value.toLowerCase() === normalizedService ||
        option.label.toLowerCase() === normalizedService,
    );
    if (matchedService) {
      serviceInput.value = matchedService.value;
      serviceNotice.textContent = "الخدمة المحددة: " + matchedService.label;
      serviceNotice.classList.remove("d-none");
    }
  }
  function setFieldError(field, message) {
    const errorElement = document.getElementById(field.id + "Error");
    field.classList.toggle("is-invalid", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");
    errorElement.textContent = message || "";
    errorElement.classList.toggle("show", Boolean(message));
  }
  function validateForm() {
    let valid = true;
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const service = serviceInput.value;
    const city = cityInput.value;
    const errors = {
      contactName: !name
        ? "الرجاء إدخال الاسم الكامل"
        : name.length < 2
          ? "الاسم يجب أن يتكون من حرفين على الأقل"
          : "",
      contactPhone: !phone
        ? "الرجاء إدخال رقم الجوال"
        : !/^[0-9+\s()-]{8,20}$/.test(phone)
          ? "الرجاء إدخال رقم جوال صحيح"
          : !/^[0-9+\s()-]+$/.test(phone)
            ? "رقم الجوال يحتوي على أحرف غير صحيحة"
            : "",
      contactService: !service ? "الرجاء اختيار نوع الخدمة" : "",
      contactCity: !city ? "الرجاء اختيار المدينة" : "",
    };
    const fields = {
      contactName: nameInput,
      contactPhone: phoneInput,
      contactService: serviceInput,
      contactCity: cityInput,
    };
    Object.entries(errors).forEach(([key, message]) => {
      setFieldError(fields[key], message);
      if (message) valid = false;
    });
    return valid;
  }
  [nameInput, phoneInput, serviceInput, cityInput].forEach((field) => {
    field.addEventListener("input", () => {
      setFieldError(field, "");
      failureMessage.classList.remove("show");
    });
    field.addEventListener("change", () => {
      setFieldError(field, "");
      failureMessage.classList.remove("show");
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.classList.remove("show");
    failureMessage.classList.remove("show");
    if (!validateForm()) {
      failureMessage.classList.add("show");
      const firstInvalid = form.querySelector(".is-invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const service = serviceInput.value;
    const city = cityInput.value;
    const details = detailsInput.value.trim();
    const message = [
      "مرحباً، أريد طلب عرض سعر لخدمات العزل.",
      "",
      "الاسم: " + name,
      "رقم الجوال: " + phone,
      "نوع الخدمة: " + service,
      "المدينة: " + city,
      details ? "تفاصيل إضافية: " + details : "",
    ]
      .filter(Boolean)
      .join("\n");
    successMessage.classList.add("show");
    const whatsappUrl =
      "https://wa.me/" +
      CONTACT_INFO.whatsapp +
      "?text=" +
      encodeURIComponent(message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
   
const footerCompanyData = {
  name: "شركة العزل",
  tagline: "حماية تدوم وجودة تثق بها",
  phoneDisplay: "0556449337",
  phoneInternational: "+966556449337",
  whatsappNumber: "966556449337",
  address: "خميس مشيط، أبها، جازان، محايل عسير، الدرب"
};

const footerServicesData = [
  { title: "عزل الأسطح", href: "#services" },
  { title: "عزل خزانات المياه", href: "#services" },
  { title: "عزل الحمامات", href: "#services" },
  { title: "العزل الحراري", href: "#services" },
  { title: "العزل المائي", href: "#services" },
  { title: "عزل المسابح", href: "#services" },
  { title: "كشف ومعالجة التسربات", href: "#services" }
];

const footerAreasData = [
  { title: "خميس مشيط", href: "#areas" },
  { title: "أبها", href: "#areas" },
  { title: "جازان", href: "#areas" },
  { title: "محايل عسير", href: "#areas" },
  { title: "الدرب", href: "#areas" }
];

const footerQuickLinksData = [
  { title: "الرئيسية", href: "#home" },
  { title: "من نحن", href: "#about" },
  { title: "خدماتنا", href: "#services" },
  { title: "تواصل معنا", href: "#contact" }
];

document.getElementById("footer-company-name").textContent =
  footerCompanyData.name;

document.getElementById("footer-company-tagline").textContent =
  footerCompanyData.tagline;

document.getElementById("footer-copyright-name").textContent =
  footerCompanyData.name;

document.getElementById("footer-phone").textContent =
  footerCompanyData.phoneDisplay;

document.getElementById("footer-phone-link").href =
  "tel:" + footerCompanyData.phoneInternational;

document.getElementById("footer-address").textContent =
  footerCompanyData.address;

document.getElementById("footer-whatsapp-link").href =
  "https://wa.me/" + footerCompanyData.whatsappNumber;

document.getElementById("footer-year").textContent =
  new Date().getFullYear();

function renderFooterLinks(containerId, items) {
  const container = document.getElementById(containerId);
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    const icon = document.createElement("i");
    const label = document.createElement("span");

    link.className = "footer-link";
    link.href = item.href;

    icon.className = "fa-solid fa-angle-left footer-link-icon";
    icon.setAttribute("aria-hidden", "true");

    label.textContent = item.title;

    link.append(icon, label);
    li.appendChild(link);
    fragment.appendChild(li);
  });

  container.replaceChildren(fragment);
}

renderFooterLinks("footer-services", footerServicesData);
renderFooterLinks("footer-areas", footerAreasData);

const footerQuickLinks = footerQuickLinksData;
void footerQuickLinks;
 
});
