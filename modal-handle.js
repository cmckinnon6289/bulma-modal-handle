/**
 * Handles Bulma modals by passing in a DOM element ID.
 * @param {String} id - DOM element ID of the Bulma modal 
 */
function handleModal(id) {
    let modal = document.querySelector(`#${String(id)}`);
    modal.classList.toggle("is-active")
}