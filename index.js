let todos = [];
let resultsContainer = document.getElementById('results');

const renderTodos = () => {
    resultsContainer.innerHTML = '';

    todos.forEach(todo => {
        const completedStyle = todo.completed ? 'text-decoration: line-through;' : '';

        const todoItemDiv = document.createElement('div');
        todoItemDiv.classList.add('todo-item');

        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.checked = todo.completed;
        checkboxInput.addEventListener('change', () => toggleCompleted(todo.id));

        const labelElement = document.createElement('label');
        labelElement.style.cssText = completedStyle;
        labelElement.textContent = `ID: ${todo.id}, Name: ${todo.name}, Created Date: ${formatDate(todo.createdDate)}`;

        todoItemDiv.appendChild(checkboxInput);
        todoItemDiv.appendChild(labelElement);

        resultsContainer.appendChild(todoItemDiv);
    });
};

const addItem = () => {
    const inputNameElement = document.getElementById('inputName');
    const itemName = inputNameElement.value.trim();

    // Check constraints before adding a new item
    if (itemName.length > 3 && itemName[0] === itemName[0].toUpperCase() && itemName.trim() !== '') {
        const newTodo = {
            id: todos.length + 1,
            name: itemName,
            createdDate: new Date(),
            completed: false
        };

        todos.push(newTodo);
        renderTodos();

        inputNameElement.value = '';
    } else {
        alert('Please enter a valid task name. It must be more than three characters, not empty, and start with an uppercase letter.');
    }
};

const toggleCompleted = (id) => {
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
    }
};

const clearList = () => {
    todos.length = 0;
    renderTodos();
};

document.getElementById('addBtn').addEventListener('click', addItem);
document.getElementById('clearBtn').addEventListener('click', clearList);

renderTodos();
