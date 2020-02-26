
export function setListUsers (state, payload) {
    state.listUsers.push(payload)

}

export function setUserLogged (state, payload) {
    state.userLogged.push(payload)

}

export function resetListUsers (state, payload) {
    state.listUsers = []

}

export function setErrors (state, payload) {
    state.errors.unshift(payload)

}