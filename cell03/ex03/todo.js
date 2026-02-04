const list = document.getElementById("ft_list");

// โหลดข้อมูลตอนเปิดเว็บ
window.onload = loadTodos;

// เพิ่มงานใหม่
function newTodo() {
    let text = prompt("Enter a task:");

    if (text && text.trim() !== "") {
        addTodo(text);
        saveTodos();
    }
}

// สร้าง todo item
function addTodo(text) {
    const div = document.createElement("div");
    div.innerText = text;

    // คลิกเพื่อลบ
    div.onclick = function () {
        if (confirm("Delete this task?")) {
            div.remove();
            saveTodos();
        }
    };

    // ใส่บนสุด
    list.prepend(div);
}

// -------- COOKIE --------

// บันทึก
function saveTodos() {
    const items = [...list.children].map(e => e.innerText);
    document.cookie = "todos=" + JSON.stringify(items);
}

// โหลด
function loadTodos() {
    const match = document.cookie.match(/todos=([^;]+)/);

    if (match) {
        const items = JSON.parse(match[1]);
        items.reverse().forEach(addTodo);
    }
}
