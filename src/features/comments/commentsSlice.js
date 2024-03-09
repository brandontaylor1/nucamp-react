import { COMMENTS } from "../../app/shared/COMMENTS";   

export const selectCommentsById = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId))
}