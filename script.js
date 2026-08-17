const letters = {
    miss: {
        title: "Open When You Miss Me 💭",
        body: "Even with all the distance between us, you’re never really far from my mind. Whenever you're missing me, just remember I’m probably sitting here thinking about your cute smile or replaying our last phone call in my head. I'm only one call or text away—reach out whenever you want! \u{1F496}\u{1F4DE}"
    },
    sad: {
        title: "Open When You Had a Hard Day 🩹",
        body: "I’m so sorry today was tough on you. Take a deep breath, get comfy, and let all that stress go. You are so strong and capable, even on the days that feel overwhelming. I wish I could be there to give you a big hug, but until then, know that I’m right here rooting for you and ready to listen whenever you want to talk. \u{1F338}\u{2764}\u{FE0F}"
    },
    laugh: {
        title: "Open When You Need a Laugh 😂",
        body: "If you need a quick reason to laugh today, just remember we survived debugging unicode emoji character codes in JavaScript together! On a real note, hearing your laugh on the phone is honestly one of my absolute favorite things. Smile big today, because your smile is way too cute to hide! \u{1F970}\u{2728}"
    },
    voice: {
        title: "Open When You Want to Hear My Voice 🎙️",
        body: "Consider this your official, non-expiring pass to call me right now! I love talking with you and hearing your voice—it always brightens my day no matter what I'm doing. Tap my number and let’s catch up! \u{1F493}\u{1F1FA}\u{1F1F8}"
    }
};

function openLetter(type) {
    const modal = document.getElementById("letterModal");
    document.getElementById("letterTitle").textContent = letters[type].title;
    document.getElementById("letterBody").textContent = letters[type].body;
    modal.style.display = "flex";
}

function closeLetter() {
    document.getElementById("letterModal").style.display = "none";
}
