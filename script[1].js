document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const d = new FormData(this);
  const subject = encodeURIComponent('Timber quotation request - ' + (d.get('company') || d.get('name')));
  const body = encodeURIComponent(
    'Name: ' + d.get('name') + '\n' +
    'Company: ' + d.get('company') + '\n' +
    'Email: ' + d.get('email') + '\n' +
    'Phone: ' + d.get('phone') + '\n' +
    'Species: ' + d.get('species') + '\n' +
    'Quantity: ' + d.get('quantity') + '\n\n' +
    'Project details:\n' + d.get('message')
  );
  window.location.href = 'mailto:mg4516386@gmail.com?subject=' + subject + '&body=' + body;
});