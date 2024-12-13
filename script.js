let originalText = ""; // Variabel untuk menyimpan teks asli

function reverseText() {
    // Ambil input dari user
    const inputText = document.getElementById("inputText").value;
    
    // Simpan teks asli
    originalText = inputText;
    
    // Balikkan teks menggunakan method reverse() dan join()
    const reversed = inputText.split("").reverse().join("");
    
    // Tampilkan hasil di elemen dengan id 'reversedText' dengan animasi fadeIn
    const reversedTextElement = document.getElementById("reversedText");
    reversedTextElement.textContent = reversed;
    reversedTextElement.style.opacity = 0;  // Reset opacity sebelum animasi
    setTimeout(() => {
        reversedTextElement.style.opacity = 1; // Tambahkan animasi opacity
    }, 100);
}

function restoreText() {
    // Kembalikan teks ke bentuk aslinya
    const reversedTextElement = document.getElementById("reversedText");
    reversedTextElement.textContent = originalText;
    reversedTextElement.style.opacity = 0;
    setTimeout(() => {
        reversedTextElement.style.opacity = 1;
    }, 100);
}
