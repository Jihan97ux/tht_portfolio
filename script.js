function showError(input, errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.visibility = "visible";
    input.style.borderColor = "red";
}

function hideError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.visibility = "hidden";
    input.style.borderColor = "#ccc";
}

function containsNonNumber(str) {
    return /\D/.test(str);
}

document.getElementById("contactMe").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tlp = document.getElementById("tlp").value;
    const msg = document.getElementById("msg").value;

    let isValid = true;

    if (name.trim() === "") {
        showError(document.getElementById("name"), "errorName", "Name is required.");
        isValid = false;
    } else {
        hideError(document.getElementById("name"), "errorName");
    }

    if (email.trim() === "") {
        showError(document.getElementById("email"), "errorEmail", "Email is required.");
        isValid = false;
    } else {
        hideError(document.getElementById("email"), "errorEmail");
    }

    if (tlp.trim() === "") {
        showError(document.getElementById("tlp"), "errorTlp", "Telephone number is required.");
        isValid = false;
    } else if (containsNonNumber(tlp.trim())) {
        showError(document.getElementById("tlp"), "errorTlp", "Telephone number must contain only digits.");
        isValid = false;
    } else {
        hideError(document.getElementById("tlp"), "errorTlp");
    }

    if (msg.trim() === "") {
        showError(document.getElementById("msg"), "errorMsg", "Message is required.");
        isValid = false;
    } else {
        hideError(document.getElementById("msg"), "errorMsg");
    }

    if (isValid) {
        const encodedMessage = `Nama: ${name}\nEmail: ${email}\nNomor Telepon: ${tlp}\nPesan: ${msg}`;
        const whatsappLink = `https://wa.me/6281524780481?text=${encodeURIComponent(encodedMessage)}`;

        window.open(whatsappLink, '_blank');

        document.getElementById("contactMe").reset();
    }
});

const inputElements = document.querySelectorAll("#contactMe input, #contactMe textarea");
inputElements.forEach(input => {
    input.addEventListener("input", function () {
        const errorId = "error" + input.id.charAt(0).toUpperCase() + input.id.slice(1);
        hideError(input, errorId);
    });
});
