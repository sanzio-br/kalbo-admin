import blogsListReducer from './features/blogsfeatures'
import eventsListReducer from './features/eventsfeature'
const RootReducer={
    blogs: blogsListReducer,
    events: eventsListReducer,
}
export default RootReducer;