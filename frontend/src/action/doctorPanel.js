import fetch from 'cross-fetch'

export const POST_STATUS = 'POST_STATUS',
    POST_STATUS_SUCCES = 'POST_STATUS_SUCCES',
    POST_STATUS_FAILED = 'POST_STATUS_FAILED';

export function addMainRes(id) {
    window.location.reload()
    return dispatch => {
        dispatch({
            type: POST_STATUS
        })
        return fetch(`http://localhost:8080/api/addresults?id=${id}`, {method: 'POST'})
            .then(response => {
                if (response.status === 200)
                    dispatch({
                        type: POST_STATUS_SUCCES
                    })
                else alert(`error:${response.message}`)
            })
    }
}

export function addBioRes(id) {
    window.location.reload()
    return dispatch => {
        dispatch({
            type: POST_STATUS
        })
        return fetch(`http://localhost:8080/api/addresults?id=${id}`, {method: 'POST'})
            .then(response => {
                if (response.status === 200)
                    dispatch({
                        type: POST_STATUS_SUCCES
                    })
                else alert(`error:${response.message}`)
            })
    }
}

export function changeDoc(id) {
    window.location.reload()
    return dispatch => {
        dispatch({
            type: POST_STATUS
        })
        return fetch(`http://localhost:8080/api/userid=${id}`, {method: 'POST'})
            .then(response => {
                if (response.status === 200)
                    dispatch({
                        type: POST_STATUS_SUCCES
                    })
                else alert(`error:${response.message}`)
            })
    }
}



