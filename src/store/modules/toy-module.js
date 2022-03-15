import { toyService } from "../../services/toy-service.js"

export default {
    state: {
        toys: [],
        isLoading: false,
        filterBy: null,
    },
    getters: {
        isLoading(state) {
            return state.isLoading
        },
        getToys(state) {
            return state.toys
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            state.toys.splice(idx, 1)
        },
        saveToy(state, { toy }) {
            const idx = state.toys.findIndex((currtoy) => currtoy._id === toy._id)
            if (idx !== -1) state.toys.splice(idx, 1, toy)
            else state.toys.push(toy)
          },
          setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
          },

    },
    actions: {
        loadToys({context,commit, state}) {
            commit({ type: 'setIsLoading', isLoading: true })
            return toyService.query(state.filterBy)
                .then(toys => {
                    commit({ type: 'setToys', toys })
                })
                .catch(err => {
                    console.error('Cannot Load Toys', err)
                    throw err
                })
                .finally(() => {
                    commit({ type: 'setIsLoading', isLoading: false })
                })
        },
        setFilter({ commit , dispatch}, { filterBy }) {
            commit({ type: 'setFilter', filterBy });
            dispatch({type: 'loadToys'});
          },
    

        removeToy(context, payload) {
            return toyService.remove(payload.toyId)
                .then(() => {
                    context.commit(payload)
                })
                .catch(err => {
                    console.error('Cannot remove toy', err)
                    throw err
                })
        },
        saveToy({ commit }, { toy }) {
            toyService.save(toy).then((toy) => {
              commit({ type: 'saveToy', toy })
            })
          },
        },
        
  
    
}
// updateAvg(state) {
//     var adultAvg = {
//       sum: 0,
//       count: 0,
//     }
//     var funnyAvg = {
//       sum: 0,
//       count: 0,
//     }
//     var educationalAvg = {
//       sum: 0,
//       count: 0,
//     }

//     state.toys.forEach((toy) => {
//       if (toy.type === 'Adult') {
//         adultAvg.sum += toy.price
//         adultAvg.count++
//       }
//       else if (toy.type === 'Funny') {
//         funnyAvg.sum += toy.price
//         funnyAvg.count++
//       }
//       else if (toy.type === 'Educational') {
//         educationalAvg.sum += toy.price
//         educationalAvg.count++
//       }
//     })

//     state.byType.Adult = (+adultAvg.sum / +adultAvg.count).toFixed(2)
//     state.byType.Funny = (+funnyAvg.sum / +funnyAvg.count).toFixed(2)
//     state.byType.Educational =( +educationalAvg.sum / +educationalAvg.count).toFixed(2)
//   },
