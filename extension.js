export const LinkButtonExtension = {
  name: 'LinkButton',
  type: 'response',
  match: ({ trace }) =>
    trace.type === 'ext_linkButton' || trace.payload.name === 'ext_linkButton',
  render: ({ trace, element }) => {
    const { url, buttonText } = trace.payload;
    
    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML = `
      <style>
        .link-button {
          background: linear-gradient(to right, #2e6ee1, #2e7ff1);
          border: none;
          color: white;
          padding: 10px;
          border-radius: 5px;
          width: 100%;
          cursor: pointer;
          text-align: center;
          display: inline-block;
          text-decoration: none;
        }
      </style>
      <button class='link-button'>${buttonText}</button>
    `;
    
    buttonContainer.querySelector('.link-button').addEventListener('click', function() {
      window.location.href = url;
    });
    
    element.appendChild(buttonContainer);
  },
};
