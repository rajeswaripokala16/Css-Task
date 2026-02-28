// Step 3: JavaScript (script.js)  
// javascript

const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength-text');

passwordInput.addEventListener('input', () => {
  const val = passwordInput.value;
  let strength = 'Weak';
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (val.length >= 8 && strongRegex.test(val)) {
    strength = 'Strong';
    strengthText.style.color = 'green';
  } else if (val.length >= 6) {
strength = 'Medium';
    strengthText.style.color = 'orange';
  }
   else 
   {
    strengthText.style.color = 'red';
   
}

  strengthText.textContent = `Strength:{strength}`;
});



// ✅ Result: Instantly shows the strength of your password as you type!

// 💬 Double tap ❤ for more!