
document.addEventListener("DOMContentLoaded", function () {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  const setHTML = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = value;
  };

  const whatsappNumber = "966556449337";
  const whatsappURL = (message = "") =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const openWhatsApp = (message) => {
    window.open(whatsappURL(message), "_blank", "noopener,noreferrer");
  };

  const SERVICE_AREAS = [
    {
      name: "أبها",
      description: "خدمات عزل وحماية للمنازل والمنشآت في أبها، مع اختيار الحل المناسب لطبيعة المبنى.",
      serviceLinks: ["عزل الأسطح من تسربات المياه", "العزل الحراري للأسطح", "عزل خزانات المياه"]
    },
    {
      name: "خميس مشيط",
      description: "حلول عزل للأسطح والخزانات والمسابح، للمساعدة في حماية المباني من التسربات والرطوبة.",
      serviceLinks: ["العزل المائي للأسطح", "عزل المسابح والخزانات", "معالجة تسربات المياه"]
    },
    {
      name: "جازان",
      description: "خدمات عزل مناسبة للمباني السكنية والتجارية، مع مراعاة احتياجات كل مشروع.",
      serviceLinks: ["عزل الأسطح", "العزل الحراري والمائي", "صيانة ومعالجة العزل"]
    },
    {
      name: "محايل عسير",
      description: "خدمات عزل للمنازل والمنشآت للمساعدة في تقليل آثار الرطوبة وتسربات المياه.",
      serviceLinks: ["عزل الأسطح", "عزل خزانات المياه", "كشف ومعالجة التسربات"]
    },
    {
      name: "الدرب",
      description: "حلول عزل للمشاريع السكنية والمنشآت مع تقييم الاحتياجات واختيار نظام العزل الملائم.",
      serviceLinks: ["عزل الأسطح المائي", "العزل الحراري", "معالجة مشكلات العزل"]
    },
    {
      name: "بيشة",
      description: "خدمات عزل للأسطح وخزانات المياه والمسابح في بيشة، للمساعدة في حماية المباني من تسربات المياه وتأثيرات الحرارة.",
      serviceLinks: ["عزل الأسطح المائي والحراري", "عزل خزانات المياه والمسابح", "معالجة تسربات المياه"]
    },
    {
      name: "نجران",
      description: "حلول عزل مائي وحراري للمنازل والمنشآت في نجران، مع اختيار أنظمة العزل المناسبة لاحتياجات كل مشروع.",
      serviceLinks: ["عزل الأسطح من التسربات", "العزل الحراري للأسطح", "عزل الخزانات ومعالجة التسربات"]
    }
  ];

  const SERVICE_OPTIONS = [
    { value: "عزل الأسطح", label: "عزل الأسطح" },
    { value: "عزل الخزانات", label: "عزل الخزانات" },
    { value: "عزل الحمامات", label: "عزل الحمامات" },
    { value: "العزل المائي", label: "العزل المائي" },
    { value: "العزل الحراري", label: "العزل الحراري" },
    { value: "عزل المسابح", label: "عزل المسابح" },
    { value: "كشف ومعالجة التسربات", label: "كشف ومعالجة التسربات" },
    { value: "خدمات عزل أخرى", label: "خدمات عزل أخرى" }
  ];

  const CONTACT_INFO = {
    phone: "0556449337",
    phoneIntl: "+966556449337",
    whatsapp: "966556449337",
    areas: SERVICE_AREAS.map(area => area.name)
  };

  const WHY_CHOOSE = [
    {
      icon: "fa-shield-halved",
      title: "حماية متكاملة",
      description: "حلول عزل تساعد على حماية المبنى من تسربات المياه والرطوبة والعوامل الجوية."
    },
    {
      icon: "fa-award",
      title: "جودة في التنفيذ",
      description: "الاهتمام بتفاصيل العمل واختيار مواد العزل المناسبة لتحقيق أفضل نتيجة ممكنة."
    },
    {
      icon: "fa-temperature-half",
      title: "عزل حراري فعّال",
      description: "حلول تساعد على تقليل انتقال الحرارة وتحسين الراحة داخل المبنى."
    },
    {
      icon: "fa-magnifying-glass",
      title: "معاينة وتقييم",
      description: "تحديد احتياجات الموقع وفحص المشكلة قبل اختيار طريقة العزل المناسبة."
    },
    {
      icon: "fa-house",
      title: "مناسب لمختلف المباني",
      description: "خدمات عزل للأسطح والخزانات والمسابح والمنازل والمنشآت المختلفة."
    },
    {
      icon: "fa-headset",
      title: "تواصل سهل",
      description: "يمكنك التواصل معنا للاستفسار عن خدمات العزل وتحديد احتياجات مشروعك."
    }
  ];

  const PROCESS_STEPS = [
    {
      number: "01",
      icon: "fa-phone-volume",
      title: "التواصل والاستفسار",
      description: "نتعرف على احتياجاتك ونوع المشكلة التي تحتاج إلى حل."
    },
    {
      number: "02",
      icon: "fa-magnifying-glass",
      title: "المعاينة والتقييم",
      description: "نفحص الموقع ونحدد حالة السطح أو الخزان واحتياجات العزل."
    },
    {
      number: "03",
      icon: "fa-clipboard-check",
      title: "تحديد الحل المناسب",
      description: "نختار نظام العزل والمواد المناسبة لطبيعة المشروع."
    },
    {
      number: "04",
      icon: "fa-person-digging",
      title: "تنفيذ أعمال العزل",
      description: "ننفذ الأعمال مع الاهتمام بتجهيز الأسطح والتفاصيل المهمة."
    },
    {
      number: "05",
      icon: "fa-circle-check",
      title: "الفحص والتسليم",
      description: "نراجع العمل المنفذ ونتأكد من إتمام الخطوات المطلوبة."
    }
  ];

  const FAQ_ITEMS = [
    {
      question: "ما أنواع خدمات العزل التي تقدمونها؟",
      answer: "نقدم خدمات العزل المائي والحراري للأسطح، وعزل خزانات المياه والمسابح، بالإضافة إلى معالجة تسربات المياه وصيانة العزل حسب احتياجات الموقع."
    },
    {
      question: "هل تقدمون عزلًا مائيًا وحراريًا للأسطح؟",
      answer: "نعم، يمكن تنفيذ العزل المائي للحماية من تسربات المياه، والعزل الحراري للمساعدة في تقليل انتقال الحرارة، وفقًا لحالة السطح ونوع المبنى."
    },
    {
      question: "هل تشمل خدماتكم عزل خزانات المياه والمسابح؟",
      answer: "نعم، تشمل الخدمات عزل الخزانات والمسابح باستخدام نظام عزل مناسب لطبيعة الاستخدام وحالة السطح، بعد تقييم متطلبات المشروع."
    },
    {
      question: "ما المناطق التي تغطيها خدماتكم؟",
      answer: "تشمل مناطق الخدمة المستهدفة أبها وخميس مشيط وجازان ومحايل عسير والدرب وبيشة ونجران. يُرجى التواصل معنا للتأكد من توفر الخدمة في موقعك."
    },
    {
      question: "كيف أعرف نوع العزل المناسب لمبناي؟",
      answer: "يعتمد اختيار العزل على طبيعة المكان ومصدر التسرب أو الحرارة وحالة السطح ونوع الاستخدام. تساعد المعاينة وتقييم الحالة على تحديد الحل الأنسب."
    },
    {
      question: "هل يمكن معالجة تسربات المياه الموجودة بالفعل؟",
      answer: "يمكن تقييم مصدر التسرب وتحديد سبب المشكلة ثم اقتراح طريقة المعالجة المناسبة. تعتمد النتيجة على حالة الموقع ومصدر التسرب."
    },
    {
      question: "كيف يمكنني طلب الخدمة أو الاستفسار عن التكلفة؟",
      answer: "يمكنك التواصل معنا لتوضيح نوع الخدمة وموقع المشروع وتفاصيل المشكلة، ثم الاستفسار عن المعاينة والتكلفة المتوقعة."
    }
  ];

  const header = $("#siteHeader");
  const menuToggle = $("#menuToggle");
  const menuClose = $("#menuClose");
  const mobileMenu = $("#mobileMenu");
  const mobileOverlay = $("#mobileOverlay");
  const navLinks = $$(".nav-link-custom");
  const sections = $$("main section[id]");

  function updateHeader() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  }

  function openMenu() {
    if (!mobileMenu || !mobileOverlay || !menuToggle) return;

    mobileMenu.classList.add("open");
    mobileOverlay.classList.add("open");
    document.body.classList.add("menu-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "إغلاق القائمة");
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  }

  function closeMenu() {
    if (!mobileMenu || !mobileOverlay || !menuToggle) return;

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

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop) currentId = section.id;
    });

    navLinks.forEach(link => {
      const active = link.getAttribute("href") === "#" + currentId;
      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (mobileMenu && mobileMenu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuClose) menuClose.addEventListener("click", closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("scroll", () => {
    updateHeader();
    updateActiveLink();
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) closeMenu();
  });

  updateHeader();
  updateActiveLink();

  const revealElements = $$(".about-reveal, .services-reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    revealElements.forEach(element => revealObserver.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("is-visible"));
  }

  $$("[data-service]").forEach(button => {
    button.addEventListener("click", () => {
      const serviceName = button.getAttribute("data-service") || "خدمات العزل";
      openWhatsApp(
        `مرحباً، أرغب في الاستفسار عن خدمة ${serviceName}. أرجو التواصل معي لمعرفة التفاصيل.`
      );
    });
  });

  const whyCards = $("#why-cards");

  if (whyCards) {
    whyCards.innerHTML = WHY_CHOOSE.map((item, index) => `
      <div class="col-12 col-sm-6 col-lg-4">
        <article class="why-card reveal reveal-delay-${Math.min(index + 1, 5)}">
          <div class="why-card-content">
            <div class="why-icon">
              <i class="fa-solid ${item.icon}" aria-hidden="true"></i>
            </div>
            <div class="flex-grow-1">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </article>
      </div>
    `).join("");
  }

  const desktopSteps = $("#process-desktop-steps");

  if (desktopSteps) {
    desktopSteps.innerHTML = PROCESS_STEPS.map((step, index) => `
      <div class="col">
        <article class="process-step-desktop reveal reveal-delay-${Math.min(index + 1, 5)}">
          <div class="process-icon-wrap">
            <div class="process-pulse" style="animation-delay:${index * 0.3}s"></div>
            <div class="process-icon-circle">
              <i class="fa-solid ${step.icon}" aria-hidden="true"></i>
            </div>
            <span class="process-number">${step.number}</span>
          </div>
          <h3 class="process-step-title">${step.title}</h3>
          <p class="process-step-description">${step.description}</p>
        </article>
      </div>
    `).join("");
  }

  const mobileSteps = $("#process-mobile-steps");

  if (mobileSteps) {
    mobileSteps.innerHTML = PROCESS_STEPS.map((step, index) => `
      <article class="process-mobile-step reveal reveal-delay-${Math.min(index + 1, 5)}">
        <div class="process-mobile-icon">
          <i class="fa-solid ${step.icon}" aria-hidden="true"></i>
          <span class="process-mobile-number">${index + 1}</span>
        </div>
        <div class="process-mobile-content">
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </div>
      </article>
    `).join("");
  }

  const areasGrid = $("#areas-grid");

  if (areasGrid) {
    const areaCards = SERVICE_AREAS.map((area, index) => `
      <div class="col-12 col-sm-6 col-lg-4">
        <article class="area-card reveal reveal-delay-${Math.min(index + 1, 5)}">
          <div class="area-card-heading">
            <div class="area-icon">
              <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
            </div>
            <h3>${area.name}</h3>
          </div>
          <p class="area-description">${area.description}</p>
          <ul class="area-services">
            ${area.serviceLinks.map(link => `
              <li>
                <a href="#contact">
                  <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
                  <span>${link}</span>
                </a>
              </li>
            `).join("")}
          </ul>
        </article>
      </div>
    `).join("");

    const contactCard = `
      <div class="col-12 col-sm-6 col-lg-8">
        <div class="area-cta-card reveal reveal-delay-5">
          <div class="area-cta-icon">
            <i class="fa-solid fa-map-location-dot" aria-hidden="true"></i>
          </div>
          <h3>لا تجد منطقتك؟</h3>
          <p>تواصل معنا للتأكد من تغطية منطقتك بخدمات العزل لدينا.</p>
          <a class="area-cta-button" href="${whatsappURL("مرحباً، أرغب في الاستفسار عن توفر خدمات العزل في منطقتي.")}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
            تواصل معنا
          </a>
        </div>
      </div>
    `;

    areasGrid.innerHTML = areaCards + contactCard;
  }

  const faqList = $("#faq-list");

  if (faqList) {
    faqList.innerHTML = FAQ_ITEMS.map((item, index) => `
      <article class="faq-item ${index === 0 ? "active" : ""}">
        <button type="button" class="faq-question"
          id="faq-question-${index}"
          aria-expanded="${index === 0}"
          aria-controls="faq-answer-${index}">
          <span>${item.question}</span>
          <span class="faq-chevron" aria-hidden="true">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </button>
        <div class="faq-answer" id="faq-answer-${index}"
          role="region"
          aria-labelledby="faq-question-${index}"
          ${index === 0 ? "" : "inert"}>
          <div class="faq-answer-inner">
            <p>${item.answer}</p>
          </div>
        </div>
      </article>
    `).join("");

    const faqItems = $$(".faq-item", faqList);

    faqItems.forEach(item => {
      const button = $(".faq-question", item);
      const answer = $(".faq-answer", item);

      if (!button || !answer) return;

      button.addEventListener("click", () => {
        const shouldOpen = !item.classList.contains("active");

        faqItems.forEach(otherItem => {
          otherItem.classList.remove("active");

          const otherButton = $(".faq-question", otherItem);
          const otherAnswer = $(".faq-answer", otherItem);

          if (otherButton) otherButton.setAttribute("aria-expanded", "false");
          if (otherAnswer) otherAnswer.setAttribute("inert", "");
        });

        if (shouldOpen) {
          item.classList.add("active");
          button.setAttribute("aria-expanded", "true");
          answer.removeAttribute("inert");
        }
      });
    });
  }

  const contactPhoneText = $("#contactPhoneText");
  if (contactPhoneText) contactPhoneText.textContent = CONTACT_INFO.phone;

  $$("#contact .contact-btn").forEach(link => {
    link.href = "tel:" + CONTACT_INFO.phoneIntl;
  });

  const contactAreas = $("#contactAreas");

  if (contactAreas) {
    contactAreas.innerHTML = CONTACT_INFO.areas.map(area =>
      `<span class="area-tag">${area}</span>`
    ).join("");
  }

  const form = $("#contactForm");
  const nameInput = $("#contactName");
  const phoneInput = $("#contactPhone");
  const serviceInput = $("#contactService");
  const cityInput = $("#contactCity");
  const detailsInput = $("#contactDetails");
  const successMessage = $("#contactSuccess");
  const failureMessage = $("#contactFailure");
  const serviceNotice = $("#selectedServiceNotice");

  const params = new URLSearchParams(window.location.search);
  const selectedService = params.get("service");

  if (selectedService && serviceInput) {
    const normalizedService = selectedService.trim().toLowerCase();

    const matchedService = SERVICE_OPTIONS.find(option =>
      option.value.toLowerCase() === normalizedService ||
      option.label.toLowerCase() === normalizedService
    );

    if (matchedService) {
      serviceInput.value = matchedService.value;

      if (serviceNotice) {
        serviceNotice.textContent = "الخدمة المحددة: " + matchedService.label;
        serviceNotice.classList.remove("d-none");
      }
    }
  }

  function setFieldError(field, message) {
    if (!field) return;

    const errorElement = document.getElementById(field.id + "Error");

    field.classList.toggle("is-invalid", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");

    if (errorElement) {
      errorElement.textContent = message || "";
      errorElement.classList.toggle("show", Boolean(message));
    }
  }

  function validateForm() {
    if (!form || !nameInput || !phoneInput || !serviceInput || !cityInput) {
      return false;
    }

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
          : "",

      contactService: !service ? "الرجاء اختيار نوع الخدمة" : "",
      contactCity: !city ? "الرجاء اختيار المدينة" : ""
    };

    const fields = {
      contactName: nameInput,
      contactPhone: phoneInput,
      contactService: serviceInput,
      contactCity: cityInput
    };

    Object.entries(errors).forEach(([key, message]) => {
      setFieldError(fields[key], message);
      if (message) valid = false;
    });

    return valid;
  }

  [nameInput, phoneInput, serviceInput, cityInput].filter(Boolean).forEach(field => {
    const clearError = () => {
      setFieldError(field, "");
      if (failureMessage) failureMessage.classList.remove("show");
    };

    field.addEventListener("input", clearError);
    field.addEventListener("change", clearError);
  });

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (successMessage) successMessage.classList.remove("show");
      if (failureMessage) failureMessage.classList.remove("show");

      if (!validateForm()) {
        if (failureMessage) failureMessage.classList.add("show");

        const firstInvalid = form.querySelector(".is-invalid");
        if (firstInvalid) firstInvalid.focus();

        return;
      }

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const service = serviceInput.value;
      const city = cityInput.value;
      const details = detailsInput ? detailsInput.value.trim() : "";

      const message = [
        "مرحباً، أريد طلب عرض سعر لخدمات العزل.",
        "",
        "الاسم: " + name,
        "رقم الجوال: " + phone,
        "نوع الخدمة: " + service,
        "المدينة: " + city,
        details ? "تفاصيل إضافية: " + details : ""
      ].filter(Boolean).join("\n");

      if (successMessage) successMessage.classList.add("show");

      openWhatsApp(message);

      form.reset();

      [nameInput, phoneInput, serviceInput, cityInput].filter(Boolean).forEach(field => {
        setFieldError(field, "");
      });

      if (serviceNotice) serviceNotice.classList.add("d-none");
    });
  }

  const footerCompanyData = {
    name: "شركة التاج",
    tagline: "حماية تدوم وجودة تثق بها",
    phoneDisplay: "0556449337",
    phoneInternational: "+966556449337",
    whatsappNumber: "966556449337",
    address: "خميس مشيط، أبها، جازان، محايل عسير، الدرب، بيشة، نجران"
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

  const footerAreasData = SERVICE_AREAS.map(area => ({
    title: area.name,
    href: "#areas"
  }));

  setText("footer-company-name", footerCompanyData.name);
  setText("footer-company-tagline", footerCompanyData.tagline);
  setText("footer-copyright-name", footerCompanyData.name);
  setText("footer-phone", footerCompanyData.phoneDisplay);
  setText("footer-address", footerCompanyData.address);
  setText("footer-year", new Date().getFullYear());

  const footerPhoneLink = $("#footer-phone-link");
  if (footerPhoneLink) {
    footerPhoneLink.href = "tel:" + footerCompanyData.phoneInternational;
  }

  const footerWhatsAppLink = $("#footer-whatsapp-link");
  if (footerWhatsAppLink) {
    footerWhatsAppLink.href = `https://wa.me/${footerCompanyData.whatsappNumber}`;
    footerWhatsAppLink.target = "_blank";
    footerWhatsAppLink.rel = "noopener noreferrer";
  }

  function renderFooterLinks(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const fragment = document.createDocumentFragment();

    items.forEach(item => {
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

  const projectModalElement = $("#projectModal");
  const projectModalImage = $("#projectModalImage");
  const projectModalTitle = $("#projectModalTitle");

  if (
    projectModalElement &&
    projectModalImage &&
    projectModalTitle &&
    window.bootstrap &&
    window.bootstrap.Modal
  ) {
    const projectModal = bootstrap.Modal.getOrCreateInstance(projectModalElement);

    $$(".project-view").forEach(button => {
      button.addEventListener("click", () => {
        const imageUrl = button.dataset.image;
        const title = button.dataset.title || "تفاصيل العمل";

        if (!imageUrl) return;

        projectModalImage.src = imageUrl;
        projectModalImage.alt = title;
        projectModalTitle.textContent = title;

        projectModal.show();
      });
    });

    projectModalElement.addEventListener("hidden.bs.modal", () => {
      projectModalImage.removeAttribute("src");
      projectModalImage.alt = "";
    });
  }
});

