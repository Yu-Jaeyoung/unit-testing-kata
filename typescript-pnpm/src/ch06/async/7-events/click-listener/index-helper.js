window.addEventListener('load', () => {
    document.getElementById('myButton').addEventListener('click', onMyButtonClick);

    const resultDiv = document.getElementById('myResult');
    resultDiv.innerHTML = 'Document Loaded';
});

function onMyButtonClick() {
    const resultDiv = document.getElementById('myResult');
    resultDiv.innerText = 'Clicked!';
}