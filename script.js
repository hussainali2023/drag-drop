window.addEventListener('DOMContentLoaded', () => {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const items = document.querySelectorAll('.item');
    const resetButton = document.getElementById('resetButton');
    const message = document.getElementById('message');
   
    

    // Reset button
    resetButton.addEventListener('click', resetContainers);


    // Store the original container1 content
    const container1Content = container1.innerHTML;
  
    // Add event listeners to the items for drag events
    items.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });
  
    // Add event listeners to the containers for drop events
    container1.addEventListener('dragover', dragOver);
    container1.addEventListener('dragenter', dragEnter);
    container1.addEventListener('dragleave', dragLeave);
    container1.addEventListener('drop', drop);
  
    container2.addEventListener('dragover', dragOver);
    container2.addEventListener('dragenter', dragEnter);
    container2.addEventListener('dragleave', dragLeave);
    container2.addEventListener('drop', drop);
  
  
    let draggedItem = null;
  
    function dragStart() {
      draggedItem = this;
      this.classList.add('dragged');
    }
  
    function dragEnd() {
      draggedItem = null;
      this.classList.remove('dragged');
    }
  
    function dragOver(e) {
      e.preventDefault();
      this.classList.add("highlight")
    }
  
    function dragEnter(e) {
      e.preventDefault();
      this.classList.add('highlight');
    }
  
    function dragLeave() {
      this.classList.remove('highlight');
    }
  
    function drop() {
      this.classList.remove('highlight');
      this.appendChild(draggedItem);
      showMessage("Dragged Successful");
    }
  
    function resetContainers() {
      container1.innerHTML = container1Content;
      container2.innerHTML = '';
      showMessage("Reset Successfully")
    }
  
    function showMessage(text) {
        message.textContent = text;
        message.style.display = 'block';
        setTimeout(() => {
          message.style.display = 'none';
        }, 1000); // Hide the message after 1 seconds
      }
    });


  