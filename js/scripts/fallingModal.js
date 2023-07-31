export const fallingModal = (btn, modal) => {
	if(btn.id == "main_btn") {
		modal.classList.add("main__falling-modal-active")
		btn.id = "main_btn-active"
		btn.innerHTML = "Ссылки на прошлые работы ▼"
	} else if(btn.id == "main_btn-active") {
		modal.classList.remove("main__falling-modal-active")
		btn.id = "main_btn"
		btn.innerHTML = "Ссылки на прошлые работы ▲"
	}
}