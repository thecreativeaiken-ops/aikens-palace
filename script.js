/* =========================================
   AIKEN'S PALACE
   LUXURY RESORT WEBSITE
   PREMIUM MAIN JAVASCRIPT
   FINAL FUNCTIONAL VERSION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       GLOBAL ELEMENTS
    ========================================== */

    const loader =
        document.querySelector(".loader");

    const navbar =
        document.querySelector(".navbar");

    const menuButton =
        document.querySelector(".menu-button");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const closeMenu =
        document.querySelector(".close-menu");

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu-links a"
        );

    const bookingForm =
        document.querySelector("#bookingForm");

    const yearElement =
        document.querySelector("#year");

    const revealElements =
        document.querySelectorAll(".reveal");


    /* =========================================
       ROOM MODAL ELEMENTS
    ========================================== */

    const roomModal =
        document.querySelector("#roomModal");

    const roomModalClose =
        document.querySelector("#roomModalClose");

    const roomModalBackdrop =
        document.querySelector(
            ".room-modal-backdrop"
        );

    const roomModalImage =
        document.querySelector("#roomModalImage");

    const roomModalLabel =
        document.querySelector("#roomModalLabel");

    const roomModalTitle =
        document.querySelector("#roomModalTitle");

    const roomModalDescription =
        document.querySelector(
            "#roomModalDescription"
        );

    const roomModalSize =
        document.querySelector("#roomModalSize");

    const roomModalBed =
        document.querySelector("#roomModalBed");

    const roomModalView =
        document.querySelector("#roomModalView");

    const roomModalReserve =
        document.querySelector(
            "#roomModalReserve"
        );

    const roomExploreButtons =
        document.querySelectorAll(
            ".room-explore"
        );


    /* =========================================
       EXPERIENCE MODAL ELEMENTS
    ========================================== */

    const experienceModal =
        document.querySelector(
            "#experienceModal"
        );

    const experienceModalClose =
        document.querySelector(
            "#experienceModalClose"
        );

    const experienceModalBackdrop =
        document.querySelector(
            ".experience-modal-backdrop"
        );

    const experienceModalImage =
        document.querySelector(
            "#experienceModalImage"
        );

    const experienceModalLabel =
        document.querySelector(
            "#experienceModalLabel"
        );

    const experienceModalTitle =
        document.querySelector(
            "#experienceModalTitle"
        );

    const experienceModalDescription =
        document.querySelector(
            "#experienceModalDescription"
        );

    const experienceModalButtons =
        document.querySelectorAll(
            ".experience-item"
        );


    /* =========================================
       BOOKING MODAL ELEMENTS
    ========================================== */

    const bookingModal =
        document.querySelector(
            "#bookingModal"
        );

    const bookingModalClose =
        document.querySelector(
            "#bookingModalClose"
        );

    const bookingModalDone =
        document.querySelector(
            "#bookingModalDone"
        );

    const bookingModalPay =
        document.querySelector(
            "#bookingModalPay"
        );

    const bookingModalPayText =
        document.querySelector(
            "#bookingModalPayText"
        );

    const bookingModalBackdrop =
        document.querySelector(
            ".booking-modal-backdrop"
        );

    const summaryName =
        document.querySelector(
            "#summaryName"
        );

    const summaryRoom =
        document.querySelector(
            "#summaryRoom"
        );

    const summaryDates =
        document.querySelector(
            "#summaryDates"
        );

    const summaryGuests =
        document.querySelector(
            "#summaryGuests"
        );

    const selectedPaymentReview =
        document.querySelector(
            "#selectedPaymentReview"
        );


    /* =========================================
       PAYMENT SUCCESS MODAL
    ========================================== */

    const paymentSuccessModal =
        document.querySelector(
            "#paymentSuccessModal"
        );

    const paymentSuccessBackdrop =
        document.querySelector(
            ".payment-success-backdrop"
        );

    const paymentSuccessClose =
        document.querySelector(
            "#paymentSuccessClose"
        );

    const paymentReference =
        document.querySelector(
            "#paymentReference"
        );


    /* =========================================
       PAYMENT ELEMENTS
    ========================================== */

    const paymentSection =
        document.querySelector(
            "#paymentSection"
        );

    const paymentButton =
        document.querySelector(
            "#paymentButton"
        );

    const paymentAmount =
        document.querySelector(
            "#paymentAmount"
        );


    /* =========================================
       FORM ELEMENTS
    ========================================== */

    const arrivalInput =
        document.querySelector("#arrival");

    const departureInput =
        document.querySelector("#departure");

    const guestsInput =
        document.querySelector("#guests");

    const roomInput =
        document.querySelector("#room");

    const guestNameInput =
        document.querySelector("#guest-name");

    const guestEmailInput =
        document.querySelector("#guest-email");


    /* =========================================
       CONSTANTS
    ========================================== */

    const RESERVATION_DEPOSIT = 5000;


    /* =========================================
       BOOKING STATE
    ========================================== */

    let currentBooking = {

        name: "",

        email: "",

        room: "",

        guests: "",

        arrival: "",

        departure: "",

        paymentMethod: "mpesa",

        deposit: RESERVATION_DEPOSIT

    };


    /* =========================================
       EXPERIENCE DATA
    ========================================== */

    const experiences = {

        safari: {

            label: "WILD ESCAPES",

            title: "Wild Escapes",

            image:
                "images/resort-view.jpg",

            description:
                "Discover Kenya beyond the ordinary with beautifully curated escapes designed around exploration, discovery and unforgettable moments."

        },


        pool: {

            label: "POOLSIDE HOURS",

            title: "Poolside Hours",

            image:
                "images/infinity-pool.jpg",

            description:
                "Slow afternoons beneath the sun. Take your time, settle beside the water and let the rhythm of the Palace set the pace."

        },


        sunset: {

            label: "GOLDEN EVENINGS",

            title: "Golden Evenings",

            image:
                "images/resort-view.jpg",

            description:
                "As daylight fades, Aiken's Palace becomes a setting for beautiful conversations, quiet moments and unforgettable evenings."

        },


        dining: {

            label: "PRIVATE DINING",

            title: "Private Dining",

            image:
                "images/restaurant.jpg",

            description:
                "A table created entirely for you, with refined cuisine, exceptional service and an atmosphere designed around your occasion."

        },


        wellness: {

            label: "QUIET RITUALS",

            title: "Quiet Rituals",

            image:
                "images/spa.jpg",

            description:
                "Wellness designed around your rhythm. Slow down, restore your energy and enjoy a private sanctuary created for complete relaxation."

        }

    };


    /* =========================================
       ROOM DATA
    ========================================== */

    const rooms = {

        deluxe: {

            label: "SIGNATURE",

            title: "Deluxe Room",

            image:
                "images/deluxe-room.jpg",

            description:
                "Quiet sophistication for beautifully effortless stays, with considered details, refined interiors and a calm private atmosphere.",

            size: "45 M²",

            bed: "KING BED",

            view: "GARDEN VIEW",

            amenities: [

                "PRIVATE BATH",

                "PREMIUM LINENS",

                "HIGH-SPEED WIFI",

                "ROOM SERVICE"

            ]

        },


        executive: {

            label: "EXECUTIVE",

            title: "Executive Suite",

            image:
                "images/executive-suite.jpg",

            description:
                "More space. More privacy. An elevated retreat created for guests who expect exceptional comfort, generous living space and thoughtful service.",

            size: "75 M²",

            bed: "KING BED",

            view: "PALACE VIEW",

            amenities: [

                "SEPARATE LOUNGE",

                "PRIVATE BATH",

                "PREMIUM LINENS",

                "24-HOUR SERVICE"

            ]

        },


        presidential: {

            label: "THE PALACE",

            title: "Presidential Suite",

            image:
                "images/presidential-suite.jpg",

            description:
                "The ultimate expression of palace living, created for remarkable stays with expansive space, private living and an atmosphere designed for unforgettable occasions.",

            size: "140 M²",

            bed: "KING BED",

            view: "PRIVATE LOUNGE",

            amenities: [

                "PRIVATE LOUNGE",

                "DINING AREA",

                "PREMIUM LINENS",

                "PERSONALIZED SERVICE"

            ]

        }

    };


    /* =========================================
       BODY SCROLL LOCK
    ========================================== */

    const lockScroll = () => {

        document.body.classList.add(
            "menu-open"
        );

    };


    const unlockScroll = () => {

        const roomOpen =
            roomModal &&
            roomModal.classList.contains(
                "active"
            );

        const bookingOpen =
            bookingModal &&
            bookingModal.classList.contains(
                "active"
            );

        const experienceOpen =
            experienceModal &&
            experienceModal.classList.contains(
                "active"
            );

        const paymentSuccessOpen =
            paymentSuccessModal &&
            paymentSuccessModal.classList.contains(
                "active"
            );

        const menuOpen =
            mobileMenu &&
            mobileMenu.classList.contains(
                "active"
            );


        if (
            !roomOpen &&
            !bookingOpen &&
            !experienceOpen &&
            !paymentSuccessOpen &&
            !menuOpen
        ) {

            document.body.classList.remove(
                "menu-open"
            );

        }

    };


    /* =========================================
       PRELOADER
    ========================================== */

    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    if (loader) {

                        loader.classList.add(
                            "hide"
                        );

                    }

                    document.body.classList.add(
                        "page-loaded"
                    );

                },
                850
            );

        }
    );


    /* =========================================
       NAVBAR
    ========================================== */

    const handleNavbar = () => {

        if (!navbar) return;


        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    };


    window.addEventListener(
        "scroll",
        handleNavbar,
        {
            passive: true
        }
    );


    handleNavbar();


    /* =========================================
       MOBILE MENU
    ========================================== */

    const openMenu = () => {

        if (!mobileMenu) return;


        mobileMenu.classList.add(
            "active"
        );


        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );


        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

        }


        lockScroll();

    };


    const closeMobileMenu = () => {

        if (!mobileMenu) return;


        mobileMenu.classList.remove(
            "active"
        );


        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );


        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        unlockScroll();

    };


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            openMenu
        );

    }


    if (closeMenu) {

        closeMenu.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    mobileLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        }
    );


    /* =========================================
       ROOM MODAL
    ========================================== */

    const openRoomModal = roomKey => {

        const room =
            rooms[roomKey];


        if (
            !room ||
            !roomModal
        ) {

            return;

        }


        if (roomModalImage) {

            roomModalImage.src =
                room.image;

            roomModalImage.alt =
                `${room.title} at Aiken's Palace`;

        }


        if (roomModalLabel) {

            roomModalLabel.textContent =
                room.label;

        }


        if (roomModalTitle) {

            roomModalTitle.textContent =
                room.title;

        }


        if (roomModalDescription) {

            roomModalDescription.textContent =
                room.description;

        }


        if (roomModalSize) {

            roomModalSize.textContent =
                room.size;

        }


        if (roomModalBed) {

            roomModalBed.textContent =
                room.bed;

        }


        if (roomModalView) {

            roomModalView.textContent =
                room.view;

        }


        const amenitiesContainer =
            document.querySelector(
                ".room-amenities"
            );


        if (amenitiesContainer) {

            amenitiesContainer.innerHTML = "";


            room.amenities.forEach(
                amenity => {

                    const span =
                        document.createElement(
                            "span"
                        );


                    span.textContent =
                        amenity;


                    amenitiesContainer.appendChild(
                        span
                    );

                }
            );

        }


        if (roomModalReserve) {

            roomModalReserve.dataset.room =
                room.title;

            roomModalReserve.dataset.roomKey =
                roomKey;

        }


        roomModal.classList.add(
            "active"
        );


        roomModal.setAttribute(
            "aria-hidden",
            "false"
        );


        lockScroll();


        setTimeout(
            () => {

                if (roomModalClose) {

                    roomModalClose.focus();

                }

            },
            150
        );

    };


    const closeRoomModal = () => {

        if (!roomModal) return;


        roomModal.classList.remove(
            "active"
        );


        roomModal.setAttribute(
            "aria-hidden",
            "true"
        );


        unlockScroll();

    };


    roomExploreButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const roomKey =
                        button.dataset.room;


                    openRoomModal(
                        roomKey
                    );

                }
            );

        }
    );


    if (roomModalClose) {

        roomModalClose.addEventListener(
            "click",
            closeRoomModal
        );

    }


    if (roomModalBackdrop) {

        roomModalBackdrop.addEventListener(
            "click",
            closeRoomModal
        );

    }


    /* =========================================
       RESERVE FROM ROOM MODAL
    ========================================== */

    if (roomModalReserve) {

        roomModalReserve.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const selectedRoom =
                    roomModalReserve.dataset.room;


                const selectedRoomKey =
                    roomModalReserve.dataset.roomKey;


                closeRoomModal();


                if (
                    roomInput &&
                    selectedRoom
                ) {

                    const options =
                        Array.from(
                            roomInput.options
                        );


                    const matchingOption =
                        options.find(
                            option =>
                                option.value.trim() ===
                                    selectedRoom.trim() ||
                                option.text.trim() ===
                                    selectedRoom.trim()
                        );


                    if (matchingOption) {

                        roomInput.value =
                            matchingOption.value;

                    }

                }


                if (
                    selectedRoomKey &&
                    roomInput
                ) {

                    roomInput.dataset.selectedRoom =
                        selectedRoomKey;

                }


                const reserveSection =
                    document.querySelector(
                        "#reserve"
                    );


                if (reserveSection) {

                    setTimeout(
                        () => {

                            reserveSection.scrollIntoView(
                                {
                                    behavior:
                                        "smooth",

                                    block:
                                        "start"
                                }
                            );


                            setTimeout(
                                () => {

                                    if (arrivalInput) {

                                        arrivalInput.focus();

                                    }

                                },
                                700
                            );

                        },
                        200
                    );

                }

            }
        );

    }


    /* =========================================
       EXPERIENCE MODAL
    ========================================== */

    const openExperienceModal =
        experienceKey => {

            const experience =
                experiences[
                    experienceKey
                ];


            if (
                !experience ||
                !experienceModal
            ) {

                return;

            }


            if (experienceModalImage) {

                experienceModalImage.src =
                    experience.image;

                experienceModalImage.alt =
                    `${experience.title} at Aiken's Palace`;

            }


            if (experienceModalLabel) {

                experienceModalLabel.textContent =
                    experience.label;

            }


            if (experienceModalTitle) {

                experienceModalTitle.textContent =
                    experience.title;

            }


            if (experienceModalDescription) {

                experienceModalDescription.textContent =
                    experience.description;

            }


            experienceModal.classList.add(
                "active"
            );


            experienceModal.setAttribute(
                "aria-hidden",
                "false"
            );


            lockScroll();


            setTimeout(
                () => {

                    if (experienceModalClose) {

                        experienceModalClose.focus();

                    }

                },
                150
            );

        };


    const closeExperienceModal = () => {

        if (!experienceModal) return;


        experienceModal.classList.remove(
            "active"
        );


        experienceModal.setAttribute(
            "aria-hidden",
            "true"
        );


        unlockScroll();

    };


    experienceModalButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const experienceKey =
                        button.dataset.experience;


                    openExperienceModal(
                        experienceKey
                    );

                }
            );

        }
    );


    if (experienceModalClose) {

        experienceModalClose.addEventListener(
            "click",
            closeExperienceModal
        );

    }


    if (experienceModalBackdrop) {

        experienceModalBackdrop.addEventListener(
            "click",
            closeExperienceModal
        );

    }


    /* =========================================
       EXPERIENCE MODAL → RESERVATION
    ========================================== */

    const experienceReserveButton =
        document.querySelector(
            ".experience-modal-button"
        );


    if (experienceReserveButton) {

        experienceReserveButton.addEventListener(
            "click",
            event => {

                event.preventDefault();


                closeExperienceModal();


                const reserveSection =
                    document.querySelector(
                        "#reserve"
                    );


                if (reserveSection) {

                    setTimeout(
                        () => {

                            reserveSection.scrollIntoView(
                                {
                                    behavior:
                                        "smooth",

                                    block:
                                        "start"
                                }
                            );

                        },
                        200
                    );

                }

            }
        );

    }


    /* =========================================
       DATE FORMATTER
    ========================================== */

    const formatDate =
        dateString => {

            if (!dateString) {

                return "—";

            }


            const date =
                new Date(
                    `${dateString}T00:00:00`
                );


            if (
                Number.isNaN(
                    date.getTime()
                )
            ) {

                return "—";

            }


            return date.toLocaleDateString(
                "en-GB",
                {
                    day: "2-digit",

                    month: "short",

                    year: "numeric"
                }
            );

        };


    /* =========================================
       TODAY DATE
    ========================================== */

    const getTodayString = () => {

        const today =
            new Date();


        const year =
            today.getFullYear();


        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");


        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        return `${year}-${month}-${day}`;

    };


    /* =========================================
       DATE CONTROLS
    ========================================== */

    if (arrivalInput) {

        arrivalInput.min =
            getTodayString();

    }


    if (
        arrivalInput &&
        departureInput
    ) {

        departureInput.min =
            getTodayString();


        arrivalInput.addEventListener(
            "change",
            () => {

                if (
                    !arrivalInput.value
                ) {

                    return;

                }


                departureInput.min =
                    arrivalInput.value;


                if (
                    departureInput.value &&
                    departureInput.value <=
                        arrivalInput.value
                ) {

                    departureInput.value =
                        "";

                }

            }
        );

    }


    /* =========================================
       PAYMENT METHOD
    ========================================== */

    const getSelectedPaymentMethod =
        () => {

            const selected =
                document.querySelector(
                    'input[name="payment-method"]:checked'
                );


            if (!selected) {

                return "mpesa";

            }


            return selected.value;

        };


    const getPaymentMethodLabel =
        method => {

            if (
                method ===
                "airtel-money"
            ) {

                return "AIRTEL MONEY";

            }


            return "M-PESA";

        };


    const updatePaymentReview =
        () => {

            const method =
                getSelectedPaymentMethod();


            currentBooking.paymentMethod =
                method;


            const label =
                getPaymentMethodLabel(
                    method
                );


            if (
                selectedPaymentReview
            ) {

                selectedPaymentReview.textContent =
                    label;

            }


            if (
                bookingModalPayText
            ) {

                if (
                    method ===
                    "airtel-money"
                ) {

                    bookingModalPayText.textContent =
                        "Proceed to Airtel Money";

                } else {

                    bookingModalPayText.textContent =
                        "Proceed to M-PESA";

                }

            }

        };


    const paymentRadios =
        document.querySelectorAll(
            'input[name="payment-method"]'
        );


    paymentRadios.forEach(
        radio => {

            radio.addEventListener(
                "change",
                updatePaymentReview
            );

        }
    );


    updatePaymentReview();


    /* =========================================
       OPEN BOOKING MODAL
    ========================================== */

    const openBookingModal =
        () => {

            if (!bookingModal) return;


            updatePaymentReview();


            bookingModal.classList.add(
                "active"
            );


            bookingModal.setAttribute(
                "aria-hidden",
                "false"
            );


            lockScroll();


            if (paymentAmount) {

                paymentAmount.textContent =
                    `KES ${RESERVATION_DEPOSIT.toLocaleString()}`;

            }


            setTimeout(
                () => {

                    if (bookingModalPay) {

                        bookingModalPay.focus();

                    }

                },
                150
            );

        };


    /* =========================================
       CLOSE BOOKING MODAL
    ========================================== */

    const closeBookingModal =
        () => {

            if (!bookingModal) return;


            bookingModal.classList.remove(
                "active"
            );


            bookingModal.setAttribute(
                "aria-hidden",
                "true"
            );


            unlockScroll();

        };


    /* =========================================
       OPEN PAYMENT SUCCESS MODAL
    ========================================== */

    const openPaymentSuccess =
        () => {

            if (!paymentSuccessModal) {

                return;

            }


            const reference =
                `AIKEN-${Date.now()
                    .toString()
                    .slice(-8)}`;


            if (paymentReference) {

                paymentReference.textContent =
                    reference;

            }


            paymentSuccessModal.classList.add(
                "active"
            );


            paymentSuccessModal.setAttribute(
                "aria-hidden",
                "false"
            );


            lockScroll();

        };


    /* =========================================
       CLOSE PAYMENT SUCCESS MODAL
    ========================================== */

    const closePaymentSuccess =
        () => {

            if (!paymentSuccessModal) {

                return;

            }


            paymentSuccessModal.classList.remove(
                "active"
            );


            paymentSuccessModal.setAttribute(
                "aria-hidden",
                "true"
            );


            unlockScroll();

        };


    /* =========================================
       BOOKING FORM VALIDATION
    ========================================== */

    const showFieldError =
        (field, message) => {

            if (!field) return;


            field.classList.add(
                "field-error"
            );


            alert(message);


            field.focus();

        };


    const validateBookingForm =
        () => {

            if (!arrivalInput?.value) {

                showFieldError(
                    arrivalInput,
                    "Please select your arrival date."
                );

                return false;

            }


            if (!departureInput?.value) {

                showFieldError(
                    departureInput,
                    "Please select your departure date."
                );

                return false;

            }


            const arrivalDate =
                new Date(
                    `${arrivalInput.value}T00:00:00`
                );


            const departureDate =
                new Date(
                    `${departureInput.value}T00:00:00`
                );


            if (
                Number.isNaN(
                    arrivalDate.getTime()
                ) ||
                Number.isNaN(
                    departureDate.getTime()
                )
            ) {

                alert(
                    "Please select valid arrival and departure dates."
                );

                return false;

            }


            if (
                departureDate <=
                arrivalDate
            ) {

                showFieldError(
                    departureInput,
                    "Please select a departure date after your arrival date."
                );

                return false;

            }


            if (!guestsInput?.value) {

                showFieldError(
                    guestsInput,
                    "Please select the number of guests."
                );

                return false;

            }


            if (!roomInput?.value) {

                showFieldError(
                    roomInput,
                    "Please select a room or suite."
                );

                return false;

            }


            if (
                !guestNameInput?.value.trim()
            ) {

                showFieldError(
                    guestNameInput,
                    "Please enter your full name."
                );

                return false;

            }


            if (
                !guestEmailInput?.value.trim()
            ) {

                showFieldError(
                    guestEmailInput,
                    "Please enter your email address."
                );

                return false;

            }


            if (
                guestEmailInput &&
                !guestEmailInput.checkValidity()
            ) {

                showFieldError(
                    guestEmailInput,
                    "Please enter a valid email address."
                );

                return false;

            }


            return true;

        };


    /* =========================================
       BOOKING FORM SUBMISSION
    ========================================== */

    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                if (
                    !validateBookingForm()
                ) {

                    return;

                }


                const paymentMethod =
                    getSelectedPaymentMethod();


                currentBooking = {

                    name:
                        guestNameInput.value.trim(),

                    email:
                        guestEmailInput.value.trim(),

                    room:
                        roomInput.value,

                    guests:
                        guestsInput.value,

                    arrival:
                        arrivalInput.value,

                    departure:
                        departureInput.value,

                    paymentMethod:
                        paymentMethod,

                    deposit:
                        RESERVATION_DEPOSIT

                };


                /* =================================
                   UPDATE BOOKING SUMMARY
                ================================= */


                if (summaryName) {

                    summaryName.textContent =
                        currentBooking.name;

                }


                if (summaryRoom) {

                    summaryRoom.textContent =
                        currentBooking.room;

                }


                if (summaryGuests) {

                    summaryGuests.textContent =
                        currentBooking.guests ===
                            "1"
                            ? "1 Guest"
                            : `${currentBooking.guests} Guests`;

                }


                if (summaryDates) {

                    summaryDates.textContent =
                        `${formatDate(
                            currentBooking.arrival
                        )} — ${formatDate(
                            currentBooking.departure
                        )}`;

                }


                updatePaymentReview();


                openBookingModal();

            }
        );

    }


    /* =========================================
       BOOKING MODAL CONTROLS
    ========================================== */

    if (bookingModalClose) {

        bookingModalClose.addEventListener(
            "click",
            closeBookingModal
        );

    }


    if (bookingModalDone) {

        bookingModalDone.addEventListener(
            "click",
            closeBookingModal
        );

    }


    if (bookingModalBackdrop) {

        bookingModalBackdrop.addEventListener(
            "click",
            closeBookingModal
        );

    }


    /* =========================================
       PAYMENT BUTTON FROM REVIEW MODAL
       
       PAYMENT INTEGRATION IS CURRENTLY PAUSED.
       THIS BUTTON DOES NOT FAKE A PAYMENT.
    ========================================== */

    if (bookingModalPay) {

        bookingModalPay.addEventListener(
            "click",
            () => {

                const selectedMethod =
                    getSelectedPaymentMethod();


                const methodLabel =
                    getPaymentMethodLabel(
                        selectedMethod
                    );


                bookingModalPay.disabled =
                    true;


                const originalText =
                    bookingModalPayText
                        ? bookingModalPayText.textContent
                        : "";


                if (bookingModalPayText) {

                    bookingModalPayText.textContent =
                        "Payment gateway coming soon…";

                }


                setTimeout(
                    () => {

                        alert(
                            `${methodLabel} payment is not connected yet.\n\nYour reservation details are ready, but the secure payment gateway will be connected after the website is finalized.`
                        );


                        bookingModalPay.disabled =
                            false;


                        if (
                            bookingModalPayText
                        ) {

                            bookingModalPayText.textContent =
                                originalText ||
                                `Proceed to ${methodLabel}`;

                        }

                    },
                    450
                );

            }
        );

    }


    /* =========================================
       PAYMENT SUCCESS CLOSE
    ========================================== */

    if (paymentSuccessClose) {

        paymentSuccessClose.addEventListener(
            "click",
            closePaymentSuccess
        );

    }


    if (paymentSuccessBackdrop) {

        paymentSuccessBackdrop.addEventListener(
            "click",
            closePaymentSuccess
        );

    }


    /* =========================================
       PAYMENT SECTION PREPARATION
    ========================================== */

    if (paymentSection) {

        paymentSection.dataset.amount =
            RESERVATION_DEPOSIT;

    }


    if (paymentAmount) {

        paymentAmount.textContent =
            `KES ${RESERVATION_DEPOSIT.toLocaleString()}`;

    }


    /* =========================================
       SMOOTH ANCHOR NAVIGATION
    ========================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    const navbarHeight =
                        navbar
                            ? navbar.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        navbarHeight;


                    window.scrollTo(
                        {
                            top:
                                Math.max(
                                    0,
                                    targetPosition
                                ),

                            behavior:
                                "smooth"
                        }
                    );

                }
            );

        }
    );


    /* =========================================
       PREMIUM SCROLL REVEAL
    ========================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(

                (
                    entries,
                    observer
                ) => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {

                    threshold:
                        0.10,

                    rootMargin:
                        "0px 0px -50px 0px"

                }

            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =========================================
       PREMIUM IMAGE REVEAL
    ========================================== */

    const imageElements =
        document.querySelectorAll(
            ".room-image img, " +
            ".experience-image img, " +
            ".dining-image img, " +
            ".wellness-image img, " +
            ".events-image img, " +
            ".lobby img, " +
            ".visual-break img"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const imageObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "image-loaded"
                                );


                                imageObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.1
                }

            );


        imageElements.forEach(
            image => {

                imageObserver.observe(
                    image
                );

            }
        );

    }


    /* =========================================
       LUXURY PARALLAX EFFECT
    ========================================== */

    const parallaxImages =
        document.querySelectorAll(
            ".experience-image img, " +
            ".dining-image img, " +
            ".wellness-image img, " +
            ".events-image img, " +
            ".visual-break img, " +
            ".lobby img"
        );


    let ticking = false;


    const updateParallax = () => {

        if (
            window.innerWidth < 768
        ) {

            ticking = false;

            return;

        }


        const viewportHeight =
            window.innerHeight;


        parallaxImages.forEach(
            image => {

                const rect =
                    image.getBoundingClientRect();


                if (
                    rect.bottom < 0 ||
                    rect.top > viewportHeight
                ) {

                    return;

                }


                const center =
                    rect.top +
                    rect.height / 2;


                const distance =
                    center -
                    viewportHeight / 2;


                const movement =
                    distance * -0.035;


                image.style.transform =
                    `translate3d(0, ${movement}px, 0) scale(1.04)`;

            }
        );


        ticking = false;

    };


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    updateParallax
                );

                ticking = true;

            }

        },
        {
            passive: true
        }
    );


    /* =========================================
       ROOM CARD IMAGE HOVER / TILT
    ========================================== */

    const roomCards =
        document.querySelectorAll(
            ".room-card"
        );


    roomCards.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        window.innerWidth < 900
                    ) {

                        return;

                    }


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateX =
                        (
                            (
                                y -
                                rect.height / 2
                            ) /
                            rect.height
                        ) *
                        -2;


                    const rotateY =
                        (
                            (
                                x -
                                rect.width / 2
                            ) /
                            rect.width
                        ) *
                        2;


                    card.style.transform =
                        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );


    /* =========================================
       PREMIUM BUTTON INTERACTION
    ========================================== */

    const interactiveButtons =
        document.querySelectorAll(
            ".gold-button, " +
            ".reserve-submit, " +
            ".booking-modal-button, " +
            ".room-modal-button, " +
            ".nav-book, " +
            ".discover-link"
        );


    interactiveButtons.forEach(
        button => {

            button.addEventListener(
                "mouseenter",
                () => {

                    button.classList.add(
                        "button-hover"
                    );

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.classList.remove(
                        "button-hover"
                    );

                }
            );

        }
    );


    /* =========================================
       HERO MOUSE MOVEMENT
    ========================================== */

    const hero =
        document.querySelector(
            ".hero"
        );

    const heroImage =
        document.querySelector(
            ".hero-image"
        );


    if (
        hero &&
        heroImage &&
        window.innerWidth > 1000
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;


                heroImage.style.transform =
                    `scale(1.04) translate(${x * -8}px, ${y * -5}px)`;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroImage.style.transform =
                    "";

            }
        );

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".desktop-nav a:not(.nav-book)"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const navObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                const id =
                                    entry.target.id;


                                navLinks.forEach(
                                    link => {

                                        link.classList.remove(
                                            "active"
                                        );


                                        if (
                                            link.getAttribute(
                                                "href"
                                            ) ===
                                            `#${id}`
                                        ) {

                                            link.classList.add(
                                                "active"
                                            );

                                        }

                                    }
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.35
                }

            );


        sections.forEach(
            section => {

                navObserver.observe(
                    section
                );

            }
        );

    }


    /* =========================================
       IMAGE ERROR HANDLING
    ========================================== */

    document.querySelectorAll(
        "img"
    ).forEach(
        image => {

            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "image-error"
                    );


                    console.warn(
                        `Aiken's Palace image could not be loaded: ${image.src}`
                    );

                }
            );

        }
    );


    /* =========================================
       ESC KEY
    ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) {

                return;

            }


            if (
                mobileMenu &&
                mobileMenu.classList.contains(
                    "active"
                )
            ) {

                closeMobileMenu();

            }


            if (
                roomModal &&
                roomModal.classList.contains(
                    "active"
                )
            ) {

                closeRoomModal();

            }


            if (
                experienceModal &&
                experienceModal.classList.contains(
                    "active"
                )
            ) {

                closeExperienceModal();

            }


            if (
                bookingModal &&
                bookingModal.classList.contains(
                    "active"
                )
            ) {

                closeBookingModal();

            }


            if (
                paymentSuccessModal &&
                paymentSuccessModal.classList.contains(
                    "active"
                )
            ) {

                closePaymentSuccess();

            }

        }
    );


    /* =========================================
       CLICK OUTSIDE ROOM MODAL
    ========================================== */

    if (roomModal) {

        roomModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    roomModal
                ) {

                    closeRoomModal();

                }

            }
        );

    }


    /* =========================================
       CLICK OUTSIDE EXPERIENCE MODAL
    ========================================== */

    if (experienceModal) {

        experienceModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    experienceModal
                ) {

                    closeExperienceModal();

                }

            }
        );

    }


    /* =========================================
       CLICK OUTSIDE BOOKING MODAL
    ========================================== */

    if (bookingModal) {

        bookingModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    bookingModal
                ) {

                    closeBookingModal();

                }

            }
        );

    }


    /* =========================================
       CLICK OUTSIDE SUCCESS MODAL
    ========================================== */

    if (paymentSuccessModal) {

        paymentSuccessModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    paymentSuccessModal
                ) {

                    closePaymentSuccess();

                }

            }
        );

    }


    /* =========================================
       CLEAR FIELD ERRORS
    ========================================== */

    if (bookingForm) {

        bookingForm.addEventListener(
            "input",
            event => {

                event.target.classList.remove(
                    "field-error"
                );

            }
        );


        bookingForm.addEventListener(
            "change",
            event => {

                event.target.classList.remove(
                    "field-error"
                );

            }
        );

    }


    /* =========================================
       AUTOMATIC COPYRIGHT YEAR
    ========================================== */

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =========================================
       INITIAL ACCESSIBILITY STATES
    ========================================== */

    if (mobileMenu) {

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (menuButton) {

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (roomModal) {

        roomModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (experienceModal) {

        experienceModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (bookingModal) {

        bookingModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (paymentSuccessModal) {

        paymentSuccessModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /* =========================================
       PREVENT IMAGE DRAGGING
    ========================================== */

    document.querySelectorAll(
        "img"
    ).forEach(
        image => {

            image.setAttribute(
                "draggable",
                "false"
            );

        }
    );


    /* =========================================
       PAYMENT BUTTON FRONTEND STATE
       
       IMPORTANT:
       Actual payment integration remains
       intentionally disconnected for now.
    ========================================== */

    if (paymentButton) {

        paymentButton.dataset.paymentReady =
            "false";

    }


    /* =========================================
       CONSOLE BRANDING
    ========================================== */

    console.log(
        "%c AIKEN'S PALACE ",
        "background:#0b0b0a;color:#c5a46d;font-size:18px;font-weight:bold;padding:8px 14px;"
    );


    console.log(
        "%c A world beyond luxury. ",
        "color:#817c73;font-size:13px;"
    );


    console.log(
        "%c Website systems loaded successfully. ",
        "color:#c5a46d;font-size:12px;"
    );

});
/* =========================================
   AIKEN'S PALACE NEWSLETTER
========================================= */

const newsletterForm =
    document.querySelector("#newsletterForm");

const newsletterEmail =
    document.querySelector("#newsletterEmail");

const newsletterButton =
    document.querySelector("#newsletterButton");

const newsletterMessage =
    document.querySelector("#newsletterMessage");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                newsletterEmail
                    ? newsletterEmail.value.trim()
                    : "";


            if (
                !email ||
                !newsletterEmail.checkValidity()
            ) {

                if (newsletterMessage) {

                    newsletterMessage.textContent =
                        "Please enter a valid email address.";

                    newsletterMessage.classList.remove(
                        "success"
                    );

                    newsletterMessage.classList.add(
                        "error"
                    );

                }


                newsletterEmail.focus();

                return;

            }


            if (newsletterButton) {

                newsletterButton.disabled =
                    true;

            }


            if (newsletterMessage) {

                newsletterMessage.textContent =
                    "Welcome to the Palace journal.";

                newsletterMessage.classList.remove(
                    "error"
                );

                newsletterMessage.classList.add(
                    "success"
                );

            }


            if (newsletterEmail) {

                newsletterEmail.value = "";

            }


            setTimeout(
                () => {

                    if (newsletterButton) {

                        newsletterButton.disabled =
                            false;

                    }

                },
                1200
            );

        }
    );

}