const API_KEY = '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';

const form = document.getElementById('chat-form');
const mytextinput = document.getElementById('mytext');
const responsetextarea = document.getElementById('Response'); // Ensure the correct ID is used here

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mytext = mytextinput.value.trim();
    
    if (mytext) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`, // Ensure the correct backticks are used for API key interpolation
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [{ role: 'user', content: mytext }],
                    temperature: 1.0,
                    top_p: 0.7,
                    n: 1,
                    stream: false,
                    presence_penalty: 0, // Typo fixed from 'presence_panalty' to 'presence_penalty'
                    frequency_penalty: 0,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                responsetextarea.value = data.choices[0].message.content;
            } else {
                responsetextarea.value = 'error: unable to process';
            }
        } catch (error) {
            console.error(error);
            responsetextarea.value = 'error: unable to process';
        }
    }
});
