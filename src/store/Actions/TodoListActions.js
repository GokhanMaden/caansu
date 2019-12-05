// import axios from 'axios';
import { GET_TODO_LIST } from '../constants'

export function getTodoList() {

  // const request = axios.get(`${PRODUCT_SERVER}/article_by_id?id=${id}&type=single`)
  //   .then(response => {
  //     return response.data[0]
  //   })
    const request = [
      {
        noteId: 1,
        status: true,
        content: "Gökhan Cansu"
      },
      {
        noteId: 2,
        status: true,
        content: "Gökhan Maden"
      },
      {
        noteId: 3,
        status: false,
        content: "Gökhan Cansu"
      }
    ]

    return {
      type: GET_TODO_LIST,
      payload: request
    }
}