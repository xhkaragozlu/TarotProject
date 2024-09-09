function selectCard(card) {
    const selectedCardDisplay = document.getElementById('selected-card-display');
    selectedCardDisplay.style.backgroundImage = card.style.backgroundImage;

    document.getElementById('selected-card').classList.remove('hidden');
}
