// Variables globales
let tasks = ['Aprender Git básico', 'Practicar comandos de Git'];
let taskCounter = tasks.length;

// Elementos del DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const clearBtn = document.getElementById('clearBtn');

// Función para renderizar las tareas
function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">Eliminar</button>
        `;
        taskList.appendChild(li);
    });
    
    updateStats();
}

// Función para agregar nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, escribe una tarea');
        return;
    }
    
    tasks.push(taskText);
    taskInput.value = '';
    taskCounter++;
    renderTasks();
}

// Función para eliminar tarea
function deleteTask(index) {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
        tasks.splice(index, 1);
        taskCounter--;
        renderTasks();
    }
}

// Función para marcar tarea como completada
function toggleTask(index) {
    const listItem = taskList.children[index];
    listItem.classList.toggle('completed');
}

// Función para actualizar estadísticas
function updateStats() {
    totalTasks.textContent = tasks.length;
}

// Función para limpiar todas las tareas
function clearAllTasks() {
    if (confirm('¿Estás seguro de que quieres eliminar todas las tareas?')) {
        tasks = [];
        taskCounter = 0;
        renderTasks();
    }
}

// Event listeners
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

clearBtn.addEventListener('click', clearAllTasks);

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    renderTasks();
    console.log('Lista de tareas iniciada correctamente');
});