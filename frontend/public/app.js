async function chargerContacts() {
    try {
        const response = await fetch('/contacts');
        const contacts = await response.json();
        
        const contactsList = document.getElementById('contactsList');
        contactsList.innerHTML = '';
        
        contacts.forEach(contact => {
            const div = document.createElement('div');
            div.className = 'contact-item';
            div.innerHTML = `
                <strong>${contact.nom}</strong>
                <span>${contact.email}</span>
            `;
            contactsList.appendChild(div);
        });
    } catch (error) {
        console.error('Erreur:', error);
    }
}

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    
    try {
        await fetch('/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nom, email })
        });
        
        document.getElementById('nom').value = '';
        document.getElementById('email').value = '';
        chargerContacts();
    } catch (error) {
        console.error('Erreur:', error);
    }
});

chargerContacts();